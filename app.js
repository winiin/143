// ================================================================
// ВАЛЮТЫ
// ================================================================
const CURRENCIES = {
    KZT: { symbol: '₸', name: 'Тенге', rate: 1 },
    RUB: { symbol: '₽', name: 'Рубли', rate: 0.21 },
    USD: { symbol: '$', name: 'Доллар', rate: 0.0022 },
    EUR: { symbol: '€', name: 'Евро', rate: 0.002 },
    CNY: { symbol: '¥', name: 'Юань', rate: 0.016 },
    AED: { symbol: 'د.إ', name: 'Дирхам', rate: 0.0081 },
};

// ================================================================
// ХРАНИЛИЩЕ АККАУНТОВ
// ================================================================
function getAccounts() {
    try { return JSON.parse(localStorage.getItem('finlife_accounts') || '{}'); } catch { return {}; }
}
function saveAccounts(accs) {
    try { localStorage.setItem('finlife_accounts', JSON.stringify(accs)); } catch {}
}
function getCurrentUser() {
    try { return localStorage.getItem('finlife_current_user') || null; } catch { return null; }
}
function setCurrentUser(username) {
    try { localStorage.setItem('finlife_current_user', username); } catch {}
}

// ================================================================
// ДАННЫЕ (ДЕФОЛТ)
// ================================================================
function getDefaultData() {
    return {
        transactions: [
            { id: 1, text: 'Зарплата', amount: 200000, type: 'income', category: 'Доход', cardId: null, date: Date.now() - 86400000*5 },
            { id: 2, text: 'Продукты', amount: 8500, type: 'expense', category: 'Еда', cardId: null, date: Date.now() - 86400000*4 },
            { id: 3, text: 'Такси', amount: 3200, type: 'expense', category: 'Транспорт', cardId: null, date: Date.now() - 86400000*3 },
        ],
        goals: [
            { id: 1, name: 'MacBook Pro', target: 500000, saved: 190000, emoji: '💻' },
        ],
        cards: [],
        activeGoalId: 1,
        level: 1,
        xp: 45,
        rank: 'Bronze',
        nextTxId: 4,
        currency: 'KZT',
        quests: [
            { id: 1, title: 'Без кофе', desc: 'Не трать на кофе сегодня', done: false, reward: 50 },
            { id: 2, title: 'Проверь подписки', desc: 'Найди ненужную подписку', done: false, reward: 100 },
            { id: 3, title: 'Сэкономь 10%', desc: 'Потрать на 10% меньше вчера', done: false, reward: 75 },
            { id: 4, title: 'Запиши все траты', desc: 'Добавь 5 транзакций за день', done: false, reward: 50 },
        ],
        achievements: {
            first_tx: false, five_tx: false, ten_tx: false,
            first_goal: false, goal_50: false, quest_master: false,
            saver: false, level_5: false, first_card: false,
        }
    };
}

let DATA = getDefaultData();

// ================================================================
// ЗАГРУЗКА / СОХРАНЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
// ================================================================
function saveData() {
    const user = getCurrentUser();
    if (!user) return;
    try {
        const accs = getAccounts();
        accs[user].data = DATA;
        saveAccounts(accs);
    } catch {}
}

function loadData() {
    const user = getCurrentUser();
    if (!user) return;
    try {
        const accs = getAccounts();
        if (accs[user] && accs[user].data) {
            DATA = Object.assign(getDefaultData(), accs[user].data);
        }
    } catch {}
}

// ================================================================
// ФОРМАТИРОВАНИЕ ВАЛЮТЫ
// ================================================================
function fmt(amount) {
    const cur = CURRENCIES[DATA.currency] || CURRENCIES.KZT;
    const converted = amount * cur.rate;
    if (converted >= 1000000) return `${(converted/1000000).toFixed(2)}M ${cur.symbol}`;
    if (converted >= 1000) return `${(converted/1000).toFixed(1)}K ${cur.symbol}`;
    return `${Math.round(converted).toLocaleString()} ${cur.symbol}`;
}

// ================================================================
// ПАРСЕР ТРАНЗАКЦИЙ
// ================================================================
function parseTransaction(text) {
    text = text.trim();
    const numbers = text.match(/\d+[\s\d]*/g);
    if (!numbers) return null;
    const amount = parseInt(numbers[0].replace(/\s/g, ''), 10);
    if (isNaN(amount) || amount <= 0) return null;
    let description = text.replace(/\d+[\s\d]*/g, '').trim() || 'Покупка';
    const incomeKeywords = ['зарплат', 'зп', 'доход', 'премия', 'аванс', 'кешбэк', 'возврат', 'пополнение', 'пришло'];
    const lower = description.toLowerCase();
    let type = 'expense', category = 'Прочее';
    for (const kw of incomeKeywords) {
        if (lower.includes(kw)) { type = 'income'; category = 'Доход'; break; }
    }
    if (type === 'expense') {
        const cats = {
            'Еда': ['кофе','обед','еда','продукт','ресторан','суши','пицц','бургер','доставк'],
            'Транспорт': ['такси','бензин','заправк','транспорт','метро','авто'],
            'Развлечения': ['кино','игр','подписк','развлеч','бар','клуб','концерт'],
            'Жильё': ['квартир','аренд','коммун','жкх','интернет','свет'],
            'Инвестиции': ['инвест','акци','облигац','фонд','вклад'],
            'Здоровье': ['аптека','врач','клиник','лекарств','здоров'],
            'Одежда': ['одежд','обувь','магазин','шопинг'],
        };
        for (const [cat, kws] of Object.entries(cats)) {
            for (const kw of kws) {
                if (lower.includes(kw)) { category = cat; break; }
            }
            if (category !== 'Прочее') break;
        }
    }
    return {
        text: description.charAt(0).toUpperCase() + description.slice(1),
        amount, type, category, date: Date.now()
    };
}

