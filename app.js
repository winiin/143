// ═══════════════════════════════════════
// MY WAY — Complete App v5.0
// ═══════════════════════════════════════

// ── LANGUAGES ──────────────────────────
const L = {
  ru:{
    appSub:'Твой финансовый путь',
    login:'Войти', register:'Регистрация',
    loginBtn:'Войти', registerBtn:'Создать аккаунт',
    emailPh:'Email', passPh:'Пароль', namePh:'Ваше имя', passPh2:'Пароль',
    demo:'Демо: demo@myway.kz / Demo@123!',
    nav:{dashboard:'Дашборд',transactions:'Транзакции',cards:'Карты',deposits:'Депозиты',stats:'Статистика',goals:'Цели',gamification:'Игра',ai:'ИИ-советник',tips:'Советы мудрецов',import:'Импорт',credits:'Кредиты'},
    balance:'Баланс', income:'Доходы', expense:'Расходы',
    txTitle:'Добавить операцию', txPh:'"Кофе 350" или "Зарплата 200000"',
    addBtn:'Добавить', clearBtn:'Очистить',
    allOps:'Все операции', all:'Все', incomes:'Доходы', expenses:'Расходы',
    noTx:'Нет операций', deleteTx:'Удалить операцию?',
    quickT:[['☕ Кофе','Кофе 350'],['🍽 Обед','Обед 1500'],['🚗 Такси','Такси 800'],['🛒 Продукты','Продукты 5000'],['💰 ЗП','Зарплата 300000'],['📈 Инвест','Инвестиции 20000']],
    newGoal:'Новая цель', goalNamePh:'Название', goalAmtPh:'Сумма ₸', createGoal:'Создать',
    myGoals:'Мои цели', noGoals:'Нет целей', contribute:'Сколько внести? (₸)',
    deleteGoal:'Удалить цель?', renameGoal:'Новое название:',
    depTitle:'Депозиты', newDep:'Новый депозит', depName:'Название',
    depAmt:'Сумма (₸)', depRate:'Ставка % год.', depTerm:'Срок (мес.)', addDep:'Добавить',
    myDeps:'Мои депозиты', noDeps:'Нет депозитов', delDep:'Удалить депозит?',
    months:'мес', perYear:'% год',
    aiTitle:'ИИ-советник', aiGreet:'Привет! 👋 Я ваш финансовый советник. Спрашивайте о расходах, накоплениях, целях!',
    aiPh:'Задайте вопрос...', aiAnalysis:'Анализ финансов', refreshBtn:'Обновить',
    tipsTitle:'Советы мудрецов', tipsDesc:'Принципы накопления от великих инвесторов и предпринимателей',
    importTitle:'Импорт выписки', importDesc:'Загрузите CSV-файл из банка для автоматического анализа',
    importBtn:'Загрузить файл', importProcess:'Обработка...',
    importSuccess:'Импортировано операций:', importError:'Не удалось распознать файл',
    monthly:'По месяцам', monthComp:'Сравнение месяцев',
    profile:'Профиль', logout:'Выйти',
    online:'Онлайн', level:'Уровень',
    myCards:'Мои карты', addCard:'Добавить карту', noCards:'Нет карт',
    cardNum:'Номер карты', cardHolder:'Держатель', cardBank:'Банк', cardExpiry:'Срок',
    paySystem:'Платёжная система', cardColor:'Цвет',
    spent:'Потрачено', numOps:'Операций',
    stats:'Статистика', multiCur:'Мультивалюта', byCat:'По категориям', by7:'По дням (7 дней)',
    noExp:'Нет расходов', cardStats:'Расходы по картам',
    roadmap:'Прогресс', pickGoal:'Выберите цель', goalDone:'🎉 Цель достигнута!',
    start:'Старт', finish:'Финиш',
    quests:'Квесты', achievements:'Достижения',
    addSpend:'+ Трата по карте', spendQ:'Трата (напр. "Кофе 350"):',
    confirm_clear:'Удалить все операции?',
    export:'Экспорт', exportDone:'Отчёт сохранён',
    quickActs:'Быстрые действия', lastOps:'Последние операции',
    activeGoal:'Активная цель', noActiveGoal:'Нет активной цели',
    premTitle:'Премиум функция', premDesc:'Эта функция доступна после 1 месяца использования или при оформлении подписки.',
    premBtn:'Оформить подписку — 990 ₸/мес',
    passRules:'Требования: мин. 6 символов, 1 заглавная, 1 строчная, 1 цифра, 1 спецсимвол',
    passWeak:'Пароль не соответствует требованиям',
    userNotFound:'Пользователь не найден', wrongPass:'Неверный пароль',
    emailExists:'Email уже зарегистрирован', badEmail:'Некорректный email',
    enterName:'Введите имя', fillAll:'Заполните все поля',
    savingsRate:'Норма сбережений', curRates:'Курсы валют',
    monthInc:'Доходы', monthExp:'Расходы', monthBal:'Баланс',
    compTitle:'Сравнение месяцев — плюс или минус?',
    addSpendCard:'Добавить трату',
  },
  kz:{
    appSub:'Сенің қаржылық жолың',
    login:'Кіру', register:'Тіркелу',
    loginBtn:'Кіру', registerBtn:'Аккаунт жасау',
    emailPh:'Email', passPh:'Құпия сөз', namePh:'Атыңыз', passPh2:'Құпия сөз',
    demo:'Демо: demo@myway.kz / Demo@123!',
    nav:{dashboard:'Басты',transactions:'Операциялар',cards:'Карталар',deposits:'Депозиттер',stats:'Статистика',goals:'Мақсаттар',gamification:'Ойын',ai:'ЖИ-кеңесші',tips:'Данышпандар кеңесі',import:'Импорт',credits:'Кредиттер'},
    balance:'Баланс', income:'Кірістер', expense:'Шығыстар',
    txTitle:'Операция қосу', txPh:'"Кофе 350" немесе "Жалақы 200000"',
    addBtn:'Қосу', clearBtn:'Тазалау',
    allOps:'Барлық операциялар', all:'Барлығы', incomes:'Кірістер', expenses:'Шығыстар',
    noTx:'Операциялар жоқ', deleteTx:'Операцияны жою?',
    quickT:[['☕ Кофе','Кофе 350'],['🍽 Түскі ас','Обед 1500'],['🚗 Такси','Такси 800'],['🛒 Азық-түлік','Продукты 5000'],['💰 ЖА','Зарплата 300000'],['📈 Инвест','Инвестиции 20000']],
    newGoal:'Жаңа мақсат', goalNamePh:'Атауы', goalAmtPh:'Сомасы ₸', createGoal:'Жасау',
    myGoals:'Мақсаттарым', noGoals:'Мақсат жоқ', contribute:'Қанша енгізу? (₸)',
    deleteGoal:'Мақсатты жою?', renameGoal:'Жаңа атау:',
    depTitle:'Депозиттер', newDep:'Жаңа депозит', depName:'Атауы',
    depAmt:'Сомасы (₸)', depRate:'Жылдық пайыз', depTerm:'Мерзімі (ай)', addDep:'Қосу',
    myDeps:'Менің депозиттерім', noDeps:'Депозит жоқ', delDep:'Депозитті жою?',
    months:'ай', perYear:'% жыл',
    aiTitle:'ЖИ-кеңесші', aiGreet:'Сәлем! 👋 Мен сіздің қаржылық ЖИ-кеңесшіңізмін. Шығыстар мен жинақтар туралы сұраңыз!',
    aiPh:'Сұрақ қойыңыз...', aiAnalysis:'Қаржы талдауы', refreshBtn:'Жаңарту',
    tipsTitle:'Данышпандар кеңесі', tipsDesc:'Ұлы инвесторлар мен кәсіпкерлердің жинақтау принциптері',
    importTitle:'Үзінді импорты', importDesc:'Автоматты талдау үшін банктен CSV файлын жүктеңіз',
    importBtn:'Файл жүктеу', importProcess:'Өңделуде...',
    importSuccess:'Импортталды:', importError:'Файлды тану мүмкін болмады',
    monthly:'Ай бойынша', monthComp:'Айларды салыстыру',
    profile:'Профиль', logout:'Шығу',
    online:'Онлайн', level:'Деңгей',
    myCards:'Менің карталарым', addCard:'Карта қосу', noCards:'Карта жоқ',
    cardNum:'Карта нөмірі', cardHolder:'Иесі', cardBank:'Банк', cardExpiry:'Мерзімі',
    paySystem:'Төлем жүйесі', cardColor:'Түсі',
    spent:'Жұмсалды', numOps:'Операция',
    stats:'Статистика', multiCur:'Мультивалюта', byCat:'Санаттар бойынша', by7:'Күндер бойынша (7 күн)',
    noExp:'Шығыс жоқ', cardStats:'Карталар бойынша шығыстар',
    roadmap:'Барыс', pickGoal:'Мақсатты таңдаңыз', goalDone:'🎉 Мақсатқа жетті!',
    start:'Басталу', finish:'Аяқталу',
    quests:'Тапсырмалар', achievements:'Жетістіктер',
    addSpend:'+ Карта бойынша шығыс', spendQ:'Шығыс (мыс. "Кофе 350"):',
    confirm_clear:'Барлық операцияларды жою?',
    export:'Экспорт', exportDone:'Есеп сақталды',
    quickActs:'Жылдам әрекеттер', lastOps:'Соңғы операциялар',
    activeGoal:'Белсенді мақсат', noActiveGoal:'Белсенді мақсат жоқ',
    premTitle:'Премиум функция', premDesc:'Бұл функция 1 ай пайдаланғаннан кейін немесе жазылым рәсімдегенде қол жетімді.',
    premBtn:'Жазылым рәсімдеу — 990 ₸/ай',
    passRules:'Талаптар: мин. 6 таңба, 1 бас, 1 кіші, 1 сан, 1 арнайы таңба',
    passWeak:'Құпия сөз талаптарға сай емес',
    userNotFound:'Пайдаланушы табылмады', wrongPass:'Қате құпия сөз',
    emailExists:'Email тіркелген', badEmail:'Email дұрыс емес',
    enterName:'Атыңызды енгізіңіз', fillAll:'Барлық өрістерді толтырыңыз',
    savingsRate:'Жинақ мөлшері', curRates:'Валюта бағамдары',
    monthInc:'Кірістер', monthExp:'Шығыстар', monthBal:'Баланс',
    compTitle:'Айларды салыстыру — плюс па, минус па?',
    addSpendCard:'Шығыс қосу',
  },
  en:{
    appSub:'Your financial path',
    login:'Login', register:'Register',
    loginBtn:'Login', registerBtn:'Create account',
    emailPh:'Email', passPh:'Password', namePh:'Your name', passPh2:'Password',
    demo:'Demo: demo@myway.kz / Demo@123!',
    nav:{dashboard:'Dashboard',transactions:'Transactions',cards:'Cards',deposits:'Deposits',stats:'Statistics',goals:'Goals',gamification:'Game',ai:'AI Advisor',tips:'Wisdom Tips',import:'Import',credits:'Credits'},
    balance:'Balance', income:'Income', expense:'Expenses',
    txTitle:'Add transaction', txPh:'"Coffee 350" or "Salary 200000"',
    addBtn:'Add', clearBtn:'Clear',
    allOps:'All transactions', all:'All', incomes:'Income', expenses:'Expenses',
    noTx:'No transactions', deleteTx:'Delete transaction?',
    quickT:[['☕ Coffee','Coffee 350'],['🍽 Lunch','Lunch 1500'],['🚗 Taxi','Taxi 800'],['🛒 Groceries','Groceries 5000'],['💰 Salary','Salary 300000'],['📈 Invest','Investment 20000']],
    newGoal:'New goal', goalNamePh:'Name', goalAmtPh:'Amount ₸', createGoal:'Create',
    myGoals:'My goals', noGoals:'No goals', contribute:'How much to add? (₸)',
    deleteGoal:'Delete goal?', renameGoal:'New name:',
    depTitle:'Deposits', newDep:'New deposit', depName:'Name',
    depAmt:'Amount (₸)', depRate:'Annual rate %', depTerm:'Term (months)', addDep:'Add',
    myDeps:'My deposits', noDeps:'No deposits', delDep:'Delete deposit?',
    months:'mo', perYear:'% p.a.',
    aiTitle:'AI Advisor', aiGreet:'Hi! 👋 I\'m your financial AI advisor. Ask me about expenses, savings, or goals!',
    aiPh:'Ask a question...', aiAnalysis:'Financial analysis', refreshBtn:'Refresh',
    tipsTitle:'Wisdom Tips', tipsDesc:'Wealth-building principles from great investors and entrepreneurs',
    importTitle:'Import statement', importDesc:'Upload a CSV file from your bank for automatic analysis',
    importBtn:'Upload file', importProcess:'Processing...',
    importSuccess:'Imported transactions:', importError:'Could not parse file',
    monthly:'Monthly', monthComp:'Monthly comparison',
    profile:'Profile', logout:'Log out',
    online:'Online', level:'Level',
    myCards:'My cards', addCard:'Add card', noCards:'No cards',
    cardNum:'Card number', cardHolder:'Holder', cardBank:'Bank', cardExpiry:'Expiry',
    paySystem:'Payment system', cardColor:'Color',
    spent:'Spent', numOps:'Transactions',
    stats:'Statistics', multiCur:'Multi-currency', byCat:'By category', by7:'By day (7 days)',
    noExp:'No expenses', cardStats:'Expenses by card',
    roadmap:'Progress', pickGoal:'Pick a goal', goalDone:'🎉 Goal achieved!',
    start:'Start', finish:'Finish',
    quests:'Quests', achievements:'Achievements',
    addSpend:'+ Add card expense', spendQ:'Expense (e.g. "Coffee 350"):',
    confirm_clear:'Delete all transactions?',
    export:'Export', exportDone:'Report saved',
    quickActs:'Quick actions', lastOps:'Recent transactions',
    activeGoal:'Active goal', noActiveGoal:'No active goal',
    premTitle:'Premium feature', premDesc:'This feature is available after 1 month of use or with a subscription.',
    premBtn:'Subscribe — 990 ₸/month',
    passRules:'Requirements: min. 6 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char',
    passWeak:'Password does not meet requirements',
    userNotFound:'User not found', wrongPass:'Wrong password',
    emailExists:'Email already registered', badEmail:'Invalid email',
    enterName:'Enter your name', fillAll:'Fill in all fields',
    savingsRate:'Savings rate', curRates:'Exchange rates',
    monthInc:'Income', monthExp:'Expenses', monthBal:'Balance',
    compTitle:'Monthly comparison — plus or minus?',
    addSpendCard:'Add expense',
  }
};

let LANG = 'ru';
function t(k) { return (L[LANG]||L.ru)[k] || (L.ru)[k] || k; }
function tn(k,sub) { const o=(L[LANG]||L.ru)[k]; return (o&&o[sub])||(L.ru[k]&&L.ru[k][sub])||sub; }

// ── CURRENCIES ─────────────────────────
const CUR = {
  KZT:{sym:'₸',name:'Тенге',  flag:'🇰🇿',rate:1},
  RUB:{sym:'₽',name:'Рубль',  flag:'🇷🇺',rate:0.21},
  USD:{sym:'$',name:'Dollar',  flag:'🇺🇸',rate:0.00215},
  EUR:{sym:'€',name:'Euro',    flag:'🇪🇺',rate:0.00198},
  CNY:{sym:'¥',name:'Yuan',   flag:'🇨🇳',rate:0.0155},
  AED:{sym:'د.إ',name:'Dirham',flag:'🇦🇪',rate:0.0079},
  GBP:{sym:'£',name:'Pound',  flag:'🇬🇧',rate:0.00171},
};
let CUR_KEY = 'KZT';
let DARK = true;

function fmtAmt(kzt) {
  const c = CUR[CUR_KEY]||CUR.KZT;
  const v = kzt * c.rate;
  if(Math.abs(v)>=1e6) return `${(v/1e6).toFixed(2)}M ${c.sym}`;
  if(Math.abs(v)>=1e3) return `${(v/1e3).toFixed(1)}K ${c.sym}`;
  return `${Math.round(v).toLocaleString('ru-RU')} ${c.sym}`;
}

function catEmoji(cat) {
  const m={'Еда':'🍽','Транспорт':'🚗','Развлечения':'🎬','Жильё':'🏠','Инвестиции':'📈',
    'Здоровье':'🏥','Одежда':'👗','Доход':'💰','Учёба':'📚','Связь':'📱','Красота':'💄',
    'Кафе/Доставка':'☕','Подарки':'🎁','Большая покупка':'🛍','Путешествие':'✈️',
    'Стипендия':'🎓','Зарплата':'💼','Перевод':'💸','Прочее':'📦','Food':'🍽','Transport':'🚗','Other':'📦'};
  return m[cat]||'📦';
}

