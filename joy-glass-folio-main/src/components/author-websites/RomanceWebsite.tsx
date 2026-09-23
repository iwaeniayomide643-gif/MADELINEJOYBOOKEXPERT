import React, { useState } from "react";
import { Heart, BookOpen, ShoppingBag, Sparkles, Check, Music, Star, ArrowRight, Mail, Compass, Share2 } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function RomanceWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState<"book" | "playlist" | "tropes">("book");

  const scrollTo = (id: string) => {
    document.getElementById(`romance-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-[#1c0c16] text-[#f8ede3] font-sans antialiased selection:bg-[#c85a7e] selection:text-white">
      {/* Editorial Announcement Bar */}
      <div className="bg-gradient-to-r from-[#5a1c38] via-[#8c3258] to-[#5a1c38] px-4 py-2 text-center text-xs font-medium tracking-[0.2em] text-[#fde8ef] flex items-center justify-center gap-2">
        <Sparkles size={13} className="text-[#f7c2d2]" />
        <span>USA TODAY BESTSELLER • THE AUTUMN ATELIER IS NOW AVAILABLE WORLDWIDE</span>
        <Sparkles size={13} className="text-[#f7c2d2]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#f7c2d2]/15 bg-[#1c0c16]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-[#c85a7e]/20 border border-[#c85a7e] flex items-center justify-center font-serif text-[#f7c2d2] font-bold text-lg">
            CL
          </div>
          <div>
            <span className="font-serif text-xl tracking-wide font-semibold text-[#fff5ea]">Camille Laurent</span>
            <span className="block text-[10px] tracking-[0.25em] text-[#df8a9e] uppercase font-medium">Parisian Romance</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium text-[#f5d5de]">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollTo("books")} className="hover:text-white transition-colors">The Novel</button>
          <button onClick={() => scrollTo("author")} className="hover:text-white transition-colors">About Camille</button>
          <button onClick={() => scrollTo("extras")} className="hover:text-white transition-colors">Bonus & Playlist</button>
          <button onClick={() => scrollTo("newsletter")} className="hover:text-white transition-colors">VIP Readers</button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBuyOpen(true)}
            className="px-4 py-2 rounded-full bg-[#c85a7e] hover:bg-[#b04b6c] text-white text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-[#c85a7e]/25 flex items-center gap-1.5"
          >
            <ShoppingBag size={14} />
            <span>Order Novel</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="romance-hero" className="relative px-6 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,#c85a7e,transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c85a7e]/15 border border-[#c85a7e]/40 text-[#f7c2d2] text-xs uppercase tracking-[0.2em] font-medium">
              <Heart size={12} className="fill-current text-[#e87898]" />
              New Release Romance
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#fff5ea] leading-[1.12] font-semibold">
              Love whispered along the banks of the Seine.
            </h1>

            <p className="text-[#e2cad4] text-sm sm:text-base leading-relaxed max-w-lg">
              When an antique book restorer discovers an unsent wartime confession tucked inside an 1890s Parisian journal, she never expected the collector hunting for it would steal her heart.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#c85a7e] to-[#a3385c] text-white text-sm font-semibold tracking-wide shadow-xl shadow-[#c85a7e]/30 hover:scale-[1.02] transition-transform flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                <span>Buy The Autumn Atelier</span>
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#351627] hover:bg-[#461e34] border border-[#f7c2d2]/25 text-[#fde8ef] text-sm font-medium tracking-wide transition-colors flex items-center gap-2"
              >
                <BookOpen size={16} />
                <span>Read Chapter One</span>
              </button>
            </div>

            {/* Praise Pills */}
            <div className="pt-4 flex items-center gap-4 text-xs text-[#d6b4c2]">
              <div className="flex text-[#f472b6]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span>"An intoxicating triumph." — Romance Today</span>
            </div>
          </div>

          {/* Book Mockup 3D Presentation */}
          <div className="flex justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#c85a7e]/40 to-transparent blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src="/images/covers/the-autumn-atelier.svg"
                alt="The Autumn Atelier by Camille Laurent"
                className="relative w-64 sm:w-80 rounded-2xl shadow-2xl border border-[#f7c2d2]/30 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#2e1222] border border-[#c85a7e]/50 px-4 py-2 rounded-xl text-xs font-serif text-[#fde8ef] shadow-xl backdrop-blur-md">
                ★ 4.9 Stars on Goodreads
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Details & Tropes */}
      <section id="romance-books" className="px-6 py-16 bg-[#250f1d] border-y border-[#f7c2d2]/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-[#180812] p-1 border border-[#f7c2d2]/15">
              <button
                onClick={() => setActiveTab("book")}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === "book" ? "bg-[#c85a7e] text-white" : "text-[#d6b4c2] hover:text-white"
                }`}
              >
                Book Synopsis
              </button>
              <button
                onClick={() => setActiveTab("tropes")}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === "tropes" ? "bg-[#c85a7e] text-white" : "text-[#d6b4c2] hover:text-white"
                }`}
              >
                Story Tropes
              </button>
              <button
                onClick={() => setActiveTab("playlist")}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === "playlist" ? "bg-[#c85a7e] text-white" : "text-[#d6b4c2] hover:text-white"
                }`}
              >
                Parisian Playlist
              </button>
            </div>
          </div>

          {activeTab === "book" && (
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#e87898] font-medium">Bilingual Contemporary Romance</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#fff5ea]">An Autumn They Would Never Forget</h2>
              <p className="text-sm sm:text-base text-[#d6b4c2] leading-relaxed">
                Set in the winding cobblestones of Montmartre and private historic libraries, <em>The Autumn Atelier</em> explores the electric tension between rival archivists tasked with uncovering a century-old secret. With dual perspectives, slow-burn romantic tension, and rich descriptions of Parisian bistros and rare manuscripts.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => setSampleOpen(true)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#f7c2d2] border-b border-[#f7c2d2] pb-0.5 hover:text-white transition-colors"
                >
                  Read Excerpt Online →
                </button>
              </div>
            </div>
          )}

          {activeTab === "tropes" && (
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { title: "Rivals to Lovers", desc: "Two fiercely competitive book collectors forced into a shared restoration grant." },
                { title: "Forced Proximity", desc: "A rainy November trapped in a 19th-century private attic archive." },
                { title: "Dual POV & Epistolary", desc: "Modern passion interwoven with historic handwritten letters." },
              ].map((t, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#1d0b16] border border-[#f7c2d2]/15 text-left">
                  <Heart size={16} className="text-[#e87898] mb-2 fill-current" />
                  <h3 className="font-serif text-lg text-[#fff5ea] font-semibold">{t.title}</h3>
                  <p className="text-xs text-[#d6b4c2] mt-1 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "playlist" && (
            <div className="max-w-xl mx-auto p-6 rounded-2xl bg-[#1d0b16] border border-[#f7c2d2]/20 text-center space-y-3">
              <Music size={28} className="mx-auto text-[#e87898]" />
              <h3 className="font-serif text-2xl text-[#fff5ea]">Official Story Atmosphere</h3>
              <p className="text-xs text-[#d6b4c2]">Acoustic accordion, melancholic French indie folk, and gentle rainy cello pieces curated by Camille Laurent.</p>
              <div className="pt-2 flex justify-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#351627] text-[#f7c2d2]">1. Claude Debussy — Clair de Lune</span>
                <span className="px-3 py-1 rounded-full bg-[#351627] text-[#f7c2d2]">2. Pomme — Ceux que l'on aime</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Author Bio Section */}
      <section id="romance-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="size-60 sm:size-72 rounded-3xl overflow-hidden border-2 border-[#c85a7e]/40 shadow-2xl">
                <img
                  src="/images/authors/camille-laurent.jpg"
                  alt="Camille Laurent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#c85a7e] text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg">
                Paris, France
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#e87898] font-semibold">About The Author</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fff5ea] font-semibold">Camille Laurent</h2>
            <p className="text-sm sm:text-base text-[#d6b4c2] leading-relaxed">
              Camille Laurent is an internationally bestselling author of contemporary European romance. A former curator of antique bindings in the Marais district, her novels capture the sensual atmosphere of old Europe, slow-burning passion, and witty banter.
            </p>
            <p className="text-sm sm:text-base text-[#d6b4c2] leading-relaxed">
              When not writing in light-filled cafés, she can be found hunting for first editions along the Seine or brewing Earl Grey tea for her Persian cat, Marcel.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-[#f7c2d2]">
              <div><strong>12</strong> Published Romances</div>
              <div><strong>3x</strong> USA Today Bestseller</div>
              <div><strong>18</strong> Translated Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Reviews */}
      <section className="px-6 py-16 bg-[#250f1d] border-t border-[#f7c2d2]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#e87898] font-semibold">Critical Acclaim</span>
            <h2 className="font-serif text-3xl text-[#fff5ea] mt-1">What Readers Are Saying</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                quote: "Unputdownable. Camille Laurent has penned the definitive romantic love letter to Paris.",
                source: "The Paris Book Gazette",
                rating: 5,
              },
              {
                quote: "The chemistry between Sophie and Henri practically caught my Kindle on fire.",
                source: "Romance Reader Society",
                rating: 5,
              },
              {
                quote: "Exquisite prose, breathless emotional tension, and the most satisfying final chapter of the year.",
                source: "Literary Hearts Blog",
                rating: 5,
              },
            ].map((rev, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#1c0c16] border border-[#f7c2d2]/15 flex flex-col justify-between text-left">
                <div className="flex text-[#f472b6] mb-3">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-sm sm:text-base italic text-[#fde8ef] leading-relaxed">“{rev.quote}”</p>
                <p className="text-xs font-semibold text-[#e87898] mt-4 uppercase tracking-wider">{rev.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Reader Magnet / Newsletter */}
      <section id="romance-newsletter" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#381628] to-[#200c17] border border-[#c85a7e]/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <Heart size={32} className="mx-auto text-[#f472b6] fill-current" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fff5ea] font-semibold">Join Camille’s Parisian Salon</h2>
            <p className="text-sm text-[#d6b4c2] max-w-md mx-auto leading-relaxed">
              Sign up today and instantly receive the prequel novella, <em>A Weekend in Provence</em>, plus exclusive deleted scenes and advance reader copies.
            </p>

            {newsletterSent ? (
              <div className="p-4 rounded-2xl bg-[#1d0b16] border border-[#c85a7e] text-[#f7c2d2] text-sm flex items-center justify-center gap-2">
                <Check size={18} className="text-[#f472b6]" />
                <span>Merci! Your free prequel novella has been dispatched to your inbox.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setNewsletterSent(true);
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full bg-[#160710] border border-[#f7c2d2]/30 text-white placeholder:text-[#a88a96] text-xs focus:outline-none focus:border-[#c85a7e]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#c85a7e] hover:bg-[#b04b6c] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                >
                  Send My Novella
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-[#f7c2d2]/15 bg-[#14070f] text-center text-xs text-[#a88a96] space-y-3">
        <p>© 2026 Camille Laurent. All rights reserved. Represented by Madeline Joy Book Services.</p>
        <p className="text-[11px] text-[#e87898]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Interactive Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#1c0c16] border border-[#c85a7e]/50 max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#f7c2d2]/15 pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#e87898] font-bold">Free Sample Preview</span>
                <h3 className="font-serif text-2xl text-[#fff5ea]">The Autumn Atelier — Chapter One</h3>
              </div>
              <button
                onClick={() => setSampleOpen(false)}
                className="size-8 rounded-full bg-[#351627] text-[#f7c2d2] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-[#edd6df]">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#f472b6] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                The rain over Montmartre smelled of wet cobblestones and roasted chestnuts. Inside Atelier Valmont, Sophie adjusted her brass loupe over the water-stained vellum of an 1892 journal.
              </p>
              <p>
                "It isn't for sale, Monsieur Laurent," she murmured without looking up from the binding.
              </p>
              <p>
                The man in the charcoal cashmere coat stepped closer, bringing with him the scent of cedar and autumn wind. "Everything in Paris has a price, Mademoiselle. But this journal isn't inventory. It belonged to my great-grandfather."
              </p>
              <p>
                Sophie paused her scalpel, her breath catching as their eyes met across the mahogany workbench.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f7c2d2]/15 flex justify-between items-center">
              <span className="text-xs text-[#d6b4c2]">Want to read all 380 pages?</span>
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2.5 rounded-full bg-[#c85a7e] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Order Full Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#1c0c16] border border-[#c85a7e]/50 max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#e87898] font-bold">Select Your Retailer</span>
              <button
                onClick={() => setBuyOpen(false)}
                className="size-8 rounded-full bg-[#351627] text-[#f7c2d2] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <img
              src="/images/covers/the-autumn-atelier.svg"
              alt="The Autumn Atelier"
              className="w-32 mx-auto rounded-xl shadow-xl mb-4 border border-[#f7c2d2]/30"
            />
            <h3 className="font-serif text-xl text-[#fff5ea] font-semibold">The Autumn Atelier</h3>
            <p className="text-xs text-[#d6b4c2] mb-6">Available in Hardcover, Paperback, Kindle & Audiobook</p>

            <div className="space-y-2.5 text-left">
              {[
                { name: "Amazon Kindle & Paperback", tag: "Prime 1-Day Delivery", color: "bg-[#2d1221] hover:bg-[#3d1a2f]" },
                { name: "Barnes & Noble Hardcover", tag: "Special Edition with Sprayed Edges", color: "bg-[#2d1221] hover:bg-[#3d1a2f]" },
                { name: "Apple Books & Kobo", tag: "Immediate Digital Download", color: "bg-[#2d1221] hover:bg-[#3d1a2f]" },
                { name: "Audible Audiobook", tag: "Narrated in English & French", color: "bg-[#2d1221] hover:bg-[#3d1a2f]" },
              ].map((ret, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    alert(`Demo trigger: In a live author website, this seamlessly directs the reader to ${ret.name}.`);
                    setBuyOpen(false);
                  }}
                  className={`w-full p-3.5 rounded-xl border border-[#f7c2d2]/20 ${ret.color} text-white flex items-center justify-between transition-colors`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#fde8ef]">{ret.name}</p>
                    <p className="text-[10px] text-[#e87898]">{ret.tag}</p>
                  </div>
                  <ArrowRight size={14} className="text-[#f7c2d2]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
