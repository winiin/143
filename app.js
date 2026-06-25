cat > /tmp/app_new.js << 'ENDOFFILE'
// ================================================================
// ВАЛЮТЫ
// ================================================================
const CURRENCIES = {
    KZT: { symbol: '₸', name: 'Тенге', flag: '🇰🇿', rate: 1 },
    RUB: { symbol: '₽', name: 'Рубль', flag: '🇷🇺', rate: 0.21 },
    USD: { symbol: '$', name: 'Доллар', flag: '🇺🇸', rate: 0.0022 },
    EUR: { symbol: '€', name: 'Евро', flag: '🇪🇺', rate: 0.002 },
    CNY: { symbol: '¥', name: 'Юань', flag: '🇨🇳', rate: 0.016 },
};

function formatAmount(amount, currency) {
    const c = CURRENCIES[currency] || CURRENCIES.KZT;
    const converted = amount * c.rate;
    if (converted >= 1000000) return c.symbol + (converted / 1000000).toFixed(1) + 'M';
    if (converted >= 1000) return c.symbol + (converted / 1000).toFixed(1) + 'K';
    return c.symbol + Math.round(converted).toLocaleString();
}

// ================================================================
// АККАУНТЫ
// ================================================================
let CURRENT_USER = null;
let CURRENT_CURRENCY = 'KZT';

function getUsers() {
    try { return JSON.parse(localStorage.getItem('finlife_users') || '{}'); } catch(e) { return {}; }
}
function saveUsers(users) { localStorage.setItem('finlife_users', JSON.stringify(users)); }

function getUserData(email) {
    try {
        const raw = localStorage.getItem('finlife_data_' + email);
        if (raw) return JSON.parse(raw);
    } catch(e) {}
    return createDefaultData();
}
function saveUserData(email, data) {
    try { localStorage.setItem('finlife_data_' + email, JSON.stringify(data)); } catch(e) {}
}

function createDefaultData() {
    return {
        transactions: [
            { id: 1, text: 'Зарплата', amount: 200000, type: 'income', category: 'Доход', date: Date.now() - 86400000*5, cardId: null },
            { id: 2, text: 'Продукты', amount: 8500, type: 'expense', category: 'Еда', date: Date.now() - 86400000*4, cardId: null },
            { id: 3, text: 'Такси', amount: 3200, type: 'expense', category: 'Транспорт', date: Date.now() - 86400000*3, cardId: null },
            { id: 4, text: 'Кино', amount: 2500, type: 'expense', category: 'Развлечения', date: Date.now() - 86400000*2, cardId: null },
            { id: 5, text: 'Кафе', amount: 1800, type: 'expense', category: 'Еда', date: Date.now() - 86400000, cardId: null },
        ],
        goals: [
            { id: 1, name: 'MacBook Pro', target: 500000, saved: 190000, emoji: '💻' },
            { id: 2, name: 'Квартира', target: 5000000, saved: 450000, emoji: '🏠' },
        ],
        cards: [],
        activeGoalId: 1,
        level: 1, xp: 45, rank: 'Bronze', nextTxId: 6,
        quests: [
            { id: 1, title: 'Без кофе', desc: 'Не трать на кофе сегодня', done: false, reward: 50 },
            { id: 2, title: 'Проверь подписки', desc: 'Найди ненужную подписку', done: false, reward: 100 },
            { id: 3, title: 'Сэкономь 10%', desc: 'Потрать на 10% меньше вчера', done: false, reward: 75 },
            { id: 4, title: 'Запиши все траты', desc: 'Добавь 5 транзакций за день', done: false, reward: 50 },
        ],
        achievements: { first_tx:false, five_tx:false, ten_tx:false, first_goal:false, goal_50:false, quest_master:false, saver:false, level_5:false, first_card:false }
    };
}

// ================================================================
// АВТОРИЗАЦИЯ
// ================================================================
function initAuth() {
    const users = getUsers();
    if (!users['demo@finlife.kz']) {
        users['demo@finlife.kz'] = { name: 'Демо Пользователь', email: 'demo@finlife.kz', password: 'demo123', avatar: 'Д' };
        saveUsers(users);
    }
    const session = localStorage.getItem('finlife_session');
    if (session && users[session]) { loginSuccess(users[session]); return; }

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('loginForm').classList.toggle('hidden', tab.dataset.auth !== 'login');
            document.getElementById('registerForm').classList.toggle('hidden', tab.dataset.auth !== 'register');
        });
    });
    document.getElementById('loginBtn').addEventListener('click', doLogin);
    document.getElementById('registerBtn').addEventListener('click', doRegister);
    ['loginEmail','loginPassword'].forEach(id => {
        document.getElementById(id).addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
    });
}

function doLogin() {
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const users = getUsers();
    const user = users[email];
    if (!user || user.password !== password) { showAuthError('Неверный email или пароль'); return; }
    localStorage.setItem('finlife_session', email);
    loginSuccess(user);
}

function doRegister() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const password = document.getElementById('regPassword').value;
    if (!name) { showAuthError('Введите имя'); return; }
    if (!email.includes('@')) { showAuthError('Введите корректный email'); return; }
    if (password.length < 6) { showAuthError('Пароль минимум 6 символов'); return; }
    const users = getUsers();
    if (users[email]) { showAuthError('Email уже зарегистрирован'); return; }
    users[email] = { name, email, password, avatar: name.charAt(0).toUpperCase() };
    saveUsers(users);
    localStorage.setItem('finlife_session', email);
    loginSuccess(users[email]);
}

function showAuthError(msg) {
    let err = document.querySelector('.auth-error');
    if (!err) { err = document.createElement('div'); err.className = 'auth-error'; document.querySelector('.auth-box').appendChild(err); }
    err.textContent = '❌ ' + msg;
    setTimeout(() => err.remove(), 3000);
}

function loginSuccess(user) {
    CURRENT_USER = user;
    DATA = getUserData(user.email);
    CURRENT_CURRENCY = localStorage.getItem('finlife_currency_' + user.email) || 'KZT';
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    renderAll();
}