// ── SECURITY UTILS ─────────────────────
function hashPass(p) {
  // Safe deterministic hash — no btoa (crashes on special chars)
  let h1=5381, h2=52711;
  for(let i=0;i<p.length;i++){
    const c=p.charCodeAt(i);
    h1=((h1<<5)+h1)^c;
    h2=((h2<<5)+h2)^(c*31);
  }
  const a=Math.abs(h1).toString(36);
  const b=Math.abs(h2).toString(36);
  return 'mw_'+a+'_'+b;
}

function validatePass(p) {
  if(!p||p.length<6) return {ok:false, msg:'Минимум 6 символов'};
  if(!/[A-Z]/.test(p)) return {ok:false, msg:'Нужна хотя бы 1 заглавная буква (A-Z)'};
  if(!/[a-z]/.test(p)) return {ok:false, msg:'Нужна хотя бы 1 строчная буква (a-z)'};
  if(!/[0-9]/.test(p)) return {ok:false, msg:'Нужна хотя бы 1 цифра (0-9)'};
  if(!/[!@#$%^&*()\-_+=\[\]{}|;:,.<>?]/.test(p)) return {ok:false, msg:'Нужен хотя бы 1 спецсимвол (!@#$...)'};
  return {ok:true, msg:''};
}

// ── ACCOUNTS ───────────────────────────
let CUR_USER = null;

function getAccounts() {
  try{ return JSON.parse(localStorage.getItem('mw_accs')||'{}'); } catch{ return {}; }
}
function saveAccounts(a) {
  try{ localStorage.setItem('mw_accs',JSON.stringify(a)); } catch{}
}
function getSession() {
  try{ return localStorage.getItem('mw_sess')||null; } catch{ return null; }
}
function setSession(e) {
  try{ e?localStorage.setItem('mw_sess',e):localStorage.removeItem('mw_sess'); } catch{}
}

function defaultData() {
  return {
    transactions:[], goals:[], deposits:[], cards:[],
    activeGoalId:null, level:1, xp:0, rank:'Bronze',
    nextId:1, currency:'KZT', lang:'ru', joinedAt:Date.now(),
    premium:false, premiumSince:null, premiumPlan:null,
    trialStart:null, savedCard:null, // trialStart set ONCE at registration, never reset
    quests:[], dailyQuestDate:null,
    credits:[],
    quickPrices:{coffee:350,lunch:1500,taxi:800,groceries:5000,salary:300000,invest:20000},
    achievements:{first_tx:false,five_tx:false,ten_tx:false,first_goal:false,goal_50:false,quest_master:false,saver:false,level_5:false,first_card:false}
  };
}

let DATA = defaultData();

function saveData() {
  if(!CUR_USER) return;
  try{
    const a=getAccounts();
    if(a[CUR_USER.email]){a[CUR_USER.email].data=DATA;saveAccounts(a);}
  }catch{}
}
function loadData() {
  if(!CUR_USER) return;
  try{
    const a=getAccounts();
    const u=a[CUR_USER.email];
    if(u&&u.data) {
      DATA=Object.assign(defaultData(),u.data);
      // ВАЖНО: trialStart берётся ТОЛЬКО из сохранённых данных пользователя
      // чтобы таймер не сбрасывался при каждом входе
      if(u.data.trialStart) DATA.trialStart = u.data.trialStart;
      else if(u.joinedAt) DATA.trialStart = u.joinedAt; // fallback к дате регистрации
    }
    if(!DATA.deposits) DATA.deposits=[];
    if(!DATA.cards) DATA.cards=[];
    CUR_KEY = localStorage.getItem('mw_cur_'+CUR_USER.email)||'KZT';
    LANG = DATA.lang||localStorage.getItem('mw_lang')||'ru';
  }catch{}
}

function isPremium() {
  // Премиум не используется — всё бесплатно в течение 30 дней с регистрации
  return false;
}

function isTrialActive() {
  // Timer counts from REGISTRATION date — real calendar days
  // Doesn't matter if user logs in or not — days always pass
  if (!DATA) return true;
  if (isPremium()) return true;
  const start = DATA.trialStart || DATA.joinedAt;
  if (!start) return true; // No start date = brand new user = give trial
  const daysPassed = (Date.now() - start) / 86400000;
  return daysPassed < 30;
}

function trialDaysLeft() {
  if(!DATA) return 30;
  const start = DATA.trialStart;
  if(!start) return 30;
  return Math.max(0, Math.ceil(30 - (Date.now() - start) / 864e5));
}

// ── DAILY QUESTS POOL ──────────────────
const QUEST_POOL = [
  {id:'q1', title:'Без кофе ☕',       desc:'Не трать на кофе сегодня',           reward:50},
  {id:'q2', title:'Проверь подписки 📱',desc:'Найди и запиши ненужную подписку',   reward:100},
  {id:'q3', title:'Сэкономь на обеде 🍱',desc:'Потрать на еду меньше обычного',   reward:75},
  {id:'q4', title:'Запиши 3 траты 📝',  desc:'Добавь 3 транзакции за день',        reward:60},
  {id:'q5', title:'Без такси 🚶',       desc:'Не вызывай такси сегодня',           reward:80},
  {id:'q6', title:'Дневной бюджет 💰',  desc:'Потрать менее 5000 ₸ за день',       reward:90},
  {id:'q7', title:'Пополни цель 🎯',    desc:'Внеси любую сумму в финансовую цель',reward:120},
  {id:'q8', title:'Без доставки 🏪',    desc:'Не заказывай доставку сегодня',      reward:70},
  {id:'q9', title:'Чек дня 🧾',         desc:'Запиши все траты до конца дня',      reward:50},
  {id:'q10',title:'Инвест-день 📈',     desc:'Отложи хоть 1000 ₸ на инвестиции',  reward:150},
  {id:'q11',title:'Без развлечений 🎮', desc:'Не трать на развлечения сегодня',    reward:80},
  {id:'q12',title:'Экономный день 💎',  desc:'Потрать менее 3000 ₸ за день',       reward:130},
];

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function refreshDailyQuests() {
  const today = getTodayKey();
  if(DATA.dailyQuestDate === today && DATA.quests && DATA.quests.length > 0) return;
  // Pick 3 random quests for today using date as seed
  const d = new Date(); const seed = d.getDate() + d.getMonth()*31 + d.getFullYear()*366;
  const shuffled = [...QUEST_POOL].sort((a,b)=>{
    const ha = Math.abs(seed * a.id.charCodeAt(1)) % 1000;
    const hb = Math.abs(seed * b.id.charCodeAt(1)) % 1000;
    return ha - hb;
  });
  DATA.quests = shuffled.slice(0,3).map(q=>({...q, done:false}));
  DATA.dailyQuestDate = today;
  saveData();
}

function checkAchievements_alias() { checkAch(); }

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
}

// ── AUTH ────────────────────────────────
function initAuth() {
  // Demo account
  const accs=getAccounts();
  // Always refresh demo account so hash stays current
  const demoHash=hashPass('Demo@123!');
  if(!accs['demo@myway.kz']||accs['demo@myway.kz'].password!==demoHash){
    const demoData=accs['demo@myway.kz']?.data||defaultData();
    demoData.premium=true;
    demoData.trialStart = Date.now(); // Demo always has fresh 30-day trial
    accs['demo@myway.kz']={name:'Демо',email:'demo@myway.kz',password:demoHash,data:demoData,joinedAt:Date.now()};
    saveAccounts(accs);
  }

  // Language switcher on auth screen
  document.querySelectorAll('.lang-pill').forEach(p=>{
    p.addEventListener('click',function(){
      document.querySelectorAll('.lang-pill').forEach(x=>x.classList.remove('active'));
      this.classList.add('active');
      LANG=this.dataset.l;
      localStorage.setItem('mw_lang',LANG);
      updateAuthLang();
    });
  });

  updateAuthLang();

  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(tab=>{
    tab.addEventListener('click',function(){
      document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
      this.classList.add('active');
      const mode=this.dataset.auth;
      document.getElementById('loginForm').classList.toggle('hidden',mode!=='login');
      document.getElementById('registerForm').classList.toggle('hidden',mode!=='register');
      document.getElementById('loginError').classList.add('hidden');
      document.getElementById('registerError').classList.add('hidden');
    });
  });

  // Password eye toggle
  const eyeBtn=document.getElementById('eyeBtn');
  const regPass=document.getElementById('regPassword');
  if(eyeBtn&&regPass){
    eyeBtn.addEventListener('click',()=>{
      const show=regPass.type==='password';
      regPass.type=show?'text':'password';
      eyeBtn.innerHTML=`<i class="fas fa-${show?'eye-slash':'eye'}"></i>`;
    });
  }

  // Password strength live check
  if(regPass){
    regPass.addEventListener('input',()=>{
      const v=regPass.value;
      const rules={
        'pr-len':v.length>=6,
        'pr-upper':/[A-Z]/.test(v),
        'pr-lower':/[a-z]/.test(v),
        'pr-num':/[0-9]/.test(v),
        'pr-spec':/[!@#$%^&*()\-_+=\[\]{}|;:,.<>?]/.test(v),
      };
      Object.entries(rules).forEach(([id,ok])=>{
        const el=document.getElementById(id);
        if(el) el.classList.toggle('ok',ok);
      });
    });
  }

  document.getElementById('loginBtn').addEventListener('click',doLogin);
  document.getElementById('registerBtn').addEventListener('click',doRegister);
  document.getElementById('loginPassword').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  if(regPass) regPass.addEventListener('keydown',e=>{if(e.key==='Enter')doRegister();});

  // Check saved session
  const sess=getSession();
  if(sess){
    const a=getAccounts();
    if(a[sess]){
      CUR_USER={name:a[sess].name,email:sess,avatar:a[sess].name.charAt(0).toUpperCase()};
      loadData();
      showApp();
      return;
    }
  }
}

function updateAuthLang() {
  const langObj=L[LANG]||L.ru;
  document.getElementById('authSub').textContent=langObj.appSub||'';
  document.getElementById('tabLogin').textContent=langObj.login||'';
  document.getElementById('tabRegister').textContent=langObj.register||'';
  document.getElementById('loginBtnTxt').textContent=langObj.loginBtn||'';
  document.getElementById('registerBtnTxt').textContent=langObj.registerBtn||'';
  document.getElementById('authDemo').textContent=langObj.demo||'';
  const ep=document.getElementById('loginEmail'); if(ep) ep.placeholder=langObj.emailPh||'';
  const pp=document.getElementById('loginPassword'); if(pp) pp.placeholder=langObj.passPh||'';
  const rn=document.getElementById('regName'); if(rn) rn.placeholder=langObj.namePh||'';
  const re=document.getElementById('regEmail'); if(re) re.placeholder=langObj.emailPh||'';
  const rp=document.getElementById('regPassword'); if(rp) rp.placeholder=langObj.passPh2||'';
  const pr=document.getElementById('passRules'); if(pr){
    const r=langObj.passRules||'';
    // Update pass rule texts
    const rules=[['pr-len','Мин. 6 символов / Min. 6 chars / Мин. 6 таңба'],['pr-upper','1 заглавная / 1 Uppercase / 1 бас'],['pr-lower','1 строчная / 1 lowercase / 1 кіші'],['pr-num','1 цифра / 1 digit / 1 сан'],['pr-spec','1 спецсимвол / 1 special / 1 арнайы']];
    const labels={ru:['Мин. 6 символов','1 заглавная','1 строчная','1 цифра','1 спецсимвол'],kz:['Мін. 6 таңба','1 бас әріп','1 кіші әріп','1 сан','1 арнайы таңба'],en:['Min. 6 chars','1 uppercase','1 lowercase','1 digit','1 special char']};
    const lbl=labels[LANG]||labels.ru;
    ['pr-len','pr-upper','pr-lower','pr-num','pr-spec'].forEach((id,i)=>{
      const el=document.getElementById(id); if(el) el.textContent='• '+lbl[i];
    });
  }
}

function showErr(id,msg){
  const el=document.getElementById(id);
  if(!el) return;
  el.textContent=msg;
  el.classList.remove('hidden');
  clearTimeout(el._hideTimer);
  el._hideTimer=setTimeout(()=>el.classList.add('hidden'),5000);
}

function doLogin() {
  const email=document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass=document.getElementById('loginPassword').value;
  if(!email||!pass){showErr('loginError',t('fillAll'));return;}
  const accs=getAccounts();
  if(!accs[email]){showErr('loginError',t('userNotFound'));return;}
  if(accs[email].password!==hashPass(pass)){showErr('loginError',t('wrongPass'));return;}
  CUR_USER={name:accs[email].name,email,avatar:accs[email].name.charAt(0).toUpperCase()};
  setSession(email); loadData(); showApp();
}

function doRegister() {
  const name=document.getElementById('regName').value.trim();
  const email=document.getElementById('regEmail').value.trim().toLowerCase();
  const pass=document.getElementById('regPassword').value;
  if(!name){showErr('registerError',t('enterName'));return;}
  if(!email.includes('@')||!email.includes('.')){showErr('registerError',t('badEmail'));return;}
  const passCheck=validatePass(pass);
  if(!passCheck.ok){showErr('registerError','❌ '+passCheck.msg);return;}
  const accs=getAccounts();
  if(accs[email]){showErr('registerError',t('emailExists'));return;}
  const d=defaultData(); d.lang=LANG; d.trialStart=Date.now(); // Set ONCE at registration
  accs[email]={name,email,password:hashPass(pass),data:d,joinedAt:Date.now()};
  saveAccounts(accs);
  CUR_USER={name,email,avatar:name.charAt(0).toUpperCase()};
  setSession(email); loadData(); showApp();
}

function doLogout() {
  setSession(null); CUR_USER=null; DATA=defaultData();
  document.getElementById('app').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
  document.getElementById('aiChat').classList.add('hidden');
  ['loginEmail','loginPassword'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('loginError').classList.add('hidden');
  document.getElementById('registerError').classList.add('hidden');
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  document.querySelector('[data-auth="login"]').classList.add('active');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
}

function showApp() {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('aiChat').classList.remove('hidden');
  refreshDailyQuests();
  // sync lang pills
  document.querySelectorAll('.lang-pill').forEach(p=>{
    p.classList.toggle('active',p.dataset.l===LANG);
  });
  renderAll();
  initAIChat();
}

// ── TRANSACTION PARSER ─────────────────
function parseTx(text) {
  text=text.trim();
  const nums=text.match(/\d[\d\s]*/g);
  if(!nums) return null;
  const amount=parseInt(nums[0].replace(/\s/g,''));
  if(isNaN(amount)||amount<=0) return null;
  let desc=text.replace(/\d[\d\s]*/g,'').trim()||'Покупка';
  const low=desc.toLowerCase();
  const incKW=['зарплат','salary','жалақы','доход','income','табыс','премия','аванс','кешбэк','cashback','возврат','refund','пришло','стипендия','stipend','перевод от','transfer from'];
  let type='expense', cat='Прочее';
  for(const kw of incKW){if(low.includes(kw)){type='income';cat='Зарплата';break;}}
  if(low.includes('стипенд')||low.includes('стипенд')){type='income';cat='Стипендия';}
  if(type==='expense'){
    const cats={
      'Еда':['продукт','food','groceries','азық','азіқ'],
      'Кафе/Доставка':['кофе','coffee','обед','ужин','завтрак','ресторан','суши','пицц','бургер','доставк','delivery','wolt','glovo','bolt food'],
      'Транспорт':['такси','taxi','бензин','заправк','транспорт','метро','автобус','uber','яндекс','bolt','bus','metro'],
      'Учёба':['учёб','учеб','study','курс','course','книг','book','образован','training'],
      'Здоровье':['аптек','врач','клиник','лекарств','здоров','медиц','health','pharmacy','doctor'],
      'Связь':['интернет','телефон','подписк','netflix','spotify','phone','internet','subscription','связь','mobile'],
      'Одежда':['одежд','обувь','шопинг','магазин','clothes','shoes','shopping','zara','h&m'],
      'Красота':['красот','парикмахер','beauty','уход','salon','spa','косметик'],
      'Развлечения':['кино','игр','развлеч','бар','клуб','концерт','game','cinema','party','karaoke'],
      'Жильё':['квартир','аренд','коммун','жкх','свет','вода','rent','utility','газ','электр'],
      'Инвестиции':['инвест','акци','облигац','фонд','вклад','крипт','invest','etf'],
      'Подарки':['подарок','gift','праздник','present','birthday'],
      'Большая покупка':['телефон','ноутбук','laptop','техник','tech','электро','phone','appliance'],
      'Путешествие':['отпуск','поездк','путешеств','авиа','отель','hotel','travel','visa','тур','tour'],
    };
    for(const [c,kws] of Object.entries(cats)){
      for(const kw of kws){if(low.includes(kw)){cat=c;break;}}
      if(cat!=='Прочее') break;
    }
  }
  return {text:desc.charAt(0).toUpperCase()+desc.slice(1),amount,type,cat,date:Date.now()};
}

function addTx(raw, cardId=null) {
  const p=parseTx(raw);
  if(!p){alert(t('txTitle')+': "Кофе 350"');return false;}
  p.id=DATA.nextId++; p.cardId=cardId; p.category=p.cat; delete p.cat;
  DATA.transactions.push(p);
  DATA.xp+=5;
  if(DATA.xp>=100){DATA.level+=Math.floor(DATA.xp/100);DATA.xp=DATA.xp%100;updateRank();}
  checkAch(); saveData(); renderHeader(); renderActiveTab(TAB);
  return true;
}

// ── CARDS ──────────────────────────────
const CARD_BG={
  purple:'linear-gradient(135deg,#7c3aed,#9f67ff)',
  blue:'linear-gradient(135deg,#2563eb,#06b6d4)',
  green:'linear-gradient(135deg,#059669,#10b981)',
  orange:'linear-gradient(135deg,#d97706,#f97316)',
  red:'linear-gradient(135deg,#be123c,#f43f5e)',
  dark:'linear-gradient(135deg,#0f172a,#1e293b)',
  gold:'linear-gradient(135deg,#b45309,#f59e0b)',
};

function cardSpent(id){ return DATA.transactions.filter(t=>t.cardId===id&&t.type==='expense').reduce((s,t)=>s+t.amount,0); }
function cardTxCount(id){ return DATA.transactions.filter(t=>t.cardId===id).length; }

function addCard(num,holder,expiry,bank,type,color) {
  const digits=num.replace(/\D/g,'');
  if(digits.length<16){alert(t('cardNum')+': 16 '+t('numOps'));return;}
  DATA.cards.push({id:Date.now(),number:digits.slice(-4),holder:holder||'HOLDER',expiry:expiry||'00/00',bank:bank||'Bank',type:type||'visa',color:color||'purple',balance:0});
  checkAch(); saveData(); renderActiveTab(TAB);
}

function delCard(id) {
  if(!confirm(t('noCards'))) return;
  DATA.cards=DATA.cards.filter(c=>c.id!==id);
  DATA.transactions.forEach(t=>{if(t.cardId===id)t.cardId=null;});
  saveData(); renderActiveTab(TAB);
}

// ── GOALS ──────────────────────────────
function addGoal(name,target) {
  if(!name||target<=0){alert(t('newGoal'));return;}
  const emojis=['💻','🏠','🚗','✈️','🎓','💎','🏖','🎨','🚀','🌍','📱','🎮','👶','🐶','🍕'];
  DATA.goals.push({id:Date.now(),name,target,saved:0,emoji:emojis[Math.floor(Math.random()*emojis.length)]});
  checkAch(); saveData(); renderGoalsTab(); renderHeader();
}

function contributeGoal(id,amount) {
  const g=DATA.goals.find(x=>x.id===id); if(!g) return;
  const bal=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0)
           -DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  if(bal<amount){alert(t('noActiveGoal'));return;}
  g.saved+=amount;
  DATA.transactions.push({id:DATA.nextId++,text:`Вклад: ${g.name}`,amount,type:'expense',category:'Инвестиции',cardId:null,date:Date.now()});
  checkAch(); saveData(); renderGoalsList(); renderHeader();
}

// ── DEPOSITS ───────────────────────────
function addDeposit(name,amount,rate,months) {
  if(!name||amount<=0||rate<=0||months<=0){alert(t('fillAll'));return;}
  const income=Math.round(amount*(rate/100)*(months/12));
  DATA.deposits.push({id:Date.now(),name,amount,rate,months,income,createdAt:Date.now()});
  saveData(); renderDepositsTab();
}

// ── GAMIFICATION ───────────────────────
function updateRank() {
  const r=['Bronze','Silver','Gold','Platinum','Diamond','Legend'];
  const x=[0,200,500,1000,2000,5000];
  let i=0; for(let j=r.length-1;j>=0;j--){if(DATA.xp>=x[j]){i=j;break;}} DATA.rank=r[i];
}

function checkAch() {
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
  checkAch(); saveData(); renderGamTab(); renderHeader();
}

function getRankInfo() {
  const ranks=[{name:'Bronze',icon:'🥉',xp:0},{name:'Silver',icon:'🥈',xp:200},{name:'Gold',icon:'🥇',xp:500},{name:'Platinum',icon:'💎',xp:1000},{name:'Diamond',icon:'🔷',xp:2000},{name:'Legend',icon:'🌟',xp:5000}];
  let cur=ranks[0],nxt=ranks[1];
  for(let i=ranks.length-1;i>=0;i--){if(DATA.xp>=ranks[i].xp){cur=ranks[i];nxt=ranks[i+1]||null;break;}}
  return{current:cur,next:nxt};
}

// ── EXPORT ─────────────────────────────
function exportReport() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  let txt=`📊 My Way — ${CUR_USER.name}\n${'━'.repeat(30)}\n`;
  txt+=`📅 ${new Date().toLocaleString()}\n💰 ${fmtAmt(inc-exp)} | ↑${fmtAmt(inc)} ↓${fmtAmt(exp)}\n`;
  txt+=`🏆 Lv.${DATA.level} ${DATA.rank} | XP:${DATA.xp}\n${'━'.repeat(30)}\n`;
  txt+=`🎯 ${t('myGoals')}:\n`+DATA.goals.map(g=>`  ${g.emoji} ${g.name}: ${fmtAmt(g.saved)}/${fmtAmt(g.target)} (${Math.round(g.saved/g.target*100)}%)\n`).join('');
  if(DATA.cards.length){txt+=`${'━'.repeat(30)}\n💳 ${t('myCards')}:\n`+DATA.cards.map(c=>`  **** ${c.number} ${c.bank}: ${fmtAmt(cardSpent(c.id))}\n`).join('');}
  txt+=`${'━'.repeat(30)}\n📋 ${t('allOps')}:\n`+[...DATA.transactions].reverse().map(tx=>`  ${tx.type==='income'?'+':'-'}${fmtAmt(tx.amount)} ${tx.text} [${tx.category}]\n`).join('');
  const blob=new Blob([txt],{type:'text/plain;charset=utf-8'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`MyWay_${Date.now()}.txt`; a.click(); URL.revokeObjectURL(a.href);
}

// ── NAVIGATION ─────────────────────────
const TABS=[
  {id:'dashboard',    icon:'fa-chart-pie'},
  {id:'transactions', icon:'fa-list-ul'},
  {id:'cards',        icon:'fa-credit-card'},
  {id:'deposits',     icon:'fa-piggy-bank'},
  {id:'stats',        icon:'fa-chart-bar'},
  {id:'goals',        icon:'fa-bullseye'},
  {id:'gamification', icon:'fa-gamepad'},
  {id:'ai',           icon:'fa-robot'},
  {id:'tips',         icon:'fa-lightbulb'},
  {id:'import',       icon:'fa-file-import'},
  {id:'credits',      icon:'fa-hand-holding-usd'},
];
let TAB='dashboard';

function renderAll() {
  renderNav(); renderSBUser(); renderHeader(); renderDashboard(); renderFooter(); initMobileToggle();
}

function renderNav() {
  const nav=document.getElementById('nav');
  nav.innerHTML=TABS.map(({id,icon})=>`
    <button class="nav-btn ${id===TAB?'active':''}" data-tab="${id}">
      <i class="fas ${icon}"></i> ${tn('nav',id)}
    </button>`).join('');
  nav.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click',function(){
      nav.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active'); TAB=this.dataset.tab;
      renderHeader(); renderActiveTab(TAB);
      document.getElementById('sidebar').classList.remove('open');
    });
  });
}