// ================================================================
// ДОБАВЛЕНИЕ ТРАНЗАКЦИИ
// ================================================================
function addTransaction(raw, cardId = null) {
    const parsed = parseTransaction(raw);
    if (!parsed) { alert('❌ Не распознано. Пример: "Обед 1200"'); return false; }
    parsed.id = DATA.nextTxId++;
    parsed.cardId = cardId;
    DATA.transactions.push(parsed);
    DATA.xp += 5;
    if (DATA.xp >= 100) { DATA.level += Math.floor(DATA.xp/100); DATA.xp = DATA.xp%100; updateRank(); }
    checkAchievements();
    saveData();
    const activeTab = document.querySelector('.nav-btn.active');
    const tab = activeTab ? activeTab.dataset.tab : 'dashboard';
    renderActiveTab(tab);
    renderHeader();
    return true;
}

// ================================================================
// КАРТЫ
// ================================================================
function addCard(number, holder, expiry, bank, type, color) {
    if (!number || number.replace(/\s/g,'').length < 16) { alert('Введите корректный номер карты (16 цифр)'); return; }
    DATA.cards.push({
        id: Date.now(),
        number: number.replace(/\s/g,'').slice(-4),
        holder: holder || 'Держатель',
        expiry: expiry || '00/00',
        bank: bank || 'Банк',
        type: type || 'visa',
        color: color || 'blue',
        balance: 0
    });
    checkAchievements();
    saveData();
    renderCardsTab();
}

function deleteCard(id) {
    if (!confirm('Удалить карту?')) return;
    DATA.cards = DATA.cards.filter(c => c.id !== id);
    DATA.transactions.forEach(t => { if (t.cardId === id) t.cardId = null; });
    saveData();
    renderCardsTab();
}

function getCardSpending(cardId) {
    return DATA.transactions.filter(t => t.cardId === cardId && t.type === 'expense')
        .reduce((s, t) => s + t.amount, 0);
}

// ================================================================
// РАНГ / ЦЕЛИ / КВЕСТЫ / ДОСТИЖЕНИЯ
// ================================================================
function updateRank() {
    const ranks = ['Bronze','Silver','Gold','Platinum','Diamond','Legend'];
    const xpReq = [0,200,500,1000,2000,5000];
    let r = 0;
    for (let i = ranks.length-1; i >= 0; i--) { if (DATA.xp >= xpReq[i]) { r=i; break; } }
    DATA.rank = ranks[r];
}

function addGoal(name, target) {
    if (!name.trim() || target <= 0) { alert('Введите название и сумму'); return; }
    const emojis = ['💻','🏠','🚗','✈️','🎓','💎','🏖️','🎨','🚀','🌍'];
    DATA.goals.push({ id: Date.now(), name: name.trim(), target, saved: 0, emoji: emojis[Math.floor(Math.random()*emojis.length)] });
    checkAchievements(); saveData(); renderGoalsTab(); renderHeader();
}

function setActiveGoal(id) { DATA.activeGoalId = id; saveData(); renderGoalsList(); }

function contributeToGoal(id, amount) {
    const goal = DATA.goals.find(g => g.id === id);
    if (!goal) return;
    const bal = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0)
              - DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    if (bal < amount) { alert('❌ Недостаточно средств!'); return; }
    goal.saved += amount;
    DATA.transactions.push({ id: DATA.nextTxId++, text: `Вклад: ${goal.name}`, amount, type: 'expense', category: 'Инвестиции', cardId: null, date: Date.now() });
    checkAchievements(); saveData(); renderGoalsList(); renderHeader();
}

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

function completeQuest(id) {
    const q = DATA.quests.find(q => q.id === id);
    if (!q || q.done) return;
    q.done = true; DATA.xp += q.reward;
    if (DATA.xp >= 100) { DATA.level += Math.floor(DATA.xp/100); DATA.xp = DATA.xp%100; updateRank(); }
    checkAchievements(); saveData(); renderGamificationTab(); renderHeader();
}

function getRankInfo() {
    const ranks = [
        { name:'Bronze', icon:'🥉', xp:0 }, { name:'Silver', icon:'🥈', xp:200 },
        { name:'Gold', icon:'🥇', xp:500 }, { name:'Platinum', icon:'💎', xp:1000 },
        { name:'Diamond', icon:'🔷', xp:2000 }, { name:'Legend', icon:'🌟', xp:5000 },
    ];
    let cur = ranks[0], nxt = ranks[1];
    for (let i = ranks.length-1; i>=0; i--) {
        if (DATA.xp >= ranks[i].xp) { cur = ranks[i]; nxt = ranks[i+1]||null; break; }
    }
    return { current: cur, next: nxt };
}

// ================================================================
// ЭКСПОРТ
// ================================================================
function exportReport() {
    const inc = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const exp = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    let text = `📊 ОТЧЕТ FinLife\n${'━'.repeat(30)}\n`;
    text += `💰 Баланс: ${fmt(inc-exp)}\n📈 Доходы: ${fmt(inc)}\n📉 Расходы: ${fmt(exp)}\n`;
    text += `📅 ${new Date().toLocaleDateString()}\n🏆 Уровень: ${DATA.level} | XP: ${DATA.xp}\n${'━'.repeat(30)}\n`;
    text += '🎯 Цели:\n';
    DATA.goals.forEach(g => { text += `  ${g.emoji} ${g.name}: ${fmt(g.saved)} / ${fmt(g.target)} (${Math.round((g.saved/g.target)*100)}%)\n`; });
    if (DATA.cards.length) {
        text += `${'━'.repeat(30)}\n💳 Карты:\n`;
        DATA.cards.forEach(c => { text += `  **** ${c.number} (${c.bank}): потрачено ${fmt(getCardSpending(c.id))}\n`; });
    }
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `FinLife_${Date.now()}.txt`;
    link.click(); URL.revokeObjectURL(link.href);
}

// ================================================================
// ТЕМА
// ================================================================
let isDark = true;
function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
}

