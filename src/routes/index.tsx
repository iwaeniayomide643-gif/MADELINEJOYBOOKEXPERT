import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, BookOpen, Check, ChevronDown, Compass,
  ExternalLink, FileText, Globe2, Layers3, Menu, MessageSquareQuote,
  PenTool, Play, Rocket, Search, Send, Sparkles, X,
} from "lucide-react";
import { z } from "zod";
import portraitAsset from "@/assets/madeline-joy.jpg.asset.json";
import childrensInteriorAsset from "@/assets/cpnc2ztwtsqkz29g4yf4.json";
import childrensCoverAsset from "@/assets/xev3tjgyx2pehawbk7me.json";
import kisahAsset from "@/assets/f3jbum3sdg6rjnmkbsl7.json";
import workbookAsset from "@/assets/ylwmtvhdwkptfmagovhi.json";
import fantasyAsset from "@/assets/pxb9z7dmruuzi6cingxn.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  { id: "trailers", title: "Book Trailers", label: "Motion & Story", icon: Play, index: "01" },
  { id: "formatted", title: "Formatted Works", label: "Editorial Design", icon: BookOpen, index: "02" },
  { id: "websites", title: "Author Websites", label: "Digital Presence", icon: Globe2, index: "03" },
  { id: "launch", title: "Book Launch Promotion", label: "Campaigns", icon: Rocket, index: "04" },
  { id: "reviews", title: "Reviews & Reader Feedback", label: "Social Proof", icon: MessageSquareQuote, index: "05" },
] as const;
type Category = (typeof categories)[number];

const formattedWorks = [
  {
    title: "Colorful Children’s Book Design",
    category: "Children’s book cover & interior",
    description: "A bright, playful presentation with an illustrated cover and a lively chapter-opening spread.",
    images: [childrensCoverAsset.url, childrensInteriorAsset.url],
  },
  {
    title: "Kisah Seru di Alam",
    category: "Children’s book cover",
    description: "A full wraparound illustrated cover for Muhammad Adam’s children’s adventure.",
    images: [kisahAsset.url],
  },
  {
    title: "Retail Delivery Strategies for Community Banking",
    category: "Professional workbook design",
    description: "A structured workbook system pairing a polished cover with clear, practical interior pages.",
    images: [workbookAsset.url],
  },
  {
    title: "African Fantasy Novel",
    category: "Fiction interior formatting",
    description: "A refined chapter-opening treatment designed for an immersive fiction reading experience.",
    images: [fantasyAsset.url],
  },
] as const;

const formattedSamples = formattedWorks.flatMap((work, workIndex) =>
  work.images.map((image, imageIndex) => ({
    work,
    workIndex,
    image,
    imageIndex,
  })),
);

