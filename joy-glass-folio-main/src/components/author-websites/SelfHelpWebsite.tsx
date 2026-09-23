import React, { useState } from "react";
import { CheckCircle2, Target, Zap, Clock, BookOpen, ShoppingBag, Star, Check, ArrowRight, Activity } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function SelfHelpWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [focusScore, setFocusScore] = useState<number | null>(null);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`self-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-[#0a1916] text-[#e6f4f1] font-sans antialiased selection:bg-[#34d399] selection:text-[#0a1916]">
      {/* High-Impact Announcement */}
      <div className="bg-[#13332c] border-b border-[#34d399]/30 py-2.5 px-6 text-center text-xs tracking-widest text-[#a7f3d0] uppercase font-bold flex items-center justify-center gap-2">
        <Target size={14} className="text-[#34d399]" />
        <span>THE #1 WALL STREET JOURNAL BESTSELLER ON HABIT MASTERY & TIME RECLAMATION</span>
        <Target size={14} className="text-[#34d399]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#34d399]/20 bg-[#0a1916]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-[#13332c] border border-[#34d399] flex items-center justify-center text-[#34d399]">
            <Zap size={18} />
          </div>
          <div>
            <span className="font-bold text-lg text-white">Dr. Julian O'Reilly</span>
            <span className="block text-[10px] tracking-widest text-[#34d399] uppercase font-bold">Habit Engineering Lab</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-[#a7f3d0]">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">The Method</button>
          <button onClick={() => scrollTo("diagnostic")} className="hover:text-white transition-colors">Focus Test</button>
          <button onClick={() => scrollTo("bio")} className="hover:text-white transition-colors">About Julian</button>
          <button onClick={() => scrollTo("newsletter")} className="hover:text-white transition-colors">7-Day Challenge</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-full bg-[#34d399] hover:bg-[#10b981] text-[#0a1916] font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#34d399]/25"
        >
          Claim Your Copy
        </button>
      </header>

      {/* Hero Section */}
      <section id="self-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase tracking-widest text-[#34d399] font-bold">Break Through Mental Fog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-tight tracking-tight">
              Mastering Focus in a World of Noise.
            </h1>
            <p className="text-sm sm:text-base text-[#bbf7d0] leading-relaxed max-w-lg">
              Reclaim 3 hours of lost daily productivity with the proven 4-pillar attentional framework used by Fortune 500 executives and Olympic athletes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-7 py-4 rounded-full bg-[#34d399] text-[#0a1916] font-black text-xs uppercase tracking-wider hover:bg-[#10b981] transition-transform hover:scale-105 shadow-xl shadow-[#34d399]/30"
              >
                Buy Mastering Focus Now
              </button>
              <button
                onClick={() => scrollTo("diagnostic")}
                className="px-7 py-4 rounded-full bg-[#13332c] border border-[#34d399]/40 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1e4e43] transition-colors"
              >
                Take Free 2-Min Focus Test
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-[#34d399]/20 blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src="/images/covers/mastering-focus.svg"
                alt="Mastering Focus"
                className="relative w-64 sm:w-76 rounded-2xl shadow-2xl border-2 border-[#34d399]/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 2-Minute Focus Diagnostic */}
      <section id="self-diagnostic" className="px-6 py-20 bg-[#0f2420] border-y border-[#34d399]/20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Activity size={32} className="mx-auto text-[#34d399]" />
          <h2 className="text-3xl sm:text-4xl text-white font-bold">Calculate Your Focus Leaks</h2>
          <p className="text-xs sm:text-sm text-[#a7f3d0]">How many times an hour do you unconsciously switch tabs or check your smartphone?</p>

          <div className="grid sm:grid-cols-3 gap-3 text-center font-bold text-xs uppercase tracking-wider">
            {[
              { label: "1 to 3 Times", score: 85, tag: "High Focus Discipline" },
              { label: "4 to 8 Times", score: 58, tag: "Moderate Attention Fragment" },
              { label: "9+ Times", score: 32, tag: "Severe Digital Exhaustion" },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => setFocusScore(btn.score)}
                className="p-5 rounded-2xl bg-[#0a1916] border border-[#34d399]/30 hover:border-[#34d399] text-white space-y-1 transition-all"
              >
                <div className="text-sm">{btn.label}</div>
                <div className="text-[10px] text-[#34d399]">{btn.tag}</div>
              </button>
            ))}
          </div>

          {focusScore !== null && (
            <div className="p-6 rounded-2xl bg-[#13332c] border border-[#34d399] text-white space-y-2 animate-fade-in">
              <span className="text-xs text-[#34d399] uppercase font-bold">Your Current Diagnostic Score</span>
              <div className="text-4xl font-black">{focusScore} / 100</div>
              <p className="text-xs text-[#bbf7d0] max-w-md mx-auto">
                {focusScore > 70
                  ? "You have solid baseline habits. Chapter 4 will help you reach elite hyperfocus states."
                  : "You are experiencing chronic context switching. Chapter 2's Dopamine Detox protocol will restore 2+ hours daily."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Author Bio */}
      <section id="self-bio" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-3xl overflow-hidden border-2 border-[#34d399]/40 p-2 bg-[#0f2420] shadow-2xl">
              <img
                src="/images/authors/dr-julian-oreilly.jpg"
                alt="Dr. Julian O'Reilly"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-[#34d399] font-bold">Behavioral Scientist & Coach</span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold">Dr. Julian O'Reilly</h2>
            <p className="text-sm sm:text-base text-[#bbf7d0] leading-relaxed">
              Dr. Julian O'Reilly has trained over 40,000 knowledge workers, startup founders, and graduate researchers in systematic habit modification and deep cognitive ergonomics.
            </p>
            <p className="text-sm sm:text-base text-[#bbf7d0] leading-relaxed">
              His podcast <em>The Focus Lab</em> is ranked among the top 10 productivity shows worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Day Focus Challenge Newsletter */}
      <section id="self-newsletter" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#13332c] to-[#0a1916] border border-[#34d399]/40 shadow-2xl">
          <Clock size={32} className="mx-auto text-[#34d399]" />
          <h2 className="text-3xl text-white font-bold mt-2">Join the Free 7-Day Focus Challenge</h2>
          <p className="text-xs sm:text-sm text-[#bbf7d0] mt-2 max-w-md mx-auto leading-relaxed">
            One 3-minute morning habit experiment delivered daily. Join over 85,000 disciplined professionals.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded-xl bg-[#0a1916] border border-[#34d399] text-[#34d399] text-xs font-bold">
              ✓ Day 1 Challenge activated! Check your inbox to begin tomorrow morning.
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
                placeholder="professional@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-[#0a1916] border border-[#34d399]/30 text-white text-xs placeholder:text-[#387565] focus:outline-none focus:border-[#34d399]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#34d399] hover:bg-[#10b981] text-[#0a1916] text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
              >
                Start Challenge
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#34d399]/20 bg-[#050f0d] text-center text-xs text-[#387565] space-y-2">
        <p>© 2026 Dr. Julian O'Reilly. Mastering Focus™. Designed with Madeline Joy.</p>
        <p className="text-[11px] text-[#34d399]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#0a1916] border border-[#34d399] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#34d399] font-bold">Select Format</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-lg bg-[#13332c] text-[#34d399]">✕</button>
            </div>
            <img src="/images/covers/mastering-focus.svg" alt="Mastering Focus" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#34d399]/40" />
            <h3 className="text-xl text-white font-bold">Mastering Focus</h3>
            <p className="text-xs text-[#bbf7d0] mb-4">Paperback, Kindle, Audible & Printable Journal</p>
            <div className="space-y-2 text-left">
              {["Amazon Prime Delivery", "Audible Audiobook (Narrated by Author)", "Barnes & Noble"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-lg bg-[#13332c] border border-[#34d399]/30 text-white flex items-center justify-between text-xs hover:bg-[#1e4e43]"
                >
                  <span className="font-bold">{b}</span>
                  <ArrowRight size={14} className="text-[#34d399]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
