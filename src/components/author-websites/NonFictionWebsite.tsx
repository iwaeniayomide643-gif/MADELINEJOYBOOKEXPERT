import React, { useState } from "react";
import { Brain, FileText, Download, BookOpen, ShoppingBag, Star, Check, ArrowRight, Mic, Award } from "lucide-react";
import type { MiniWebsiteProps } from "./types";

export function NonFictionWebsite({ onBackToPortfolio, onBookWebsiteService, viewportMode = "desktop" }: MiniWebsiteProps) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(`nonfic-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-[#08131d] text-[#e0f2fe] font-sans antialiased selection:bg-[#38bdf8] selection:text-[#08131d]">
      {/* Top Academic Accolade Banner */}
      <div className="bg-[#0f283d] border-b border-[#38bdf8]/30 py-2.5 px-6 text-center text-xs tracking-widest text-[#7dd3fc] uppercase font-semibold flex items-center justify-center gap-2">
        <Award size={14} className="text-[#38bdf8]" />
        <span>NEW YORK TIMES BESTSELLER • FEATURED ON NPR, NATURE & THE HUBERMAN LAB</span>
        <Award size={14} className="text-[#38bdf8]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-[#38bdf8]/20 bg-[#08131d]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-lg bg-[#0f283d] border border-[#38bdf8] flex items-center justify-center text-[#38bdf8]">
            <Brain size={18} />
          </div>
          <div>
            <span className="font-bold text-lg text-white">Dr. Aris Thorne</span>
            <span className="block text-[10px] tracking-widest text-[#38bdf8] uppercase font-semibold">Cognitive Neuroscience & AI</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-[#7dd3fc]">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">The Book</button>
          <button onClick={() => scrollTo("research")} className="hover:text-white transition-colors">Frameworks</button>
          <button onClick={() => scrollTo("bio")} className="hover:text-white transition-colors">About Dr. Thorne</button>
          <button onClick={() => scrollTo("speaking")} className="hover:text-white transition-colors">Speaking</button>
        </nav>

        <button
          onClick={() => setBuyOpen(true)}
          className="px-4 py-2 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-[#08131d] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#38bdf8]/20"
        >
          Order Hardcover
        </button>
      </header>

      {/* Hero Section */}
      <section id="nonfic-hero" className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Rigorous Behavioral Science</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight">
              The Cognitive Horizon
            </h1>
            <p className="text-sm sm:text-base text-[#93c5fd] leading-relaxed max-w-lg">
              How human attention, deep focus, and creative synthesis survive in an age of automated hyper-stimulation. Grounded in peer-reviewed neuroscience and actionable daily cognitive architectures.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBuyOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#38bdf8] text-[#08131d] font-bold text-xs uppercase tracking-wider hover:bg-[#0284c7] transition-colors shadow-xl"
              >
                Order The Book
              </button>
              <button
                onClick={() => setSampleOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#0f283d] border border-[#38bdf8]/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#163c5b] transition-colors"
              >
                Read Introduction
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative p-2 border border-[#38bdf8]/40 rounded-2xl bg-[#0b1c2b] shadow-2xl">
              <img
                src="/images/covers/the-cognitive-horizon.svg"
                alt="The Cognitive Horizon"
                className="w-64 sm:w-76 rounded-xl shadow-2xl border border-[#38bdf8]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Framework Downloads */}
      <section id="nonfic-research" className="px-6 py-20 bg-[#0b1c2b] border-y border-[#38bdf8]/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FileText size={32} className="mx-auto text-[#38bdf8]" />
          <h2 className="text-3xl sm:text-4xl text-white font-bold">Download the Executive Cognitive Toolkit</h2>
          <p className="text-sm text-[#93c5fd] max-w-xl mx-auto">
            Get the free 24-page PDF framework summary including Dr. Thorne's Neural Recovery Protocol and Attentional Restructuring Worksheets.
          </p>
          <div className="pt-2">
            <button
              onClick={() => alert("Demo trigger: Executive Cognitive Toolkit PDF download initiated.")}
              className="px-6 py-3 rounded-lg bg-[#38bdf8] text-[#08131d] font-bold text-xs uppercase tracking-wider hover:bg-[#0284c7] transition-colors inline-flex items-center gap-2"
            >
              <Download size={15} />
              <span>Download Free Framework PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section id="nonfic-bio" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="size-64 sm:size-72 rounded-2xl overflow-hidden border-2 border-[#38bdf8]/40 p-2 bg-[#0b1c2b] shadow-2xl">
              <img
                src="/images/authors/dr-aris-thorne.jpg"
                alt="Dr. Aris Thorne"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Principal Investigator</span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold">Dr. Aris Thorne</h2>
            <p className="text-sm sm:text-base text-[#93c5fd] leading-relaxed">
              Dr. Aris Thorne is a cognitive neuroscientist and researcher at the Oxford Neurocognition Laboratory. His work examines neuroplasticity, memory encoding during deep workflow states, and the physiological impact of digital interface design.
            </p>
            <p className="text-sm sm:text-base text-[#93c5fd] leading-relaxed">
              He serves as a scientific advisor to research universities, public health agencies, and global technology organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking & Newsletter */}
      <section id="nonfic-speaking" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f283d] border border-[#38bdf8]/40 shadow-2xl">
          <Mic size={32} className="mx-auto text-[#38bdf8]" />
          <h2 className="text-3xl text-white font-bold mt-2">Subscribe to Brain & Horizon</h2>
          <p className="text-xs sm:text-sm text-[#93c5fd] mt-2 max-w-md mx-auto leading-relaxed">
            Monthly executive summaries of the latest peer-reviewed neuroscience literature, delivered in 5-minute actionable digests.
          </p>

          {newsletterSent ? (
            <div className="mt-6 p-4 rounded-xl bg-[#08131d] border border-[#38bdf8] text-[#38bdf8] text-xs font-bold">
              ✓ You are subscribed. Check your inbox for the welcome issue and PDF toolkit.
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
                placeholder="colleague@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-[#08131d] border border-[#38bdf8]/30 text-white text-xs placeholder:text-[#477a9e] focus:outline-none focus:border-[#38bdf8]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-[#08131d] text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Join Digest
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#38bdf8]/20 bg-[#040b12] text-center text-xs text-[#477a9e] space-y-2">
        <p>© 2026 Dr. Aris Thorne. Research and Publishing. Designed with Madeline Joy.</p>
        <p className="text-[11px] text-[#38bdf8]">PORTFOLIO DEMO WEBSITE CONCEPT • CRAFTED WITH MADELINE JOY</p>
      </footer>

      {/* Sample Modal */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#08131d] border border-[#38bdf8] max-w-2xl w-full max-h-[85vh] rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left">
            <div className="flex justify-between items-center border-b border-[#38bdf8]/20 pb-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Introduction Excerpt</span>
              <button onClick={() => setSampleOpen(false)} className="size-7 rounded-lg bg-[#0f283d] text-[#38bdf8]">✕</button>
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#e0f2fe]">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#38bdf8] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                The human prefrontal cortex evolved over two million years to process slow, contextual stimuli from our natural environment. In less than two decades, we have submerged it in an ocean of high-frequency digital noise.
              </p>
              <p>
                The consequence is not simply fatigue; it is the progressive atrophy of what neuroscientists term <em>attentional autonomy</em>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#38bdf8]/20 flex justify-end">
              <button
                onClick={() => { setSampleOpen(false); setBuyOpen(true); }}
                className="px-5 py-2.5 rounded-lg bg-[#38bdf8] text-[#08131d] text-xs font-bold uppercase tracking-wider"
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
          <div className="bg-[#08131d] border border-[#38bdf8] max-w-md w-full rounded-2xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold">Select Bookseller</span>
              <button onClick={() => setBuyOpen(false)} className="size-7 rounded-lg bg-[#0f283d] text-[#38bdf8]">✕</button>
            </div>
            <img src="/images/covers/the-cognitive-horizon.svg" alt="The Cognitive Horizon" className="w-28 mx-auto rounded shadow-xl mb-4 border border-[#38bdf8]/40" />
            <h3 className="text-xl text-white font-bold">The Cognitive Horizon</h3>
            <p className="text-xs text-[#93c5fd] mb-4">Hardcover, Audio, Digital, Academic Library editions</p>
            <div className="space-y-2 text-left">
              {["Amazon Hardcover & Kindle", "Barnes & Noble Science Best", "University Press Distribution"].map((b, i) => (
                <button
                  key={i}
                  onClick={() => { alert(`Demo trigger: Order via ${b}`); setBuyOpen(false); }}
                  className="w-full p-3 rounded-lg bg-[#0f283d] border border-[#38bdf8]/30 text-white flex items-center justify-between text-xs hover:bg-[#163c5b]"
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