function logout() {
    localStorage.removeItem('finlife_session');
    CURRENT_USER = null; DATA = null;
    document.getElementById('app').classList.add('hidden');
    document.getElementById('authScreen').classList.remove('hidden');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

// ================================================================
// ДАННЫЕ
// ================================================================
let DATA = null;
function saveData() { if (CURRENT_USER) saveUserData(CURRENT_USER.email, DATA); }

// ================================================================
// БАНКОВСКИЕ КАРТЫ
// ================================================================
function addCard(cardData) {
    const card = {
        id: Date.now(), name: cardData.name,
        number: String(cardData.number).replace(/\D/g,'').slice(-4) || '0000',
        bank: cardData.bank, color: cardData.color || '#0ea5e9',
        currency: cardData.currency || 'KZT',
        balance: parseFloat(cardData.balance) || 0,
        type: cardData.type || 'debit', emoji: cardData.emoji || '💳', createdAt: Date.now()
    };
    DATA.cards.push(card);
    DATA.achievements.first_card = true;
    saveData(); return card;
}

function deleteCard(id) { DATA.cards = DATA.cards.filter(c => c.id !== id); saveData(); }
function getCardById(id) { return DATA.cards.find(c => c.id === id); }

function updateCardBalance(cardId, amount, type) {
    const card = getCardById(cardId); if (!card) return;
    if (type === 'expense') card.balance -= amount;
    else if (type === 'income') card.balance += amount;
    saveData();
}

// ================================================================
// ПАРСЕР ТРАНЗАКЦИЙ
// ================================================================
function parseTransaction(text) {
    text = text.trim();
    const numbers = text.match(/\d+[\s\d]*/g);
    if (!numbers) return null;
    const amount = parseInt(numbers[0].replace(/\s/g,''), 10);
    if (isNaN(amount) || amount <= 0) return null;
    let description = text.replace(/\d+[\s\d]*/g,'').trim() || 'Покупка';
    const lower = description.toLowerCase();
    let type = 'expense', category = 'Прочее';
    const incKw = ['зарплат','зп','доход','премия','аванс','кешбэк','возврат','пополнение','пришло','приход'];
    for (const kw of incKw) { if (lower.includes(kw)) { type='income'; category='Доход'; break; } }
    if (type === 'expense') {
        const cats = {
            'Еда':['кофе','обед','еда','продукт','ресторан','суши','доставк','пицц','бургер','перекус'],
            'Транспорт':['такси','бензин','заправк','транспорт','метро','авто','машина','uber','яндекс'],
            'Развлечения':['кино','игр','подписк','развлеч','бар','клуб','концерт','netflix','spotify'],
            'Жильё':['квартир','аренд','коммун','жкх','интернет','свет','газ'],
            'Инвестиции':['инвест','акци','облигац','фонд','вклад','депозит'],
            'Одежда':['одежд','обувь','магазин','zara','nike','adidas'],
            'Здоровье':['аптек','врач','клиник','лекарств','медицин','фитнес'],
        };
        for (const [cat, kws] of Object.entries(cats)) {
            for (const kw of kws) { if (lower.includes(kw)) { category=cat; break; } }
            if (category !== 'Прочее') break;
        }
    }
    return { text: description.charAt(0).toUpperCase() + description.slice(1), amount, type, category, date: Date.now() };
}

// ================================================================
// ДОБАВЛЕНИЕ ТРАНЗАКЦИИ
// ================================================================
function addTransaction(raw, cardId = null) {
    const parsed = parseTransaction(raw);
    if (!parsed) { alert('❌ Не распознано. Пример: "Обед 1200"'); return false; }
    parsed.id = DATA.nextTxId++; parsed.cardId = cardId;
    DATA.transactions.push(parsed);
    DATA.xp += 5;
    if (DATA.xp >= 100) { DATA.level += Math.floor(DATA.xp/100); DATA.xp = DATA.xp%100; updateRank(); }
    if (cardId) updateCardBalance(cardId, parsed.amount, parsed.type);
    checkAchievements(); saveData();
    const activeTab = document.querySelector('.nav-btn.active');
    renderActiveTab(activeTab ? activeTab.dataset.tab : 'dashboard');
    renderHeader(); return true;
}

function updateRank() {
    const ranks = ['Bronze','Silver','Gold','Platinum','Diamond','Legend'];
    const xpReq = [0,200,500,1000,2000,5000];
    let i = 0;
    for (let j = ranks.length-1; j >= 0; j--) { if (DATA.xp >= xpReq[j]) { i=j; break; } }
    DATA.rank = ranks[i];
}

// ================================================================
// ЦЕЛИ
// ================================================================
function addGoal(name, target) {
    if (!name.trim() || target <= 0) { alert('Введите название и сумму'); return; }
    const emojis = ['💻','🏠','🚗','✈️','🎓','💎','🏖️','🎨','🚀','🌍'];
    DATA.goals.push({ id: Date.now(), name: name.trim(), target, saved: 0, emoji: emojis[Math.floor(Math.random()*emojis.length)] });
    checkAchievements(); saveData(); renderGoalsTab(); renderHeader();
}

function setActiveGoal(id) { DATA.activeGoalId = id; saveData(); renderGoalsList(); }

function contributeToGoal(id, amount) {
    const goal = DATA.goals.find(g => g.id === id); if (!goal) return;
    const totalIncome = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const totalExpense = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    if ((totalIncome-totalExpense) < amount) { alert('❌ Недостаточно средств!'); return; }
    goal.saved += amount;
    DATA.transactions.push({ id:DATA.nextTxId++, text:`Вклад: ${goal.name}`, amount, type:'expense', category:'Инвестиции', date:Date.now(), cardId:null });
    checkAchievements(); saveData(); renderGoalsList(); renderHeader();
}

// ================================================================
// ДОСТИЖЕНИЯ
// ================================================================
function checkAchievements() {
    const a = DATA.achievements;
    if (DATA.transactions.length >= 1) a.first_tx = true;
    if (DATA.transactions.length >= 5) a.five_tx = true;
    if (DATA.transactions.length >= 10) a.ten_tx = true;
    if (DATA.goals.length >= 1) a.first_goal = true;
    DATA.goals.forEach(g => { if ((g.saved/g.target) >= 0.5) a.goal_50 = true; });
    if (DATA.quests.filter(q=>q.done).length >= 3) a.quest_master = true;
    if (DATA.goals.reduce((s,g)=>s+g.saved,0) >= 100000) a.saver = true;
    if (DATA.level >= 5) a.level_5 = true;
    if (DATA.cards.length >= 1) a.first_card = true;
    saveData();
}

// ================================================================
// КВЕСТЫ
// ================================================================
function completeQuest(id) {
    const quest = DATA.quests.find(q=>q.id===id); if (!quest || quest.done) return;
    quest.done = true; DATA.xp += quest.reward;
    if (DATA.xp >= 100) { DATA.level += Math.floor(DATA.xp/100); DATA.xp = DATA.xp%100; updateRank(); }
    checkAchievements(); saveData(); renderGamificationTab(); renderHeader();
}

function getRankInfo() {
    const ranks = [{name:'Bronze',icon:'🥉',xp:0},{name:'Silver',icon:'🥈',xp:200},{name:'Gold',icon:'🥇',xp:500},{name:'Platinum',icon:'💎',xp:1000},{name:'Diamond',icon:'🔷',xp:2000},{name:'Legend',icon:'🌟',xp:5000}];
    let current = ranks[0], next = ranks[1];
    for (let i = ranks.length-1; i >= 0; i--) { if (DATA.xp >= ranks[i].xp) { current=ranks[i]; next=ranks[i+1]||null; break; } }
    return { current, next };
}

// ================================================================
// ЭКСПОРТ
// ================================================================
function exportReport() {
    const cur = CURRENCIES[CURRENT_CURRENCY];
    const ti = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const te = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    let text = `📊 ОТЧЕТ FinLife — ${CURRENT_USER.name}\n${'━'.repeat(30)}\n`;
    text += `💰 Баланс: ${formatAmount(ti-te, CURRENT_CURRENCY)}\n📈 Доходы: ${formatAmount(ti, CURRENT_CURRENCY)}\n📉 Расходы: ${formatAmount(te, CURRENT_CURRENCY)}\n`;
    text += `📅 ${new Date().toLocaleDateString()} | ${cur.flag} ${cur.name}\n🏆 Lv.${DATA.level} | ${DATA.rank}\n${'━'.repeat(30)}\n`;
    text += '💳 Карты:\n';
    DATA.cards.forEach(c => { text += `  ${c.emoji} ${c.name} (${c.bank}) ••••${c.number}: ${formatAmount(c.balance, CURRENT_CURRENCY)}\n`; });
    text += '🎯 Цели:\n';
    DATA.goals.forEach(g => { text += `  ${g.emoji} ${g.name}: ${formatAmount(g.saved,CURRENT_CURRENCY)} / ${formatAmount(g.target,CURRENT_CURRENCY)} (${Math.round((g.saved/g.target)*100)}%)\n`; });
    const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); link.download = `FinLife_${Date.now()}.txt`; link.click();
    URL.revokeObjectURL(link.href);
}

