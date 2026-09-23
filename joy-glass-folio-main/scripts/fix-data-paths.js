import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Fix testimonials.ts
const testPath = path.join(rootDir, 'src/data/testimonials.ts');
let testContent = fs.readFileSync(testPath, 'utf-8');

const testimonialMap = [
  { id: "helena-vane", author: "helena-vane.jpg", cover: "whispers-of-the-gilded-coast.svg" },
  { id: "kofi-mensah", author: "kofi-mensah.jpg", cover: "chronicles-of-the-solar-king.svg" },
  { id: "dr-aris-thorne", author: "dr-aris-thorne.svg", cover: "the-cognitive-horizon.svg" },
  { id: "soraya-al-mansoor", author: "soraya-al-mansoor.svg", cover: "dust-and-jasmine.svg" },
  { id: "declan-cross", author: "declan-cross.svg", cover: "terminal-protocol.svg" },
  { id: "camille-laurent", author: "camille-laurent.svg", cover: "the-autumn-atelier.svg" },
  { id: "marcos-valdes", author: "marcos-valdes.svg", cover: "zero-to-market.svg" },
  { id: "beatrix-sterling", author: "beatrix-sterling.svg", cover: "the-clockwork-kingdom.svg" },
  { id: "pastor-noah-campbell", author: "noah-campbell.svg", cover: "grace-in-the-wilderness.svg" },
  { id: "linnea-lindqvist", author: "linnea-lindqvist.svg", cover: "silent-fjord.svg" },
  { id: "tariq-vance", author: "tariq-vance.svg", cover: "echoes-of-nova-prime.svg" },
  { id: "maya-chen-rosen", author: "maya-chen-rosen.svg", cover: "the-paper-lanterns-of-kyoto.svg" },
  { id: "dr-julian-oreilly", author: "dr-julian-oreilly.svg", cover: "mastering-focus.svg" },
  { id: "amara-leo-fox", author: "amara-leo-fox.svg", cover: "the-dragon-who-lost-his-spark.svg" },
  { id: "siobhan-kelly", author: "siobhan-kelly.svg", cover: "beneath-the-salt-mire.svg" },
  { id: "garrick-vance", author: "garrick-vance.svg", cover: "the-spartan-way.svg" },
  { id: "zoya-petrova", author: "zoya-petrova.svg", cover: "starlight-and-ash.svg" },
  { id: "evelyn-dubois", author: "evelyn-dubois.svg", cover: "the-patisserie.svg" },
  { id: "rowan-morales", author: "rowan-morales.svg", cover: "wilderness-within.svg" },
  { id: "dr-cheryl-hastings", author: "dr-cheryl-hastings.svg", cover: "the-compassionate-mind.svg" },
];

testimonialMap.forEach(item => {
  const blockRegex = new RegExp(`(id:\\s*["']${item.id}["'][\\s\\S]*?authorImage:\\s*["'])[^"']*(["'][\\s\\S]*?bookCover:\\s*["'])[^"']*(["'])`);
  testContent = testContent.replace(blockRegex, `$1/images/authors/${item.author}$2/images/covers/${item.cover}$3`);
});
fs.writeFileSync(testPath, testContent);

// Fix bookLaunchProjects.ts
const campPath = path.join(rootDir, 'src/data/bookLaunchProjects.ts');
let campContent = fs.readFileSync(campPath, 'utf-8');

const campaignMap = [
  { id: "chronicles-solar-king-trailer", thumb: "solar-king-trailer-thumb.svg" },
  { id: "terminal-protocol-trailer", thumb: "terminal-protocol-thumb.svg" },
  { id: "autumn-atelier-campaign", thumb: "autumn-atelier-thumb.svg" },
  { id: "zero-to-market-launch", thumb: "zero-to-market-thumb.svg" },
  { id: "whispers-gilded-coast-reveal", thumb: "whispers-gilded-thumb.svg" },
  { id: "dragon-spark-kids-trailer", thumb: "dragon-spark-thumb.svg" },
  { id: "starlight-ash-special-edition", thumb: "starlight-ash-thumb.svg" },
  { id: "mastering-focus-challenge", thumb: "mastering-focus-thumb.svg" },
];

campaignMap.forEach(item => {
  const blockRegex = new RegExp(`(id:\\s*["']${item.id}["'][\\s\\S]*?thumbnail:\\s*["'])[^"']*(["'])`);
  campContent = campContent.replace(blockRegex, `$1/images/campaigns/${item.thumb}$2`);
});
fs.writeFileSync(campPath, campContent);

console.log("Accurate mapping written.");
