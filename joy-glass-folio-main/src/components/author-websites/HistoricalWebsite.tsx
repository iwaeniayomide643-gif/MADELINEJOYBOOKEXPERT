import React, { useState } from "react";
import { Landmark, Scroll, Clock, BookOpen, ShoppingBag, Star, Check, ArrowRight, Sparkles } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function HistoricalWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [activeTimelineYear, setActiveTimelineYear] = useState<"1888" | "1892" | "1899">("1892");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`hist-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const timelineData = {
    "1888": {
      event: "The Great Blizzard & The Gilded Gala",
      desc: "Lord Sterling unveils the controversial Newport shipping monopoly, sparking the silent feud that divides New York high society.",
    },
    "1892": {
      event: "The Secret Ball at Blackwood Manor",
      desc: "Eleanor Vance discovers the ledger that proves her family's shipping empire was financed with contraband Victorian patents.",
    },
    "1899": {
      event: "The Turn of the Century Trial",
      desc: "The dramatic courtroom climax that exposed Newport's most gilded dynasties before the eyes of the world.",
    },
  };

  return (
    <div className="min-h-full bg-[#1b1009] text-[#fbeee0] font-serif antialiased selection:bg-[#dcb370] selection:text-[#1b1009]">
      {/* Victorian Banner */}
      <div className="bg-[#2e190e] border-b border-[#dcb370]/30 py-2.5 px-6 text-center text-xs tracking-[0.25em] text-[#e8ca95] uppercase font-sans font-bold flex items-center justify-center gap-2">
        <Landmark size={13} className="text-[#dcb370]" />
        <span>HISTORICAL NOVEL SOCIETY PICK OF THE YEAR • WHISPERS OF THE GILDED COAST</span>
        <Landmark size={13} className="text-[#dcb370]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#dcb370]/20 bg-[#1b1009]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between font-sans">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-[#2e190e] border border-[#dcb370] flex items-center justify-center font-serif text-[#dcb370] font-bold">
            HV
          </div>
          <div>
            <span className="font-serif text-xl tracking-wide font-bold text-[#fff7ec]">Helena Vane</span>
            <span className="block text-[10px] tracking-[0.25em] text-[#dcb370] uppercase">Victorian Historical Fiction</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-semibold text-[#e8ca95]">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">The Novel</button>
          <button onClick={() => scrollTo("timeline")} className="hover:text-white transition-colors">1890s Timeline</button>
          <button onClick={() => scrollTo("author")} className="hover:text-white transition-colors">Helena Vane</button>
          <button onClick={() => scrollTo("club")} className="hover:text-white transition-colors">Book Club Kit</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-full bg-[#dcb370] hover:bg-[#c99f5b] text-[#1b1009] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#dcb370]/20"
        >
          Acquire Hardcover
        </button>
      </header>

      {/* Hero Section */}
      <section id="hist-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#dcb370] font-bold">A Victorian Drama of Ambition & Salt</span>
            <h1 className="text-4xl sm:text-6xl text-[#fff7ec] font-bold leading-[1.1]">
              Whispers of the Gilded Coast
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#d8bead] leading-relaxed max-w-lg font-light">
              In 1892 Newport, Rhode Island, behind the marble terraces and champagne-soaked cotillions, Eleanor Vance must navigate high-society intrigue and treacherous maritime secrets to save her family from ruin.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 font-sans">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#dcb370] text-[#1b1009] font-bold text-xs uppercase tracking-widest hover:bg-[#c99f5b] transition-colors shadow-xl"
              >
                Purchase Foil Edition
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-6 py-3.5 rounded-full border border-[#dcb370]/40 text-[#fbeee0] text-xs uppercase tracking-widest hover:border-[#dcb370] transition-colors"
              >
                Read Victorian Excerpt
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative p-2 border-2 border-[#dcb370]/40 rounded-2xl bg-[#26150c] shadow-2xl">
              <img
                src="/images/covers/whispers-of-the-gilded-coast.svg"
                alt="Whispers of the Gilded Coast"
                className="w-64 sm:w-76 rounded-xl shadow-2xl border border-[#dcb370]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1890s Interactive Timeline */}
      <section id="hist-timeline" className="px-6 py-20 bg-[#24140b] border-y border-[#dcb370]/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#dcb370] font-bold">Historical Research Vault</span>
            <h2 className="text-3xl sm:text-4xl text-[#fff7ec] mt-1 font-bold">The Newport Dynasty Timeline</h2>
          </div>

          <div className="flex justify-center gap-3 font-sans">
            {(["1888", "1892", "1899"] as const).map((y) => (
              <button
                key={y}
                onClick={() => setActiveTimelineYear(y)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all ${
                  activeTimelineYear === y
                    ? "bg-[#dcb370] text-[#1b1009] border-[#dcb370]"
                    : "bg-[#1b1009] text-[#e8ca95] border-[#dcb370]/30 hover:border-[#dcb370]"
                }`}
              >
                Year {y}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#1b1009] border border-[#dcb370]/40 text-left space-y-3">
            <div className="flex items-center gap-2 font-sans text-xs font-bold text-[#dcb370] uppercase">
              <Clock size={16} />
              <span>Historical Anchor — Year {activeTimelineYear}</span>
            </div>
            <h3 className="text-2xl text-[#fff7ec] font-bold">{timelineData[activeTimelineYear].event}</h3>
            <p className="font-sans text-sm text-[#d8bead] leading-relaxed font-light">{timelineData[activeTimelineYear].desc}</p>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section id="hist-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-2xl overflow-hidden border-2 border-[#dcb370]/40 p-2 bg-[#26150c] shadow-2xl">
              <img
                src="/images/authors/helena-vane.jpg"
                alt="Helena Vane"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left font-sans">
            <span className="text-xs uppercase tracking-[0.25em] text-[#dcb370] font-bold">Archival Novelist</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fff7ec] font-bold">Helena Vane</h2>
            <p className="text-sm sm:text-base text-[#d8bead] leading-relaxed font-light">
              Helena Vane is a historian and novelist specializing in late 19th-century American and British social history. Her novels are praised by historians for their scrupulous archival authenticity and gripping narrative pace.
            </p>
            <p className="text-sm sm:text-base text-[#d8bead] leading-relaxed font-light">
              She lectures at historical societies and leads private research tours across historic Newport estates and Boston archives.
            </p>
          </div>
        </div>
      </section>

      {/* Book Club Kit & Newsletter */}
      <section id="hist-club" className="px-6 py-20 max-w-3xl mx-auto text-center font-sans">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#28160d] border border-[#dcb370]/40 shadow-2xl">
          <Scroll size={36} className="mx-auto text-[#dcb370]" />
          <h2 className="font-serif text-3xl text-[#fff7ec] font-bold mt-2">Download the Victorian Book Club Kit</h2>
          <p className="text-xs sm:text-sm text-[#d8bead] mt-2 max-w-md mx-auto leading-relaxed">
            Includes 15 discussion questions, archival Newport cocktail recipes, and author notes on Gilded Age society.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded-xl bg-[#1b1009] border border-[#dcb370] text-[#e8ca95] text-xs">
              Check your inbox! The high-resolution Book Club Kit PDF has been sent.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setNewsletterSent(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6"
            >
              <input
                type="email"
                required
                placeholder="reader@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-[#1b1009] border border-[#dcb370]/30 text-white text-xs placeholder:text-[#8c6d59] focus:outline-none focus:border-[#dcb370]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#dcb370] hover:bg-[#c99f5b] text-[#1b1009] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Get Club Kit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#dcb370]/20 bg-[#120a05] text-center font-sans text-xs text-[#8c6d59] space-y-2">
        <p>© 2026 Helena Vane. Historical Fiction Archives. Represented by Madeline Joy.</p>
        <p className="text-[11px] text-[#dcb370]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#1b1009] border border-[#dcb370] max-w-2xl w-full max-h-[85vh] rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#dcb370]/20 pb-3 mb-4 font-sans">
              <span className="text-xs uppercase tracking-widest text-[#dcb370] font-bold">Chapter One Excerpt</span>
              <button onClick={() => setSampleOpen(false)} className="size-7 rounded-full bg-[#2e190e] text-[#dcb370]">✕</button>
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#fbeee0]">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#dcb370] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                The fog rolled off Rhode Island Sound like grey velvet, muffling the clip-clop of the carriage horses as they turned into the grand iron gates of The Breakers.
              </p>
              <p>
                Eleanor tightened the silk gloves over her fingers. Inside her reticule lay the ledger page that could ruin the Vanderbilts—or destroy her own father.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dcb370]/20 flex justify-end font-sans">
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2.5 rounded-full bg-[#dcb370] text-[#1b1009] text-xs font-bold uppercase tracking-wider"
              >
                Order Book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 font-sans">
          <div className="bg-[#1b1009] border border-[#dcb370] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#dcb370] font-bold">Hardcover Selection</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-full bg-[#2e190e] text-[#dcb370]">✕</button>
            </div>
            <img src="/images/covers/whispers-of-the-gilded-coast.svg" alt="Whispers of the Gilded Coast" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#dcb370]/30" />
            <h3 className="font-serif text-xl text-[#fff7ec] font-bold">Whispers of the Gilded Coast</h3>
            <p className="text-xs text-[#d8bead] mb-4">IngramSpark, Barnes & Noble, Amazon</p>
            <div className="space-y-2 text-left">
              {["Barnes & Noble Hardcover Edition", "Amazon Prime 1-Day", "Independent Historical Bookshops"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-xl bg-[#28160d] border border-[#dcb370]/30 text-white flex items-center justify-between text-xs hover:bg-[#381f13]"
                >
                  <span className="font-bold text-[#e8ca95]">{b}</span>
                  <ArrowRight size={14} className="text-[#dcb370]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
