import React from "react";
import { Sparkles, ArrowRight, Star, Heart, Swords, Terminal, Feather, Landmark, Zap, Brain, Target, Smile, TrendingUp, Check } from "lucide-react";
import type { AuthorWebsiteProject } from "@/data/authorWebsites";

interface AuthorWebsiteCardProps {
  project: AuthorWebsiteProject;
  onOpen: () => void;
}

export function AuthorWebsiteCard({ project, onOpen }: AuthorWebsiteCardProps) {
  // Return custom bespoke visual preview header for each of the 10 distinct projects
  const renderBespokePreview = () => {
    switch (project.id) {
      case "camille-laurent-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#2a0f1e] via-[#481832] to-[#1c0a14] p-5 flex items-center justify-between border-b border-[#f7c2d2]/20">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c85a7e]/30 text-[#f7c2d2] text-[10px] font-semibold tracking-wider uppercase border border-[#c85a7e]/40">
                <Heart size={10} className="fill-current text-[#f472b6]" /> Parisian Romance
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-white font-bold leading-tight">The Parisian Atelier</h4>
              <p className="text-[11px] text-[#f5d5de] line-clamp-2 italic font-serif">"Love whispered along the banks of the Seine."</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/camille-laurent.jpg" alt="Camille Laurent" className="size-8 rounded-full object-cover border border-[#f7c2d2]/40 shadow" />
                <span className="text-[11px] text-[#fde8ef] font-medium">Camille Laurent</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/the-autumn-atelier.svg" alt="The Autumn Atelier" className="w-24 sm:w-28 rounded-lg border border-[#f7c2d2]/30 shadow-2xl" />
              <span className="absolute -bottom-2 -left-2 bg-[#c85a7e] text-white text-[9px] font-bold px-2 py-0.5 rounded-md shadow">4.9 ★</span>
            </div>
          </div>
        );

      case "kofi-mensah-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#1b0803] via-[#3b1207] to-[#0f0402] p-5 flex items-center justify-between border-b border-[#df8a6c]/25">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#df8a6c]/20 text-[#fed7aa] text-[10px] font-bold tracking-wider uppercase border border-[#df8a6c]/40">
                <Swords size={10} className="text-[#df8a6c]" /> Epic Fantasy Realm
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-[#fff7ed] font-bold leading-tight">Sunfire Dynasty Atlas</h4>
              <p className="text-[11px] text-[#e2c1b4] line-clamp-2">Interactive world maps, solar codex & character lineage trees.</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/kofi-mensah.jpg" alt="Kofi Mensah" className="size-8 rounded-full object-cover border border-[#df8a6c]/40 shadow" />
                <span className="text-[11px] text-[#fed7aa] font-bold">Kofi Mensah</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/chronicles-of-the-solar-king.svg" alt="Chronicles of the Solar King" className="w-24 sm:w-28 rounded-lg border border-[#df8a6c]/40 shadow-2xl" />
              <span className="absolute -bottom-2 -right-2 bg-[#df8a6c] text-[#0d0604] text-[9px] font-black px-2 py-0.5 rounded-md shadow">4K MAP</span>
            </div>
          </div>
        );

      case "declan-cross-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050b09] p-5 flex items-center justify-between border-b border-[#4ade80]/25 font-mono">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#102a21] text-[#4ade80] text-[10px] font-bold tracking-widest uppercase border border-[#4ade80]/40">
                <Terminal size={10} /> OPS_TERMINAL
              </span>
              <h4 className="font-sans text-lg sm:text-xl text-white font-black leading-tight">Terminal Protocol Ops</h4>
              <p className="text-[11px] text-[#86efac] line-clamp-2 font-sans">Encrypted surveillance dossier with interactive de-redaction.</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/declan-cross.jpg" alt="Declan Cross" className="size-8 rounded object-cover border border-[#4ade80]/40 shadow" />
                <span className="text-[11px] text-white font-bold font-sans">Declan Cross</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/terminal-protocol.svg" alt="Terminal Protocol" className="w-24 sm:w-28 rounded border border-[#4ade80]/40 shadow-2xl" />
              <span className="absolute top-1 right-1 bg-[#050b09] text-[#4ade80] text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#4ade80]">LIVE</span>
            </div>
          </div>
        );

      case "soraya-al-mansoor-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171310] p-5 flex items-center justify-between border-b border-[#c4a482]/25 font-serif">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2a221d] text-[#c4a482] text-[10px] font-medium tracking-widest uppercase font-sans border border-[#c4a482]/30">
                <Feather size={10} /> Literary Salon
              </span>
              <h4 className="text-lg sm:text-xl text-[#fff9f4] font-normal leading-tight">Dust and Jasmine</h4>
              <p className="text-[11px] text-[#d1beaf] line-clamp-2 italic">Minimalist typography, bilingual recitations & essays.</p>
              <div className="flex items-center gap-2 pt-1 font-sans">
                <img src="/images/authors/soraya-al-mansoor.jpg" alt="Soraya Al-Mansoor" className="size-8 rounded-full object-cover border border-[#c4a482]/40 shadow" />
                <span className="text-[11px] text-[#f4eae1]">Soraya Al-Mansoor</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/dust-and-jasmine.svg" alt="Dust and Jasmine" className="w-24 sm:w-28 rounded-lg border border-[#c4a482]/30 shadow-2xl" />
            </div>
          </div>
        );

      case "helena-vane-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#24140b] via-[#381f13] to-[#180c06] p-5 flex items-center justify-between border-b border-[#dcb370]/25 font-serif">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2e190e] text-[#dcb370] text-[10px] font-bold tracking-widest uppercase font-sans border border-[#dcb370]/40">
                <Landmark size={10} /> Victorian Archives
              </span>
              <h4 className="text-lg sm:text-xl text-[#fff7ec] font-bold leading-tight">The Newport Archives</h4>
              <p className="text-[11px] text-[#d8bead] line-clamp-2 font-sans">1890s timeline, book club kit & Gilded Age research vault.</p>
              <div className="flex items-center gap-2 pt-1 font-sans">
                <img src="/images/authors/helena-vane.jpg" alt="Helena Vane" className="size-8 rounded-full object-cover border border-[#dcb370]/40 shadow" />
                <span className="text-[11px] text-[#e8ca95] font-bold">Helena Vane</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/whispers-of-the-gilded-coast.svg" alt="Whispers of the Gilded Coast" className="w-24 sm:w-28 rounded-lg border border-[#dcb370]/40 shadow-2xl" />
            </div>
          </div>
        );

      case "beatrix-sterling-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#2a1045] via-[#4c1d95] to-[#1e0838] p-5 flex items-center justify-between border-b border-[#c084fc]/25">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c084fc]/20 text-[#f5e8ff] text-[10px] font-bold tracking-wider uppercase border border-[#c084fc]/40">
                <Zap size={10} className="text-amber-300" /> BookTok Sensation
              </span>
              <h4 className="font-sans text-lg sm:text-xl text-white font-black leading-tight">Clockwork Academy</h4>
              <p className="text-[11px] text-[#d8b4fe] line-clamp-2">Interactive sky-guild quiz, character playlists & VIP ARC squad.</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/beatrix-sterling.jpg" alt="Beatrix Sterling" className="size-8 rounded-full object-cover border border-[#c084fc]/40 shadow" />
                <span className="text-[11px] text-white font-bold">Beatrix Sterling</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/the-clockwork-kingdom.svg" alt="The Clockwork Kingdom" className="w-24 sm:w-28 rounded-xl border border-[#c084fc]/40 shadow-2xl" />
              <span className="absolute -bottom-2 -left-2 bg-gradient-to-r from-[#9333ea] to-[#db2777] text-white text-[9px] font-bold px-2 py-0.5 rounded-md shadow">12M+ TOK</span>
            </div>
          </div>
        );

      case "tariq-vance-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08131d] p-5 flex items-center justify-between border-b border-[#38bdf8]/25">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#0f283d] text-[#38bdf8] text-[10px] font-bold tracking-wider uppercase border border-[#38bdf8]/40">
                <Brain size={10} /> Neuroscience Lab
              </span>
              <h4 className="text-lg sm:text-xl text-white font-bold leading-tight">The Cognitive Horizon</h4>
              <p className="text-[11px] text-[#93c5fd] line-clamp-2">Executive cognitive frameworks, downloadable toolkit & keynote portal.</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/dr-aris-thorne.jpg" alt="Dr. Aris Thorne" className="size-8 rounded-full object-cover border border-[#38bdf8]/40 shadow" />
                <span className="text-[11px] text-[#e0f2fe] font-bold">Dr. Aris Thorne</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/the-cognitive-horizon.svg" alt="The Cognitive Horizon" className="w-24 sm:w-28 rounded-lg border border-[#38bdf8]/40 shadow-2xl" />
            </div>
          </div>
        );

      case "dr-julian-oreilly-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a1916] p-5 flex items-center justify-between border-b border-[#34d399]/25">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#13332c] text-[#34d399] text-[10px] font-bold tracking-wider uppercase border border-[#34d399]/40">
                <Target size={10} /> Habit Engineering
              </span>
              <h4 className="text-lg sm:text-xl text-white font-black leading-tight">Mastering Focus Hub</h4>
              <p className="text-[11px] text-[#a7f3d0] line-clamp-2">Interactive 2-minute diagnostic focus score test & 7-day challenge.</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/dr-julian-oreilly.jpg" alt="Dr. Julian O'Reilly" className="size-8 rounded-full object-cover border border-[#34d399]/40 shadow" />
                <span className="text-[11px] text-white font-bold">Dr. Julian O'Reilly</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/mastering-focus.svg" alt="Mastering Focus" className="w-24 sm:w-28 rounded-xl border border-[#34d399]/40 shadow-2xl" />
              <span className="absolute -bottom-2 -right-2 bg-[#34d399] text-[#0a1916] text-[9px] font-black px-2 py-0.5 rounded-md shadow">+3h Focus</span>
            </div>
          </div>
        );

      case "amara-leo-fox-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#2d1b0b] via-[#42250d] to-[#1e1308] p-5 flex items-center justify-between border-b border-[#fbbf24]/25">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fbbf24]/20 text-[#fde68a] text-[10px] font-black tracking-wider uppercase border border-[#fbbf24]/40">
                <Smile size={10} /> Storybook World
              </span>
              <h4 className="text-lg sm:text-xl text-white font-black leading-tight">The Dragon's Spark</h4>
              <p className="text-[11px] text-[#fde68a] line-clamp-2">Interactive character sounds, coloring pack download & school visits.</p>
              <div className="flex items-center gap-2 pt-1">
                <div className="size-8 rounded-full bg-[#fbbf24] text-[#1e1308] font-black flex items-center justify-center text-xs shadow">🐉</div>
                <span className="text-[11px] text-white font-bold">Amara & Leo Fox</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/the-dragon-who-lost-his-spark.svg" alt="The Dragon Who Lost His Spark" className="w-24 sm:w-28 rounded-xl border border-[#fbbf24]/50 shadow-2xl" />
            </div>
          </div>
        );

      case "marcos-valdes-website":
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080d16] p-5 flex items-center justify-between border-b border-[#38bdf8]/25">
            <div className="space-y-2 max-w-[55%] text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#0f1d30] text-[#38bdf8] text-[10px] font-bold tracking-wider uppercase border border-[#38bdf8]/40">
                <TrendingUp size={10} /> Venture Strategy
              </span>
              <h4 className="text-lg sm:text-xl text-white font-black leading-tight">Zero to Market Platform</h4>
              <p className="text-[11px] text-[#94a3b8] line-clamp-2">Corporate bulk order tier calculator, keynote reels & WSJ press hub.</p>
              <div className="flex items-center gap-2 pt-1">
                <img src="/images/authors/marcos-valdes.jpg" alt="Marcos Valdés" className="size-8 rounded-full object-cover border border-[#38bdf8]/40 shadow" />
                <span className="text-[11px] text-white font-bold">Marcos Valdés</span>
              </div>
            </div>
            <div className="relative z-10 shrink-0 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <img src="/images/covers/zero-to-market.svg" alt="Zero to Market" className="w-24 sm:w-28 rounded-xl border border-[#38bdf8]/40 shadow-2xl" />
              <span className="absolute -bottom-2 -left-2 bg-[#38bdf8] text-[#080d16] text-[9px] font-black px-2 py-0.5 rounded-md shadow">40% Bulk</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/60">
            <img src={project.previewImage} alt={project.conceptTitle} className="h-full w-full object-cover" />
          </div>
        );
    }
  };

  return (
    <article
      onClick={onOpen}
      className="glass-card group flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 cursor-pointer shadow-xl relative"
    >
      <div>
        {/* Dynamic Bespoke Case Study Header */}
        <div className="relative overflow-hidden">
          {renderBespokePreview()}

          {/* Polished Interactive Hover Overlay */}
          <div className="absolute inset-0 bg-ink/75 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
            <span className="grid size-12 place-items-center rounded-full bg-gold text-[#140b19] font-bold shadow-2xl mb-2 group-hover:scale-110 transition-transform">
              <Sparkles size={20} />
            </span>
            <p className="font-serif text-lg text-white font-bold">Explore Live Mini Website</p>
            <p className="text-[11px] text-gold mt-0.5">Click to enter complete interactive experience</p>
          </div>
        </div>

        {/* Card Body & Architecture Breakdown */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.18em] text-gold font-bold">{project.projectType}</p>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/10">
              Live Interactive Demo
            </span>
          </div>

          <h3 className="mt-1 font-display text-2xl group-hover:text-gold transition-colors">{project.conceptTitle}</h3>
          <p className="mt-1 text-xs text-primary font-medium">Author: {project.authorName} • Book: {project.bookTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.keyFeatures.slice(0, 3).map((feature, fIdx) => (
              <span key={fIdx} className="text-[11px] bg-glass border border-glass-border px-2.5 py-1 rounded-md text-foreground/90 font-medium">
                ✓ {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="p-6 pt-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 hover:from-gold hover:to-gold-light border border-gold/40 text-gold hover:text-[#140b19] font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-md group-hover:shadow-gold/20"
        >
          <span className="flex items-center gap-2">
            <Sparkles size={14} />
            <span>Launch Live Mini Website</span>
          </span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
