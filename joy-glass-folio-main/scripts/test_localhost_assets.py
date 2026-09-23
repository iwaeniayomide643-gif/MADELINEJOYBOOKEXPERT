import urllib.request
import sys

sys.stdout.reconfigure(encoding='utf-8')
base = 'http://localhost:8080'

tests = [
    ('/', 'Root Page HTML'),
    ('/images/campaigns/trailer-01-thumb.jpg', 'Trailer 1 Thumbnail'),
    ('/images/campaigns/trailer-02-thumb.jpg', 'Trailer 2 Thumbnail'),
    ('/images/campaigns/trailer-03-thumb.jpg', 'Trailer 3 Thumbnail'),
    ('/images/campaigns/trailer-04-thumb.jpg', 'Trailer 4 Thumbnail'),
    ('/images/campaigns/trailer-05-thumb.jpg', 'Trailer 5 Thumbnail'),
    ('/images/campaigns/trailer-06-thumb.jpg', 'Trailer 6 Thumbnail'),
    ('/favicon.ico', 'Favicon ICO'),
    ('/favicon-32x32.png', 'Favicon PNG 32x32'),
]

print('=== TESTING LOCALHOST WEBSITE & TRAILER ASSETS ===')
for p, label in tests:
    try:
        url = base + p
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            ctype = resp.headers.get('Content-Type')
            print(f'[OK] {label:24s} ({p:40s}) -> Status {resp.getcode()}, Content-Type: {ctype}')
    except Exception as e:
        print(f'[FAIL] {label:24s} ({p:40s}) -> Error: {e}')
