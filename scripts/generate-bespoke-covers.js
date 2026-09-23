import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const coversDir = path.resolve(__dirname, "../public/images/covers");
const authorsDir = path.resolve(__dirname, "../public/images/authors");

if (!fs.existsSync(coversDir)) fs.mkdirSync(coversDir, { recursive: true });
if (!fs.existsSync(authorsDir)) fs.mkdirSync(authorsDir, { recursive: true });

// 1. BESPOKE ZERO TO MARKET (MARCOS VALDÉS) - EXECUTIVE 3D HARDCOVER
const zeroToMarketSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 960" width="700" height="960">
  <defs>
    <!-- Background Luxury Studio Gradient -->
    <radialGradient id="studioBg" cx="45%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#141d2b"/>
      <stop offset="60%" stop-color="#090e17"/>
      <stop offset="100%" stop-color="#04060a"/>
    </radialGradient>

    <!-- Book Drop Shadows -->
    <filter id="bookShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="25" dy="35" stdDeviation="28" flood-color="#000000" flood-opacity="0.85"/>
      <feDropShadow dx="8" dy="12" stdDeviation="10" flood-color="#000000" flood-opacity="0.5"/>
    </filter>

    <!-- Hardcover Book Board Material Gradient -->
    <linearGradient id="coverBase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1b2e"/>
      <stop offset="35%" stop-color="#15273f"/>
      <stop offset="70%" stop-color="#0b1728"/>
      <stop offset="100%" stop-color="#070e1a"/>
    </linearGradient>

    <!-- Spine Cylindrical Highlight -->
    <linearGradient id="spineShading" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#040810" stop-opacity="0.95"/>
      <stop offset="25%" stop-color="#1d3354" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#0e1a2b" stop-opacity="0.9"/>
      <stop offset="90%" stop-color="#040810" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.95"/>
    </linearGradient>

    <!-- Book Hinge Crease Depression -->
    <linearGradient id="hingeCrease" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.85"/>
      <stop offset="40%" stop-color="#15273f" stop-opacity="0.2"/>
      <stop offset="70%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.6"/>
    </linearGradient>

    <!-- Gold Foil Gradients -->
    <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#fae8b4"/>
      <stop offset="25%" stop-color="#dfb76c"/>
      <stop offset="50%" stop-color="#fdf3d0"/>
      <stop offset="75%" stop-color="#c99e4c"/>
      <stop offset="100%" stop-color="#fae8b4"/>
    </linearGradient>

    <linearGradient id="copperFoil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#93c5fd"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>

    <!-- Paper Page Block Gradient -->
    <linearGradient id="pageBlock" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5efe6"/>
      <stop offset="50%" stop-color="#e2d8c7"/>
      <stop offset="100%" stop-color="#cbbfab"/>
    </linearGradient>

    <!-- Architectural Grid Pattern -->
    <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#38bdf8" stroke-width="0.5" stroke-opacity="0.08"/>
      <circle cx="24" cy="24" r="0.75" fill="#38bdf8" fill-opacity="0.2"/>
    </pattern>

    <!-- Subtle Matte Linen Texture Overlay -->
    <pattern id="linen" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="2" height="2" fill="#ffffff" fill-opacity="0.018"/>
      <rect x="2" y="2" width="2" height="2" fill="#000000" fill-opacity="0.035"/>
    </pattern>
  </defs>

  <!-- Studio Background -->
  <rect width="100%" height="100%" fill="url(#studioBg)"/>

  <!-- Subtle Studio Horizon Line & Floor Reflection -->
  <ellipse cx="350" cy="850" rx="280" ry="60" fill="#000000" fill-opacity="0.6" filter="blur(20px)"/>

  <!-- 3D BOOK ASSEMBLY -->
  <g transform="translate(60, 45)" filter="url(#bookShadow)">
    <!-- 1. Right Page Block (Paper Edge Thickness) -->
    <polygon points="520,38 544,24 544,820 520,836" fill="url(#pageBlock)"/>
    <!-- Page Lines -->
    <path d="M526,34 L526,832 M532,30 L532,828 M538,27 L538,824 M542,25 L542,821" stroke="#a39682" stroke-width="0.6" stroke-opacity="0.6"/>

    <!-- 2. Top Page Block -->
    <polygon points="48,24 520,38 544,24 72,10" fill="#ebdcc8"/>
    <path d="M60,18 L530,32 M66,14 L538,28" stroke="#a39682" stroke-width="0.5" stroke-opacity="0.4"/>

    <!-- 3. Left Spine (3D Hardcover Spine) -->
    <polygon points="20,16 48,24 48,844 20,836" fill="url(#spineShading)"/>
    <!-- Spine Edge Highlights -->
    <line x1="20" y1="16" x2="20" y2="836" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1"/>
    <line x1="48" y1="24" x2="48" y2="844" stroke="#000000" stroke-opacity="0.7" stroke-width="2"/>

    <!-- Vertical Spine Text -->
    <g transform="translate(34, 430) rotate(-90)">
      <text font-family="'DM Sans', -apple-system, sans-serif" font-size="11" font-weight="800" fill="#fae8b4" letter-spacing="0.28em" text-anchor="middle">
        ZERO TO MARKET PLATFORM • MARCOS VALDÉS
      </text>
    </g>

    <!-- 4. Front Cover Board (Main Face) -->
    <polygon points="48,24 520,38 520,858 48,844" fill="url(#coverBase)"/>
    <!-- Architectural Grid Background -->
    <polygon points="48,24 520,38 520,858 48,844" fill="url(#archGrid)"/>
    <!-- Linen Cloth Texture -->
    <polygon points="48,24 520,38 520,858 48,844" fill="url(#linen)"/>

    <!-- Left Hinge Crease Depression on Front Board -->
    <rect x="56" y="25" width="8" height="825" fill="url(#hingeCrease)"/>

    <!-- Outer Precision Gold Border -->
    <rect x="74" y="52" width="422" height="780" fill="none" stroke="url(#goldFoil)" stroke-width="1.2" stroke-opacity="0.55" rx="4"/>
    <rect x="80" y="58" width="410" height="768" fill="none" stroke="#38bdf8" stroke-width="0.6" stroke-opacity="0.2" rx="2"/>

    <!-- TOP ACCOLADE & ENDORSEMENT BANNER -->
    <g transform="translate(284, 88)">
      <text font-family="'DM Sans', -apple-system, sans-serif" font-size="9" font-weight="700" fill="url(#goldFoil)" text-anchor="middle" letter-spacing="0.3em">
        ★ WALL STREET JOURNAL & FINANCIAL TIMES BESTSELLER ★
      </text>
      <line x1="-150" y1="12" x2="150" y2="12" stroke="url(#goldFoil)" stroke-width="0.8" stroke-opacity="0.4"/>
    </g>

    <!-- CRITICAL PRAISE QUOTE -->
    <g transform="translate(284, 132)">
      <text font-family="'Playfair Display', Georgia, serif" font-size="11" font-style="italic" fill="#e2e8f0" text-anchor="middle">
        “The definitive architecture for building category-defining platforms.”
      </text>
      <text font-family="'DM Sans', sans-serif" font-size="8.5" font-weight="600" fill="#93c5fd" text-anchor="middle" letter-spacing="0.14em" y="16">
        — MARCUS STERLING, MANAGING PARTNER AT APEX VENTURES
      </text>
    </g>

    <!-- CENTRAL PLATFORM ARCHITECTURE GRAPHIC -->
    <g transform="translate(284, 280)">
      <!-- Outer Geometric Gyro Rings -->
      <circle cx="0" cy="0" r="88" fill="#081424" fill-opacity="0.85" stroke="url(#goldFoil)" stroke-width="1.5" stroke-opacity="0.75"/>
      <circle cx="0" cy="0" r="76" fill="none" stroke="#38bdf8" stroke-width="0.8" stroke-opacity="0.3" stroke-dasharray="4,3"/>
      
      <!-- Coordinate Axis & Geometric Diamonds -->
      <line x1="-88" y1="0" x2="88" y2="0" stroke="url(#goldFoil)" stroke-width="0.7" stroke-opacity="0.4"/>
      <line x1="0" y1="-88" x2="0" y2="88" stroke="url(#goldFoil)" stroke-width="0.7" stroke-opacity="0.4"/>
      
      <polygon points="0,-64 64,0 0,64 -64,0" fill="none" stroke="url(#goldFoil)" stroke-width="1.8" stroke-opacity="0.85"/>
      <polygon points="0,-48 48,0 0,48 -48,0" fill="#0f223d" fill-opacity="0.7" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.6"/>
      <circle cx="0" cy="0" r="16" fill="url(#goldFoil)"/>
      <circle cx="0" cy="0" r="8" fill="#071220"/>
    </g>

    <!-- MAIN TITLE HIERARCHY -->
    <g transform="translate(284, 450)">
      <!-- ZERO TO -->
      <text font-family="'DM Sans', -apple-system, sans-serif" font-size="28" font-weight="900" fill="url(#goldFoil)" text-anchor="middle" letter-spacing="0.32em">
        ZERO TO
      </text>
      
      <!-- MARKET -->
      <text font-family="'DM Sans', -apple-system, sans-serif" font-size="58" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.04em" y="58">
        MARKET
      </text>

      <!-- PLATFORM BADGE -->
      <g transform="translate(0, 92)">
        <rect x="-105" y="-14" width="210" height="28" rx="14" fill="#08182b" stroke="url(#goldFoil)" stroke-width="1.2"/>
        <text font-family="'DM Sans', sans-serif" font-size="11" font-weight="800" fill="url(#goldFoil)" text-anchor="middle" letter-spacing="0.28em" y="4">
          PLATFORM
        </text>
      </g>
    </g>

    <!-- SUBTITLE & DESCRIPTIVE HOOK -->
    <g transform="translate(284, 595)">
      <line x1="-120" y1="-14" x2="120" y2="-14" stroke="url(#goldFoil)" stroke-width="1" stroke-opacity="0.35"/>
      <text font-family="'DM Sans', sans-serif" font-size="11.5" font-weight="600" fill="#cbd5e1" text-anchor="middle" letter-spacing="0.06em">
        How Category-Defining Enterprises Scale
      </text>
      <text font-family="'DM Sans', sans-serif" font-size="10.5" font-weight="500" fill="#94a3b8" text-anchor="middle" letter-spacing="0.05em" y="18">
        from Inception to Market Monopoly
      </text>
    </g>

    <!-- AUTHOR SECTION -->
    <g transform="translate(284, 690)">
      <text font-family="'DM Sans', sans-serif" font-size="9" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="0.25em">
        AUTHOR
      </text>
      <text font-family="'Playfair Display', Georgia, serif" font-size="29" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="0.04em" y="28">
        Marcos Valdés
      </text>
      <text font-family="'DM Sans', sans-serif" font-size="9.5" font-weight="500" fill="#fae8b4" text-anchor="middle" letter-spacing="0.12em" y="48">
        Founder &amp; Managing Partner, Valdés Capital
      </text>
      <text font-family="'DM Sans', sans-serif" font-size="8.5" font-style="italic" fill="#94a3b8" text-anchor="middle" y="64">
        Foreword by Elena Rostova • Stanford Business School
      </text>
    </g>

    <!-- PUBLISHER IMPRINT SEAL -->
    <g transform="translate(284, 804)">
      <circle cx="0" cy="0" r="14" fill="#071322" stroke="url(#goldFoil)" stroke-width="1"/>
      <text font-family="'DM Sans', sans-serif" font-size="8" font-weight="900" fill="url(#goldFoil)" text-anchor="middle" y="3">VP</text>
      <text font-family="'DM Sans', sans-serif" font-size="7.5" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="0.2em" y="16">
        VALDÉS PUBLISHING HOUSE • NEW YORK &amp; LONDON
      </text>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(coversDir, "zero-to-market.svg"), zeroToMarketSVG, "utf8");
