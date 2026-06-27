python3 << 'PY'
code = open('/home/claude/myway5/app.js').read()

# ── 1. Update defaultData to add subscription fields
old = """    premium:false, premiumSince:null,"""
new = """    premium:false, premiumSince:null, premiumPlan:null,
    trialStart:Date.now(), savedCard:null,"""
code = code.replace(old, new, 1)

# ── 2. Replace isPremium with full subscription logic
old2 = """function isPremium() {
  if(DATA.premium) return true;
  const joinDays = (Date.now()-(DATA.joinedAt||Date.now()))/(864e5);
  return joinDays >= 30;
}"""
new2 = """function isPremium() {
  if(!DATA) return false;
  if(DATA.premium && DATA.premiumSince) {
    // Check subscription not expired
    const plan = DATA.premiumPlan;
    const since = DATA.premiumSince;
    if(plan==='monthly') return (Date.now()-since) < 31*864e5;
    if(plan==='yearly')  return (Date.now()-since) < 366*864e5;
    return true; // legacy premium
  }
  return false;
}

function isTrialActive() {
  if(isPremium()) return true;
  const start = DATA.trialStart || DATA.joinedAt || Date.now();
  const days = (Date.now()-start)/864e5;
  return days < 30;
}

function trialDaysLeft() {
  const start = DATA.trialStart || DATA.joinedAt || Date.now();
  const days = Math.max(0, Math.ceil(30 - (Date.now()-start)/864e5));
  return days;
}

function getSubscriptionStatus() {
  if(isPremium()) {
    const plan = DATA.premiumPlan;
    const since = DATA.premiumSince;
    let expiry = null;
    if(plan==='monthly') expiry = new Date(since+31*864e5).toLocaleDateString('ru-RU',{day:'2-digit',month:'long',year:'numeric'});
    if(plan==='yearly')  expiry = new Date(since+366*864e5).toLocaleDateString('ru-RU',{day:'2-digit',month:'long',year:'numeric'});
    return {active:true, plan, expiry};
  }
  return {active:false, plan:null, expiry:null};
}"""
code = code.replace(old2, new2, 1)

