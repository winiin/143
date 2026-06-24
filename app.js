// ================================================================
// ДАННЫЕ
// ================================================================
const DATA = {
    transactions: [
        { id: 1, text: 'Зарплата', amount: 200000, type: 'income', category: 'Доход' },
        { id: 2, text: 'Продукты', amount: 8500, type: 'expense', category: 'Еда' },
        { id: 3, text: 'Такси', amount: 3200, type: 'expense', category: 'Транспорт' },
        { id: 4, text: 'Кино', amount: 2500, type: 'expense', category: 'Развлечения' },
        { id: 5, text: 'Кафе', amount: 1800, type: 'expense', category: 'Еда' },
    ],
    goals: [
        { id: 1, name: 'MacBook Pro', target: 500000, saved: 190000, emoji: '💻' },
        { id: 2, name: 'Квартира', target: 5000000, saved: 450000, emoji: '🏠' },
    ],
    activeGoalId: 1,
    level: 1,
    xp: 45,
    rank: 'Bronze',
    nextTxId: 6,
    quests: [
        { id: 1, title: 'Без кофе', desc: 'Не трать на кофе сегодня', done: false, reward: 50 },
        { id: 2, title: 'Проверь подписки', desc: 'Найди ненужную подписку', done: false, reward: 100 },
        { id: 3, title: 'Сэкономь 10%', desc: 'Потрать на 10% меньше вчера', done: false, reward: 75 },
        { id: 4, title: 'Запиши все траты', desc: 'Добавь 5 транзакций за день', done: false, reward: 50 },
    ],
    achievements: {
        first_tx: false,
        five_tx: false,
        ten_tx: false,
        first_goal: false,
        goal_50: false,
        quest_master: false,
        saver: false,
        level_5: false,
    }
};

// ================================================================
// СОХРАНЕНИЕ
// ================================================================
function saveData() {
    try {
        localStorage.setItem('finlife_data', JSON.stringify(DATA));
    } catch (e) {}
}

function loadData() {
    try {
        const raw = localStorage.getItem('finlife_data');
        if (raw) {
            const parsed = JSON.parse(raw);
            Object.assign(DATA, parsed);
        }
    } catch (e) {}
}

// ================================================================
// ПАРСЕР ТРАНЗАКЦИЙ
// ================================================================
function parseTransaction(text) {
    text = text.trim();
    const numbers = text.match(/\d+[\s\d]*/g);
    if (!numbers) return null;

    const amountStr = numbers[0].replace(/\s/g, '');
    const amount = parseInt(amountStr, 10);
    if (isNaN(amount) || amount <= 0) return null;

    let description = text.replace(/\d+[\s\d]*/g, '').trim();
    if (!description) description = 'Покупка';

    const incomeKeywords = ['зарплат', 'зп', 'доход', 'премия', 'аванс', 'кешбэк', 'возврат', 'пополнение', 'пришло', 'приход'];
    const lower = description.toLowerCase();

    let type = 'expense';
    let category = 'Прочее';

    for (const kw of incomeKeywords) {
        if (lower.includes(kw)) {
            type = 'income';
            category = 'Доход';
            break;
        }
    }

    if (type === 'expense') {
        const categories = {
            'Еда': ['кофе', 'обед', 'еда', 'продукт', 'ресторан', 'суши', 'доставк', 'пицц', 'бургер'],
            'Транспорт': ['такси', 'бензин', 'заправк', 'транспорт', 'метро', 'авто', 'машина'],
            'Развлечения': ['кино', 'игр', 'подписк', 'развлеч', 'бар', 'клуб', 'концерт'],
            'Жильё': ['квартир', 'аренд', 'коммун', 'жкх', 'коммунал', 'интернет', 'свет'],
            'Инвестиции': ['инвест', 'акци', 'облигац', 'фонд', 'вклад'],
        };
        for (const [cat, keywords] of Object.entries(categories)) {
            for (const kw of keywords) {
                if (lower.includes(kw)) {
                    category = cat;
                    break;
                }
            }
            if (category !== 'Прочее') break;
        }
    }

    return {
        text: description.charAt(0).toUpperCase() + description.slice(1),
        amount,
        type,
        category,
        date: Date.now()
    };
}

