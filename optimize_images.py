import os
from PIL import Image

IMAGE_DIR = 'images'
MAX_SIZE_KB = 300  # Optimize anything over 300KB

def optimize_images():
    print(f"Scanning {IMAGE_DIR} for large images (> {MAX_SIZE_KB} KB)...")
    
    if not os.path.exists(IMAGE_DIR):
        print(f"Directory {IMAGE_DIR} not found.")
        return

    count = 0
    for filename in os.listdir(IMAGE_DIR):
        filepath = os.path.join(IMAGE_DIR, filename)
        if not os.path.isfile(filepath):
            continue
        
        # Check extensions
        ext = os.path.splitext(filename)[1].lower()
        if ext not in ['.jpg', '.jpeg', '.png']:
            continue
            
        # Check size
        size_kb = os.path.getsize(filepath) / 1024
        if size_kb > MAX_SIZE_KB:
            print(f"Optimizing {filename} ({size_kb:.0f} KB)...")
            try:
                with Image.open(filepath) as img:
                    # Target filename
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_filepath = os.path.join(IMAGE_DIR, new_filename)
                    
                    # Convert content
                    image_to_save = img
                    if img.mode in ("RGBA", "P") and ext in ['.jpg', '.jpeg']:
                         # If saving as JPG, need RGB. But we are saving as WebP which supports transparency.
                         pass
                    
                    image_to_save.save(new_filepath, 'WEBP', quality=80, optimize=True)
                    
                    new_size = os.path.getsize(new_filepath) / 1024
                    print(f"  -> Saved to {new_filename} ({new_size:.0f} KB)")
                    count += 1
            except Exception as e:
                print(f"  -> Error optimizing {filename}: {e}")

    print(f"Optimization complete. Optimized {count} images.")

if __name__ == "__main__":
    optimize_images()
