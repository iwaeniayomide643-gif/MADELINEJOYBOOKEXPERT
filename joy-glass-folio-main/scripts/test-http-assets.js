import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const testPath = path.join(rootDir, 'src/data/testimonials.ts');
const webPath = path.join(rootDir, 'src/data/authorWebsites.ts');
const campPath = path.join(rootDir, 'src/data/bookLaunchProjects.ts');
const formatPath = path.join(rootDir, 'src/data/formattedWorks.ts');

const extractUrls = (f) => {
  const content = fs.readFileSync(f, 'utf-8');
  return [...content.matchAll(/["'](\/(?:images|contra|lovable)[^"']+)["']/g)].map(m => m[1]);
};

const urls = Array.from(new Set([
  ...extractUrls(testPath),
  ...extractUrls(webPath),
  ...extractUrls(campPath),
  ...extractUrls(formatPath),
  '/images/madeline-joy.jpg'
]));

console.log(`Testing HTTP requests for ${urls.length} unique URLs against http://localhost:8082...`);

let completed = 0;
let errors = 0;

urls.forEach(url => {
  http.get('http://localhost:8082' + url, res => {
    if (res.statusCode !== 200) {
      console.log(`❌ HTTP ${res.statusCode} for ${url}`);
      errors++;
    }
    res.resume();
    completed++;
    if (completed === urls.length) {
      console.log(`\n======================================`);
      console.log(`Finished testing server endpoints!`);
      console.log(`Total URLs tested: ${completed}`);
      console.log(`Status 200 OK: ${completed - errors}`);
      console.log(`Errors (404/500): ${errors}`);
      console.log(`======================================\n`);
    }
  }).on('error', err => {
    console.log(`❌ Request failed for ${url}: ${err.message}`);
    errors++;
    completed++;
    if (completed === urls.length) {
      console.log(`\n======================================`);
      console.log(`Finished testing server endpoints!`);
      console.log(`Total URLs tested: ${completed}`);
      console.log(`Status 200 OK: ${completed - errors}`);
      console.log(`Errors (404/500): ${errors}`);
      console.log(`======================================\n`);
    }
  });
});