// ================================================================
// АУТЕНТИФИКАЦИЯ
// ================================================================
function renderAuthForm(mode) {
    const form = document.getElementById('authForm');
    if (mode === 'login') {
        form.innerHTML = `
            <div class="auth-field">
                <label>Логин</label>
                <input type="text" id="authLogin" placeholder="Ваш логин" autocomplete="username"/>
            </div>
            <div class="auth-field">
                <label>Пароль</label>
                <input type="password" id="authPass" placeholder="Пароль" autocomplete="current-password"/>
            </div>
            <button class="btn btn-primary auth-submit" id="authSubmit">Войти</button>
            <div id="authError" class="auth-error"></div>
        `;
        document.getElementById('authSubmit').addEventListener('click', doLogin);
        document.getElementById('authPass').addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
    } else {
        form.innerHTML = `
            <div class="auth-field">
                <label>Имя</label>
                <input type="text" id="authName" placeholder="Ваше имя"/>
            </div>
            <div class="auth-field">
                <label>Логин</label>
                <input type="text" id="authLogin" placeholder="Придумайте логин" autocomplete="username"/>
            </div>
            <div class="auth-field">
                <label>Пароль</label>
                <input type="password" id="authPass" placeholder="Придумайте пароль" autocomplete="new-password"/>
            </div>
            <div class="auth-field">
                <label>Email (необязательно)</label>
                <input type="email" id="authEmail" placeholder="email@example.com"/>
            </div>
            <button class="btn btn-success auth-submit" id="authSubmit">Создать аккаунт</button>
            <div id="authError" class="auth-error"></div>
        `;
        document.getElementById('authSubmit').addEventListener('click', doRegister);
    }
}

function doLogin() {
    const login = document.getElementById('authLogin').value.trim();
    const pass = document.getElementById('authPass').value;
    const err = document.getElementById('authError');
    const accs = getAccounts();
    if (!accs[login]) { err.textContent = '❌ Пользователь не найден'; return; }
    if (accs[login].password !== btoa(pass)) { err.textContent = '❌ Неверный пароль'; return; }
    setCurrentUser(login);
    loadData();
    showApp();
}

function doRegister() {
    const name = document.getElementById('authName').value.trim();
    const login = document.getElementById('authLogin').value.trim();
    const pass = document.getElementById('authPass').value;
    const email = document.getElementById('authEmail').value.trim();
    const err = document.getElementById('authError');
    if (!name) { err.textContent = '❌ Введите имя'; return; }
    if (login.length < 3) { err.textContent = '❌ Логин минимум 3 символа'; return; }
    if (pass.length < 4) { err.textContent = '❌ Пароль минимум 4 символа'; return; }
    const accs = getAccounts();
    if (accs[login]) { err.textContent = '❌ Логин уже занят'; return; }
    accs[login] = { name, login, email, password: btoa(pass), data: getDefaultData(), createdAt: Date.now() };
    saveAccounts(accs);
    setCurrentUser(login);
    loadData();
    showApp();
}

function doLogout() {
    setCurrentUser(null);
    DATA = getDefaultData();
    document.getElementById('app').style.display = 'none';
    document.getElementById('authOverlay').style.display = 'flex';
    renderAuthForm('login');
}

function showApp() {
    document.getElementById('authOverlay').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    renderAll();
}

function getCurrentUserInfo() {
    const user = getCurrentUser();
    const accs = getAccounts();
    return accs[user] || { name: user, login: user };
}

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

function renderAll() {
    renderHeader(); renderNav(); renderDashboard(); renderFooter();
}

// ========== ШАПКА ==========
function renderHeader() {
    const inc = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const exp = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const health = Math.min(100, Math.round(40 + (inc-exp)/10000 + DATA.xp/5));
    const userInfo = getCurrentUserInfo();
    const initials = (userInfo.name||'?').charAt(0).toUpperCase();

    document.getElementById('header').innerHTML = `
        <div class="logo">
            <i class="fas fa-coins"></i>
            <span>FinLife</span>
            <small>v3.0</small>
        </div>
        <div class="header-right">
            <select id="currencySelect" class="currency-select" title="Валюта">
                ${Object.entries(CURRENCIES).map(([k,v])=>`<option value="${k}" ${DATA.currency===k?'selected':''}>${k} ${v.symbol}</option>`).join('')}
            </select>
            <span class="badge badge-green"><i class="fas fa-heartbeat"></i> ${health}%</span>
            <span class="badge badge-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
            <div class="user-avatar" id="userAvatarBtn" title="${userInfo.name}">${initials}</div>
            <button class="theme-btn" id="themeToggle"><i class="fas fa-${isDark?'sun':'moon'}"></i></button>
        </div>
    `;

    document.getElementById('currencySelect').addEventListener('change', e => {
        DATA.currency = e.target.value; saveData();
        const tab = document.querySelector('.nav-btn.active')?.dataset.tab || 'dashboard';
        renderActiveTab(tab); renderHeader();
    });
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('userAvatarBtn').addEventListener('click', showAccountModal);
}