function renderSBUser() {
  const el=document.getElementById('sbUser'); if(!el) return;
  el.innerHTML=`
    <div class="su-av">${CUR_USER.avatar}</div>
    <div class="su-info">
      <div class="su-name">${CUR_USER.name}</div>
      <div class="su-rank">🏅 ${DATA.rank} · Lv.${DATA.level}</div>
    </div>
    <i class="fas fa-chevron-right" style="font-size:10px;color:var(--tx3);"></i>`;
  el.onclick=showProfile;
}

function renderHeader() {
  const tabDef=TABS.find(x=>x.id===TAB)||TABS[0];
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const health=Math.min(100,Math.round(40+(inc-exp)/10000+DATA.xp/5));
  const curOpts=Object.entries(CUR).map(([k,v])=>`<option value="${k}" ${k===CUR_KEY?'selected':''}>${v.flag} ${k}</option>`).join('');
  const langOpts=['ru','kz','en'].map(l=>`<option value="${l}" ${l===LANG?'selected':''}>${l==='ru'?'🇷🇺 RU':l==='kz'?'🇰🇿 KZ':'🇬🇧 EN'}</option>`).join('');

  document.getElementById('header').innerHTML=`
    <div class="topbar-l">
      <button class="menu-toggle" id="menuToggle"><i class="fas fa-bars"></i></button>
      <div>
        <div class="topbar-title"><i class="fas ${tabDef.icon}" style="color:var(--acc2);margin-right:7px;font-size:13px;"></i>${tn('nav',tabDef.id)}</div>
        <div class="topbar-sub">My Way · ${new Date().toLocaleDateString(LANG==='en'?'en-US':LANG==='kz'?'kk-KZ':'ru-RU',{weekday:'long',day:'numeric',month:'long'})}</div>
      </div>
    </div>
    <div class="topbar-r">
      <select class="sel" id="langSel" title="Language">${langOpts}</select>
      <select class="sel" id="curSel">${curOpts}</select>
      <span class="badge b-green"><i class="fas fa-heartbeat"></i> ${health}%</span>
      <span class="badge b-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
      <span class="badge" style="background:rgba(16,185,129,.12);color:var(--green);border:1px solid rgba(16,185,129,.2);" title="Дней бесплатного периода осталось">🎁 ${trialDaysLeft()} дн. Free</span>
      <button class="theme-btn" id="themeBtn"><i class="fas fa-${DARK?'sun':'moon'}"></i></button>
    </div>`;

  document.getElementById('themeBtn').addEventListener('click',()=>{
    DARK=!DARK;
    document.documentElement.setAttribute('data-theme',DARK?'dark':'light');
    document.getElementById('themeBtn').innerHTML=`<i class="fas fa-${DARK?'sun':'moon'}"></i>`;
  });
  document.getElementById('curSel').addEventListener('change',function(){
    CUR_KEY=this.value; localStorage.setItem('mw_cur_'+CUR_USER.email,CUR_KEY);
    renderActiveTab(TAB); renderHeader();
  });
  document.getElementById('langSel').addEventListener('change',function(){
    LANG=this.value; DATA.lang=LANG; saveData();
    localStorage.setItem('mw_lang',LANG);
    document.querySelectorAll('.lang-pill').forEach(p=>p.classList.toggle('active',p.dataset.l===LANG));
    updateAuthLang();
    renderAll(); renderActiveTab(TAB);
  });
  const mt=document.getElementById('menuToggle');
  if(mt) mt.addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
}

function initMobileToggle() {
  document.addEventListener('click',e=>{
    const sb=document.getElementById('sidebar');
    if(sb&&sb.classList.contains('open')&&!sb.contains(e.target)&&!e.target.closest('#menuToggle'))
      sb.classList.remove('open');
  });
}

function renderActiveTab(tab) {
  // All features free for 30 calendar days from registration date
  // After 30 days: AI, Stats, Import, Credits require Premium
  if (!isTrialActive() && !isPremium()) {
    const premiumOnlyTabs = ['ai','stats','import','credits'];
    if (premiumOnlyTabs.includes(tab)) {
      showPaywall();
      // Also render a locked version so user sees what's behind paywall
    }
  }
  const fns={dashboard:renderDashboard,transactions:renderTxTab,cards:renderCardsTab,
    deposits:renderDepositsTab,stats:renderStatsTab,goals:renderGoalsTab,
    gamification:renderGamTab,ai:renderAITab,tips:renderTipsTab,import:renderImportTab,
    credits:renderCreditsTab};
  (fns[tab]||renderDashboard)();
}

function renderFooter() {
  document.getElementById('footer').innerHTML=`
    <div style="display:flex;align-items:center;gap:7px;">
      <span class="dot-live"></span>
      <span>${t('online')} · ${CUR_USER.name}</span>
    </div>
    <div>My Way · ${new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}</div>`;
}

// ── PROFILE MODAL ──────────────────────
function showProfile() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const m=document.createElement('div'); m.className='modal-ov'; m.id='profileModal';
  const accs=getAccounts(); const u=accs[CUR_USER.email];
  const joinDays=Math.floor((Date.now()-(u?.joinedAt||Date.now()))/864e5);
  m.innerHTML=`<div class="modal-box">
    <div class="modal-hdr">
      <h3><i class="fas fa-user"></i> ${t('profile')}</h3>
      <button class="modal-close" onclick="document.getElementById('profileModal').remove()">✕</button>
    </div>
    <div style="text-align:center;margin-bottom:16px;">
      <div class="prof-av">${CUR_USER.avatar}</div>
      <div style="font-size:17px;font-weight:700;">${CUR_USER.name}</div>
      <div style="font-size:12px;color:var(--tx3);">${CUR_USER.email}</div>
      <div style="font-size:11px;color:var(--tx3);margin-top:3px;">День ${joinDays}${isPremium()?'  ⭐ Премиум':''}</div>
    </div>
    <div class="prof-stats">
      <div class="pstat"><span class="pstat-v">${DATA.transactions.length}</span><div class="pstat-l">${t('allOps')}</div></div>
      <div class="pstat"><span class="pstat-v">${DATA.cards.length}</span><div class="pstat-l">${t('myCards')}</div></div>
      <div class="pstat"><span class="pstat-v">${DATA.level}</span><div class="pstat-l">${t('level')}</div></div>
      <div class="pstat"><span class="pstat-v">${DATA.goals.length}</span><div class="pstat-l">${t('myGoals')}</div></div>
    </div>
    <div style="margin-top:14px;padding:12px;background:var(--bg3);border-radius:var(--r);font-size:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="color:var(--tx3);">${t('balance')}</span><strong style="color:${inc-exp>=0?'var(--green)':'var(--red)'};">${fmtAmt(inc-exp)}</strong></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="color:var(--tx3);">Ранг</span><strong style="color:var(--gold);">🏅 ${DATA.rank}</strong></div>
      <div style="display:flex;justify-content:space-between;"><span style="color:var(--tx3);">XP</span><strong style="color:var(--acc2);">${DATA.xp} XP</strong></div>
    </div>
    ${isPremium()?`
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
    </div>`}
    <button class="btn btn-danger wf" style="margin-top:12px;" onclick="document.getElementById('profileModal').remove();doLogout()">
      <i class="fas fa-sign-out-alt"></i> ${t('logout')}
    </button>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener('click',e=>{if(e.target===m)m.remove();});
}

function activatePremium() {
  // Open subscription paywall
  showPaywall();
}

function showPaywall(source='') {
  // Всё бесплатно 30 дней — просто показываем информацию
  const days = trialDaysLeft();
  const modal = document.createElement('div');
  modal.className = 'modal-ov paywall-modal';
  modal.innerHTML = `<div class="modal-box" style="max-width:400px;text-align:center;">
    <div style="font-size:48px;margin-bottom:12px;">🎁</div>
    <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:800;margin-bottom:8px;">My Way — Бесплатно</div>
    <div style="font-size:14px;color:var(--tx2);margin-bottom:16px;line-height:1.6;">
      Весь первый месяц <strong>все функции</strong> открыты бесплатно.<br>
      Осталось: <strong style="color:var(--green);font-size:18px;">${days}</strong> дней.
    </div>
    <div style="padding:12px;background:var(--bg3);border-radius:var(--r);font-size:13px;color:var(--tx2);margin-bottom:16px;">
      ✅ Транзакции · ✅ Карты · ✅ Депозиты<br>
      ✅ Статистика · ✅ ИИ-советник · ✅ Импорт<br>
      ✅ Цели · ✅ Кредиты · ✅ Игра
    </div>
    <button class="btn btn-primary wf" onclick="this.closest('.modal-ov').remove()" style="justify-content:center;">
      <i class="fas fa-rocket"></i> Продолжить пользоваться
    </button>
  </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if(e.target===modal) modal.remove(); });
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
  if(cn) cn.addEventListener('input',function(){this.value=this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);});
  const ex=document.getElementById('payExpiry');
  if(ex) ex.addEventListener('input',function(){let v=this.value.replace(/\D/g,'');if(v.length>=3)v=v.slice(0,2)+' / '+v.slice(2,4);this.value=v;});
}

