import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Laptop, Tablet, Smartphone, ExternalLink, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RomanceWebsite } from "./RomanceWebsite";
import { FantasyWebsite } from "./FantasyWebsite";
import { ThrillerWebsite } from "./ThrillerWebsite";
import { LiteraryWebsite } from "./LiteraryWebsite";
import { HistoricalWebsite } from "./HistoricalWebsite";
import { YoungAdultWebsite } from "./YoungAdultWebsite";
import { NonFictionWebsite } from "./NonFictionWebsite";
import { SelfHelpWebsite } from "./SelfHelpWebsite";
import { ChildrensWebsite } from "./ChildrensWebsite";
import { BusinessWebsite } from "./BusinessWebsite";
import { authorWebsites, type AuthorWebsiteProject } from "@/data/authorWebsites";

interface MiniWebsiteViewerProps {
  project: AuthorWebsiteProject;
  onClose: () => void;
  onSelectProject: (p: AuthorWebsiteProject) => void;
  onBookService: () => void;
}

export function MiniWebsiteViewer({
  project,
  onClose,
  onSelectProject,
  onBookService,
}: MiniWebsiteViewerProps) {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [selectorOpen, setSelectorOpen] = useState(false);

  // Map project ID to simulated live domain
  const domainMap: Record<string, string> = {
    "camille-laurent-website": "https://camillelaurent-romance.com",
    "kofi-mensah-website": "https://kofimensah-fantasy.realm",
    "declan-cross-website": "https://declancross-thrillers.net",
    "soraya-al-mansoor-website": "https://soraya-almansoor.poetry",
    "helena-vane-website": "https://helenavane-historical.archives",
    "beatrix-sterling-website": "https://beatrixsterling-ya.club",
    "tariq-vance-website": "https://dr-aristhorne-neuro.lab",
    "dr-julian-oreilly-website": "https://drjulianoreilly-focus.io",
    "amara-leo-fox-website": "https://amara-leo-fox.kids",
    "marcos-valdes-website": "https://marcosvaldes-strategy.ventures",
  };

  const currentDomain = domainMap[project.id] || `https://${project.id}.com`;

  // Render the specific custom mini website
  const renderWebsiteContent = () => {
    const props = {
      onBackToPortfolio: onClose,
      onBookWebsiteService: onBookService,
      viewportMode: viewport,
    };

    switch (project.id) {
      case "camille-laurent-website":
        return <RomanceWebsite {...props} />;
      case "kofi-mensah-website":
        return <FantasyWebsite {...props} />;
      case "declan-cross-website":
        return <ThrillerWebsite {...props} />;
      case "soraya-al-mansoor-website":
        return <LiteraryWebsite {...props} />;
      case "helena-vane-website":
        return <HistoricalWebsite {...props} />;
      case "beatrix-sterling-website":
        return <YoungAdultWebsite {...props} />;
      case "tariq-vance-website":
        return <NonFictionWebsite {...props} />;
      case "dr-julian-oreilly-website":
        return <SelfHelpWebsite {...props} />;
      case "amara-leo-fox-website":
        return <ChildrensWebsite {...props} />;
      case "marcos-valdes-website":
        return <BusinessWebsite {...props} />;
      default:
        return <RomanceWebsite {...props} />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mini-website-title"
      className="fixed inset-0 z-[80] flex flex-col bg-black/95 backdrop-blur-2xl animate-fade-in text-foreground"
    >
      {/* Top Global Navigation Bar & Browser Controls */}
      <header className="h-16 shrink-0 border-b border-white/10 bg-[#0d0611] px-4 sm:px-6 flex items-center justify-between gap-4 z-50">
        {/* Left: Back button + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <Button
            variant="glass"
            size="sm"
            onClick={onClose}
            className="flex items-center gap-1.5 shrink-0 bg-white/5 hover:bg-white/10 text-xs text-white border-white/15"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Button>

          {/* Quick Concept Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSelectorOpen(!selectorOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 hover:border-gold/50 text-xs font-medium text-white transition-colors"
            >
              <span className="text-gold font-semibold uppercase tracking-wider text-[10px] hidden md:inline">
                {project.genre}:
              </span>
              <span className="font-serif truncate max-w-[140px] sm:max-w-[200px]">{project.authorName}</span>
              <ChevronDown size={14} className="text-muted-foreground" />
            </button>

            {selectorOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 max-h-96 overflow-y-auto rounded-2xl bg-[#140b19] border border-glass-border p-2 shadow-2xl z-50 backdrop-blur-xl">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-gold border-b border-white/10 mb-1">
                  10 Interactive Mini Websites
                </div>
                {authorWebsites.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectProject(item);
                      setSelectorOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left text-xs flex items-center justify-between transition-colors ${
                      item.id === project.id ? "bg-primary/20 text-primary font-bold" : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <div>
                      <p className="font-serif">{item.authorName}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">{item.genre} • {item.bookTitle}</p>
                    </div>
                    <span className="text-[10px] text-gold">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center: Simulated Browser Address Bar */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs text-white/70 max-w-md w-full justify-center shadow-inner">
          <span className="text-emerald-400 text-xs">🔒</span>
          <span className="truncate font-mono text-[11px] text-white/90">{currentDomain}</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-gold/20 text-gold uppercase tracking-wider font-bold">
            Interactive Live Demo
          </span>
        </div>

        {/* Right: Viewport Mode Switcher + Contact CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Viewport switcher */}
          <div className="hidden sm:flex items-center rounded-lg bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setViewport("desktop")}
              title="Desktop View (100%)"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "desktop" ? "bg-primary text-primary-foreground shadow" : "text-white/60 hover:text-white"
              }`}
            >
              <Laptop size={15} />
            </button>
            <button
              onClick={() => setViewport("tablet")}
              title="Tablet View (768px)"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "tablet" ? "bg-primary text-primary-foreground shadow" : "text-white/60 hover:text-white"
              }`}
            >
              <Tablet size={15} />
            </button>
            <button
              onClick={() => setViewport("mobile")}
              title="Mobile View (390px)"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "mobile" ? "bg-primary text-primary-foreground shadow" : "text-white/60 hover:text-white"
              }`}
            >
              <Smartphone size={15} />
            </button>
          </div>

          <Button
            size="sm"
            onClick={onBookService}
            className="text-xs bg-gold hover:bg-gold-light text-[#140b19] font-bold shadow-lg shadow-gold/20"
          >
            <Sparkles size={13} className="mr-1.5" />
            <span className="hidden sm:inline">Book a Website Like This</span>
            <span className="sm:hidden">Book Now</span>
          </Button>

          <Button
            variant="icon"
            size="icon"
            onClick={onClose}
            className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close website preview"
          >
            <X size={18} />
          </Button>
        </div>
      </header>

      {/* Main Interactive Viewport Canvas */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#0a050d] p-0 sm:p-4 md:p-6 flex items-start justify-center">
        <div
          className={`w-full transition-all duration-300 ease-out shadow-2xl rounded-none sm:rounded-2xl border-0 sm:border border-white/10 overflow-hidden bg-black ${
            viewport === "desktop"
              ? "max-w-7xl"
              : viewport === "tablet"
              ? "max-w-[768px]"
              : "max-w-[390px] border-4 border-white/20 rounded-3xl my-2"
          }`}
        >
          {/* Simulated Browser Header Bar inside Canvas */}
          <div className="h-7 bg-[#1b1022] border-b border-white/10 px-4 flex items-center justify-between text-[11px] text-white/50 select-none">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-amber-500/80" />
              <span className="size-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="font-mono text-[10px] text-white/70 truncate max-w-xs">
              {project.authorName} — Official Author Platform ({project.genre})
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gold">DEMO</div>
          </div>

          {/* Interactive Mini Website Content */}
          <div className="h-full w-full overflow-y-auto">
            {renderWebsiteContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
