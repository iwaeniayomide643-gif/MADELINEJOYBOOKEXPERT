import React, { useState } from "react";
import { Feather, BookOpen, Quote, Volume2, Star, Check, ArrowRight, Calendar, Sparkles } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function LiteraryWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`lit-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-[#171310] text-[#f4eae1] font-serif antialiased selection:bg-[#c4a482] selection:text-[#171310]">
      {/* Top Archival Header */}
      <div className="border-b border-[#c4a482]/20 py-2.5 px-6 text-center text-xs tracking-[0.25em] text-[#d4b99b] uppercase font-sans font-medium flex items-center justify-center gap-2">
        <Sparkles size={12} className="text-[#c4a482]" />
        <span>LONGLISTED FOR THE 2025 INTERNATIONAL LITERARY MEDAL</span>
        <Sparkles size={12} className="text-[#c4a482]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#c4a482]/15 bg-[#171310]/95 backdrop-blur-md px-6 py-5 flex items-center justify-between font-sans">
        <div>
          <span className="font-serif text-2xl tracking-wide font-normal text-[#fff9f4]">Soraya Al-Mansoor</span>
          <span className="block text-[10px] tracking-[0.25em] text-[#c4a482] uppercase">Poetry & Literary Essays</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#d4b99b]">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">Collection</button>
          <button onClick={() => scrollTo("poetry")} className="hover:text-white transition-colors">Verse & Audio</button>
          <button onClick={() => scrollTo("bio")} className="hover:text-white transition-colors">Biography</button>
          <button onClick={() => scrollTo("press")} className="hover:text-white transition-colors">Critical Praise</button>
          <button onClick={() => scrollTo("letters")} className="hover:text-white transition-colors">The Journal</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-full border border-[#c4a482] hover:bg-[#c4a482] hover:text-[#171310] text-[#f4eae1] text-xs uppercase tracking-widest transition-all duration-300"
        >
          Acquire Volume
        </button>
      </header>

      {/* Hero Section */}
      <section id="lit-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#c4a482] font-semibold">Featured Volume</span>
            <h1 className="text-4xl sm:text-6xl text-[#fff9f4] font-normal leading-[1.12]">
              Dust and Jasmine
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#d1beaf] leading-relaxed max-w-lg font-light">
              A luminous bilingual collection of poetry and autobiographical vignettes exploring displacement, fragrance, Mediterranean shorelines, and the architecture of memory.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 font-sans">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#c4a482] text-[#171310] font-semibold text-xs uppercase tracking-widest hover:bg-[#d6bba0] transition-colors"
              >
                Purchase Clothbound Edition
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-6 py-3.5 rounded-full border border-[#c4a482]/30 text-[#f4eae1] text-xs uppercase tracking-widest hover:border-[#c4a482] transition-colors"
              >
                Read Selected Stanzas
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative p-3 border border-[#c4a482]/30 rounded-2xl bg-[#1f1915] shadow-2xl">
              <img
                src="/images/covers/dust-and-jasmine.svg"
                alt="Dust and Jasmine"
                className="w-64 sm:w-76 rounded-xl shadow-xl border border-[#c4a482]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audio Verse Section */}
      <section id="lit-poetry" className="px-6 py-16 bg-[#1f1a16] border-y border-[#c4a482]/15">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Feather size={28} className="mx-auto text-[#c4a482]" />
          <h2 className="text-3xl sm:text-4xl text-[#fff9f4]">An Excerpt in Two Tongues</h2>
          <blockquote className="italic text-lg sm:text-xl text-[#f4eae1] leading-relaxed max-w-xl mx-auto">
            “We carry the dust of our grandparents' orchards in the lining of our coat pockets, hoping the wind will mistake us for home.”
          </blockquote>

          <div className="pt-2 font-sans">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2a221d] border border-[#c4a482]/40 text-[#c4a482] text-xs uppercase tracking-wider hover:bg-[#382d27] transition-colors"
            >
              <Volume2 size={15} />
              <span>{isPlayingAudio ? "Pause Recitation (0:45)" : "Listen to Author's Recitation (0:45)"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section id="lit-bio" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-2xl overflow-hidden border border-[#c4a482]/40 p-2 bg-[#1f1915]">
              <img
                src="/images/authors/soraya-al-mansoor.jpg"
                alt="Soraya Al-Mansoor"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left font-sans">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c4a482] font-semibold">About the Poet</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fff9f4]">Soraya Al-Mansoor</h2>
            <p className="text-sm sm:text-base text-[#d1beaf] leading-relaxed font-light">
              Soraya Al-Mansoor is a poet, essayist, and translator born in Beirut and currently living between Oxford and Athens. Her work has appeared in <em>The Paris Review</em>, <em>Granta</em>, and <em>The Poetry Review</em>.
            </p>
            <p className="text-sm sm:text-base text-[#d1beaf] leading-relaxed font-light">
              She holds the Chair of Comparative Poetics and regularly keynotes international literary colloquia on translation and migration poetics.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Acclaim */}
      <section id="lit-press" className="px-6 py-16 bg-[#1f1a16] border-t border-[#c4a482]/15">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-[#171310] border border-[#c4a482]/20 space-y-3">
            <p className="italic text-base text-[#f4eae1]">“Devastatingly precise and breathtakingly gentle. A collection destined to become an heirloom.”</p>
            <p className="font-sans text-xs uppercase tracking-widest text-[#c4a482] font-semibold">— The Times Literary Supplement</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#171310] border border-[#c4a482]/20 space-y-3">
            <p className="italic text-base text-[#f4eae1]">“Al-Mansoor handles memory like spun glass. An essential voice in contemporary world literature.”</p>
            <p className="font-sans text-xs uppercase tracking-widest text-[#c4a482] font-semibold">— Guardian Books</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="lit-letters" className="px-6 py-20 max-w-3xl mx-auto text-center font-sans">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#231d18] border border-[#c4a482]/30">
          <h2 className="font-serif text-3xl text-[#fff9f4]">Letters from Soraya</h2>
          <p className="text-xs sm:text-sm text-[#d1beaf] mt-2 max-w-md mx-auto leading-relaxed">
            A quarterly private essay on translation, books, and quiet observations from coastal Greece.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded-full bg-[#171310] border border-[#c4a482] text-[#d4b99b] text-xs">
              Thank you. You will receive the next seasonal dispatch.
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
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-[#171310] border border-[#c4a482]/30 text-white text-xs placeholder:text-[#806f62] focus:outline-none focus:border-[#c4a482]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#c4a482] hover:bg-[#d6bba0] text-[#171310] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#c4a482]/15 bg-[#120e0c] text-center font-sans text-xs text-[#806f62] space-y-2">
        <p>© 2026 Soraya Al-Mansoor. Representation: Madeline Joy Author Services.</p>
        <p className="text-[11px] text-[#c4a482]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#171310] border border-[#c4a482] max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#c4a482]/20 pb-3 mb-4 font-sans">
              <span className="text-xs uppercase tracking-widest text-[#c4a482]">Selected Stanzas</span>
              <button onClick={() => setSampleOpen(false)} className="size-7 rounded-full bg-[#2a221d] text-[#c4a482]">✕</button>
            </div>
            <div className="space-y-4 text-base sm:text-lg leading-loose text-[#f4eae1]">
              <p className="italic">
                The sea at dusk does not remember the names of fleets,<br />
                only the salt they surrendered.<br />
                In the orchard, the orange blossoms open like quiet hands<br />
                asking nothing of the night.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#c4a482]/20 flex justify-end font-sans">
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2 rounded-full bg-[#c4a482] text-[#171310] text-xs font-bold uppercase tracking-wider"
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
          <div className="bg-[#171310] border border-[#c4a482] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#c4a482] font-semibold">Clothbound Edition</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-full bg-[#2a221d] text-[#c4a482]">✕</button>
            </div>
            <img src="/images/covers/dust-and-jasmine.svg" alt="Dust and Jasmine" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#c4a482]/30" />
            <h3 className="font-serif text-xl text-[#fff9f4]">Dust and Jasmine</h3>
            <p className="text-xs text-[#d1beaf] mb-4">Faber & Faber / Independent Bookshops</p>
            <div className="space-y-2 text-left">
              {["Bookshop.org (Supports Local Indie Stores)", "Waterstones & Blackwell's", "Amazon Worldwide"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-xl bg-[#231d18] border border-[#c4a482]/30 text-white flex items-center justify-between text-xs hover:bg-[#302720]"
                >
                  <span>{b}</span>
                  <ArrowRight size={14} className="text-[#c4a482]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
