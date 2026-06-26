// ================================================================
// ЯЗЫКИ / ТІЛДЕР / LANGUAGES
// ================================================================
const LANGS = {
  ru: {
    appSub:'Твой финансовый путь',
    login:'Войти', register:'Регистрация',
    loginBtn:'Войти', registerBtn:'Создать аккаунт',
    emailPh:'Email', passPh:'Пароль', namePh:'Ваше имя', passPh2:'Пароль (мин. 6 символов)',
    demo:'Демо: demo@myway.kz / demo123',
    nav:{dashboard:'Дашборд',transactions:'Транзакции',cards:'Карты',deposits:'Депозиты',stats:'Статистика',goals:'Цели',gamification:'Игра'},
    balance:'Баланс', income:'Доходы', expense:'Расходы', savings:'Норма сбережений',
    txTitle:'Добавить операцию', txPh:'"Кофе 350" или "Зарплата 200000"',
    addBtn:'Добавить', clearBtn:'Очистить всё',
    allOps:'Все операции', all:'Все', incomes:'Доходы', expenses:'Расходы',
    noTx:'Нет транзакций', deleteTx:'Удалить операцию?',
    quickTemplates:[['☕ Кофе','Кофе 350'],['🍽 Обед','Обед 1500'],['🚗 Такси','Такси 800'],['🛒 Продукты','Продукты 5000'],['💰 ЗП','Зарплата 300000'],['📈 Инвест','Инвестиции 20000']],
    newGoal:'Новая цель', goalNamePh:'Название цели', goalAmountPh:'Сумма в ₸', createGoal:'Создать',
    myGoals:'Мои цели', goals_n:'целей', noGoals:'Нет целей', activeGoal:'Активная цель',
    contribute:'Сколько внести? (₸)', contributeBtn:'+', deleteGoal:'Удалить цель?', renameGoal:'Новое название:',
    depositTitle:'Депозиты', newDeposit:'Новый депозит', depNamePh:'Название депозита', depAmountPh:'Сумма (₸)',
    depRatePh:'Ставка % годовых', depMonthsPh:'Срок (месяцев)', addDeposit:'Добавить депозит',
    myDeposits:'Мои депозиты', noDeposits:'Нет депозитов. Добавьте первый!',
    depBank:'Банк', depRate:'Ставка', depTerm:'Срок', depIncome:'Доход', deleteDeposit:'Удалить депозит?',
    months:'мес', perYear:'% год.',
    aiAdvisor:'ИИ-советник', aiSub:'My Way Assistant', aiGreet:'Привет! 👋 Я ваш финансовый ИИ-советник. Спросите меня про расходы, сбережения или финансовые советы!',
    aiPh:'Задайте вопрос...',
    profile:'Мой профиль', logout:'Выйти из аккаунта',
    online:'Онлайн', level:'Уровень', rank:'Ранг', xp:'XP',
    cards:'Карты', addCard:'Добавить карту', myCards:'Мои карты', noCards:'Нет карт',
    deleteCard:'Удалить карту?', cardHolder:'Держатель', cardNum:'Номер карты', cardBank:'Банк', cardExpiry:'Срок',
    stats:'Статистика', net:'Чистый баланс', multiCurrency:'Мультивалюта', catExpenses:'Расходы по категориям',
    noExpenses:'Нет расходов', last7:'Доходы и расходы по дням (7 дней)',
    quickActs:'Быстрые действия', lastOps:'Последние операции',
    incomeQ:'Сумма дохода (₸):', expenseQ:'Сумма расхода (₸):',
    export:'Экспорт', exportDone:'Отчёт',
    confirm_clear:'Удалить все транзакции?',
    errorFmt:'❌ Формат: "Кофе 350" или "Зарплата 200000"',
    errorGoal:'Введите название и сумму',
    errorCard:'Введите 16 цифр номера карты',
    errorFunds:'❌ Недостаточно средств!',
    fillAll:'Заполните все поля',
    userNotFound:'❌ Пользователь не найден',
    wrongPass:'❌ Неверный пароль',
    enterName:'❌ Введите имя',
    badEmail:'❌ Введите корректный email',
    shortPass:'❌ Пароль минимум 6 символов',
    emailExists:'❌ Email уже зарегистрирован',
    registration:'Регистрация:', operations:'Операций',
    savingsRate:'Норма сбережений', noActiveGoal:'Нет активной цели',
    roadmap:'Прогресс цели', pickGoal:'Выбери цель', goalDone:'🎉 Цель достигнута!',
    start:'Старт', finish:'Финиш',
    quests:'Квесты', achievements:'Достижения',
    spent:'Потрачено', numOps:'Операций', addSpend:'Добавить трату по карте',
    spendQ:'Трата (напр.: "Кофе 350"):',
    preview:'Предпросмотр', cardColor:'Цвет карты', paySystem:'Платёжная система',
    cardsByCards:'Расходы по картам',
  },
  kz: {
    appSub:'Сенің қаржылық жолың',
    login:'Кіру', register:'Тіркелу',
    loginBtn:'Кіру', registerBtn:'Аккаунт жасау',
    emailPh:'Email', passPh:'Құпия сөз', namePh:'Атыңыз', passPh2:'Құпия сөз (кем дегенде 6 таңба)',
    demo:'Демо: demo@myway.kz / demo123',
    nav:{dashboard:'Басты',transactions:'Операциялар',cards:'Карталар',deposits:'Депозиттер',stats:'Статистика',goals:'Мақсаттар',gamification:'Ойын'},
    balance:'Баланс', income:'Кірістер', expense:'Шығыстар', savings:'Жинақ мөлшері',
    txTitle:'Операция қосу', txPh:'"Кофе 350" немесе "Жалақы 200000"',
    addBtn:'Қосу', clearBtn:'Барлығын өшіру',
    allOps:'Барлық операциялар', all:'Барлығы', incomes:'Кірістер', expenses:'Шығыстар',
    noTx:'Операциялар жоқ', deleteTx:'Операцияны жою?',
    quickTemplates:[['☕ Кофе','Кофе 350'],['🍽 Түскі ас','Обед 1500'],['🚗 Такси','Такси 800'],['🛒 Азық-түлік','Продукты 5000'],['💰 ЖА','Зарплата 300000'],['📈 Инвест','Инвестиции 20000']],
    newGoal:'Жаңа мақсат', goalNamePh:'Мақсат атауы', goalAmountPh:'Сомасы ₸', createGoal:'Жасау',
    myGoals:'Менің мақсаттарым', goals_n:'мақсат', noGoals:'Мақсаттар жоқ', activeGoal:'Белсенді мақсат',
    contribute:'Қанша енгізу? (₸)', contributeBtn:'+', deleteGoal:'Мақсатты жою?', renameGoal:'Жаңа атау:',
    depositTitle:'Депозиттер', newDeposit:'Жаңа депозит', depNamePh:'Депозит атауы', depAmountPh:'Сомасы (₸)',
    depRatePh:'Жылдық пайыз мөлшерлемесі', depMonthsPh:'Мерзімі (ай)', addDeposit:'Депозит қосу',
    myDeposits:'Менің депозиттерім', noDeposits:'Депозиттер жоқ. Біріншісін қосыңыз!',
    depBank:'Банк', depRate:'Мөлшерлеме', depTerm:'Мерзім', depIncome:'Табыс', deleteDeposit:'Депозитті жою?',
    months:'ай', perYear:'% жыл.',
    aiAdvisor:'ЖИ-кеңесші', aiSub:'My Way Assistant', aiGreet:'Сәлем! 👋 Мен сіздің қаржылық ЖИ-кеңесшіңізмін. Шығыстар, жинақтар немесе қаржылық кеңестер туралы сұраңыз!',
    aiPh:'Сұрақ қойыңыз...',
    profile:'Менің профилім', logout:'Шығу',
    online:'Онлайн', level:'Деңгей', rank:'Дәреже', xp:'XP',
    cards:'Карталар', addCard:'Карта қосу', myCards:'Менің карталарым', noCards:'Карталар жоқ',
    deleteCard:'Картаны жою?', cardHolder:'Иесі', cardNum:'Карта нөмірі', cardBank:'Банк', cardExpiry:'Мерзімі',
    stats:'Статистика', net:'Таза баланс', multiCurrency:'Мультивалюта', catExpenses:'Санаттар бойынша шығыстар',
    noExpenses:'Шығыстар жоқ', last7:'Күндер бойынша (7 күн)',
    quickActs:'Жылдам әрекеттер', lastOps:'Соңғы операциялар',
    incomeQ:'Кіріс сомасы (₸):', expenseQ:'Шығыс сомасы (₸):',
    export:'Экспорт', exportDone:'Есеп',
    confirm_clear:'Барлық операцияларды жою?',
    errorFmt:'❌ Формат: "Кофе 350" немесе "Жалақы 200000"',
    errorGoal:'Атауды және соманы енгізіңіз',
    errorCard:'Карта нөмірінің 16 санын енгізіңіз',
    errorFunds:'❌ Қаражат жеткіліксіз!',
    fillAll:'Барлық өрістерді толтырыңыз',
    userNotFound:'❌ Пайдаланушы табылмады',
    wrongPass:'❌ Қате құпия сөз',
    enterName:'❌ Атыңызды енгізіңіз',
    badEmail:'❌ Дұрыс email енгізіңіз',
    shortPass:'❌ Құпия сөз кем дегенде 6 таңба',
    emailExists:'❌ Email тіркелген',
    registration:'Тіркелу:', operations:'Операция',
    savingsRate:'Жинақ мөлшері', noActiveGoal:'Белсенді мақсат жоқ',
    roadmap:'Мақсат барысы', pickGoal:'Мақсатты таңдаңыз', goalDone:'🎉 Мақсатқа жетті!',
    start:'Басталу', finish:'Аяқталу',
    quests:'Тапсырмалар', achievements:'Жетістіктер',
    spent:'Жұмсалды', numOps:'Операция', addSpend:'Карта бойынша шығыс қосу',
    spendQ:'Шығыс (мыс.: "Кофе 350"):',
    preview:'Алдын ала көру', cardColor:'Карта түсі', paySystem:'Төлем жүйесі',
    cardsByCards:'Карталар бойынша шығыстар',
  },
  en: {
    appSub:'Your financial path',
    login:'Login', register:'Register',
    loginBtn:'Login', registerBtn:'Create account',
    emailPh:'Email', passPh:'Password', namePh:'Your name', passPh2:'Password (min. 6 chars)',
    demo:'Demo: demo@myway.kz / demo123',
    nav:{dashboard:'Dashboard',transactions:'Transactions',cards:'Cards',deposits:'Deposits',stats:'Statistics',goals:'Goals',gamification:'Game'},
    balance:'Balance', income:'Income', expense:'Expenses', savings:'Savings rate',
    txTitle:'Add transaction', txPh:'"Coffee 350" or "Salary 200000"',
    addBtn:'Add', clearBtn:'Clear all',
    allOps:'All transactions', all:'All', incomes:'Income', expenses:'Expenses',
    noTx:'No transactions', deleteTx:'Delete transaction?',
    quickTemplates:[['☕ Coffee','Coffee 350'],['🍽 Lunch','Lunch 1500'],['🚗 Taxi','Taxi 800'],['🛒 Groceries','Groceries 5000'],['💰 Salary','Salary 300000'],['📈 Invest','Investment 20000']],
    newGoal:'New goal', goalNamePh:'Goal name', goalAmountPh:'Amount ₸', createGoal:'Create',
    myGoals:'My goals', goals_n:'goals', noGoals:'No goals', activeGoal:'Active goal',
    contribute:'How much to add? (₸)', contributeBtn:'+', deleteGoal:'Delete goal?', renameGoal:'New name:',
    depositTitle:'Deposits', newDeposit:'New deposit', depNamePh:'Deposit name', depAmountPh:'Amount (₸)',
    depRatePh:'Annual rate %', depMonthsPh:'Term (months)', addDeposit:'Add deposit',
    myDeposits:'My deposits', noDeposits:'No deposits. Add the first one!',
    depBank:'Bank', depRate:'Rate', depTerm:'Term', depIncome:'Income', deleteDeposit:'Delete deposit?',
    months:'mo', perYear:'% p.a.',
    aiAdvisor:'AI Advisor', aiSub:'My Way Assistant', aiGreet:'Hi! 👋 I\'m your financial AI advisor. Ask me about expenses, savings, or financial tips!',
    aiPh:'Ask a question...',
    profile:'My profile', logout:'Log out',
    online:'Online', level:'Level', rank:'Rank', xp:'XP',
    cards:'Cards', addCard:'Add card', myCards:'My cards', noCards:'No cards',
    deleteCard:'Delete card?', cardHolder:'Holder', cardNum:'Card number', cardBank:'Bank', cardExpiry:'Expiry',
    stats:'Statistics', net:'Net balance', multiCurrency:'Multi-currency', catExpenses:'Expenses by category',
    noExpenses:'No expenses', last7:'Income & expenses (7 days)',
    quickActs:'Quick actions', lastOps:'Recent transactions',
    incomeQ:'Income amount (₸):', expenseQ:'Expense amount (₸):',
    export:'Export', exportDone:'Report',
    confirm_clear:'Delete all transactions?',
    errorFmt:'❌ Format: "Coffee 350" or "Salary 200000"',
    errorGoal:'Enter name and amount',
    errorCard:'Enter 16 card number digits',
    errorFunds:'❌ Insufficient funds!',
    fillAll:'Fill in all fields',
    userNotFound:'❌ User not found',
    wrongPass:'❌ Wrong password',
    enterName:'❌ Enter your name',
    badEmail:'❌ Enter a valid email',
    shortPass:'❌ Password min. 6 characters',
    emailExists:'❌ Email already registered',
    registration:'Joined:', operations:'Transactions',
    savingsRate:'Savings rate', noActiveGoal:'No active goal',
    roadmap:'Goal progress', pickGoal:'Pick a goal', goalDone:'🎉 Goal achieved!',
    start:'Start', finish:'Finish',
    quests:'Quests', achievements:'Achievements',
    spent:'Spent', numOps:'Transactions', addSpend:'Add card expense',
    spendQ:'Expense (e.g. "Coffee 350"):',
    preview:'Preview', cardColor:'Card color', paySystem:'Payment system',
    cardsByCards:'Expenses by card',
  }
};
 
