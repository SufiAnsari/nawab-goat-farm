import os
import re

HTML_FILES = ['index.html']
PAGES_DIR = 'pages'
IMAGE_DIR = 'images'

def update_html_refs():
    # Gather all HTML files
    files_to_update = HTML_FILES + [os.path.join(PAGES_DIR, f) for f in os.listdir(PAGES_DIR) if f.endswith('.html')]
    
    # Gather optimized images
    optimized_images = {f for f in os.listdir(IMAGE_DIR) if f.endswith('.webp')}
    
    # Iterate files
    for filepath in files_to_update:
        if not os.path.exists(filepath):
            continue
            
        print(f"Updating {filepath}...")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # Regex to find image srcs: src="images/xyz.ext" or src="../images/xyz.ext"
        # We need to be careful not to replace things that don't have .webp versions
        
        def replacement(match):
            full_match = match.group(0) # e.g. src="images/logo.png"
            path = match.group(1) # e.g. images/logo.png
            
            # Extract filename
            basename = os.path.basename(path) # logo.png
            name_without_ext = os.path.splitext(basename)[0] # logo
            webp_name = name_without_ext + '.webp'
            
            if webp_name in optimized_images:
                return full_match.replace(basename, webp_name)
            return full_match

        # Pattern: src="([^"]+)"
        # We target specific extensions within src
        pattern = r'src="([^"]+\.(png|jpg|jpeg))"'
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  -> Updated references.")
        else:
            print(f"  -> No changes needed.")

if __name__ == "__main__":
    update_html_refs()