// ========== АККАУНТ МОДАЛ ==========
function showAccountModal() {
    const info = getCurrentUserInfo();
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'accountModal';
    modal.innerHTML = `
        <div class="modal-box">
            <div class="modal-header">
                <h3><i class="fas fa-user-circle"></i> Мой аккаунт</h3>
                <button class="modal-close" id="closeAccountModal"><i class="fas fa-times"></i></button>
            </div>
            <div class="account-profile">
                <div class="account-avatar-big">${(info.name||'?').charAt(0).toUpperCase()}</div>
                <div class="account-name">${info.name}</div>
                <div class="account-login">@${info.login}</div>
                ${info.email ? `<div class="account-email">${info.email}</div>` : ''}
            </div>
            <div class="account-stats">
                <div class="acc-stat"><div class="acc-stat-val">${DATA.transactions.length}</div><div class="acc-stat-lbl">Транзакций</div></div>
                <div class="acc-stat"><div class="acc-stat-val">${DATA.cards.length}</div><div class="acc-stat-lbl">Карт</div></div>
                <div class="acc-stat"><div class="acc-stat-val">${DATA.level}</div><div class="acc-stat-lbl">Уровень</div></div>
            </div>
            <div style="display:flex; gap:8px; margin-top:16px;">
                <button class="btn btn-danger" id="logoutBtn" style="flex:1;"><i class="fas fa-sign-out-alt"></i> Выйти</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeAccountModal').addEventListener('click', () => modal.remove());
    document.getElementById('logoutBtn').addEventListener('click', () => { modal.remove(); doLogout(); });
    modal.addEventListener('click', e => { if(e.target === modal) modal.remove(); });
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
// ДАШБОРД
// ================================================================
function renderDashboard() {
    const inc = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const exp = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const bal = inc - exp;
    const cur = CURRENCIES[DATA.currency];

    document.getElementById('content').innerHTML = `
        <div class="grid-3">
            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-wallet"></i> Баланс</div>
                    <span style="font-size:12px;color:#64748b;">${cur.name}</span>
                </div>
                <div class="balance-display">
                    <div class="balance-amount">${fmt(bal)}</div>
                    <div class="balance-stats">
                        <span class="income"><i class="fas fa-arrow-up"></i> ${fmt(inc)}</span>
                        <span class="expense"><i class="fas fa-arrow-down"></i> ${fmt(exp)}</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-credit-card"></i> Карты</div></div>
                ${DATA.cards.length === 0
                    ? `<div style="text-align:center;padding:12px;color:#94a3b8;font-size:14px;">
                        <i class="fas fa-plus-circle" style="font-size:28px;color:#334155;display:block;margin-bottom:8px;"></i>
                        Добавьте карту<br><small>для отслеживания трат</small>
                       </div>`
                    : DATA.cards.slice(0,2).map(c => `
                        <div class="card-mini ${c.color}">
                            <div class="card-mini-bank">${c.bank}</div>
                            <div class="card-mini-num">**** ${c.number}</div>
                            <div class="card-mini-spent">Потрачено: ${fmt(getCardSpending(c.id))}</div>
                        </div>`).join('')
                }
            </div>

            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-bolt"></i> Быстро</div></div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                    <button class="btn btn-success" id="quickIncome"><i class="fas fa-plus"></i> Доход</button>
                    <button class="btn btn-danger" id="quickExpense"><i class="fas fa-minus"></i> Расход</button>
                    <button class="btn btn-primary" id="quickCard"><i class="fas fa-credit-card"></i> Карта</button>
                    <button class="btn btn-warning" id="quickExport"><i class="fas fa-file-export"></i> Экспорт</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-list-ul"></i> Последние операции</div></div>
            <div class="tx-list" id="txList"></div>
        </div>
    `;

    const list = document.getElementById('txList');
    const reversed = [...DATA.transactions].reverse().slice(0,5);
    list.innerHTML = reversed.map(t => {
        const card = t.cardId ? DATA.cards.find(c=>c.id===t.cardId) : null;
        return `<div class="tx-item">
            <div class="tx-left">
                <div class="tx-icon ${t.type}"><i class="fas fa-${t.type==='income'?'arrow-down':'arrow-up'}"></i></div>
                <span class="tx-text">${t.text}</span>
                <span class="tx-category">${t.category}</span>
                ${card ? `<span class="tx-card-badge">**** ${card.number}</span>` : ''}
            </div>
            <div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'} ${fmt(t.amount)}</div>
        </div>`;
    }).join('') || '<div style="text-align:center;padding:12px;color:#94a3b8;">Нет транзакций</div>';

    document.getElementById('quickIncome').addEventListener('click', () => {
        const v = prompt('Сумма дохода:'); if(v&&parseInt(v)>0) addTransaction(`Доход ${parseInt(v)}`);
    });
    document.getElementById('quickExpense').addEventListener('click', () => {
        const v = prompt('Сумма расхода:'); if(v&&parseInt(v)>0) addTransaction(`Расход ${parseInt(v)}`);
    });
    document.getElementById('quickCard').addEventListener('click', () => {
        document.querySelector('[data-tab="cards"]').click();
    });
    document.getElementById('quickExport').addEventListener('click', exportReport);
}

// ================================================================
// ТРАНЗАКЦИИ
// ================================================================
function renderTransactionsTab() {
    const cardOptions = DATA.cards.map(c => `<option value="${c.id}">${c.bank} **** ${c.number}</option>`).join('');
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-plus-circle"></i> Добавить транзакцию</div></div>
            <div class="input-group">
                <input type="text" id="txInput" placeholder='Напр.: "Кофе 350" или "Зарплата 200000"'/>
                ${DATA.cards.length > 0 ? `
                <select id="txCardSelect" class="select-input">
                    <option value="">Без карты</option>
                    ${cardOptions}
                </select>` : ''}
                <button class="btn btn-success" id="txAddBtn"><i class="fas fa-plus"></i> Добавить</button>
                <button class="btn btn-danger" id="txClearBtn"><i class="fas fa-trash"></i></button>
            </div>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
                <button class="btn btn-outline btn-sm template" data-text="Кофе 350">☕ Кофе</button>
                <button class="btn btn-outline btn-sm template" data-text="Обед 1500">🍽 Обед</button>
                <button class="btn btn-outline btn-sm template" data-text="Такси 800">🚗 Такси</button>
                <button class="btn btn-outline btn-sm template" data-text="Продукты 5000">🛒 Продукты</button>
                <button class="btn btn-outline btn-sm template" data-text="Зарплата 200000">💰 ЗП</button>
                <button class="btn btn-outline btn-sm template" data-text="Инвестиции 15000">📈 Инвестиции</button>
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
        </div>
    `;

    document.getElementById('txAddBtn').addEventListener('click', () => {
        const val = document.getElementById('txInput').value.trim();
        const cardSel = document.getElementById('txCardSelect');
        const cardId = cardSel ? (cardSel.value ? parseInt(cardSel.value) : null) : null;
        if (val) { const ok = addTransaction(val, cardId); if(ok) document.getElementById('txInput').value=''; }
    });
    document.getElementById('txInput').addEventListener('keydown', e => { if(e.key==='Enter') document.getElementById('txAddBtn').click(); });
    document.getElementById('txClearBtn').addEventListener('click', () => {
        if(confirm('Удалить все транзакции?')) { DATA.transactions=[]; saveData(); renderTransactionsTab(); renderHeader(); }
    });
    document.querySelectorAll('.template').forEach(btn => {
        btn.addEventListener('click', () => { document.getElementById('txInput').value=btn.dataset.text; document.getElementById('txAddBtn').click(); });
    });

    let currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderFullTxList(currentFilter);
        });
    });
    renderFullTxList('all');
}

