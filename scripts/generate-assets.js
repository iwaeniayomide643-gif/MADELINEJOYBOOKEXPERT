import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../public/images");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(path.join(publicDir, "authors"));
ensureDir(path.join(publicDir, "covers"));
ensureDir(path.join(publicDir, "websites"));
ensureDir(path.join(publicDir, "campaigns"));

// 20 Distinct Author Profiles
const authorProfiles = [
  { id: "helena-vane", name: "Helena Vane", initials: "HV", genre: "Historical Fiction", tone: "#4a2835", accent: "#dcb370", bg1: "#1d0c15", bg2: "#3b1a28", tag: "Victorian Romance" },
  { id: "kofi-mensah", name: "Kofi Mensah", initials: "KM", genre: "Epic Fantasy", tone: "#6d321d", accent: "#df8a6c", bg1: "#1e0b04", bg2: "#4a1e0f", tag: "Worldbuilder" },
  { id: "dr-aris-thorne", name: "Dr. Aris Thorne", initials: "AT", genre: "Science & Non-Fiction", tone: "#1b354f", accent: "#7dd3fc", bg1: "#091724", bg2: "#193753", tag: "Neuroscience" },
  { id: "soraya-al-mansoor", name: "Soraya Al-Mansoor", initials: "SA", genre: "Poetry & Memoir", tone: "#453831", accent: "#f5d0b5", bg1: "#1a1411", bg2: "#362a23", tag: "Bilingual Verse" },
  { id: "declan-cross", name: "Declan Cross", initials: "DC", genre: "Techno-Thriller", tone: "#1e3a34", accent: "#4ade80", bg1: "#081c18", bg2: "#143830", tag: "Cyber Thriller" },
  { id: "camille-laurent", name: "Camille Laurent", initials: "CL", genre: "Contemporary Romance", tone: "#572b43", accent: "#f472b6", bg1: "#240a1a", bg2: "#451833", tag: "Parisian Romance" },
  { id: "marcos-valdes", name: "Marcos Valdés", initials: "MV", genre: "Business & Leadership", tone: "#26354a", accent: "#38bdf8", bg1: "#0a1320", bg2: "#1c2c42", tag: "Venture Strategy" },
  { id: "beatrix-sterling", name: "Beatrix Sterling", initials: "BS", genre: "YA Fantasy", tone: "#50285a", accent: "#c084fc", bg1: "#1d0824", bg2: "#3f1b49", tag: "Steampunk YA" },
  { id: "noah-campbell", name: "Noah Campbell", initials: "NC", genre: "Devotional & Living", tone: "#423828", accent: "#fbbf24", bg1: "#18140b", bg2: "#362c1b", tag: "Spiritual Reflection" },
  { id: "linnea-lindqvist", name: "Linnea Lindqvist", initials: "LL", genre: "Nordic Noir & Mystery", tone: "#263a45", accent: "#94a3b8", bg1: "#0a151b", bg2: "#1a2c35", tag: "Scandinavian Crime" },
  { id: "tariq-vance", name: "Tariq Vance", initials: "TV", genre: "Hard Sci-Fi", tone: "#312e61", accent: "#818cf8", bg1: "#0e0d26", bg2: "#262252", tag: "Astrophysics Fiction" },
  { id: "maya-chen-rosen", name: "Maya Chen-Rosen", initials: "MC", genre: "Historical Fiction", tone: "#542c33", accent: "#fda4af", bg1: "#21090d", bg2: "#441c23", tag: "East Asian History" },
  { id: "dr-julian-oreilly", name: "Dr. Julian O'Reilly", initials: "JO", genre: "Self-Help & Habits", tone: "#1b433e", accent: "#34d399", bg1: "#071c19", bg2: "#163a35", tag: "Behavioral Science" },
  { id: "amara-leo-fox", name: "Amara & Leo Fox", initials: "AF", genre: "Children's Literature", tone: "#613b1e", accent: "#fb923c", bg1: "#221104", bg2: "#4c2c12", tag: "Illustrated Stories" },
  { id: "siobhan-kelly", name: "Siobhan Kelly", initials: "SK", genre: "Gothic Horror", tone: "#2d2838", accent: "#a78bfa", bg1: "#110e17", bg2: "#262030", tag: "Atmospheric Dread" },
  { id: "garrick-vance", name: "Garrick Vance", initials: "GV", genre: "Leadership & Ops", tone: "#2b3445", accent: "#e2e8f0", bg1: "#0c111a", bg2: "#212a39", tag: "Executive Coaching" },
  { id: "zoya-petrova", name: "Zoya Petrova", initials: "ZP", genre: "Dark Romantasy", tone: "#4c1d42", accent: "#f43f5e", bg1: "#22051c", bg2: "#3f1236", tag: "Special Editions" },
  { id: "evelyn-dubois", name: "Evelyn Dubois", initials: "ED", genre: "Culinary Mystery", tone: "#573d2a", accent: "#fed7aa", bg1: "#211409", bg2: "#462e1c", tag: "Cozy Whodunit" },
  { id: "rowan-morales", name: "Rowan Morales", initials: "RM", genre: "Travel Memoir", tone: "#2a422e", accent: "#86efac", bg1: "#0b1c0e", bg2: "#213825", tag: "Wilderness Lore" },
  { id: "dr-cheryl-hastings", name: "Dr. Cheryl Hastings", initials: "CH", genre: "Mindfulness & Psych", tone: "#3f334a", accent: "#e9d5ff", bg1: "#18101e", bg2: "#342640", tag: "Clinical Mindfulness" },
];