// ================================================================
// ДОБАВЛЕНИЕ ТРАНЗАКЦИИ
// ================================================================
function addTransaction(raw) {
    const parsed = parseTransaction(raw);
    if (!parsed) {
        alert('❌ Не распознано. Пример: "Обед 1200"');
        return false;
    }

    parsed.id = DATA.nextTxId++;
    DATA.transactions.push(parsed);
    DATA.xp += 5;

    if (DATA.xp >= 100) {
        DATA.level += Math.floor(DATA.xp / 100);
        DATA.xp = DATA.xp % 100;
        updateRank();
    }

    checkAchievements();
    saveData();

    // Re-render only the active tab
    const activeTab = document.querySelector('.nav-btn.active');
    const tab = activeTab ? activeTab.dataset.tab : 'dashboard';
    renderActiveTab(tab);
    renderHeader();
    return true;
}

// ================================================================
// ОБНОВЛЕНИЕ РАНГА
// ================================================================
function updateRank() {
    const ranks = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Legend'];
    const xpRequired = [0, 200, 500, 1000, 2000, 5000];
    let currentRank = 0;
    for (let i = ranks.length - 1; i >= 0; i--) {
        if (DATA.xp >= xpRequired[i]) {
            currentRank = i;
            break;
        }
    }
    DATA.rank = ranks[currentRank];
}

