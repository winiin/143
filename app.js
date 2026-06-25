const TAB_LABELS = {
    dashboard:     { icon:'fa-chart-pie',   label:'Дашборд' },
    transactions:  { icon:'fa-list-ul',     label:'Транзакции' },
    cards:         { icon:'fa-credit-card', label:'Карты' },
    stats:         { icon:'fa-chart-bar',   label:'Статистика' },
    goals:         { icon:'fa-bullseye',    label:'Цели' },
    gamification:  { icon:'fa-gamepad',     label:'Игра' },
};

let _activeTab = 'dashboard';

function renderAll() {
    renderNav();
    renderSidebarUser();
    renderHeader();
    renderDashboard();
    renderFooter();
    initMobileToggle();
}

// ========== SIDEBAR NAV ==========
function renderNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = Object.entries(TAB_LABELS).map(([key, {icon, label}]) => `
        <button class="nav-btn ${key === _activeTab ? 'active' : ''}" data-tab="${key}">
            <i class="fas ${icon}"></i> ${label}
        </button>`).join('');

    nav.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            nav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            _activeTab = this.dataset.tab;
            renderHeader();
            renderActiveTab(_activeTab);
            // close sidebar on mobile
            document.getElementById('sidebar').classList.remove('open');
        });
    });
}

function renderSidebarUser() {
    const el = document.getElementById('sidebarUser');
    if (!el) return;
    el.innerHTML = `
        <div class="user-avatar" style="margin:0;">${CURRENT_USER.avatar}</div>
        <div class="user-info">
            <div class="user-name">${CURRENT_USER.name}</div>
            <div class="user-rank">🏅 ${DATA.rank} · Lv.${DATA.level}</div>
        </div>
        <i class="fas fa-chevron-right" style="font-size:11px;color:var(--text-3);"></i>
    `;
    el.onclick = showProfileModal;
}

// ========== TOPBAR ==========
function renderHeader() {
    const ti = DATA.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const te = DATA.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const health = Math.min(100, Math.round(40 + ((ti-te)/10000) + (DATA.xp/5)));
    const curOpts = Object.entries(CURRENCIES).map(([k,v])=>
        `<option value="${k}" ${k===CURRENT_CURRENCY?'selected':''}>${v.flag} ${k}</option>`).join('');
    const tab = TAB_LABELS[_activeTab] || TAB_LABELS.dashboard;

    document.getElementById('header').innerHTML = `
        <div class="topbar-left">
            <button class="menu-toggle" id="menuToggle"><i class="fas fa-bars"></i></button>
            <div>
                <div class="topbar-title"><i class="fas ${tab.icon}" style="color:var(--accent-2);margin-right:8px;font-size:15px;"></i>${tab.label}</div>
                <div class="topbar-sub">My Way · ${new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'})}</div>
            </div>
        </div>
        <div class="topbar-right">
            <select class="currency-select" id="currencySelect">${curOpts}</select>
            <span class="badge badge-green"><i class="fas fa-heartbeat"></i> ${health}%</span>
            <span class="badge badge-gold"><i class="fas fa-star"></i> Lv.${DATA.level}</span>
            <button class="theme-btn" id="themeToggle"><i class="fas fa-${isDark?'sun':'moon'}"></i></button>
        </div>
    `;
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('currencySelect').addEventListener('change', function() {
        CURRENT_CURRENCY = this.value;
        localStorage.setItem('myway_currency_' + CURRENT_USER.email, CURRENT_CURRENCY);
        renderActiveTab(_activeTab);
        renderHeader();
    });
    const mt = document.getElementById('menuToggle');
    if (mt) mt.addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
}

function initMobileToggle() {
    document.addEventListener('click', e => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) && !e.target.closest('#menuToggle')) {
            sidebar.classList.remove('open');
        }
    });
}