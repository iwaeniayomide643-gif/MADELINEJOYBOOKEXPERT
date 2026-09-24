import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, BookOpen, Check, ChevronDown, ChevronLeft, ChevronRight,
  Compass, ExternalLink, FileText, Globe2, Layers3, Menu, MessageSquareQuote,
  PenTool, Play, Rocket, Search, Send, Sparkles, Star, X, Volume2, Video, CheckCircle2,
} from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formattedWorks, formattedSamples, type FormattedWork } from "@/data/formattedWorks";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { authorWebsites, type AuthorWebsiteProject } from "@/data/authorWebsites";
import { MiniWebsiteViewer } from "@/components/author-websites/MiniWebsiteViewer";
import { AuthorWebsiteCard } from "@/components/author-websites/AuthorWebsiteCard";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Madeline Joy — Book Marketing & Author Services Specialist" },
    { name: "description", content: "Madeline Joy helps authors present, promote, and grow their books through thoughtful marketing, trailers, websites, editing, formatting, SEO, and launch support." },
    { property: "og:title", content: "Madeline Joy — Book Marketing & Author Services Specialist" },
    { property: "og:description", content: "Professional creative and editorial support for authors and their books." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Portfolio,
});

const navItems = ["Home", "About", "Services", "Portfolio", "Process", "Contact"];

const services = [
  ["Book Promotion", Rocket], ["Book Trailers", Play], ["Author Websites", Globe2],
  ["Author Spotlights", Sparkles], ["Book Editing", PenTool], ["Book Proofreading", Search],
  ["Book Formatting", BookOpen], ["Book Marketing", Compass], ["Book Launch Promotion", Rocket],
  ["Book SEO & Discoverability", Search], ["Author Branding", Sparkles], ["Promotional Graphics", Layers3],
  ["Book Descriptions & Marketing Copy", FileText], ["Social Media Book Promotion", MessageSquareQuote], ["Book Landing Pages", Globe2],
] as const;

const categories = [
  { id: "trailers", title: "Book Trailers", label: "Motion & Story", icon: Play, index: "01", summary: "Cinematic promotional trailers designed to capture reader attention across social platforms and landing pages." },
  { id: "formatted", title: "Formatted Works", label: "Editorial Design", icon: BookOpen, index: "02", summary: "Print and digital book interior formatting, custom typography, chapter designs, workbooks, and complete cover layouts." },
  { id: "websites", title: "Author Websites", label: "Digital Presence", icon: Globe2, index: "03", summary: "Bespoke author portfolios and book landing pages crafted for discoverability, reader engagement, and mailing list growth." },
  { id: "launch", title: "Book Launch Promotion", label: "Campaigns", icon: Rocket, index: "04", summary: "End-to-end launch strategies, promotional graphic suites, pre-order campaigns, and Amazon category placement." },
  { id: "reviews", title: "Reviews & Reader Feedback", label: "Social Proof", icon: MessageSquareQuote, index: "05", summary: "Curated author testimonials, editorial reviews, proofreader feedback, and publishing case studies." },
] as const;

type Category = (typeof categories)[number];

const fullBio = "I’m Madeline Joy, a book services specialist dedicated to helping authors present, promote, and grow their books and author brands. I help authors transform their books into professionally presented, discoverable, and marketable projects through services such as book promotion, book trailers, author websites, author spotlights, editing, proofreading, formatting, SEO, and marketing. I believe every book has a story worth discovering, and my goal is to help more readers discover the books and authors behind them.";

