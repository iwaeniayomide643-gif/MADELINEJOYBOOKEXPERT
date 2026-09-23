import React, { useState } from "react";
import { Sparkles, Cog, Heart, BookOpen, ShoppingBag, Star, Check, ArrowRight, Zap, HelpCircle } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function YoungAdultWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`ya-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-[#13091f] text-[#f5e8ff] font-sans antialiased selection:bg-[#c084fc] selection:text-[#13091f]">
      {/* BookTok Viral Banner */}
      <div className="bg-gradient-to-r from-[#9333ea] via-[#c084fc] to-[#db2777] py-2 px-4 text-center text-xs font-bold tracking-widest text-white uppercase flex items-center justify-center gap-2">
        <Zap size={14} className="fill-current text-amber-300" />
        <span>OVER 12 MILLION VIEWS ON BOOKTOK • THE CLOCKWORK KINGDOM IS OUT NOW</span>
        <Zap size={14} className="fill-current text-amber-300" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#c084fc]/20 bg-[#13091f]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-gradient-to-br from-[#c084fc] to-[#db2777] flex items-center justify-center text-white font-bold">
            <Cog size={18} className="animate-spin" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-wider text-white">BEATRIX STERLING</span>
            <span className="block text-[10px] tracking-widest text-[#c084fc] uppercase font-semibold">YA Steampunk Fantasy</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-[#e9d5ff]">
          <button onClick={() => scrollTo("hero")} className="hover:text-[#c084fc] transition-colors">The Novel</button>
          <button onClick={() => scrollTo("quiz")} className="hover:text-[#c084fc] transition-colors">Guild Quiz</button>
          <button onClick={() => scrollTo("author")} className="hover:text-[#c084fc] transition-colors">Beatrix</button>
          <button onClick={() => scrollTo("fanart")} className="hover:text-[#c084fc] transition-colors">BookTok VIP</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c084fc] to-[#db2777] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#c084fc]/30 hover:scale-105 transition-transform"
        >
          Get the Book
        </button>
      </header>

      {/* Hero Section */}
      <section id="ya-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c084fc]/20 border border-[#c084fc]/40 text-[#e9d5ff] text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} />
              BookTok Sensation
            </div>
            <h1 className="text-4xl sm:text-6xl text-white font-black tracking-tight leading-[1.05]">
              Cogs, Secrets & Golden Guilds.
            </h1>
            <p className="text-sm sm:text-base text-[#d8b4fe] leading-relaxed max-w-lg">
              In a floating sky-city powered by stolen lightning, a clockwork thief and a disgraced guild prince must pull off the heist of the century before their rebellion is crushed.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#c084fc] to-[#db2777] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#c084fc]/30 hover:scale-105 transition-transform"
              >
                Order Special Edition
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#200f36] border border-[#c084fc]/40 text-[#f5e8ff] text-xs font-bold uppercase tracking-wider hover:bg-[#2d164d] transition-colors"
              >
                Read Chapter One
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#c084fc]/40 to-[#db2777]/40 blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src="/images/covers/the-clockwork-kingdom.svg"
                alt="The Clockwork Kingdom"
                className="relative w-64 sm:w-76 rounded-2xl shadow-2xl border-2 border-[#c084fc]/50 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-3 -left-3 bg-[#240f3b] border border-[#c084fc]/60 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#e9d5ff] shadow-xl">
                ★ 4.9 Stars • 15,000+ Ratings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Guild Quiz */}
      <section id="ya-quiz" className="px-6 py-20 bg-[#1b0d2d] border-y border-[#c084fc]/20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <HelpCircle size={32} className="mx-auto text-[#c084fc]" />
          <h2 className="text-3xl sm:text-4xl text-white font-bold">Which Sky Guild Do You Belong To?</h2>
          <p className="text-xs sm:text-sm text-[#d8b4fe]">Take the 10-second sorting test to discover your rank in New Aethelgard.</p>

          <div className="grid sm:grid-cols-3 gap-3 text-left">
            {[
              { id: "clocksmith", name: "The Clocksmiths", desc: "Masters of automata, lockpicking, and forbidden steam mechanics." },
              { id: "aeronaut", name: "The Sky Aeronauts", desc: "Fearless pilots who rule the storm currents and lightning harpoons." },
              { id: "alchemist", name: "The Shadow Alchemists", desc: "Secret-keepers who distill poison and truth serums from ether." },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => setQuizAnswer(g.name)}
                className={`p-5 rounded-2xl border transition-all text-left ${
                  quizAnswer === g.name
                    ? "bg-gradient-to-br from-[#9333ea] to-[#db2777] border-white text-white shadow-xl"
                    : "bg-[#13091f] border-[#c084fc]/30 text-[#e9d5ff] hover:border-[#c084fc]"
                }`}
              >
                <h3 className="font-bold text-base mb-1">{g.name}</h3>
                <p className="text-xs text-[#d8b4fe] leading-relaxed">{g.desc}</p>
              </button>
            ))}
          </div>

          {quizAnswer && (
            <div className="p-4 rounded-xl bg-[#2b1248] border border-[#c084fc] text-white text-xs font-bold animate-fade-in">
              🎉 Congratulations! You have been initiated into <span className="text-[#c084fc]">{quizAnswer}</span>.
            </div>
          )}
        </div>
      </section>

      {/* Author Profile */}
      <section id="ya-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-3xl overflow-hidden border-2 border-[#c084fc]/40 shadow-2xl bg-[#240f3b]">
              <img
                src="/images/authors/beatrix-sterling.jpg"
                alt="Beatrix Sterling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-[#c084fc] font-bold">The Author</span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold">Beatrix Sterling</h2>
            <p className="text-sm sm:text-base text-[#d8b4fe] leading-relaxed">
              Beatrix Sterling writes high-octane Young Adult fantasy filled with witty banter, morally grey heroines, and inventive worldbuilding. Her TikTok community has grown to over 300,000 passionate book lovers.
            </p>
            <p className="text-sm sm:text-base text-[#d8b4fe] leading-relaxed">
              When she isn't writing at odd hours, Beatrix collects antique skeleton keys and hosts live writing sprints on YouTube.
            </p>
          </div>
        </div>
      </section>

      {/* BookTok VIP Club */}
      <section id="ya-fanart" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#2f144d] to-[#160a24] border border-[#c084fc]/40 shadow-2xl">
          <Sparkles size={36} className="mx-auto text-[#c084fc]" />
          <h2 className="text-3xl text-white font-bold mt-2">Join Beatrix's VIP ARC Squad</h2>
          <p className="text-xs sm:text-sm text-[#d8b4fe] mt-2 max-w-md mx-auto leading-relaxed">
            Get early digital review copies, exclusive character art, and first access to signed book boxes.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded-xl bg-[#13091f] border border-[#c084fc] text-[#e9d5ff] text-xs font-bold">
              ✨ You're on the VIP ARC list! Check your inbox for your welcome pack.
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
                placeholder="reader@booktok.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-[#13091f] border border-[#c084fc]/30 text-white text-xs placeholder:text-[#8b5cf6] focus:outline-none focus:border-[#c084fc]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#c084fc] to-[#db2777] text-white text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Join ARC Squad
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#c084fc]/20 bg-[#0c0514] text-center text-xs text-[#8b5cf6] space-y-2">
        <p>© 2026 Beatrix Sterling. The Clockwork Kingdom Series. Designed with Madeline Joy.</p>
        <p className="text-[11px] text-[#c084fc]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#1b0d2d] border border-[#c084fc] max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#c084fc]/20 pb-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-[#c084fc] font-bold">Chapter One — The Sky Heist</span>
              <button onClick={() => setSampleOpen(false)} className="size-7 rounded-full bg-[#2b1248] text-[#c084fc]">✕</button>
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#f5e8ff]">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#c084fc] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Stealing an airship engine was easy. Escaping the Grand Inquisitor’s mechanical hounds while falling twelve thousand feet was slightly more complicated.
              </p>
              <p>
                Aria hooked her brass grapple into the brass underbelly of the royal cruiser, grinning through the wind. "Rule number one of the Clocksmiths: never look down unless you're ready to jump."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#c084fc]/20 flex justify-end">
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c084fc] to-[#db2777] text-white text-xs font-bold uppercase tracking-wider"
              >
                Order Book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#1b0d2d] border border-[#c084fc] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#c084fc] font-bold">Order Your Copy</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-full bg-[#2b1248] text-[#c084fc]">✕</button>
            </div>
            <img src="/images/covers/the-clockwork-kingdom.svg" alt="The Clockwork Kingdom" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#c084fc]/40" />
            <h3 className="text-xl text-white font-bold">The Clockwork Kingdom</h3>
            <p className="text-xs text-[#d8b4fe] mb-4">Special Sprayed-Edge Edition Available</p>
            <div className="space-y-2 text-left">
              {["Barnes & Noble Special Sprayed Edges", "Amazon Hardcover & Paperback", "Bookshop.org Indie Support"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-xl bg-[#2b1248] border border-[#c084fc]/30 text-white flex items-center justify-between text-xs hover:bg-[#3d1a66]"
                >
                  <span className="font-bold">{b}</span>
                  <ArrowRight size={14} className="text-[#c084fc]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
