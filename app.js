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

    saveData();
    renderAll();
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

    saveData();
    renderAll();
}

function setActiveGoal(id) {
    DATA.activeGoalId = id;
    saveData();
    renderAll();
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

    saveData();
    renderAll();
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

    saveData();
    renderAll();
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
        text += `  ${g.emoji} ${g.name}: ${g.saved.toLocaleString()} / ${g.target.toLocaleString()} ₸ (${Math.round((g.saved/g.target)*100)}%)\n`;
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
        renderAll();
    }
}

// ================================================================
// ТЕМА
// ================================================================
let isDark = true;

function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggle').innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ================================================================
// РЕНДЕР
// ================================================================
function renderAll() {
    renderHeader();
    renderNav();
    renderDashboard();
    renderTransactionsTab();
    renderGoalsTab();
    renderGamificationTab();
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
            <button class="theme-btn" id="themeToggle"><i class="fas fa-moon"></i></button>
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
            <i class="fas fa-list-ul"></i