function generateAuthorSVG(a) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
  <defs>
    <linearGradient id="bg_${a.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${a.bg1}"/>
      <stop offset="50%" stop-color="${a.tone}"/>
      <stop offset="100%" stop-color="${a.bg2}"/>
    </linearGradient>
    <radialGradient id="glow_${a.id}" cx="50%" cy="38%" r="45%">
      <stop offset="0%" stop-color="${a.accent}" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="${a.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg_${a.id})"/>
  <rect width="100%" height="100%" fill="url(#glow_${a.id})"/>
  
  <rect x="25" y="25" width="550" height="700" fill="none" stroke="${a.accent}" stroke-opacity="0.25" stroke-width="1.5" rx="20"/>
  <rect x="35" y="35" width="530" height="680" fill="none" stroke="${a.accent}" stroke-opacity="0.1" stroke-width="1" rx="16"/>
  
  <!-- Subtle Architectural Arch Backdrop -->
  <path d="M 180,380 L 180,240 A 120,120 0 0,1 420,240 L 420,380 Z" fill="${a.bg1}" fill-opacity="0.4" stroke="${a.accent}" stroke-opacity="0.2"/>
  
  <!-- Center Portrait Circle Frame -->
  <circle cx="300" cy="275" r="130" fill="${a.bg1}" fill-opacity="0.75" stroke="${a.accent}" stroke-opacity="0.45" stroke-width="2.5"/>
  <circle cx="300" cy="275" r="118" fill="none" stroke="${a.accent}" stroke-opacity="0.2" stroke-width="1" stroke-dasharray="4,4"/>
  
  <!-- Stylized Author Silhouette & Monogram -->
  <g transform="translate(300, 275)">
    <circle cx="0" cy="-30" r="50" fill="${a.accent}" fill-opacity="0.9"/>
    <path d="M-75,80 C-75,10 -35,5 0,5 C35,5 75,10 75,80 Z" fill="${a.accent}" fill-opacity="0.8"/>
    <text x="0" y="8" font-family="'DM Sans', -apple-system, sans-serif" font-size="32" font-weight="700" fill="${a.bg1}" text-anchor="middle" letter-spacing="0.08em">${a.initials}</text>
  </g>
  
  <!-- Editorial Badge Card -->
  <rect x="50" y="480" width="500" height="190" rx="16" fill="${a.bg1}" fill-opacity="0.85" stroke="${a.accent}" stroke-opacity="0.3" stroke-width="1.5"/>
  <text x="300" y="535" font-family="'Playfair Display', Georgia, serif" font-size="30" font-weight="700" fill="#f8f5ee" text-anchor="middle">${a.name}</text>
  <text x="300" y="570" font-family="'DM Sans', sans-serif" font-size="13" font-weight="600" fill="${a.accent}" text-anchor="middle" letter-spacing="0.2em" text-transform="uppercase">${a.genre}</text>
  <line x1="220" y1="595" x2="380" y2="595" stroke="${a.accent}" stroke-opacity="0.3" stroke-width="1"/>
  <text x="300" y="630" font-family="'DM Sans', sans-serif" font-size="12" fill="#c4b5c7" text-anchor="middle" letter-spacing="0.12em">${a.tag.toUpperCase()} • CLIENT PORTFOLIO</text>