function processPayment(plan, btn, modal) {
  // Validate card fields if no saved card
  const hasSaved = DATA.savedCard?.last4;
  if (!hasSaved) {
    const num = (document.getElementById('payCardNum')?.value||'').replace(/\s/g,'');
    const expiry = document.getElementById('payExpiry')?.value||'';
    const cvv = document.getElementById('payCVV')?.value||'';
    const holder = document.getElementById('payHolder')?.value||'';
    if (num.length < 16) { alert('Введите корректный номер карты (16 цифр)'); return; }
    if (!expiry || expiry.replace(/\s/g,'').length < 4) { alert('Введите срок действия'); return; }
    if (cvv.length < 3) { alert('Введите CVV'); return; }
    if (!holder.trim()) { alert('Введите имя держателя'); return; }
    DATA.savedCard = {
      last4: num.slice(-4),
      expiry: expiry.replace(/\s/g,''),
      holder: holder.trim().toUpperCase(),
      type: 'CARD'
    };
  }

  // Animate button
  btn.disabled = true;
  btn.innerHTML = '<span style="display:inline-flex;align-items:center;gap:8px;">' +
    '<svg width="16" height="16" viewBox="0 0 24 24" style="animation:spin .7s linear infinite;fill:none;stroke:#fff;stroke-width:2.5;">' +
    '<circle cx="12" cy="12" r="10" stroke-opacity=".2"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>' +
    ' Проверка данных...</span>';

  setTimeout(() => {
    modal.remove();
    showPaymentComingSoon(plan);
  }, 1800);
}

function showPaymentComingSoon(plan) {
  document.querySelectorAll('.paywall-modal,.payment-soon-modal').forEach(m => m.remove());
  const modal = document.createElement('div');
  modal.className = 'modal-ov payment-soon-modal';

  const amount = plan === 'yearly' ? '35 000 ₸' : '3 500 ₸';
  const period = plan === 'yearly' ? 'год' : 'месяц';
  const card = DATA.savedCard;

  // Collect waitlist emails in localStorage
  const waitlist = JSON.parse(localStorage.getItem('mw_waitlist') || '[]');
  const alreadyIn = waitlist.includes(CUR_USER.email);

  modal.innerHTML = `
  <div class="modal-box" style="max-width:420px;padding:0;overflow:hidden;">

    <!-- Top gradient header -->
    <div style="background:linear-gradient(135deg,#7c3aed,#06b6d4);padding:28px 24px 22px;text-align:center;position:relative;">
      <button onclick="this.closest('.payment-soon-modal').remove()"
        style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,.15);border:none;width:28px;height:28px;border-radius:50%;color:#fff;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;">✕</button>
      <div style="font-size:48px;margin-bottom:8px;animation:popIn .5s cubic-bezier(.34,1.56,.64,1);">🚀</div>
      <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:800;color:#fff;margin-bottom:4px;">Оплата скоро будет!</div>
      <div style="font-size:12px;color:rgba(255,255,255,.75);">Мы подключаем платёжную систему</div>
    </div>

    <div style="padding:22px 22px 24px;">

      <!-- What was selected -->
      <div style="background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--r);padding:14px;margin-bottom:18px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);margin-bottom:10px;">ВЫ ВЫБРАЛИ</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div>
            <div style="font-size:15px;font-weight:800;">${plan === 'yearly' ? 'Годовой тариф' : 'Месячный тариф'}</div>
            <div style="font-size:11px;color:var(--tx3);">${plan === 'yearly' ? 'Экономия 17% vs месячного' : 'Автопродление каждый месяц'}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:20px;font-weight:800;color:var(--acc2);">${amount}</div>
            <div style="font-size:10px;color:var(--tx3);">/ ${period}</div>
          </div>
        </div>
        ${card ? `<div style="display:flex;align-items:center;gap:9px;padding:9px 11px;background:var(--bg4);border-radius:8px;">
          <div style="width:32px;height:20px;background:linear-gradient(135deg,var(--acc),var(--acc2));border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:800;color:#fff;">CARD</div>
          <div>
            <div style="font-size:12px;font-weight:600;">•••• •••• •••• ${card.last4}</div>
            <div style="font-size:10px;color:var(--tx3);">${card.holder} · ${card.expiry}</div>
          </div>
          <span style="margin-left:auto;font-size:10px;color:var(--tx3);background:var(--bg3);padding:2px 7px;border-radius:20px;">Сохранена</span>
        </div>` : ''}
      </div>

      <!-- Coming soon explanation -->
      <div style="background:linear-gradient(135deg,rgba(124,58,237,.08),rgba(6,182,212,.05));border:1px solid rgba(124,58,237,.2);border-radius:var(--r);padding:14px;margin-bottom:16px;">
        <div style="font-size:13px;font-weight:700;margin-bottom:8px;">⚙️ Что происходит?</div>
        <div style="font-size:12px;color:var(--tx2);line-height:1.65;">
          Мы сейчас подключаем <strong>Kaspi Pay</strong> и другие платёжные системы Казахстана.
          Как только оплата будет готова — вы получите <strong>уведомление на email</strong>
          и <strong>первый месяц бесплатно</strong> как ранний пользователь. 🎁
        </div>
      </div>

      <!-- Waitlist signup -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--tx3);margin-bottom:8px;">
          <i class="fas fa-bell"></i> УВЕДОМИТЬ МЕНЯ
        </div>
        ${alreadyIn ? `
        <div style="display:flex;align-items:center;gap:9px;padding:11px 13px;background:var(--gd);border:1px solid rgba(16,185,129,.25);border-radius:var(--r);">
          <span style="font-size:18px;">✅</span>
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--green);">Вы в списке ожидания!</div>
            <div style="font-size:11px;color:var(--tx3);">${CUR_USER.email}</div>
          </div>
        </div>` : `
        <div style="display:flex;gap:7px;">
          <input id="waitlistEmail" type="email" value="${CUR_USER.email}"
            style="flex:1;padding:10px 12px;background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--rsm);font-family:Inter,sans-serif;font-size:12px;color:var(--tx);outline:none;"
            placeholder="Ваш email"/>
          <button id="waitlistBtn" class="btn btn-primary" style="white-space:nowrap;">
            <i class="fas fa-bell"></i> Оповестить
          </button>
        </div>
        <div style="font-size:10px;color:var(--tx3);margin-top:5px;">Получите +1 месяц бесплатно при подключении оплаты</div>
        `}
      </div>

      <!-- What's already free -->
      <div style="background:var(--bg3);border-radius:var(--r);padding:12px;margin-bottom:16px;">
        <div style="font-size:10px;font-weight:700;color:var(--tx3);margin-bottom:8px;">ПОКА ВСЁ БЕСПЛАТНО — 30 ДНЕЙ</div>
        ${[
          ['✅','Все транзакции и категории'],
          ['✅','Банковские карты и депозиты'],
          ['✅','Финансовые цели'],
          ['✅','ИИ-советник'],
          ['✅','Импорт выписок'],
          ['✅','Статистика и аналитика'],
        ].map(([ic,tx]) => `<div style="font-size:11px;margin-bottom:4px;">${ic} ${tx}</div>`).join('')}
      </div>

      <button class="btn btn-success wf" onclick="this.closest('.payment-soon-modal').remove()"
        style="justify-content:center;font-size:14px;padding:13px;">
        <i class="fas fa-rocket"></i> Понятно, продолжить бесплатно!
      </button>

      <div style="text-align:center;margin-top:10px;font-size:10px;color:var(--tx3);">
        🔒 Данные вашей карты не хранятся на сервере<br>
        Реальное списание будет только после подключения платёжной системы
      </div>
    </div>
  </div>`;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

  // Waitlist button
  const wBtn = document.getElementById('waitlistBtn');
  const wInp = document.getElementById('waitlistEmail');
  if (wBtn && wInp) {
    wBtn.addEventListener('click', () => {
      const email = wInp.value.trim().toLowerCase();
      if (!email.includes('@')) { alert('Введите корректный email'); return; }
      const list = JSON.parse(localStorage.getItem('mw_waitlist') || '[]');
      if (!list.includes(email)) { list.push(email); localStorage.setItem('mw_waitlist', JSON.stringify(list)); }
      // Show success state
      wBtn.closest('div').parentElement.innerHTML = `
        <div style="display:flex;align-items:center;gap:9px;padding:11px 13px;background:var(--gd);border:1px solid rgba(16,185,129,.25);border-radius:var(--r);">
          <span style="font-size:18px;">✅</span>
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--green);">Вы в списке ожидания!</div>
            <div style="font-size:11px;color:var(--tx3);">${email}</div>
          </div>
        </div>
        <div style="font-size:10px;color:var(--tx3);margin-top:5px;">Получите +1 месяц бесплатно при подключении оплаты</div>`;
    });
  }
}

function showPaymentSuccess(plan) {
  // Redirect to coming soon page instead
  showPaymentComingSoon(plan);
}

function cancelSubscription() {
  if(!confirm('Отменить подписку? Доступ сохранится до конца оплаченного периода.')) return;
  DATA.premium=false; DATA.premiumSince=null; DATA.premiumPlan=null; saveData();
  document.querySelectorAll('.paywall-modal,.modal-ov').forEach(m=>m.remove());
  renderHeader();
  alert('Подписка отменена. Доступ сохраняется до конца периода.');
}

// ── DASHBOARD ──────────────────────────
function renderDashboard() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp;
  const savePct=inc>0?Math.round((bal/inc)*100):0;
  const activeGoal=DATA.goals.find(g=>g.id===DATA.activeGoalId);

  document.getElementById('content').innerHTML=`
    <div class="grid3" style="margin-bottom:14px;">
      <div class="card">
        <div class="clbl"><i class="fas fa-wallet"></i> ${t('balance')}</div>
        <div style="text-align:center;padding:10px 0 6px;">
          <div class="bal-amount">${fmtAmt(bal)}</div>
          <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:12px;">
            <span style="color:var(--green);"><i class="fas fa-arrow-up"></i> ${fmtAmt(inc)}</span>
            <span style="color:var(--red);"><i class="fas fa-arrow-down"></i> ${fmtAmt(exp)}</span>
          </div>
          <div style="margin-top:6px;font-size:11px;color:${savePct>=20?'var(--green)':savePct>=0?'var(--tx2)':'var(--red)'};">${t('savingsRate')}: ${savePct}%</div>
          ${!isPremium()&&isTrialActive()?`<div style="margin-top:8px;display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--green);cursor:pointer;" onclick="showPaywall()">
            <i class="fas fa-hourglass-half"></i> ${trialDaysLeft()} дней бесплатно осталось
          </div>`:''}
          ${!isPremium()&&!isTrialActive()?`<div style="margin-top:8px;display:inline-flex;align-items:center;gap:6px;background:var(--rd);border:1px solid rgba(244,63,94,.3);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--red);cursor:pointer;" onclick="showPaywall()">
            <i class="fas fa-lock"></i> Пробный период истёк — оформить Premium
          </div>`:''}
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-bolt"></i> ${t('quickActs')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:8px;">
          <button class="btn btn-success" id="qInc"><i class="fas fa-plus"></i> ${t('income')}</button>
          <button class="btn btn-danger" id="qExp"><i class="fas fa-minus"></i> ${t('expense')}</button>
          <button class="btn btn-primary" id="qCard"><i class="fas fa-credit-card"></i> ${t('myCards')}</button>
          <button class="btn btn-warning" id="qExp2"><i class="fas fa-file-export"></i> ${t('export')}</button>
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-bullseye"></i> ${t('activeGoal')}</div>
        ${activeGoal?`
          <div style="text-align:center;padding:8px 0;">
            <div style="font-size:26px;">${activeGoal.emoji}</div>
            <div style="font-size:13px;font-weight:700;margin:4px 0;">${activeGoal.name}</div>
            <div style="font-size:11px;color:var(--tx3);">${fmtAmt(activeGoal.saved)} / ${fmtAmt(activeGoal.target)}</div>
            <div style="height:5px;background:var(--bg4);border-radius:4px;margin:7px 0;overflow:hidden;">
              <div style="height:100%;width:${Math.min(100,Math.round(activeGoal.saved/activeGoal.target*100))}%;background:linear-gradient(90deg,var(--acc),var(--acc2));border-radius:4px;"></div>
            </div>
            <div style="font-size:18px;font-weight:800;color:var(--acc2);">${Math.min(100,Math.round(activeGoal.saved/activeGoal.target*100))}%</div>
          </div>`:`<div style="text-align:center;padding:20px;color:var(--tx3);">${t('noActiveGoal')}</div>`}
      </div>
    </div>
    ${DATA.cards.length?`
    <div class="card" style="margin-bottom:14px;">
      <div class="card-hdr"><div class="clbl"><i class="fas fa-credit-card"></i> ${t('myCards')}</div></div>
      <div class="mini-cards-row">${DATA.cards.slice(0,4).map(c=>`
        <div class="mini-card" style="background:${CARD_BG[c.color]||CARD_BG.purple};">
          <div class="mc-top"><span>${c.bank}</span><span>${c.type.toUpperCase()}</span></div>
          <div class="mc-num">**** ${c.number}</div>
          <div class="mc-bal">${fmtAmt(cardSpent(c.id))}</div>
        </div>`).join('')}</div>
    </div>`:''}
    <div class="card">
      <div class="card-hdr"><div class="clbl"><i class="fas fa-clock"></i> ${t('lastOps')}</div></div>
      <div class="tx-list" id="dashTxList"></div>
    </div>`;

  const list=document.getElementById('dashTxList');
  const recent=[...DATA.transactions].reverse().slice(0,7);
  list.innerHTML=recent.map(tx=>{
    const card=tx.cardId?DATA.cards.find(c=>c.id===tx.cardId):null;
    return `<div class="tx-item">
      <div class="tx-l">
        <div class="tx-ic ${tx.type}"><i class="fas fa-${tx.type==='income'?'arrow-down':'arrow-up'}"></i></div>
        <span class="tx-txt">${tx.text}</span>
        <span class="tx-cat">${catEmoji(tx.category)} ${tx.category}</span>
        ${card?`<span class="tx-card"><i class="fas fa-credit-card"></i> **** ${card.number}</span>`:''}
      </div>
      <div class="tx-amt ${tx.type}">${tx.type==='income'?'+':'-'}${fmtAmt(tx.amount)}</div>
    </div>`;
  }).join('')||`<div style="text-align:center;padding:20px;color:var(--tx3);">${t('noTx')}</div>`;

  document.getElementById('qInc').addEventListener('click',()=>{const v=prompt(t('income')+' (₸):');if(v&&parseInt(v)>0)addTx(`Доход ${parseInt(v)}`);});
  document.getElementById('qExp').addEventListener('click',()=>{const v=prompt(t('expense')+' (₸):');if(v&&parseInt(v)>0)addTx(`Расход ${parseInt(v)}`);});
  document.getElementById('qCard').addEventListener('click',()=>{document.querySelector('[data-tab="cards"]').click();});
  document.getElementById('qExp2').addEventListener('click',exportReport);
}