// ================================================================
// ТЕМА
// ================================================================
let isDark = true;
function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ================================================================
// УТИЛИТЫ
// ================================================================
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1,3),16), G = parseInt(color.substring(3,5),16), B = parseInt(color.substring(5,7),16);
    R = Math.min(255,Math.max(0,parseInt(R*(100+percent)/100)));
    G = Math.min(255,Math.max(0,parseInt(G*(100+percent)/100)));
    B = Math.min(255,Math.max(0,parseInt(B*(100+percent)/100)));
    return '#'+((1<<24)+(R<<16)+(G<<8)+B).toString(16).slice(1);
}
function removeModal() { const m = document.querySelector('.modal-overlay'); if (m) m.remove(); }

// ================================================================
// РЕНДЕР
// ================================================================
function renderActiveTab(tab) {
    switch(tab) {
        case 'dashboard': renderDashboard(); break;
        case 'transactions': renderTransactionsTab(); break;
        case 'goals': renderGoalsTab(); break;
        case 'cards': renderCardsTab(); break;
        case 'stats': renderStatsTab(); break;
        case 'gamification': renderGamificationTab(); break;
        default: renderDashboard();
    }
}

function renderAll() { renderHeader(); renderNav(); renderDashboard(); renderFooter(); }

// ========== ШАПКА ==========
function renderHeader() {
    const ti = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const te = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const health = Math.min(100, Math.round(40 + ((ti-te)/10000) + (DATA.xp/5)));
    const curOpts = Object.entries(CURRENCIES).map(([k,v])=>`<option value="${k}" ${k===CURRENT_CURRENCY?'selected':''}>${v.flag} ${k}</option>`).join('');

    document.getElementById('header').innerHTML = `
        <div class="logo">
            <i class="fas fa-coins"></i><span>FinLife</span><small>v3.0</small>
        </div>
        <div class="header-right">
            <select class="currency-select" id="currencySelect">${curOpts}</select>
            <span class="badge badge-green"><i class="fas fa-heartbeat"></i> ${health}%</span>
            <span class="badge badge-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
            <span class="badge badge-blue"><i class="fas fa-crown"></i> ${DATA.rank}</span>
            <div class="user-avatar" id="userMenu" title="${CURRENT_USER.name}">${CURRENT_USER.avatar}</div>
            <button class="theme-btn" id="themeToggle"><i class="fas fa-${isDark?'sun':'moon'}"></i></button>
        </div>
    `;
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('currencySelect').addEventListener('change', function() {
        CURRENT_CURRENCY = this.value;
        localStorage.setItem('finlife_currency_' + CURRENT_USER.email, CURRENT_CURRENCY);
        const activeTab = document.querySelector('.nav-btn.active');
        renderActiveTab(activeTab ? activeTab.dataset.tab : 'dashboard');
        renderHeader();
    });
    document.getElementById('userMenu').addEventListener('click', showProfileModal);
}

// ========== НАВИГАЦИЯ ==========
function renderNav() {
    document.getElementById('nav').innerHTML = `
        <button class="nav-btn active" data-tab="dashboard"><i class="fas fa-chart-pie"></i> Дашборд</button>
        <button class="nav-btn" data-tab="transactions"><i class="fas fa-list-ul"></i> Транзакции</button>
        <button class="nav-btn" data-tab="cards"><i class="fas fa-credit-card"></i> Карты</button>
        <button class="nav-btn" data-tab="stats"><i class="fas fa-chart-bar"></i> Статистика</button>
        <button class="nav-btn" data-tab="goals"><i class="fas fa-bullseye"></i> Цели</button>
        <button class="nav-btn" data-tab="gamification"><i class="fas fa-gamepad"></i> Игра</button>
    `;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderActiveTab(this.dataset.tab);
        });
    });
}