let CURRENT_LANG = 'ru';
function t(key, sub) {
  const lang = LANGS[CURRENT_LANG] || LANGS.ru;
  if (sub) return (lang[key] && lang[key][sub]) || (LANGS.ru[key] && LANGS.ru[key][sub]) || sub;
  return lang[key] || LANGS.ru[key] || key;
}
 
// ================================================================
// ВАЛЮТЫ
// ================================================================
const CURRENCIES = {
  KZT: { symbol:'₸', name:'Тенге',   flag:'🇰🇿', rate:1        },
  RUB: { symbol:'₽', name:'Рубли',   flag:'🇷🇺', rate:0.21     },
  USD: { symbol:'$', name:'Доллар',  flag:'🇺🇸', rate:0.00215  },
  EUR: { symbol:'€', name:'Евро',    flag:'🇪🇺', rate:0.00198  },
  CNY: { symbol:'¥', name:'Юань',    flag:'🇨🇳', rate:0.0155   },
  AED: { symbol:'د.إ',name:'Дирхам', flag:'🇦🇪', rate:0.0079   },
  GBP: { symbol:'£', name:'Фунт',    flag:'🇬🇧', rate:0.00171  },
};
let CURRENT_CURRENCY = 'KZT';
 
// ================================================================
// АККАУНТЫ
// ================================================================
let CURRENT_USER = null;
 
function getAccounts() {
  try { return JSON.parse(localStorage.getItem('mw_accounts') || '{}'); } catch { return {}; }
}
function saveAccounts(a) {
  try { localStorage.setItem('mw_accounts', JSON.stringify(a)); } catch {}
}
function loadCurrentUser() {
  try { return localStorage.getItem('mw_current') || null; } catch { return null; }
}
function setCurrentUserKey(k) {
  try { localStorage.setItem('mw_current', k || ''); } catch {}
}
 
function defaultData() {
  return {
    transactions:[],
    goals:[],
    deposits:[],
    cards:[], activeGoalId:null, level:1, xp:0, rank:'Bronze',
    nextTxId:1, currency:'KZT',
    quests:[
      {id:1,title:'Без кофе',desc:'Не трать на кофе сегодня',done:false,reward:50},
      {id:2,title:'Проверь подписки',desc:'Найди ненужную подписку',done:false,reward:100},
      {id:3,title:'Сэкономь 10%',desc:'Потрать на 10% меньше вчера',done:false,reward:75},
      {id:4,title:'Запиши все траты',desc:'Добавь 5 транзакций за день',done:false,reward:50},
    ],
    achievements:{
      first_tx:false,five_tx:false,ten_tx:false,
      first_goal:false,goal_50:false,quest_master:false,
      saver:false,level_5:false,first_card:false,
    }
  };
}
 
let DATA = defaultData();
 
function saveData() {
  if (!CURRENT_USER) return;
  try {
    const a = getAccounts();
    if (a[CURRENT_USER.email]) {
      a[CURRENT_USER.email].data = DATA;
      saveAccounts(a);
    }
  } catch {}
}
function loadData() {
  if (!CURRENT_USER) return;
  try {
    const a = getAccounts();
    const u = a[CURRENT_USER.email];
    if (u && u.data) DATA = Object.assign(defaultData(), u.data);
    if (!DATA.deposits) DATA.deposits = [];
    CURRENT_CURRENCY = localStorage.getItem('mw_cur_' + CURRENT_USER.email) || 'KZT';
    CURRENT_LANG = localStorage.getItem('mw_lang_' + CURRENT_USER.email) || localStorage.getItem('mw_lang') || 'ru';
  } catch {}
}
 
// ================================================================
// УТИЛИТЫ
// ================================================================
function fmt(amount) {
  const c = CURRENCIES[CURRENT_CURRENCY] || CURRENCIES.KZT;
  const v = amount * c.rate;
  if (Math.abs(v) >= 1e6) return `${(v/1e6).toFixed(2)}M ${c.symbol}`;
  if (Math.abs(v) >= 1e3) return `${(v/1e3).toFixed(1)}K ${c.symbol}`;
  return `${Math.round(v).toLocaleString('ru-RU')} ${c.symbol}`;
}
function catEmoji(cat) {
  const m={
    'Еда':'🍽','Транспорт':'🚗','Развлечения':'🎬','Жильё':'🏠',
    'Инвестиции':'📈','Здоровье':'🏥','Одежда':'👗','Доход':'💰',
    'Учёба':'📚','Связь':'📱','Красота':'💄','Кафе/Доставка':'☕',
    'Подарки':'🎁','Большая покупка':'🛍','Путешествие':'✈️',
    'Стипендия':'🎓','Зарплата':'💼','Перевод':'💸','Прочее':'📦',
    'Прочий доход':'💰',
  };
  return m[cat]||'📦';
}
 
// ================================================================
// ТЕМА
// ================================================================
let isDark = true;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.innerHTML = `<i class="fas fa-${isDark?'sun':'moon'}"></i>`;
}
 
// ================================================================
// AUTH
// ================================================================
function initAuth() {
  // Demo account
  const accs = getAccounts();
  if (!accs['demo@myway.kz']) {
    accs['demo@myway.kz'] = {
      name:'Демо Пользователь', email:'demo@myway.kz',
      password: btoa('demo123'), data: defaultData(), createdAt: Date.now()
    };
    saveAccounts(accs);
  }
 
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const mode = this.dataset.auth;
      document.getElementById('loginForm').classList.toggle('hidden', mode !== 'login');
      document.getElementById('registerForm').classList.toggle('hidden', mode !== 'register');
      clearAuthErrors();
    });
  });
 
  document.getElementById('loginBtn').addEventListener('click', doLogin);
  document.getElementById('registerBtn').addEventListener('click', doRegister);
 
  document.getElementById('loginPassword').addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
  document.getElementById('regPassword').addEventListener('keydown', e => { if(e.key==='Enter') doRegister(); });
 
  // Check saved session
  const savedEmail = loadCurrentUser();
  if (savedEmail) {
    const a = getAccounts();
    if (a[savedEmail]) {
      CURRENT_USER = { name: a[savedEmail].name, email: savedEmail, avatar: a[savedEmail].name.charAt(0).toUpperCase() };
      loadData();
      showApp();
      return;
    }
  }
}
 
function clearAuthErrors() {
  document.querySelectorAll('.auth-error').forEach(e => e.remove());
}
 
function showAuthError(formId, msg) {
  clearAuthErrors();
  const form = document.getElementById(formId);
  const err = document.createElement('div');
  err.className = 'auth-error';
  err.textContent = msg;
  form.appendChild(err);
}
 
function doLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('loginPassword').value;
  if (!email || !pass) { showAuthError('loginForm','Заполните все поля'); return; }
  const accs = getAccounts();
  if (!accs[email]) { showAuthError('loginForm','❌ Пользователь не найден'); return; }
  if (accs[email].password !== btoa(pass)) { showAuthError('loginForm','❌ Неверный пароль'); return; }
  CURRENT_USER = { name: accs[email].name, email, avatar: accs[email].name.charAt(0).toUpperCase() };
  setCurrentUserKey(email);
  loadData();
  showApp();
}
 
function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('regPassword').value;
  if (!name)          { showAuthError('registerForm','❌ Введите имя'); return; }
  if (!email.includes('@')) { showAuthError('registerForm','❌ Введите корректный email'); return; }
  if (pass.length < 6){ showAuthError('registerForm','❌ Пароль минимум 6 символов'); return; }
  const accs = getAccounts();
  if (accs[email])    { showAuthError('registerForm','❌ Email уже зарегистрирован'); return; }
  accs[email] = { name, email, password: btoa(pass), data: defaultData(), createdAt: Date.now() };
  saveAccounts(accs);
  CURRENT_USER = { name, email, avatar: name.charAt(0).toUpperCase() };
  setCurrentUserKey(email);
  loadData();
  showApp();
}
 
function doLogout() {
  setCurrentUserKey(null);
  CURRENT_USER = null;
  DATA = defaultData();
  document.getElementById('app').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
  document.getElementById('aiChatBubble').classList.add('hidden');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  clearAuthErrors();
  // reset to login tab
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('[data-auth="login"]').classList.add('active');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
}
 
function showApp() {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('aiChatBubble').classList.remove('hidden');
  renderAll();
  initAIChat();
}
 
// ================================================================
// ПРОФИЛЬ
// ================================================================
function showProfileModal() {
  const inc = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const modal = document.createElement('div');
  modal.className = 'modal-overlay'; modal.id = 'profileModal';
  const accs = getAccounts();
  const regDate = accs[CURRENT_USER.email]?.createdAt
    ? new Date(accs[CURRENT_USER.email].createdAt).toLocaleDateString('ru-RU') : '—';
  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3><i class="fas fa-user-circle"></i> Мой профиль</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div style="text-align:center;margin-bottom:20px;">
        <div class="profile-avatar">${CURRENT_USER.avatar}</div>
        <div class="profile-name">${CURRENT_USER.name}</div>
        <div class="profile-email">${CURRENT_USER.email}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:4px;">Регистрация: ${regDate}</div>
      </div>
      <div class="profile-stats">
        <div class="pstat"><span class="pstat-value">${DATA.transactions.length}</span><div class="pstat-label">Операций</div></div>
        <div class="pstat"><span class="pstat-value">${DATA.cards.length}</span><div class="pstat-label">Карт</div></div>
        <div class="pstat"><span class="pstat-value">${DATA.level}</span><div class="pstat-label">Уровень</div></div>
        <div class="pstat"><span class="pstat-value">${DATA.goals.length}</span><div class="pstat-label">Целей</div></div>
      </div>
      <div style="margin-top:16px;padding:14px;background:var(--bg3);border-radius:var(--r-sm);font-size:13px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="color:var(--text3);">Общий баланс</span>
          <span style="font-weight:700;color:${inc-exp>=0?'var(--green)':'var(--red)'};">${fmt(inc-exp)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="color:var(--text3);">Ранг</span>
          <span style="font-weight:700;color:var(--gold);">🏅 ${DATA.rank}</span>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <span style="color:var(--text3);">XP</span>
          <span style="font-weight:700;color:var(--accent2);">${DATA.xp} XP</span>
        </div>
      </div>
      <button class="btn btn-danger w-full" style="margin-top:16px;" onclick="this.closest('.modal-overlay').remove();doLogout();">
        <i class="fas fa-sign-out-alt"></i> Выйти из аккаунта
      </button>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if(e.target===modal) modal.remove(); });
}
 
