python3 << 'PY'
with open('/home/claude/app_clean.js','r',encoding='utf-8') as f:
    c = f.read()

# FIX 1: isPremium - make it check real premium only, not block anything
old1 = '''function isPremium() {
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
}'''
new1 = '''function isPremium() { return false; }

function isTrialActive() {
  // 30 дней с момента РЕГИСТРАЦИИ. При входе/выходе таймер не сбрасывается.
  if(!DATA) return true;
  const start = DATA.trialStart; // устанавливается один раз при регистрации
  if(!start) return true;
  return (Date.now() - start) / 864e5 < 30;
}

function trialDaysLeft() {
  if(!DATA) return 30;
  const start = DATA.trialStart;
  if(!start) return 30;
  return Math.max(0, Math.ceil(30 - (Date.now() - start) / 864e5));
}'''

if old1 in c:
    c = c.replace(old1, new1)
    print("✅ FIX1: trial functions")
else:
    print("❌ FIX1 not found")

# FIX 2: Remove paywall gate in renderActiveTab
old2 = '''  // Show paywall for premium features when trial expired
  const premiumTabs=['ai','stats','credits'];
  if(premiumTabs.includes(tab)&&!isTrialActive()){
    showPaywall();
    // Still show locked version
  }'''
new2 = '  // All features free during 30-day trial from registration date'
if old2 in c:
    c = c.replace(old2, new2)
    print("✅ FIX2: renderActiveTab gate removed")
else:
    print("❌ FIX2 not found")

# FIX 3: Remove AI tab hard block
old3_start = "function renderAITab() {\n  if(!isTrialActive()){"
if old3_start in c:
    idx = c.find(old3_start)
    # find the closing brace of the if block
    block_start = c.find('{', idx + len("function renderAITab() {"))
    depth = 1
    i = block_start + 1
    while i < len(c) and depth > 0:
        if c[i] == '{': depth += 1
        elif c[i] == '}': depth -= 1
        i += 1
    # skip the "  }" and any following newline
    block_end = i
    c = c[:idx + len("function renderAITab() {\n")] + '  // AI tab always available during 30-day trial\n' + c[block_end:]
    print("✅ FIX3: AI tab gate removed")
else:
    print("❌ FIX3: AI gate not found")

# FIX 4: Remove Import tab hard block (isPremium check)
old4_start = "function renderImportTab() {\n  if(!isPremium()) {"
if old4_start in c:
    idx = c.find(old4_start)
    search_from = idx + len("function renderImportTab() {")
    bracket_start = c.find('{', search_from)
    depth = 1
    i = bracket_start + 1
    while i < len(c) and depth > 0:
        if c[i] == '{': depth += 1
        elif c[i] == '}': depth -= 1
        i += 1
    block_end = i
    c = c[:idx + len("function renderImportTab() {\n")] + '  // Import always available during 30-day trial\n' + c[block_end:]
    print("✅ FIX4: Import gate removed")
else:
    print("❌ FIX4: Import gate not found")

# FIX 5: defaultData trialStart = null (not Date.now())
old5 = '    trialStart:Date.now(), savedCard:null,'
new5 = '    trialStart:null, savedCard:null, // set ONCE at registration'
if old5 in c:
    c = c.replace(old5, new5)
    print("✅ FIX5: defaultData trialStart=null")
else:
    print("❌ FIX5 not found")

# FIX 6: Registration sets trialStart once
old6 = '  const d=defaultData(); d.lang=LANG;\n  accs[email]={name,email,password:hashPass(pass),data:d,joinedAt:Date.now()};'
new6 = '  const d=defaultData(); d.lang=LANG; d.trialStart=Date.now();\n  accs[email]={name,email,password:hashPass(pass),data:d,joinedAt:Date.now()};'
if old6 in c:
    c = c.replace(old6, new6)
    print("✅ FIX6: Registration sets trialStart")
else:
    print("❌ FIX6 not found")

# FIX 7: loadData preserves trialStart from saved data
old7 = '    if(u&&u.data) DATA=Object.assign(defaultData(),u.data);'
new7 = '''    if(u&&u.data) {
      const savedTrialStart = u.data.trialStart || u.joinedAt || null;
      DATA=Object.assign(defaultData(),u.data);
      DATA.trialStart = savedTrialStart; // NEVER reset on login
    }'''
if old7 in c:
    c = c.replace(old7, new7)
    print("✅ FIX7: loadData preserves trialStart")
else:
    print("❌ FIX7 not found")

# FIX 8: Demo account gets fresh trial and NOT expired joinedAt
old8 = "    accs['demo@myway.kz']={name:'Демо',email:'demo@myway.kz',password:demoHash,data:demoData,joinedAt:Date.now()-31*864e5};"
new8 = "    demoData.trialStart = Date.now();\n    accs['demo@myway.kz']={name:'Демо',email:'demo@myway.kz',password:demoHash,data:demoData,joinedAt:Date.now()};"
if old8 in c:
    c = c.replace(old8, new8)
    print("✅ FIX8: Demo account fixed")
else:
    print("❌ FIX8 not found")

with open('/home/claude/app_clean.js','w',encoding='utf-8') as f:
    f.write(c)
print(f"\n✅ Done. File size: {len(c)} chars")
PY