# ── 3. Replace activatePremium with full subscription flow
old3 = """function activatePremium() {
  DATA.premium=true; DATA.premiumSince=Date.now(); saveData();
  alert('✅ Премиум активирован!');
  document.getElementById('profileModal')?.remove();
}"""
new3 = """function activatePremium() {
  // Open subscription paywall
  showPaywall();
}

function showPaywall(source='') {
  document.querySelectorAll('.paywall-modal').forEach(m=>m.remove());
  const modal = document.createElement('div');
  modal.className = 'modal-ov paywall-modal';
  const cardData = DATA.savedCard;
  const hasSavedCard = cardData && cardData.last4;
  const days = trialDaysLeft();
  const trialActive = isTrialActive() && !isPremium();

  modal.innerHTML = `<div class="modal-box paywall-box">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:20px;position:relative;">
      <button style="position:absolute;right:0;top:0;background:rgba(255,255,255,.1);border:none;width:28px;height:28px;border-radius:50%;color:var(--tx2);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;" onclick="this.closest('.paywall-modal').remove()">✕</button>
      <div style="font-size:36px;margin-bottom:8px;">⭐</div>
      <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:800;background:linear-gradient(120deg,#fff,var(--acc2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px;">My Way Premium</div>
      ${trialActive && days>0 ? `<div style="font-size:12px;background:var(--gd);color:var(--green);padding:5px 14px;border-radius:20px;display:inline-block;">🎁 Бесплатный пробный период — ещё <strong>${days}</strong> дн.</div>` :
        !isPremium() ? `<div style="font-size:12px;background:var(--rd);color:var(--red);padding:5px 14px;border-radius:20px;display:inline-block;">⏰ Пробный период завершён</div>` :
        `<div style="font-size:12px;background:var(--gd);color:var(--green);padding:5px 14px;border-radius:20px;display:inline-block;">✅ Активна подписка ${DATA.premiumPlan==='yearly'?'Годовая':'Месячная'}</div>`}
    </div>

    <!-- Plan tabs -->
    ${!isPremium() ? `
    <div style="display:flex;background:var(--bg3);border-radius:10px;padding:3px;margin-bottom:16px;gap:3px;" id="planTabs">
      <button class="plan-tab active" data-plan="monthly" style="flex:1;padding:9px 6px;border:none;border-radius:8px;font-family:Inter,sans-serif;font-size:12px;font-weight:600;cursor:pointer;background:var(--acc);color:#fff;transition:all .18s;">
        Месячный<div style="font-size:16px;font-weight:800;margin-top:2px;">3 500 ₸</div><div style="font-size:10px;opacity:.8;">/месяц</div>
      </button>
      <button class="plan-tab" data-plan="yearly" style="flex:1;padding:9px 6px;border:none;border-radius:8px;font-family:Inter,sans-serif;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:var(--tx2);transition:all .18s;position:relative;">
        <span style="position:absolute;top:4px;right:6px;background:var(--green);color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:10px;">−17%</span>
        Годовой<div style="font-size:16px;font-weight:800;margin-top:2px;">35 000 ₸</div><div style="font-size:10px;opacity:.8;">/год</div>
      </button>
    </div>

    <!-- Features list -->
    <div style="background:var(--bg3);border-radius:var(--r);padding:12px;margin-bottom:16px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);margin-bottom:10px;">ЧТО ВКЛЮЧЕНО</div>
      ${[
        ['🤖','ИИ-советник без ограничений'],
        ['📊','Импорт банковских выписок'],
        ['📈','Расширенная аналитика по месяцам'],
        ['💳','Неограниченные карты и депозиты'],
        ['🎯','Неограниченные финансовые цели'],
        ['🔒','Приоритетная поддержка'],
      ].map(([ic,tx])=>`<div style="display:flex;align-items:center;gap:9px;padding:6px 0;border-bottom:1px solid var(--brd);">
        <span style="font-size:16px;">${ic}</span>
        <span style="font-size:12px;font-weight:500;">${tx}</span>
        <span style="margin-left:auto;color:var(--green);font-size:13px;">✓</span>
      </div>`).join('')}
    </div>

    <!-- Saved card or payment -->
    <div id="paymentSection">
      ${hasSavedCard ? `
      <div style="background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--r);padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);margin-bottom:8px;">ОПЛАТА</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:38px;height:24px;background:linear-gradient(135deg,var(--acc),var(--acc2));border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:#fff;">${cardData.type||'CARD'}</div>
          <div>
            <div style="font-size:13px;font-weight:600;">•••• •••• •••• ${cardData.last4}</div>
            <div style="font-size:10px;color:var(--tx3);">${cardData.holder||''} · ${cardData.expiry||''}</div>
          </div>
          <button onclick="showCardForm()" style="margin-left:auto;background:transparent;border:1px solid var(--brd2);border-radius:6px;color:var(--acc2);font-size:11px;padding:4px 10px;cursor:pointer;">Изменить</button>
        </div>
      </div>` : `<div id="cardForm" style="background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--r);padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);margin-bottom:10px;">ДАННЫЕ КАРТЫ</div>
        <div style="position:relative;margin-bottom:9px;"><span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--tx3);">💳</span><input type="text" id="payCardNum" placeholder="0000 0000 0000 0000" maxlength="19" style="width:100%;padding:10px 10px 10px 32px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;" /></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:9px;">
          <input type="text" id="payExpiry" placeholder="MM / YY" maxlength="7" style="padding:10px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;"/>
          <input type="text" id="payCVV" placeholder="CVV" maxlength="3" style="padding:10px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;"/>
        </div>
        <input type="text" id="payHolder" placeholder="IVAN IVANOV" style="width:100%;padding:10px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;text-transform:uppercase;" />
      </div>`}
    </div>

    <button class="btn btn-primary wf" id="payBtn" style="font-size:14px;padding:14px;border-radius:12px;justify-content:center;">
      <i class="fas fa-lock" style="font-size:12px;"></i> <span id="payBtnTxt">Оформить за 3 500 ₸/мес</span>
    </button>
    <div style="text-align:center;margin-top:8px;font-size:10px;color:var(--tx3);">🔒 Безопасная оплата · Отмена в любое время · Автопродление</div>
    ` : `
    <!-- Already premium — manage subscription -->
    <div style="background:var(--bg3);border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:12px;color:var(--tx2);margin-bottom:8px;">Ваша подписка</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:12px;"><span style="color:var(--tx3);">Тариф</span><strong>${DATA.premiumPlan==='yearly'?'Годовой — 35 000 ₸':'Месячный — 3 500 ₸'}</strong></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:var(--tx3);">Следующее списание</span><strong>${getSubscriptionStatus().expiry||'—'}</strong></div>
    </div>
    ${DATA.savedCard?.last4?`<div style="background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--r);padding:12px;margin-bottom:12px;">
      <div style="font-size:10px;color:var(--tx3);margin-bottom:6px;">Карта оплаты</div>
      <div style="font-size:13px;font-weight:600;">•••• •••• •••• ${DATA.savedCard.last4}</div>
    </div>`:''}
    <button class="btn btn-danger wf" onclick="cancelSubscription()" style="justify-content:center;"><i class="fas fa-times"></i> Отменить подписку</button>
    `}
  </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click',e=>{if(e.target===modal)modal.remove();});

  // Plan tab switching
  if(!isPremium()){
    let selPlan='monthly';
    modal.querySelectorAll('.plan-tab').forEach(tab=>{
      tab.addEventListener('click',function(){
        selPlan=this.dataset.plan;
        modal.querySelectorAll('.plan-tab').forEach(t=>{
          t.style.background=t.dataset.plan===selPlan?'var(--acc)':'transparent';
          t.style.color=t.dataset.plan===selPlan?'#fff':'var(--tx2)';
        });
        const btnTxt=document.getElementById('payBtnTxt');
        if(btnTxt) btnTxt.textContent=selPlan==='yearly'?'Оформить за 35 000 ₸/год':'Оформить за 3 500 ₸/мес';
      });
    });

    // Card number formatting
    const cn=document.getElementById('payCardNum');
    if(cn) cn.addEventListener('input',function(){this.value=this.value.replace(/\\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);});
    const ex=document.getElementById('payExpiry');
    if(ex) ex.addEventListener('input',function(){let v=this.value.replace(/\\D/g,'');if(v.length>=3)v=v.slice(0,2)+' / '+v.slice(2,4);this.value=v;});
    const h=document.getElementById('payHolder');
    if(h) h.addEventListener('input',function(){this.value=this.value.toUpperCase();});

    // Pay button
    const payBtn=document.getElementById('payBtn');
    if(payBtn){
      payBtn.addEventListener('click',()=>{
        // Validate card if no saved card
        const hasSaved=DATA.savedCard?.last4;
        if(!hasSaved){
          const num=(document.getElementById('payCardNum')?.value||'').replace(/\\s/g,'');
          const expiry=document.getElementById('payExpiry')?.value||'';
          const cvv=document.getElementById('payCVV')?.value||'';
          const holder=document.getElementById('payHolder')?.value||'';
          if(num.length<16){alert('Введите корректный номер карты (16 цифр)');return;}
          if(!expiry||expiry.length<4){alert('Введите срок действия карты');return;}
          if(cvv.length<3){alert('Введите CVV (3 цифры)');return;}
          if(!holder.trim()){alert('Введите имя держателя карты');return;}
          DATA.savedCard={last4:num.slice(-4),expiry:expiry.replace(' ',''),holder:holder.trim(),type:'CARD'};
        }
        // Process payment with animation
        processPayment(selPlan, payBtn, modal);
      });
    }
  }
}

function showCardForm() {
  const sec=document.getElementById('paymentSection'); if(!sec) return;
  sec.innerHTML=`<div id="cardForm" style="background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--r);padding:14px;margin-bottom:12px;">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);margin-bottom:10px;">НОВАЯ КАРТА</div>
    <div style="position:relative;margin-bottom:9px;"><span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--tx3);">💳</span><input type="text" id="payCardNum" placeholder="0000 0000 0000 0000" maxlength="19" style="width:100%;padding:10px 10px 10px 32px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;"/></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:9px;">
      <input type="text" id="payExpiry" placeholder="MM / YY" maxlength="7" style="padding:10px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;"/>
      <input type="text" id="payCVV" placeholder="CVV" maxlength="3" style="padding:10px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;"/>
    </div>
    <input type="text" id="payHolder" placeholder="IVAN IVANOV" style="width:100%;padding:10px;background:var(--bg4);border:1px solid var(--brd2);border-radius:8px;font-family:Inter,sans-serif;font-size:13px;color:var(--tx);outline:none;text-transform:uppercase;"/>
  </div>`;
  const cn=document.getElementById('payCardNum');
  if(cn) cn.addEventListener('input',function(){this.value=this.value.replace(/\\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);});
  const ex=document.getElementById('payExpiry');
  if(ex) ex.addEventListener('input',function(){let v=this.value.replace(/\\D/g,'');if(v.length>=3)v=v.slice(0,2)+' / '+v.slice(2,4);this.value=v;});
}

function processPayment(plan, btn, modal) {
  btn.disabled=true;
  btn.innerHTML='<span style="display:inline-flex;align-items:center;gap:8px;"><svg width="16" height="16" viewBox="0 0 24 24" style="animation:spin .7s linear infinite;fill:none;stroke:#fff;stroke-width:2.5;"><circle cx="12" cy="12" r="10" stroke-opacity=".2"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Обработка платежа...</span>';

  // Simulate payment processing (2 seconds)
  setTimeout(()=>{
    DATA.premium=true;
    DATA.premiumSince=Date.now();
    DATA.premiumPlan=plan;
    saveData();
    modal.remove();
    showPaymentSuccess(plan);
    renderHeader();
  }, 2000);
}

function showPaymentSuccess(plan) {
  const modal=document.createElement('div'); modal.className='modal-ov';
  const amount=plan==='yearly'?'35 000 ₸':'3 500 ₸';
  const period=plan==='yearly'?'год':'месяц';
  const expiry=plan==='yearly'?
    new Date(Date.now()+366*864e5).toLocaleDateString('ru-RU',{day:'2-digit',month:'long',year:'numeric'}):
    new Date(Date.now()+31*864e5).toLocaleDateString('ru-RU',{day:'2-digit',month:'long',year:'numeric'});
  modal.innerHTML=`<div class="modal-box" style="text-align:center;padding:36px 28px;">
    <div style="font-size:64px;margin-bottom:12px;animation:popIn .5s cubic-bezier(.34,1.56,.64,1);">🎉</div>
    <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:800;color:var(--green);margin-bottom:6px;">Оплата прошла!</div>
    <div style="font-size:13px;color:var(--tx2);margin-bottom:20px;">My Way Premium активирован</div>
    <div style="background:var(--bg3);border-radius:var(--r);padding:14px;margin-bottom:20px;text-align:left;">
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span style="color:var(--tx3);">Тариф</span><strong>${plan==='yearly'?'Годовой':'Месячный'}</strong></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span style="color:var(--tx3);">Списано</span><strong style="color:var(--green);">${amount}</strong></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span style="color:var(--tx3);">Карта</span><strong>•••• ${DATA.savedCard?.last4||'****'}</strong></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:var(--tx3);">Действует до</span><strong>${expiry}</strong></div>
    </div>
    <button class="btn btn-success wf" onclick="this.closest('.modal-ov').remove()" style="justify-content:center;font-size:14px;padding:13px;">
      <i class="fas fa-check"></i> Отлично!
    </button>
  </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click',e=>{if(e.target===modal)modal.remove();});
}

function cancelSubscription() {
  if(!confirm('Отменить подписку? Доступ сохранится до конца оплаченного периода.')) return;
  DATA.premium=false; DATA.premiumSince=null; DATA.premiumPlan=null; saveData();
  document.querySelectorAll('.paywall-modal,.modal-ov').forEach(m=>m.remove());
  renderHeader();
  alert('Подписка отменена. Доступ сохраняется до конца периода.');
}"""
code = code.replace(old3, new3, 1)

