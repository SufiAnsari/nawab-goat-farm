import os

FILES = ['index.html']
PAGES_DIR = 'pages'
if os.path.exists(PAGES_DIR):
    FILES += [os.path.join(PAGES_DIR, f) for f in os.listdir(PAGES_DIR) if f.endswith('.html')]

# The class string from previous artifacts (Step 763/794/etc)
# "class=\"hidden sm:hidden..." vs "hidden md:hidden..."
# I updated it to md:hidden in Step 769.
# Let's check the exact string in index.html from Step 769 output.
# "class=\"hidden md:hidden overflow-hidden transition-all duration-300 ease-in-out\""
# Wait, Step 769 output:
# -            <div id="mobile-menu" class="hidden sm:hidden overflow-hidden transition-all duration-300 ease-in-out">
# +            <div id="mobile-menu" class="hidden md:hidden overflow-hidden transition-all duration-300 ease-in-out">
# So the string is "hidden md:hidden overflow-hidden transition-all duration-300 ease-in-out"

OLD_CLASS = 'hidden md:hidden overflow-hidden transition-all duration-300 ease-in-out'
# New class: removing 'hidden' (so it's block but max-h-0), adding max-h-0 opacity-0
NEW_CLASS = 'md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0'

def apply_fix():
    print("Applying menu fix...")
    for fpath in FILES:
        if not os.path.exists(fpath):
            continue
            
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if OLD_CLASS in content:
            new_content = content.replace(OLD_CLASS, NEW_CLASS)
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  -> Updated {fpath}")
        else:
            print(f"  -> Class not found in {fpath}")

if __name__ == "__main__":
    apply_fix()
