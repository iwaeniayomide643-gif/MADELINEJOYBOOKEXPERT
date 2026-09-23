import React, { useState } from "react";
import { Shield, Sparkles, MapPin, BookOpen, ShoppingBag, Compass, Star, ChevronRight, Swords, Scroll, Check, ArrowRight } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function FantasyWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [selectedRealm, setSelectedRealm] = useState<"solaria" | "dusk" | "iron">("solaria");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`fantasy-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const realmDetails = {
    solaria: {
      name: "The Solar Citadel of Orah",
      ruler: "High King Kwame V",
      desc: "Perched atop volcanic basalt cliffs, the Solar Citadel harnesses raw solar plasma through towering crystal spires. The ancient seat of the Sunfire Dynasty.",
      creed: "Where Light Prevails, Empires Endure.",
    },
    dusk: {
      name: "The Obsidian Marches",
      ruler: "Warlord Nayla Vance",
      desc: "A sprawling shadowland shrouded in ash storms and subterranean glass caverns. Home to the exiled bloodline of eclipse sorcerers.",
      creed: "From the Deepest Shadow, the Flame Awakens.",
    },
    iron: {
      name: "The Iron Archipelago",
      ruler: "Grand Admiral Tariq",
      desc: "Ten thousand fortified floating galleons and ironclad fortress isles defending the eastern salt sea against deep abyss leviathans.",
      creed: "Steel in Heart, Salt in Vein.",
    },
  };

  return (
    <div className="min-h-full bg-[#0d0604] text-[#fceee8] font-sans antialiased selection:bg-[#df8a6c] selection:text-[#180905]">
      {/* Epic Header Announcement */}
      <div className="bg-gradient-to-r from-[#3b1207] via-[#6d2711] to-[#3b1207] px-4 py-2 text-center text-xs font-serif font-bold tracking-[0.25em] text-[#fed7aa] border-b border-[#df8a6c]/30 flex items-center justify-center gap-2">
        <Swords size={13} className="text-[#df8a6c]" />
        <span>BOOK ONE OF THE SUNFIRE DYNASTY • NOW EXPANDED WITH COLLECTOR'S MAPS</span>
        <Swords size={13} className="text-[#df8a6c]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#df8a6c]/20 bg-[#0d0604]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-gradient-to-br from-[#df8a6c] to-[#7c260f] p-0.5 shadow-lg shadow-[#df8a6c]/20 flex items-center justify-center">
            <div className="w-full h-full bg-[#180905] rounded-[6px] flex items-center justify-center font-serif text-[#fed7aa] font-bold text-lg">
              KM
            </div>
          </div>
          <div>
            <span className="font-serif text-xl tracking-wider font-bold text-[#fff7ed]">Kofi Mensah</span>
            <span className="block text-[10px] tracking-[0.25em] text-[#df8a6c] uppercase font-bold">Epic Fantasy Worlds</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-semibold text-[#fed7aa]/80">
          <button onClick={() => scrollTo("hero")} className="hover:text-[#df8a6c] transition-colors">Chronicles</button>
          <button onClick={() => scrollTo("map")} className="hover:text-[#df8a6c] transition-colors">Realm Atlas</button>
          <button onClick={() => scrollTo("author")} className="hover:text-[#df8a6c] transition-colors">The Worldbuilder</button>
          <button onClick={() => scrollTo("series")} className="hover:text-[#df8a6c] transition-colors">Books & Series</button>
          <button onClick={() => scrollTo("codex")} className="hover:text-[#df8a6c] transition-colors">Fan Codex</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#df8a6c] to-[#9a3412] text-[#0d0604] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#df8a6c]/20 flex items-center gap-1.5"
        >
          <Shield size={14} />
          <span>Claim Hardcover</span>
        </button>
      </header>

      {/* Hero Section */}
      <section id="fantasy-hero" className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,#df8a6c,transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#df8a6c]/15 border border-[#df8a6c]/40 text-[#df8a6c] text-xs uppercase tracking-[0.22em] font-bold">
              <Sparkles size={13} />
              The Sunfire Dynasty • Book I
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#fff7ed] leading-[1.08] font-bold tracking-tight">
              When the Sun King falls, only fire can claim the throne.
            </h1>

            <p className="text-[#e2c1b4] text-base sm:text-lg leading-relaxed max-w-xl">
              A sprawling epic of celestial magic, warring merchant syndicates, and an exiled prince who must awaken the buried titan colossus before the eclipse consumes the mortal realm.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#df8a6c] via-[#b84a22] to-[#7c260f] text-[#0d0604] hover:text-white font-bold text-sm uppercase tracking-wider shadow-2xl shadow-[#df8a6c]/30 hover:scale-[1.02] transition-transform flex items-center gap-2"
              >
                <Shield size={16} />
                <span>Order Deluxe Hardcover</span>
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-7 py-4 rounded-xl bg-[#210904] hover:bg-[#341108] border border-[#df8a6c]/40 text-[#fed7aa] font-semibold text-sm tracking-wide transition-colors flex items-center gap-2"
              >
                <BookOpen size={16} />
                <span>Read Prologue & Map</span>
              </button>
            </div>

            <div className="pt-4 flex items-center gap-5 text-xs text-[#d1a896]">
              <span className="font-bold text-[#df8a6c]">#1 AMAZON BESTSELLER</span>
              <span>•</span>
              <span>"Tolkien's scope with fresh mythic energy." — Fantasy Chronicle</span>
            </div>
          </div>

          {/* Book Presentation with Dramatic Glow */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-t from-[#df8a6c]/40 via-[#b84a22]/20 to-transparent blur-3xl group-hover:blur-4xl transition-all" />
              <img
                src="/images/covers/chronicles-of-the-solar-king.svg"
                alt="Chronicles of the Solar King"
                className="relative w-72 sm:w-84 rounded-2xl shadow-2xl border-2 border-[#df8a6c]/50 transform rotate-[1.5deg] group-hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-5 -right-3 bg-[#1e0a05] border border-[#df8a6c]/60 px-4 py-2.5 rounded-xl text-xs font-serif text-[#fed7aa] shadow-2xl backdrop-blur-md">
                ⚔️ Includes 4 Colored Foldout Maps
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Realm Atlas */}
      <section id="fantasy-map" className="px-6 py-20 bg-[#160804] border-y border-[#df8a6c]/20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#df8a6c] font-bold">Interactive World Codex</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fff7ed] mt-1 font-bold">Explore the Three Mortal Realms</h2>
            <p className="text-sm text-[#e2c1b4] max-w-xl mx-auto mt-2">
              Select a territory to inspect its ruling house, strategic fortress, and founding creed.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            {(["solaria", "dusk", "iron"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRealm(r)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
                  selectedRealm === r
                    ? "bg-[#df8a6c] text-[#0d0604] border-[#df8a6c] shadow-lg shadow-[#df8a6c]/20"
                    : "bg-[#240b05] text-[#fed7aa] border-[#df8a6c]/30 hover:border-[#df8a6c]"
                }`}
              >
                {realmDetails[r].name.split(" ")[1]}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#0d0604] border border-[#df8a6c]/40 text-left grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#df8a6c] uppercase tracking-wider">
                <Compass size={16} />
                <span>{realmDetails[selectedRealm].ruler}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#fff7ed] font-bold">{realmDetails[selectedRealm].name}</h3>
              <p className="text-sm text-[#d6aea0] leading-relaxed">{realmDetails[selectedRealm].desc}</p>
              <div className="p-3 rounded-lg bg-[#210904] border-l-2 border-[#df8a6c] text-xs font-serif italic text-[#fed7aa]">
                "{realmDetails[selectedRealm].creed}"
              </div>
            </div>
            <div className="md:col-span-5 p-6 rounded-xl bg-[#210904] border border-[#df8a6c]/20 text-center space-y-2">
              <Scroll size={32} className="mx-auto text-[#df8a6c]" />
              <h4 className="font-serif text-lg text-[#fff7ed] font-bold">Download Free Realm Map</h4>
              <p className="text-xs text-[#d6aea0]">Get the 4K printable parchment cartography included in the deluxe edition.</p>
              <button
                onClick={() => alert("Demo Trigger: Realm cartography PDF download initiated!")}
                className="mt-2 px-4 py-2 rounded-lg bg-[#df8a6c] text-[#0d0604] font-bold text-xs uppercase tracking-wider hover:bg-[#c97455] transition-colors"
              >
                Get 4K Map PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Biography */}
      <section id="fantasy-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="size-64 sm:size-76 rounded-2xl overflow-hidden border-2 border-[#df8a6c]/50 shadow-2xl bg-[#1e0a05]">
                <img
                  src="/images/authors/kofi-mensah.jpg"
                  alt="Kofi Mensah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-[#df8a6c] text-[#0d0604] px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-xl">
                Accra & London
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#df8a6c] font-bold">The Worldbuilder</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fff7ed] font-bold">Kofi Mensah</h2>
            <p className="text-sm sm:text-base text-[#e2c1b4] leading-relaxed">
              Kofi Mensah is a worldbuilder and fantasy novelist whose epics fuse West African mythology, complex military strategy, and ancient astral cosmology. His debut novel achieved instant international acclaim, with translation rights sold in 14 countries.
            </p>
            <p className="text-sm sm:text-base text-[#e2c1b4] leading-relaxed">
              Before writing full-time, Kofi worked as an architectural cartographer and game lore director. When not inventing magical alphabets, he mentors rising speculative fiction writers across the globe.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-[#fed7aa]">
              <div><strong>6</strong> Full Novels</div>
              <div><strong>1.2M</strong> Copies Sold</div>
              <div><strong>2024</strong> Fantasy Award Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Fan Club / Guild Dispatch */}
      <section id="fantasy-codex" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#2e0e06] to-[#140603] border border-[#df8a6c]/40 shadow-2xl relative">
          <Shield size={36} className="mx-auto text-[#df8a6c]" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#fff7ed] font-bold mt-2">Join the Order of the Sunfire</h2>
          <p className="text-sm text-[#e2c1b4] max-w-md mx-auto mt-2 leading-relaxed">
            Receive exclusive prequel short stories, high-res character art, and VIP access to future hardcover pre-order campaigns.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded-xl bg-[#210904] border border-[#df8a6c] text-[#fed7aa] text-sm flex items-center justify-center gap-2">
              <Check size={18} className="text-[#df8a6c]" />
              <span>Welcome to the Order. Check your dispatch scroll in your email.</span>
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
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-lg bg-[#0d0604] border border-[#df8a6c]/40 text-white placeholder:text-[#a37a6b] text-xs focus:outline-none focus:border-[#df8a6c]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#df8a6c] hover:bg-[#c97455] text-[#0d0604] text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Swear Fealty
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-[#df8a6c]/20 bg-[#090302] text-center text-xs text-[#a37a6b] space-y-3">
        <p>© 2026 Kofi Mensah. Sunfire Dynasty™ is a registered fantasy universe. Designed with Madeline Joy.</p>
        <p className="text-[11px] text-[#df8a6c]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Interactive Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#140603] border border-[#df8a6c]/60 max-w-2xl w-full max-h-[85vh] rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#df8a6c]/20 pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#df8a6c] font-bold">Prologue Excerpt</span>
                <h3 className="font-serif text-2xl text-[#fff7ed]">Chronicles of the Solar King — Chapter One</h3>
              </div>
              <button
                onClick={() => setSampleOpen(false)}
                className="size-8 rounded-lg bg-[#2e0e06] text-[#fed7aa] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-[#f4dfd6]">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#df8a6c] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Before the fire died, the High King spoke to the basalt stone. He said that empires do not crumble under swords, but in the quiet spaces between solar eclipses.
              </p>
              <p>
                From the summit of Orah, Prince Kael looked across the burning valley. A thousand war galleons sailed upon the dust winds, their sails dyed blood-orange against the descending dark.
              </p>
              <p>
                "If the crown must burn," Kael whispered, grasping the pommel of his solar-forged blade, "then let it burn bright enough to blind the gods."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#df8a6c]/20 flex justify-between items-center">
              <span className="text-xs text-[#d6aea0]">540-Page Collector Edition</span>
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2.5 rounded-lg bg-[#df8a6c] text-[#0d0604] text-xs font-bold uppercase tracking-wider"
              >
                Order Deluxe Book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#140603] border border-[#df8a6c]/60 max-w-md w-full rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#df8a6c] font-bold">Select Edition & Bookseller</span>
              <button
                onClick={() => setBuyOpen(false)}
                className="size-8 rounded-lg bg-[#2e0e06] text-[#fed7aa] hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <img
              src="/images/covers/chronicles-of-the-solar-king.svg"
              alt="Chronicles of the Solar King"
              className="w-32 mx-auto rounded-xl shadow-xl mb-4 border border-[#df8a6c]/40"
            />
            <h3 className="font-serif text-xl text-[#fff7ed] font-bold">Chronicles of the Solar King</h3>
            <p className="text-xs text-[#d6aea0] mb-6">Hardcover with Gold Foil Stamp & Sprayed Edges</p>

            <div className="space-y-2.5 text-left">
              {[
                { name: "Amazon Hardcover & Kindle", tag: "Deluxe Foil Edition Available", color: "bg-[#240b05] hover:bg-[#341108]" },
                { name: "Barnes & Noble Exclusive", tag: "Includes Bonus Chapter & Author Signature", color: "bg-[#240b05] hover:bg-[#341108]" },
                { name: "Waterstones & Blackwell's", tag: "UK & European Collector Stock", color: "bg-[#240b05] hover:bg-[#341108]" },
                { name: "Audible Audio Production", tag: "Full-Cast Narration with Orchestral Score", color: "bg-[#240b05] hover:bg-[#341108]" },
              ].map((ret, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    alert(`Demo trigger: Redirecting to ${ret.name} preorder gateway.`);
                    setBuyOpen(false);
                  }}
                  className={`w-full p-3.5 rounded-lg border border-[#df8a6c]/30 ${ret.color} text-white flex items-center justify-between transition-colors`}
                >
                  <div>
                    <p className="text-xs font-bold text-[#fed7aa]">{ret.name}</p>
                    <p className="text-[10px] text-[#df8a6c]">{ret.tag}</p>
                  </div>
                  <ArrowRight size={14} className="text-[#fed7aa]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