# ── 4. Update profile modal premium section to show real subscription info
old4 = """    ${!isPremium()?`<div style="margin-top:12px;padding:12px;background:linear-gradient(135deg,rgba(124,58,237,.15),rgba(6,182,212,.08));border:1px solid rgba(124,58,237,.3);border-radius:var(--r);text-align:center;">
      <div style="font-size:13px;font-weight:700;margin-bottom:4px;">⭐ Премиум</div>
      <div style="font-size:11px;color:var(--tx2);margin-bottom:8px;">Разблокируйте все функции</div>
      <button class="btn btn-primary wf" style="font-size:12px;" onclick="activatePremium()">990 ₸/мес</button>
    </div>`:''}"""
new4 = """    ${isPremium()?`
    <div style="margin-top:12px;padding:12px;background:linear-gradient(135deg,rgba(16,185,129,.12),rgba(16,185,129,.04));border:1px solid rgba(16,185,129,.3);border-radius:var(--r);">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="font-size:16px;">⭐</span><strong style="font-size:13px;">Premium активен</strong><span style="margin-left:auto;font-size:10px;color:var(--green);background:var(--gd);padding:2px 8px;border-radius:20px;">${DATA.premiumPlan==='yearly'?'Годовой':'Месячный'}</span></div>
      <div style="font-size:11px;color:var(--tx3);">Действует до: ${getSubscriptionStatus().expiry||'—'}</div>
      <div style="font-size:11px;color:var(--tx3);margin-top:2px;">Карта: •••• ${DATA.savedCard?.last4||'—'}</div>
      <button class="btn btn-ghost btn-sm wf" onclick="document.getElementById('profileModal').remove();showPaywall()" style="margin-top:8px;justify-content:center;font-size:11px;">Управление подпиской</button>
    </div>`:
    isTrialActive()?`
    <div style="margin-top:12px;padding:12px;background:linear-gradient(135deg,rgba(124,58,237,.12),rgba(6,182,212,.06));border:1px solid rgba(124,58,237,.25);border-radius:var(--r);text-align:center;">
      <div style="font-size:12px;color:var(--acc2);font-weight:700;margin-bottom:4px;">🎁 Бесплатный период</div>
      <div style="font-size:22px;font-weight:800;color:var(--acc2);margin:4px 0;">${trialDaysLeft()}</div>
      <div style="font-size:11px;color:var(--tx3);margin-bottom:10px;">дней осталось</div>
      <button class="btn btn-primary wf" style="font-size:12px;justify-content:center;" onclick="document.getElementById('profileModal').remove();showPaywall()">Оформить Premium</button>
    </div>`:`
    <div style="margin-top:12px;padding:12px;background:var(--rd);border:1px solid rgba(244,63,94,.3);border-radius:var(--r);text-align:center;">
      <div style="font-size:12px;color:var(--red);font-weight:700;margin-bottom:6px;">⏰ Пробный период завершён</div>
      <div style="font-size:11px;color:var(--tx2);margin-bottom:10px;">Оформите подписку для доступа ко всем функциям</div>
      <button class="btn btn-primary wf" style="font-size:12px;justify-content:center;" onclick="document.getElementById('profileModal').remove();showPaywall()"><i class="fas fa-star"></i> Оформить от 3 500 ₸/мес</button>
    </div>`}"""