function renderFullTxList(filter) {
    const list = document.getElementById('fullTxList');
    if (!list) return;
    const filtered = filter==='all' ? DATA.transactions : DATA.transactions.filter(t=>t.type===filter);
    list.innerHTML = [...filtered].reverse().slice(0,50).map(t => {
        const card = t.cardId ? DATA.cards.find(c=>c.id===t.cardId) : null;
        const d = t.date ? new Date(t.date).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'}) : '';
        return `<div class="tx-item">
            <div class="tx-left">
                <div class="tx-icon ${t.type}"><i class="fas fa-${t.type==='income'?'arrow-down':'arrow-up'}"></i></div>
                <span class="tx-text">${t.text}</span>
                <span class="tx-category">${t.category}</span>
                ${card ? `<span class="tx-card-badge">**** ${card.number}</span>` : ''}
                ${d ? `<span style="font-size:11px;color:#475569;">${d}</span>` : ''}
            </div>
            <div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'} ${fmt(t.amount)}</div>
        </div>`;
    }).join('') || '<div style="text-align:center;padding:12px;color:#94a3b8;">Нет транзакций</div>';
}

// ================================================================
// КАРТЫ
// ================================================================
function renderCardsTab() {
    const cardColors = ['blue','purple','green','orange','red','dark'];
    const cardTypes = [
        { value:'visa', label:'Visa' },
        { value:'mastercard', label:'Mastercard' },
        { value:'mir', label:'МИР' },
        { value:'amex', label:'Amex' },
    ];

    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-plus-circle"></i> Добавить карту</div></div>
            <div class="card-form-grid">
                <div class="form-field">
                    <label>Номер карты</label>
                    <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" maxlength="19" class="card-number-input"/>
                </div>
                <div class="form-field">
                    <label>Держатель</label>
                    <input type="text" id="cardHolder" placeholder="IVAN IVANOV"/>
                </div>
                <div class="form-field">
                    <label>Срок (ММ/ГГ)</label>
                    <input type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5"/>
                </div>
                <div class="form-field">
                    <label>Банк</label>
                    <input type="text" id="cardBank" placeholder="Kaspi, Halyk..."/>
                </div>
                <div class="form-field">
                    <label>Тип</label>
                    <select id="cardType" class="select-input">
                        ${cardTypes.map(t=>`<option value="${t.value}">${t.label}</option>`).join('')}
                    </select>
                </div>
                <div class="form-field">
                    <label>Цвет</label>
                    <div class="color-picker">
                        ${cardColors.map(c=>`<button class="color-dot color-${c}" data-color="${c}" title="${c}"></button>`).join('')}
                    </div>
                </div>
            </div>
            <div id="cardPreview" class="card-preview blue">
                <div class="cp-bank">Банк</div>
                <div class="cp-chip"><i class="fas fa-microchip"></i></div>
                <div class="cp-number">**** **** **** ****</div>
                <div class="cp-bottom">
                    <div class="cp-holder">ДЕРЖАТЕЛЬ</div>
                    <div class="cp-expiry">MM/YY</div>
                    <div class="cp-type">VISA</div>
                </div>
            </div>
            <button class="btn btn-primary" id="addCardBtn" style="margin-top:12px;"><i class="fas fa-plus"></i> Добавить карту</button>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-credit-card"></i> Мои карты</div>
                <span style="font-size:13px;color:#94a3b8;">${DATA.cards.length} карт</span>
            </div>
            <div id="cardsList"></div>
        </div>
    `;

    let selectedColor = 'blue';

    // Live preview
    const updatePreview = () => {
        const num = document.getElementById('cardNumber').value || '**** **** **** ****';
        const holder = document.getElementById('cardHolder').value || 'ДЕРЖАТЕЛЬ';
        const expiry = document.getElementById('cardExpiry').value || 'MM/YY';
        const bank = document.getElementById('cardBank').value || 'Банк';
        const type = document.getElementById('cardType').value || 'visa';
        const preview = document.getElementById('cardPreview');
        preview.className = `card-preview ${selectedColor}`;
        preview.querySelector('.cp-bank').textContent = bank;
        preview.querySelector('.cp-number').textContent = formatCardNum(num);
        preview.querySelector('.cp-holder').textContent = holder.toUpperCase()||'ДЕРЖАТЕЛЬ';
        preview.querySelector('.cp-expiry').textContent = expiry;
        preview.querySelector('.cp-type').textContent = type.toUpperCase();
    };

    ['cardNumber','cardHolder','cardExpiry','cardBank','cardType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updatePreview);
    });

    document.getElementById('cardNumber').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);
        updatePreview();
    });

    document.getElementById('cardExpiry').addEventListener('input', function() {
        let v = this.value.replace(/\D/g,'');
        if (v.length >= 3) v = v.slice(0,2)+'/'+v.slice(2,4);
        this.value = v;
        updatePreview();
    });

    document.querySelectorAll('.color-dot').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-dot').forEach(b=>b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedColor = btn.dataset.color;
            updatePreview();
        });
    });

    document.getElementById('addCardBtn').addEventListener('click', () => {
        addCard(
            document.getElementById('cardNumber').value,
            document.getElementById('cardHolder').value,
            document.getElementById('cardExpiry').value,
            document.getElementById('cardBank').value,
            document.getElementById('cardType').value,
            selectedColor
        );
    });

    renderCardsList();
}

function formatCardNum(val) {
    const digits = val.replace(/\D/g,'');
    if (!digits) return '**** **** **** ****';
    const padded = digits.padEnd(16,'*');
    return padded.replace(/(.{4})/g,'$1 ').trim();
}

function renderCardsList() {
    const list = document.getElementById('cardsList');
    if (!list) return;

    if (DATA.cards.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:24px;color:#94a3b8;"><i class="fas fa-credit-card" style="font-size:36px;margin-bottom:12px;display:block;"></i>Нет карт. Добавьте первую карту выше.</div>';
        return;
    }

    list.innerHTML = DATA.cards.map(c => {
        const spent = getCardSpending(c.id);
        const txCount = DATA.transactions.filter(t=>t.cardId===c.id).length;
        const catSpending = {};
        DATA.transactions.filter(t=>t.cardId===c.id && t.type==='expense').forEach(t=>{
            catSpending[t.category] = (catSpending[t.category]||0) + t.amount;
        });
        const topCats = Object.entries(catSpending).sort((a,b)=>b[1]-a[1]).slice(0,3);

        return `<div class="card-row">
            <div class="card-display ${c.color}">
                <div class="cp-bank">${c.bank}</div>
                <div class="cp-chip"><i class="fas fa-microchip"></i></div>
                <div class="cp-number">**** **** **** ${c.number}</div>
                <div class="cp-bottom">
                    <div class="cp-holder">${c.holder}</div>
                    <div class="cp-expiry">${c.expiry}</div>
                    <div class="cp-type">${c.type.toUpperCase()}</div>
                </div>
            </div>
            <div class="card-stats-box">
                <div class="card-stat-big">
                    <div style="font-size:13px;color:#94a3b8;">Потрачено</div>
                    <div style="font-size:28px;font-weight:900;color:#ef4444;">${fmt(spent)}</div>
                </div>
                <div style="font-size:13px;color:#64748b;margin-bottom:8px;">${txCount} транзакций</div>
                ${topCats.length ? `
                <div style="font-size:12px;color:#94a3b8;margin-bottom:6px;">Топ категории:</div>
                ${topCats.map(([cat,amt])=>`
                    <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:13px;">
                        <span>${cat}</span><span style="color:#ef4444;font-weight:700;">${fmt(amt)}</span>
                    </div>
                `).join('')}` : '<div style="font-size:13px;color:#64748b;">Трат нет</div>'}
                <div style="margin-top:12px;">
                    <button class="btn btn-outline btn-sm add-tx-card" data-id="${c.id}" style="margin-right:6px;">
                        <i class="fas fa-plus"></i> Добавить трату
                    </button>
                    <button class="btn btn-danger btn-sm del-card" data-id="${c.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');

    document.querySelectorAll('.del-card').forEach(btn => {
        btn.addEventListener('click', () => deleteCard(parseInt(btn.dataset.id)));
    });
    document.querySelectorAll('.add-tx-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.dataset.id);
            const val = prompt('Введите трату (напр.: "Кофе 350"):');
            if (val) addTransaction(val, cardId);
        });
    });
}

