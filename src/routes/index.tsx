import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  PhoneCall, MapPin, Megaphone, Search, Rocket, PhoneForwarded, Globe2, Clock, BarChart3,
  CheckCircle2, ArrowRight, Menu, X, TrendingUp, Star, Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamad Marketing Group — Exclusive Inbound Calls & Leads" },
      { name: "description", content: "Hamad Marketing Group delivers real-time, exclusive phone leads for HVAC, plumbing, roofing and electrical businesses in the USA & UK." },
      { property: "og:title", content: "Hamad Marketing Group — Exclusive Inbound Calls & Leads" },
      { property: "og:description", content: "Pay-per-call, local SEO and paid ads for local service contractors in the USA & UK." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const ctaBtn = "inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 font-semibold text-cta-foreground shadow-cta transition hover:brightness-110 hover:-translate-y-0.5";

const reviews: { text: string; name: string; role: string }[] = [
  {
    text: "Hamad Marketing Group has completely transformed our lead flow. The inbound calls are exclusive and convert at a very high rate. Highly recommended for any HVAC business!",
    name: "Johnathan Miller",
    role: "Owner, Miller HVAC Services (Ohio, USA)",
  },
  {
    text: "Finding quality plumbing leads in London was costing us a fortune until we partnered with this team. Exceptional service and high-intent callers.",
    name: "David Smith",
    role: "Director, London Premier Plumbing (UK)",
  },
  {
    text: "The real-time call routing is flawless. We only pay for qualified leads, which has doubled our ROI this quarter.",
    name: "Sarah Jenkins",
    role: "Marketing Head, Apex Roofing Partners (Texas, USA)",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); (e.target as HTMLFormElement).reset(); };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy/90 text-navy-foreground backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <img src="/favicon.png" alt="Hamad Marketing Group logo" className="h-16 w-16 rounded-lg object-cover" />
            Hamad Marketing Group
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => <a key={l.href} href={l.href} className="text-sm font-medium text-navy-foreground/80 transition hover:text-cta">{l.label}</a>)}
            <a href="#contact" className={ctaBtn + " py-2.5 text-sm"}>Get a Quote</a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 border-t border-navy-foreground/10 px-5 py-5 md:hidden">
            {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-medium">{l.label}</a>)}
            <a href="#contact" onClick={() => setOpen(false)} className={ctaBtn}>Get a Quote</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-hero text-navy-foreground">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-foreground/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cta" /> Live leads · USA & UK
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              We Drive High-Quality <span className="text-cta">Inbound Calls & Leads</span> for Local Services.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-foreground/75">
              Helping HVAC, Plumbing, Roofing, and Electrical businesses scale with real-time, exclusive phone leads in the USA & UK.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className={ctaBtn}>Partner With Us <ArrowRight className="h-4 w-4" /></a>
              <a href="#services" className="inline-flex items-center rounded-lg border border-navy-foreground/30 px-5 py-3 font-semibold transition hover:bg-navy-foreground/10">Learn More</a>
            </div>
          </div>

          {/* Visual card */}
          <div className="reveal relative">
            <div className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/60">Calls routed today</p>
                  <p className="font-display text-3xl font-bold">1,284</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-cta/20 px-3 py-1 text-sm font-semibold text-cta"><TrendingUp className="h-4 w-4" /> +32%</span>
              </div>
              <div className="mt-6 flex h-32 items-end gap-2">
                {[40, 55, 35, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-cta/80" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {[["HVAC · Dallas, TX", "0:42"], ["Plumbing · Manchester, UK", "1:15"], ["Roofing · Phoenix, AZ", "2:03"]].map(([n, t]) => (
                  <div key={n} className="flex items-center justify-between rounded-lg bg-navy-foreground/5 px-4 py-3">
                    <span className="flex items-center gap-3 text-sm"><PhoneForwarded className="h-4 w-4 text-cta" />{n}</span>
                    <span className="text-xs text-navy-foreground/60">Routed · {t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">Services</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Growth Built for Service Contractors</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            [PhoneCall, "Pay-Per-Call Marketing", "Flooding your business with high-intent inbound phone calls from customers actively looking for urgent local services."],
            [MapPin, "Local SEO & Map Optimization", "Ranking your business on Google Maps and search results to dominate your local market area."],
            [Megaphone, "Targeted Paid Ads", "Launching high-ROI Google, Bing, and Social Media campaigns tailored specifically for service contractors."],
          ].map(([Icon, t, d]: any) => (
            <div key={t} className="reveal group rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="about" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">About Us</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How We Generate High-Converting Leads</h2>
          </div>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary via-cta to-primary md:block" />
            {[
              [Search, "Market Research & Setup", "We analyze local search trends."],
              [Rocket, "Traffic Generation", "We launch optimized local landing pages and ads."],
              [PhoneForwarded, "Real-Time Call Routing", "Calls are instantly routed directly to your business phone line."],
            ].map(([Icon, t, d]: any, i) => (
              <div key={t} className="reveal relative text-center">
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground ring-8 ring-secondary"><Icon className="h-7 w-7" /></span>
                <p className="mt-6 text-sm font-bold text-cta">STEP {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{t}</h3>
                <p className="mx-auto mt-2 max-w-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-hero text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-16 lg:grid-cols-4">
          {[
            [BarChart3, "50K+", "Inbound Calls Generated"],
            [CheckCircle2, "98%", "Lead Relevance Rate"],
            [Globe2, "USA & UK", "Geo Coverage"],
            [Clock, "24/7", "Real-Time Reporting"],
          ].map(([Icon, v, l]: any) => (
            <div key={l} className="reveal rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6">
              <Icon className="h-7 w-7 text-cta" />
              <p className="mt-4 font-display text-3xl font-bold sm:text-4xl">{v}</p>
              <p className="mt-1 text-sm text-navy-foreground/70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">Client Reviews</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What Our Partners Say</h2>
            <p className="mt-4 text-muted-foreground">
              Trusted by top local service contractors and networks across the USA &amp; UK.
            </p>
          </div>
          <div className="reveal mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {reviews.map((r) => (
              <figure key={r.name} className="flex min-w-[85%] snap-center flex-col rounded-2xl border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl md:min-w-0">
                <Quote className="h-8 w-8 text-accent" />
                <div className="mt-4 flex gap-1" aria-label="Rated 5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-foreground/90">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t pt-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display text-sm font-bold text-primary">
                    {r.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block min-h-10 text-sm text-muted-foreground">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-5 py-24">
        <div className="reveal text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Let's Scale Your Business</h2>
          <p className="mt-4 text-muted-foreground">Fill out the form below, and our team will get back to you within 24 hours to discuss your lead generation needs.</p>
        </div>
        <form onSubmit={submit} className="reveal mt-10 grid gap-5 rounded-2xl border bg-card p-6 shadow-xl sm:grid-cols-2 sm:p-10">
          <Field label="Full Name"><input required className={inputCls} placeholder="John Smith" /></Field>
          <Field label="Email Address"><input required type="email" className={inputCls} placeholder="john@company.com" /></Field>
          <div className="sm:col-span-2">
            <Field label="Business Type">
              <select required defaultValue="" className={inputCls}>
                <option value="" disabled>Select your industry</option>
                <option>Plumbing</option><option>HVAC</option><option>Roofing</option><option>Other</option>
              </select>
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Message / Requirements"><textarea rows={4} className={inputCls} placeholder="Tell us about your service area and lead goals..." /></Field>
          </div>
          <button type="submit" className={ctaBtn + " sm:col-span-2 py-4 text-lg"}>Submit Inquiry <ArrowRight className="h-5 w-5" /></button>
          {sent && <p className="flex items-center gap-2 text-sm font-medium text-primary sm:col-span-2"><CheckCircle2 className="h-4 w-4" /> Thanks! We'll be in touch within 24 hours.</p>}
        </form>
      </section>

      <footer className="bg-navy text-navy-foreground/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row">
          <p>© 2026 Hamad Marketing Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cta">Privacy Policy</a>
            <a href="#" className="hover:text-cta">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium">{label}</span>{children}</label>;
}