// ── TRANSACTIONS TAB ───────────────────
function renderTxTab() {
  const cardOpts=DATA.cards.map(c=>`<option value="${c.id}">${c.bank} **** ${c.number}</option>`).join('');
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:14px;">
      <div class="clbl"><i class="fas fa-plus-circle"></i> ${t('txTitle')}</div>
      <div class="igrp" style="margin-top:10px;">
        <input class="finput" type="text" id="txInp" placeholder="${t('txPh')}"/>
        ${DATA.cards.length?`<select class="fsel" id="txCardSel" style="max-width:190px;"><option value="">—</option>${cardOpts}</select>`:''}
        <button class="btn btn-success" id="txAddBtn"><i class="fas fa-plus"></i> ${t('addBtn')}</button>
        <button class="btn btn-danger btn-sm" id="txClrBtn"><i class="fas fa-trash"></i></button>
      </div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:9px;" id="quickBtns">
        ${renderQuickButtons()}
      </div>
    </div>
    <div class="card">
      <div class="card-hdr">
        <div class="clbl"><i class="fas fa-list-ul"></i> ${t('allOps')} (${DATA.transactions.length})</div>
        <div style="display:flex;gap:3px;">
          <button class="btn btn-outline btn-sm filter-btn active" data-f="all">${t('all')}</button>
          <button class="btn btn-outline btn-sm filter-btn" data-f="income">${t('incomes')}</button>
          <button class="btn btn-outline btn-sm filter-btn" data-f="expense">${t('expenses')}</button>
        </div>
      </div>
      <div class="tx-list" id="fullTxList"></div>
    </div>`;

  // Init quick price buttons
  const qb = document.getElementById('quickBtns');
  if(qb){ qb.innerHTML = renderQuickButtons(); initQuickButtons(qb); }

  document.getElementById('txAddBtn').addEventListener('click',()=>{
    const v=document.getElementById('txInp').value.trim();
    const s=document.getElementById('txCardSel');
    const cid=s&&s.value?parseInt(s.value):null;
    if(v){const ok=addTx(v,cid);if(ok)document.getElementById('txInp').value='';}
  });
  document.getElementById('txInp').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('txAddBtn').click();});
  document.getElementById('txClrBtn').addEventListener('click',()=>{
    if(confirm(t('confirm_clear'))){DATA.transactions=[];saveData();renderTxTab();renderHeader();}
  });
  document.querySelectorAll('.template').forEach(b=>{
    b.addEventListener('click',()=>{document.getElementById('txInp').value=b.dataset.text;document.getElementById('txAddBtn').click();});
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
  const list=document.getElementById('fullTxList'); if(!list) return;
  const arr=f==='all'?DATA.transactions:DATA.transactions.filter(t=>t.type===f);
  list.innerHTML=[...arr].reverse().slice(0,80).map(tx=>{
    const card=tx.cardId?DATA.cards.find(c=>c.id===tx.cardId):null;
    const d=tx.date?new Date(tx.date).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'}):'';
    return `<div class="tx-item">
      <div class="tx-l">
        <div class="tx-ic ${tx.type}"><i class="fas fa-${tx.type==='income'?'arrow-down':'arrow-up'}"></i></div>
        <span class="tx-txt">${tx.text}</span>
        <span class="tx-cat">${catEmoji(tx.category)} ${tx.category}</span>
        ${card?`<span class="tx-card"><i class="fas fa-credit-card"></i> **** ${card.number}</span>`:''}
        ${d?`<span style="font-size:10px;color:var(--tx3);">${d}</span>`:''}
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <div class="tx-amt ${tx.type}">${tx.type==='income'?'+':'-'}${fmtAmt(tx.amount)}</div>
        <button class="tx-del" data-id="${tx.id}"><i class="fas fa-times"></i></button>
      </div>
    </div>`;
  }).join('')||`<div style="text-align:center;padding:20px;color:var(--tx3);">${t('noTx')}</div>`;
  list.querySelectorAll('.tx-edit').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      const tx=DATA.transactions.find(x=>x.id===parseInt(b.dataset.id)); if(!tx) return;
      showEditTxModal(tx, ()=>{ renderFullTxList(f); renderHeader(); });
    });
  });
  list.querySelectorAll('.tx-del').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      DATA.transactions=DATA.transactions.filter(x=>x.id!==parseInt(b.dataset.id));
      saveData(); renderFullTxList(f); renderHeader();
    });
  });
}

// ── CARDS TAB ──────────────────────────
function renderCardsTab() {
  document.getElementById('content').innerHTML=`
    <div class="grid2" style="margin-bottom:14px;">
      <div class="card">
        <div class="clbl"><i class="fas fa-plus-circle"></i> ${t('addCard')}</div>
        <div style="margin-top:12px;">
          <div class="fgrp"><label>${t('cardNum')}</label><input class="finput wf" type="text" id="cNum" placeholder="0000 0000 0000 0000" maxlength="19"/></div>
          <div class="fgrp"><label>${t('cardHolder')}</label><input class="finput wf" type="text" id="cHolder" placeholder="IVAN IVANOV"/></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div class="fgrp"><label>${t('cardExpiry')}</label><input class="finput" type="text" id="cExpiry" placeholder="MM/YY" maxlength="5"/></div>
            <div class="fgrp"><label>${t('cardBank')}</label><input class="finput" type="text" id="cBank" placeholder="Kaspi..."/></div>
          </div>
          <div class="fgrp"><label>${t('paySystem')}</label>
            <select class="fsel wf" id="cType"><option value="visa">VISA</option><option value="mastercard">Mastercard</option><option value="mir">МИР</option><option value="amex">Amex</option></select>
          </div>
          <div class="fgrp"><label>${t('cardColor')}</label>
            <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:4px;" id="colorPicker">
              ${Object.entries(CARD_BG).map(([k,g])=>`<div class="color-dot" data-c="${k}" style="background:${g};" title="${k}"></div>`).join('')}
            </div>
          </div>
          <button class="btn btn-primary wf" id="addCardBtn" style="margin-top:6px;"><i class="fas fa-plus"></i> ${t('addCard')}</button>
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-eye"></i> Preview</div>
        <div style="margin-top:14px;">
          <div class="bank-card" id="cPrev" style="background:${CARD_BG.purple};">
            <div class="bc-top"><div class="bc-bank" id="pBank">Bank</div><div class="bc-type" id="pType">VISA</div></div>
            <div class="bc-chip">▣ ▣</div>
            <div class="bc-num" id="pNum">**** **** **** ****</div>
            <div class="bc-bot">
              <div><div style="font-size:8px;color:rgba(255,255,255,.5);letter-spacing:1px;">${t('cardHolder').toUpperCase()}</div><div class="bc-holder" id="pHolder">IVAN IVANOV</div></div>
              <div><div style="font-size:8px;color:rgba(255,255,255,.5);letter-spacing:1px;">${t('cardExpiry').toUpperCase()}</div><div class="bc-holder" id="pExpiry">MM/YY</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-hdr"><div class="clbl"><i class="fas fa-credit-card"></i> ${t('myCards')} (${DATA.cards.length})</div></div>
      <div class="cards-grid" id="cardsList"></div>
    </div>`;

  let selCol='purple';
  const upd=()=>{
    const p=document.getElementById('cPrev'); if(!p) return;
    const n=(document.getElementById('cNum').value.replace(/\D/g,'')||'').padEnd(16,'*').replace(/(.{4})/g,'$1 ').trim();
    document.getElementById('pNum').textContent=n;
    document.getElementById('pHolder').textContent=(document.getElementById('cHolder').value||'HOLDER').toUpperCase();
    document.getElementById('pExpiry').textContent=document.getElementById('cExpiry').value||'MM/YY';
    document.getElementById('pBank').textContent=document.getElementById('cBank').value||'Bank';
    document.getElementById('pType').textContent=(document.getElementById('cType').value||'visa').toUpperCase();
    p.style.background=CARD_BG[selCol];
  };
  ['cNum','cHolder','cExpiry','cBank','cType'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('input',upd);});
  document.getElementById('cNum').addEventListener('input',function(){
    this.value=this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);upd();
  });
  document.getElementById('cExpiry').addEventListener('input',function(){
    let v=this.value.replace(/\D/g,'');if(v.length>=3)v=v.slice(0,2)+'/'+v.slice(2,4);this.value=v;upd();
  });
  document.querySelectorAll('.color-dot').forEach(d=>{
    d.addEventListener('click',()=>{
      document.querySelectorAll('.color-dot').forEach(x=>x.classList.remove('sel'));
      d.classList.add('sel'); selCol=d.dataset.c; upd();
    });
  });
  document.querySelector('.color-dot')?.classList.add('sel');
  document.getElementById('addCardBtn').addEventListener('click',()=>{
    addCard(document.getElementById('cNum').value,document.getElementById('cHolder').value,
      document.getElementById('cExpiry').value,document.getElementById('cBank').value,
      document.getElementById('cType').value,selCol);
  });
  renderCardsList();
}

function renderCardsList() {
  const list=document.getElementById('cardsList'); if(!list) return;
  if(!DATA.cards.length){
    list.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--tx3);"><i class="fas fa-credit-card" style="font-size:36px;opacity:.2;display:block;margin-bottom:10px;"></i>${t('noCards')}</div>`;
    return;
  }
  list.innerHTML=DATA.cards.map(c=>{
    const sp=cardSpent(c.id); const tc=cardTxCount(c.id);

    // Month stats for this card
    const now=new Date(); const monthStart=new Date(now.getFullYear(),now.getMonth(),1).getTime();
    const monthSpent=DATA.transactions.filter(t=>t.cardId===c.id&&t.type==='expense'&&t.date>=monthStart).reduce((s,t)=>s+t.amount,0);

    const cats={};
    DATA.transactions.filter(t=>t.cardId===c.id&&t.type==='expense').forEach(t=>{cats[t.category]=(cats[t.category]||0)+t.amount;});
    const top=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,3);
    return `<div>
      <div class="bank-card" style="background:${CARD_BG[c.color]||CARD_BG.purple};margin-bottom:10px;">
        <button class="card-del-btn" data-id="${c.id}"><i class="fas fa-times"></i></button>
        <div class="bc-top"><div class="bc-bank">${c.bank}</div><div class="bc-type">${c.type.toUpperCase()}</div></div>
        <div class="bc-chip">▣ ▣</div>
        <div class="bc-num">**** **** **** ${c.number}</div>
        <div class="bc-bot">
          <div><div style="font-size:8px;color:rgba(255,255,255,.5);">ДЕРЖАТЕЛЬ</div><div class="bc-holder">${c.holder}</div></div>
          <div><div style="font-size:8px;color:rgba(255,255,255,.5);">СРОК</div><div class="bc-holder">${c.expiry}</div></div>
        </div>
      </div>
      <div style="font-size:12px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="color:var(--tx3);">${t('spent')}</span><strong style="color:var(--red);">${fmtAmt(sp)}</strong></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="color:var(--tx3);">Этот месяц</span><strong style="color:var(--red);">${fmtAmt(monthSpent)}</strong></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="color:var(--tx3);">${t('numOps')}</span><strong>${tc}</strong></div>
        ${top.map(([cat,a])=>`<div class="card-stat-row"><div class="cs-dot" style="background:var(--acc);"></div><span style="flex:1;font-size:11px;">${catEmoji(cat)} ${cat}</span><span style="font-weight:700;font-size:11px;color:var(--red);">${fmtAmt(a)}</span></div>`).join('')}
      </div>
      <button class="btn btn-outline btn-sm wf add-spend-card" data-id="${c.id}"><i class="fas fa-plus"></i> ${t('addSpend')}</button>
    </div>`;
  }).join('');
  list.querySelectorAll('.card-del-btn').forEach(b=>b.addEventListener('click',()=>delCard(parseInt(b.dataset.id))));
  list.querySelectorAll('.add-spend-card').forEach(b=>{
    b.addEventListener('click',()=>{const v=prompt(t('spendQ'));if(v)addTx(v,parseInt(b.dataset.id));});
  });
}

// ── STATISTICS TAB ─────────────────────
function renderStatsTab() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp;
  const catData={};
  DATA.transactions.filter(t=>t.type==='expense').forEach(t=>{catData[t.category]=(catData[t.category]||0)+t.amount;});
  const cats=Object.entries(catData).sort((a,b)=>b[1]-a[1]);
  const maxCat=cats[0]?.[1]||1;

  // 7-day chart
  const dayData={};
  for(let i=6;i>=0;i--){
    const d=new Date(Date.now()-864e5*i);
    const k=d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'});
    dayData[k]={income:0,expense:0};
  }
  DATA.transactions.forEach(tx=>{
    if(!tx.date)return;
    const k=new Date(tx.date).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'});
    if(dayData[k])dayData[k][tx.type]+=tx.amount;
  });
  const days=Object.entries(dayData);
  const maxDay=Math.max(...days.map(([,v])=>Math.max(v.income,v.expense)),1);

  // Monthly comparison
  const monthMap={};
  DATA.transactions.forEach(tx=>{
    if(!tx.date)return;
    const d=new Date(tx.date);
    const k=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    if(!monthMap[k])monthMap[k]={inc:0,exp:0,label:d.toLocaleDateString('ru-RU',{month:'short',year:'numeric'})};
    monthMap[k][tx.type==='income'?'inc':'exp']+=tx.amount;
  });
  const monthArr=Object.entries(monthMap).sort(([a],[b])=>a.localeCompare(b)).slice(-6);

  document.getElementById('content').innerHTML=`
    <div class="grid3" style="margin-bottom:14px;">
      <div class="card">
        <div class="clbl"><i class="fas fa-chart-pie"></i> ${t('stats')}</div>
        <div style="margin-top:10px;">
          <div style="text-align:center;margin-bottom:12px;">
            <div style="font-size:30px;font-weight:800;color:${bal>=0?'var(--green)':'var(--red)'};">${fmtAmt(bal)}</div>
          </div>
          <div style="display:flex;gap:7px;">
            <div style="flex:1;background:var(--gd);border:1px solid rgba(16,185,129,.2);border-radius:var(--r);padding:9px;text-align:center;">
              <div style="font-size:10px;color:var(--green);">${t('income')}</div>
              <div style="font-weight:700;font-size:13px;">${fmtAmt(inc)}</div>
            </div>
            <div style="flex:1;background:var(--rd);border:1px solid rgba(244,63,94,.2);border-radius:var(--r);padding:9px;text-align:center;">
              <div style="font-size:10px;color:var(--red);">${t('expense')}</div>
              <div style="font-weight:700;font-size:13px;">${fmtAmt(exp)}</div>
            </div>
          </div>
          ${inc>0?`<div style="margin-top:8px;font-size:11px;color:var(--tx3);text-align:center;">${t('savingsRate')}: <strong style="color:var(--acc2);">${Math.round(bal/inc*100)}%</strong></div>`:''}
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-globe"></i> ${t('curRates')}</div>
        <div class="cur-table" style="margin-top:8px;">
          <div class="cur-row cur-hdr"><span></span><span>Val</span><span>${t('income').slice(0,4)}</span><span>${t('expense').slice(0,4)}</span><span>Bal</span></div>
          ${Object.entries(CUR).map(([k,v])=>`<div class="cur-row ${k===CUR_KEY?'active-cur':''}">
            <span class="cur-flag">${v.flag}</span><span class="cur-name">${k}</span>
            <span style="color:var(--green);">${Math.round(inc*v.rate).toLocaleString()}</span>
            <span style="color:var(--red);">${Math.round(exp*v.rate).toLocaleString()}</span>
            <span style="font-weight:700;color:${bal>=0?'var(--green)':'var(--red)'};">${Math.round(bal*v.rate).toLocaleString()} ${v.sym}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-credit-card"></i> ${t('cardStats')}</div>
        <div style="margin-top:8px;">
          ${DATA.cards.length===0?`<div style="text-align:center;padding:20px;color:var(--tx3);">${t('noCards')}</div>`:
            DATA.cards.map(c=>`<div class="card-stat-row">
              <div class="cs-dot" style="background:${CARD_BG[c.color]?.split(',')[0]?.replace('linear-gradient(135deg,','')?.trim()};"></div>
              <div style="flex:1;"><div style="font-size:12px;font-weight:600;">${c.bank} **** ${c.number}</div><div style="font-size:10px;color:var(--tx3);">${cardTxCount(c.id)} ${t('numOps')}</div></div>
              <div style="font-weight:700;font-size:12px;color:var(--red);">${fmtAmt(cardSpent(c.id))}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:14px;">
      <div class="clbl"><i class="fas fa-chart-bar"></i> ${t('by7')}</div>
      <div class="bar-chart" style="margin-top:14px;height:120px;">
        ${days.map(([day,v])=>`<div class="bar-col"><div class="bar-wrap">
          <div class="bar inc-bar" style="height:${Math.round(v.income/maxDay*90)}px;" title="${fmtAmt(v.income)}"></div>
          <div class="bar exp-bar" style="height:${Math.round(v.expense/maxDay*90)}px;" title="${fmtAmt(v.expense)}"></div>
        </div><div class="bar-lbl">${day}</div></div>`).join('')}
      </div>
      <div style="display:flex;gap:12px;margin-top:8px;font-size:11px;color:var(--tx3);">
        <span><span style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--green);margin-right:3px;"></span>${t('income')}</span>
        <span><span style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--red);margin-right:3px;"></span>${t('expense')}</span>
      </div>
    </div>

    <div class="grid2" style="margin-bottom:14px;">
      <div class="card">
        <div class="clbl"><i class="fas fa-tags"></i> ${t('byCat')}</div>
        <div style="margin-top:10px;">
          ${cats.length===0?`<div style="text-align:center;padding:20px;color:var(--tx3);">${t('noExp')}</div>`:
            cats.map(([cat,amt])=>`<div style="margin-bottom:11px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:12px;">
                <span>${catEmoji(cat)} <strong>${cat}</strong></span>
                <div><span style="color:var(--red);font-weight:700;">${fmtAmt(amt)}</span><span style="color:var(--tx3);font-size:10px;margin-left:4px;">${exp>0?Math.round(amt/exp*100):0}%</span></div>
              </div>
              <div style="height:4px;background:var(--bg4);border-radius:4px;overflow:hidden;">
                <div style="height:100%;width:${Math.round(amt/maxCat*100)}%;background:linear-gradient(90deg,var(--acc),var(--acc2));border-radius:4px;"></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-calendar"></i> ${t('compTitle')}</div>
        <div style="margin-top:10px;">
          ${monthArr.length<2?`<div style="text-align:center;padding:20px;color:var(--tx3);">Нужно больше данных (2+ месяца)</div>`:
            monthArr.map(([k,v])=>{
              const b=v.inc-v.exp; const plus=b>=0;
              return `<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--brd);">
                <span style="font-size:11px;color:var(--tx2);">${v.label}</span>
                <div style="display:flex;gap:10px;font-size:11px;">
                  <span style="color:var(--green);">↑${fmtAmt(v.inc)}</span>
                  <span style="color:var(--red);">↓${fmtAmt(v.exp)}</span>
                  <strong style="color:${plus?'var(--green)':'var(--red)'};">${plus?'+':''}${fmtAmt(b)}</strong>
                </div>
              </div>`;
            }).join('')}
        </div>
      </div>
    </div>`;
}

// ── GOALS TAB ──────────────────────────
function renderGoalsTab() {
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:14px;">
      <div class="clbl"><i class="fas fa-plus-circle"></i> ${t('newGoal')}</div>
      <div class="igrp" style="margin-top:9px;">
        <input class="finput" type="text" id="gName" placeholder="${t('goalNamePh')}"/>
        <input class="finput" type="number" id="gTarget" placeholder="${t('goalAmtPh')}" style="max-width:140px;"/>
        <button class="btn btn-primary" id="gAddBtn"><i class="fas fa-plus"></i> ${t('createGoal')}</button>
      </div>
    </div>
    <div class="card" style="margin-bottom:14px;">
      <div class="card-hdr"><div class="clbl"><i class="fas fa-bullseye"></i> ${t('myGoals')}</div><span style="font-size:11px;color:var(--tx3);">${DATA.goals.length}</span></div>
      <div id="goalsList"></div>
    </div>
    <div class="card">
      <div class="clbl"><i class="fas fa-route"></i> ${t('roadmap')}</div>
      <div id="roadmap" style="text-align:center;padding:14px;color:var(--tx3);font-size:13px;">${t('pickGoal')}</div>
    </div>`;
  document.getElementById('gAddBtn').addEventListener('click',()=>{
    addGoal(document.getElementById('gName').value.trim(),parseInt(document.getElementById('gTarget').value));
  });
  renderGoalsList();
}

function renderGoalsList() {
  const list=document.getElementById('goalsList'); if(!list) return;
  list.innerHTML=DATA.goals.map(g=>{
    const pct=Math.min(100,Math.round(g.saved/g.target*100));
    return `<div class="goal-item ${g.id===DATA.activeGoalId?'active':''}" data-id="${g.id}">
      <span class="g-emoji">${g.emoji}</span>
      <div class="g-info"><div class="g-name">${g.name}</div><div class="g-sub">${fmtAmt(g.saved)} / ${fmtAmt(g.target)}</div></div>
      <div class="g-bar"><div class="fill" style="width:${pct}%;"></div></div>
      <div class="g-pct">${pct}%</div>
      <button class="btn btn-primary btn-xs g-plus" data-id="${g.id}" title="+"><i class="fas fa-plus"></i></button>
      <button class="btn btn-outline btn-xs g-edit" data-id="${g.id}" title="✏️"><i class="fas fa-pen"></i></button>
      <button class="btn btn-danger btn-xs g-del" data-id="${g.id}" title="🗑"><i class="fas fa-times"></i></button>
    </div>`;
  }).join('')||`<div style="text-align:center;padding:18px;color:var(--tx3);">${t('noGoals')}</div>`;
  list.querySelectorAll('.goal-item').forEach(el=>{
    el.addEventListener('click',e=>{if(!e.target.closest('button')){DATA.activeGoalId=parseInt(el.dataset.id);saveData();renderGoalsList();}});
  });
  list.querySelectorAll('.g-plus').forEach(b=>{
    b.addEventListener('click',e=>{e.stopPropagation();const a=prompt(t('contribute'));if(a&&parseInt(a)>0)contributeGoal(parseInt(b.dataset.id),parseInt(a));});
  });
  list.querySelectorAll('.g-edit').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      const g=DATA.goals.find(x=>x.id===parseInt(b.dataset.id)); if(!g) return;
      const n=prompt(t('renameGoal'),g.name); if(n&&n.trim()){g.name=n.trim();saveData();renderGoalsList();}
    });
  });
  list.querySelectorAll('.g-del').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();
      if(!confirm(t('deleteGoal')))return;
      const gid=parseInt(b.dataset.id);
      DATA.goals=DATA.goals.filter(x=>x.id!==gid);
      if(DATA.activeGoalId===gid)DATA.activeGoalId=DATA.goals[0]?.id||null;
      saveData();renderGoalsList();renderHeader();
    });
  });
  renderRoadmap();
}

