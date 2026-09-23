import urllib.request
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')

urls = [
    ('Video 1 (third trailer)', 'https://drive.google.com/file/d/1QqnW7ykWGHJQ5UYKJJIllRv9SN1IBPg0/preview'),
    ('Video 2 (second trailer)', 'https://drive.google.com/file/d/1n0vWmQf4JOUYVvd5uWLDQEwhku2kyb-0/preview'),
    ('Video 3 (fourth trailer)', 'https://drive.google.com/file/d/1qbHYwkprjYnzfXavugh5yNcTof6OTBqU/preview'),
    ('Video 4 (first trailer)', 'https://drive.google.com/file/d/1dWWx3yTVPZIGyaL-lWOGgBlXkgZCq3nB/preview'),
    ('Video 5 (fifth trailer)', 'https://drive.google.com/file/d/1SAxx1fNvDaQo8mZQwTMTYD0XhCkonMRK/preview'),
    ('Video 6 (sixth trailer)', 'https://drive.google.com/file/d/1eUU-T0sFHxbBCPG97xDUHiuwt2Ct5Nkq/preview')
]

for label, url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read().decode('utf-8', errors='ignore')
            title = 'No title'
            if '<title>' in data:
                title = data.split('<title>')[1].split('</title>')[0]
            print(f'SUCCESS: {label} -> {title}')
    except Exception as e:
        print(f'FAILED: {label} -> {e}')
