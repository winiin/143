python3 << 'PY'
code = open('/home/claude/mwfix/app.js').read()

# ── FIX 1: hashPass — btoa crashes on special chars like @!#$
# Replace with a safe hash that never uses btoa on user input
old = """function hashPass(p) {
  // Simple deterministic hash (not crypto, but not plain text)
  let h=0;
  for(let i=0;i<p.length;i++){h=((h<<5)-h)+p.charCodeAt(i);h|=0;}
  return 'h'+Math.abs(h).toString(36)+'_'+btoa(p.split('').reverse().join('')).slice(0,12);
}"""

new = """function hashPass(p) {
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
}"""

code = code.replace(old, new, 1)

# ── FIX 2: demo account password — must match new hashPass
# The demo account is created in initAuth with hashPass('Demo@123!')
# Since we changed hashPass, the stored demo hash will be wrong on first load
# Add a reset flag so demo account is always recreated fresh
old2 = """  const accs=getAccounts();
  if(!accs['demo@myway.kz']){
    accs['demo@myway.kz']={name:'Демо',email:'demo@myway.kz',password:hashPass('Demo@123!'),data:defaultData(),joinedAt:Date.now()-31*864e5};
    accs['demo@myway.kz'].data.premium=true;
    saveAccounts(accs);
  }"""

new2 = """  const accs=getAccounts();
  // Always refresh demo account so hash stays current
  const demoHash=hashPass('Demo@123!');
  if(!accs['demo@myway.kz']||accs['demo@myway.kz'].password!==demoHash){
    const demoData=accs['demo@myway.kz']?.data||defaultData();
    demoData.premium=true;
    accs['demo@myway.kz']={name:'Демо',email:'demo@myway.kz',password:demoHash,data:demoData,joinedAt:Date.now()-31*864e5};
    saveAccounts(accs);
  }"""

code = code.replace(old2, new2, 1)

# ── FIX 3: validatePass — also make it safer, show WHICH rule fails
old3 = """function validatePass(p) {
  if(p.length<6) return false;
  if(!/[A-Z]/.test(p)) return false;
  if(!/[a-z]/.test(p)) return false;
  if(!/[0-9]/.test(p)) return false;
  if(!/[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]/.test(p)) return false;
  return true;
}"""

new3 = """function validatePass(p) {
  if(!p||p.length<6) return {ok:false, msg:'Минимум 6 символов'};
  if(!/[A-Z]/.test(p)) return {ok:false, msg:'Нужна хотя бы 1 заглавная буква (A-Z)'};
  if(!/[a-z]/.test(p)) return {ok:false, msg:'Нужна хотя бы 1 строчная буква (a-z)'};
  if(!/[0-9]/.test(p)) return {ok:false, msg:'Нужна хотя бы 1 цифра (0-9)'};
  if(!/[!@#$%^&*()\-_+=\[\]{}|;:,.<>?]/.test(p)) return {ok:false, msg:'Нужен хотя бы 1 спецсимвол (!@#$...)'};
  return {ok:true, msg:''};
}"""

code = code.replace(old3, new3, 1)

# ── FIX 4: doRegister — use new validatePass return object
old4 = """  if(!validatePass(pass)){showErr('registerError',t('passWeak'));return;}"""
new4 = """  const passCheck=validatePass(pass);
  if(!passCheck.ok){showErr('registerError','❌ '+passCheck.msg);return;}"""
code = code.replace(old4, new4, 1)

# ── FIX 5: Password live check in initAuth — also fix regex
old5 = """        'pr-spec':/[!@#$%^&*()\-_+=\[\]{}|;:,.<>?]/.test(v),"""
# Already correct regex, just make sure it's there
if "pr-spec" in code:
    print("pr-spec rule found - OK")

# ── FIX 6: showErr — auto-hide after 5 seconds for better UX
old6 = """function showErr(id,msg){
  const el=document.getElementById(id);
  if(el){el.textContent=msg;el.classList.remove('hidden');}
}"""
new6 = """function showErr(id,msg){
  const el=document.getElementById(id);
  if(!el) return;
  el.textContent=msg;
  el.classList.remove('hidden');
  clearTimeout(el._hideTimer);
  el._hideTimer=setTimeout(()=>el.classList.add('hidden'),5000);
}"""
code = code.replace(old6, new6, 1)

open('/home/claude/mwfix/app.js','w').write(code)
print("All fixes applied!")
print("Size:", len(code), "chars")
PY