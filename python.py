python3 << 'PY'
content = open('/home/claude/project2/143-main/app.js').read()

# Fix renderAll to also init AI chat and show bubble
old = """function renderAll() {
    renderNav();
    renderSidebarUser();
    renderHeader();
    renderDashboard();
    renderFooter();
    initMobileToggle();
}"""

new = """function renderAll() {
    renderNav();
    renderSidebarUser();
    renderHeader();
    renderDashboard();
    renderFooter();
    initMobileToggle();
    initAiChat();
    document.getElementById('aiChatBubble').classList.remove('hidden');
}"""
content = content.replace(old, new, 1)

# Fix renderSidebarUser to use correct CSS class names (su-avatar, su-info, su-name, su-rank)
old2 = """function renderSidebarUser() {
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
}"""

new2 = """function renderSidebarUser() {
    const el = document.getElementById('sidebarUser');
    if (!el) return;
    el.innerHTML = `
        <div class="su-avatar">${CURRENT_USER.avatar}</div>
        <div class="su-info">
            <div class="su-name">${CURRENT_USER.name}</div>
            <div class="su-rank">🏅 ${DATA.rank} · Lv.${DATA.level}</div>
        </div>
        <i class="fas fa-chevron-right" style="font-size:11px;color:var(--text3);"></i>
    `;
    el.onclick = showProfileModal;
}"""
content = content.replace(old2, new2, 1)

# Fix topbar - use correct CSS var names (--accent2 not --accent-2, --text3 not --text-3)
content = content.replace("color:var(--accent-2);margin-right:8px;font-size:15px;", "color:var(--accent2);margin-right:8px;font-size:15px;")

open('/home/claude/project2/143-main/app.js', 'w').write(content)
print("done")
PY