// ================================================================
// ЦЕЛИ
// ================================================================
function addGoal(name, target) {
    if (!name.trim() || target <= 0) {
        alert('Введите название и сумму');
        return;
    }

    const emojis = ['💻', '🏠', '🚗', '✈️', '🎓', '💎', '🏖️', '🎨', '🚀', '🌍'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    DATA.goals.push({
        id: Date.now(),
        name: name.trim(),
        target,
        saved: 0,
        emoji
    });

    checkAchievements();
    saveData();
    renderGoalsTab();
    renderHeader();
}

function setActiveGoal(id) {
    DATA.activeGoalId = id;
    saveData();
    renderGoalsList();
}

function contributeToGoal(id, amount) {
    const goal = DATA.goals.find(g => g.id === id);
    if (!goal) return;

    const totalIncome = DATA.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const totalExpense = DATA.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const balance = totalIncome - totalExpense;

    if (balance < amount) {
        alert('❌ Недостаточно средств!');
        return;
    }

    goal.saved += amount;
    DATA.transactions.push({
        id: DATA.nextTxId++,
        text: `Вклад: ${goal.name}`,
        amount,
        type: 'expense',
        category: 'Инвестиции'
    });

    checkAchievements();
    saveData();
    renderGoalsList();
    renderHeader();
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

    DATA.goals.forEach(g => {
        if ((g.saved / g.target) >= 0.5) a.goal_50 = true;
    });

    if (DATA.quests.filter(q => q.done).length >= 3) a.quest_master = true;

    const totalSaved = DATA.goals.reduce((s, g) => s + g.saved, 0);
    if (totalSaved >= 100000) a.saver = true;
    if (DATA.level >= 5) a.level_5 = true;

    saveData();
}

// ================================================================
// КВЕСТЫ
// ================================================================
function completeQuest(id) {
    const quest = DATA.quests.find(q => q.id === id);
    if (!quest || quest.done) return;

    quest.done = true;
    DATA.xp += quest.reward;

    if (DATA.xp >= 100) {
        DATA.level += Math.floor(DATA.xp / 100);
        DATA.xp = DATA.xp % 100;
        updateRank();
    }

    checkAchievements();
    saveData();
    renderGamificationTab();
    renderHeader();
}

function getRankInfo() {
    const ranks = [
        { name: 'Bronze', icon: '🥉', xp: 0 },
        { name: 'Silver', icon: '🥈', xp: 200 },
        { name: 'Gold', icon: '🥇', xp: 500 },
        { name: 'Platinum', icon: '💎', xp: 1000 },
        { name: 'Diamond', icon: '🔷', xp: 2000 },
        { name: 'Legend', icon: '🌟', xp: 5000 },
    ];

    let current = ranks[0];
    let next = ranks[1];

    for (let i = ranks.length - 1; i >= 0; i--) {
        if (DATA.xp >= ranks[i].xp) {
            current = ranks[i];
            next = ranks[i + 1] || null;
            break;
        }
    }

    return { current, next };
}

// ================================================================
// ЭКСПОРТ
// ================================================================
function exportReport() {
    const totalIncome = DATA.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const totalExpense = DATA.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

    let text = '📊 ОТЧЕТ FinLife\n';
    text += '━'.repeat(30) + '\n';
    text += `💰 Баланс: ${(totalIncome - totalExpense).toLocaleString()} ₸\n`;
    text += `📈 Доходы: ${totalIncome.toLocaleString()} ₸\n`;
    text += `📉 Расходы: ${totalExpense.toLocaleString()} ₸\n`;
    text += `📅 ${new Date().toLocaleDateString()}\n`;
    text += `🏆 Уровень: ${DATA.level} | XP: ${DATA.xp}\n`;
    text += '━'.repeat(30) + '\n';
    text += '🎯 Цели:\n';
    DATA.goals.forEach(g => {
        text += `  ${g.emoji} ${g.name}: ${g.saved.toLocaleString()} / ${g.target.toLocaleString()} ₸ (${Math.round((g.saved / g.target) * 100)}%)\n`;
    });

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `FinLife_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
}

// ================================================================
// ОЧИСТКА ТРАНЗАКЦИЙ
// ================================================================
function clearTransactions() {
    if (confirm('Удалить все транзакции?')) {
        DATA.transactions = [];
        saveData();
        renderTransactionsTab();
        renderHeader();
    }
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
// УТИЛИТА: рендер активной вкладки
// ================================================================
function renderActiveTab(tab) {
    switch (tab) {
        case 'dashboard': renderDashboard(); break;
        case 'transactions': renderTransactionsTab(); break;
        case 'goals': renderGoalsTab(); break;
        case 'gamification': renderGamificationTab(); break;
        default: renderDashboard();
    }
}

// ================================================================
// РЕНДЕР ВСЕГО
// ================================================================
function renderAll() {
    renderHeader();
    renderNav();
    renderDashboard();
    renderFooter();
}

// ========== ШАПКА ==========
function renderHeader() {
    const totalIncome = DATA.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const totalExpense = DATA.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const balance = totalIncome - totalExpense;
    const health = Math.min(100, Math.round(40 + (balance / 10000) + (DATA.xp / 5)));

    document.getElementById('header').innerHTML = `
        <div class="logo">
            <i class="fas fa-coins"></i>
            <span>FinLife</span>
            <small>v2.0</small>
        </div>
        <div class="header-right">
            <span class="badge badge-green"><i class="fas fa-heartbeat"></i> ${health}%</span>
            <span class="badge badge-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
            <span class="badge badge-blue"><i class="fas fa-crown"></i> ${DATA.rank}</span>
            <button class="theme-btn" id="themeToggle"><i class="fas fa-${isDark ? 'sun' : 'moon'}"></i></button>
        </div>
    `;

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

// ========== НАВИГАЦИЯ ==========
function renderNav() {
    document.getElementById('nav').innerHTML = `
        <button class="nav-btn active" data-tab="dashboard">
            <i class="fas fa-chart-pie"></i> Дашборд
        </button>
        <button class="nav-btn" data-tab="transactions">
            <i class="fas fa-list-ul"></i> Транзакции
        </button>
        <button class="nav-btn" data-tab="goals">
            <i class="fas fa-bullseye"></i> Цели
        </button>
        <button class="nav-btn" data-tab="gamification">
            <i class="fas fa-gamepad"></i> Игра
        </button>
    `;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function () {
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
    const totalIncome = DATA.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const totalExpense = DATA.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const balance = totalIncome - totalExpense;

    document.getElementById('content').innerHTML = `
        <div class="grid-3">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-wallet"></i> Баланс</div>
                </div>
                <div class="balance-display">
                    <div class="balance-amount">${balance.toLocaleString()} <span>₸</span></div>
                    <div class="balance-stats">
                        <span class="income"><i class="fas fa-arrow-up"></i> ${totalIncome.toLocaleString()} ₸</span>
                        <span class="expense"><i class="fas fa-arrow-down"></i> ${totalExpense.toLocaleString()} ₸</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-chart-bar"></i> Статистика</div>
                </div>
                <div style="text-align:center; padding:10px;">
                    <div style="font-size:14px; color:#94a3b8;">Всего транзакций</div>
                    <div style="font-size:32px; font-weight:900; color:#0ea5e9;">${DATA.transactions.length}</div>
                    <div style="display:flex; justify-content:center; gap:24px; margin-top:8px;">
                        <div><span style="color:#22c55e;">Доходов</span> <strong>${DATA.transactions.filter(t => t.type === 'income').length}</strong></div>
                        <div><span style="color:#ef4444;">Расходов</span> <strong>${DATA.transactions.filter(t => t.type === 'expense').length}</strong></div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-bolt"></i> Быстрый доступ</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                    <button class="btn btn-success" id="quickIncome"><i class="fas fa-plus"></i> Доход</button>
                    <button class="btn btn-danger" id="quickExpense"><i class="fas fa-minus"></i> Расход</button>
                    <button class="btn btn-primary" id="quickGoal"><i class="fas fa-bullseye"></i> Цель</button>
                    <button class="btn btn-warning" id="quickExport"><i class="fas fa-file-export"></i> Экспорт</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-list-ul"></i> Последние операции</div>
            </div>
            <div class="tx-list" id="txList"></div>
        </div>
    `;

    const list = document.getElementById('txList');
    const reversed = [...DATA.transactions].reverse().slice(0, 5);
    list.innerHTML = reversed.map(t => `
        <div class="tx-item">
            <div class="tx-left">
                <div class="tx-icon ${t.type}">
                    <i class="fas fa-${t.type === 'income' ? 'arrow-down' : 'arrow-up'}"></i>
                </div>
                <span class="tx-text">${t.text}</span>
                <span class="tx-category">${t.category}</span>
            </div>
            <div class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'} ${t.amount.toLocaleString()} ₸</div>
        </div>
    `).join('') || '<div style="text-align:center; padding:12px; color:#94a3b8;">Нет транзакций</div>';

    document.getElementById('quickIncome').addEventListener('click', () => {
        const val = prompt('Введите сумму дохода:');
        if (val && parseInt(val) > 0) addTransaction(`Доход ${parseInt(val)}`);
    });

    document.getElementById('quickExpense').addEventListener('click', () => {
        const val = prompt('Введите сумму расхода:');
        if (val && parseInt(val) > 0) addTransaction(`Расход ${parseInt(val)}`);
    });

    document.getElementById('quickGoal').addEventListener('click', () => {
        document.querySelector('[data-tab="goals"]').click();
    });

    document.getElementById('quickExport').addEventListener('click', exportReport);
}

// ================================================================
// ТРАНЗАКЦИИ
// ================================================================
function renderTransactionsTab() {
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-plus-circle"></i> Добавить транзакцию</div>
            </div>
            <div class="input-group">
                <input type="text" id="txInput" placeholder='Напр.: "Кофе 350" или "Зарплата 200000"' />
                <button class="btn btn-success" id="txAddBtn"><i class="fas fa-plus"></i> Добавить</button>
                <button class="btn btn-danger" id="txClearBtn"><i class="fas fa-trash"></i> Очистить</button>
            </div>
            <div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">
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
                <div style="display:flex; gap:4px;">
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
        if (val) {
            const ok = addTransaction(val);
            if (ok) document.getElementById('txInput').value = '';
        }
    });

    document.getElementById('txInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('txAddBtn').click();
        }
    });

    document.getElementById('txClearBtn').addEventListener('click', clearTransactions);

    document.querySelectorAll('.template').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('txInput').value = btn.dataset.text;
            document.getElementById('txAddBtn').click();
        });
    });

    let currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
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
    const filtered = filter === 'all' ? DATA.transactions :
        filter === 'income' ? DATA.transactions.filter(t => t.type === 'income') :
        DATA.transactions.filter(t => t.type === 'expense');

    list.innerHTML = [...filtered].reverse().slice(0, 30).map(t => `
        <div class="tx-item">
            <div class="tx-left">
                <div class="tx-icon ${t.type}">
                    <i class="fas fa-${t.type === 'income' ? 'arrow-down' : 'arrow-up'}"></i>
                </div>
                <span class="tx-text">${t.text}</span>
                <span class="tx-category">${t.category}</span>
            </div>
            <div class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'} ${t.amount.toLocaleString()} ₸</div>
        </div>
    `).join('') || '<div style="text-align:center; padding:12px; color:#94a3b8;">Нет транзакций</div>';
}

// ================================================================
// ЦЕЛИ
// ================================================================
function renderGoalsTab() {
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-plus-circle"></i> Новая цель</div>
            </div>
            <div class="input-group">
                <input type="text" id="goalName" placeholder="Название цели" />
                <input type="number" id="goalTarget" placeholder="Сумма" style="max-width:140px;" />
                <button class="btn btn-primary" id="goalAddBtn"><i class="fas fa-plus"></i> Создать</button>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-bullseye"></i> Мои цели</div>
                <span style="font-size:13px; color:#94a3b8;">${DATA.goals.length} целей</span>
            </div>
            <div id="goalsList"></div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-route"></i> Прогресс</div>
            </div>
            <div id="roadmapDisplay" style="padding:12px; text-align:center; color:#94a3b8; font-size:14px;">
                🌟 Выбери цель для просмотра прогресса
            </div>
        </div>
    `;

    document.getElementById('goalAddBtn').addEventListener('click', () => {
        const name = document.getElementById('goalName').value.trim();
        const target = parseInt(document.getElementById('goalTarget').value);
        if (name && target > 0) {
            addGoal(name, target);
        } else {
            alert('Введите название и сумму');
        }
    });

    renderGoalsList();
}

function renderGoalsList() {
    const list = document.getElementById('goalsList');
    if (!list) return;

    list.innerHTML = DATA.goals.map(g => {
        const pct = Math.min(100, (g.saved / g.target) * 100);
        const active = g.id === DATA.activeGoalId ? 'active' : '';
        return `
            <div class="goal-item ${active}" data-id="${g.id}">
                <span class="goal-emoji">${g.emoji}</span>
                <div class="goal-info">
                    <div class="goal-name">${g.name}</div>
                    <div class="goal-sub">${g.saved.toLocaleString()} / ${g.target.toLocaleString()} ₸</div>
                </div>
                <div class="goal-progress"><div class="fill" style="width:${pct}%;"></div></div>
                <div class="goal-percent">${Math.round(pct)}%</div>
                <button class="btn btn-primary btn-sm contribute-btn" data-id="${g.id}"><i class="fas fa-plus"></i></button>
            </div>
        `;
    }).join('') || '<div style="text-align:center; padding:12px; color:#94a3b8;">Нет целей</div>';

    document.querySelectorAll('.goal-item').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.closest('.contribute-btn')) return;
            setActiveGoal(parseInt(el.dataset.id));
        });
    });

    document.querySelectorAll('.contribute-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const amount = prompt('Сколько внести в цель? (₸)');
            if (amount && parseInt(amount) > 0) {
                contributeToGoal(id, parseInt(amount));
            }
        });
    });

    renderRoadmap();
}

