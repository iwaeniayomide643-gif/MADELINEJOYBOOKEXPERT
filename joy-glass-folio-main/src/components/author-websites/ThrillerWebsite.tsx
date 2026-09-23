import React, { useState } from "react";
import { Terminal, ShieldAlert, Key, Eye, EyeOff, Radio, BookOpen, ShoppingBag, Check, ArrowRight, Lock, Activity } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function ThrillerWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [redacted, setRedacted] = useState(true);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`thriller-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-[#050b09] text-[#e1f5ec] font-mono antialiased selection:bg-[#4ade80] selection:text-[#050b09]">
      {/* Classified Mission Banner */}
      <div className="bg-[#0b1f18] px-4 py-2 border-b border-[#4ade80]/30 text-center text-xs tracking-[0.25em] text-[#4ade80] flex items-center justify-center gap-3">
        <Activity size={14} className="animate-pulse" />
        <span>CLASSIFIED DOSSIER // ECHELON PROTOCOL ACTIVE // LEVEL 5 CLEARANCE</span>
        <Activity size={14} className="animate-pulse" />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-[#4ade80]/20 bg-[#050b09]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded bg-[#102a21] border border-[#4ade80] flex items-center justify-center text-[#4ade80] font-bold text-sm">
            &gt;_
          </div>
          <div>
            <span className="font-bold text-lg tracking-wider text-white">DECLAN CROSS</span>
            <span className="block text-[10px] tracking-[0.2em] text-[#4ade80] uppercase">Techno-Thriller Ops</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-[#86efac]/80 font-bold">
          <button onClick={() => scrollTo("hero")} className="hover:text-[#4ade80] transition-colors">[ 01_MISSION ]</button>
          <button onClick={() => scrollTo("dossier")} className="hover:text-[#4ade80] transition-colors">[ 02_DOSSIER ]</button>
          <button onClick={() => scrollTo("author")} className="hover:text-[#4ade80] transition-colors">[ 03_AUTHOR ]</button>
          <button onClick={() => scrollTo("intel")} className="hover:text-[#4ade80] transition-colors">[ 04_INTEL_FEED ]</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-4 py-2 rounded bg-[#4ade80] hover:bg-[#22c55e] text-[#050b09] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg shadow-[#4ade80]/20"
        >
          <Lock size={13} />
          <span>Intercept Copy</span>
        </button>
      </header>

      {/* Hero Section */}
      <section id="thriller-hero" className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#122e23] border border-[#4ade80]/40 text-[#4ade80] text-xs uppercase tracking-widest">
              <ShieldAlert size={14} />
              <span>National Bestseller in Espionage</span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
              WHEN THE GRID DIES, THE REAL WAR BEGINS.
            </h1>

            <p className="text-sm sm:text-base text-[#a7f3d0] leading-relaxed max-w-xl font-sans">
              A rogue algorithmic killswitch has infected the Western Hemisphere's quantum power grid. Former CIA cryptanalyst Marcus Vance has 36 hours to trace the signal before nationwide blackout turns into total collapse.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-6 py-3.5 rounded bg-[#4ade80] text-[#050b09] font-black text-xs uppercase tracking-widest hover:bg-[#22c55e] transition-colors flex items-center gap-2 shadow-xl shadow-[#4ade80]/25"
              >
                <Key size={16} />
                <span>Acquire Terminal Protocol</span>
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-6 py-3.5 rounded bg-[#102a21] border border-[#4ade80]/40 text-[#4ade80] font-bold text-xs uppercase tracking-widest hover:bg-[#1a3d31] transition-colors flex items-center gap-2"
              >
                <Terminal size={16} />
                <span>Decrypt Chapter 1</span>
              </button>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-[#86efac]">
              <span className="text-[#4ade80]">★★★</span>
              <span>"Tom Clancy pacing meets Mr. Robot precision." — Global Thriller Review</span>
            </div>
          </div>

          {/* Book Display */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-xl bg-[#4ade80]/20 blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src="/images/covers/terminal-protocol.svg"
                alt="Terminal Protocol"
                className="relative w-64 sm:w-76 rounded-xl border border-[#4ade80]/40 shadow-2xl"
              />
              <div className="absolute top-3 right-3 bg-[#050b09] border border-[#4ade80] px-2.5 py-1 rounded text-[10px] text-[#4ade80] font-bold">
                ENCRYPTED_v2.0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dossier Terminal */}
      <section id="thriller-dossier" className="px-6 py-20 bg-[#081510] border-y border-[#4ade80]/20">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#4ade80]/20 pb-4">
            <div>
              <span className="text-xs text-[#4ade80] font-bold uppercase tracking-widest">// CLASSIFIED_DOCUMENT_ARCHIVE</span>
              <h2 className="text-2xl text-white font-bold font-sans mt-0.5">Project Cerberus Transcript</h2>
            </div>
            <button
              onClick={() => setRedacted(!redacted)}
              className="px-4 py-2 rounded bg-[#122e23] border border-[#4ade80] text-[#4ade80] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#1c4535] transition-colors"
            >
              {redacted ? <Eye size={14} /> : <EyeOff size={14} />}
              <span>{redacted ? "DE-REDACT INTELLIGENCE" : "APPLY TOP-SECRET CENSORSHIP"}</span>
            </button>
          </div>

          <div className="p-6 rounded-xl bg-[#040806] border border-[#4ade80]/30 space-y-4 text-xs sm:text-sm text-[#86efac] leading-relaxed">
            <p>
              <span className="text-white font-bold">INTERCEPT_04:12 UTC:</span> Target asset confirmed access to the Geneva undersea quantum cable junction.
            </p>
            <p>
              {redacted ? (
                <span>
                  The payload deployed under codename <span className="bg-[#4ade80] text-[#040806] px-2 py-0.5 rounded font-bold">[REDACTED_BY_NSA]</span> has successfully bypassed Tier-1 firewalls in 14 metropolitan grids.
                </span>
              ) : (
                <span className="text-[#4ade80] font-bold bg-[#122e23] p-1 rounded">
                  The payload deployed under codename OMEGA-ZERO has successfully bypassed Tier-1 firewalls in 14 metropolitan grids across North America and Frankfurt.
                </span>
              )}
            </p>
            <p>
              Primary operative Marcus Vance is en route. Engagement rule: <span className="text-white font-bold">TERMINATION AUTHORIZED UPON VISUAL CONTACT.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Author Profile */}
      <section id="thriller-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="size-60 sm:size-68 rounded-xl overflow-hidden border-2 border-[#4ade80]/40 shadow-2xl bg-[#081510]">
                <img
                  src="/images/authors/declan-cross.jpg"
                  alt="Declan Cross"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#4ade80] text-[#050b09] px-3 py-1 rounded text-xs font-bold">
                VIRGINIA, USA
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-left font-sans">
            <span className="text-xs uppercase tracking-widest text-[#4ade80] font-bold font-mono">// BACKGROUND_CHECK</span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold font-sans">Declan Cross</h2>
            <p className="text-sm text-[#a7f3d0] leading-relaxed">
              Declan Cross spent twelve years as an information security specialist and federal intelligence consultant before turning to fiction. His thrillers are celebrated for their chilling technical accuracy, real-world cyber warfare mechanics, and unrelenting tension.
            </p>
            <p className="text-sm text-[#a7f3d0] leading-relaxed">
              Cross advises defense technology summits and has been featured on WIRED, NPR, and the Cyber Threat Dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* VIP Intelligence Dispatch */}
      <section id="thriller-intel" className="px-6 py-20 max-w-4xl mx-auto text-center font-sans">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0a1b14] border border-[#4ade80]/40 shadow-2xl">
          <Radio size={32} className="mx-auto text-[#4ade80] animate-pulse" />
          <h2 className="text-3xl text-white font-bold mt-2">Subscribe to Declan's Red Team Brief</h2>
          <p className="text-xs sm:text-sm text-[#a7f3d0] max-w-md mx-auto mt-2 leading-relaxed">
            Monthly insights into real-world espionage, classified cybersecurity developments, and advance chapters of upcoming thrillers.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded bg-[#050b09] border border-[#4ade80] text-[#4ade80] text-xs font-mono flex items-center justify-center gap-2">
              <Check size={16} />
              <span>CLEARANCE GRANTED. SECURE DISPATCH SENT TO YOUR INBOX.</span>
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
                placeholder="operative@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded bg-[#040806] border border-[#4ade80]/40 text-white placeholder:text-[#52796f] text-xs font-mono focus:outline-none focus:border-[#4ade80]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded bg-[#4ade80] hover:bg-[#22c55e] text-[#050b09] text-xs font-black uppercase tracking-widest font-mono transition-colors"
              >
                Grant Access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#4ade80]/20 bg-[#030605] text-center text-xs text-[#52796f] space-y-2">
        <p>© 2026 Declan Cross. Tactical Publishing Network. Designed with Madeline Joy.</p>
        <p className="text-[11px] text-[#4ade80]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#050b09] border border-[#4ade80] max-w-2xl w-full max-h-[85vh] rounded-xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left font-mono">
            <div className="flex justify-between items-center border-b border-[#4ade80]/30 pb-3 mb-4">
              <div>
                <span className="text-[10px] text-[#4ade80] font-bold">[ TRANSMISSION_START ]</span>
                <h3 className="text-xl text-white font-bold font-sans">Terminal Protocol — 00:00:00</h3>
              </div>
              <button
                onClick={() => setSampleOpen(false)}
                className="size-7 rounded bg-[#102a21] text-[#4ade80] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-[#a7f3d0] leading-relaxed">
              <p className="text-white font-bold">
                02:14:09 EST — Langley, Virginia.
              </p>
              <p>
                The third floor of the Cyber Threat Center went dead quiet when the telemetry monitor in Sector 4 flipped from green to blood-red.
              </p>
              <p>
                "It's not an intrusion," Vance said, leaning over the terminal screen. "It's an eviction. Someone just rewrote the root SSL certificates for every power substation from Boston to Richmond."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#4ade80]/30 flex justify-between items-center">
              <span className="text-xs text-[#86efac]">420-Page Paperback / Ebook</span>
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-4 py-2 rounded bg-[#4ade80] text-[#050b09] text-xs font-black uppercase tracking-wider"
              >
                Order Book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 font-mono">
          <div className="bg-[#050b09] border border-[#4ade80] max-w-md w-full rounded-xl p-6 shadow-2xl text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-[#4ade80] font-bold">[ SELECT_DISTRIBUTOR ]</span>
              <button
                onClick={() => setBuyOpen(false)}
                className="size-7 rounded bg-[#102a21] text-[#4ade80] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <img
              src="/images/covers/terminal-protocol.svg"
              alt="Terminal Protocol"
              className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#4ade80]/40"
            />
            <h3 className="text-lg text-white font-bold font-sans">Terminal Protocol</h3>
            <p className="text-xs text-[#86efac] mb-6">Kindle, Audible, Hardcover, Mass-Market Paperback</p>

            <div className="space-y-2 text-left">
              {["Amazon KDP & Prime", "Barnes & Noble", "Apple Books", "Audible Audio"].map((r, i) => (
                <button
                  key={i}
                  onClick={() => {
                    alert(`Demo trigger: Intercepting order through ${r}.`);
                    setBuyOpen(false);
                  }}
                  className="w-full p-3 rounded bg-[#081510] hover:bg-[#102a21] border border-[#4ade80]/30 text-white flex items-center justify-between text-xs"
                >
                  <span className="font-bold text-[#e1f5ec]">{r}</span>
                  <ArrowRight size={14} className="text-[#4ade80]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