function renderRoadmap() {
  const g=DATA.goals.find(x=>x.id===DATA.activeGoalId);
  const d=document.getElementById('roadmap'); if(!d) return;
  if(!g){d.innerHTML=`🌟 ${t('pickGoal')}`;return;}
  const pct=Math.min(100,Math.round(g.saved/g.target*100));
  const steps=[t('start'),'25%','50%','75%',t('finish')];
  const cur=Math.min(4,Math.floor(pct/100*4));
  d.innerHTML=`<div style="text-align:center;">
    <div style="font-size:30px;">${g.emoji}</div>
    <div style="font-size:15px;font-weight:700;margin:5px 0;">${g.name}</div>
    <div style="font-size:12px;color:var(--tx3);">${fmtAmt(g.saved)} / ${fmtAmt(g.target)}</div>
    <div style="height:6px;background:var(--bg4);border-radius:4px;margin:10px 0;overflow:hidden;"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--acc),var(--acc2));border-radius:4px;transition:width .5s;"></div></div>
    <div style="font-size:28px;font-weight:900;color:var(--acc2);">${pct}%</div>
    <div style="display:flex;justify-content:center;gap:5px;margin-top:10px;flex-wrap:wrap;">
      ${steps.map((s,i)=>`<span style="padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;${i<cur?'background:var(--green);color:#fff;':i===cur?'background:var(--acc);color:#fff;':'background:var(--bg4);color:var(--tx3);'}">${s}</span>`).join('')}
    </div>
    ${pct>=100?`<div style="margin-top:10px;color:var(--green);font-size:13px;">${t('goalDone')}</div>`:''}
  </div>`;
}

// ── DEPOSITS TAB ───────────────────────
function renderDepositsTab() {
  if(!DATA.deposits)DATA.deposits=[];
  const totAmt=DATA.deposits.reduce((s,d)=>s+d.amount,0);
  const totInc=DATA.deposits.reduce((s,d)=>s+d.income,0);
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:14px;">
      <div class="clbl"><i class="fas fa-piggy-bank"></i> ${t('newDep')}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:10px;">
        <div class="fgrp"><label>${t('depName')}</label><input class="finput wf" type="text" id="dName" placeholder="${t('depName')}"/></div>
        <div class="fgrp"><label>${t('depAmt')}</label><input class="finput wf" type="number" id="dAmt" placeholder="100000"/></div>
        <div class="fgrp"><label>${t('depRate')}</label><input class="finput wf" type="number" id="dRate" placeholder="12" step="0.1"/></div>
        <div class="fgrp"><label>${t('depTerm')}</label><input class="finput wf" type="number" id="dMonths" placeholder="12" min="1" max="120"/></div>
      </div>
      <button class="btn btn-primary wf" id="dAddBtn"><i class="fas fa-plus"></i> ${t('addDep')}</button>
    </div>
    ${DATA.deposits.length?`<div class="grid2" style="margin-bottom:14px;">
      <div class="card"><div class="clbl"><i class="fas fa-coins"></i> ${t('depAmt')}</div>
        <div style="font-size:26px;font-weight:800;color:var(--acc2);margin-top:7px;">${fmtAmt(totAmt)}</div>
      </div>
      <div class="card"><div class="clbl"><i class="fas fa-chart-line"></i> ${t('depTitle')}</div>
        <div style="font-size:26px;font-weight:800;color:var(--green);margin-top:7px;">+${fmtAmt(totInc)}</div>
      </div>
    </div>`:''}
    <div class="card">
      <div class="card-hdr"><div class="clbl"><i class="fas fa-piggy-bank"></i> ${t('myDeps')}</div><span style="font-size:11px;color:var(--tx3);">${DATA.deposits.length}</span></div>
      <div id="depList"></div>
    </div>`;

  document.getElementById('dAddBtn').addEventListener('click',()=>{
    addDeposit(document.getElementById('dName').value.trim(),
      parseFloat(document.getElementById('dAmt').value)||0,
      parseFloat(document.getElementById('dRate').value)||0,
      parseInt(document.getElementById('dMonths').value)||0);
  });

  const dlist=document.getElementById('depList');
  if(!DATA.deposits.length){dlist.innerHTML=`<div style="text-align:center;padding:20px;color:var(--tx3);">${t('noDeps')}</div>`;return;}
  dlist.innerHTML=DATA.deposits.map(d=>{
    const end=new Date(d.createdAt+d.months*30*864e5).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric'});
    return `<div class="dep-item">
      <div class="dep-main">
        <div class="dep-name">🏦 ${d.name}</div>
        <div class="dep-tags">
          <span class="dep-tag">${d.rate}% ${t('perYear')}</span>
          <span class="dep-tag">${d.months} ${t('months')}</span>
          <span class="dep-tag">→ ${end}</span>
        </div>
      </div>
      <div class="dep-right">
        <div class="dep-amount">${fmtAmt(d.amount)}</div>
        <div class="dep-income">+${fmtAmt(d.income)}</div>
      </div>
      <button class="tx-del dep-del" data-id="${d.id}"><i class="fas fa-times"></i></button>
    </div>`;
  }).join('');
  dlist.querySelectorAll('.dep-del').forEach(b=>{
    b.addEventListener('click',()=>{if(confirm(t('delDep'))){DATA.deposits=DATA.deposits.filter(d=>d.id!==parseInt(b.dataset.id));saveData();renderDepositsTab();}});
  });
}

// ── GAMIFICATION TAB ───────────────────
function renderGamTab() {
  refreshDailyQuests();
  const ri=getRankInfo();
  const xpPct=ri.next?Math.min(100,Math.round(DATA.xp/ri.next.xp*100)):100;
  document.getElementById('content').innerHTML=`
    <div class="grid2" style="margin-bottom:14px;">
      <div class="card" style="text-align:center;">
        <div class="clbl" style="justify-content:center;"><i class="fas fa-crown"></i> Ранг</div>
        <div style="font-size:64px;margin:8px 0;">${ri.current.icon}</div>
        <div style="font-size:20px;font-weight:800;color:var(--gold);">${ri.current.name}</div>
        <div style="font-size:12px;color:var(--tx3);margin:5px 0;">XP: ${DATA.xp}${ri.next?` / ${ri.next.xp}`:''}</div>
        <div style="height:5px;background:var(--bg4);border-radius:4px;overflow:hidden;margin:7px 0;">
          <div style="height:100%;width:${xpPct}%;background:linear-gradient(90deg,var(--gold),#f97316);border-radius:4px;"></div>
        </div>
        ${ri.next?`<div style="font-size:11px;color:var(--tx3);">До ${ri.next.name}: ${ri.next.xp-DATA.xp} XP</div>`:'<div style="font-size:11px;color:var(--gold);">🌟 Максимум!</div>'}
      </div>
      <div class="card">
        <div class="card-hdr"><div class="clbl"><i class="fas fa-tasks"></i> ${t('quests')}</div><span style="font-size:11px;color:var(--tx3);">${DATA.quests.filter(q=>q.done).length}/${DATA.quests.length}</span></div>
        <div id="questList"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-hdr"><div class="clbl"><i class="fas fa-trophy"></i> ${t('achievements')}</div><span style="font-size:11px;color:var(--tx3);">${Object.values(DATA.achievements).filter(v=>v).length}/9</span></div>
      <div class="ach-grid" id="achGrid"></div>
    </div>`;
  renderQuests(); renderAch();
}

function renderQuests() {
  const list=document.getElementById('questList'); if(!list) return;
  const now = new Date();
  const midnight = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
  const msLeft = midnight-now;
  const hLeft = Math.floor(msLeft/36e5);
  const mLeft = Math.floor((msLeft%36e5)/6e4);
  list.innerHTML=`
    <div style="display:flex;align-items:center;gap:6px;padding:7px 10px;background:rgba(6,182,212,.07);border:1px solid rgba(6,182,212,.2);border-radius:var(--rsm);margin-bottom:9px;font-size:11px;color:var(--cyan);">
      <i class="fas fa-clock"></i>
      <span>Обновятся через: <strong>${hLeft}ч ${mLeft}мин</strong></span>
      <span style="margin-left:auto;color:var(--tx3);">${DATA.quests.filter(q=>q.done).length}/${DATA.quests.length} выполнено</span>
    </div>`+
  DATA.quests.map(q=>`<div class="quest-item ${q.done?'done':''}">
    <span style="font-size:16px;">${q.done?'✅':'📌'}</span>
    <div style="flex:1;"><div class="q-title">${q.title}</div><div class="q-desc">${q.desc}</div></div>
    ${!q.done?`<button class="btn btn-primary btn-xs quest-btn" data-id="${q.id}">✓</button>`:''}
    <span class="q-xp">+${q.reward} XP</span>
  </div>`).join('');
  list.querySelectorAll('.quest-btn').forEach(b=>b.addEventListener('click',()=>completeQuest(parseInt(b.dataset.id))));
}

function renderAch() {
  const g=document.getElementById('achGrid'); if(!g) return;
  const list=[{key:'first_tx',icon:'🌟',name:'Первый шаг'},{key:'five_tx',icon:'📝',name:'5 записей'},{key:'ten_tx',icon:'📊',name:'10 записей'},
    {key:'first_goal',icon:'🎯',name:'Первая цель'},{key:'goal_50',icon:'🚀',name:'Полпути'},{key:'quest_master',icon:'⚡',name:'Мастер'},
    {key:'saver',icon:'💰',name:'Экономный'},{key:'level_5',icon:'⭐',name:'Уровень 5'},{key:'first_card',icon:'💳',name:'Карта'}];
  g.innerHTML=list.map(a=>`<div class="ach-item ${DATA.achievements[a.key]?'unlocked':''}"><span class="ach-icon">${a.icon}</span><span class="ach-name">${DATA.achievements[a.key]?a.name:'🔒'}</span></div>`).join('');
}

// ── AI TAB ─────────────────────────────
function renderAITab() {
  // AI tab is free during 30-day trial
  document.getElementById('content').innerHTML=`
    <div class="grid2" style="margin-bottom:14px;">
      <div class="card">
        <div class="card-hdr">
          <div class="clbl"><i class="fas fa-chart-line"></i> ${t('aiAnalysis')}</div>
          <button class="btn btn-primary btn-sm" id="refreshAI"><i class="fas fa-sync-alt"></i> ${t('refreshBtn')}</button>
        </div>
        <div id="aiAnalysisBox" style="margin-top:8px;min-height:80px;">
          <div style="display:flex;gap:5px;align-items:center;padding:14px;background:var(--bg3);border-radius:var(--r);">
            <div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div>
            <span style="font-size:12px;color:var(--tx3);margin-left:5px;">Анализирую...</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-lightbulb"></i> Советы</div>
        <div id="aiTipsBox" style="margin-top:8px;">
          <div style="display:flex;gap:5px;padding:10px;"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="clbl"><i class="fas fa-comments"></i> Финансовый консультант</div>
      <div style="font-size:11px;color:var(--tx3);margin:5px 0 10px;">Задайте любой вопрос о деньгах, накоплениях, инвестициях</div>
      <div id="aiTabMsgs" style="max-height:300px;overflow-y:auto;display:flex;flex-direction:column;gap:8px;margin-bottom:10px;">
        <div class="ai-msg ai-msg-bot"><div class="ai-msg-bubble">Привет, ${CUR_USER.name}! 👋 ${t('aiGreet')}</div></div>
      </div>
      <div style="display:flex;gap:7px;">
        <input type="text" id="aiTabInp" style="flex:1;padding:9px 12px;background:var(--bg3);border:1px solid var(--brd2);border-radius:var(--r);font-family:Inter,sans-serif;font-size:12px;color:var(--tx);outline:none;" placeholder="${t('aiPh')}"/>
        <button class="btn btn-primary" id="aiTabSend"><i class="fas fa-paper-plane"></i></button>
      </div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:7px;">
        ${['Как накопить быстрее?','Где сократить расходы?','Советы по инвестициям','Анализ трат'].map(q=>`<button class="btn btn-outline btn-xs ai-q" data-q="${q}">${q}</button>`).join('')}
      </div>
    </div>`;

  runAnalysis(); loadTips();
  document.getElementById('refreshAI').addEventListener('click',runAnalysis);
  const doSend=()=>{
    const inp=document.getElementById('aiTabInp'); const msg=inp.value.trim(); if(!msg) return;
    appendTabMsg(msg,'user'); inp.value='';
    sendAI(msg,document.getElementById('aiTabMsgs'));
  };
  document.getElementById('aiTabSend').addEventListener('click',doSend);
  document.getElementById('aiTabInp').addEventListener('keydown',e=>{if(e.key==='Enter')doSend();});
  document.querySelectorAll('.ai-q').forEach(b=>b.addEventListener('click',()=>{document.getElementById('aiTabInp').value=b.dataset.q;doSend();}));
}

function appendTabMsg(text,role) {
  const msgs=document.getElementById('aiTabMsgs'); if(!msgs) return;
  const d=document.createElement('div'); d.className=`ai-msg ai-msg-${role==='user'?'user':'bot'}`;
  d.innerHTML=`<div class="ai-msg-bubble">${text}</div>`; msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}

function buildCtx() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const cats={};
  DATA.transactions.filter(t=>t.type==='expense').forEach(t=>{cats[t.category]=(cats[t.category]||0)+t.amount;});
  const top=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>`${k}:${v.toLocaleString()}₸`).join(', ');
  const goals=DATA.goals.map(g=>`${g.name}:${Math.round(g.saved/g.target*100)}%`).join(', ');
  return `Пользователь: ${CUR_USER.name}. Доходы: ${inc.toLocaleString()}₸, Расходы: ${exp.toLocaleString()}₸, Баланс: ${(inc-exp).toLocaleString()}₸. Топ расходы: ${top||'нет'}. Карт: ${DATA.cards.length}. Цели: ${goals||'нет'}. Депозитов: ${DATA.deposits.length}. Уровень: ${DATA.level}, XP: ${DATA.xp}.`;
}

async function aiCall(systemPrompt, userMsg, maxTokens=500) {
  const res=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:maxTokens,system:systemPrompt,messages:[{role:'user',content:userMsg}]})
  });
  const data=await res.json();
  return data.content?.[0]?.text||'';
}

async function runAnalysis() {
  const box=document.getElementById('aiAnalysisBox'); if(!box) return;
  box.innerHTML=`<div style="display:flex;gap:5px;padding:14px;background:var(--bg3);border-radius:var(--r);"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div><span style="font-size:12px;color:var(--tx3);margin-left:5px;">Анализирую...</span></div>`;
  const sys=`Ты финансовый ИИ-аналитик приложения My Way. Анализируй финансы и давай персонализированные инсайты. Язык: ${LANG==='kz'?'казахский':LANG==='en'?'английский':'русский'}. Используй эмодзи. Будь конкретным. Формат: 3-4 коротких абзаца.`;
  try {
    const text=await aiCall(sys,`Сделай анализ:\n${buildCtx()}`);
    box.innerHTML=`<div class="ai-insights">${text.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('')}</div>`;
  } catch(e) {
    box.innerHTML=localAnalysis();
  }
}

async function loadTips() {
  const box=document.getElementById('aiTipsBox'); if(!box) return;
  const sys=`Ты финансовый советник. Дай 4 конкретных практических совета. Каждый — 1 предложение с эмодзи. Язык: ${LANG==='kz'?'казахский':LANG==='en'?'английский':'русский'}.`;
  try {
    const text=await aiCall(sys,`Советы для: ${buildCtx()}`);
    const tips=text.split('\n').filter(l=>l.trim()).slice(0,5);
    box.innerHTML=tips.map(t=>`<div style="padding:8px 10px;border-radius:var(--r);background:var(--bg3);border:1px solid var(--brd);margin-bottom:5px;font-size:12px;line-height:1.5;">${t}</div>`).join('');
  } catch(e) {
    box.innerHTML=localTips().map(t=>`<div style="padding:8px 10px;border-radius:var(--r);background:var(--bg3);border:1px solid var(--brd);margin-bottom:5px;font-size:12px;line-height:1.5;">${t}</div>`).join('');
  }
}

function localAnalysis() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const save=inc>0?Math.round((inc-exp)/inc*100):0;
  return `<div class="ai-insights">
    <p>💡 <strong>Норма сбережений:</strong> ${save}%. ${save>=20?'Отлично — откладываете достаточно!':save>=0?'Стремитесь к 20%.':'Расходы превышают доходы!'}</p>
    <p>📊 <strong>Транзакций:</strong> ${DATA.transactions.length}. Продолжайте вести учёт — это ключ к финансовому порядку.</p>
    <p>🎯 <strong>Цели:</strong> ${DATA.goals.length>0?`${DATA.goals.length} активных целей. Пополняйте регулярно!`:'Создайте первую финансовую цель!'}</p>
  </div>`;
}

function localTips() {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  return [
    `💰 Откладывайте 20% от каждого дохода сразу — правило «сначала заплати себе»`,
    `📱 Проверьте подписки — найдите ненужные и отмените их`,
    `🎯 ${DATA.goals[0]?`До цели «${DATA.goals[0].name}» осталось ${fmtAmt(DATA.goals[0].target-DATA.goals[0].saved)}`:'-— создайте финансовую цель прямо сейчас!'}`,
    `📊 Ваш баланс: ${fmtAmt(inc-exp)}. ${inc>exp?'Вы в плюсе — молодец!':'Сократите расходы на 10%'}`,
  ];
}

// ── AI CHAT BUBBLE ─────────────────────
let _hist=[];

function initAIChat() {
  const win=document.getElementById('aiWindow');
  const tog=document.getElementById('aiToggle');
  const cls=document.getElementById('aiClose');
  const send=document.getElementById('aiSend');
  const inp=document.getElementById('aiInput');
  const msgs=document.getElementById('aiMessages');
  if(!tog) return;
  if(win) win.style.display='none';
  document.getElementById('aiChat').classList.remove('hidden');

  // Update greeting in chat lang
  if(msgs&&msgs.children.length===0){
    const d=document.createElement('div'); d.className='ai-msg ai-msg-bot';
    d.innerHTML=`<div class="ai-msg-bubble">${t('aiGreet')}</div>`; msgs.appendChild(d);
  }
  if(document.getElementById('aiWinName')) document.getElementById('aiWinName').textContent=t('aiTitle');
  if(inp) inp.placeholder=t('aiPh');

  tog.addEventListener('click',()=>{
    if(!win) return;
    const show=win.style.display!=='flex';
    win.style.display=show?'flex':'none';
    if(show)win.style.flexDirection='column';
  });
  if(cls) cls.addEventListener('click',()=>{if(win)win.style.display='none';});

  const doSend=()=>{
    const msg=inp.value.trim(); if(!msg) return; inp.value='';
    const d=document.createElement('div'); d.className='ai-msg ai-msg-user';
    d.innerHTML=`<div class="ai-msg-bubble">${msg}</div>`; msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
    sendAI(msg,msgs);
  };
  send.addEventListener('click',doSend);
  inp.addEventListener('keydown',e=>{if(e.key==='Enter')doSend();});
}

async function sendAI(userMsg, container) {
  const typing=document.createElement('div'); typing.className='ai-msg ai-msg-bot';
  typing.innerHTML=`<div class="ai-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div>`;
  container.appendChild(typing); container.scrollTop=container.scrollHeight;
  _hist.push({role:'user',content:userMsg});
  const sys=`Ты финансовый ИИ-советник My Way. Помогай пользователю ${CUR_USER.name} управлять финансами. Контекст: ${buildCtx()}. Отвечай на ${LANG==='kz'?'казахском':LANG==='en'?'английском':'русском'}, 2-4 предложения, используй эмодзи.`;
  try {
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:350,system:sys,messages:_hist.slice(-8)})
    });
    const data=await res.json();
    const reply=data.content?.[0]?.text||localAIReply(userMsg);
    _hist.push({role:'assistant',content:reply});
    typing.remove();
    const d=document.createElement('div'); d.className='ai-msg ai-msg-bot';
    d.innerHTML=`<div class="ai-msg-bubble">${reply}</div>`; container.appendChild(d); container.scrollTop=container.scrollHeight;
  } catch(e) {
    const reply=localAIReply(userMsg); _hist.push({role:'assistant',content:reply});
    typing.remove();
    const d=document.createElement('div'); d.className='ai-msg ai-msg-bot';
    d.innerHTML=`<div class="ai-msg-bubble">${reply}</div>`; container.appendChild(d); container.scrollTop=container.scrollHeight;
  }
}