</svg>`;
}

// 20 Distinct Book Cover Profiles
const bookCoverProfiles = [
  { id: "whispers-of-the-gilded-coast", title: "Whispers of the Gilded Coast", author: "Helena Vane", subtitle: "A Victorian Tale of Ambition & Salt", palette: ["#1e0a16", "#451a34", "#dcb370"] },
  { id: "chronicles-of-the-solar-king", title: "Chronicles of the Solar King", author: "Kofi Mensah", subtitle: "Book One of the Sunfire Dynasty", palette: ["#210903", "#632711", "#df8a6c"] },
  { id: "the-cognitive-horizon", title: "The Cognitive Horizon", author: "Dr. Aris Thorne", subtitle: "Neuroscience, Attention & The Modern Mind", palette: ["#081726", "#173859", "#7dd3fc"] },
  { id: "dust-and-jasmine", title: "Dust and Jasmine", author: "Soraya Al-Mansoor", subtitle: "Poems of Memory, Exile & Light", palette: ["#181310", "#403128", "#f5d0b5"] },
  { id: "terminal-protocol", title: "Terminal Protocol", author: "Declan Cross", subtitle: "A Thriller of Classified Surveillance", palette: ["#061a15", "#12382e", "#4ade80"] },
  { id: "the-autumn-atelier", title: "The Autumn Atelier", author: "Camille Laurent", subtitle: "A Love Affair on the Left Bank", palette: ["#230919", "#521d3f", "#f472b6"] },
  { id: "zero-to-market", title: "Zero to Market", author: "Marcos Valdés", subtitle: "The Playbook for Scalable Growth", palette: ["#081322", "#1b2f4a", "#38bdf8"] },
  { id: "the-clockwork-kingdom", title: "The Clockwork Kingdom", author: "Beatrix Sterling", subtitle: "Cogs, Secrets & Golden Guilds", palette: ["#1c0724", "#481b57", "#c084fc"] },
  { id: "grace-in-the-wilderness", title: "Grace in the Wilderness", author: "Noah Campbell", subtitle: "365 Daily Reflections for Weary Souls", palette: ["#17130a", "#3e321b", "#fbbf24"] },
  { id: "silent-fjord", title: "Silent Fjord", author: "Linnea Lindqvist", subtitle: "A Nordic Noir Mystery", palette: ["#081318", "#1c2e38", "#94a3b8"] },
  { id: "echoes-of-nova-prime", title: "Echoes of Nova Prime", author: "Tariq Vance", subtitle: "Hard Sci-Fi Across the Void", palette: ["#0b0a24", "#241f54", "#818cf8"] },
  { id: "the-paper-lanterns-of-kyoto", title: "The Paper Lanterns of Kyoto", author: "Maya Chen-Rosen", subtitle: "A Novel of 1920s Japan", palette: ["#1f080c", "#471820", "#fda4af"] },
  { id: "mastering-focus", title: "Mastering Focus", author: "Dr. Julian O'Reilly", subtitle: "Daily Systems for Deep Work", palette: ["#061916", "#143b35", "#34d399"] },
  { id: "the-dragon-who-lost-his-spark", title: "The Dragon Who Lost His Spark", author: "Amara & Leo Fox", subtitle: "An Illustrated Tale of Heart & Flame", palette: ["#200f04", "#542a0e", "#fb923c"] },
  { id: "beneath-the-salt-mire", title: "Beneath the Salt Mire", author: "Siobhan Kelly", subtitle: "A Gothic Coastal Haunting", palette: ["#0f0d16", "#251e33", "#a78bfa"] },
  { id: "the-spartan-way", title: "The Spartan Way: Resilient Teams", author: "Garrick Vance", subtitle: "Leadership Under High Pressure", palette: ["#0a1018", "#1e293b", "#e2e8f0"] },
  { id: "starlight-and-ash", title: "Starlight and Ash", author: "Zoya Petrova", subtitle: "A Dark Romantic Fantasy", palette: ["#1e0419", "#450e3b", "#f43f5e"] },
  { id: "the-patisserie", title: "The Patisserie on Rue Saint-Honoré", author: "Evelyn Dubois", subtitle: "A Cozy Culinary Mystery with Recipes", palette: ["#1e1208", "#452a17", "#fed7aa"] },
  { id: "wilderness-within", title: "Wilderness Within", author: "Rowan Morales", subtitle: "Tales of a Lone Hiker Across the Peaks", palette: ["#09170c", "#1c3820", "#86efac"] },
  { id: "the-compassionate-mind", title: "The Compassionate Mind", author: "Dr. Cheryl Hastings", subtitle: "Finding Calm in an Overwhelming World", palette: ["#140d1a", "#30223b", "#e9d5ff"] },
];

function generateCoverSVG(c) {
  const [bg1, bg2, accent] = c.palette;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900" width="600" height="900">
  <defs>
    <linearGradient id="coverBg_${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="60%" stop-color="${bg2}"/>
      <stop offset="100%" stop-color="${bg1}"/>
    </linearGradient>
    <radialGradient id="coverGlow_${c.id}" cx="50%" cy="38%" r="52%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#coverBg_${c.id})"/>
  <rect width="100%" height="100%" fill="url(#coverGlow_${c.id})"/>
  
  <rect x="25" y="25" width="550" height="850" fill="none" stroke="${accent}" stroke-opacity="0.4" stroke-width="2" rx="10"/>
  <rect x="36" y="36" width="528" height="828" fill="none" stroke="${accent}" stroke-opacity="0.18" stroke-width="1" rx="8"/>
  
  <!-- Central Emblem -->
  <circle cx="300" cy="370" r="135" fill="${bg1}" fill-opacity="0.65" stroke="${accent}" stroke-opacity="0.45" stroke-width="2"/>
  <circle cx="300" cy="370" r="118" fill="none" stroke="${accent}" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="6,4"/>
  <polygon points="300,270 375,370 300,470 225,370" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="2"/>
  <circle cx="300" cy="370" r="22" fill="${accent}" fill-opacity="0.9"/>
  
  <!-- Top Tagline -->
  <text x="300" y="85" font-family="'DM Sans', sans-serif" font-size="11" font-weight="700" fill="${accent}" text-anchor="middle" letter-spacing="0.25em">★ SPECIAL AUTHOR EDITION ★</text>
  
  <!-- Title & Subtitle Area -->
  <text x="300" y="580" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="700" fill="#f8f5ee" text-anchor="middle">
    ${c.title}
  </text>
  <text x="300" y="630" font-family="'DM Sans', sans-serif" font-size="14" font-style="italic" fill="#c4b5c7" text-anchor="middle">
    ${c.subtitle}
  </text>
  
  <line x1="180" y1="675" x2="420" y2="675" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5"/>
  
  <!-- Author Area -->
  <text x="300" y="735" font-family="'DM Sans', sans-serif" font-size="13" font-weight="600" fill="${accent}" text-anchor="middle" letter-spacing="0.24em" text-transform="uppercase">A WORK BY</text>
  <text x="300" y="780" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="600" fill="#ffffff" text-anchor="middle">${c.author}</text>
</svg>`;
}

