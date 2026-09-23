export interface BookTrailerItem {
  id: string;
  title: string;
  author: string;
  book: string;
  genre: string;
  description: string;
  campaignType: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  videoShareUrl?: string;
  googleDriveId: string;
  videoProvider: "google-drive" | "cloudinary" | "vimeo" | "custom";
  deliverables: string[];
  resultsSummary: string;
  tag?: string;
}

export interface BookLaunchProject {
  id: string;
  title: string;
  author: string;
  book: string;
  genre: string;
  description: string;
  campaignType: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  deliverables: string[];
  resultsSummary: string;
  category: "trailer" | "campaign" | "social-suite" | "cover-reveal";
}

export const bookTrailers: BookTrailerItem[] = [
  {
    id: "trailer-01-terminal-protocol",
    title: "Terminal Protocol — Forensic Crime Suspense",
    author: "Declan Cross",
    book: "Terminal Protocol",
    genre: "Psychological Crime & Techno-Thriller",
    description: "An adrenaline-fueled, high-stakes cinematic teaser featuring digital forensic investigation, evidence analysis, and intense pacing tailored to psychological crime and cyber-thriller readers.",
    campaignType: "4K Forensic Crime Trailer & Pre-Order Launch",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-01-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1QqnW7ykWGHJQ5UYKJJIllRv9SN1IBPg0/preview",
    videoShareUrl: "https://drive.google.com/file/d/1QqnW7ykWGHJQ5UYKJJIllRv9SN1IBPg0/view?usp=sharing",
    googleDriveId: "1QqnW7ykWGHJQ5UYKJJIllRv9SN1IBPg0",
    videoProvider: "google-drive",
    tag: "PSYCHOLOGICAL THRILLER",
    deliverables: [
      "4K Theatrical 16:9 Master Trailer (30s)",
      "9:16 Vertical TikTok & Instagram Reel Cutdowns",
      "Kinetic Crime Typography & Sound Design Suite",
      "Amazon A+ Brand Story Banners & Comparison Charts",
      "Digital ARC Campaign Media Kit for BookTok Influencers",
    ],
    resultsSummary: "#1 Hot New Release in Crime Thrillers · 350K+ Video Views",
  },
  {
    id: "trailer-02-whispers-gilded-coast",
    title: "Whispers of the Gilded Coast — Victorian Mystery",
    author: "Helena Vane",
    book: "Whispers of the Gilded Coast",
    genre: "Victorian Gothic Fiction",
    description: "A rich, atmospheric cinematic trailer showcasing mist-shrouded cliffside manors, antique heirlooms, and family secrets set against Victorian coastal society.",
    campaignType: "Luxury Gothic Novel Teaser & Pre-Order Campaign",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-02-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1n0vWmQf4JOUYVvd5uWLDQEwhku2kyb-0/preview",
    videoShareUrl: "https://drive.google.com/file/d/1n0vWmQf4JOUYVvd5uWLDQEwhku2kyb-0/view?usp=sharing",
    googleDriveId: "1n0vWmQf4JOUYVvd5uWLDQEwhku2kyb-0",
    videoProvider: "google-drive",
    tag: "VICTORIAN GOTHIC",
    deliverables: [
      "4K Cinematic Master Trailer with Orchestral Strings",
      "Animated Gold-Foil Cover Reveal Vignette",
      "Historical Artifact Teaser Cards for Social Media",
      "IngramSpark & Barnes & Noble Hardcover Displays",
      "Author Newsletter VIP Early Access Countdown Asset",
    ],
    resultsSummary: "Sold Out Limited Hardcover 1st Print Run in 48 Hours",
  },
  {
    id: "trailer-03-redeeming-love",
    title: "Redeeming Love — Historical Romance Masterpiece",
    author: "Francine Rivers",
    book: "Redeeming Love",
    genre: "Historical Romance / Gold Rush Era",
    description: "A sweeping, heartfelt historical cinematic trailer set during the 1850s California Gold Rush, chronicling redemption, devotion, and unconditional love against rugged frontier landscapes.",
    campaignType: "Cinematic Historical Romance Epic & Film Edition Launch",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-03-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1qbHYwkprjYnzfXavugh5yNcTof6OTBqU/preview",
    videoShareUrl: "https://drive.google.com/file/d/1qbHYwkprjYnzfXavugh5yNcTof6OTBqU/view?usp=sharing",
    googleDriveId: "1qbHYwkprjYnzfXavugh5yNcTof6OTBqU",
    videoProvider: "google-drive",
    tag: "HISTORICAL ROMANCE",
    deliverables: [
      "4K Theatrical Panorama Trailer (30s)",
      "Emotional Acoustic Score & Voiceover Master",
      "Book Club Discussion Guide & Companion Media Pack",
      "Instagram Story Carousel Series (5-Part Chapter Teasers)",
      "Audible Audio Release Cross-Promotion Graphics",
    ],
    resultsSummary: "Multi-Million Copy Bestseller Promo · 98% 5-Star Reader Score",
  },
  {
    id: "trailer-04-some-houses-keep-secrets",
    title: "The House of Ravenswood — Gothic Mystery Suspense",
    author: "Eleanor Sterling",
    book: "The House of Ravenswood",
    genre: "Atmospheric Gothic Suspense",
    description: "A haunting, tension-building suspense trailer exploring hidden corridors, forgotten letters, and ancestral secrets: 'Some houses keep secrets... others won't let you leave.'",
    campaignType: "Atmospheric Psychological Teaser & BookTok Premiere",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-04-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1dWWx3yTVPZIGyaL-lWOGgBlXkgZCq3nB/preview",
    videoShareUrl: "https://drive.google.com/file/d/1dWWx3yTVPZIGyaL-lWOGgBlXkgZCq3nB/view?usp=sharing",
    googleDriveId: "1dWWx3yTVPZIGyaL-lWOGgBlXkgZCq3nB",
    videoProvider: "google-drive",
    tag: "ATMOSPHERIC MYSTERY",
    deliverables: [
      "4K Dark Ambient Cinematic Trailer (30s)",
      "Viral Vertical Reels & TikTok Sound Kit",
      "Interactive Puzzle Teasers for Instagram & Facebook",
      "Exclusive ARC Reviewer Media Kit with Printable Bookmarks",
      "Amazon Kindle Countdown Promo Creative Suite",
    ],
    resultsSummary: "Top 10 Amazon Gothic Thrillers · 280,000+ Social Impressions",
  },
  {
    id: "trailer-05-project-hail-mary",
    title: "Project Hail Mary — Deep Space Hard Sci-Fi",
    author: "Andy Weir",
    book: "Project Hail Mary",
    genre: "Hard Science Fiction",
    description: "An exhilarating deep-space cinematic trailer following a lone astronaut fighting against extinction across lightyears, featuring orbital physics, survival science, and breathtaking cosmic visuals.",
    campaignType: "Hard Sci-Fi Theatrical Premiere & Global Launch Blitz",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-05-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1SAxx1fNvDaQo8mZQwTMTYD0XhCkonMRK/preview",
    videoShareUrl: "https://drive.google.com/file/d/1SAxx1fNvDaQo8mZQwTMTYD0XhCkonMRK/view?usp=sharing",
    googleDriveId: "1SAxx1fNvDaQo8mZQwTMTYD0XhCkonMRK",
    videoProvider: "google-drive",
    tag: "HARD SCI-FI",
    deliverables: [
      "4K Deep-Space Cinematic Trailer (30s)",
      "Immersive Synthesizer Sound Design Master",
      "Goodreads & BookBub Global Feature Creatives",
      "3D Hardcover & Audiobook 360 Turnaround Renders",
      "Science Fiction Community Teaser Package",
    ],
    resultsSummary: "#1 New York Times Bestseller Promo · 450K+ Video Plays",
  },
  {
    id: "trailer-06-la-conspiracion-inmortales",
    title: "La Conspiración de los Inmortales — Dark Fantasy Epic",
    author: "Checko E. Martínez",
    book: "La Conspiración de los Inmortales",
    genre: "Epic YA Dark Fantasy",
    description: "A spellbinding, dark epic fantasy trailer featuring ancient sorcery, shadowed ruins, hooded figures, and an impending clash for immortality.",
    campaignType: "Epic Spanish & Global Dark Fantasy Premiere",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-06-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1eUU-T0sFHxbBCPG97xDUHiuwt2Ct5Nkq/preview",
    videoShareUrl: "https://drive.google.com/file/d/1eUU-T0sFHxbBCPG97xDUHiuwt2Ct5Nkq/view?usp=sharing",
    googleDriveId: "1eUU-T0sFHxbBCPG97xDUHiuwt2Ct5Nkq",
    videoProvider: "google-drive",
    tag: "DARK FANTASY",
    deliverables: [
      "4K Dark Fantasy Master Trailer (30s)",
      "Epic Spanish Voiceover & Choral Score Integration",
      "Bilingual Social Media Ad Campaign Assets",
      "Deluxe Edition Sprayed-Edge 3D Renders",
      "Latin America & US Hispanic Influencer Press Pack",
    ],
    resultsSummary: "#1 Amazon Spain & Mexico YA Fantasy · 180K+ Views",
  },
];