function localAIReply(msg) {
  const inc=DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const low=msg.toLowerCase();
  if(low.includes('накоп')||low.includes('сберег')||low.includes('save'))
    return `💰 Откладывайте ${Math.round(inc*0.2).toLocaleString()}₸ (20% дохода) сразу после зарплаты. Текущий баланс: ${fmtAmt(inc-exp)}.`;
  if(low.includes('расход')||low.includes('трат')||low.includes('expens'))
    return `📊 Расходы: ${fmtAmt(exp)}. Найдите статьи где можно сократить на 10-15%. Проверьте подписки!`;
  if(low.includes('цел')||low.includes('goal'))
    return DATA.goals[0]?`🎯 Цель «${DATA.goals[0].name}»: ${Math.round(DATA.goals[0].saved/DATA.goals[0].target*100)}% накоплено. Откладывайте регулярно!`:`🎯 Создайте финансовую цель в разделе «Цели» — это мотивирует!`;
  if(low.includes('инвест')||low.includes('invest'))
    return `📈 Начните с подушки безопасности (3-6 зарплат), затем рассмотрите ETF и депозиты. Диверсифицируйте!`;
  return `💡 Баланс: ${fmtAmt(inc-exp)}. Норма сбережений: ${inc>0?Math.round((inc-exp)/inc*100):0}%. Спрашивайте о накоплениях, расходах или целях!`;
}

// ── WISDOM TIPS TAB ────────────────────
function renderTipsTab() {
  const wisdomTips=[
    {person:'Warren Buffett', emoji:'🧓', title:'Правило №1', tip:'Никогда не теряй деньги. Правило №2: не забывай правило №1.', detail:'Инвестируйте только в то, что понимаете. Сохранение капитала важнее его роста.'},
    {person:'Robert Kiyosaki', emoji:'📚', title:'Активы vs Пассивы', tip:'Богатые покупают активы. Бедные и средний класс покупают пассивы, думая, что это активы.', detail:'Актив приносит деньги в ваш карман. Пассив — забирает. Стройте пассивный доход.'},
    {person:'Dave Ramsey', emoji:'💰', title:'Снежный ком долгов', tip:'Платите сначала самый маленький долг, потом направьте эту оплату на следующий.', detail:'Психологическая победа над малым долгом даёт энергию для борьбы с большим.'},
    {person:'Tony Robbins', emoji:'🚀', title:'Сначала заплати себе', tip:'Автоматически откладывайте 10-15% каждой зарплаты до того, как потратите что-либо.', detail:'Сделайте сбережения автоматическими — так проще придерживаться плана.'},
    {person:'Benjamin Graham', emoji:'📈', title:'Margin of Safety', tip:'Покупайте активы только тогда, когда их цена значительно ниже реальной стоимости.', detail:'Всегда оставляйте запас прочности в инвестициях и личном бюджете.'},
    {person:'Nassim Taleb', emoji:'🦢', title:'Чёрный лебедь', tip:'Создайте финансовую подушку для непредвиденных событий — они происходят чаще, чем кажется.', detail:'3-6 месячных зарплат в резерве — это не роскошь, это необходимость.'},
    {person:'Charlie Munger', emoji:'🧠', title:'Сила привычки', tip:'Экономия — это не о деньгах. Это о контроле над своей жизнью и возможностях.', detail:'Небольшие ежедневные привычки в управлении финансами дают огромный результат через годы.'},
    {person:'Peter Lynch', emoji:'🔍', title:'Инвестируй в то, что знаешь', tip:'Лучшие инвестиции часто находятся рядом с вами — в товарах и услугах, которые вы используете.', detail:'Наблюдение за потребительскими трендами может дать преимущество перед профессионалами.'},
  ];
  document.getElementById('content').innerHTML=`
    <div style="margin-bottom:16px;">
      <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;margin-bottom:4px;">${t('tipsTitle')}</div>
      <div style="font-size:12px;color:var(--tx3);">${t('tipsDesc')}</div>
    </div>
    <div class="grid2">
      ${wisdomTips.map(w=>`
        <div class="card" style="border-left:3px solid var(--acc);cursor:default;transition:transform .15s;" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform='translateY(0)'">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="font-size:28px;">${w.emoji}</span>
            <div>
              <div style="font-size:13px;font-weight:700;">${w.title}</div>
              <div style="font-size:10px;color:var(--acc2);">${w.person}</div>
            </div>
          </div>
          <div style="font-size:12px;font-style:italic;color:var(--tx);line-height:1.55;margin-bottom:8px;padding:8px 10px;background:var(--bg3);border-radius:var(--r);">"${w.tip}"</div>
          <div style="font-size:11px;color:var(--tx2);line-height:1.55;">${w.detail}</div>
        </div>`).join('')}
    </div>`;
}

