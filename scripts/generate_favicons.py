import os
import json
from PIL import Image

icon_src = r'C:\Users\DELL\.gemini\antigravity-ide\brain\0ab13a6e-e7d0-42da-8811-3c1cfcf5196f\scratch\clean_perfect_icon.png'
public_dir = r'c:\Users\DELL\Downloads\joy-glass-folio-main\joy-glass-folio-main\public'

icon_img = Image.open(icon_src).convert('RGBA')

sizes = {
    'favicon-16x16.png': (16, 16),
    'favicon-32x32.png': (32, 32),
    'favicon-48x48.png': (48, 48),
    'apple-touch-icon.png': (180, 180),
    'android-chrome-192x192.png': (192, 192),
    'android-chrome-512x512.png': (512, 512),
}

for fname, size in sizes.items():
    resized = icon_img.resize(size, Image.Resampling.LANCZOS)
    out_path = os.path.join(public_dir, fname)
    resized.save(out_path, 'PNG', optimize=True)
    print(f'Saved {fname} ({size[0]}x{size[1]})')

ico_path = os.path.join(public_dir, 'favicon.ico')
icon_img.save(
    ico_path,
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
)
print('Saved multi-resolution favicon.ico')

manifest = {
    "name": "Author Ledger",
    "short_name": "Author Ledger",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#140b19",
    "background_color": "#140b19",
    "display": "standalone"
}

with open(os.path.join(public_dir, 'site.webmanifest'), 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2)

print('Saved site.webmanifest')