// ================================================================
// ПРОФИЛЬ
// ================================================================
function showProfileModal() {
    removeModal();
    const modal = document.createElement('div');
    modal.className = 'modal-overlay'; modal.id = 'profileModal';
    const users = getUsers(); const u = users[CURRENT_USER.email];
    modal.innerHTML = `
        <div class="modal-box">
            <div class="modal-header"><h3><i class="fas fa-user-circle"></i> Профиль</h3><button class="modal-close" onclick="removeModal()">✕</button></div>
            <div style="text-align:center; padding:16px 0;">
                <div class="profile-avatar">${CURRENT_USER.avatar}</div>
                <div class="profile-name">${u.name}</div>
                <div class="profile-email">${u.email}</div>
            </div>
            <div class="profile-stats">
                <div class="pstat"><span class="pstat-value">${DATA.transactions.length}</span><span class="pstat-label">Транзакций</span></div>
                <div class="pstat"><span class="pstat-value">${DATA.cards.length}</span><span class="pstat-label">Карт</span></div>
                <div class="pstat"><span class="pstat-value">${DATA.level}</span><span class="pstat-label">Уровень</span></div>
            </div>
            <hr style="border-color:#334155; margin:16px 0;" />
            <label style="font-size:13px; color:#94a3b8; display:block; margin-bottom:6px;">Изменить имя</label>
            <div class="input-group" style="margin-bottom:12px;">
                <input type="text" id="newName" placeholder="Новое имя" value="${u.name}" />
                <button class="btn btn-primary btn-sm" id="saveNameBtn">Сохранить</button>
            </div>
            <button class="btn btn-danger w-full" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Выйти из аккаунта</button>
        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) removeModal(); });
    document.getElementById('saveNameBtn').addEventListener('click', () => {
        const newName = document.getElementById('newName').value.trim(); if (!newName) return;
        const usrs = getUsers(); usrs[CURRENT_USER.email].name = newName; usrs[CURRENT_USER.email].avatar = newName.charAt(0).toUpperCase();
        saveUsers(usrs); CURRENT_USER.name = newName; CURRENT_USER.avatar = newName.charAt(0).toUpperCase();
        removeModal(); renderHeader();
    });
    document.getElementById('logoutBtn').addEventListener('click', () => { removeModal(); logout(); });
}

// ================================================================
// ДАШБОРД
// ================================================================
function renderDashboard() {
    const ti = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const te = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const balance = ti - te;
    const catMap = {};
    DATA.transactions.filter(t=>t.type==='expense').forEach(t => { catMap[t.category] = (catMap[t.category]||0) + t.amount; });
    const topCats = Object.entries(catMap).sort((a,b)=>b[1]-a[1]).slice(0,3);

    document.getElementById('content').innerHTML = `
        <div class="grid-3">
            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-wallet"></i> Баланс</div></div>
                <div class="balance-display">
                    <div class="balance-amount">${formatAmount(balance, CURRENT_CURRENCY)}</div>
                    <div class="balance-stats">
                        <span class="income"><i class="fas fa-arrow-up"></i> ${formatAmount(ti, CURRENT_CURRENCY)}</span>
                        <span class="expense"><i class="fas fa-arrow-down"></i> ${formatAmount(te, CURRENT_CURRENCY)}</span>
                    </div>
                    <div style="font-size:12px; color:#94a3b8; margin-top:6px;">${DATA.cards.length > 0 ? DATA.cards.length + ' карт привязано' : '<span style="color:#0ea5e9; cursor:pointer;" id="addCardLink">+ Привязать карту</span>'}</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-fire"></i> Топ расходы</div></div>
                <div style="padding:8px 0;">
                    ${topCats.length ? topCats.map(([cat,amt])=>{
                        const pct = te>0?Math.round((amt/te)*100):0;
                        return `<div style="margin-bottom:8px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px;"><span>${cat}</span><span style="color:#94a3b8;">${pct}% · ${formatAmount(amt, CURRENT_CURRENCY)}</span></div><div style="height:4px;background:#334155;border-radius:4px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:#0ea5e9;border-radius:4px;"></div></div></div>`;
                    }).join('') : '<div style="color:#94a3b8;font-size:13px;text-align:center;padding:12px;">Нет расходов</div>'}
                </div>
            </div>
            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-bolt"></i> Быстрый доступ</div></div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                    <button class="btn btn-success" id="quickIncome"><i class="fas fa-plus"></i> Доход</button>
                    <button class="btn btn-danger" id="quickExpense"><i class="fas fa-minus"></i> Расход</button>
                    <button class="btn btn-primary" id="quickCards"><i class="fas fa-credit-card"></i> Карты</button>
                    <button class="btn btn-warning" id="quickExport"><i class="fas fa-file-export"></i> Экспорт</button>
                </div>
            </div>
        </div>
        ${DATA.cards.length > 0 ? `<div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-credit-card"></i> Мои карты</div><button class="btn btn-outline btn-sm" id="goCardsBtn">Все карты →</button></div><div class="cards-mini-row" id="cardsMiniRow"></div></div>` : ''}
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-list-ul"></i> Последние операции</div></div>
            <div class="tx-list" id="txList"></div>
        </div>`;

    if (document.getElementById('addCardLink')) {
        document.getElementById('addCardLink').addEventListener('click', () => document.querySelector('[data-tab="cards"]').click());
    }
    if (document.getElementById('goCardsBtn')) {
        document.getElementById('goCardsBtn').addEventListener('click', () => document.querySelector('[data-tab="cards"]').click());
        renderCardsMiniRow();
    }

    const list = document.getElementById('txList');
    list.innerHTML = [...DATA.transactions].reverse().slice(0,5).map(t => {
        const card = t.cardId ? getCardById(t.cardId) : null;
        return `<div class="tx-item"><div class="tx-left"><div class="tx-icon ${t.type}"><i class="fas fa-${t.type==='income'?'arrow-down':'arrow-up'}"></i></div><span class="tx-text">${t.text}</span><span class="tx-category">${t.category}</span>${card?`<span class="tx-card-badge">${card.emoji} ••••${card.number}</span>`:''}</div><div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${formatAmount(t.amount, CURRENT_CURRENCY)}</div></div>`;
    }).join('') || '<div style="text-align:center;padding:12px;color:#94a3b8;">Нет транзакций</div>';

    document.getElementById('quickIncome').addEventListener('click', () => { const v=prompt('Сумма дохода (₸):'); if(v&&parseInt(v)>0) addTransaction(`Доход ${parseInt(v)}`); });
    document.getElementById('quickExpense').addEventListener('click', () => { const v=prompt('Сумма расхода (₸):'); if(v&&parseInt(v)>0) addTransaction(`Расход ${parseInt(v)}`); });
    document.getElementById('quickCards').addEventListener('click', () => document.querySelector('[data-tab="cards"]').click());
    document.getElementById('quickExport').addEventListener('click', exportReport);
}

function renderCardsMiniRow() {
    const row = document.getElementById('cardsMiniRow'); if (!row) return;
    row.innerHTML = DATA.cards.slice(0,3).map(c => `
        <div class="card-mini" style="background:linear-gradient(135deg,${c.color},${shadeColor(c.color,-30)});">
            <div class="card-mini-top"><span>${c.emoji} ${c.bank}</span><span style="font-size:11px;opacity:0.8;">${c.type==='credit'?'КРЕДИТ':'ДЕБИТ'}</span></div>
            <div class="card-mini-number">•••• ${c.number}</div>
            <div class="card-mini-balance">${formatAmount(c.balance, CURRENT_CURRENCY)}</div>
        </div>`).join('');
}

// ================================================================
// ТРАНЗАКЦИИ
// ================================================================
function renderTransactionsTab() {
    const cardOptions = DATA.cards.map(c=>`<option value="${c.id}">${c.emoji} ${c.bank} ••••${c.number}</option>`).join('');
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-plus-circle"></i> Добавить транзакцию</div></div>
            <div class="input-group">
                <input type="text" id="txInput" placeholder='"Кофе 350" или "Зарплата 200000"' />
                ${DATA.cards.length>0?`<select id="txCard" class="form-select"><option value="">Без карты</option>${cardOptions}</select>`:''}
                <button class="btn btn-success" id="txAddBtn"><i class="fas fa-plus"></i> Добавить</button>
                <button class="btn btn-danger" id="txClearBtn"><i class="fas fa-trash"></i></button>
            </div>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
                ${[['Кофе 350','☕ Кофе'],['Обед 1500','🍽 Обед'],['Такси 800','🚗 Такси'],['Продукты 5000','🛒 Продукты'],['Зарплата 200000','💰 ЗП'],['Инвестиции 15000','📈 Инвестиции']].map(([v,l])=>`<button class="btn btn-outline btn-sm template" data-text="${v}">${l}</button>`).join('')}
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-list-ul"></i> Все транзакции</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;">
                    <button class="btn btn-outline btn-sm filter-btn active" data-filter="all">Все</button>
                    <button class="btn btn-outline btn-sm filter-btn" data-filter="income">Доходы</button>
                    <button class="btn btn-outline btn-sm filter-btn" data-filter="expense">Расходы</button>
                </div>
            </div>
            <div class="tx-list" id="fullTxList"></div>
        </div>`;

    document.getElementById('txAddBtn').addEventListener('click', () => {
        const val = document.getElementById('txInput').value.trim();
        const cardEl = document.getElementById('txCard');
        const cardId = cardEl && cardEl.value ? parseInt(cardEl.value) : null;
        if (val && addTransaction(val, cardId)) document.getElementById('txInput').value = '';
    });
    document.getElementById('txInput').addEventListener('keydown', e => { if(e.key==='Enter') document.getElementById('txAddBtn').click(); });
    document.getElementById('txClearBtn').addEventListener('click', () => {
        if (confirm('Удалить все транзакции?')) { DATA.transactions=[]; saveData(); renderTransactionsTab(); renderHeader(); }
    });
    document.querySelectorAll('.template').forEach(btn => { btn.addEventListener('click', () => { document.getElementById('txInput').value = btn.dataset.text; document.getElementById('txAddBtn').click(); }); });
    let currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => { document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); currentFilter=btn.dataset.filter; renderFullTxList(currentFilter); });
    });
    renderFullTxList('all');
}

