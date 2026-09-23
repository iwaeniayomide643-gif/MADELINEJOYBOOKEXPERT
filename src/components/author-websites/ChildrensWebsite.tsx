import React, { useState } from "react";
import { Sparkles, Smile, Star, Heart, Download, BookOpen, ShoppingBag, Check, ArrowRight, Music } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function ChildrensWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string>("pip");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`kids-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const characters = {
    pip: { name: "Pip the Dragon", trait: "Tiny, cheerful, loves strawberry pancakes, searching for his lost magical flame!" },
    barnaby: { name: "Barnaby the Owl", trait: "Wears oversized reading spectacles and knows every constellation in the forest." },
    clover: { name: "Clover the Bunny", trait: "Always carries a satchel of herbal teas and gives the warmest hugs in the kingdom." },
  };

  return (
    <div className="min-h-full bg-[#1e1308] text-[#fef3c7] font-sans antialiased selection:bg-[#fbbf24] selection:text-[#1e1308]">
      {/* Whimsical Banner */}
      <div className="bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#ea580c] py-2.5 px-4 text-center text-xs font-black tracking-wider text-[#1e1308] uppercase flex items-center justify-center gap-2">
        <Sparkles size={14} />
        <span>★ 2025 CHILDREN'S PICTURE BOOK OF THE YEAR WINNER ★ FREE COLORING SHEETS INSIDE</span>
        <Sparkles size={14} />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#fbbf24]/25 bg-[#1e1308]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-gradient-to-br from-[#fbbf24] to-[#f97316] flex items-center justify-center text-[#1e1308] font-black text-xl shadow-lg">
            🐉
          </div>
          <div>
            <span className="font-black text-xl text-white tracking-wide">Amara & Leo Fox</span>
            <span className="block text-[10px] tracking-widest text-[#fbbf24] uppercase font-bold">Illustrated Storybooks</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-black text-[#fde68a]">
          <button onClick={() => scrollTo("hero")} className="hover:text-[#fbbf24] transition-colors">The Story</button>
          <button onClick={() => scrollTo("friends")} className="hover:text-[#fbbf24] transition-colors">Characters</button>
          <button onClick={() => scrollTo("activities")} className="hover:text-[#fbbf24] transition-colors">Free Activities</button>
          <button onClick={() => scrollTo("author")} className="hover:text-[#fbbf24] transition-colors">Meet the Creators</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e1308] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#fbbf24]/20 hover:scale-105 transition-transform"
        >
          Get Hardcover
        </button>
      </header>

      {/* Hero Section */}
      <section id="kids-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbbf24]/20 border border-[#fbbf24]/40 text-[#fde68a] text-xs font-bold uppercase tracking-wider">
              <Smile size={14} />
              Ages 3 to 8 • Illustrated Picture Book
            </div>
            <h1 className="text-4xl sm:text-6xl text-white font-black leading-tight tracking-tight">
              The Dragon Who Lost His Spark.
            </h1>
            <p className="text-sm sm:text-base text-[#fde68a] leading-relaxed max-w-lg">
              When little Pip wakes up to find his sneeze only puffs tiny glitter bubbles instead of fire, his forest friends take him on a magical quest to learn what truly makes us shine!
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-7 py-4 rounded-full bg-[#fbbf24] text-[#1e1308] font-black text-xs uppercase tracking-wider shadow-xl shadow-[#fbbf24]/25 hover:scale-105 transition-transform"
              >
                Order Picture Book
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-7 py-4 rounded-full bg-[#2d1b0b] border border-[#fbbf24]/40 text-[#fef3c7] text-xs font-bold uppercase tracking-wider hover:bg-[#3d240e] transition-colors"
              >
                Peek Inside Pages
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#fbbf24]/40 to-[#ea580c]/40 blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src="/images/covers/the-dragon-who-lost-his-spark.svg"
                alt="The Dragon Who Lost His Spark"
                className="relative w-64 sm:w-76 rounded-2xl shadow-2xl border-2 border-[#fbbf24]/50 transform rotate-[1.5deg] group-hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-3 -right-3 bg-[#2d1b0b] border border-[#fbbf24]/60 px-3.5 py-1.5 rounded-xl text-xs font-black text-[#fbbf24] shadow-xl">
                ★ 5-Star School Favorite
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Characters */}
      <section id="kids-friends" className="px-6 py-20 bg-[#291708] border-y border-[#fbbf24]/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl text-white font-black">Meet Pip and His Forest Friends!</h2>
          <p className="text-xs sm:text-sm text-[#fde68a]">Click a character to learn their secret talent in the enchanted forest.</p>

          <div className="grid sm:grid-cols-3 gap-3">
            {(["pip", "barnaby", "clover"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCharacter(key)}
                className={`p-5 rounded-2xl border transition-all text-left ${
                  selectedCharacter === key
                    ? "bg-[#fbbf24] text-[#1e1308] border-white shadow-xl font-bold"
                    : "bg-[#1e1308] border-[#fbbf24]/30 text-[#fef3c7] hover:border-[#fbbf24]"
                }`}
              >
                <div className="text-xl mb-1">{key === "pip" ? "🐉" : key === "barnaby" ? "🦉" : "🐰"}</div>
                <h3 className="font-black text-base">{characters[key].name}</h3>
                <p className="text-xs mt-1 leading-relaxed opacity-90">{characters[key].trait}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Free Coloring Activities */}
      <section id="kids-activities" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#3b200b] to-[#1e1308] border border-[#fbbf24]/40 shadow-2xl">
          <Download size={36} className="mx-auto text-[#fbbf24]" />
          <h2 className="text-3xl text-white font-black mt-2">Free Printable Coloring & Activity Pack!</h2>
          <p className="text-xs sm:text-sm text-[#fde68a] mt-2 max-w-md mx-auto leading-relaxed">
            Download 8 printable coloring sheets, a maze puzzle, and teacher classroom discussion questions for storytime.
          </p>
          <div className="pt-4">
            <button
              onClick={() => alert("Demo trigger: Free 8-page Coloring & Activity PDF Pack downloaded!")}
              className="px-6 py-3 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e1308] font-black text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <Download size={14} />
              <span>Download Free Activity Pack (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section id="kids-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-3xl overflow-hidden border-2 border-[#fbbf24]/40 p-2 bg-[#2d1b0b] shadow-2xl">
              <img
                src="/images/authors/amara-leo-fox.svg"
                alt="Amara and Leo Fox"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-bold">Author & Illustrator Duo</span>
            <h2 className="text-3xl sm:text-4xl text-white font-black">Amara & Leo Fox</h2>
            <p className="text-sm sm:text-base text-[#fde68a] leading-relaxed">
              Amara and Leo Fox are a husband-and-wife creative team who have brought joyful stories and whimsical illustrations to over 400 school classrooms and library storytimes nationwide.
            </p>
            <p className="text-sm sm:text-base text-[#fde68a] leading-relaxed">
              They live in a cozy cottage with two rescue dogs and a garden full of wildflowers and friendly bees.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#fbbf24]/20 bg-[#120a04] text-center text-xs text-[#b49060] space-y-2">
        <p>© 2026 Amara & Leo Fox. Pip the Dragon Stories™. Designed with Madeline Joy.</p>
        <p className="text-[11px] text-[#fbbf24]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#291708] border border-[#fbbf24] max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#fbbf24]/20 pb-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-bold">Storybook Peek</span>
              <button onClick={() => setSampleOpen(false)} className="size-7 rounded-full bg-[#3d240e] text-[#fbbf24]">✕</button>
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#fef3c7]">
              <p className="text-xl font-black text-white">
                "ACHOO!" went Pip.
              </p>
              <p>
                Pip squeezed his eyes shut and waited for the big orange flame. But instead of fire, three sparkly purple bubbles drifted into the air and landed right on Barnaby the Owl’s nose!
              </p>
              <p>
                "Goodness me," whispered Barnaby, blinking through his glasses. "I do believe your spark took a little holiday."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#fbbf24]/20 flex justify-end">
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2.5 rounded-full bg-[#fbbf24] text-[#1e1308] text-xs font-black uppercase tracking-wider"
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
          <div className="bg-[#291708] border border-[#fbbf24] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-bold">Get Your Copy</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-full bg-[#3d240e] text-[#fbbf24]">✕</button>
            </div>
            <img src="/images/covers/the-dragon-who-lost-his-spark.svg" alt="The Dragon Who Lost His Spark" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#fbbf24]/40" />
            <h3 className="text-xl text-white font-bold">The Dragon Who Lost His Spark</h3>
            <p className="text-xs text-[#fde68a] mb-4">Hardcover, Board Book & Kindle Editions</p>
            <div className="space-y-2 text-left">
              {["Amazon Prime Hardcover", "Barnes & Noble Kids Section", "Support Local Independent Bookstores"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-xl bg-[#3d240e] border border-[#fbbf24]/30 text-white flex items-center justify-between text-xs hover:bg-[#523113]"
                >
                  <span className="font-bold">{b}</span>
                  <ArrowRight size={14} className="text-[#fbbf24]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