// ================================================================
// ТРАНЗАКЦИИ — ПАРСЕР
// ================================================================
// Категории расходов и доходов
const EXPENSE_CATS = ['Транспорт','Учёба','Здоровье','Связь/подписки','Одежда/обувь','Красота/уход','Кафе/доставка','Подарки','Развлечения','Большая покупка','Поездка/путешествие','Другое'];
const INCOME_CATS  = ['Зарплата','Стипендия','Перевод от семьи','Другой доход'];
 
function parseTx(text) {
  text = text.trim();
  const nums = text.match(/\d[\d\s]*/g);
  if (!nums) return null;
  const amount = parseInt(nums[0].replace(/\s/g,''));
  if (isNaN(amount)||amount<=0) return null;
  let desc = text.replace(/\d[\d\s]*/g,'').trim() || 'Покупка';
  const lower = desc.toLowerCase();
 
  // Определяем тип и категорию по ключевым словам
  const incomeMap = [
    {kws:['зарплат','зп','salary','оклад','получил зп','получила зп'], cat:'Зарплата'},
    {kws:['стипенд','stipend','гранд','грант'], cat:'Стипендия'},
    {kws:['перевод от','мама','папа','родител','семья','family transfer'], cat:'Перевод от семьи'},
    {kws:['доход','премия','аванс','кешбэк','возврат','пришло','пополнение','прибыль','выручка','income'], cat:'Другой доход'},
  ];
  const expenseMap = [
    {kws:['такси','taxi','автобус','метро','бензин','заправк','транспорт','uber','яндекс','bolt','маршрутк'], cat:'Транспорт'},
    {kws:['учёб','учеб','курс','course','книг','book','образован','универ','школ','study'], cat:'Учёба'},
    {kws:['аптек','врач','клиник','лекарств','здоров','медиц','health','pharmacy','больниц','анализ'], cat:'Здоровье'},
    {kws:['интернет','подписк','netflix','spotify','youtube','телефон','связь','subscription','mobile','sim'], cat:'Связь/подписки'},
    {kws:['одежд','обувь','шопинг','clothes','shoes','shopping','платье','брюки','куртк','футболк'], cat:'Одежда/обувь'},
    {kws:['красот','парикмахер','beauty','уход','salon','spa','маникюр','педикюр','косметик'], cat:'Красота/уход'},
    {kws:['кофе','coffee','обед','ужин','завтрак','ресторан','суши','пицц','бургер','доставк','cafe','delivery','wolt','glovo','еда','food','столовая','фастфуд'], cat:'Кафе/доставка'},
    {kws:['подарок','gift','праздник','present','цветы','торт'], cat:'Подарки'},
    {kws:['кино','игр','развлеч','бар','клуб','концерт','game','cinema','party','боулинг','каток'], cat:'Развлечения'},
    {kws:['ноутбук','laptop','телефон','phone','техник','tech','электро','айфон','самсунг','планшет','iphone','samsung'], cat:'Большая покупка'},
    {kws:['отпуск','поездк','путешеств','авиа','отель','hotel','travel','visa','турист','билет на самолёт'], cat:'Поездка/путешествие'},
    {kws:['квартир','аренд','коммун','жкх','свет','вода','rent','utility','газ','жильё'], cat:'Другое'},
  ];
 
  let type = 'expense', category = 'Другое';
 
  for (const {kws,cat} of incomeMap) {
    for (const kw of kws) { if (lower.includes(kw)) { type='income'; category=cat; break; } }
    if (type==='income') break;
  }
  if (type==='expense') {
    for (const {kws,cat} of expenseMap) {
      for (const kw of kws) { if (lower.includes(kw)) { category=cat; break; } }
      if (category!=='Другое') break;
    }
  }
  return { text: desc.charAt(0).toUpperCase()+desc.slice(1), amount, type, category, date:Date.now() };
}
 
function addTransaction(raw, cardId=null) {
  const parsed = parseTx(raw);
  if (!parsed) { alert('❌ Формат: "Кофе 350" или "Зарплата 200000"'); return false; }
  parsed.id = DATA.nextTxId++;
  parsed.cardId = cardId;
  DATA.transactions.push(parsed);
  DATA.xp += 5;
  if (DATA.xp>=100) { DATA.level+=Math.floor(DATA.xp/100); DATA.xp=DATA.xp%100; updateRank(); }
  checkAchievements(); saveData();
  renderHeader(); renderActiveTab(_activeTab);
  return true;
}
 
// ================================================================
// КАРТЫ
// ================================================================
function getCardSpent(id) {
  return DATA.transactions.filter(t=>t.cardId===id&&t.type==='expense').reduce((s,t)=>s+t.amount,0);
}
function addCard(num, holder, expiry, bank, type, color) {
  const digits = num.replace(/\D/g,'');
  if (digits.length < 16) { alert('Введите 16 цифр номера карты'); return; }
  DATA.cards.push({ id:Date.now(), number:digits.slice(-4), holder:holder||'Держатель', expiry:expiry||'00/00', bank:bank||'Банк', type:type||'visa', color:color||'purple', balance:0 });
  checkAchievements(); saveData(); renderActiveTab(_activeTab);
}
function deleteCard(id) {
  if (!confirm('Удалить карту?')) return;
  DATA.cards = DATA.cards.filter(c=>c.id!==id);
  DATA.transactions.forEach(t=>{if(t.cardId===id)t.cardId=null;});
  saveData(); renderActiveTab(_activeTab);
}
 
// ================================================================
// ЦЕЛИ
// ================================================================
function addGoal(name, target) {
  if (!name||target<=0) { alert('Введите название и сумму'); return; }
  const emojis=['💻','🏠','🚗','✈️','🎓','💎','🏖','🎨','🚀','🌍','📱','🎮'];
  DATA.goals.push({ id:Date.now(), name, target, saved:0, emoji:emojis[Math.floor(Math.random()*emojis.length)] });
  checkAchievements(); saveData(); renderGoalsTab(); renderHeader();
}
function contributeGoal(id, amount) {
  const g = DATA.goals.find(x=>x.id===id); if (!g) return;
  const bal = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0)
            - DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  if (bal < amount) { alert('❌ Недостаточно средств!'); return; }
  g.saved += amount;
  DATA.transactions.push({ id:DATA.nextTxId++, text:`Вклад: ${g.name}`, amount, type:'expense', category:'Инвестиции', cardId:null, date:Date.now() });
  checkAchievements(); saveData(); renderGoalsList(); renderHeader();
}
 
// ================================================================
// ГЕЙМИФИКАЦИЯ
// ================================================================
function updateRank() {
  const r=['Bronze','Silver','Gold','Platinum','Diamond','Legend'];
  const x=[0,200,500,1000,2000,5000];
  let i=0;
  for (let j=r.length-1;j>=0;j--) { if(DATA.xp>=x[j]){i=j;break;} }
  DATA.rank=r[i];
}
function checkAchievements() {
  const a=DATA.achievements;
  if(DATA.transactions.length>=1)a.first_tx=true;
  if(DATA.transactions.length>=5)a.five_tx=true;
  if(DATA.transactions.length>=10)a.ten_tx=true;
  if(DATA.goals.length>=1)a.first_goal=true;
  DATA.goals.forEach(g=>{if(g.saved/g.target>=0.5)a.goal_50=true;});
  if(DATA.quests.filter(q=>q.done).length>=3)a.quest_master=true;
  if(DATA.goals.reduce((s,g)=>s+g.saved,0)>=100000)a.saver=true;
  if(DATA.level>=5)a.level_5=true;
  if(DATA.cards.length>=1)a.first_card=true;
  saveData();
}
function completeQuest(id) {
  const q=DATA.quests.find(x=>x.id===id); if(!q||q.done)return;
  q.done=true; DATA.xp+=q.reward;
  if(DATA.xp>=100){DATA.level+=Math.floor(DATA.xp/100);DATA.xp=DATA.xp%100;updateRank();}
  checkAchievements(); saveData(); renderGamificationTab(); renderHeader();
}
function getRankInfo() {
  const ranks=[{name:'Bronze',icon:'🥉',xp:0},{name:'Silver',icon:'🥈',xp:200},{name:'Gold',icon:'🥇',xp:500},
    {name:'Platinum',icon:'💎',xp:1000},{name:'Diamond',icon:'🔷',xp:2000},{name:'Legend',icon:'🌟',xp:5000}];
  let cur=ranks[0],nxt=ranks[1];
  for(let i=ranks.length-1;i>=0;i--){if(DATA.xp>=ranks[i].xp){cur=ranks[i];nxt=ranks[i+1]||null;break;}}
  return {current:cur,next:nxt};
}
 
// ================================================================
// ЭКСПОРТ
// ================================================================
function exportReport() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  let txt=`📊 ОТЧЁТ My Way\n${'━'.repeat(32)}\n`;
  txt+=`👤 ${CURRENT_USER.name} (${CURRENT_USER.email})\n📅 ${new Date().toLocaleString('ru-RU')}\n${'━'.repeat(32)}\n`;
  txt+=`💰 Баланс: ${fmt(inc-exp)}\n📈 Доходы: ${fmt(inc)}\n📉 Расходы: ${fmt(exp)}\n`;
  txt+=`🏆 Уровень: ${DATA.level} | XP: ${DATA.xp} | Ранг: ${DATA.rank}\n${'━'.repeat(32)}\n`;
  txt+='🎯 Цели:\n';
  DATA.goals.forEach(g=>{ txt+=`  ${g.emoji} ${g.name}: ${fmt(g.saved)} / ${fmt(g.target)} (${Math.round(g.saved/g.target*100)}%)\n`; });
  if(DATA.cards.length){ txt+=`${'━'.repeat(32)}\n💳 Карты:\n`; DATA.cards.forEach(c=>{ txt+=`  **** ${c.number} (${c.bank}): ${fmt(getCardSpent(c.id))}\n`; }); }
  const blob=new Blob([txt],{type:'text/plain;charset=utf-8'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download=`MyWay_${Date.now()}.txt`; a.click(); URL.revokeObjectURL(a.href);
}
 
// ================================================================
// НАВИГАЦИЯ
// ================================================================
const TAB_DEFS = [
  {id:'dashboard',    icon:'fa-chart-pie'},
  {id:'transactions', icon:'fa-list-ul'},
  {id:'cards',        icon:'fa-credit-card'},
  {id:'deposits',     icon:'fa-piggy-bank'},
  {id:'stats',        icon:'fa-chart-bar'},
  {id:'goals',        icon:'fa-bullseye'},
  {id:'gamification', icon:'fa-gamepad'},
];
let _activeTab = 'dashboard';
 
function renderAll() { renderNav(); renderSidebarUser(); renderHeader(); renderDashboard(); renderFooter(); initMobileToggle(); }
 
function renderNav() {
  const nav=document.getElementById('nav');
  nav.innerHTML=TAB_DEFS.map(({id,icon})=>`
    <button class="nav-btn ${id===_activeTab?'active':''}" data-tab="${id}">
      <i class="fas ${icon}"></i> ${t('nav',id)}
    </button>`).join('');
  nav.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click',function(){
      nav.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active'); _activeTab=this.dataset.tab;
      renderHeader(); renderActiveTab(_activeTab);
      document.getElementById('sidebar').classList.remove('open');
    });
  });
}
 