function renderFullTxList(filter) {
    const list = document.getElementById('fullTxList'); if (!list) return;
    const filtered = filter==='all' ? DATA.transactions : DATA.transactions.filter(t=>t.type===filter);
    list.innerHTML = [...filtered].reverse().slice(0,50).map(t => {
        const card = t.cardId ? getCardById(t.cardId) : null;
        const dateStr = t.date ? new Date(t.date).toLocaleDateString('ru-RU',{day:'2-digit',month:'short'}) : '';
        return `<div class="tx-item"><div class="tx-left"><div class="tx-icon ${t.type}"><i class="fas fa-${t.type==='income'?'arrow-down':'arrow-up'}"></i></div><div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;"><span class="tx-text">${t.text}</span><span class="tx-category">${t.category}</span>${card?`<span class="tx-card-badge">${card.emoji} ••••${card.number}</span>`:''}</div><div style="font-size:11px;color:#64748b;">${dateStr}</div></div></div><div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${formatAmount(t.amount, CURRENT_CURRENCY)}</div></div>`;
    }).join('') || '<div style="text-align:center;padding:12px;color:#94a3b8;">Нет транзакций</div>';
}

// ================================================================
// КАРТЫ
// ================================================================
function renderCardsTab() {
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-credit-card"></i> Мои банковские карты</div><button class="btn btn-primary btn-sm" id="addCardBtn"><i class="fas fa-plus"></i> Добавить карту</button></div>
            <div id="cardsGrid" class="cards-grid"></div>
            ${DATA.cards.length===0?'<div class="empty-cards"><div style="font-size:48px;margin-bottom:12px;">💳</div><div style="font-size:16px;font-weight:600;color:#94a3b8;">Нет привязанных карт</div><div style="font-size:13px;color:#64748b;margin-top:4px;">Добавьте карту для отслеживания расходов</div></div>':''}
        </div>
        ${DATA.cards.length>0?`<div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-chart-bar"></i> Расходы по картам</div></div><div id="cardSpendingStats"></div></div>`:''}`;

    document.getElementById('addCardBtn').addEventListener('click', showAddCardModal);
    renderCardsGrid();
    if (DATA.cards.length > 0) renderCardSpendingStats();
}

function renderCardsGrid() {
    const grid = document.getElementById('cardsGrid'); if (!grid || DATA.cards.length===0) return;
    grid.innerHTML = DATA.cards.map(c => {
        const spent = DATA.transactions.filter(t=>t.cardId===c.id&&t.type==='expense').reduce((s,t)=>s+t.amount,0);
        return `<div class="bank-card" style="background:linear-gradient(135deg,${c.color},${shadeColor(c.color,-40)});">
            <div class="bank-card-top"><span class="bank-card-bank">${c.emoji} ${c.bank}</span><span class="bank-card-type">${c.type==='credit'?'💳 КРЕДИТ':'🏦 ДЕБИТ'}</span></div>
            <div class="bank-card-chip">⬛ ▌▌▌</div>
            <div class="bank-card-number">•••• •••• •••• ${c.number}</div>
            <div class="bank-card-bottom"><div><div style="font-size:10px;opacity:0.7;text-transform:uppercase;">Баланс</div><div style="font-size:18px;font-weight:800;">${formatAmount(c.balance, CURRENT_CURRENCY)}</div></div><div style="text-align:right;"><div style="font-size:10px;opacity:0.7;">Потрачено</div><div style="font-size:14px;font-weight:600;">${formatAmount(spent, CURRENT_CURRENCY)}</div></div></div>
            <div class="bank-card-name">${CURRENT_USER.name.toUpperCase()}</div>
            <button class="card-delete-btn" data-id="${c.id}" title="Удалить">✕</button>
        </div>`;
    }).join('');
    document.querySelectorAll('.card-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => { if(confirm('Удалить карту?')) { deleteCard(parseInt(btn.dataset.id)); renderCardsTab(); } });
    });
}

function renderCardSpendingStats() {
    const stats = document.getElementById('cardSpendingStats'); if (!stats) return;
    stats.innerHTML = DATA.cards.map(c => {
        const txs = DATA.transactions.filter(t=>t.cardId===c.id);
        const income = txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
        const expense = txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
        return `<div class="card-stat-row"><div style="display:flex;align-items:center;gap:10px;"><div class="card-stat-dot" style="background:${c.color};"></div><div><div style="font-weight:600;">${c.emoji} ${c.name}</div><div style="font-size:11px;color:#94a3b8;">${c.bank} ••••${c.number} · ${txs.length} операций</div></div></div><div style="text-align:right;"><div style="color:#22c55e;font-size:13px;">+${formatAmount(income, CURRENT_CURRENCY)}</div><div style="color:#ef4444;font-size:13px;">-${formatAmount(expense, CURRENT_CURRENCY)}</div></div></div>`;
    }).join('') || '<div style="color:#94a3b8;text-align:center;padding:12px;">Нет данных</div>';
}

function showAddCardModal() {
    removeModal();
    const modal = document.createElement('div'); modal.className = 'modal-overlay'; modal.id = 'cardModal';
    const colors = ['#0ea5e9','#22c55e','#8b5cf6','#f59e0b','#ef4444','#ec4899','#06b6d4','#14b8a6'];
    const banks = ['Kaspi Bank','Halyk Bank','ForteBank','Jusan Bank','ATF Bank','Альфа-Банк','Тинькофф','Сбербанк','Другой'];
    const curOpts = Object.entries(CURRENCIES).map(([k,v])=>`<option value="${k}">${v.flag} ${v.name}</option>`).join('');
    modal.innerHTML = `<div class="modal-box">
        <div class="modal-header"><h3><i class="fas fa-credit-card"></i> Добавить карту</h3><button class="modal-close" onclick="removeModal()">✕</button></div>
        <div class="form-group"><label>Название карты</label><input type="text" id="cardName" placeholder="Моя основная карта" /></div>
        <div class="form-group"><label>Банк</label><select id="cardBank">${banks.map(b=>`<option>${b}</option>`).join('')}</select></div>
        <div class="form-group"><label>Последние 4 цифры</label><input type="text" id="cardNumber" placeholder="1234" maxlength="4" /></div>
        <div class="form-group"><label>Тип</label><div style="display:flex;gap:8px;"><button class="btn btn-outline card-type-btn active" data-type="debit">🏦 Дебитовая</button><button class="btn btn-outline card-type-btn" data-type="credit">💳 Кредитная</button></div></div>
        <div class="form-group"><label>Валюта карты</label><select id="cardCurrency" class="form-select">${curOpts}</select></div>
        <div class="form-group"><label>Текущий баланс</label><input type="number" id="cardBalance" placeholder="0" /></div>
        <div class="form-group"><label>Цвет</label><div style="display:flex;gap:8px;flex-wrap:wrap;" id="colorPicker">${colors.map((c,i)=>`<div class="color-dot ${i===0?'selected':''}" data-color="${c}" style="background:${c};"></div>`).join('')}</div></div>
        <div class="form-group"><label>Иконка</label><div style="display:flex;gap:6px;flex-wrap:wrap;">${['💳','🏦','💰','💎','🌟','🔵','🟣','🟢'].map((e,i)=>`<button class="emoji-btn ${i===0?'selected':''}" data-emoji="${e}" style="font-size:20px;padding:6px 10px;border:2px solid ${i===0?'#0ea5e9':'#334155'};border-radius:8px;background:transparent;cursor:pointer;">${e}</button>`).join('')}</div></div>
        <button class="btn btn-primary w-full" id="saveCardBtn"><i class="fas fa-save"></i> Добавить карту</button>
    </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if(e.target===modal) modal.remove(); });

    let selColor = colors[0], selEmoji = '💳', selType = 'debit';
    document.querySelectorAll('.color-dot').forEach(d => { d.addEventListener('click', () => { document.querySelectorAll('.color-dot').forEach(x=>x.classList.remove('selected')); d.classList.add('selected'); selColor=d.dataset.color; }); });
    document.querySelectorAll('.emoji-btn').forEach(b => { b.addEventListener('click', () => { document.querySelectorAll('.emoji-btn').forEach(x=>{x.classList.remove('selected');x.style.borderColor='#334155';}); b.classList.add('selected'); b.style.borderColor='#0ea5e9'; selEmoji=b.dataset.emoji; }); });
    document.querySelectorAll('.card-type-btn').forEach(b => { b.addEventListener('click', () => { document.querySelectorAll('.card-type-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); selType=b.dataset.type; }); });
    document.getElementById('saveCardBtn').addEventListener('click', () => {
        const name = document.getElementById('cardName').value.trim() || 'Моя карта';
        const bank = document.getElementById('cardBank').value;
        const number = document.getElementById('cardNumber').value.replace(/\D/g,'').slice(-4) || '0000';
        const balance = parseFloat(document.getElementById('cardBalance').value) || 0;
        const currency = document.getElementById('cardCurrency').value;
        addCard({ name, bank, number, balance, currency, color: selColor, emoji: selEmoji, type: selType });
        modal.remove(); renderCardsTab(); renderHeader();
    });
}

// ================================================================
// СТАТИСТИКА
// ================================================================
function renderStatsTab() {
    const ti = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const te = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const balance = ti - te;
    const savingsRate = ti > 0 ? Math.round(((ti-te)/ti)*100) : 0;
    const catMap = {};
    DATA.transactions.filter(t=>t.type==='expense').forEach(t => { catMap[t.category] = (catMap[t.category]||0)+t.amount; });
    const cats = Object.entries(catMap).sort((a,b)=>b[1]-a[1]);

    const dayMap = {};
    const now = Date.now();
    for (let i=6; i>=0; i--) {
        const d = new Date(now - 86400000*i);
        dayMap[d.toLocaleDateString('ru-RU',{weekday:'short'})] = {income:0,expense:0};
    }
    DATA.transactions.forEach(t => {
        if (!t.date || (now-t.date)/86400000 > 7) return;
        const key = new Date(t.date).toLocaleDateString('ru-RU',{weekday:'short'});
        if (dayMap[key]) dayMap[key][t.type] += t.amount;
    });
    const maxDayVal = Math.max(...Object.values(dayMap).map(d=>Math.max(d.income,d.expense)),1);

    const allCurs = Object.entries(CURRENCIES).map(([k,v]) => `
        <div class="currency-row">
            <span class="currency-flag">${v.flag}</span><span class="currency-name">${v.name}</span>
            <span style="color:#22c55e;">+${Math.round(ti*v.rate).toLocaleString()} ${v.symbol}</span>
            <span style="color:#ef4444;">-${Math.round(te*v.rate).toLocaleString()} ${v.symbol}</span>
            <span style="color:${balance>=0?'#22c55e':'#ef4444'};">${Math.round(balance*v.rate).toLocaleString()} ${v.symbol}</span>
        </div>`).join('');

    const catColors = {'Еда':'#f59e0b','Транспорт':'#0ea5e9','Развлечения':'#8b5cf6','Жильё':'#22c55e','Инвестиции':'#06b6d4','Одежда':'#ec4899','Здоровье':'#14b8a6','Прочее':'#64748b'};

    document.getElementById('content').innerHTML = `
        <div class="grid-3">
            <div class="card"><div class="card-title" style="margin-bottom:10px;"><i class="fas fa-piggy-bank"></i> Норма сбережений</div>
                <div style="text-align:center;padding:8px 0;"><div style="font-size:42px;font-weight:900;color:${savingsRate>=20?'#22c55e':savingsRate>=0?'#f59e0b':'#ef4444'};">${savingsRate}%</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:4px;">${savingsRate>=20?'🟢 Отличный':savingsRate>=10?'🟡 Хорошо':'🔴 Много тратишь'}</div></div>
            </div>
            <div class="card"><div class="card-title" style="margin-bottom:10px;"><i class="fas fa-receipt"></i> Средний расход</div>
                <div style="text-align:center;padding:8px 0;"><div style="font-size:32px;font-weight:900;color:#0ea5e9;">${formatAmount(DATA.transactions.filter(t=>t.type==='expense').length>0?te/DATA.transactions.filter(t=>t.type==='expense').length:0, CURRENT_CURRENCY)}</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:4px;">на транзакцию</div></div>
            </div>
            <div class="card"><div class="card-title" style="margin-bottom:10px;"><i class="fas fa-trophy"></i> Топ категория</div>
                <div style="text-align:center;padding:8px 0;"><div style="font-size:28px;font-weight:900;color:#f59e0b;">${cats[0]?.[0]||'—'}</div>
                <div style="font-size:13px;color:#94a3b8;margin-top:4px;">${cats[0]?formatAmount(cats[0][1],CURRENT_CURRENCY):'нет данных'}</div></div>
            </div>
        </div>

        <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-chart-bar"></i> Расходы и доходы (7 дней)</div></div>
            <div class="bar-chart">
                ${Object.entries(dayMap).map(([day,vals])=>`
                <div class="bar-col"><div class="bar-wrap">
                    <div class="bar income-bar" style="height:${Math.round((vals.income/maxDayVal)*80)}px;" title="Доход: ${formatAmount(vals.income,CURRENT_CURRENCY)}"></div>
                    <div class="bar expense-bar" style="height:${Math.round((vals.expense/maxDayVal)*80)}px;" title="Расход: ${formatAmount(vals.expense,CURRENT_CURRENCY)}"></div>
                </div><div class="bar-label">${day}</div></div>`).join('')}
            </div>
            <div style="display:flex;gap:16px;margin-top:8px;font-size:12px;">
                <span><span style="display:inline-block;width:12px;height:12px;background:#22c55e;border-radius:2px;margin-right:4px;"></span>Доходы</span>
                <span><span style="display:inline-block;width:12px;height:12px;background:#ef4444;border-radius:2px;margin-right:4px;"></span>Расходы</span>
            </div>
        </div>

        <div class="grid-2">
            <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-chart-pie"></i> По категориям</div></div>
                <div>${cats.map(([cat,amt])=>{
                    const pct = te>0?Math.round((amt/te)*100):0;
                    return `<div style="margin-bottom:10px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span>${cat}</span><span style="color:#94a3b8;">${pct}% · ${formatAmount(amt,CURRENT_CURRENCY)}</span></div><div style="height:6px;background:#334155;border-radius:6px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${catColors[cat]||'#64748b'};border-radius:6px;"></div></div></div>`;
                }).join('')||'<div style="color:#94a3b8;text-align:center;padding:12px;">Нет расходов</div>'}</div>
            </div>
            <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-globe"></i> Мультивалютность</div></div>
                <div class="currency-table">
                    <div class="currency-row currency-header"><span>Валюта</span><span style="color:#22c55e;">Доход</span><span style="color:#ef4444;">Расход</span><span>Баланс</span></div>
                    ${allCurs}
                </div>
            </div>
        </div>

        <div class="card" id="aiCard">
            <div class="card-header"><div class="card-title"><i class="fas fa-robot"></i> ИИ-анализ финансов</div><button class="btn btn-primary btn-sm" id="getAiBtn"><i class="fas fa-sparkles"></i> Анализировать</button></div>
            <div id="aiContent" style="color:#94a3b8;font-size:14px;text-align:center;padding:20px;">Нажмите «Анализировать» для персонализированных советов</div>
        </div>`;

    document.getElementById('getAiBtn').addEventListener('click', loadAiInsights);
}

async function loadAiInsights() {
    const btn = document.getElementById('getAiBtn');
    const content = document.getElementById('aiContent');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Анализирую...';
    content.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:20px;"><i class="fas fa-brain" style="font-size:32px;color:#8b5cf6;"></i><br><br>ИИ изучает ваши финансы...</div>';

    const ti = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const te = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const catMap = {};
    DATA.transactions.filter(t=>t.type==='expense').forEach(t => { catMap[t.category]=(catMap[t.category]||0)+t.amount; });
    const topCats = Object.entries(catMap).sort((a,b)=>b[1]-a[1]).slice(0,5);
    const savingsRate = ti > 0 ? Math.round(((ti-te)/ti)*100) : 0;

    const prompt = `Ты финансовый советник. Проанализируй данные пользователя и дай 4-5 конкретных совета на русском языке.

Данные пользователя ${CURRENT_USER.name}:
- Доходы: ${ti.toLocaleString()} ₸
- Расходы: ${te.toLocaleString()} ₸  
- Баланс: ${(ti-te).toLocaleString()} ₸
- Норма сбережений: ${savingsRate}%
- Топ категории расходов: ${topCats.map(([c,a])=>`${c}: ${a.toLocaleString()} ₸`).join(', ')}
- Количество карт: ${DATA.cards.length}
- Уровень: ${DATA.level}, Ранг: ${DATA.rank}

Дай практичные, конкретные советы. Упоминай реальные цифры. Используй эмодзи. Формат: несколько секций с заголовками.`;

    try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ model:"claude-sonnet-4-6", max_tokens:1000, messages:[{role:"user",content:prompt}] })
        });
        const data = await response.json();
        const text = data.content?.[0]?.text || 'Не удалось получить ответ.';
        content.innerHTML = `<div class="ai-insights">${text.replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/^/,'<p>').replace(/$/,'</p>')}</div>`;
    } catch(err) {
        content.innerHTML = '<div style="color:#ef4444;padding:12px;">⚠️ Ошибка загрузки. Проверьте подключение.</div>';
    }
    btn.disabled = false; btn.innerHTML = '<i class="fas fa-sparkles"></i> Анализировать снова';
}

// ================================================================
// ЦЕЛИ
// ================================================================
function renderGoalsTab() {
    document.getElementById('content').innerHTML = `
        <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-plus-circle"></i> Новая цель</div></div>
            <div class="input-group"><input type="text" id="goalName" placeholder="Название цели" /><input type="number" id="goalTarget" placeholder="Сумма" style="max-width:140px;" /><button class="btn btn-primary" id="goalAddBtn"><i class="fas fa-plus"></i> Создать</button></div>
        </div>
        <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-bullseye"></i> Мои цели</div><span style="font-size:13px;color:#94a3b8;">${DATA.goals.length} целей</span></div><div id="goalsList"></div></div>
        <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-route"></i> Прогресс</div></div><div id="roadmapDisplay" style="padding:12px;text-align:center;color:#94a3b8;font-size:14px;">🌟 Выбери цель</div></div>`;

    document.getElementById('goalAddBtn').addEventListener('click', () => {
        const name = document.getElementById('goalName').value.trim();
        const target = parseInt(document.getElementById('goalTarget').value);
        if (name && target > 0) addGoal(name, target); else alert('Введите название и сумму');
    });
    renderGoalsList();
}

