python3 << 'PY'
# ── FIX app.js: Remove JSEOF at end
code = open('/home/claude/mwclean/app.js').read()
code = code.rstrip()
if code.endswith('JSEOF'):
    code = code[:-5].rstrip()
    print("Removed JSEOF from app.js")
open('/home/claude/mwclean/app.js','w').write(code + '\n')

# ── FIX style.css: rename .g2 grid conflict → use .grid2 class
css = open('/home/claude/mwclean/style.css').read()

# The problem: .g2 is defined twice
# First occurrence = auth glow circle (correct, keep)
# Second occurrence = grid layout (rename to .grid2)
# Third occurrence in media query = also rename

# Fix: rename grid usages of .g2 → .grid2, keep glow .g2 as is
css = css.replace(
    '.g2{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}',
    '.grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}'
)
css = css.replace(
    '.g3,.g2{grid-template-columns:1fr;}',
    '.g3,.grid2{grid-template-columns:1fr;}'
)
# Also rename .g3 to .grid3 to be explicit
css = css.replace(
    '.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}',
    '.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}'
)
css = css.replace(
    '.g3,.grid2{grid-template-columns:1fr;}',
    '.grid3,.grid2{grid-template-columns:1fr;}'
)
open('/home/claude/mwclean/style.css','w').write(css)
print("Fixed .g2/.g3 CSS conflict")

# ── FIX app.js: rename .g2 and .g3 class usages in innerHTML strings → .grid2 .grid3
code = open('/home/claude/mwclean/app.js').read()
import re

# Replace class="g2" and class="g3" in JS template literals → grid2/grid3
# But NOT inside SVG gradient id="slg" or other non-layout uses
# Safe replacements: all "g2" and "g3" used as layout class names
code = re.sub(r'class="g2"', 'class="grid2"', code)
code = re.sub(r'class="g3"', 'class="grid3"', code)
code = re.sub(r'class="g2 ', 'class="grid2 ', code)
code = re.sub(r'class="g3 ', 'class="grid3 ', code)

open('/home/claude/mwclean/app.js','w').write(code)
print("Fixed .g2/.g3 class names in app.js")
PY