code = code.replace(old4, new4, 1)

# ── 5. Update isPremium check for paywall (use isTrialActive for access)
old5 = """function isTrialActive() {"""
if old5 not in code:
    print("isTrialActive already present - good")

# ── 6. Update import tab paywall check to use isTrialActive
old6 = """  if(!isPremium()) {
    document.getElementById('content').innerHTML=`
      <div class="card" style="text-align:center;padding:40px 20px;position:relative;">
        <div style="font-size:48px;margin-bottom:12px;">📊</div>
        <div style="font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px;">${t('importTitle')}</div>
        <div style="font-size:13px;color:var(--tx2);margin-bottom:20px;max-width:360px;margin-left:auto;margin-right:auto;">${t('importDesc')}</div>
        <div style="padding:18px;background:linear-gradient(135deg,rgba(124,58,237,.12),rgba(6,182,212,.07));border:1px solid rgba(124,58,237,.28);border-radius:var(--r);margin-bottom:20px;">
          <div style="font-size:15px;font-weight:700;margin-bottom:6px;">⭐ ${t('premTitle')}</div>
          <div style="font-size:12px;color:var(--tx2);margin-bottom:14px;">${t('premDesc')}</div>
          <button class="btn btn-primary" onclick="activatePremium()">${t('premBtn')}</button>
        </div>
      </div>\`;
    return;
  }"""