function renderSidebarUser() {
  const el=document.getElementById('sidebarUser'); if(!el)return;
  el.innerHTML=`
    <div class="su-avatar">${CURRENT_USER.avatar}</div>
    <div class="su-info">
      <div class="su-name">${CURRENT_USER.name}</div>
      <div class="su-rank">🏅 ${DATA.rank} · Lv.${DATA.level}</div>
    </div>
    <i class="fas fa-chevron-right" style="font-size:11px;color:var(--text3);"></i>`;
  el.onclick=showProfileModal;
}
 
function renderHeader() {
  const ti=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const te=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const health=Math.min(100,Math.round(40+(ti-te)/10000+DATA.xp/5));
  const curOpts=Object.entries(CURRENCIES).map(([k,v])=>`<option value="${k}" ${k===CURRENT_CURRENCY?'selected':''}>${v.flag} ${k}</option>`).join('');
  const tabDef = TAB_DEFS.find(x=>x.id===_activeTab)||TAB_DEFS[0];
  const langOpts = ['ru','kz','en'].map(l=>`<option value="${l}" ${l===CURRENT_LANG?'selected':''}>${l==='ru'?'🇷🇺 RU':l==='kz'?'🇰🇿 KZ':'🇬🇧 EN'}</option>`).join('');
  document.getElementById('header').innerHTML=`
    <div class="topbar-left">
      <button class="menu-toggle" id="menuToggle"><i class="fas fa-bars"></i></button>
      <div>
        <div class="topbar-title"><i class="fas ${tabDef.icon}" style="color:var(--accent2);margin-right:8px;font-size:15px;"></i>${t('nav',tabDef.id)}</div>
        <div class="topbar-sub">My Way · ${new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'})}</div>
      </div>
    </div>
    <div class="topbar-right">
      <select class="currency-select" id="langSelect" title="Language">${langOpts}</select>
      <select class="currency-select" id="currencySelect">${curOpts}</select>
      <span class="badge badge-green"><i class="fas fa-heartbeat"></i> ${health}%</span>
      <span class="badge badge-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
      <button class="theme-btn" id="themeToggle"><i class="fas fa-${isDark?'sun':'moon'}"></i></button>
    </div>`;
  document.getElementById('themeToggle').addEventListener('click',toggleTheme);
  document.getElementById('currencySelect').addEventListener('change',function(){
    CURRENT_CURRENCY=this.value;
    localStorage.setItem('mw_cur_'+CURRENT_USER.email,CURRENT_CURRENCY);
    renderActiveTab(_activeTab); renderHeader();
  });
  document.getElementById('langSelect').addEventListener('change',function(){
    CURRENT_LANG=this.value;
    localStorage.setItem('mw_lang_'+CURRENT_USER.email,CURRENT_LANG);
    localStorage.setItem('mw_lang',CURRENT_LANG);
    renderAll(); renderActiveTab(_activeTab);
  });
  const mt=document.getElementById('menuToggle');
  if(mt) mt.addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
}
 
function initMobileToggle() {
  document.addEventListener('click',e=>{
    const sb=document.getElementById('sidebar');
    if(sb&&sb.classList.contains('open')&&!sb.contains(e.target)&&!e.target.closest('#menuToggle'))
      sb.classList.remove('open');
  },{once:false});
}
 
function renderActiveTab(tab) {
  switch(tab){
    case 'dashboard':    renderDashboard(); break;
    case 'transactions': renderTransactionsTab(); break;
    case 'cards':        renderCardsTab(); break;
    case 'deposits':     renderDepositsTab(); break;
    case 'stats':        renderStatsTab(); break;
    case 'goals':        renderGoalsTab(); break;
    case 'gamification': renderGamificationTab(); break;
    default:             renderDashboard();
  }
}
 
function renderFooter() {
  document.getElementById('footer').innerHTML=`
    <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text3);">
      <span style="width:7px;height:7px;border-radius:50%;background:var(--green);display:inline-block;"></span>
      ${t('online')} · ${new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}
    </div>
    <div style="font-size:12px;color:var(--text3);">My Way v4.0 · ${CURRENT_USER.email}</div>`;
}
 
// ================================================================
// ДАШБОРД
// ================================================================
function renderDashboard() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp;
  const savePct = inc>0 ? Math.round((bal/inc)*100) : 0;
  const activeGoal = DATA.goals.find(g=>g.id===DATA.activeGoalId);
 
  document.getElementById('content').innerHTML=`
    <div class="grid-3" style="gap:16px;margin-bottom:16px;">
      <div class="card">
        <div class="card-label"><i class="fas fa-wallet"></i> Баланс</div>
        <div class="stat-big">
          <div class="stat-big-value balance-amount" style="color:${bal>=0?'var(--green)':'var(--red)'};">${fmt(bal)}</div>
          <div class="stat-big-label">Текущий баланс · ${CURRENCIES[CURRENT_CURRENCY].name}</div>
        </div>
        <div style="display:flex;gap:16px;margin-top:12px;font-size:13px;">
          <span style="color:var(--green);"><i class="fas fa-arrow-up"></i> ${fmt(inc)}</span>
          <span style="color:var(--red);"><i class="fas fa-arrow-down"></i> ${fmt(exp)}</span>
        </div>
      </div>
 
      <div class="card">
        <div class="card-label"><i class="fas fa-chart-pie"></i> Статистика</div>
        <div style="margin-top:8px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:13px;">
            <span style="color:var(--text3);">Транзакций</span>
            <strong>${DATA.transactions.length}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:13px;">
            <span style="color:var(--text3);">Норма сбережений</span>
            <strong style="color:${savePct>=20?'var(--green)':'var(--gold)'};">${savePct}%</strong>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:13px;">
            <span style="color:var(--text3);">Карт</span>
            <strong>${DATA.cards.length}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;">
            <span style="color:var(--text3);">Уровень</span>
            <strong style="color:var(--gold);">🏅 ${DATA.rank} Lv.${DATA.level}</strong>
          </div>
        </div>
      </div>
 
      <div class="card">
        <div class="card-label"><i class="fas fa-bullseye"></i> Активная цель</div>
        ${activeGoal ? `
          <div style="text-align:center;padding:8px 0;">
            <div style="font-size:28px;margin-bottom:4px;">${activeGoal.emoji}</div>
            <div style="font-size:14px;font-weight:700;">${activeGoal.name}</div>
            <div style="font-size:12px;color:var(--text3);margin:4px 0;">${fmt(activeGoal.saved)} / ${fmt(activeGoal.target)}</div>
            <div style="height:6px;background:var(--bg4);border-radius:4px;margin:8px 0;overflow:hidden;">
              <div style="height:100%;width:${Math.min(100,Math.round(activeGoal.saved/activeGoal.target*100))}%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:4px;transition:width .5s;"></div>
            </div>
            <div style="font-size:20px;font-weight:800;color:var(--accent2);">${Math.min(100,Math.round(activeGoal.saved/activeGoal.target*100))}%</div>
          </div>` : `<div style="text-align:center;padding:20px;color:var(--text3);">Нет активной цели</div>`}
      </div>
    </div>
 
    <div class="grid-2" style="gap:16px;margin-bottom:16px;">
      <div class="card">
        <div class="card-label"><i class="fas fa-bolt"></i> Быстрые действия</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
          <button class="btn btn-success" id="qIncome"><i class="fas fa-plus"></i> Доход</button>
          <button class="btn btn-danger" id="qExpense"><i class="fas fa-minus"></i> Расход</button>
          <button class="btn btn-primary" id="qCard"><i class="fas fa-credit-card"></i> Карты</button>
          <button class="btn btn-warning" id="qExport"><i class="fas fa-file-export"></i> Экспорт</button>
        </div>
      </div>
 
      <div class="card">
        <div class="card-label"><i class="fas fa-credit-card"></i> Мои карты</div>
        ${DATA.cards.length===0
          ? `<div style="text-align:center;padding:16px;color:var(--text3);font-size:13px;"><i class="fas fa-credit-card" style="font-size:26px;margin-bottom:8px;display:block;opacity:.4;"></i>Нет карт</div>`
          : `<div class="cards-mini-row">${DATA.cards.slice(0,3).map(c=>`
              <div class="card-mini ${c.color}">
                <div class="card-mini-top"><span>${c.bank}</span><span>${c.type.toUpperCase()}</span></div>
                <div class="card-mini-number">**** ${c.number}</div>
                <div class="card-mini-balance">${fmt(getCardSpent(c.id))}</div>
              </div>`).join('')}</div>`}
      </div>
    </div>
 
    <div class="card">
      <div class="card-label"><i class="fas fa-clock"></i> Последние операции</div>
      <div class="tx-list" id="dashTxList"></div>
    </div>`;
 
  const list=document.getElementById('dashTxList');
  const recent=[...DATA.transactions].reverse().slice(0,6);
  list.innerHTML=recent.map(t=>{
    const card=t.cardId?DATA.cards.find(c=>c.id===t.cardId):null;
    return `<div class="tx-item">
      <div class="tx-left">
        <div class="tx-icon ${t.type}"><i class="fas fa-${t.type==='income'?'arrow-down':'arrow-up'}"></i></div>
        <span class="tx-text">${t.text}</span>
        <span class="tx-category">${catEmoji(t.category)} ${t.category}</span>
        ${card?`<span class="tx-card-badge"><i class="fas fa-credit-card"></i> **** ${card.number}</span>`:''}
      </div>
      <div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
    </div>`;
  }).join('')||'<div style="text-align:center;padding:20px;color:var(--text3);">Нет операций</div>';
 
  document.getElementById('qIncome').addEventListener('click',()=>{
    const v=prompt('Сумма дохода (₸):'); if(v&&parseInt(v)>0) addTransaction(`Доход ${parseInt(v)}`);
  });
  document.getElementById('qExpense').addEventListener('click',()=>{
    const v=prompt('Сумма расхода (₸):'); if(v&&parseInt(v)>0) addTransaction(`Расход ${parseInt(v)}`);
  });
  document.getElementById('qCard').addEventListener('click',()=>{ document.querySelector('[data-tab="cards"]').click(); });
  document.getElementById('qExport').addEventListener('click',exportReport);
}
 