// ================================================================
// СТАТИСТИКА
// ================================================================
function renderStatsTab() {
    const inc = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const exp = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);

    // По категориям
    const catData = {};
    DATA.transactions.filter(t=>t.type==='expense').forEach(t=>{
        catData[t.category] = (catData[t.category]||0) + t.amount;
    });
    const cats = Object.entries(catData).sort((a,b)=>b[1]-a[1]);
    const maxCat = cats[0]?.[1] || 1;

    // По дням (последние 7)
    const dayData = {};
    const now = Date.now();
    for (let i=6; i>=0; i--) {
        const d = new Date(now - 86400000*i);
        const key = d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'});
        dayData[key] = { income:0, expense:0 };
    }
    DATA.transactions.forEach(t => {
        if (!t.date) return;
        const d = new Date(t.date);
        const key = d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'});
        if (dayData[key]) dayData[key][t.type] += t.amount;
    });
    const days = Object.entries(dayData);
    const maxDay = Math.max(...days.map(([,v])=>Math.max(v.income,v.expense)), 1);

    // По картам
    const cardData = DATA.cards.map(c => ({
        card: c,
        spent: getCardSpending(c.id),
        count: DATA.transactions.filter(t=>t.cardId===c.id).length
    })).filter(c=>c.spent>0);

    // Нормализация валюты для отображения
    const cur = CURRENCIES[DATA.currency];

    document.getElementById('content').innerHTML = `
        <div class="grid-3">
            <div class="card">
                <div class="card-title" style="margin-bottom:12px;"><i class="fas fa-chart-pie"></i> Итого</div>
                <div style="text-align:center;">
                    <div style="font-size:13px;color:#94a3b8;">Баланс</div>
                    <div style="font-size:32px;font-weight:900;color:${inc-exp>=0?'#22c55e':'#ef4444'};">${fmt(inc-exp)}</div>
                    <div style="display:flex;justify-content:center;gap:20px;margin-top:10px;">
                        <div><div style="color:#22c55e;font-size:12px;">Доходы</div><div style="font-weight:700;">${fmt(inc)}</div></div>
                        <div><div style="color:#ef4444;font-size:12px;">Расходы</div><div style="font-weight:700;">${fmt(exp)}</div></div>
                    </div>
                    <div style="margin-top:12px;font-size:13px;color:#64748b;">
                        ${inc > 0 ? `Норма сбережений: <strong style="color:#0ea5e9;">${Math.round(((inc-exp)/inc)*100)}%</strong>` : '—'}
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-title" style="margin-bottom:12px;"><i class="fas fa-globe"></i> Конвертер валют</div>
                <div style="font-size:13px;color:#94a3b8;margin-bottom:8px;">Баланс в разных валютах:</div>
                ${Object.entries(CURRENCIES).map(([k,v])=>`
                    <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #334155;font-size:13px;">
                        <span style="color:#94a3b8;">${v.name} (${k})</span>
                        <span style="font-weight:700;${k===DATA.currency?'color:#0ea5e9;':''}">${Math.round((inc-exp)*v.rate).toLocaleString()} ${v.symbol}</span>
                    </div>
                `).join('')}
            </div>

            <div class="card">
                <div class="card-title" style="margin-bottom:12px;"><i class="fas fa-credit-card"></i> По картам</div>
                ${cardData.length === 0
                    ? `<div style="text-align:center;padding:12px;color:#94a3b8;">Нет трат по картам</div>`
                    : cardData.map(({card,spent,count})=>`
                        <div style="padding:8px 0;border-bottom:1px solid #334155;">
                            <div style="display:flex;justify-content:space-between;align-items:center;">
                                <div>
                                    <div style="font-weight:600;font-size:14px;">${card.bank}</div>
                                    <div style="font-size:12px;color:#64748b;">**** ${card.number} · ${count} операций</div>
                                </div>
                                <div style="font-weight:700;color:#ef4444;">${fmt(spent)}</div>
                            </div>
                        </div>
                    `).join('')
                }
            </div>
        </div>

        <div class="card">
            <div class="card-title" style="margin-bottom:16px;"><i class="fas fa-chart-bar"></i> Расходы за 7 дней</div>
            <div class="bar-chart">
                ${days.map(([day, val])=>`
                    <div class="bar-group">
                        <div class="bars">
                            <div class="bar income-bar" style="height:${Math.round((val.income/maxDay)*120)}px;" title="Доход: ${fmt(val.income)}"></div>
                            <div class="bar expense-bar" style="height:${Math.round((val.expense/maxDay)*120)}px;" title="Расход: ${fmt(val.expense)}"></div>
                        </div>
                        <div class="bar-label">${day}</div>
                    </div>
                `).join('')}
            </div>
            <div style="display:flex;gap:20px;margin-top:8px;font-size:12px;">
                <span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#22c55e;margin-right:4px;"></span>Доход</span>
                <span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#ef4444;margin-right:4px;"></span>Расход</span>
            </div>
        </div>

        <div class="card">
            <div class="card-title" style="margin-bottom:16px;"><i class="fas fa-tags"></i> По категориям</div>
            ${cats.length === 0
                ? `<div style="text-align:center;padding:12px;color:#94a3b8;">Нет расходов</div>`
                : cats.map(([cat,amt])=>`
                    <div style="margin-bottom:12px;">
                        <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:14px;">
                            <span>${cat}</span>
                            <span style="font-weight:700;color:#ef4444;">${fmt(amt)}</span>
                        </div>
                        <div style="height:6px;background:#334155;border-radius:10px;overflow:hidden;">
                            <div style="height:100%;width:${Math.round((amt/maxCat)*100)}%;background:linear-gradient(90deg,#ef4444,#f97316);border-radius:10px;transition:width 0.5s;"></div>
                        </div>
                        <div style="font-size:11px;color:#64748b;margin-top:2px;">${Math.round((amt/exp)*100)}% от расходов</div>
                    </div>
                `).join('')
            }
        </div>
    `;
}