function renderGoalsList() {
    const list = document.getElementById('goalsList'); if (!list) return;
    list.innerHTML = DATA.goals.map(g => {
        const pct = Math.min(100,(g.saved/g.target)*100);
        return `<div class="goal-item ${g.id===DATA.activeGoalId?'active':''}" data-id="${g.id}"><span class="goal-emoji">${g.emoji}</span><div class="goal-info"><div class="goal-name">${g.name}</div><div class="goal-sub">${formatAmount(g.saved,CURRENT_CURRENCY)} / ${formatAmount(g.target,CURRENT_CURRENCY)}</div></div><div class="goal-progress"><div class="fill" style="width:${pct}%;"></div></div><div class="goal-percent">${Math.round(pct)}%</div><button class="btn btn-primary btn-sm contribute-btn" data-id="${g.id}"><i class="fas fa-plus"></i></button></div>`;
    }).join('') || '<div style="text-align:center;padding:12px;color:#94a3b8;">Нет целей</div>';
    document.querySelectorAll('.goal-item').forEach(el => { el.addEventListener('click', e => { if(!e.target.closest('.contribute-btn')) setActiveGoal(parseInt(el.dataset.id)); }); });
    document.querySelectorAll('.contribute-btn').forEach(btn => { btn.addEventListener('click', e => { e.stopPropagation(); const a=prompt('Сколько внести? (₸)'); if(a&&parseInt(a)>0) contributeToGoal(parseInt(btn.dataset.id),parseInt(a)); }); });
    renderRoadmap();
}