console.log("✅ Generated realistic 3D business book cover: zero-to-market.svg");

// Function to generate realistic 3D physical book covers for all 20 titles
function generateRealistic3DCover({ id, title, author, authorRole, subtitle, quote, genre, primaryColor, darkColor, lightColor, accentColor, motifType, badge }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 960" width="700" height="960">
  <defs>
    <radialGradient id="bg_${id}" cx="45%" cy="35%" r="70%">
      <stop offset="0%" stop-color="${primaryColor}"/>
      <stop offset="65%" stop-color="${darkColor}"/>
      <stop offset="100%" stop-color="#050508"/>
    </radialGradient>

    <filter id="shadow_${id}" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="24" dy="32" stdDeviation="26" flood-color="#000000" flood-opacity="0.85"/>
      <feDropShadow dx="6" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.45"/>
    </filter>

    <linearGradient id="coverFace_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${darkColor}"/>
      <stop offset="40%" stop-color="${primaryColor}"/>
      <stop offset="100%" stop-color="${darkColor}"/>
    </linearGradient>

    <linearGradient id="spineShade_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#020204" stop-opacity="0.95"/>
      <stop offset="25%" stop-color="${primaryColor}" stop-opacity="0.85"/>
      <stop offset="60%" stop-color="${darkColor}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.95"/>
    </linearGradient>

    <linearGradient id="goldAccent_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdf0cd"/>
      <stop offset="40%" stop-color="${accentColor}"/>
      <stop offset="100%" stop-color="#a67c2e"/>
    </linearGradient>

    <linearGradient id="pageGrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f7f2ea"/>
      <stop offset="50%" stop-color="#dfd3be"/>
      <stop offset="100%" stop-color="#c4b59d"/>
    </linearGradient>
  </defs>

  <!-- Studio Ambient Surface -->
  <rect width="100%" height="100%" fill="url(#bg_${id})"/>
  <ellipse cx="350" cy="850" rx="270" ry="55" fill="#000000" fill-opacity="0.6" filter="blur(20px)"/>

  <!-- 3D HARDCOVER BOOK -->
  <g transform="translate(60, 45)" filter="url(#shadow_${id})">
    <!-- Right Page Block -->
    <polygon points="520,38 544,24 544,820 520,836" fill="url(#pageGrad_${id})"/>
    <path d="M526,34 L526,832 M532,30 L532,828 M538,27 L538,824 M542,25 L542,821" stroke="#96856c" stroke-width="0.6" stroke-opacity="0.5"/>

    <!-- Top Page Block -->
    <polygon points="48,24 520,38 544,24 72,10" fill="#ebdcc8"/>

    <!-- Left 3D Spine -->
    <polygon points="20,16 48,24 48,844 20,836" fill="url(#spineShade_${id})"/>
    <line x1="20" y1="16" x2="20" y2="836" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1"/>
    <line x1="48" y1="24" x2="48" y2="844" stroke="#000000" stroke-opacity="0.7" stroke-width="2"/>
    
    <!-- Spine Vertical Title -->
    <g transform="translate(34, 430) rotate(-90)">
      <text font-family="'DM Sans', sans-serif" font-size="11" font-weight="700" fill="${accentColor}" letter-spacing="0.24em" text-anchor="middle">
        ${title.toUpperCase()} • ${author.toUpperCase()}
      </text>
    </g>

    <!-- Front Cover Face -->
    <polygon points="48,24 520,38 520,858 48,844" fill="url(#coverFace_${id})"/>

    <!-- Precision Filigree Frame -->
    <rect x="72" y="50" width="426" height="782" fill="none" stroke="url(#goldAccent_${id})" stroke-width="1.5" stroke-opacity="0.6" rx="6"/>
    <rect x="80" y="58" width="410" height="766" fill="none" stroke="${lightColor}" stroke-width="0.6" stroke-opacity="0.25" rx="3"/>

    <!-- Top Genre / Edition Badge -->
    <g transform="translate(284, 90)">
      <text font-family="'DM Sans', sans-serif" font-size="9.5" font-weight="700" fill="${accentColor}" text-anchor="middle" letter-spacing="0.3em">
        ★ ${badge.toUpperCase()} ★
      </text>
      <line x1="-140" y1="14" x2="140" y2="14" stroke="${accentColor}" stroke-width="0.8" stroke-opacity="0.4"/>
    </g>

    <!-- Praise Hook -->
    <g transform="translate(284, 138)">
      <text font-family="'Playfair Display', Georgia, serif" font-size="11" font-style="italic" fill="#f1f5f9" text-anchor="middle">
        “${quote}”
      </text>
    </g>

    <!-- Center Art Emblem -->
    <g transform="translate(284, 285)">
      <circle cx="0" cy="0" r="85" fill="${darkColor}" fill-opacity="0.85" stroke="url(#goldAccent_${id})" stroke-width="1.8"/>
      <circle cx="0" cy="0" r="72" fill="none" stroke="${accentColor}" stroke-width="0.8" stroke-dasharray="5,4" stroke-opacity="0.5"/>
      <polygon points="0,-58 58,0 0,58 -58,0" fill="none" stroke="url(#goldAccent_${id})" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="14" fill="${accentColor}" fill-opacity="0.9"/>
    </g>

    <!-- Book Title -->
    <g transform="translate(284, 465)">
      <text font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">
        ${title}
      </text>
      <text font-family="'DM Sans', sans-serif" font-size="13" font-style="italic" fill="${lightColor}" text-anchor="middle" y="42">
        ${subtitle}
      </text>
    </g>

    <!-- Author Block -->
    <g transform="translate(284, 690)">
      <line x1="-120" y1="-20" x2="120" y2="-20" stroke="${accentColor}" stroke-width="0.8" stroke-opacity="0.4"/>
      <text font-family="'DM Sans', sans-serif" font-size="9" font-weight="700" fill="${accentColor}" text-anchor="middle" letter-spacing="0.25em">
        ${authorRole ? authorRole.toUpperCase() : "BY"}
      </text>
      <text font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle" y="28">
        ${author}
      </text>
      <text font-family="'DM Sans', sans-serif" font-size="10" font-weight="500" fill="${lightColor}" text-anchor="middle" letter-spacing="0.12em" y="48">
        ${genre}
      </text>
    </g>

    <!-- Publisher Seal -->
    <g transform="translate(284, 804)">
      <circle cx="0" cy="0" r="12" fill="${darkColor}" stroke="${accentColor}" stroke-width="1"/>
      <text font-family="'DM Sans', sans-serif" font-size="7" font-weight="800" fill="${accentColor}" text-anchor="middle" y="2.5">ED</text>
      <text font-family="'DM Sans', sans-serif" font-size="7.5" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="0.2em" y="15">
        COLLECTORS EDITORIAL PRESS
      </text>
    </g>
  </g>
</svg>`;
}

// 20 Full Realistic Covers List
const allRealisticCovers = [
  {
    id: "whispers-of-the-gilded-coast",
    title: "Whispers of the Gilded Coast",
    author: "Helena Vane",
    authorRole: "A Novel by",
    subtitle: "A Victorian Tale of Ambition & Salt",
    quote: "A sweeping Victorian saga of luxury, secrets, and coastal high society.",
    genre: "Historical Romance",
    primaryColor: "#3a1728",
    darkColor: "#170810",
    lightColor: "#f7d2df",
    accentColor: "#dcb370",
    badge: "Victorian Bestseller Edition"
  },
  {
    id: "chronicles-of-the-solar-king",
    title: "Chronicles of the Solar King",
    author: "Kofi Mensah",
    authorRole: "Book One of the Sunfire Dynasty",
    subtitle: "Legends of the High Sunfire Dynasty",
    quote: "An expansive masterpiece of mythic worldbuilding and royal intrigue.",
    genre: "Epic Fantasy",
    primaryColor: "#45180c",
    darkColor: "#1a0602",
    lightColor: "#fed7aa",
    accentColor: "#df8a6c",
    badge: "Epic Fantasy Masterwork"
  },
  {
    id: "the-cognitive-horizon",
    title: "The Cognitive Horizon",
    author: "Dr. Aris Thorne",
    authorRole: "Written by",
    subtitle: "Neuroscience, Attention & The Modern Mind",
    quote: "Essential reading for understanding attention in the digital age.",
    genre: "Science & Cognitive Psychology",
    primaryColor: "#132d4a",
    darkColor: "#071424",
    lightColor: "#bae6fd",
    accentColor: "#7dd3fc",
    badge: "Academic Non-Fiction Standard"
  },
  {
    id: "dust-and-jasmine",
    title: "Dust and Jasmine",
    author: "Soraya Al-Mansoor",
    authorRole: "Poems and Essays by",
    subtitle: "Verses of Exile, Memory & Illuminated Light",
    quote: "Luminous, haunting, and intensely lyrical across every stanza.",
    genre: "Poetry & Literary Memoir",
    primaryColor: "#382921",
    darkColor: "#17100c",
    lightColor: "#fce7d8",
    accentColor: "#f5d0b5",
    badge: "National Poetry Award Winner"
  },
  {
    id: "terminal-protocol",
    title: "Terminal Protocol",
    author: "Declan Cross",
    authorRole: "A Cyber Thriller by",
    subtitle: "Classified Ops & Encrypted Surveillance",
    quote: "Heart-pounding pacing with authentic cyber forensics.",
    genre: "Techno-Thriller",
    primaryColor: "#0e2e25",
    darkColor: "#051611",
    lightColor: "#bbf7d0",
    accentColor: "#4ade80",
    badge: "Special Operations Thriller"
  },
  {
    id: "the-autumn-atelier",
    title: "The Autumn Atelier",
    author: "Camille Laurent",
    authorRole: "A Novel by",
    subtitle: "A Love Affair on the Parisian Left Bank",
    quote: "Pure romance set against the atmospheric golden leaves of Paris.",
    genre: "Contemporary Romance",
    primaryColor: "#451932",
    darkColor: "#1c0713",
    lightColor: "#fbcfe8",
    accentColor: "#f472b6",
    badge: "Parisian Romance Selection"
  },
  {
    id: "the-clockwork-kingdom",
    title: "The Clockwork Kingdom",
    author: "Beatrix Sterling",
    authorRole: "A YA Steampunk Fantasy by",
    subtitle: "Cogs, Secrets & Golden Guilds",
    quote: "A whirlwind adventure of airships, clockwork hearts, and rebellion.",
    genre: "Young Adult Steampunk",
    primaryColor: "#3c184c",
    darkColor: "#16051e",
    lightColor: "#e9d5ff",
    accentColor: "#c084fc",
    badge: "BookTok Fantasy Favorite"
  },
  {
    id: "grace-in-the-wilderness",
    title: "Grace in the Wilderness",
    author: "Noah Campbell",
    authorRole: "365 Daily Readings by",
    subtitle: "Daily Reflections for Weary Souls",
    quote: "A soothing sanctuary of spiritual wisdom for every morning.",
    genre: "Devotional & Spiritual Living",
    primaryColor: "#3a2e19",
    darkColor: "#181206",
    lightColor: "#fef3c7",
    accentColor: "#fbbf24",
    badge: "Daily Devotional Standard"
  },
  {
    id: "silent-fjord",
    title: "Silent Fjord",
    author: "Linnea Lindqvist",
    authorRole: "A Nordic Noir Mystery by",
    subtitle: "A Psychological Police Procedural",
    quote: "Chilling, atmospheric, and impossible to put down.",
    genre: "Nordic Crime & Thriller",
    primaryColor: "#1c2b36",
    darkColor: "#081117",
    lightColor: "#cbd5e1",
    accentColor: "#94a3b8",
    badge: "Scandinavian Crime Prize"
  },
  {
    id: "echoes-of-nova-prime",
    title: "Echoes of Nova Prime",
    author: "Tariq Vance",
    authorRole: "Hard Science Fiction by",
    subtitle: "Deep-Space Exploration & Ancient Relics",
    quote: "Riveting cosmic scale grounded in rigorous astrophysics.",
    genre: "Hard Science Fiction",
    primaryColor: "#1e1a47",
    darkColor: "#0a081c",
    lightColor: "#c7d2fe",
    accentColor: "#818cf8",
    badge: "Galaxy Sci-Fi Award Winner"
  },
  {
    id: "the-paper-lanterns-of-kyoto",
    title: "The Paper Lanterns of Kyoto",
    author: "Maya Chen-Rosen",
    authorRole: "A Historical Novel by",
    subtitle: "A Multi-Generational Kyoto Saga",
    quote: "Breathtaking historical fidelity and emotional grace.",
    genre: "Historical Fiction",
    primaryColor: "#42151c",
    darkColor: "#1a0408",
    lightColor: "#fecdd3",
    accentColor: "#fda4af",
    badge: "Historical Fiction Guild Pick"
  },
  {
    id: "mastering-focus",
    title: "Mastering Focus",
    author: "Dr. Julian O'Reilly",
    authorRole: "Behavioral Science Guide by",
    subtitle: "Actionable Daily Systems for Deep Work",
    quote: "The definitive manual on reclaiming your concentration and output.",
    genre: "Self-Help & Productivity",
    primaryColor: "#113831",
    darkColor: "#051713",
    lightColor: "#a7f3d0",
    accentColor: "#34d399",
    badge: "Executive Productivity Guide"
  },
  {
    id: "the-dragon-who-lost-his-spark",
    title: "The Dragon Who Lost His Spark",
    author: "Amara & Leo Fox",
    authorRole: "An Illustrated Story by",
    subtitle: "An Enchanting Tale of Courage & Friendship",
    quote: "A heartwarming bedtime journey beloved by children and parents alike.",
    genre: "Children's Picture Book",
    primaryColor: "#4a240a",
    darkColor: "#1c0b02",
    lightColor: "#ffedd5",
    accentColor: "#fb923c",
    badge: "Children's Choice Book Award"
  },
  {
    id: "beneath-the-salt-mire",
    title: "Beneath the Salt Mire",
    author: "Siobhan Kelly",
    authorRole: "Gothic Horror by",
    subtitle: "A Coastal Fog Haunting",
    quote: "Eerie, beautifully written, and steeped in authentic coastal dread.",
    genre: "Gothic Horror & Mystery",
    primaryColor: "#251d33",
    darkColor: "#0d0914",
    lightColor: "#ddd6fe",
    accentColor: "#a78bfa",
    badge: "Bram Stoker Nominee"
  },
  {
    id: "the-spartan-way",
    title: "The Spartan Way: Resilient Teams",
    author: "Garrick Vance",
    authorRole: "Leadership Framework by",
    subtitle: "Command & High-Pressure Execution",
    quote: "Tough, clear-eyed leadership lessons for turbulent markets.",
    genre: "Leadership & Management",
    primaryColor: "#1f2937",
    darkColor: "#090d14",
    lightColor: "#f1f5f9",
    accentColor: "#e2e8f0",
    badge: "Executive Boardroom Manual"
  },
  {
    id: "starlight-and-ash",
    title: "Starlight and Ash",
    author: "Zoya Petrova",
    authorRole: "Dark Romantic Fantasy by",
    subtitle: "Crowns, Shadows & Forbidden Passion",
    quote: "A viral romantasy triumph of court intrigue and dark passion.",
    genre: "Dark Romantasy",
    primaryColor: "#420d36",
    darkColor: "#170213",
    lightColor: "#ffe4e6",
    accentColor: "#f43f5e",
    badge: "Collector's Special Edition"
  },
  {
    id: "the-patisserie",
    title: "The Patisserie on Rue Saint-Honoré",
    author: "Evelyn Dubois",
    authorRole: "A Culinary Whodunit by",
    subtitle: "A Cozy Mystery with Authentic French Recipes",
    quote: "Delectable mystery paired with mouthwatering pastry craft.",
    genre: "Cozy Culinary Mystery",
    primaryColor: "#3e2413",
    darkColor: "#170b04",
    lightColor: "#ffedd5",
    accentColor: "#fed7aa",
    badge: "Cozy Mystery Guild Winner"
  },
  {
    id: "wilderness-within",
    title: "Wilderness Within",
    author: "Rowan Morales",
    authorRole: "A Nature Memoir by",
    subtitle: "Tales of a Mountain Guide Across the Ridge",
    quote: "Poignant, rugged, and deeply connected to the wild earth.",
    genre: "Travel Memoir & Nature",
    primaryColor: "#17361c",
    darkColor: "#061408",
    lightColor: "#bbf7d0",
    accentColor: "#86efac",
    badge: "Outdoor Literature Medal"
  },
  {
    id: "the-compassionate-mind",
    title: "The Compassionate Mind",
    author: "Dr. Cheryl Hastings",
    authorRole: "Mindfulness Practice by",
    subtitle: "Finding Calm in an Overwhelming World",
    quote: "A gentle, evidence-based sanctuary for emotional resilience.",
    genre: "Mindfulness & Psychology",
    primaryColor: "#2e213b",
    darkColor: "#100917",
    lightColor: "#f3e8ff",
    accentColor: "#e9d5ff",
    badge: "Clinical Psychology Guide"
  },
];

for (const cover of allRealisticCovers) {
  if (cover.id !== "zero-to-market") {
    const svg = generateRealistic3DCover(cover);
    fs.writeFileSync(path.join(coversDir, `${cover.id}.svg`), svg, "utf8");
    console.log(`✅ Generated 3D physical book cover: ${cover.id}.svg`);
  }
}

// 3. GENERATE BESPOKE HIGH-END AUTHOR PORTRAIT SVGS FOR REMAINING AUTHORS
const bespokeAuthorPortraits = [
  { id: "noah-campbell", name: "Noah Campbell", genre: "Devotional & Living", tone: "#423828", accent: "#fbbf24", bg1: "#18140b", bg2: "#362c1b", initials: "NC", role: "Devotional Author & Pastor" },
  { id: "linnea-lindqvist", name: "Linnea Lindqvist", genre: "Nordic Noir & Mystery", tone: "#263a45", accent: "#94a3b8", bg1: "#0a151b", bg2: "#1a2c35", initials: "LL", role: "Crime Fiction Novelist" },
  { id: "tariq-vance", name: "Tariq Vance", genre: "Hard Sci-Fi", tone: "#312e61", accent: "#818cf8", bg1: "#0e0d26", bg2: "#262252", initials: "TV", role: "Astrophysicist & Sci-Fi Author" },
  { id: "maya-chen-rosen", name: "Maya Chen-Rosen", genre: "Historical Fiction", tone: "#542c33", accent: "#fda4af", bg1: "#21090d", bg2: "#441c23", initials: "MC", role: "Historical Saga Author" },
  { id: "amara-leo-fox", name: "Amara & Leo Fox", genre: "Children's Literature", tone: "#613b1e", accent: "#fb923c", bg1: "#221104", bg2: "#4c2c12", initials: "AF", role: "Picture Book Duo" },
  { id: "siobhan-kelly", name: "Siobhan Kelly", genre: "Gothic Horror", tone: "#2d2838", accent: "#a78bfa", bg1: "#110e17", bg2: "#262030", initials: "SK", role: "Gothic Novelist" },
  { id: "garrick-vance", name: "Garrick Vance", genre: "Leadership & Ops", tone: "#2b3445", accent: "#e2e8f0", bg1: "#0c111a", bg2: "#212a39", initials: "GV", role: "Executive Leadership Coach" },
  { id: "zoya-petrova", name: "Zoya Petrova", genre: "Dark Romantasy", tone: "#4c1d42", accent: "#f43f5e", bg1: "#22051c", bg2: "#3f1236", initials: "ZP", role: "Romantasy Novelist" },
  { id: "evelyn-dubois", name: "Evelyn Dubois", genre: "Culinary Mystery", tone: "#573d2a", accent: "#fed7aa", bg1: "#211409", bg2: "#462e1c", initials: "ED", role: "Pastry Chef & Novelist" },
  { id: "rowan-morales", name: "Rowan Morales", genre: "Travel Memoir", tone: "#2a422e", accent: "#86efac", bg1: "#0b1c0e", bg2: "#213825", initials: "RM", role: "Mountain Wilderness Guide" },
  { id: "dr-cheryl-hastings", name: "Dr. Cheryl Hastings", genre: "Mindfulness & Psych", tone: "#3f334a", accent: "#e9d5ff", bg1: "#18101e", bg2: "#342640", initials: "CH", role: "Clinical Psychologist" },
];

for (const a of bespokeAuthorPortraits) {
  const authorSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
  <defs>
    <radialGradient id="authorBg_${a.id}" cx="50%" cy="36%" r="65%">
      <stop offset="0%" stop-color="${a.tone}"/>
      <stop offset="60%" stop-color="${a.bg2}"/>
      <stop offset="100%" stop-color="${a.bg1}"/>
    </radialGradient>
    <radialGradient id="authorGlow_${a.id}" cx="50%" cy="36%" r="40%">
      <stop offset="0%" stop-color="${a.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${a.accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="authorShadow_${a.id}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#authorBg_${a.id})"/>
  <rect width="100%" height="100%" fill="url(#authorGlow_${a.id})"/>

  <!-- Outer Architectural Framing -->
  <rect x="25" y="25" width="550" height="700" fill="none" stroke="${a.accent}" stroke-opacity="0.3" stroke-width="1.5" rx="20"/>
  <rect x="36" y="36" width="528" height="678" fill="none" stroke="${a.accent}" stroke-opacity="0.12" stroke-width="1" rx="16"/>

  <!-- Center Portrait Frame -->
  <g transform="translate(300, 260)" filter="url(#authorShadow_${a.id})">
    <circle cx="0" cy="0" r="130" fill="${a.bg1}" stroke="${a.accent}" stroke-width="2.5" stroke-opacity="0.6"/>
    <circle cx="0" cy="0" r="118" fill="none" stroke="${a.accent}" stroke-width="1" stroke-dasharray="5,4" stroke-opacity="0.3"/>
    
    <!-- Stylized Monogram Silhouette -->
    <circle cx="0" cy="-28" r="48" fill="${a.accent}" fill-opacity="0.9"/>
    <path d="M -70,75 C -70,12 -35,6 0,6 C 35,6 70,12 70,75 Z" fill="${a.accent}" fill-opacity="0.85"/>
    <text x="0" y="8" font-family="'DM Sans', -apple-system, sans-serif" font-size="34" font-weight="900" fill="${a.bg1}" text-anchor="middle" letter-spacing="0.08em">
      ${a.initials}
    </text>
  </g>

  <!-- Author Identification Card -->
  <g transform="translate(300, 520)">
    <rect x="-240" y="-15" width="480" height="175" rx="18" fill="${a.bg1}" fill-opacity="0.85" stroke="${a.accent}" stroke-opacity="0.35" stroke-width="1.5"/>
    <text x="0" y="32" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="700" fill="#ffffff" text-anchor="middle">
      ${a.name}
    </text>
    <text x="0" y="66" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" fill="${a.accent}" text-anchor="middle" letter-spacing="0.22em" text-transform="uppercase">
      ${a.role}
    </text>
    <line x1="-100" y1="88" x2="100" y2="88" stroke="${a.accent}" stroke-opacity="0.35" stroke-width="1"/>
    <text x="0" y="118" font-family="'DM Sans', sans-serif" font-size="11.5" font-weight="500" fill="#cbd5e1" text-anchor="middle" letter-spacing="0.14em">
      ${a.genre.toUpperCase()} • CLIENT TESTIMONIAL
    </text>
  </g>
</svg>`;
  fs.writeFileSync(path.join(authorsDir, `${a.id}.svg`), authorSVG, "utf8");
  console.log(`✅ Generated bespoke author portrait SVG: ${a.id}.svg`);
}

console.log("🎉 All 20 bespoke 3D book covers and author portraits successfully generated!");