// ================================================================
// ЦЕЛИ
// ================================================================
function renderGoalsTab() {
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-plus-circle"></i> Новая цель</div></div>
            <div class="input-group">
                <input type="text" id="goalName" placeholder="Название цели"/>
                <input type="number" id="goalTarget" placeholder="Сумма ₸" style="max-width:140px;"/>
                <button class="btn btn-primary" id="goalAddBtn"><i class="fas fa-plus"></i> Создать</button>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-bullseye"></i> Мои цели</div>
                <span style="font-size:13px;color:#94a3b8;">${DATA.goals.length} целей</span>
            </div>
            <div id="goalsList"></div>
        </div>
        <div class="card">
            <div class="card-header"><div class="card-title"><i class="fas fa-route"></i> Прогресс</div></div>
            <div id="roadmapDisplay" style="padding:12px;text-align:center;color:#94a3b8;font-size:14px;">🌟 Выбери цель</div>
        </div>
    `;
    document.getElementById('goalAddBtn').addEventListener('click', () => {
        addGoal(document.getElementById('goalName').value.trim(), parseInt(document.getElementById('goalTarget').value));
    });
    renderGoalsList();
}

function renderGoalsList() {
    const list = document.getElementById('goalsList');
    if (!list) return;
    list.innerHTML = DATA.goals.map(g => {
        const pct = Math.min(100,(g.saved/g.target)*100);
        return `<div class="goal-item ${g.id===DATA.activeGoalId?'active':''}" data-id="${g.id}">
            <span class="goal-emoji">${g.emoji}</span>
            <div class="goal-info">
                <div class="goal-name">${g.name}</div>
                <div class="goal-sub">${fmt(g.saved)} / ${fmt(g.target)}</div>
            </div>
            <div class="goal-progress"><div class="fill" style="width:${pct}%;"></div></div>
            <div class="goal-percent">${Math.round(pct)}%</div>
            <button class="btn btn-primary btn-sm contribute-btn" data-id="${g.id}"><i class="fas fa-plus"></i></button>
        </div>`;
    }).join('') || '<div style="text-align:center;padding:12px;color:#94a3b8;">Нет целей</div>';

    document.querySelectorAll('.goal-item').forEach(el => {
        el.addEventListener('click', e => { if(!e.target.closest('.contribute-btn')) setActiveGoal(parseInt(el.dataset.id)); });
    });
    document.querySelectorAll('.contribute-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const amount = prompt('Сколько внести? (₸)');
            if (amount && parseInt(amount)>0) contributeToGoal(parseInt(btn.dataset.id), parseInt(amount));
        });
    });
    renderRoadmap();
}

function renderRoadmap() {
    const active = DATA.goals.find(g=>g.id===DATA.activeGoalId);
    const display = document.getElementById('roadmapDisplay');
    if (!display) return;
    if (!active) { display.innerHTML = '🌟 Выбери цель для просмотра прогресса'; return; }
    const pct = Math.min(100,(active.saved/active.target)*100);
    const steps = ['Старт','25%','50%','75%','Финиш'];
    const currentStep = Math.min(4, Math.floor((pct/100)*4));
    display.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:28px;">${active.emoji}</div>
            <div style="font-size:18px;font-weight:700;">${active.name}</div>
            <div style="font-size:14px;color:#94a3b8;margin:4px 0;">${fmt(active.saved)} / ${fmt(active.target)}</div>
            <div style="width:100%;height:8px;background:#334155;border-radius:10px;margin:10px 0;overflow:hidden;">
                <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#0ea5e9,#22c55e);border-radius:10px;transition:width 0.5s;"></div>
            </div>
            <div style="font-size:28px;font-weight:900;color:#0ea5e9;">${Math.round(pct)}%</div>
            <div style="display:flex;justify-content:center;gap:8px;margin-top:10px;flex-wrap:wrap;">
                ${steps.map((s,i)=>`
                    <span style="padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;
                        ${i<currentStep?'background:#22c55e;color:#fff;':i===currentStep?'background:#0ea5e9;color:#fff;':'background:#334155;color:#94a3b8;'}">
                        ${s}</span>`).join('')}
            </div>
            <div style="margin-top:10px;font-size:13px;color:#94a3b8;">${pct>=100?'🎉 Цель достигнута!':'Продолжай копить!'}</div>
        </div>`;
}