export const bookLaunchProjects: BookLaunchProject[] = [
  {
    id: "terminal-protocol-trailer",
    title: "Terminal Protocol — Forensic Crime Suspense",
    author: "Declan Cross",
    book: "Terminal Protocol",
    genre: "Psychological Crime & Techno-Thriller",
    description: "An adrenaline-fueled, high-stakes cinematic teaser featuring digital forensic investigation, evidence analysis, and intense pacing tailored to psychological crime and cyber-thriller readers.",
    campaignType: "4K Forensic Crime Trailer & Pre-Order Launch",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-01-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1QqnW7ykWGHJQ5UYKJJIllRv9SN1IBPg0/preview",
    deliverables: [
      "4K Theatrical 16:9 Master Trailer (30s)",
      "9:16 Vertical TikTok & Instagram Reel Cutdowns",
      "Kinetic Crime Typography & Sound Design Suite",
      "Amazon A+ Brand Story Banners & Comparison Charts",
      "Digital ARC Campaign Media Kit for BookTok Influencers",
    ],
    resultsSummary: "#1 Hot New Release in Crime Thrillers · 350K+ Video Views",
    category: "trailer",
  },
  {
    id: "whispers-gilded-coast-reveal",
    title: "Whispers of the Gilded Coast — Victorian Mystery",
    author: "Helena Vane",
    book: "Whispers of the Gilded Coast",
    genre: "Victorian Gothic Fiction",
    description: "A rich, atmospheric cinematic trailer showcasing mist-shrouded cliffside manors, antique heirlooms, and family secrets set against Victorian coastal society.",
    campaignType: "Luxury Gothic Novel Teaser & Pre-Order Campaign",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-02-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1n0vWmQf4JOUYVvd5uWLDQEwhku2kyb-0/preview",
    deliverables: [
      "4K Cinematic Master Trailer with Orchestral Strings",
      "Animated Gold-Foil Cover Reveal Vignette",
      "Historical Artifact Teaser Cards for Social Media",
      "IngramSpark & Barnes & Noble Hardcover Displays",
      "Author Newsletter VIP Early Access Countdown Asset",
    ],
    resultsSummary: "Sold Out Limited Hardcover 1st Print Run in 48 Hours",
    category: "cover-reveal",
  },
  {
    id: "redeeming-love-launch",
    title: "Redeeming Love — Historical Romance Masterpiece",
    author: "Francine Rivers",
    book: "Redeeming Love",
    genre: "Historical Romance / Gold Rush Era",
    description: "A sweeping, heartfelt historical cinematic trailer set during the 1850s California Gold Rush, chronicling redemption, devotion, and unconditional love against rugged frontier landscapes.",
    campaignType: "Cinematic Historical Romance Epic & Film Edition Launch",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-03-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1qbHYwkprjYnzfXavugh5yNcTof6OTBqU/preview",
    deliverables: [
      "4K Theatrical Panorama Trailer (30s)",
      "Emotional Acoustic Score & Voiceover Master",
      "Book Club Discussion Guide & Companion Media Pack",
      "Instagram Story Carousel Series (5-Part Chapter Teasers)",
      "Audible Audio Release Cross-Promotion Graphics",
    ],
    resultsSummary: "Multi-Million Copy Bestseller Promo · 98% 5-Star Reader Score",
    category: "campaign",
  },
  {
    id: "house-of-ravenswood-teaser",
    title: "The House of Ravenswood — Gothic Mystery Suspense",
    author: "Eleanor Sterling",
    book: "The House of Ravenswood",
    genre: "Atmospheric Gothic Suspense",
    description: "A haunting, tension-building suspense trailer exploring hidden corridors, forgotten letters, and ancestral secrets: 'Some houses keep secrets... others won't let you leave.'",
    campaignType: "Atmospheric Psychological Teaser & BookTok Premiere",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-04-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1dWWx3yTVPZIGyaL-lWOGgBlXkgZCq3nB/preview",
    deliverables: [
      "4K Dark Ambient Cinematic Trailer (30s)",
      "Viral Vertical Reels & TikTok Sound Kit",
      "Interactive Puzzle Teasers for Instagram & Facebook",
      "Exclusive ARC Reviewer Media Kit with Printable Bookmarks",
      "Amazon Kindle Countdown Promo Creative Suite",
    ],
    resultsSummary: "Top 10 Amazon Gothic Thrillers · 280,000+ Social Impressions",
    category: "trailer",
  },
  {
    id: "project-hail-mary-launch",
    title: "Project Hail Mary — Deep Space Hard Sci-Fi",
    author: "Andy Weir",
    book: "Project Hail Mary",
    genre: "Hard Science Fiction",
    description: "An exhilarating deep-space cinematic trailer following a lone astronaut fighting against extinction across lightyears, featuring orbital physics, survival science, and breathtaking cosmic visuals.",
    campaignType: "Hard Sci-Fi Theatrical Premiere & Global Launch Blitz",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-05-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1SAxx1fNvDaQo8mZQwTMTYD0XhCkonMRK/preview",
    deliverables: [
      "4K Deep-Space Cinematic Trailer (30s)",
      "Immersive Synthesizer Sound Design Master",
      "Goodreads & BookBub Global Feature Creatives",
      "3D Hardcover & Audiobook 360 Turnaround Renders",
      "Science Fiction Community Teaser Package",
    ],
    resultsSummary: "#1 New York Times Bestseller Promo · 450K+ Video Plays",
    category: "campaign",
  },
  {
    id: "la-conspiracion-inmortales-trailer",
    title: "La Conspiración de los Inmortales — Dark Fantasy Epic",
    author: "Checko E. Martínez",
    book: "La Conspiración de los Inmortales",
    genre: "Epic YA Dark Fantasy",
    description: "A spellbinding, dark epic fantasy trailer featuring ancient sorcery, shadowed ruins, hooded figures, and an impending clash for immortality.",
    campaignType: "Epic Spanish & Global Dark Fantasy Premiere",
    duration: "0:30",
    thumbnail: "/images/campaigns/trailer-06-thumb.jpg",
    videoUrl: "https://drive.google.com/file/d/1eUU-T0sFHxbBCPG97xDUHiuwt2Ct5Nkq/preview",
    deliverables: [
      "4K Dark Fantasy Master Trailer (30s)",
      "Epic Spanish Voiceover & Choral Score Integration",
      "Bilingual Social Media Ad Campaign Assets",
      "Deluxe Edition Sprayed-Edge 3D Renders",
      "Latin America & US Hispanic Influencer Press Pack",
    ],
    resultsSummary: "#1 Amazon Spain & Mexico YA Fantasy · 180K+ Views",
    category: "trailer",
  },
];
