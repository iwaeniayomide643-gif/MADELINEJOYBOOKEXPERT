import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Let's check testimonials.ts, authorWebsites.ts, bookLaunchProjects.ts, formattedWorks.ts
function checkFileRefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.matchAll(/["'](\/(?:images|contra|lovable)[^"']+)["']/g);
  const results = [];
  for (const m of matches) {
    const relPath = m[1];
    const fullPath = path.join(rootDir, 'public', relPath);
    const exists = fs.existsSync(fullPath);
    results.push({ relPath, exists, size: exists ? fs.statSync(fullPath).size : 0 });
  }
  return results;
}

const files = [
  'src/data/testimonials.ts',
  'src/data/authorWebsites.ts',
  'src/data/bookLaunchProjects.ts',
  'src/data/formattedWorks.ts',
  'src/routes/index.tsx'
];

let totalRefs = 0;
let missingRefs = 0;

for (const f of files) {
  const full = path.join(rootDir, f);
  if (!fs.existsSync(full)) {
    console.log(`File not found: ${f}`);
    continue;
  }
  const refs = checkFileRefs(full);
  console.log(`\n=== Checking ${f} (${refs.length} references) ===`);
  refs.forEach(r => {
    totalRefs++;
    if (!r.exists) {
      missingRefs++;
      console.log(`❌ MISSING: ${r.relPath}`);
    } else {
      console.log(`✅ OK: ${r.relPath} (${r.size} bytes)`);
    }
  });
}

console.log(`\n=============================`);
console.log(`Total References Checked: ${totalRefs}`);
console.log(`Missing References: ${missingRefs}`);
console.log(`=============================`);