function renderRoadmap() {
    const active = DATA.goals.find(g=>g.id===DATA.activeGoalId);
    const display = document.getElementById('roadmapDisplay');
    if (!display || !active) return;
    const pct = Math.min(100,(active.saved/active.target)*100);
    const steps = ['Старт','25%','50%','75%','Финиш'];
    const step = Math.min(4,Math.floor((pct/100)*4));
    display.innerHTML = `<div style="text-align:center;"><div style="font-size:28px;">${active.emoji}</div><div style="font-size:18px;font-weight:700;">${active.name}</div><div style="font-size:14px;color:#94a3b8;margin:4px 0;">${formatAmount(active.saved,CURRENT_CURRENCY)} / ${formatAmount(active.target,CURRENT_CURRENCY)}</div><div style="width:100%;height:8px;background:#334155;border-radius:10px;margin:10px 0;overflow:hidden;"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#0ea5e9,#22c55e);border-radius:10px;"></div></div><div style="font-size:28px;font-weight:900;color:#0ea5e9;">${Math.round(pct)}%</div><div style="display:flex;justify-content:center;gap:8px;margin-top:10px;flex-wrap:wrap;">${steps.map((s,i)=>`<span style="padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;${i<step?'background:#22c55e;color:#fff;':i===step?'background:#0ea5e9;color:#fff;':'background:#334155;color:#94a3b8;'}">${s}</span>`).join('')}</div><div style="margin-top:10px;font-size:13px;color:#94a3b8;">${pct>=100?'🎉 Цель достигнута!':'Продолжай копить!'}</div></div>`;
}

