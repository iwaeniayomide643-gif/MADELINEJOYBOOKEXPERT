import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.resolve(rootDir, "public/images");
const authorsDir = path.resolve(publicDir, "authors");
const coversDir = path.resolve(publicDir, "covers");

// 1. Audit and clean fake .jpg files that are actually SVG XML text
function cleanFakeJpgs(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.endsWith(".jpg")) {
      const fullPath = path.join(dir, f);
      const content = fs.readFileSync(fullPath);
      // Check if it starts with '<svg' or '<?xml'
      const str = content.slice(0, 100).toString("utf8");
      if (str.includes("<svg") || str.includes("<?xml")) {
        console.log(`🗑️ Removing fake JPG with SVG text: ${f} (${content.length} bytes)`);
        fs.unlinkSync(fullPath);
      }
    }
  }
}

cleanFakeJpgs(coversDir);
cleanFakeJpgs(authorsDir);

// 2. Generate matching SVGs for the 9 photographic authors so both .jpg and .svg work seamlessly
const photoAuthors = [
  { id: "helena-vane", name: "Helena Vane", initials: "HV", genre: "Historical Fiction", tone: "#4a2835", accent: "#dcb370", bg1: "#1d0c15", bg2: "#3b1a28", tag: "Victorian Romance" },
  { id: "kofi-mensah", name: "Kofi Mensah", initials: "KM", genre: "Epic Fantasy", tone: "#6d321d", accent: "#df8a6c", bg1: "#1e0b04", bg2: "#4a1e0f", tag: "Worldbuilder" },
  { id: "dr-aris-thorne", name: "Dr. Aris Thorne", initials: "AT", genre: "Science & Non-Fiction", tone: "#1b354f", accent: "#7dd3fc", bg1: "#091724", bg2: "#193753", tag: "Neuroscience" },
  { id: "soraya-al-mansoor", name: "Soraya Al-Mansoor", initials: "SA", genre: "Poetry & Memoir", tone: "#453831", accent: "#f5d0b5", bg1: "#1a1411", bg2: "#362a23", tag: "Bilingual Verse" },
  { id: "declan-cross", name: "Declan Cross", initials: "DC", genre: "Techno-Thriller", tone: "#1e3a34", accent: "#4ade80", bg1: "#081c18", bg2: "#143830", tag: "Cyber Thriller" },
  { id: "camille-laurent", name: "Camille Laurent", initials: "CL", genre: "Contemporary Romance", tone: "#572b43", accent: "#f472b6", bg1: "#240a1a", bg2: "#451833", tag: "Parisian Romance" },
  { id: "marcos-valdes", name: "Marcos Valdés", initials: "MV", genre: "Business & Leadership", tone: "#26354a", accent: "#38bdf8", bg1: "#0a1320", bg2: "#1c2c42", tag: "Venture Strategy" },
  { id: "beatrix-sterling", name: "Beatrix Sterling", initials: "BS", genre: "YA Fantasy", tone: "#50285a", accent: "#c084fc", bg1: "#1d0824", bg2: "#3f1b49", tag: "Steampunk YA" },
  { id: "dr-julian-oreilly", name: "Dr. Julian O'Reilly", initials: "JO", genre: "Self-Help & Habits", tone: "#1b433e", accent: "#34d399", bg1: "#071c19", bg2: "#163a35", tag: "Behavioral Science" },
];

for (const a of photoAuthors) {
  const authorSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
  <defs>
    <radialGradient id="bg_${a.id}" cx="50%" cy="36%" r="65%">
      <stop offset="0%" stop-color="${a.tone}"/>
      <stop offset="60%" stop-color="${a.bg2}"/>
      <stop offset="100%" stop-color="${a.bg1}"/>
    </radialGradient>
    <radialGradient id="glow_${a.id}" cx="50%" cy="36%" r="40%">
      <stop offset="0%" stop-color="${a.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${a.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg_${a.id})"/>
  <rect width="100%" height="100%" fill="url(#glow_${a.id})"/>
  <rect x="25" y="25" width="550" height="700" fill="none" stroke="${a.accent}" stroke-opacity="0.3" stroke-width="1.5" rx="20"/>
  <g transform="translate(300, 260)">
    <circle cx="0" cy="0" r="130" fill="${a.bg1}" stroke="${a.accent}" stroke-width="2.5" stroke-opacity="0.6"/>
    <circle cx="0" cy="-28" r="48" fill="${a.accent}" fill-opacity="0.9"/>
    <path d="M -70,75 C -70,12 -35,6 0,6 C 35,6 70,12 70,75 Z" fill="${a.accent}" fill-opacity="0.85"/>
    <text x="0" y="8" font-family="'DM Sans', -apple-system, sans-serif" font-size="34" font-weight="900" fill="${a.bg1}" text-anchor="middle">${a.initials}</text>
  </g>
  <g transform="translate(300, 520)">
    <rect x="-240" y="-15" width="480" height="175" rx="18" fill="${a.bg1}" fill-opacity="0.85" stroke="${a.accent}" stroke-opacity="0.35" stroke-width="1.5"/>
    <text x="0" y="32" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="700" fill="#ffffff" text-anchor="middle">${a.name}</text>
    <text x="0" y="66" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" fill="${a.accent}" text-anchor="middle" letter-spacing="0.22em">${a.genre.toUpperCase()}</text>
  </g>
</svg>`;
  fs.writeFileSync(path.join(authorsDir, `${a.id}.svg`), authorSVG, "utf8");
}
console.log("✅ Verified and generated matching SVGs for all authors.");
