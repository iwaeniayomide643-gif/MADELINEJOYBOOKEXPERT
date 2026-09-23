const https = require('https');

const videos = [
  { id: '1QqnW7ykWGHJQ5UYKJJIllRv9SN1IBPg0', num: 1 },
  { id: '1n0vWmQf4JOUYVvd5uWLDQEwhku2kyb-0', num: 2 },
  { id: '1qbHYwkprjYnzfXavugh5yNcTof6OTBqU', num: 3 },
  { id: '1dWWx3yTVPZIGyaL-lWOGgBlXkgZCq3nB', num: 4 },
  { id: '1SAxx1fNvDaQo8mZQwTMTYD0XhCkonMRK', num: 5 },
  { id: '1eUU-T0sFHxbBCPG97xDUHiuwt2Ct5Nkq', num: 6 }
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body }));
    }).on('error', reject);
  });
}

async function run() {
  for (const v of videos) {
    console.log(`\n========================================`);
    console.log(`CHECKING VIDEO ${v.num} (${v.id})`);
    try {
      const viewRes = await fetchUrl(`https://drive.google.com/file/d/${v.id}/view?usp=sharing`);
      const previewRes = await fetchUrl(`https://drive.google.com/file/d/${v.id}/preview`);
      
      const titleMatch = previewRes.body.match(/<title>(.*?)<\/title>/i) || viewRes.body.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].replace(' - Google Drive', '') : 'Unknown';
      
      const ogTitleMatch = viewRes.body.match(/<meta property="og:title" content="([^"]+)"/i) || viewRes.body.match(/<meta name="title" content="([^"]+)"/i);
      const ogTitle = ogTitleMatch ? ogTitleMatch[1] : '';

      const needsAccess = previewRes.body.includes('You need access') || viewRes.body.includes('You need access') || previewRes.statusCode === 403;
      
      console.log(`Status View: ${viewRes.statusCode}, Preview: ${previewRes.statusCode}`);
      console.log(`Title: ${title}`);
      console.log(`OG Title: ${ogTitle}`);
      console.log(`Needs Access: ${needsAccess}`);

      // Look for filename in doc info
      const filenameMatch = previewRes.body.match(/"title":"([^"]+)"/) || viewRes.body.match(/"title":"([^"]+)"/);
      if (filenameMatch) {
        console.log(`Filename: ${filenameMatch[1]}`);
      }
    } catch (e) {
      console.error(`Error checking video ${v.num}:`, e.message);
    }
  }
}

run();