function renderRoadmap() {
    const active = DATA.goals.find(g => g.id === DATA.activeGoalId);
    const display = document.getElementById('roadmapDisplay');
    if (!display) return;

    if (!active) {
        display.innerHTML = '🌟 Выбери цель для просмотра прогресса';
        return;
    }

    const pct = Math.min(100, (active.saved / active.target) * 100);
    const steps = ['Старт', '25%', '50%', '75%', 'Финиш'];
    const currentStep = Math.min(4, Math.floor((pct / 100) * 4));

    display.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:28px;">${active.emoji}</div>
            <div style="font-size:18px; font-weight:700;">${active.name}</div>
            <div style="font-size:14px; color:#94a3b8; margin:4px 0;">
                ${active.saved.toLocaleString()} / ${active.target.toLocaleString()} ₸
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:10px; margin:10px 0; overflow:hidden;">
                <div style="height:100%; width:${pct}%; background:linear-gradient(90deg, #0ea5e9, #22c55e); border-radius:10px; transition:width 0.5s;"></div>
            </div>
            <div style="font-size:28px; font-weight:900; color:#0ea5e9;">${Math.round(pct)}%</div>
            <div style="display:flex; justify-content:center; gap:8px; margin-top:10px; flex-wrap:wrap;">
                ${steps.map((s, i) => `
                    <span style="padding:4px 12px; border-radius:20px; font-size:11px; font-weight:600;
                        ${i < currentStep ? 'background:#22c55e; color:#fff;' :
                          i === currentStep ? 'background:#0ea5e9; color:#fff;' :
                          'background:#334155; color:#94a3b8;'}">
                        ${s}
                    </span>
                `).join('')}
            </div>
            <div style="margin-top:10px; font-size:13px; color:#94a3b8;">
                ${pct >= 100 ? '🎉 Цель достигнута!' : 'Продолжай копить!'}
            </div>
        </div>
    `;
}

// ================================================================
// ИГРА (ГЕЙМИФИКАЦИЯ)
// ================================================================
function renderGamificationTab() {
    const rankInfo = getRankInfo();
    const xpPct = rankInfo.next ? Math.min(100, (DATA.xp / rankInfo.next.xp) * 100) : 100;

    document.getElementById('content').innerHTML = `
        <div class="grid-2">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-crown"></i> Ранг</div>
                </div>
                <div style="text-align:center; padding:10px;">
                    <div style="font-size:64px;">${rankInfo.current.icon}</div>
                    <div style="font-size:24px; font-weight:800; color:#f59e0b;">${rankInfo.current.name}</div>
                    <div style="font-size:13px; color:#94a3b8;">
                        XP: ${DATA.xp}${rankInfo.next ? ` / ${rankInfo.next.xp}` : ''}
                    </div>
                    <div style="width:100%; height:6px; background:#334155; border-radius:10px; margin-top:8px; overflow:hidden;">
                        <div style="height:100%; width:${xpPct}%; background:linear-gradient(90deg, #f59e0b, #f97316); border-radius:10px;"></div>
                    </div>
                    ${rankInfo.next
                        ? `<div style="font-size:12px; color:#94a3b8; margin-top:4px;">Следующий: ${rankInfo.next.name}</div>`
                        : '<div style="font-size:12px; color:#f59e0b; margin-top:4px;">🌟 Максимальный ранг!</div>'
                    }
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-tasks"></i> Квесты</div>
                    <span style="font-size:13px; color:#94a3b8;">${DATA.quests.filter(q => q.done).length}/${DATA.quests.length}</span>
                </div>
                <div id="questsList"></div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-trophy"></i> Достижения</div>
                <span style="font-size:13px; color:#94a3b8;">${Object.values(DATA.achievements).filter(v => v).length} открыто</span>
            </div>
            <div class="achievements-grid" id="achievementsGrid"></div>
        </div>
    `;

    renderQuests();
    renderAchievementsGrid();
}

function renderQuests() {
    const list = document.getElementById('questsList');
    if (!list) return;

    list.innerHTML = DATA.quests.map(q => `
        <div class="quest-item ${q.done ? 'done' : ''}">
            <span class="quest-icon">${q.done ? '✅' : '📌'}</span>
            <div class="quest-info">
                <div class="quest-title">${q.title}</div>
                <div class="quest-desc">${q.desc}</div>
            </div>
            ${!q.done ? `<button class="btn btn-primary btn-sm quest-btn" data-id="${q.id}">Выполнить</button>` : ''}
            <span class="quest-reward">+${q.reward} XP</span>
        </div>
    `).join('');

    document.querySelectorAll('.quest-btn').forEach(btn => {
        btn.addEventListener('click', () => completeQuest(parseInt(btn.dataset.id)));
    });
}

function renderAchievementsGrid() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;

    const list = [
        { key: 'first_tx', icon: '🌟', name: 'Первый шаг' },
        { key: 'five_tx', icon: '📝', name: 'Пять записей' },
        { key: 'ten_tx', icon: '📊', name: 'Десять записей' },
        { key: 'first_goal', icon: '🎯', name: 'Первая цель' },
        { key: 'goal_50', icon: '🚀', name: 'Полпути' },
        { key: 'quest_master', icon: '⚡', name: 'Мастер квестов' },
        { key: 'saver', icon: '💰', name: 'Экономный' },
        { key: 'level_5', icon: '⭐', name: 'Продвинутый' },
    ];

    grid.innerHTML = list.map(a => `
        <div class="achievement-item ${DATA.achievements[a.key] ? 'unlocked' : ''}">
            <span class="ach-icon">${a.icon}</span>
            <span class="ach-name">${DATA.achievements[a.key] ? a.name : '🔒'}</span>
        </div>
    `).join('');
}

// ================================================================
// ФУТЕР
// ================================================================
function renderFooter() {
    document.getElementById('footer').innerHTML = `
        <div class="status">
            <span class="dot"></span>
            <span>Онлайн</span>
        </div>
        <span>${new Date().toLocaleTimeString()}</span>
    `;
}

// ================================================================
// ЗАПУСК
// ================================================================
loadData();
checkAchievements();
renderAll();

console.log('🚀 FinLife работает!');
console.log(`📊 Транзакций: ${DATA.transactions.length}`);
console.log(`🎯 Целей: ${DATA.goals.length}`);
console.log(`🏆 Уровень: ${DATA.level}`);
