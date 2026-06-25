cd /home/claude/project2/143-main && python3 -c "
content = open('app.js').read()
old = '''    const activeTab = document.querySelector('.nav-btn.active');
    renderActiveTab(activeTab ? activeTab.dataset.tab : 'dashboard');
    renderHeader(); return true;'''
new = '''    renderActiveTab(_activeTab);
    renderHeader();
    renderSidebarUser();
    return true;'''
open('app.js','w').write(content.replace(old, new, 1))
print('done')
"