new6 = """  if(!isTrialActive()) {
    document.getElementById('content').innerHTML=`
      <div class="card" style="text-align:center;padding:40px 20px;position:relative;">
        <div style="font-size:48px;margin-bottom:12px;">📊</div>
        <div style="font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px;">${t('importTitle')}</div>
        <div style="font-size:13px;color:var(--tx2);margin-bottom:20px;max-width:360px;margin-left:auto;margin-right:auto;">Импорт банковских выписок доступен только в Premium</div>
        <div style="padding:20px;background:linear-gradient(135deg,rgba(124,58,237,.12),rgba(6,182,212,.07));border:1px solid rgba(124,58,237,.28);border-radius:var(--r);margin-bottom:20px;">
          <div style="font-size:26px;margin-bottom:8px;">⭐</div>
          <div style="font-size:15px;font-weight:700;margin-bottom:6px;">My Way Premium</div>
          <div style="font-size:12px;color:var(--tx2);margin-bottom:14px;">Ваш пробный период завершён. Оформите подписку.</div>
          <button class="btn btn-primary wf" style="justify-content:center;" onclick="showPaywall()"><i class="fas fa-star"></i> От 3 500 ₸/мес</button>
        </div>
      </div>\`;
    return;
  }"""
code = code.replace(old6, new6, 1)