// 10 Author Website Mockups
const websiteProfiles = [
  { id: "romance-author-atelier", title: "The Autumn Atelier", author: "Camille Laurent", genre: "Contemporary Romance", accent: "#f472b6", bg: "#240a1a" },
  { id: "fantasy-author-realm", title: "Chronicles of the Solar King", author: "Kofi Mensah", genre: "Epic Fantasy", accent: "#df8a6c", bg: "#1e0b04" },
  { id: "thriller-author-terminal", title: "Terminal Protocol", author: "Declan Cross", genre: "Techno-Thriller", accent: "#4ade80", bg: "#081c18" },
  { id: "literary-author-salon", title: "Dust and Jasmine", author: "Soraya Al-Mansoor", genre: "Literary Fiction", accent: "#f5d0b5", bg: "#1a1411" },
  { id: "historical-author-archives", title: "Whispers of the Gilded Coast", author: "Helena Vane", genre: "Historical Fiction", accent: "#dcb370", bg: "#1d0c15" },
  { id: "ya-author-academy", title: "The Clockwork Kingdom", author: "Beatrix Sterling", genre: "Young Adult", accent: "#c084fc", bg: "#1d0824" },
  { id: "business-author-executive", title: "Zero to Market", author: "Marcos Valdés", genre: "Business & Leadership", accent: "#38bdf8", bg: "#0a1320" },
  { id: "self-help-author-lab", title: "Mastering Focus", author: "Dr. Julian O'Reilly", genre: "Self-Help", accent: "#34d399", bg: "#071c19" },
  { id: "childrens-author-meadow", title: "The Dragon Who Lost His Spark", author: "Amara & Leo Fox", genre: "Children's Literature", accent: "#fb923c", bg: "#221104" },
  { id: "science-author-observatory", title: "Echoes of Nova Prime", author: "Tariq Vance", genre: "Hard Sci-Fi & Non-Fiction", accent: "#818cf8", bg: "#0e0d26" },
];