// ================================================================
// ГЕЙМИФИКАЦИЯ
// ================================================================
function renderGamificationTab() {
    const rankInfo = getRankInfo();
    const xpPct = rankInfo.next ? Math.min(100,(DATA.xp/rankInfo.next.xp)*100) : 100;
    document.getElementById('content').innerHTML = `
        <div class="grid-2">
            <div class="card">
                <div class="card-header"><div class="card-title"><i class="fas fa-crown"></i> Ранг</div></div>
                <div style="text-align:center;padding:10px;">
                    <div style="font-size:64px;">${rankInfo.current.icon}</div>
                    <div style="font-size:24px;font-weight:800;color:#f59e0b;">${rankInfo.current.name}</div>
                    <div style="font-size:13px;color:#94a3b8;">XP: ${DATA.xp}${rankInfo.next?` / ${rankInfo.next.xp}`:''}</div>
                    <div style="width:100%;height:6px;background:#334155;border-radius:10px;margin-top:8px;overflow:hidden;">
                        <div style="height:100%;width:${xpPct}%;background:linear-gradient(90deg,#f59e0b,#f97316);border-radius:10px;"></div>
                    </div>
                    ${rankInfo.next
                        ? `<div style="font-size:12px;color:#94a3b8;margin-top:4px;">Следующий: ${rankInfo.next.name}</div>`
                        : '<div style="font-size:12px;color:#f59e0b;margin-top:4px;">🌟 Максимальный ранг!</div>'}
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-tasks"></i> Квесты</div>
                    <span style="font-size:13px;color:#94a3b8;">${DATA.quests.filter(q=>q.done).length}/${DATA.quests.length}</span>
                </div>
                <div id="questsList"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-trophy"></i> Достижения</div>
                <span style="font-size:13px;color:#94a3b8;">${Object.values(DATA.achievements).filter(v=>v).length} открыто</span>
            </div>
            <div class="achievements-grid" id="achievementsGrid"></div>
        </div>
    `;
    renderQuests(); renderAchievementsGrid();
}

function renderQuests() {
    const list = document.getElementById('questsList');
    if (!list) return;
    list.innerHTML = DATA.quests.map(q=>`
        <div class="quest-item ${q.done?'done':''}">
            <span class="quest-icon">${q.done?'✅':'📌'}</span>
            <div class="quest-info"><div class="quest-title">${q.title}</div><div class="quest-desc">${q.desc}</div></div>
            ${!q.done?`<button class="btn btn-primary btn-sm quest-btn" data-id="${q.id}">Выполнить</button>`:''}
            <span class="quest-reward">+${q.reward} XP</span>
        </div>`).join('');
    document.querySelectorAll('.quest-btn').forEach(btn=>{
        btn.addEventListener('click',()=>completeQuest(parseInt(btn.dataset.id)));
    });
}

function renderAchievementsGrid() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    const list = [
        { key:'first_tx', icon:'🌟', name:'Первый шаг' },
        { key:'five_tx', icon:'📝', name:'Пять записей' },
        { key:'ten_tx', icon:'📊', name:'Десять записей' },
        { key:'first_goal', icon:'🎯', name:'Первая цель' },
        { key:'goal_50', icon:'🚀', name:'Полпути' },
        { key:'quest_master', icon:'⚡', name:'Мастер квестов' },
        { key:'saver', icon:'💰', name:'Экономный' },
        { key:'level_5', icon:'⭐', name:'Продвинутый' },
        { key:'first_card', icon:'💳', name:'Первая карта' },
    ];
    grid.innerHTML = list.map(a=>`
        <div class="achievement-item ${DATA.achievements[a.key]?'unlocked':''}">
            <span class="ach-icon">${a.icon}</span>
            <span class="ach-name">${DATA.achievements[a.key]?a.name:'🔒'}</span>
        </div>`).join('');
}

// ================================================================
// ФУТЕР
// ================================================================
function renderFooter() {
    document.getElementById('footer').innerHTML = `
        <div class="status"><span class="dot"></span><span>Онлайн</span></div>
        <span>${new Date().toLocaleTimeString()}</span>
    `;
}

// ================================================================
// ЗАПУСК
// ================================================================
// Рендер аутентификации
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
        this.classList.add('active');
        renderAuthForm(this.dataset.mode);
    });
});

const currentUser = getCurrentUser();
if (currentUser) {
    loadData();
    checkAchievements();
    showApp();
} else {
    renderAuthForm('login');
}

console.log('🚀 FinLife v3.0 запущен!');