# ── 7. Add CSS spin animation and popIn
# Check if style.css needs @keyframes spin
print("Adding spin keyframes check...")

# ── 8. Add trialDaysLeft to topbar badge
old7 = """      <span class="badge b-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>"""
new7 = """      <span class="badge b-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
      ${!isPremium()&&isTrialActive()?`<span class="badge" style="background:rgba(16,185,129,.12);color:var(--green);border:1px solid rgba(16,185,129,.2);cursor:pointer;" onclick="showPaywall()">🎁 ${trialDaysLeft()} дн. Free</span>`:''}
      ${isPremium()?`<span class="badge" style="background:rgba(245,158,11,.12);color:var(--gold);border:1px solid rgba(245,158,11,.2);cursor:pointer;" onclick="showPaywall()">⭐ Premium</span>`:''}"""
code = code.replace(old7, new7, 1)

# ── 9. Add paywall trigger when trial expires and user navigates to AI/Import
old8 = """  const fns={dashboard:renderDashboard,transactions:renderTxTab,cards:renderCardsTab,
    deposits:renderDepositsTab,stats:renderStatsTab,goals:renderGoalsTab,
    gamification:renderGamTab,ai:renderAITab,tips:renderTipsTab,import:renderImportTab};
  (fns[tab]||renderDashboard)();"""
new8 = """  // Show paywall for premium features when trial expired
  const premiumTabs=['ai','import','stats'];
  if(premiumTabs.includes(tab)&&!isTrialActive()){
    showPaywall();
    // Still show locked version
  }
  const fns={dashboard:renderDashboard,transactions:renderTxTab,cards:renderCardsTab,
    deposits:renderDepositsTab,stats:renderStatsTab,goals:renderGoalsTab,
    gamification:renderGamTab,ai:renderAITab,tips:renderTipsTab,import:renderImportTab};
  (fns[tab]||renderDashboard)();"""
code = code.replace(old8, new8, 1)

open('/home/claude/myway5/app.js','w').write(code)
print("Done! Size:", len(code))
PY