function generateWebsiteSVG(w) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="webBg_${w.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${w.bg}"/>
      <stop offset="100%" stop-color="#0a050d"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#webBg_${w.id})"/>
  
  <!-- Browser Chrome Top Bar -->
  <rect x="0" y="0" width="1200" height="52" fill="#0f0714" stroke="#ffffff" stroke-opacity="0.1"/>
  <circle cx="35" cy="26" r="6" fill="#f87171"/>
  <circle cx="55" cy="26" r="6" fill="#facc15"/>
  <circle cx="75" cy="26" r="6" fill="#4ade80"/>
  <rect x="140" y="12" width="600" height="28" rx="6" fill="#1b0e24" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="160" y="31" font-family="'DM Sans', sans-serif" font-size="12" fill="#a89aa9">https://${w.author.toLowerCase().replace(/[^a-z]/g, '')}books.com</text>
  
  <!-- Website Hero Preview Area -->
  <rect x="60" y="90" width="1080" height="600" rx="16" fill="#140b19" fill-opacity="0.85" stroke="${w.accent}" stroke-opacity="0.25"/>
  
  <!-- Navigation Header Inside Mockup -->
  <text x="100" y="145" font-family="'Playfair Display', serif" font-size="24" font-weight="700" fill="#ffffff">${w.author}</text>
  <text x="860" y="142" font-family="'DM Sans', sans-serif" font-size="13" font-weight="600" fill="${w.accent}">BOOKS • ABOUT • EVENTS • NEWSLETTER</text>
  
  <!-- Left Side: Hero Text & CTA -->
  <text x="100" y="240" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" fill="${w.accent}" letter-spacing="0.2em" text-transform="uppercase">${w.genre} AUTHOR PLATFORM</text>
  <text x="100" y="310" font-family="'Playfair Display', serif" font-size="44" font-weight="600" fill="#ffffff">${w.title}</text>
  <text x="100" y="370" font-family="'DM Sans', sans-serif" font-size="16" fill="#a89aa9">Bespoke author portfolio and automated reader-magnet funnel.</text>
  
  <rect x="100" y="420" width="180" height="48" rx="24" fill="${w.accent}"/>
  <text x="190" y="450" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#0d0611" text-anchor="middle">Order Book →</text>
  
  <rect x="295" y="420" width="190" height="48" rx="24" fill="none" stroke="${w.accent}" stroke-width="1.5"/>
  <text x="390" y="450" font-family="'DM Sans', sans-serif" font-size="14" font-weight="600" fill="${w.accent}" text-anchor="middle">Read Free Chapter</text>
  
  <!-- Right Side: 3D Book Graphic Mockup -->
  <g transform="translate(800, 220)">
    <rect x="0" y="0" width="220" height="340" rx="10" fill="${w.bg}" stroke="${w.accent}" stroke-width="2"/>
    <rect x="20" y="20" width="180" height="300" fill="none" stroke="${w.accent}" stroke-opacity="0.3"/>
    <text x="110" y="140" font-family="'Playfair Display', serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">${w.title}</text>
    <text x="110" y="260" font-family="'DM Sans', sans-serif" font-size="13" fill="${w.accent}" text-anchor="middle">${w.author}</text>
  </g>
