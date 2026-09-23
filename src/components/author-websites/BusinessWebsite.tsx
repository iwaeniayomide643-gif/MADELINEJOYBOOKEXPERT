import React, { useState } from "react";
import { TrendingUp, DollarSign, Calculator, Mic, Video, BookOpen, ShoppingBag, Star, Check, ArrowRight, ShieldCheck } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function BusinessWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [bulkCopies, setBulkCopies] = useState<number>(50);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`biz-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const calculateDiscount = (qty: number) => {
    if (qty >= 250) return { discount: 40, perBook: 18 };
    if (qty >= 100) return { discount: 30, perBook: 21 };
    if (qty >= 50) return { discount: 20, perBook: 24 };
    return { discount: 10, perBook: 27 };
  };

  const pricing = calculateDiscount(bulkCopies);
  const totalPrice = bulkCopies * pricing.perBook;

  return (
    <div className="min-h-full bg-[#080d16] text-[#e2e8f0] font-sans antialiased selection:bg-[#38bdf8] selection:text-[#080d16]">
      {/* Executive Top Banner */}
      <div className="bg-[#0f1d30] border-b border-[#38bdf8]/30 py-2.5 px-6 text-center text-xs tracking-widest text-[#7dd3fc] uppercase font-bold flex items-center justify-center gap-2">
        <TrendingUp size={14} className="text-[#38bdf8]" />
        <span>#1 WALL STREET JOURNAL BESTSELLER • ADOPTED BY OVER 150+ FAST-GROWING TECH ENTERPRISES</span>
        <TrendingUp size={14} className="text-[#38bdf8]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#38bdf8]/20 bg-[#080d16]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#0284c7] flex items-center justify-center text-[#080d16] font-black text-base shadow-lg">
            MV
          </div>
          <div>
            <span className="font-bold text-lg text-white">Marcos Valdés</span>
            <span className="block text-[10px] tracking-widest text-[#38bdf8] uppercase font-bold">Venture Strategy & Scaling</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-[#94a3b8]">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">The Playbook</button>
          <button onClick={() => scrollTo("bulk")} className="hover:text-white transition-colors">Corporate Bulk</button>
          <button onClick={() => scrollTo("speaking")} className="hover:text-white transition-colors">Keynotes</button>
          <button onClick={() => scrollTo("author")} className="hover:text-white transition-colors">About Marcos</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-[#080d16] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#38bdf8]/20 transition-all"
        >
          Order Book
        </button>
      </header>

      {/* Hero Section */}
      <section id="biz-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">The Strategic B2B Framework</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-tight tracking-tight">
              Zero to Market.
            </h1>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-lg">
              The battle-tested commercialization blueprint for building resilient product market fit, scalable enterprise revenue pipelines, and high-velocity go-to-market teams.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-7 py-4 rounded-lg bg-[#38bdf8] text-[#080d16] font-black text-xs uppercase tracking-wider hover:bg-[#0284c7] transition-all shadow-xl shadow-[#38bdf8]/25"
              >
                Order Zero to Market
              </button>
              <button
                onClick={() => scrollTo("bulk")}
                className="px-7 py-4 rounded-lg bg-[#0f1d30] border border-[#38bdf8]/40 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#162a45] transition-colors"
              >
                Corporate Bulk Tiers (Up to 40% Off)
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative p-2 border border-[#38bdf8]/40 rounded-2xl bg-[#0e1826] shadow-2xl">
              <img
                src="/images/covers/zero-to-market.svg"
                alt="Zero to Market"
                className="w-64 sm:w-76 rounded-xl shadow-2xl border border-[#38bdf8]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Corporate Bulk Order Calculator */}
      <section id="biz-bulk" className="px-6 py-20 bg-[#0b1422] border-y border-[#38bdf8]/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Team & Leadership Distribution</span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold mt-1">Corporate Bulk Order Tier Calculator</h2>
            <p className="text-sm text-[#94a3b8] max-w-xl mx-auto mt-2">
              Equip your executive leadership, sales team, and management cohorts with direct volume discounts.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#080d16] border border-[#38bdf8]/30 text-left grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#94a3b8] font-bold block mb-2">
                  Select Number of Hardcover Copies: <span className="text-white text-base font-black">{bulkCopies} Copies</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={bulkCopies}
                  onChange={(e) => setBulkCopies(Number(e.target.value))}
                  className="w-full accent-[#38bdf8] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#64748b] mt-1">
                  <span>20 Copies (10% Off)</span>
                  <span>100 Copies (30% Off)</span>
                  <span>500 Copies (40% Off)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0e1826] border border-[#38bdf8]/20">
                  <span className="text-[11px] uppercase tracking-wider text-[#94a3b8]">Applied Discount</span>
                  <div className="text-2xl font-black text-[#38bdf8] mt-0.5">{pricing.discount}% OFF</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0e1826] border border-[#38bdf8]/20">
                  <span className="text-[11px] uppercase tracking-wider text-[#94a3b8]">Per Copy Price</span>
                  <div className="text-2xl font-black text-white mt-0.5">${pricing.perBook}.00 <span className="text-xs text-[#64748b] line-through">$30.00</span></div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-2xl bg-[#0f1d30] border border-[#38bdf8]/40 text-center space-y-3">
              <DollarSign size={32} className="mx-auto text-[#38bdf8]" />
              <span className="text-xs uppercase tracking-wider text-[#94a3b8] font-bold">Estimated Order Total</span>
              <div className="text-3xl font-black text-white">${totalPrice.toLocaleString()}.00</div>
              <p className="text-[11px] text-[#94a3b8]">Includes free shipping and executive study companion slide deck.</p>
              <button
                onClick={() => alert(`Demo trigger: Corporate invoice request for ${bulkCopies} copies ($${totalPrice}) generated!`)}
                className="w-full py-3 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-[#080d16] font-black text-xs uppercase tracking-wider transition-colors"
              >
                Request Corporate Invoice
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section id="biz-author" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-2xl overflow-hidden border-2 border-[#38bdf8]/40 p-2 bg-[#0e1826] shadow-2xl">
              <img
                src="/images/authors/marcos-valdes.jpg"
                alt="Marcos Valdés"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Venture Partner & Strategist</span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold">Marcos Valdés</h2>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Marcos Valdés is a general partner at Horizon Ventures and former Chief Operating Officer who has scaled three B2B technology companies from seed stage to successful public listings.
            </p>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              He keynotes major corporate conferences worldwide and writes the weekly newsletter <em>The Growth Architecture</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#38bdf8]/20 bg-[#04070c] text-center text-xs text-[#475569] space-y-2">
        <p>© 2026 Marcos Valdés. Zero to Market™. Representation: Madeline Joy.</p>
        <p className="text-[11px] text-[#38bdf8]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Buy Modal */}
      {buyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#080d16] border border-[#38bdf8] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Purchase Option</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-lg bg-[#0f1d30] text-[#38bdf8]">✕</button>
            </div>
            <img src="/images/covers/zero-to-market.svg" alt="Zero to Market" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#38bdf8]/40" />
            <h3 className="text-xl text-white font-bold">Zero to Market</h3>
            <p className="text-xs text-[#94a3b8] mb-4">Hardcover, Audio & Digital Editions</p>
            <div className="space-y-2 text-left">
              {["Amazon Business & Prime Delivery", "Barnes & Noble Executive Hardcover", "Audible Audio Production"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-lg bg-[#0f1d30] border border-[#38bdf8]/30 text-white flex items-center justify-between text-xs hover:bg-[#162a45]"
                >
                  <span className="font-bold">{b}</span>
                  <ArrowRight size={14} className="text-[#38bdf8]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