const fullBio = "I’m Madeline Joy, a book services specialist dedicated to helping authors present, promote, and grow their books and author brands. I help authors transform their books into professionally presented, discoverable, and marketable projects through services such as book promotion, book trailers, author websites, author spotlights, editing, proofreading, formatting, SEO, and marketing. I believe every book has a story worth discovering, and my goal is to help more readers discover the books and authors behind them.";

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);
  const [selected, setSelected] = useState<Category | null>(null);
  const [preview, setPreview] = useState<{ workIndex: number; imageIndex: number } | null>(null);
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (preview) setPreview(null);
      else setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [selected, preview]);

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

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Background />
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
        <nav aria-label="Primary navigation" className="glass-panel mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center rounded-full px-4 py-3 sm:px-6">
          <button onClick={() => scrollTo("home")} className="min-w-0 text-left" aria-label="Go to home">
            <span className="font-display text-xl font-semibold">Madeline Joy</span>
          </button>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => <Button key={item} variant="ghost" size="sm" onClick={() => scrollTo(item)}>{item}</Button>)}
          </div>
          <Button variant="icon" size="icon" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </nav>
        <div className={cn("glass-panel mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-300 md:hidden", menuOpen ? "max-h-96 p-3 opacity-100" : "max-h-0 border-transparent p-0 opacity-0")}>
          {navItems.map((item) => <Button key={item} variant="ghost" className="w-full justify-start" onClick={() => scrollTo(item)}>{item}</Button>)}
        </div>
      </header>

      <section id="home" className="relative mx-auto grid min-h-[94svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <div className="gentle-float relative mx-auto w-full max-w-[31rem] animate-in fade-in slide-in-from-left-6 duration-1000">
          <div className="glass-panel relative rounded-[2rem] p-3 sm:p-4">
            <div className="absolute -right-4 top-12 z-10 rounded-full border border-glass-border bg-glass-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-xl">Books • Brands • Beyond</div>
            <img src={portraitAsset.url} alt="Madeline Joy, book marketing and author-services specialist" className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-center" fetchPriority="high" />
            <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-glass-border bg-ink/55 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Creative partner for authors</p>
            </div>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-right-6 duration-1000">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold"><span className="h-px w-10 bg-gold" />Book Marketing & Author Services</p>
          <h1 className="font-display text-6xl leading-[0.94] font-medium sm:text-7xl lg:text-[6.7rem]">Madeline<br/><span className="italic text-primary">Joy</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">I’m Madeline Joy, a book services specialist helping authors present, promote, and grow their books. I specialize in book promotion, book trailers, author websites, author spotlights, editing, proofreading, formatting, SEO, and book marketing.</p>
          <div className={cn("grid transition-all duration-700", bioOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <div className="overflow-hidden"><div className="glass-panel rounded-2xl p-5 text-sm leading-7 text-muted-foreground">{fullBio}</div></div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollTo("portfolio")}>Explore My Work <ArrowDownRight size={18}/></Button>
            <Button size="lg" variant="glass" onClick={() => setBioOpen(!bioOpen)} aria-expanded={bioOpen}>Read More About Me <ChevronDown className={cn("transition-transform", bioOpen && "rotate-180")} size={18}/></Button>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="The person behind the pages" title="Thoughtful craft, built around every book.">
        <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="glass-card relative rounded-3xl p-3"><img loading="lazy" src={portraitAsset.url} alt="Madeline Joy in her creative workspace" className="aspect-square w-full rounded-2xl object-cover" /></div>
          <div className="glass-panel rounded-3xl p-7 sm:p-10">
            <p className="font-display text-2xl leading-relaxed sm:text-3xl">“Every book has a story worth discovering. My work is to help the right readers find it.”</p>
            <div className="my-7 h-px bg-border" />
            <p className="leading-7 text-muted-foreground">I bring editorial care and marketing clarity together, helping authors move from manuscript to a polished, discoverable presence.</p>
            <div className={cn("grid transition-all duration-700", bioOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}><p className="overflow-hidden pt-4 leading-7 text-muted-foreground">{fullBio}</p></div>
            <Button variant="glass" className="mt-6" onClick={() => setBioOpen(!bioOpen)}>{bioOpen ? "Read Less" : "Read More"}<ChevronDown size={17} className={cn("transition-transform", bioOpen && "rotate-180")}/></Button>
          </div>
        </div>
      </Section>

      <Section id="services" eyebrow="What I Do" title="Everything your book needs to meet its readers.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, Icon], i) => <article key={name} className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-glass-highlight">
            <div className="mb-8 flex items-start justify-between"><Icon size={21} className="text-primary transition-transform group-hover:scale-110"/><span className="text-xs text-muted-foreground">{String(i + 1).padStart(2,"0")}</span></div>
            <h3 className="font-display text-xl">{name}</h3>
          </article>)}
        </div>
      </Section>

      <Section id="portfolio" eyebrow="Selected disciplines" title="Explore My Work" intro="A growing archive of real author projects. Choose a category to enter the collection.">
        <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
          {["All", ...categories.map(c => c.title)].map((item) => <Button key={item} variant={filter === item ? "primary" : "glass"} size="sm" className="shrink-0" onClick={() => setFilter(item)}>{item}</Button>)}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {categories.filter(c => filter === "All" || filter === c.title).map((category, i) => {
            const Icon = category.icon;
            return <button key={category.id} onClick={() => setSelected(category)} className={cn("glass-card glass-sheen group min-h-64 rounded-3xl p-7 text-left transition-all duration-500 hover:-translate-y-2 hover:border-glass-highlight hover:bg-glass-strong sm:p-9", i === 0 && filter === "All" && "lg:col-span-2 lg:min-h-80")}>
              <div className="flex h-full flex-col justify-between gap-12">
                <div className="flex items-start justify-between"><span className="grid size-14 place-items-center rounded-full border border-glass-border bg-glass"><Icon className="text-primary transition-transform duration-300 group-hover:scale-110"/></span><span className="font-display text-4xl text-foreground/15">{category.index}</span></div>
                <div><p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">{category.label}</p><div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><h3 className="min-w-0 font-display text-3xl sm:text-4xl">{category.title}</h3><ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1"/></div></div>
              </div>
            </button>;
          })}
        </div>
      </Section>

      <Section id="process" eyebrow="My Process" title="From first idea to polished presence.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Discover", "Understand the author’s book and goals."], ["02", "Plan", "Identify the right services and creative direction."],
            ["03", "Create", "Develop the promotional, editorial, formatting, or web materials."], ["04", "Present", "Deliver polished materials designed to help the author present and promote their work professionally."],
          ].map(([number, title, copy]) => <article key={number} className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <span className="font-display text-5xl text-primary/60">{number}</span><div className="my-6 h-px bg-border"/><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </article>)}
        </div>
      </Section>

      <Section id="contact" eyebrow="Start a conversation" title="Let’s Talk About Your Book" intro="Tell me where your book is now—and where you’d like it to go.">
        <div className="glass-panel grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-12">
          <div><p className="font-display text-3xl leading-tight">Your book deserves a presentation as considered as the writing itself.</p><p className="mt-5 text-sm leading-7 text-muted-foreground">Share a few details and I’ll be ready to understand the support you need.</p></div>
          {sent ? <div className="flex min-h-80 flex-col items-center justify-center text-center"><span className="mb-5 grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"><Check/></span><h3 className="font-display text-3xl">Thank you.</h3><p className="mt-3 max-w-md text-muted-foreground">Your details are ready. Direct message delivery will be available once a contact service is connected.</p><Button variant="glass" className="mt-6" onClick={() => setSent(false)}>Send another message</Button></div> :
          <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" error={errors["name"]}/><Field label="Email" name="email" type="email" error={errors["email"]}/><Field label="Book Title" name="bookTitle" error={errors["bookTitle"]}/>
            <label className="grid gap-2 text-sm font-medium">Service Needed<select name="service" defaultValue="" className="min-h-12 rounded-xl border border-glass-border bg-input px-4 text-foreground outline-hidden focus:border-primary"><option value="" disabled>Choose a service</option>{services.map(([name]) => <option key={name} value={name} className="bg-ink">{name}</option>)}</select>{errors["service"] && <span className="text-xs text-destructive">{errors["service"]}</span>}</label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">Message<textarea name="message" rows={5} className="rounded-xl border border-glass-border bg-input px-4 py-3 text-foreground outline-hidden placeholder:text-muted-foreground focus:border-primary" placeholder="Tell me about your book, goals, and timeline…"/>{errors["message"] && <span className="text-xs text-destructive">{errors["message"]}</span>}</label>
            <Button type="submit" size="lg" className="sm:col-span-2 sm:justify-self-start">Let’s Talk About Your Book <Send size={17}/></Button>
          </form>}
        </div>
      </Section>

      <footer className="relative border-t border-border px-5 py-10"><div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-display text-2xl">Madeline Joy</p><p className="mt-1 text-sm text-muted-foreground">Helping authors present, promote, and grow their books.</p></div><p className="text-xs text-muted-foreground">© 2026 Madeline Joy. All rights reserved.</p></div></footer>

      {selected && <div role="dialog" aria-modal="true" aria-labelledby="portfolio-dialog-title" className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-3 backdrop-blur-md sm:p-5" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
        <div className={cn("glass-panel animate-in fade-in zoom-in-95 relative w-full overflow-y-auto rounded-3xl p-6 duration-300 sm:p-10", selected.id === "formatted" ? "max-h-[92svh] max-w-6xl" : "max-w-3xl")}>
          <Button ref={closeRef} variant="icon" size="icon" className="absolute right-4 top-4" onClick={() => setSelected(null)} aria-label="Close portfolio"><X size={20}/></Button>
          <span className="mb-6 grid size-16 place-items-center rounded-full border border-glass-border bg-glass"><selected.icon className="text-primary"/></span>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{selected.label}</p><h2 id="portfolio-dialog-title" className="mt-2 pr-12 font-display text-4xl sm:text-5xl">{selected.title}</h2>
          {selected.id === "formatted" ? (
            <div className="mt-8">
              <div className="mb-6 flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">Every formatted-book sample from Madeline’s portfolio is displayed below. Select any image for a closer view.</p>
                <p className="shrink-0 text-xs uppercase tracking-[0.18em] text-gold">{formattedSamples.length} samples · {formattedWorks.length} projects</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
              {formattedSamples.map(({ work, workIndex, image, imageIndex }) => (
                <article key={`${work.title}-${imageIndex}`} className="glass-card group overflow-hidden rounded-2xl">
                  <button className="relative block aspect-[16/10] w-full overflow-hidden bg-glass text-left" onClick={() => setPreview({ workIndex, imageIndex })} aria-label={`View ${work.title}, sample ${imageIndex + 1}`}>
                    <img src={image} alt={`${work.title}, sample ${imageIndex + 1}`} loading="lazy" className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.025]" />
                    <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full border border-glass-border bg-glass-strong backdrop-blur-xl"><Search size={17}/></span>
                  </button>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{work.category}</p>
                    <h3 className="mt-2 font-display text-2xl">{work.title}</h3>
                    {work.images.length > 1 && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Sample {imageIndex + 1} of {work.images.length}</p>}
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{work.description}</p>
                    <Button variant="glass" size="sm" className="mt-5" onClick={() => setPreview({ workIndex, imageIndex })}>View Sample <ArrowRight size={15}/></Button>
                  </div>
                </article>
              ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 grid min-h-64 place-items-center rounded-2xl border border-dashed border-glass-border bg-glass p-8 text-center"><div><Sparkles className="mx-auto mb-4 text-primary"/><h3 className="font-display text-2xl">Portfolio samples coming soon.</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">Madeline’s real project materials will appear here as they are added. No sample or client work has been fabricated.</p></div></div>
          )}
        </div>
      </div>}
      {preview && (() => {
        const work = formattedWorks[preview.workIndex];
        if (!work) return null;
        return <div role="dialog" aria-modal="true" aria-label={`${work.title} image preview`} className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-3 backdrop-blur-xl" onMouseDown={(event) => event.target === event.currentTarget && setPreview(null)}>
          <div className="relative flex max-h-[94svh] w-full max-w-6xl flex-col items-center">
            <Button variant="icon" size="icon" className="absolute right-2 top-2 z-10 border border-glass-border bg-glass-strong" onClick={() => setPreview(null)} aria-label="Close image preview"><X size={20}/></Button>
            <img src={work.images[preview.imageIndex]} alt={`${work.title}, view ${preview.imageIndex + 1}`} className="max-h-[78svh] w-full rounded-2xl object-contain" />
            <div className="glass-panel mt-3 flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl px-4 py-3">
              <div className="min-w-0"><p className="truncate font-display text-lg">{work.title}</p><p className="text-xs text-muted-foreground">View {preview.imageIndex + 1} of {work.images.length}</p></div>
              {work.images.length > 1 && <div className="flex shrink-0 gap-2">{work.images.map((image, imageIndex) => <button key={image} onClick={() => setPreview({ workIndex: preview.workIndex, imageIndex })} className={cn("size-12 overflow-hidden rounded-lg border", imageIndex === preview.imageIndex ? "border-primary" : "border-glass-border")} aria-label={`Show view ${imageIndex + 1}`}><img src={image} alt="" className="h-full w-full object-cover"/></button>)}</div>}
            </div>
          </div>
        </div>;
      })()}
    </main>
  );
}

function Background() { return <div aria-hidden="true" className="pointer-events-none fixed inset-0"><div className="ambient-a absolute -left-32 top-24 size-[30rem] rounded-full bg-rose/15 blur-3xl"/><div className="ambient-b absolute -right-40 top-[36rem] size-[34rem] rounded-full bg-gold/10 blur-3xl"/><div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_75%,transparent)]"/></div>; }

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return <section id={id} className="relative scroll-mt-28 px-5 py-24 sm:py-32"><div className="mx-auto max-w-6xl"><div className="mb-12 max-w-3xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p><h2 className="font-display text-4xl leading-tight sm:text-6xl">{title}</h2>{intro && <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{intro}</p>}</div>{children}</div></section>;
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string | undefined }) {
  return <label className="grid gap-2 text-sm font-medium">{label}<input name={name} type={type} className="min-h-12 rounded-xl border border-glass-border bg-input px-4 text-foreground outline-hidden placeholder:text-muted-foreground focus:border-primary" />{error && <span className="text-xs text-destructive">{error}</span>}</label>;
}