// ── IMPORT TAB ─────────────────────────
function renderImportTab() {
  // Import is free during 30-day trial — no paywall
  document.getElementById('content').innerHTML=`
    <div class="card" style="margin-bottom:14px;">
      <div class="clbl"><i class="fas fa-file-import"></i> ${t('importTitle')}</div>
      <div style="margin-top:12px;font-size:12px;color:var(--tx2);margin-bottom:14px;">${t('importDesc')}<br><br>
        <strong>Поддерживаемые форматы:</strong> CSV (Kaspi Bank, Halyk Bank, любой банк)<br>
        <strong>Колонки:</strong> дата, описание, сумма (расход отрицательный)
      </div>
      <div style="border:2px dashed var(--brd2);border-radius:var(--r);padding:30px;text-align:center;cursor:pointer;transition:border-color .2s;" id="dropZone">
        <i class="fas fa-cloud-upload-alt" style="font-size:36px;color:var(--acc2);margin-bottom:10px;display:block;"></i>
        <div style="font-size:14px;font-weight:600;margin-bottom:4px;">${t('importBtn')}</div>
        <div style="font-size:11px;color:var(--tx3);">Перетащите CSV сюда или нажмите для выбора</div>
        <input type="file" id="importFile" accept=".csv,.txt" style="display:none;"/>
      </div>
      <div id="importResult" style="margin-top:12px;"></div>
    </div>
    <div class="card" id="importPreview" style="display:none;">
      <div class="clbl"><i class="fas fa-list-check"></i> Предпросмотр импорта</div>
      <div id="previewList" style="margin-top:10px;"></div>
      <button class="btn btn-success wf" id="confirmImport" style="margin-top:10px;"><i class="fas fa-check"></i> Подтвердить импорт</button>
    </div>`;

  let importedTxs=[];
  const drop=document.getElementById('dropZone');
  const fileInp=document.getElementById('importFile');
  drop.addEventListener('click',()=>fileInp.click());
  drop.addEventListener('dragover',e=>{e.preventDefault();drop.style.borderColor='var(--acc)';});
  drop.addEventListener('dragleave',()=>{drop.style.borderColor='var(--brd2)';});
  drop.addEventListener('drop',e=>{e.preventDefault();drop.style.borderColor='var(--brd2)';if(e.dataTransfer.files[0])parseCSV(e.dataTransfer.files[0]);});
  fileInp.addEventListener('change',()=>{if(fileInp.files[0])parseCSV(fileInp.files[0]);});

  function parseCSV(file) {
    const res=document.getElementById('importResult');
    res.innerHTML=`<div style="color:var(--tx3);font-size:12px;">${t('importProcess')}</div>`;
    const reader=new FileReader();
    reader.onload=e=>{
      const text=e.target.result;
      const lines=text.split('\n').filter(l=>l.trim());
      importedTxs=[];
      for(let i=1;i<lines.length;i++){
        const cols=lines[i].split(/[;,\t]/);
        if(cols.length<2)continue;
        let desc='',amount=0,date=Date.now();
        // Try to detect date, desc, amount columns
        for(let c=0;c<cols.length;c++){
          const v=cols[c].replace(/"/g,'').trim();
          const num=parseFloat(v.replace(/\s/g,'').replace(',','.'));
          if(!isNaN(num)&&Math.abs(num)>0&&amount===0){amount=Math.abs(num);}
          else if(v&&desc.length===0&&isNaN(parseFloat(v))){desc=v;}
        }
        if(amount>0&&desc){
          importedTxs.push({text:desc,amount,type:amount>0?'expense':'income',category:'Прочее',date,id:DATA.nextId++,cardId:null});
        }
      }
      if(importedTxs.length===0){res.innerHTML=`<div style="color:var(--red);font-size:12px;">${t('importError')}</div>`;return;}
      res.innerHTML=`<div style="color:var(--green);font-size:12px;">✅ ${t('importSuccess')} ${importedTxs.length}</div>`;
      const prev=document.getElementById('importPreview'); prev.style.display='block';
      const plist=document.getElementById('previewList');
      plist.innerHTML=importedTxs.slice(0,10).map(tx=>`<div class="tx-item">
        <div class="tx-l"><div class="tx-ic expense"><i class="fas fa-arrow-up"></i></div><span class="tx-txt">${tx.text}</span></div>
        <div class="tx-amt expense">-${fmtAmt(tx.amount)}</div>
      </div>`).join('');
      if(importedTxs.length>10)plist.innerHTML+=`<div style="text-align:center;padding:8px;font-size:11px;color:var(--tx3);">... и ещё ${importedTxs.length-10}</div>`;
    };
    reader.readAsText(file,'utf-8');
  }

  document.getElementById('confirmImport')?.addEventListener('click',()=>{
    DATA.transactions.push(...importedTxs);
    DATA.nextId=Math.max(DATA.nextId,...importedTxs.map(t=>t.id))+1;
    saveData(); checkAch();
    renderImportTab();
    alert(`✅ Импортировано: ${importedTxs.length} операций`);
  });
}


// ══════════════════════════════════════════════════════
// QUICK PRICE BUTTONS — editable prices
// ══════════════════════════════════════════════════════
const DEFAULT_PRICES = {
  coffee:350, lunch:1500, taxi:800, groceries:5000, salary:300000, invest:20000
};

function getQuickPrices() {
  if(!DATA.quickPrices) DATA.quickPrices = {...DEFAULT_PRICES};
  return DATA.quickPrices;
}

function renderQuickButtons() {
  const p = getQuickPrices();
  const items = [
    {key:'coffee',   emoji:'☕', label:'Кофе',    type:'expense'},
    {key:'lunch',    emoji:'🍽', label:'Обед',    type:'expense'},
    {key:'taxi',     emoji:'🚗', label:'Такси',   type:'expense'},
    {key:'groceries',emoji:'🛒', label:'Продукты',type:'expense'},
    {key:'salary',   emoji:'💰', label:'ЗП',      type:'income'},
    {key:'invest',   emoji:'📈', label:'Инвест',  type:'expense'},
  ];
  return items.map(it=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <button class="btn btn-outline btn-sm template" data-key="${it.key}" data-type="${it.type}"
        style="padding:6px 10px;white-space:nowrap;">
        ${it.emoji} ${it.label}
        <span class="qprice" data-key="${it.key}" style="font-size:10px;color:var(--acc2);margin-left:3px;">${p[it.key].toLocaleString()}₸</span>
      </button>
      <button class="qedit-btn" data-key="${it.key}" data-label="${it.label}" title="Изменить цену"
        style="background:transparent;border:none;font-size:9px;color:var(--tx3);cursor:pointer;padding:0;">
        <i class="fas fa-pen" style="font-size:8px;"></i> изменить
      </button>
    </div>`).join('');
}

function initQuickButtons(container) {
  if(!container) return;
  // Template click — add transaction with saved price
  container.querySelectorAll('.template').forEach(b=>{
    b.addEventListener('click',()=>{
      const key = b.dataset.key;
      const type = b.dataset.type;
      const p = getQuickPrices();
      const label = b.querySelector('span') ? b.textContent.replace(b.querySelector('.qprice').textContent,'').trim() : key;
      const inp = document.getElementById('txInp');
      if(inp){ inp.value = `${label} ${p[key]}`; document.getElementById('txAddBtn').click(); }
      else addTx(`${label} ${p[key]}`);
    });
  });
  // Edit price click
  container.querySelectorAll('.qedit-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      const key = b.dataset.key;
      const p = getQuickPrices();
      const newVal = prompt(`Новая цена для "${b.dataset.label}" (₸):`, p[key]);
      if(newVal && parseInt(newVal) > 0){
        DATA.quickPrices[key] = parseInt(newVal);
        saveData();
        // Re-render quick buttons
        const qb = document.getElementById('quickBtns');
        if(qb) qb.innerHTML = renderQuickButtons();
        initQuickButtons(qb);
      }
    });
  });
}

// ══════════════════════════════════════════════════════
// EDIT TRANSACTION MODAL
// ══════════════════════════════════════════════════════
function showEditTxModal(tx, onSave) {
  document.querySelector('.edit-tx-modal')?.remove();
  const m = document.createElement('div');
  m.className = 'modal-ov edit-tx-modal';
  const cats = ['Еда','Кафе/Доставка','Транспорт','Учёба','Здоровье','Связь','Одежда',
    'Красота','Развлечения','Жильё','Инвестиции','Подарки','Большая покупка','Путешествие',
    'Стипендия','Зарплата','Перевод','Прочее'];
  m.innerHTML = `<div class="modal-box" style="max-width:380px;">
    <div class="modal-hdr">
      <h3><i class="fas fa-pen"></i> Изменить операцию</h3>
      <button class="modal-close" onclick="this.closest('.edit-tx-modal').remove()">✕</button>
    </div>
    <div class="fgrp"><label>Описание</label>
      <input class="finput wf" type="text" id="etDesc" value="${tx.text}"/>
    </div>
    <div class="fgrp"><label>Сумма (₸)</label>
      <input class="finput wf" type="number" id="etAmt" value="${tx.amount}" min="1"/>
    </div>
    <div class="fgrp"><label>Тип</label>
      <div style="display:flex;gap:7px;">
        <button class="btn ${tx.type==='expense'?'btn-danger':'btn-outline'} btn-sm et-type" data-t="expense">📤 Расход</button>
        <button class="btn ${tx.type==='income'?'btn-success':'btn-outline'} btn-sm et-type" data-t="income">📥 Доход</button>
      </div>
    </div>
    <div class="fgrp"><label>Категория</label>
      <select class="finput wf" id="etCat">
        ${cats.map(c=>`<option value="${c}" ${c===tx.category?'selected':''}>${catEmoji(c)} ${c}</option>`).join('')}
      </select>
    </div>
    <div style="display:flex;gap:8px;margin-top:4px;">
      <button class="btn btn-primary" style="flex:1;justify-content:center;" id="etSave"><i class="fas fa-check"></i> Сохранить</button>
      <button class="btn btn-ghost" style="flex:1;justify-content:center;" onclick="this.closest('.edit-tx-modal').remove()">Отмена</button>
    </div>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener('click',e=>{ if(e.target===m) m.remove(); });

  let selType = tx.type;
  m.querySelectorAll('.et-type').forEach(b=>{
    b.addEventListener('click',()=>{
      selType = b.dataset.t;
      m.querySelectorAll('.et-type').forEach(x=>{
        x.className = x.dataset.t==='expense'
          ? `btn ${selType==='expense'?'btn-danger':'btn-outline'} btn-sm et-type`
          : `btn ${selType==='income'?'btn-success':'btn-outline'} btn-sm et-type`;
      });
    });
  });

  document.getElementById('etSave').addEventListener('click',()=>{
    const desc = document.getElementById('etDesc').value.trim();
    const amt  = parseInt(document.getElementById('etAmt').value);
    const cat  = document.getElementById('etCat').value;
    if(!desc || amt<=0){ alert('Заполните все поля'); return; }
    tx.text = desc; tx.amount = amt; tx.type = selType; tx.category = cat;
    saveData(); m.remove(); if(onSave) onSave();
  });
}

// ══════════════════════════════════════════════════════
// CREDITS / LOANS / MORTGAGE TAB
// ══════════════════════════════════════════════════════
function addCredit(name, totalAmount, monthlyPayment, rate, termMonths, type) {
  if(!name||totalAmount<=0||monthlyPayment<=0){alert('Заполните все поля');return false;}
  if(!DATA.credits) DATA.credits=[];
  DATA.credits.push({
    id:Date.now(), name, totalAmount, monthlyPayment,
    rate, termMonths, type, startDate:Date.now(),
    paid:0, active:true
  });
  saveData(); return true;
}

function deleteCredit(id) {
  if(!confirm('Удалить кредит?')) return;
  DATA.credits = (DATA.credits||[]).filter(c=>c.id!==id);
  saveData(); renderCreditsTab();
}

function makePayment(id) {
  const c = (DATA.credits||[]).find(x=>x.id===id); if(!c) return;
  c.paid += c.monthlyPayment;
  if(c.paid >= c.totalAmount){ c.paid = c.totalAmount; c.active = false; }
  DATA.transactions.push({
    id:DATA.nextId++, text:`Платёж: ${c.name}`,
    amount:c.monthlyPayment, type:'expense',
    category:'Кредит', cardId:null, date:Date.now()
  });
  saveData(); renderCreditsTab(); renderHeader();
}

function renderCreditsTab() {
  if(!DATA.credits) DATA.credits=[];
  const totalDebt = DATA.credits.filter(c=>c.active).reduce((s,c)=>s+(c.totalAmount-c.paid),0);
  const totalMonthly = DATA.credits.filter(c=>c.active).reduce((s,c)=>s+c.monthlyPayment,0);

  document.getElementById('content').innerHTML=`
    <div class="grid2" style="margin-bottom:14px;">
      <div class="card">
        <div class="clbl"><i class="fas fa-plus-circle"></i> Добавить кредит / ипотеку</div>
        <div style="margin-top:10px;">
          <div class="fgrp"><label>Название</label>
            <input class="finput wf" type="text" id="crName" placeholder="Ипотека Kaspi / Авто-кредит..."/>
          </div>
          <div class="fgrp"><label>Тип</label>
            <select class="finput wf" id="crType">
              <option value="mortgage">🏠 Ипотека</option>
              <option value="auto">🚗 Авто-кредит</option>
              <option value="consumer">💳 Потребительский</option>
              <option value="other">📋 Другой</option>
            </select>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div class="fgrp"><label>Общая сумма (₸)</label>
              <input class="finput" type="number" id="crTotal" placeholder="5000000"/>
            </div>
            <div class="fgrp"><label>Уже оплачено (₸)</label>
              <input class="finput" type="number" id="crPaid" placeholder="0"/>
            </div>
            <div class="fgrp"><label>Платёж в месяц (₸)</label>
              <input class="finput" type="number" id="crMonthly" placeholder="85000"/>
            </div>
            <div class="fgrp"><label>Ставка % год.</label>
              <input class="finput" type="number" id="crRate" placeholder="18" step="0.1"/>
            </div>
          </div>
          <button class="btn btn-primary wf" id="crAddBtn" style="margin-top:4px;">
            <i class="fas fa-plus"></i> Добавить
          </button>
        </div>
      </div>
      <div class="card">
        <div class="clbl"><i class="fas fa-chart-pie"></i> Сводка долгов</div>
        <div style="margin-top:12px;">
          <div style="text-align:center;margin-bottom:14px;">
            <div style="font-size:11px;color:var(--tx3);margin-bottom:4px;">Общий долг</div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:30px;font-weight:800;color:var(--red);">${fmtAmt(totalDebt)}</div>
          </div>
          <div style="display:flex;justify-content:space-between;padding:9px 12px;background:var(--bg3);border-radius:var(--r);margin-bottom:7px;">
            <span style="font-size:12px;color:var(--tx3);">Активных кредитов</span>
            <strong>${DATA.credits.filter(c=>c.active).length}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;padding:9px 12px;background:var(--bg3);border-radius:var(--r);margin-bottom:7px;">
            <span style="font-size:12px;color:var(--tx3);">Платёж в месяц</span>
            <strong style="color:var(--red);">${fmtAmt(totalMonthly)}</strong>
          </div>
          ${DATA.credits.filter(c=>c.active).length>0?`<div style="margin-top:10px;">
            ${DATA.credits.filter(c=>c.active).map(c=>{
              const pct = Math.min(100,Math.round(c.paid/c.totalAmount*100));
              return `<div style="margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px;">
                  <span>${c.name}</span><span style="color:var(--tx3);">${pct}%</span>
                </div>
                <div style="height:4px;background:var(--bg4);border-radius:4px;overflow:hidden;">
                  <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--acc),var(--cyan));border-radius:4px;"></div>
                </div>
              </div>`;
            }).join('')}
          </div>`:''}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-hdr">
        <div class="clbl"><i class="fas fa-list"></i> Мои кредиты (${DATA.credits.length})</div>
      </div>
      <div id="creditsList"></div>
    </div>`;

  document.getElementById('crAddBtn').addEventListener('click',()=>{
    const name = document.getElementById('crName').value.trim();
    const type = document.getElementById('crType').value;
    const total = parseInt(document.getElementById('crTotal').value)||0;
    const paid  = parseInt(document.getElementById('crPaid').value)||0;
    const monthly = parseInt(document.getElementById('crMonthly').value)||0;
    const rate  = parseFloat(document.getElementById('crRate').value)||0;
    if(addCredit(name,total,monthly,rate,0,type)){
      // Set already paid amount
      const c = DATA.credits[DATA.credits.length-1]; if(c) c.paid=paid;
      saveData(); renderCreditsTab();
    }
  });

  renderCreditsList();
}

function renderCreditsList() {
  const list = document.getElementById('creditsList'); if(!list) return;
  if(!DATA.credits||!DATA.credits.length){
    list.innerHTML=`<div style="text-align:center;padding:28px;color:var(--tx3);">
      <i class="fas fa-hand-holding-usd" style="font-size:36px;opacity:.2;display:block;margin-bottom:10px;"></i>
      Нет кредитов — вы свободны от долгов! 🎉
    </div>`;
    return;
  }
  const typeIcons = {mortgage:'🏠',auto:'🚗',consumer:'💳',other:'📋'};
  list.innerHTML = DATA.credits.map(c=>{
    const pct = Math.min(100,Math.round(c.paid/c.totalAmount*100));
    const remaining = Math.max(0,c.totalAmount-c.paid);
    const monthsLeft = c.monthlyPayment>0?Math.ceil(remaining/c.monthlyPayment):0;
    return `<div style="padding:14px;background:var(--bg3);border:1px solid var(--brd);border-radius:var(--r);margin-bottom:9px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">
        <div>
          <div style="font-size:14px;font-weight:700;">${typeIcons[c.type]||'📋'} ${c.name}</div>
          <div style="font-size:11px;color:var(--tx3);margin-top:2px;">${c.rate>0?c.rate+'% год. · ':''}${c.active?'Активный':'✅ Закрыт'}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:15px;font-weight:800;color:var(--red);">${fmtAmt(remaining)}</div>
          <div style="font-size:10px;color:var(--tx3);">осталось долга</div>
        </div>
      </div>
      <div style="height:5px;background:var(--bg4);border-radius:4px;margin-bottom:10px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--green),var(--cyan));border-radius:4px;transition:width .5s;"></div>
      </div>
      <div style="display:flex;gap:10px;font-size:11px;margin-bottom:10px;flex-wrap:wrap;">
        <span style="color:var(--tx3);">Оплачено: <strong style="color:var(--green);">${fmtAmt(c.paid)}</strong></span>
        <span style="color:var(--tx3);">Всего: <strong>${fmtAmt(c.totalAmount)}</strong></span>
        <span style="color:var(--tx3);">Платёж: <strong style="color:var(--red);">${fmtAmt(c.monthlyPayment)}/мес</strong></span>
        ${monthsLeft>0?`<span style="color:var(--tx3);">~${monthsLeft} мес. до закрытия</span>`:''}
      </div>
      <div style="display:flex;gap:7px;">
        ${c.active?`<button class="btn btn-success btn-sm" onclick="makePayment(${c.id})">
          <i class="fas fa-coins"></i> Внести платёж ${fmtAmt(c.monthlyPayment)}
        </button>`:'<span style="color:var(--green);font-size:12px;font-weight:700;">✅ Полностью выплачен!</span>'}
        <button class="btn btn-outline btn-sm" onclick="showEditCreditModal(${c.id})">
          <i class="fas fa-pen"></i>
        </button>
        <button class="btn btn-danger btn-sm" onclick="deleteCredit(${c.id})">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>`;
  }).join('');
}

function showEditCreditModal(id) {
  const c = (DATA.credits||[]).find(x=>x.id===id); if(!c) return;
  document.querySelector('.edit-cr-modal')?.remove();
  const m = document.createElement('div'); m.className='modal-ov edit-cr-modal';
  m.innerHTML=`<div class="modal-box" style="max-width:360px;">
    <div class="modal-hdr">
      <h3><i class="fas fa-pen"></i> Изменить кредит</h3>
      <button class="modal-close" onclick="this.closest('.edit-cr-modal').remove()">✕</button>
    </div>
    <div class="fgrp"><label>Название</label><input class="finput wf" id="ecName" value="${c.name}"/></div>
    <div class="fgrp"><label>Общая сумма (₸)</label><input class="finput wf" type="number" id="ecTotal" value="${c.totalAmount}"/></div>
    <div class="fgrp"><label>Уже оплачено (₸)</label><input class="finput wf" type="number" id="ecPaid" value="${c.paid}"/></div>
    <div class="fgrp"><label>Платёж в месяц (₸)</label><input class="finput wf" type="number" id="ecMonthly" value="${c.monthlyPayment}"/></div>
    <div class="fgrp"><label>Ставка % год.</label><input class="finput wf" type="number" id="ecRate" value="${c.rate}" step="0.1"/></div>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-primary" style="flex:1;justify-content:center;" id="ecSave"><i class="fas fa-check"></i> Сохранить</button>
      <button class="btn btn-ghost" style="flex:1;justify-content:center;" onclick="this.closest('.edit-cr-modal').remove()">Отмена</button>
    </div>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener('click',e=>{if(e.target===m)m.remove();});
  document.getElementById('ecSave').addEventListener('click',()=>{
    c.name = document.getElementById('ecName').value.trim()||c.name;
    c.totalAmount = parseInt(document.getElementById('ecTotal').value)||c.totalAmount;
    c.paid = parseInt(document.getElementById('ecPaid').value)||0;
    c.monthlyPayment = parseInt(document.getElementById('ecMonthly').value)||c.monthlyPayment;
    c.rate = parseFloat(document.getElementById('ecRate').value)||c.rate;
    c.active = c.paid < c.totalAmount;
    saveData(); m.remove(); renderCreditsTab();
  });
}

// ══════════════════════════════════════════════════════
// PATCH renderTxTab to init quick buttons
// ══════════════════════════════════════════════════════
const _origRenderTxTab = renderTxTab;


// ── BOOT ───────────────────────────────
initAuth();