// ================================================================
// ТРАНЗАКЦИИ
// ================================================================
function renderTransactionsTab() {
  const cardOpts=DATA.cards.map(c=>`<option value="${c.id}">${c.bank} **** ${c.number}</option>`).join('');
  const expCatOpts = EXPENSE_CATS.map(c=>`<option value="${c}">${c}</option>`).join('');
  const incCatOpts = INCOME_CATS.map(c=>`<option value="${c}">${c}</option>`).join('');
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:16px;">
      <div class="card-label"><i class="fas fa-plus-circle"></i> ${t('txTitle')}</div>
      <div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="form-group"><label>${CURRENT_LANG==='kz'?'Сипаттама':CURRENT_LANG==='en'?'Description':'Описание'}</label>
          <input type="text" id="txInput" placeholder="${t('txPh')}"/>
        </div>
        <div class="form-group"><label>${CURRENT_LANG==='kz'?'Сомасы':CURRENT_LANG==='en'?'Amount':'Сумма (₸)'}</label>
          <input type="number" id="txAmount" placeholder="0" min="1"/>
        </div>
        <div class="form-group"><label>${CURRENT_LANG==='kz'?'Түрі':CURRENT_LANG==='en'?'Type':'Тип'}</label>
          <select id="txType">
            <option value="expense">${t('expenses')}</option>
            <option value="income">${t('incomes')}</option>
          </select>
        </div>
        <div class="form-group"><label>${CURRENT_LANG==='kz'?'Санат':CURRENT_LANG==='en'?'Category':'Категория'}</label>
          <select id="txCat">${expCatOpts}</select>
        </div>
        ${DATA.cards.length?`<div class="form-group" style="grid-column:1/-1;"><label>${CURRENT_LANG==='kz'?'Карта':CURRENT_LANG==='en'?'Card':'Карта'}</label>
          <select id="txCardSel"><option value="">—</option>${cardOpts}</select>
        </div>`:''}
      </div>
      <button class="btn btn-success w-full" id="txAddBtn" style="margin-top:4px;"><i class="fas fa-plus"></i> ${t('addBtn')}</button>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px;">
        ${t('quickTemplates').map(([l,v])=>`<button class="btn btn-outline btn-sm template" data-text="${v}">${l}</button>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-label"><i class="fas fa-list-ul"></i> ${t('allOps')} (${DATA.transactions.length})</div>
        <div style="display:flex;gap:4px;">
          <button class="btn btn-outline btn-sm filter-btn active" data-f="all">${t('all')}</button>
          <button class="btn btn-outline btn-sm filter-btn" data-f="income">${t('incomes')}</button>
          <button class="btn btn-outline btn-sm filter-btn" data-f="expense">${t('expenses')}</button>
        </div>
      </div>
      <div class="tx-list" id="fullTxList"></div>
    </div>`;
 
  document.getElementById('txAddBtn').addEventListener('click',()=>{
    const v=document.getElementById('txInput').value.trim();
    const s=document.getElementById('txCardSel');
    const cid=s?(s.value?parseInt(s.value):null):null;
    if(v){const ok=addTransaction(v,cid);if(ok)document.getElementById('txInput').value='';}
  });
  document.getElementById('txInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('txAddBtn').click();});
  document.getElementById('txClearBtn').addEventListener('click',()=>{
    if(confirm(t('confirm_clear'))){DATA.transactions=[];saveData();renderTransactionsTab();renderHeader();}
  });
  document.querySelectorAll('.template').forEach(b=>{
    b.addEventListener('click',()=>{document.getElementById('txInput').value=b.dataset.text;document.getElementById('txAddBtn').click();});
  });
  let cf='all';
  document.querySelectorAll('.filter-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); cf=b.dataset.f; renderFullTxList(cf);
    });
  });
  renderFullTxList('all');
}
 
function renderFullTxList(f) {
  const list=document.getElementById('fullTxList'); if(!list)return;
  const arr=f==='all'?DATA.transactions:DATA.transactions.filter(t=>t.type===f);
  list.innerHTML=[...arr].reverse().slice(0,60).map(t=>{
    const card=t.cardId?DATA.cards.find(c=>c.id===t.cardId):null;
    const d=t.date?new Date(t.date).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'}):'';
    return `<div class="tx-item" data-txid="${t.id}">
      <div class="tx-left">
        <div class="tx-icon ${t.type}"><i class="fas fa-${t.type==='income'?'arrow-down':'arrow-up'}"></i></div>
        <span class="tx-text">${t.text}</span>
        <span class="tx-category">${catEmoji(t.category)} ${t.category}</span>
        ${card?`<span class="tx-card-badge"><i class="fas fa-credit-card"></i> **** ${card.number}</span>`:''}
        ${d?`<span style="font-size:11px;color:var(--text3);">${d}</span>`:''}
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
        <button class="tx-del-btn" data-id="${t.id}" title="${t('deleteTx')}"><i class="fas fa-times"></i></button>
      </div>
    </div>`;
  }).join('')||`<div style="text-align:center;padding:20px;color:var(--text3);">${t('noTx')}</div>`;
  list.querySelectorAll('.tx-del-btn').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      DATA.transactions=DATA.transactions.filter(x=>x.id!==parseInt(b.dataset.id));
      saveData(); renderFullTxList(f); renderHeader();
    });
  });
}
 
// ================================================================
// КАРТЫ
// ================================================================
const CARD_COLORS = {
  purple: 'linear-gradient(135deg,#7c3aed,#9f67ff)',
  blue:   'linear-gradient(135deg,#2563eb,#06b6d4)',
  green:  'linear-gradient(135deg,#059669,#10b981)',
  orange: 'linear-gradient(135deg,#d97706,#f97316)',
  red:    'linear-gradient(135deg,#be123c,#f43f5e)',
  dark:   'linear-gradient(135deg,#0f172a,#1e293b)',
  gold:   'linear-gradient(135deg,#b45309,#f59e0b)',
};
 
function renderCardsTab() {
  document.getElementById('content').innerHTML=`
    <div class="grid-2" style="gap:16px;margin-bottom:16px;">
      <div class="card">
        <div class="card-label"><i class="fas fa-plus-circle"></i> Добавить карту</div>
        <div style="margin-top:12px;">
          <div class="form-group"><label>Номер карты</label>
            <input type="text" id="cNum" placeholder="0000 0000 0000 0000" maxlength="19"/>
          </div>
          <div class="form-group"><label>Держатель</label>
            <input type="text" id="cHolder" placeholder="IVAN IVANOV"/>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="form-group"><label>Срок</label>
              <input type="text" id="cExpiry" placeholder="MM/YY" maxlength="5"/>
            </div>
            <div class="form-group"><label>Банк</label>
              <input type="text" id="cBank" placeholder="Kaspi, Halyk..."/>
            </div>
          </div>
          <div class="form-group"><label>Платёжная система</label>
            <select id="cType">
              <option value="visa">VISA</option>
              <option value="mastercard">Mastercard</option>
              <option value="mir">МИР</option>
              <option value="amex">Amex</option>
            </select>
          </div>
          <div class="form-group"><label>Цвет карты</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;" id="colorPicker">
              ${Object.entries(CARD_COLORS).map(([k,g])=>`
                <div class="color-dot" data-color="${k}" style="background:${g};" title="${k}"></div>`).join('')}
            </div>
          </div>
          <button class="btn btn-primary w-full" id="addCardBtn" style="margin-top:4px;">
            <i class="fas fa-plus"></i> Добавить карту
          </button>
        </div>
      </div>
 
      <div class="card" id="cardPreviewCard">
        <div class="card-label"><i class="fas fa-eye"></i> Предпросмотр</div>
        <div style="margin-top:16px;">
          <div class="bank-card" id="cardPreview" style="background:${CARD_COLORS.purple};">
            <div class="bank-card-top">
              <div class="bank-card-bank" id="prev-bank">Банк</div>
              <div class="bank-card-type" id="prev-type">VISA</div>
            </div>
            <div class="bank-card-chip">▣ ▣</div>
            <div class="bank-card-number" id="prev-num">**** **** **** ****</div>
            <div class="bank-card-bottom">
              <div>
                <div style="font-size:9px;color:rgba(255,255,255,.5);letter-spacing:1px;">ДЕРЖАТЕЛЬ</div>
                <div class="bank-card-name" id="prev-holder">IVAN IVANOV</div>
              </div>
              <div>
                <div style="font-size:9px;color:rgba(255,255,255,.5);letter-spacing:1px;">СРОК</div>
                <div class="bank-card-name" id="prev-expiry">MM/YY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-header">
        <div class="card-label"><i class="fas fa-credit-card"></i> Мои карты (${DATA.cards.length})</div>
      </div>
      <div class="cards-grid" id="cardsList"></div>
    </div>`;
 
  // Live preview
  let selColor='purple';
  const upd=()=>{
    const p=document.getElementById('cardPreview'); if(!p)return;
    const num=document.getElementById('cNum').value.replace(/\D/g,'').padEnd(16,'*');
    const fmt4=num.replace(/(.{4})/g,'$1 ').trim();
    document.getElementById('prev-num').textContent=fmt4||'**** **** **** ****';
    document.getElementById('prev-holder').textContent=(document.getElementById('cHolder').value||'ДЕРЖАТЕЛЬ').toUpperCase();
    document.getElementById('prev-expiry').textContent=document.getElementById('cExpiry').value||'MM/YY';
    document.getElementById('prev-bank').textContent=document.getElementById('cBank').value||'Банк';
    document.getElementById('prev-type').textContent=(document.getElementById('cType').value||'visa').toUpperCase();
    p.style.background=CARD_COLORS[selColor];
  };
  ['cNum','cHolder','cExpiry','cBank','cType'].forEach(id=>{
    const el=document.getElementById(id); if(el)el.addEventListener('input',upd);
  });
  document.getElementById('cNum').addEventListener('input',function(){
    this.value=this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19); upd();
  });
  document.getElementById('cExpiry').addEventListener('input',function(){
    let v=this.value.replace(/\D/g,'');
    if(v.length>=3)v=v.slice(0,2)+'/'+v.slice(2,4);
    this.value=v; upd();
  });
  document.querySelectorAll('.color-dot').forEach(d=>{
    d.addEventListener('click',()=>{
      document.querySelectorAll('.color-dot').forEach(x=>x.classList.remove('selected'));
      d.classList.add('selected'); selColor=d.dataset.color; upd();
    });
  });
  document.querySelector('.color-dot').classList.add('selected');
 
  document.getElementById('addCardBtn').addEventListener('click',()=>{
    addCard(document.getElementById('cNum').value,document.getElementById('cHolder').value,
      document.getElementById('cExpiry').value,document.getElementById('cBank').value,
      document.getElementById('cType').value,selColor);
  });
 
  renderCardsList();
}
 
function renderCardsList() {
  const list=document.getElementById('cardsList'); if(!list)return;
  if(!DATA.cards.length){
    list.innerHTML=`<div class="empty-cards" style="grid-column:1/-1;">
      <i class="fas fa-credit-card" style="font-size:40px;opacity:.2;margin-bottom:12px;display:block;"></i>
      <div style="color:var(--text3);font-size:14px;">Карт нет. Добавьте первую карту!</div>
    </div>`; return;
  }
  list.innerHTML=DATA.cards.map(c=>{
    const spent=getCardSpent(c.id);
    const txc=DATA.transactions.filter(t=>t.cardId===c.id).length;
    const cats={};
    DATA.transactions.filter(t=>t.cardId===c.id&&t.type==='expense').forEach(t=>{cats[t.category]=(cats[t.category]||0)+t.amount;});
    const top=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,3);
    return `<div>
      <div class="bank-card" style="background:${CARD_COLORS[c.color]||CARD_COLORS.purple};margin-bottom:12px;">
        <button class="card-delete-btn" data-id="${c.id}"><i class="fas fa-times"></i></button>
        <div class="bank-card-top">
          <div class="bank-card-bank">${c.bank}</div>
          <div class="bank-card-type">${c.type.toUpperCase()}</div>
        </div>
        <div class="bank-card-chip">▣ ▣</div>
        <div class="bank-card-number">**** **** **** ${c.number}</div>
        <div class="bank-card-bottom">
          <div>
            <div style="font-size:9px;color:rgba(255,255,255,.5);letter-spacing:1px;">ДЕРЖАТЕЛЬ</div>
            <div class="bank-card-name">${c.holder}</div>
          </div>
          <div>
            <div style="font-size:9px;color:rgba(255,255,255,.5);letter-spacing:1px;">СРОК</div>
            <div class="bank-card-name">${c.expiry}</div>
          </div>
        </div>
      </div>
      <div style="font-size:13px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="color:var(--text3);">Потрачено</span>
          <strong style="color:var(--red);">${fmt(spent)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
          <span style="color:var(--text3);">Операций</span>
          <strong>${txc}</strong>
        </div>
        ${top.map(([cat,a])=>`
          <div class="card-stat-row">
            <div class="card-stat-dot" style="background:var(--accent);"></div>
            <span style="flex:1;font-size:12px;">${catEmoji(cat)} ${cat}</span>
            <span style="font-weight:700;font-size:12px;color:var(--red);">${fmt(a)}</span>
          </div>`).join('')}
      </div>
      <button class="btn btn-outline btn-sm add-tx-card w-full" data-id="${c.id}">
        <i class="fas fa-plus"></i> Добавить трату по карте
      </button>
    </div>`;
  }).join('');
 
  list.querySelectorAll('.card-delete-btn').forEach(b=>{
    b.addEventListener('click',()=>deleteCard(parseInt(b.dataset.id)));
  });
  list.querySelectorAll('.add-tx-card').forEach(b=>{
    b.addEventListener('click',()=>{
      const v=prompt('Трата (напр.: "Кофе 350"):');
      if(v) addTransaction(v,parseInt(b.dataset.id));
    });
  });
}
 