</svg>`;
}

// 8 Book Launch / Trailer Campaign Posters
const campaignProfiles = [
  { id: "solar-king-trailer-thumb", title: "Chronicles of the Solar King", author: "Kofi Mensah", duration: "1:12", accent: "#df8a6c", bg: "#1e0b04" },
  { id: "terminal-protocol-thumb", title: "Terminal Protocol", author: "Declan Cross", duration: "0:48", accent: "#4ade80", bg: "#081c18" },
  { id: "autumn-atelier-thumb", title: "The Autumn Atelier", author: "Camille Laurent", duration: "0:56", accent: "#f472b6", bg: "#240a1a" },
  { id: "zero-to-market-thumb", title: "Zero to Market", author: "Marcos Valdés", duration: "1:30", accent: "#38bdf8", bg: "#0a1320" },
  { id: "whispers-gilded-thumb", title: "Whispers of the Gilded Coast", author: "Helena Vane", duration: "0:42", accent: "#dcb370", bg: "#1d0c15" },
  { id: "dragon-spark-thumb", title: "The Dragon Who Lost His Spark", author: "Amara & Leo Fox", duration: "1:05", accent: "#fb923c", bg: "#221104" },
  { id: "starlight-ash-thumb", title: "Starlight and Ash", author: "Zoya Petrova", duration: "0:38", accent: "#f43f5e", bg: "#22051c" },
  { id: "mastering-focus-thumb", title: "Mastering Focus", author: "Dr. Julian O'Reilly", duration: "1:15", accent: "#34d399", bg: "#071c19" },
];

function generateCampaignSVG(cp) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="campBg_${cp.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${cp.bg}"/>
      <stop offset="100%" stop-color="#08030b"/>
    </linearGradient>
    <radialGradient id="campGlow_${cp.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${cp.accent}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${cp.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#campBg_${cp.id})"/>
  <rect width="100%" height="100%" fill="url(#campGlow_${cp.id})"/>
  
  <!-- Film Letterbox Bars -->
  <rect x="0" y="0" width="1200" height="40" fill="#000000" fill-opacity="0.7"/>
  <rect x="0" y="635" width="1200" height="40" fill="#000000" fill-opacity="0.7"/>
  
  <!-- Play Button Center Icon -->
  <circle cx="600" cy="310" r="55" fill="${cp.accent}" fill-opacity="0.9" stroke="#ffffff" stroke-width="3"/>
  <polygon points="590,285 625,310 590,335" fill="#0d0611"/>
  
  <!-- Lower Title Banner -->
  <rect x="80" y="490" width="1040" height="120" rx="16" fill="#0d0611" fill-opacity="0.85" stroke="${cp.accent}" stroke-opacity="0.3"/>
  <text x="120" y="540" font-family="'Playfair Display', serif" font-size="32" font-weight="700" fill="#ffffff">${cp.title}</text>
  <text x="120" y="580" font-family="'DM Sans', sans-serif" font-size="14" font-weight="600" fill="${cp.accent}" letter-spacing="0.15em" text-transform="uppercase">OFFICIAL BOOK LAUNCH CAMPAIGN • ${cp.author.toUpperCase()}</text>
  
  <!-- Duration Badge -->
  <rect x="990" y="535" width="100" height="34" rx="8" fill="#1e1226" stroke="${cp.accent}" stroke-width="1.5"/>
  <text x="1040" y="558" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">${cp.duration}</text>
</svg>`;
}

// Write files as both .svg and .jpg
authorProfiles.forEach(a => {
  const svg = generateAuthorSVG(a);
  fs.writeFileSync(path.join(publicDir, `authors/${a.id}.svg`), svg);
  // Only write .jpg if it doesn't already exist as a photographic binary JPEG
  const jpgPath = path.join(publicDir, `authors/${a.id}.jpg`);
  if (!fs.existsSync(jpgPath) || fs.statSync(jpgPath).size < 10000) {
    fs.writeFileSync(jpgPath, svg);
  }
});

bookCoverProfiles.forEach(c => {
  const svg = generateCoverSVG(c);
  fs.writeFileSync(path.join(publicDir, `covers/${c.id}.svg`), svg);
  const jpgPath = path.join(publicDir, `covers/${c.id}.jpg`);
  if (!fs.existsSync(jpgPath) || fs.statSync(jpgPath).size < 10000) {
    fs.writeFileSync(jpgPath, svg);
  }
});

websiteProfiles.forEach(w => {
  const svg = generateWebsiteSVG(w);
  fs.writeFileSync(path.join(publicDir, `websites/${w.id}.svg`), svg);
  const jpgPath = path.join(publicDir, `websites/${w.id}.jpg`);
  if (!fs.existsSync(jpgPath) || fs.statSync(jpgPath).size < 10000) {
    fs.writeFileSync(jpgPath, svg);
  }
});

campaignProfiles.forEach(cp => {
  const svg = generateCampaignSVG(cp);
  fs.writeFileSync(path.join(publicDir, `campaigns/${cp.id}.svg`), svg);
  const jpgPath = path.join(publicDir, `campaigns/${cp.id}.jpg`);
  if (!fs.existsSync(jpgPath) || fs.statSync(jpgPath).size < 10000) {
    fs.writeFileSync(jpgPath, svg);
  }
});

console.log("All vector and image files written successfully.");