// ================================================================
// ГЕЙМИФИКАЦИЯ
// ================================================================
function renderGamificationTab() {
    const ri = getRankInfo();
    const xpPct = ri.next ? Math.min(100,(DATA.xp/ri.next.xp)*100) : 100;
    document.getElementById('content').innerHTML = `
        <div class="grid-2">
            <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-crown"></i> Ранг</div></div>
                <div style="text-align:center;padding:10px;"><div style="font-size:64px;">${ri.current.icon}</div><div style="font-size:24px;font-weight:800;color:#f59e0b;">${ri.current.name}</div><div style="font-size:13px;color:#94a3b8;">XP: ${DATA.xp}${ri.next?` / ${ri.next.xp}`:''}</div><div style="width:100%;height:6px;background:#334155;border-radius:10px;margin-top:8px;overflow:hidden;"><div style="height:100%;width:${xpPct}%;background:linear-gradient(90deg,#f59e0b,#f97316);border-radius:10px;"></div></div>${ri.next?`<div style="font-size:12px;color:#94a3b8;margin-top:4px;">Следующий: ${ri.next.name}</div>`:'<div style="font-size:12px;color:#f59e0b;margin-top:4px;">🌟 Максимальный ранг!</div>'}</div>
            </div>
            <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-tasks"></i> Квесты</div><span style="font-size:13px;color:#94a3b8;">${DATA.quests.filter(q=>q.done).length}/${DATA.quests.length}</span></div><div id="questsList"></div></div>
        </div>
        <div class="card"><div class="card-header"><div class="card-title"><i class="fas fa-trophy"></i> Достижения</div><span style="font-size:13px;color:#94a3b8;">${Object.values(DATA.achievements).filter(v=>v).length} открыто</span></div><div class="achievements-grid" id="achievementsGrid"></div></div>`;
    renderQuests(); renderAchievementsGrid();
}

function renderQuests() {
    const list = document.getElementById('questsList'); if (!list) return;
    list.innerHTML = DATA.quests.map(q=>`<div class="quest-item ${q.done?'done':''}"><span class="quest-icon">${q.done?'✅':'📌'}</span><div class="quest-info"><div class="quest-title">${q.title}</div><div class="quest-desc">${q.desc}</div></div>${!q.done?`<button class="btn btn-primary btn-sm quest-btn" data-id="${q.id}">Выполнить</button>`:''}<span class="quest-reward">+${q.reward} XP</span></div>`).join('');
    document.querySelectorAll('.quest-btn').forEach(btn => { btn.addEventListener('click', () => completeQuest(parseInt(btn.dataset.id))); });
}

function renderAchievementsGrid() {
    const grid = document.getElementById('achievementsGrid'); if (!grid) return;
    const list = [{key:'first_tx',icon:'🌟',name:'Первый шаг'},{key:'five_tx',icon:'📝',name:'Пять записей'},{key:'ten_tx',icon:'📊',name:'Десять записей'},{key:'first_goal',icon:'🎯',name:'Первая цель'},{key:'goal_50',icon:'🚀',name:'Полпути'},{key:'quest_master',icon:'⚡',name:'Мастер квестов'},{key:'saver',icon:'💰',name:'Экономный'},{key:'level_5',icon:'⭐',name:'Продвинутый'},{key:'first_card',icon:'💳',name:'Первая карта'}];
    grid.innerHTML = list.map(a=>`<div class="achievement-item ${DATA.achievements[a.key]?'unlocked':''}"><span class="ach-icon">${a.icon}</span><span class="ach-name">${DATA.achievements[a.key]?a.name:'🔒'}</span></div>`).join('');
}

// ================================================================
// ФУТЕР
// ================================================================
function renderFooter() {
    document.getElementById('footer').innerHTML = `<div class="status"><span class="dot"></span><span>Онлайн · ${CURRENT_USER.name}</span></div><span>${new Date().toLocaleTimeString()}</span>`;
}

// ================================================================
// ЗАПУСК
// ================================================================
initAuth();
console.log('🚀 FinLife v3.0 — с аккаунтами и картами!');
ENDOFFILE
cp /tmp/app_new.js /home/claude/project/143-main/app.js
echo "Done"