// ================================================================
// СТАТИСТИКА
// ================================================================
function renderStatsTab() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp;
 
  // Категории
  const catData={};
  DATA.transactions.filter(t=>t.type==='expense').forEach(t=>{catData[t.category]=(catData[t.category]||0)+t.amount;});
  const cats=Object.entries(catData).sort((a,b)=>b[1]-a[1]);
  const maxCat=cats[0]?.[1]||1;
 
  // 7 дней
  const dayData={};
  for(let i=6;i>=0;i--){
    const d=new Date(Date.now()-864e5*i);
    const k=d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'});
    dayData[k]={income:0,expense:0};
  }
  DATA.transactions.forEach(t=>{
    if(!t.date)return;
    const k=new Date(t.date).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'});
    if(dayData[k])dayData[k][t.type]+=t.amount;
  });
  const days=Object.entries(dayData);
  const maxDay=Math.max(...days.map(([,v])=>Math.max(v.income,v.expense)),1);
 
  document.getElementById('content').innerHTML=`
    <div class="grid-3" style="gap:16px;margin-bottom:16px;">
      <div class="card">
        <div class="card-label"><i class="fas fa-chart-pie"></i> Итого</div>
        <div style="margin-top:10px;">
          <div style="text-align:center;margin-bottom:14px;">
            <div style="font-size:32px;font-weight:800;color:${bal>=0?'var(--green)':'var(--red)'};">${fmt(bal)}</div>
            <div style="font-size:12px;color:var(--text3);">Чистый баланс</div>
          </div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;background:var(--green-d);border:1px solid rgba(16,185,129,.2);border-radius:var(--r-sm);padding:10px;text-align:center;">
              <div style="font-size:12px;color:var(--green);margin-bottom:2px;">Доходы</div>
              <div style="font-weight:700;font-size:14px;">${fmt(inc)}</div>
            </div>
            <div style="flex:1;background:var(--red-d);border:1px solid rgba(244,63,94,.2);border-radius:var(--r-sm);padding:10px;text-align:center;">
              <div style="font-size:12px;color:var(--red);margin-bottom:2px;">Расходы</div>
              <div style="font-weight:700;font-size:14px;">${fmt(exp)}</div>
            </div>
          </div>
          ${inc>0?`<div style="margin-top:10px;font-size:12px;color:var(--text3);text-align:center;">Норма сбережений: <strong style="color:var(--accent2);">${Math.round(bal/inc*100)}%</strong></div>`:''}
        </div>
      </div>
 
      <div class="card">
        <div class="card-label"><i class="fas fa-globe"></i> Мультивалюта</div>
        <div class="currency-table" style="margin-top:10px;">
          <div class="currency-row currency-header" style="grid-template-columns:24px 1fr 1fr 1fr 1fr;">
            <span></span><span>Валюта</span><span>Доход</span><span>Расход</span><span>Баланс</span>
          </div>
          ${Object.entries(CURRENCIES).map(([k,v])=>`
            <div class="currency-row ${k===CURRENT_CURRENCY?'active':''}">
              <span class="currency-flag">${v.flag}</span>
              <span class="currency-name" style="${k===CURRENT_CURRENCY?'color:var(--accent2);font-weight:700;':''}">${k}</span>
              <span style="color:var(--green);">${Math.round(inc*v.rate).toLocaleString()}</span>
              <span style="color:var(--red);">${Math.round(exp*v.rate).toLocaleString()}</span>
              <span style="font-weight:700;color:${bal>=0?'var(--green)':'var(--red)'};">${Math.round(bal*v.rate).toLocaleString()} ${v.symbol}</span>
            </div>`).join('')}
        </div>
      </div>
 
      <div class="card">
        <div class="card-label"><i class="fas fa-credit-card"></i> Расходы по картам</div>
        <div style="margin-top:10px;">
          ${DATA.cards.length===0?'<div style="text-align:center;padding:20px;color:var(--text3);">Нет карт</div>':
            DATA.cards.map(c=>{
              const sp=getCardSpent(c.id);
              const n=DATA.transactions.filter(t=>t.cardId===c.id).length;
              return `<div class="card-stat-row">
                <div class="card-stat-dot" style="background:${CARD_COLORS[c.color]?.split(',')[0]?.replace('linear-gradient(135deg,','')?.replace(')','')};"></div>
                <div style="flex:1;">
                  <div style="font-size:13px;font-weight:600;">${c.bank} **** ${c.number}</div>
                  <div style="font-size:11px;color:var(--text3);">${n} операций</div>
                </div>
                <div style="font-weight:700;font-size:13px;color:var(--red);">${fmt(sp)}</div>
              </div>`;
            }).join('')}
        </div>
      </div>
    </div>
 
    <div class="card" style="margin-bottom:16px;">
      <div class="card-label"><i class="fas fa-chart-bar"></i> Доходы и расходы по дням (7 дней)</div>
      <div class="bar-chart" style="margin-top:16px;height:130px;">
        ${days.map(([day,v])=>`
          <div class="bar-col">
            <div class="bar-wrap">
              <div class="bar income-bar" style="height:${Math.round(v.income/maxDay*100)}px;" title="Доход: ${fmt(v.income)}"></div>
              <div class="bar expense-bar" style="height:${Math.round(v.expense/maxDay*100)}px;" title="Расход: ${fmt(v.expense)}"></div>
            </div>
            <div class="bar-label">${day}</div>
          </div>`).join('')}
      </div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:12px;color:var(--text3);">
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--green);margin-right:4px;"></span>Доходы</span>
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--red);margin-right:4px;"></span>Расходы</span>
      </div>
    </div>
 
    <div class="card">
      <div class="card-label"><i class="fas fa-tags"></i> Расходы по категориям</div>
      <div style="margin-top:12px;">
        ${cats.length===0?'<div style="text-align:center;padding:20px;color:var(--text3);">Нет расходов</div>':
          cats.map(([cat,amt])=>`
            <div style="margin-bottom:14px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:5px;font-size:13px;">
                <span>${catEmoji(cat)} <strong>${cat}</strong></span>
                <div>
                  <span style="color:var(--red);font-weight:700;">${fmt(amt)}</span>
                  <span style="color:var(--text3);font-size:11px;margin-left:6px;">${exp>0?Math.round(amt/exp*100):0}%</span>
                </div>
              </div>
              <div style="height:5px;background:var(--bg4);border-radius:4px;overflow:hidden;">
                <div style="height:100%;width:${Math.round(amt/maxCat*100)}%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:4px;transition:width .5s;"></div>
              </div>
            </div>`).join('')}
      </div>
    </div>`;
}
 