function getFallbackImage(src: string): string {
  const match = src.match(/([a-z0-9]{20})/);
  if (match) {
    return `https://media.contra.com/image/upload/q_auto:good,w_1100/${match[1]}.jpg`;
  }
  return src;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);
  const [selected, setSelected] = useState<Category | null>(null);
  const [preview, setPreview] = useState<{ workIndex: number; imageIndex: number } | null>(null);
  const [selectedWebsite, setSelectedWebsite] = useState<AuthorWebsiteProject | null>(null);
  const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const closeRef = useRef<HTMLButtonElement>(null);

  // Filter states inside workspaces
  const [reviewFilter, setReviewFilter] = useState("All");
  const [websiteFilter, setWebsiteFilter] = useState("All");
  const [animatingCardId, setAnimatingCardId] = useState<string | null>(null);

  useEffect(() => {
    const isAnyModalOpen = selected || preview || selectedWebsite || selectedReview;
    if (!isAnyModalOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (preview) setPreview(null);
      else if (selectedWebsite) setSelectedWebsite(null);
      else if (selectedReview) setSelectedReview(null);
      else setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, preview, selectedWebsite, selectedReview]);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const schema = z.object({
      name: z.string().trim().min(2, "Please enter your name.").max(100),
      email: z.string().trim().email("Please enter a valid email.").max(255),
      bookTitle: z.string().trim().max(150),
      service: z.string().min(1, "Please choose a service."),
      message: z.string().trim().min(10, "Please share a little more about your book.").max(1500),
    });
    const result = schema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    setSent(true);
    event.currentTarget.reset();
  };

  const navigatePreview = (direction: "prev" | "next") => {
    if (!preview) return;
    const currentSampleIndex = formattedSamples.findIndex(
      (s) => s.workIndex === preview.workIndex && s.imageIndex === preview.imageIndex
    );
    if (currentSampleIndex === -1) return;
    const nextIndex = direction === "next"
      ? (currentSampleIndex + 1) % formattedSamples.length
      : (currentSampleIndex - 1 + formattedSamples.length) % formattedSamples.length;
    const nextSample = formattedSamples[nextIndex];
    setPreview({ workIndex: nextSample.workIndex, imageIndex: nextSample.imageIndex });
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Background />

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav aria-label="Primary navigation" className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6 sm:py-3">
          <button onClick={() => scrollTo("home")} className="min-w-0 text-left transition-opacity hover:opacity-80" aria-label="Go to home">
            <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">Madeline Joy</span>
          </button>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item} variant="ghost" size="sm" onClick={() => scrollTo(item)} className="text-sm font-medium hover:text-primary">
                {item}
              </Button>
            ))}
          </div>
          <Button
            variant="icon"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </nav>
        <div className={cn("glass-panel mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-300 md:hidden", menuOpen ? "max-h-96 p-3 opacity-100" : "max-h-0 border-transparent p-0 opacity-0 pointer-events-none")}>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Button key={item} variant="ghost" className="w-full justify-start text-base" onClick={() => scrollTo(item)}>
                {item}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10">
        <div className="gentle-float relative mx-auto w-full max-w-[21rem] sm:max-w-[26rem] lg:max-w-[30rem] animate-in fade-in slide-in-from-left-6 duration-1000">
          <div className="glass-panel relative rounded-[2rem] p-3 sm:p-4">
            <div className="absolute -right-2 sm:-right-4 top-8 sm:top-12 z-10 rounded-full border border-glass-border bg-glass-strong px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-xl">
              Books • Brands • Beyond
            </div>
            <img
              src="/images/madeline-joy.jpg"
              onError={(e) => {
                e.currentTarget.src = "https://cea9a82b-7510-41be-8ff3-bd03d846d7b1.lovableproject.com/__l5e/assets-v1/0977be83-0975-4a4a-8545-03c035636a2b/madeline-joy.jpg";
              }}
              alt="Madeline Joy, book marketing and author-services specialist"
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-x-5 sm:inset-x-8 bottom-5 sm:bottom-8 rounded-2xl border border-glass-border bg-ink/70 p-3 sm:p-4 backdrop-blur-xl">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold">Creative partner for authors</p>
            </div>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-right-6 duration-1000">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            <span className="h-px w-8 sm:w-10 bg-gold" />
            Book Marketing & Author Services
          </p>
          <h1 className="font-display text-5xl leading-[0.95] font-medium sm:text-7xl lg:text-[6.5rem]">
            Madeline<br /><span className="italic text-primary">Joy</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed sm:leading-8 text-muted-foreground">
            I’m Madeline Joy, a book services specialist helping authors present, promote, and grow their books. I specialize in book promotion, book trailers, author websites, author spotlights, editing, proofreading, formatting, SEO, and book marketing.
          </p>
          <div className={cn("grid transition-all duration-500", bioOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <div className="overflow-hidden">
              <div className="glass-panel rounded-2xl p-4 sm:p-5 text-sm leading-relaxed sm:leading-7 text-muted-foreground">
                {fullBio}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={() => scrollTo("portfolio")} className="w-full sm:w-auto">
              Explore My Work <ArrowDownRight size={18} />
            </Button>
            <Button size="lg" variant="glass" onClick={() => setBioOpen(!bioOpen)} aria-expanded={bioOpen} className="w-full sm:w-auto">
              {bioOpen ? "Read Less" : "Read More About Me"} <ChevronDown className={cn("transition-transform duration-300", bioOpen && "rotate-180")} size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" eyebrow="The person behind the pages" title="Thoughtful craft, built around every book.">
        <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="glass-card relative mx-auto max-w-[22rem] lg:max-w-none w-full rounded-3xl p-3">
            <img
              loading="lazy"
              src="/images/madeline-joy.jpg"
              onError={(e) => {
                e.currentTarget.src = "https://cea9a82b-7510-41be-8ff3-bd03d846d7b1.lovableproject.com/__l5e/assets-v1/0977be83-0975-4a4a-8545-03c035636a2b/madeline-joy.jpg";
              }}
              alt="Madeline Joy in her creative workspace"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
          <div className="glass-panel rounded-3xl p-6 sm:p-10">
            <p className="font-display text-xl leading-snug sm:text-3xl">
              “Every book has a story worth discovering. My work is to help the right readers find it.”
            </p>
            <div className="my-6 h-px bg-border" />
            <p className="leading-relaxed sm:leading-7 text-muted-foreground">
              I bring editorial care and marketing clarity together, helping authors move from manuscript to a polished, discoverable presence.
            </p>
            <div className={cn("grid transition-all duration-500", bioOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <p className="overflow-hidden pt-4 leading-relaxed sm:leading-7 text-muted-foreground">
                {fullBio}
              </p>
            </div>
            <Button variant="glass" className="mt-6" onClick={() => setBioOpen(!bioOpen)}>
              {bioOpen ? "Read Less" : "Read More"}
              <ChevronDown size={17} className={cn("transition-transform duration-300", bioOpen && "rotate-180")} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" eyebrow="What I Do" title="Everything your book needs to meet its readers.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, Icon], i) => (
            <article key={name} className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-glass-highlight">
              <div className="mb-6 sm:mb-8 flex items-start justify-between">
                <Icon size={21} className="text-primary transition-transform group-hover:scale-110" />
                <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl">{name}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" eyebrow="Selected disciplines" title="Explore My Work" intro="A growing archive of real author projects. Choose a category to enter the dedicated collection workspace.">
        <div className="mb-7 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {["All", ...categories.map((c) => c.title)].map((item) => (
            <Button key={item} variant={filter === item ? "primary" : "glass"} size="sm" className="shrink-0" onClick={() => setFilter(item)}>
              {item}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories
            .filter((c) => filter === "All" || filter === c.title)
            .map((category, i) => {
              const Icon = category.icon;
              const isFormatted = category.id === "formatted";
              const isReviews = category.id === "reviews";
              const isWebsites = category.id === "websites";
              const isTrailersOrLaunch = category.id === "trailers" || category.id === "launch";
              const isAnimating = animatingCardId === category.id;

              let badgeText = category.label;
              if (isFormatted) badgeText = `${category.label} • 30 Real Works`;
              else if (isReviews) badgeText = `${category.label} • 20 Author Reviews`;
              else if (isWebsites) badgeText = `${category.label} • 10 Web Case Studies`;
              else if (isTrailersOrLaunch) badgeText = isAnimating ? "✨ Curation In Progress" : `${category.label} • Production Showcase`;

              const handleCardClick = () => {
                if (isTrailersOrLaunch) {
                  setAnimatingCardId(category.id);
                  setTimeout(() => {
                    setAnimatingCardId((curr) => (curr === category.id ? null : curr));
                  }, 1200);
                  return;
                }
                setSelected(category);
              };

              return (
                <button
                  key={category.id}
                  onClick={handleCardClick}
                  className={cn(
                    "glass-card glass-sheen group min-h-60 rounded-3xl p-6 sm:p-9 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-glass-highlight hover:bg-glass-strong cursor-pointer relative overflow-hidden",
                    i === 0 && filter === "All" && "md:col-span-2 md:min-h-72",
                    isFormatted && "border-primary/40 ring-1 ring-primary/20",
                    isReviews && "border-gold/30",
                    isWebsites && "border-secondary/40",
                    isTrailersOrLaunch && "border-gold/20",
                    isAnimating && "scale-[0.98] border-gold ring-2 ring-gold/50 shadow-[0_0_40px_rgba(220,179,112,0.35)]"
                  )}
                  aria-label={isTrailersOrLaunch ? `${category.title} showcase` : `Open ${category.title} workspace`}
                >
                  {/* Subtle click shine effect when clicked */}
                  {isAnimating && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/15 to-transparent animate-pulse pointer-events-none" />
                  )}

                  <div className="flex h-full flex-col justify-between gap-8 sm:gap-12 relative z-10">
                    <div className="flex items-start justify-between">
                      <span className={cn(
                        "grid size-12 sm:size-14 place-items-center rounded-full border border-glass-border bg-glass transition-transform duration-300",
                        isAnimating ? "scale-110 rotate-12 bg-gold/20 text-gold" : "group-hover:scale-110"
                      )}>
                        <Icon className={cn("size-6 sm:size-7", isAnimating ? "text-gold" : "text-primary")} />
                      </span>
                      <span className="font-display text-3xl sm:text-4xl text-foreground/15">{category.index}</span>
                    </div>
                    <div>
                      <p className={cn(
                        "mb-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                        isAnimating ? "text-gold font-bold" : "text-gold"
                      )}>
                        {badgeText}
                      </p>
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                        <div>
                          <h3 className="min-w-0 font-display text-2xl sm:text-4xl">{category.title}</h3>
                          <p className="mt-2 line-clamp-2 text-xs sm:text-sm text-muted-foreground">{category.summary}</p>
                        </div>
                        <span className={cn(
                          "flex size-10 items-center justify-center rounded-full border border-glass-border bg-glass shrink-0 transition-all duration-300",
                          isAnimating
                            ? "bg-gold text-ink scale-110 shadow-lg"
                            : "group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground"
                        )}>
                          {isTrailersOrLaunch ? (
                            <Sparkles size={18} className={isAnimating ? "animate-spin" : ""} />
                          ) : (
                            <ArrowRight size={18} />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" eyebrow="My Process" title="From first idea to polished presence.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Discover", "Understand the author’s book and goals."],
            ["02", "Plan", "Identify the right services and creative direction."],
            ["03", "Create", "Develop the promotional, editorial, formatting, or web materials."],
            ["04", "Present", "Deliver polished materials designed to help the author present and promote their work professionally."],
          ].map(([number, title, copy]) => (
            <article key={number} className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-4xl sm:text-5xl text-primary/60">{number}</span>
              <div className="my-5 h-px bg-border" />
              <h3 className="font-display text-xl sm:text-2xl">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" eyebrow="Start a conversation" title="Let’s Talk About Your Book" intro="Tell me where your book is now—and where you’d like it to go.">
        <div className="glass-panel grid gap-8 rounded-3xl p-5 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-12">
          <div>
            <p className="font-display text-2xl sm:text-3xl leading-tight">Your book deserves a presentation as considered as the writing itself.</p>
            <p className="mt-4 text-sm leading-relaxed sm:leading-7 text-muted-foreground">Share a few details and I’ll be ready to understand the support you need.</p>
          </div>
          {sent ? (
            <div className="flex min-h-72 flex-col items-center justify-center text-center p-6">
              <span className="mb-4 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check size={24} />
              </span>
              <h3 className="font-display text-2xl sm:text-3xl">Thank you.</h3>
              <p className="mt-2 max-w-md text-sm sm:text-base text-muted-foreground">Your details are ready. Direct message delivery will be available once a contact service is connected.</p>
              <Button variant="glass" className="mt-6" onClick={() => setSent(false)}>Send another message</Button>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors["name"]} />
              <Field label="Email" name="email" type="email" error={errors["email"]} />
              <Field label="Book Title" name="bookTitle" error={errors["bookTitle"]} />
              <label className="grid gap-1.5 text-sm font-medium">
                Service Needed
                <select name="service" defaultValue="" className="min-h-12 rounded-xl border border-glass-border bg-input px-4 text-foreground outline-hidden focus:border-primary">
                  <option value="" disabled className="bg-ink text-muted-foreground">Choose a service</option>
                  {services.map(([name]) => (
                    <option key={name} value={name} className="bg-ink text-foreground">{name}</option>
                  ))}
                </select>
                {errors["service"] && <span className="text-xs text-destructive">{errors["service"]}</span>}
              </label>
              <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
                Message
                <textarea name="message" rows={4} className="rounded-xl border border-glass-border bg-input px-4 py-3 text-foreground outline-hidden placeholder:text-muted-foreground focus:border-primary" placeholder="Tell me about your book, goals, and timeline…" />
                {errors["message"] && <span className="text-xs text-destructive">{errors["message"]}</span>}
              </label>
              <Button type="submit" size="lg" className="sm:col-span-2 sm:justify-self-start mt-2">
                Let’s Talk About Your Book <Send size={17} />
              </Button>
            </form>
          )}
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative border-t border-border px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between text-center sm:text-left">
          <div>
            <p className="font-display text-2xl">Madeline Joy</p>
            <p className="mt-1 text-sm text-muted-foreground">Helping authors present, promote, and grow their books.</p>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Madeline Joy. All rights reserved.</p>
        </div>
      </footer>

      {/* Main Category Workspace Modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}
        >
          <div className="glass-panel animate-in fade-in zoom-in-95 relative w-full max-h-[92svh] max-w-6xl overflow-y-auto rounded-3xl p-5 duration-300 sm:p-8 lg:p-10">
            <Button
              ref={closeRef}
              variant="icon"
              size="icon"
              className="absolute right-3 top-3 sm:right-6 sm:top-6 z-20 size-10 rounded-full border border-glass-border bg-glass-strong hover:bg-glass"
              onClick={() => setSelected(null)}
              aria-label="Close portfolio workspace"
            >
              <X size={20} />
            </Button>

            {/* Workspace Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="grid size-14 place-items-center rounded-full border border-glass-border bg-glass shrink-0">
                <selected.icon className="text-primary size-7" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{selected.label}</p>
                <h2 id="portfolio-dialog-title" className="pr-10 font-display text-3xl sm:text-5xl">{selected.title}</h2>
              </div>
            </div>

            {/* 1. FORMATTED WORKS WORKSPACE */}
            {selected.id === "formatted" && (
              <div className="mt-6">
                <div className="mb-6 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Every formatted-book sample from Madeline’s portfolio is displayed below. Select any card for a closer full-screen inspection.
                  </p>
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {formattedSamples.length} SAMPLES · {formattedWorks.length} PROJECTS
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {formattedSamples.map(({ work, workIndex, image, imageIndex }) => (
                    <article key={`${work.title}-${imageIndex}`} className="glass-card group flex flex-col overflow-hidden rounded-2xl">
                      <button
                        className="relative block aspect-[16/10] w-full overflow-hidden bg-glass text-left cursor-pointer"
                        onClick={() => setPreview({ workIndex, imageIndex })}
                        aria-label={`View ${work.title}, sample ${imageIndex + 1}`}
                      >
                        <img
                          src={image}
                          alt={`${work.title}, sample ${imageIndex + 1}`}
                          loading="lazy"
                          onError={(e) => {
                            const fb = getFallbackImage(image);
                            if (e.currentTarget.src !== fb) e.currentTarget.src = fb;
                          }}
                          className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border border-glass-border bg-glass-strong backdrop-blur-xl">
                          <Search size={16} />
                        </span>
                      </button>
                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-gold font-medium">{work.category}</p>
                          <h3 className="mt-1.5 font-display text-xl leading-snug">{work.title}</h3>
                          {work.images.length > 1 && (
                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                              Sample {imageIndex + 1} of {work.images.length}
                            </p>
                          )}
                          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{work.description}</p>
                        </div>
                        <Button variant="glass" size="sm" className="mt-5 w-full justify-between" onClick={() => setPreview({ workIndex, imageIndex })}>
                          <span>View Full Size</span>
                          <ArrowRight size={15} />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* 2. REVIEWS & READER FEEDBACK WORKSPACE */}
            {selected.id === "reviews" && (
              <div className="mt-6">
                <div className="mb-6 flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      Author testimonials, publication feedback, and case reflections across fiction, non-fiction, and special edition launches.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">20 AUTHOR TESTIMONIALS</span>
                  </div>
                </div>

                {/* Genre Filter Pills */}
                <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {["All", "Romance", "Fantasy", "Thriller", "Non-Fiction", "Historical", "Self-Help"].map((genre) => (
                    <Button
                      key={genre}
                      variant={reviewFilter === genre ? "primary" : "glass"}
                      size="sm"
                      className="shrink-0 text-xs"
                      onClick={() => setReviewFilter(genre)}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>

                {/* Testimonial Cards Grid with Editorial Variation */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {testimonials
                    .filter((t) => reviewFilter === "All" || t.genre.toLowerCase().includes(reviewFilter.toLowerCase()))
                    .map((t, idx) => {
                      const isEven = idx % 2 === 0;
                      return (
                        <article
                          key={t.id}
                          className="glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-gold/40"
                        >
                          <div>
                            {/* Top Row: Author Headshot, Name, Genre, Service Badge */}
                            <div className="flex items-start gap-4 mb-4">
                              <img
                                src={t.authorImage}
                                alt={t.authorName}
                                loading="lazy"
                                className="size-16 sm:size-20 rounded-2xl object-cover border border-glass-border shadow-lg shrink-0"
                              />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{t.genre}</span>
                                  <div className="flex text-amber-400 gap-0.5">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                      <Star key={i} size={13} fill="currentColor" />
                                    ))}
                                  </div>
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl mt-0.5 truncate">{t.authorName}</h3>
                                <p className="text-xs text-muted-foreground">{t.authorTitle}</p>
                                <span className="inline-block mt-1 text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                                  {t.service}
                                </span>
                              </div>
                            </div>

                            {/* Book Cover + Pull Quote Split */}
                            <div className="my-4 flex items-start gap-4 p-4 rounded-xl bg-ink/40 border border-glass-border">
                              <img
                                src={t.bookCover}
                                alt={t.bookTitle}
                                loading="lazy"
                                className="w-16 sm:w-20 aspect-[2/3] rounded-lg object-cover shadow-md shrink-0 border border-glass-border"
                              />
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gold uppercase tracking-[0.14em] font-medium">Book: {t.bookTitle}</p>
                                <p className="mt-1 font-display text-sm sm:text-base italic text-foreground/90 leading-snug">
                                  “{t.featuredQuote}”
                                </p>
                              </div>
                            </div>

                            {/* Full Testimonial Text */}
                            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mt-2">
                              {t.fullTestimonial}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                            <span className="text-[11px] text-gold uppercase tracking-[0.16em] font-medium">
                              {t.highlightCategory || "Publishing Case Study"}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-primary hover:text-primary-foreground"
                              onClick={() => setSelectedReview(t)}
                            >
                              View Book Case Study <ArrowRight size={13} className="ml-1" />
                            </Button>
                          </div>
                        </article>
                      );
                    })}
                </div>
              </div>
            )}

            {/* 3. AUTHOR WEBSITES WORKSPACE */}
            {selected.id === "websites" && (
              <div className="mt-6">
                <div className="mb-6 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Bespoke author portfolio designs and high-conversion reader funnels crafted for discoverability, mailing list growth, and book sales.
                  </p>
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    10 CASE STUDY CONCEPTS
                  </p>
                </div>

                {/* Genre Filter */}
                <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {["All", "Romance", "Fantasy", "Thriller", "Literary", "Business", "Self-Help", "Children's"].map((genre) => (
                    <Button
                      key={genre}
                      variant={websiteFilter === genre ? "primary" : "glass"}
                      size="sm"
                      className="shrink-0 text-xs"
                      onClick={() => setWebsiteFilter(genre)}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>

                {/* Websites Grid with Bespoke Art Directed Cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {authorWebsites
                    .filter((w) => websiteFilter === "All" || w.genre.toLowerCase().includes(websiteFilter.toLowerCase()))
                    .map((project) => (
                      <AuthorWebsiteCard
                        key={project.id}
                        project={project}
                        onOpen={() => setSelectedWebsite(project)}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LIGHTBOX FOR FORMATTED WORKS */}
      {preview && (() => {
        const work = formattedWorks[preview.workIndex];
        if (!work) return null;
        const currentSrc = work.images[preview.imageIndex];
        return (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${work.title} image preview`}
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink/92 p-3 sm:p-6 backdrop-blur-2xl"
            onMouseDown={(event) => event.target === event.currentTarget && setPreview(null)}
          >
            <div className="relative flex max-h-[96svh] w-full max-w-6xl flex-col items-center">
              <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
                <Button
                  variant="icon"
                  size="icon"
                  className="rounded-full border border-glass-border bg-glass-strong hover:bg-glass"
                  onClick={() => setPreview(null)}
                  aria-label="Close image preview"
                >
                  <X size={20} />
                </Button>
              </div>

              <button
                onClick={() => navigatePreview("prev")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden sm:grid size-11 place-items-center rounded-full border border-glass-border bg-glass-strong text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                aria-label="Previous sample"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => navigatePreview("next")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden sm:grid size-11 place-items-center rounded-full border border-glass-border bg-glass-strong text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                aria-label="Next sample"
              >
                <ChevronRight size={22} />
              </button>

              <div className="flex max-h-[74svh] sm:max-h-[78svh] w-full items-center justify-center p-2">
                <img
                  src={currentSrc}
                  alt={`${work.title}, view ${preview.imageIndex + 1}`}
                  onError={(e) => {
                    const fb = getFallbackImage(currentSrc);
                    if (e.currentTarget.src !== fb) e.currentTarget.src = fb;
                  }}
                  className="max-h-[72svh] sm:max-h-[76svh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
              </div>

              <div className="glass-panel mt-3 flex w-full max-w-3xl flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl px-4 py-3 sm:px-6">
                <div className="min-w-0 text-center sm:text-left">
                  <p className="truncate font-display text-base sm:text-lg">{work.title}</p>
                  <p className="text-xs text-gold uppercase tracking-[0.15em]">{work.category} • Sample {preview.imageIndex + 1} of {work.images.length}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex sm:hidden gap-2">
                    <Button variant="glass" size="sm" onClick={() => navigatePreview("prev")}>
                      <ChevronLeft size={16} /> Prev
                    </Button>
                    <Button variant="glass" size="sm" onClick={() => navigatePreview("next")}>
                      Next <ChevronRight size={16} />
                    </Button>
                  </div>
                  {work.images.length > 1 && (
                    <div className="flex shrink-0 gap-2">
                      {work.images.map((img, imgIdx) => (
                        <button
                          key={img}
                          onClick={() => setPreview({ workIndex: preview.workIndex, imageIndex: imgIdx })}
                          className={cn(
                            "size-10 sm:size-12 overflow-hidden rounded-lg border transition-all cursor-pointer",
                            imgIdx === preview.imageIndex ? "border-primary ring-2 ring-primary/40" : "border-glass-border opacity-70 hover:opacity-100"
                          )}
                          aria-label={`Show view ${imgIdx + 1}`}
                        >
                          <img
                            src={img}
                            alt=""
                            onError={(e) => {
                              const fb = getFallbackImage(img);
                              if (e.currentTarget.src !== fb) e.currentTarget.src = fb;
                            }}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* INTERACTIVE MINI AUTHOR WEBSITE VIEWER */}
      {selectedWebsite && (
        <MiniWebsiteViewer
          project={selectedWebsite}
          onClose={() => setSelectedWebsite(null)}
          onSelectProject={(p) => setSelectedWebsite(p)}
          onBookService={() => {
            setSelectedWebsite(null);
            setSelected(null);
            scrollTo("contact");
          }}
        />
      )}

      {/* INDIVIDUAL TESTIMONIAL CASE STUDY MODAL */}
      {selectedReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-modal-title"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-3 backdrop-blur-xl sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && setSelectedReview(null)}
        >
          <div className="glass-panel relative w-full max-h-[92svh] max-w-3xl overflow-y-auto rounded-3xl p-6 sm:p-10">
            <Button
              variant="icon"
              size="icon"
              className="absolute right-4 top-4 z-20 size-10 rounded-full border border-glass-border bg-glass-strong"
              onClick={() => setSelectedReview(null)}
              aria-label="Close review modal"
            >
              <X size={20} />
            </Button>

            <div className="flex items-start gap-5 mb-6">
              <img
                src={selectedReview.authorImage}
                alt={selectedReview.authorName}
                className="size-20 sm:size-24 rounded-2xl object-cover border border-glass-border shadow-xl shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">{selectedReview.genre}</span>
                <h2 id="review-modal-title" className="font-display text-2xl sm:text-4xl mt-0.5">{selectedReview.authorName}</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">{selectedReview.authorTitle}</p>
                <div className="flex text-amber-400 gap-1 mt-1.5">
                  {Array.from({ length: selectedReview.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            {/* Book Cover + Quote Banner */}
            <div className="my-5 flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl bg-ink/50 border border-glass-border">
              <img
                src={selectedReview.bookCover}
                alt={selectedReview.bookTitle}
                className="w-28 sm:w-32 aspect-[2/3] rounded-xl object-cover shadow-2xl border border-glass-border shrink-0"
              />
              <div>
                <p className="text-xs text-gold uppercase tracking-[0.16em] font-medium">Featured Book Project</p>
                <h3 className="font-display text-xl sm:text-2xl mt-0.5">{selectedReview.bookTitle}</h3>
                <p className="text-xs text-primary font-medium mt-0.5">Service: {selectedReview.service}</p>
                <div className="my-3 h-px bg-border" />
                <p className="font-display text-base sm:text-lg italic text-foreground/90 leading-snug">
                  “{selectedReview.featuredQuote}”
                </p>
              </div>
            </div>

            {/* Full Testimonial */}
            <div className="my-6">
              <h4 className="font-display text-lg mb-2">Author Review & Feedback</h4>
              <p className="text-sm leading-relaxed text-muted-foreground bg-glass/60 p-4 rounded-xl border border-glass-border">
                {selectedReview.fullTestimonial}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-end border-t border-border pt-4">
              <Button variant="glass" onClick={() => setSelectedReview(null)}>Close</Button>
              <Button onClick={() => { setSelectedReview(null); setSelected(null); scrollTo("contact"); }}>
                Start Your Book Project <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 5. INTERACTIVE LIVE MINI AUTHOR WEBSITE VIEWER */}
      {selectedWebsite && (
        <MiniWebsiteViewer
          project={selectedWebsite}
          onClose={() => setSelectedWebsite(null)}
          onSelectProject={(p) => setSelectedWebsite(p)}
          onBookService={() => {
            setSelectedWebsite(null);
            setSelected(null);
            scrollTo("contact");
          }}
        />
      )}
    </main>
  );
}

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="ambient-a absolute -left-32 top-24 size-[28rem] sm:size-[32rem] rounded-full bg-rose/15 blur-3xl" />
      <div className="ambient-b absolute -right-40 top-[36rem] size-[30rem] sm:size-[36rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:64px_64px] sm:[background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]" />
    </div>
  );
}

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-tight sm:leading-[1.1]">{title}</h2>
          {intro && <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string | undefined }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        className="min-h-12 rounded-xl border border-glass-border bg-input px-4 text-foreground outline-hidden placeholder:text-muted-foreground focus:border-primary"
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}