// ================================================================
// ЦЕЛИ
// ================================================================
function renderGoalsTab() {
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:16px;">
      <div class="card-label"><i class="fas fa-plus-circle"></i> ${t('newGoal')}</div>
      <div class="input-group" style="margin-top:10px;">
        <input type="text" id="goalName" placeholder="${t('goalNamePh')}"/>
        <input type="number" id="goalTarget" placeholder="${t('goalAmountPh')}" style="max-width:150px;"/>
        <button class="btn btn-primary" id="goalAddBtn"><i class="fas fa-plus"></i> ${t('createGoal')}</button>
      </div>
    </div>
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header">
        <div class="card-label"><i class="fas fa-bullseye"></i> ${t('myGoals')}</div>
        <span style="font-size:12px;color:var(--text3);">${DATA.goals.length} ${t('goals_n')}</span>
      </div>
      <div id="goalsList"></div>
    </div>
    <div class="card">
      <div class="card-label"><i class="fas fa-route"></i> ${t('roadmap')}</div>
      <div id="roadmap" style="padding:12px;text-align:center;color:var(--text3);font-size:14px;">${t('pickGoal')}</div>
    </div>`;
  document.getElementById('goalAddBtn').addEventListener('click',()=>{
    addGoal(document.getElementById('goalName').value.trim(),parseInt(document.getElementById('goalTarget').value));
  });
  renderGoalsList();
}
 
function renderGoalsList() {
  const list=document.getElementById('goalsList'); if(!list)return;
  list.innerHTML=DATA.goals.map(g=>{
    const pct=Math.min(100,Math.round(g.saved/g.target*100));
    return `<div class="goal-item ${g.id===DATA.activeGoalId?'active':''}" data-id="${g.id}">
      <span class="goal-emoji">${g.emoji}</span>
      <div class="goal-info">
        <div class="goal-name">${g.name}</div>
        <div class="goal-sub">${fmt(g.saved)} / ${fmt(g.target)}</div>
      </div>
      <div class="goal-progress"><div class="fill" style="width:${pct}%;"></div></div>
      <div class="goal-percent">${pct}%</div>
      <button class="btn btn-primary btn-sm goal-contribute-btn" data-gid="${g.id}" title="${t('contributeBtn')}"><i class="fas fa-plus"></i></button>
      <button class="btn btn-outline btn-sm goal-rename-btn" data-gid="${g.id}" title="✏️"><i class="fas fa-pencil-alt"></i></button>
      <button class="btn btn-danger btn-sm goal-delete-btn" data-gid="${g.id}" title="🗑"><i class="fas fa-times"></i></button>
    </div>`;
  }).join('')||`<div style="text-align:center;padding:20px;color:var(--text3);">${t('noGoals')}</div>`;
  list.querySelectorAll('.goal-item').forEach(el=>{
    el.addEventListener('click',e=>{
      if(!e.target.closest('button')){DATA.activeGoalId=parseInt(el.dataset.id);saveData();renderGoalsList();}
    });
  });
  list.querySelectorAll('.goal-contribute-btn').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      const a=prompt(t('contribute'));
      if(a&&parseInt(a)>0)contributeGoal(parseInt(b.dataset.gid),parseInt(a));
    });
  });
  list.querySelectorAll('.goal-rename-btn').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      const g=DATA.goals.find(x=>x.id===parseInt(b.dataset.gid)); if(!g)return;
      const newName=prompt(t('renameGoal'),g.name);
      if(newName&&newName.trim()){g.name=newName.trim();saveData();renderGoalsList();}
    });
  });
  list.querySelectorAll('.goal-delete-btn').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      if(!confirm(t('deleteGoal')))return;
      const gid=parseInt(b.dataset.gid);
      DATA.goals=DATA.goals.filter(x=>x.id!==gid);
      if(DATA.activeGoalId===gid)DATA.activeGoalId=DATA.goals[0]?.id||null;
      saveData();renderGoalsList();renderHeader();
    });
  });
  renderRoadmap();
}
 
function renderRoadmap() {
  const g=DATA.goals.find(x=>x.id===DATA.activeGoalId);
  const d=document.getElementById('roadmap'); if(!d)return;
  if(!g){d.innerHTML=`🌟 ${t('pickGoal')}`;return;}
  const pct=Math.min(100,Math.round(g.saved/g.target*100));
  const steps=[t('start'),'25%','50%','75%',t('finish')];
  const cur=Math.min(4,Math.floor(pct/100*4));
  d.innerHTML=`
    <div style="text-align:center;">
      <div style="font-size:32px;">${g.emoji}</div>
      <div style="font-size:16px;font-weight:700;margin:6px 0;">${g.name}</div>
      <div style="font-size:13px;color:var(--text3);">${fmt(g.saved)} / ${fmt(g.target)}</div>
      <div style="height:7px;background:var(--bg4);border-radius:4px;margin:12px 0;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:4px;transition:width .5s;"></div>
      </div>
      <div style="font-size:30px;font-weight:900;color:var(--accent2);">${pct}%</div>
      <div style="display:flex;justify-content:center;gap:6px;margin-top:12px;flex-wrap:wrap;">
        ${steps.map((s,i)=>`<span style="padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;
          ${i<cur?'background:var(--green);color:#fff;':i===cur?'background:var(--accent);color:#fff;':'background:var(--bg4);color:var(--text3);'}">${s}</span>`).join('')}
      </div>
      ${pct>=100?`<div style="margin-top:12px;font-size:14px;color:var(--green);">${t('goalDone')}</div>`:''}
    </div>`;
}
 
// ================================================================
// ДЕПОЗИТЫ / DEPOSITS
// ================================================================
function addDeposit(name, amount, rate, months) {
  if (!name || amount<=0 || rate<=0 || months<=0) { alert(t('errorGoal')); return; }
  const income = Math.round(amount * (rate/100) * (months/12));
  DATA.deposits.push({ id:Date.now(), name, amount, rate, months, income, createdAt:Date.now() });
  saveData(); renderDepositsTab();
}
 
function deleteDeposit(id) {
  if (!confirm(t('deleteDeposit'))) return;
  DATA.deposits = DATA.deposits.filter(d=>d.id!==id);
  saveData(); renderDepositsTab();
}
 
function renderDepositsTab() {
  if (!DATA.deposits) DATA.deposits = [];
  const totalDep = DATA.deposits.reduce((s,d)=>s+d.amount,0);
  const totalInc = DATA.deposits.reduce((s,d)=>s+d.income,0);
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:16px;">
      <div class="card-label"><i class="fas fa-piggy-bank"></i> ${t('newDeposit')}</div>
      <div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="form-group"><label>${t('depNamePh')}</label>
          <input type="text" id="depName" placeholder="${t('depNamePh')}"/>
        </div>
        <div class="form-group"><label>${t('depAmountPh')}</label>
          <input type="number" id="depAmount" placeholder="${t('depAmountPh')}"/>
        </div>
        <div class="form-group"><label>${t('depRatePh')}</label>
          <input type="number" id="depRate" placeholder="12" step="0.1"/>
        </div>
        <div class="form-group"><label>${t('depMonthsPh')}</label>
          <input type="number" id="depMonths" placeholder="12" min="1" max="120"/>
        </div>
      </div>
      <button class="btn btn-primary w-full" id="depAddBtn" style="margin-top:8px;">
        <i class="fas fa-plus"></i> ${t('addDeposit')}
      </button>
    </div>
    ${DATA.deposits.length>0?`
    <div class="grid-2" style="gap:16px;margin-bottom:16px;">
      <div class="card">
        <div class="card-label"><i class="fas fa-coins"></i> ${t('depBank')}</div>
        <div style="font-size:28px;font-weight:800;color:var(--accent2);margin-top:8px;">${fmt(totalDep)}</div>
        <div style="font-size:12px;color:var(--text3);margin-top:4px;">${t('depAmountPh')}</div>
      </div>
      <div class="card">
        <div class="card-label"><i class="fas fa-chart-line"></i> ${t('depIncome')}</div>
        <div style="font-size:28px;font-weight:800;color:var(--green);margin-top:8px;">+${fmt(totalInc)}</div>
        <div style="font-size:12px;color:var(--text3);margin-top:4px;">${t('depIncome')}</div>
      </div>
    </div>`:''}
    <div class="card">
      <div class="card-header">
        <div class="card-label"><i class="fas fa-piggy-bank"></i> ${t('myDeposits')}</div>
        <span style="font-size:12px;color:var(--text3);">${DATA.deposits.length}</span>
      </div>
      <div id="depositsList"></div>
    </div>`;
 
  document.getElementById('depAddBtn').addEventListener('click',()=>{
    addDeposit(
      document.getElementById('depName').value.trim(),
      parseFloat(document.getElementById('depAmount').value)||0,
      parseFloat(document.getElementById('depRate').value)||0,
      parseInt(document.getElementById('depMonths').value)||0
    );
  });
 
  const dlist = document.getElementById('depositsList');
  if (!DATA.deposits.length) {
    dlist.innerHTML=`<div style="text-align:center;padding:24px;color:var(--text3);">${t('noDeposits')}</div>`;
    return;
  }
  dlist.innerHTML = DATA.deposits.map(d=>{
    const endDate = new Date(d.createdAt + d.months*30*864e5).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric'});
    return `<div class="tx-item" style="padding:14px 12px;">
      <div class="tx-left" style="flex-direction:column;align-items:flex-start;gap:6px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:18px;">🏦</span>
          <strong style="font-size:14px;">${d.name}</strong>
          <span class="tx-category">${d.rate}% ${t('perYear')}</span>
          <span class="tx-category">${d.months} ${t('months')}</span>
        </div>
        <div style="font-size:12px;color:var(--text3);">→ ${endDate}</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="text-align:right;">
          <div style="font-weight:700;font-size:14px;">${fmt(d.amount)}</div>
          <div style="font-size:12px;color:var(--green);">+${fmt(d.income)}</div>
        </div>
        <button class="tx-del-btn dep-del" data-id="${d.id}"><i class="fas fa-times"></i></button>
      </div>
    </div>`;
  }).join('');
  dlist.querySelectorAll('.dep-del').forEach(b=>{
    b.addEventListener('click',()=>deleteDeposit(parseInt(b.dataset.id)));
  });
}
 
// ================================================================
// ГЕЙМИФИКАЦИЯ
// ================================================================
function renderGamificationTab() {
  const ri=getRankInfo();
  const xpPct=ri.next?Math.min(100,Math.round(DATA.xp/ri.next.xp*100)):100;
  document.getElementById('content').innerHTML=`
    <div class="grid-2" style="gap:16px;margin-bottom:16px;">
      <div class="card" style="text-align:center;">
        <div class="card-label"><i class="fas fa-crown"></i> Ранг</div>
        <div style="font-size:70px;margin:10px 0;">${ri.current.icon}</div>
        <div style="font-size:22px;font-weight:800;color:var(--gold);">${ri.current.name}</div>
        <div style="font-size:13px;color:var(--text3);margin:6px 0;">XP: ${DATA.xp}${ri.next?` / ${ri.next.xp}`:''}</div>
        <div style="height:6px;background:var(--bg4);border-radius:4px;overflow:hidden;margin:8px 0;">
          <div style="height:100%;width:${xpPct}%;background:linear-gradient(90deg,var(--gold),#f97316);border-radius:4px;"></div>
        </div>
        ${ri.next?`<div style="font-size:12px;color:var(--text3);">До ${ri.next.name}: ${ri.next.xp-DATA.xp} XP</div>`:'<div style="font-size:12px;color:var(--gold);">🌟 Максимальный ранг!</div>'}
      </div>
      <div class="card">
        <div class="card-header">
          <div class="card-label"><i class="fas fa-tasks"></i> Квесты</div>
          <span style="font-size:12px;color:var(--text3);">${DATA.quests.filter(q=>q.done).length}/${DATA.quests.length}</span>
        </div>
        <div id="questsList"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-label"><i class="fas fa-trophy"></i> Достижения</div>
        <span style="font-size:12px;color:var(--text3);">${Object.values(DATA.achievements).filter(v=>v).length}/9</span>
      </div>
      <div class="achievements-grid" id="achievementsGrid"></div>
    </div>`;
  renderQuests(); renderAchievements();
}
 
function renderQuests() {
  const l=document.getElementById('questsList'); if(!l)return;
  l.innerHTML=DATA.quests.map(q=>`
    <div class="quest-item ${q.done?'done':''}">
      <span class="quest-icon">${q.done?'✅':'📌'}</span>
      <div class="quest-info"><div class="quest-title">${q.title}</div><div class="quest-desc">${q.desc}</div></div>
      ${!q.done?`<button class="btn btn-primary btn-sm quest-btn" data-id="${q.id}">Выполнить</button>`:''}
      <span class="quest-reward">+${q.reward} XP</span>
    </div>`).join('');
  l.querySelectorAll('.quest-btn').forEach(b=>b.addEventListener('click',()=>completeQuest(parseInt(b.dataset.id))));
}
 
function renderAchievements() {
  const g=document.getElementById('achievementsGrid'); if(!g)return;
  const list=[
    {key:'first_tx',icon:'🌟',name:'Первый шаг'},{key:'five_tx',icon:'📝',name:'Пять записей'},
    {key:'ten_tx',icon:'📊',name:'10 записей'},{key:'first_goal',icon:'🎯',name:'Первая цель'},
    {key:'goal_50',icon:'🚀',name:'Полпути'},{key:'quest_master',icon:'⚡',name:'Мастер'},
    {key:'saver',icon:'💰',name:'Экономный'},{key:'level_5',icon:'⭐',name:'Уровень 5'},
    {key:'first_card',icon:'💳',name:'Первая карта'},
  ];
  g.innerHTML=list.map(a=>`
    <div class="achievement-item ${DATA.achievements[a.key]?'unlocked':''}">
      <span class="ach-icon">${a.icon}</span>
      <span class="ach-name">${DATA.achievements[a.key]?a.name:'🔒'}</span>
    </div>`).join('');
}
 
// ================================================================
// ИИ-СОВЕТНИК (ВКЛАДКА)
// ================================================================
function renderAITab() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp;
  const cats={};
  DATA.transactions.filter(t=>t.type==='expense').forEach(t=>{cats[t.category]=(cats[t.category]||0)+t.amount;});
  const topCat=Object.entries(cats).sort((a,b)=>b[1]-a[1])[0];
 
  document.getElementById('content').innerHTML=`
    <div class="grid-2" style="gap:16px;margin-bottom:16px;">
      <div class="card">
        <div class="card-label"><i class="fas fa-robot"></i> ИИ-аналитика жизни</div>
        <div id="aiLifeAnalysis" style="margin-top:12px;">
          <div style="display:flex;align-items:center;gap:10px;padding:16px;background:var(--bg3);border-radius:var(--r-sm);">
            <div style="display:flex;gap:4px;">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--accent2);animation:typingBounce 1.2s infinite;"></div>
              <div style="width:8px;height:8px;border-radius:50%;background:var(--accent2);animation:typingBounce 1.2s infinite .2s;"></div>
              <div style="width:8px;height:8px;border-radius:50%;background:var(--accent2);animation:typingBounce 1.2s infinite .4s;"></div>
            </div>
            <span style="font-size:13px;color:var(--text3);">Анализирую ваши финансы...</span>
          </div>
        </div>
        <button class="btn btn-primary w-full" id="refreshAnalysis" style="margin-top:12px;">
          <i class="fas fa-sync-alt"></i> Обновить анализ
        </button>
      </div>
 
      <div class="card">
        <div class="card-label"><i class="fas fa-lightbulb"></i> Быстрые советы</div>
        <div id="aiTips" style="margin-top:10px;">
          <div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:var(--r-sm);background:var(--bg3);margin-bottom:6px;animation:typingBounce 1.2s infinite;">
            <span style="color:var(--text3);font-size:13px;">Генерирую советы...</span>
          </div>
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-label"><i class="fas fa-comments"></i> Финансовый консультант</div>
      <div style="font-size:12px;color:var(--text3);margin:6px 0 12px;">Задайте вопрос об управлении деньгами, накоплениях, достижении целей</div>
      <div id="aiTabMessages" style="max-height:320px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;margin-bottom:12px;padding:4px 0;">
        <div class="ai-msg ai-msg-bot">
          <div class="ai-msg-bubble">Привет, ${CURRENT_USER.name}! 👋 Я анализирую ваши финансы и готов помочь. Спрашивайте про накопления, расходы, цели — всё что угодно!</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <input type="text" id="aiTabInput" placeholder="Как накопить быстрее? Где сократить расходы?" style="flex:1;padding:10px 13px;background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r-sm);font-family:Inter,sans-serif;font-size:13px;color:var(--text);outline:none;"/>
        <button class="btn btn-primary" id="aiTabSend"><i class="fas fa-paper-plane"></i></button>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
        ${['Как накопить на цель быстрее?','Где сократить расходы?','Анализ моих трат','Советы по инвестициям']
          .map(q=>`<button class="btn btn-outline btn-sm ai-quick" data-q="${q}">${q}</button>`).join('')}
      </div>
    </div>`;
 
  // Load analysis
  runAIAnalysis();
  loadAITips();
 
  document.getElementById('refreshAnalysis').addEventListener('click', runAIAnalysis);
 
  const tabSend=()=>{
    const inp=document.getElementById('aiTabInput');
    const msg=inp.value.trim(); if(!msg)return;
    appendAITabMsg(msg,'user'); inp.value='';
    sendAIMsg(msg, document.getElementById('aiTabMessages'));
  };
  document.getElementById('aiTabSend').addEventListener('click',tabSend);
  document.getElementById('aiTabInput').addEventListener('keydown',e=>{if(e.key==='Enter')tabSend();});
  document.querySelectorAll('.ai-quick').forEach(b=>{
    b.addEventListener('click',()=>{
      document.getElementById('aiTabInput').value=b.dataset.q;
      tabSend();
    });
  });
}
 
function appendAITabMsg(text, role) {
  const msgs=document.getElementById('aiTabMessages'); if(!msgs)return null;
  const div=document.createElement('div');
  div.className=`ai-msg ai-msg-${role==='user'?'user':'bot'}`;
  div.innerHTML=`<div class="ai-msg-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
  return div;
}
 
async function runAIAnalysis() {
  const box=document.getElementById('aiLifeAnalysis'); if(!box)return;
  box.innerHTML=`<div style="display:flex;align-items:center;gap:10px;padding:14px;background:var(--bg3);border-radius:var(--r-sm);">
    <div style="display:flex;gap:4px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--accent2);animation:typingBounce 1.2s infinite;"></div>
      <div style="width:8px;height:8px;border-radius:50%;background:var(--accent2);animation:typingBounce 1.2s infinite .2s;"></div>
      <div style="width:8px;height:8px;border-radius:50%;background:var(--accent2);animation:typingBounce 1.2s infinite .4s;"></div>
    </div>
    <span style="font-size:13px;color:var(--text3);">Анализирую...</span>
  </div>`;
  const context = buildFinancialContext();
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body: JSON.stringify({
        model:'claude-sonnet-4-6', max_tokens:600,
        system:'Ты финансовый ИИ-аналитик приложения My Way. Анализируй финансы пользователя и давай персонализированные инсайты. Отвечай на русском языке. Используй эмодзи. Будь конкретным и полезным. Формат: 3-4 абзаца с ключевыми наблюдениями и рекомендациями.',
        messages:[{role:'user',content:`Сделай анализ финансовой жизни пользователя ${CURRENT_USER.name}:\n${context}`}]
      })
    });
    const data = await res.json();
    const text = data.content?.[0]?.text || 'Не удалось получить анализ';
    box.innerHTML=`<div class="ai-insights">${text.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('')}</div>`;
  } catch(e) {
    box.innerHTML=`<div class="ai-insights">${generateLocalAnalysis()}</div>`;
  }
}
 
async function loadAITips() {
  const box=document.getElementById('aiTips'); if(!box)return;
  const context = buildFinancialContext();
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body: JSON.stringify({
        model:'claude-sonnet-4-6', max_tokens:400,
        system:'Ты финансовый советник. Дай 4 коротких конкретных совета по финансам пользователя. Каждый совет — одно предложение. Используй эмодзи. Отвечай на русском. Формат: просто список советов, каждый с новой строки.',
        messages:[{role:'user',content:`Дай советы для: ${CURRENT_USER.name}\n${context}`}]
      })
    });
    const data = await res.json();
    const text = data.content?.[0]?.text || '';
    const tips = text.split('\n').filter(l=>l.trim()).slice(0,5);
    box.innerHTML=tips.map(t=>`
      <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;border-radius:var(--r-sm);background:var(--bg3);border:1px solid var(--border);margin-bottom:6px;font-size:13px;line-height:1.5;">
        ${t}
      </div>`).join('');
  } catch(e) {
    const localTips = generateLocalTips();
    box.innerHTML=localTips.map(t=>`
      <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;border-radius:var(--r-sm);background:var(--bg3);border:1px solid var(--border);margin-bottom:6px;font-size:13px;line-height:1.5;">${t}</div>`).join('');
  }
}
 
function buildFinancialContext() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const cats={};
  DATA.transactions.filter(t=>t.type==='expense').forEach(t=>{cats[t.category]=(cats[t.category]||0)+t.amount;});
  const topCats=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>`${k}: ${v.toLocaleString()}₸`).join(', ');
  const goals=DATA.goals.map(g=>`${g.name}: ${Math.round(g.saved/g.target*100)}%`).join(', ');
  return `Доходы: ${inc.toLocaleString()}₸, Расходы: ${exp.toLocaleString()}₸, Баланс: ${(inc-exp).toLocaleString()}₸. Топ расходы: ${topCats||'нет'}. Карт: ${DATA.cards.length}. Цели: ${goals||'нет'}. Уровень: ${DATA.level}, XP: ${DATA.xp}.`;
}
 
function generateLocalAnalysis() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const save=inc>0?Math.round((inc-exp)/inc*100):0;
  return `<p>💡 <strong>Финансовое здоровье:</strong> Ваша норма сбережений составляет ${save}%. ${save>=20?'Отлично — вы откладываете достаточно!':'Рекомендуем стремиться к 20%.'}</p>
    <p>📊 <strong>Расходы:</strong> Всего ${DATA.transactions.filter(t=>t.type==='expense').length} трат на сумму ${exp.toLocaleString()}₸. Следите за категориями.</p>
    <p>🎯 <strong>Цели:</strong> ${DATA.goals.length>0?`У вас ${DATA.goals.length} активных целей. Продолжайте пополнять регулярно!`:'Создайте финансовую цель — это мотивирует!'}</p>`;
}
 
function generateLocalTips() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  return [
    `💰 Откладывайте 20% от каждого дохода — правило «сначала заплати себе»`,
    `📱 Проверьте подписки — часто там прячутся лишние ${Math.round(inc*0.03).toLocaleString()}₸ в месяц`,
    `🎯 ${DATA.goals[0]?`До цели «${DATA.goals[0].name}» осталось ${(DATA.goals[0].target-DATA.goals[0].saved).toLocaleString()}₸ — не останавливайтесь!`:'Поставьте финансовую цель прямо сейчас!'}`,
    `📊 Ваш баланс: ${(inc-exp).toLocaleString()}₸. ${inc>exp?'Вы в плюсе — отличная работа!':'Сократите расходы хотя бы на 10%'}`,
  ];
}
 
// ================================================================
// ИИ ЧАТ (ПУЗЫРЁК)
// ================================================================
let _aiHistory = [];
 
function initAIChat() {
  const bubble=document.getElementById('aiChatBubble');
  const toggle=document.getElementById('aiChatToggle');
  const close=document.getElementById('aiChatClose');
  const send=document.getElementById('aiChatSend');
  const input=document.getElementById('aiChatInput');
  const chatWindow=document.querySelector('.ai-chat-window');
 
  if(!toggle)return;
  bubble.classList.remove('hidden');
  if(chatWindow) chatWindow.style.display='none';
 
  toggle.addEventListener('click',()=>{
    if(!chatWindow)return;
    const visible=chatWindow.style.display!=='none';
    chatWindow.style.display=visible?'none':'flex';
    if(!visible) chatWindow.style.flexDirection='column';
  });
  if(close) close.addEventListener('click',()=>{ if(chatWindow) chatWindow.style.display='none'; });
 
  const doSend=()=>{
    const msg=input.value.trim(); if(!msg)return;
    input.value='';
    addBubbleMsgUser(msg);
    sendAIMsg(msg, document.getElementById('aiChatMessages'));
  };
  send.addEventListener('click',doSend);
  input.addEventListener('keydown',e=>{if(e.key==='Enter')doSend();});
}
 
function addBubbleMsgUser(text) {
  const msgs=document.getElementById('aiChatMessages');
  const d=document.createElement('div');
  d.className='ai-msg ai-msg-user';
  d.innerHTML=`<div class="ai-msg-bubble">${text}</div>`;
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}
 
async function sendAIMsg(userMsg, container) {
  // Typing
  const typing=document.createElement('div');
  typing.className='ai-msg ai-msg-bot';
  typing.innerHTML=`<div class="ai-msg-typing"><div class="ai-typing-dot"></div><div class="ai-typing-dot"></div><div class="ai-typing-dot"></div></div>`;
  container.appendChild(typing); container.scrollTop=container.scrollHeight;
 
  _aiHistory.push({role:'user',content:userMsg});
 
  const context=buildFinancialContext();
  const sysPrompt=`You are a financial AI advisor in the My Way app. Help user ${CURRENT_USER.name} manage finances. Context: ${context}. Reply in ${CURRENT_LANG==='kz'?'Kazakh':CURRENT_LANG==='en'?'English':'Russian'}, concisely (2-4 sentences), use emojis. Give personalized advice.`;
 
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({
        model:'claude-sonnet-4-6', max_tokens:400,
        system: sysPrompt,
        messages: _aiHistory.slice(-8)
      })
    });
    const data=await res.json();
    const reply=data.content?.[0]?.text || 'Извините, не смог ответить. Попробуйте ещё раз.';
    _aiHistory.push({role:'assistant',content:reply});
    typing.remove();
    const d=document.createElement('div');
    d.className='ai-msg ai-msg-bot';
    d.innerHTML=`<div class="ai-msg-bubble">${reply}</div>`;
    container.appendChild(d); container.scrollTop=container.scrollHeight;
  } catch(e) {
    typing.remove();
    const reply=getLocalAIResponse(userMsg);
    _aiHistory.push({role:'assistant',content:reply});
    const d=document.createElement('div');
    d.className='ai-msg ai-msg-bot';
    d.innerHTML=`<div class="ai-msg-bubble">${reply}</div>`;
    container.appendChild(d); container.scrollTop=container.scrollHeight;
  }
}
 
function getLocalAIResponse(msg) {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const lower=msg.toLowerCase();
  if(lower.includes('накопить')||lower.includes('сберег'))
    return `💰 Для накопления: откладывайте ${Math.round(inc*0.2).toLocaleString()}₸ (20% от дохода) сразу после получения зарплаты. Ваш текущий баланс: ${(inc-exp).toLocaleString()}₸.`;
  if(lower.includes('расход')||lower.includes('тратить'))
    return `📊 Ваши расходы: ${exp.toLocaleString()}₸. Проверьте категорию «Прочее» — там часто скрываются ненужные траты. Цель: уложиться в 80% от доходов.`;
  if(lower.includes('цель')||lower.includes('достич'))
    return DATA.goals[0]?`🎯 Цель «${DATA.goals[0].name}»: накоплено ${Math.round(DATA.goals[0].saved/DATA.goals[0].target*100)}%. Откладывайте регулярно — даже малые суммы ускоряют прогресс!`:'🎯 Создайте финансовую цель в разделе «Цели» — это мотивирует экономить!';
  if(lower.includes('инвест'))
    return '📈 Начните с создания подушки безопасности (3-6 зарплат), затем рассмотрите ETF-фонды или депозиты. Диверсифицируйте вложения!';
  return `💡 Ваш баланс: ${(inc-exp).toLocaleString()}₸. Норма сбережений: ${inc>0?Math.round((inc-exp)/inc*100):0}%. Могу помочь с планированием бюджета, целями или советами по экономии!`;
}