import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  Search,
  User,
  ShoppingBag,
  X,
  Sparkles,
  ShieldCheck,
  Truck,
  Scissors,
  Moon,
  Droplets,
  Feather,
  Star,
  Plus,
  Minus,
  Instagram,
  Facebook,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import collWigs from "@/assets/collection-wigs.jpg";
import collBundles from "@/assets/collection-bundles.jpg";
import collClosures from "@/assets/collection-closures.jpg";
import collFrontals from "@/assets/collection-frontals.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import storyImg from "@/assets/story.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
});

const nav = ["Shop", "Wigs", "Bundles", "Closures & Frontals", "About", "Journal"];

const collections = [
  { title: "HD Lace Wigs", copy: "Invisible melt, unreal blend.", img: collWigs, cta: "Shop wigs" },
  { title: "Bundles", copy: "Raw, virgin, unprocessed.", img: collBundles, cta: "Shop bundles" },
  { title: "Closures", copy: "Effortless parting.", img: collClosures, cta: "Shop closures" },
  { title: "Frontals", copy: "Sculpt your silhouette.", img: collFrontals, cta: "Shop frontals" },
];

const products = [
  { name: "Signature Body Wave", price: "$285", img: product1, tag: "Best Seller", length: '20" bundle' },
  { name: "Silk Straight Raw", price: "$310", img: product2, tag: null, length: '22" bundle' },
  { name: "Deep Wave Luxury", price: "$295", img: product3, tag: "New", length: '20" bundle' },
  { name: "Honey Blonde Wave", price: "$340", img: product4, tag: "Limited", length: '22" bundle' },
];

const reviews = [
  {
    name: "Jasmine R.",
    location: "Atlanta, GA",
    body: "The blend is unreal. I've had this install for six weeks and it still looks like day one. AHB is my forever hair.",
  },
  {
    name: "Simone A.",
    location: "London, UK",
    body: "I've tried every luxury brand you can name. The density, the shine, the honesty of the vendor — nothing compares.",
  },
  {
    name: "Amara K.",
    location: "Houston, TX",
    body: "Bleached the lace once. That's it. It melted into my skin and hasn't shed. This is what luxury hair should feel like.",
  },
];

const care = [
  { icon: Droplets, title: "Wash gently", copy: "Sulfate-free cleansers, cool water, downward strokes only." },
  { icon: Moon, title: "Protect while sleeping", copy: "Silk bonnet or pillowcase to preserve the pattern and shine." },
  { icon: Feather, title: "Use lightweight products", copy: "Featherlight oils and leave-ins keep the hair breathing." },
];

const faqs = [
  { q: "How long does the hair last?", a: "With proper care, our raw virgin bundles last 2–3 years, and HD lace units last 12–18 months of consistent wear." },
  { q: "Can the hair be dyed or bleached?", a: "Yes. Because our hair is raw and unprocessed, it takes color beautifully. We recommend a licensed colorist for best results." },
  { q: "How long does shipping take?", a: "Domestic orders ship within 1–2 business days and arrive in 3–5 days. Complimentary express shipping on orders over $500." },
  { q: "What is your return policy?", a: "Unopened bundles and untampered units can be returned within 14 days. Custom-colored units are final sale." },
  { q: "How do I choose the right lace option?", a: "HD lace is our finest, virtually invisible film. Transparent lace is more durable and ideal for everyday wear. Reach out for a personal recommendation." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement */}
      <div className="bg-[oklch(0.22_0.035_45)] text-ivory text-[11px] tracking-[0.25em] uppercase text-center py-2 px-4">
        Complimentary express shipping on orders over $500
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60"
            : "bg-background"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 sm:h-20 gap-4">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 -ml-2 hover:bg-champagne/60 rounded-full transition"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Search" className="p-2 hover:bg-champagne/60 rounded-full transition hidden sm:inline-flex">
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <a href="/" className="text-center leading-none select-none">
              <div className="font-display text-2xl sm:text-3xl tracking-[0.28em] text-cocoa-deep">AHB</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-1">
                Hair Extensions
              </div>
            </a>

            <div className="flex items-center justify-end gap-1">
              <button aria-label="Search" className="p-2 hover:bg-champagne/60 rounded-full transition sm:hidden">
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Account" className="p-2 hover:bg-champagne/60 rounded-full transition">
                <User className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Cart" className="p-2 -mr-2 hover:bg-champagne/60 rounded-full transition relative">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                <span className="absolute top-1 right-1 h-4 min-w-4 px-1 rounded-full bg-cocoa-deep text-ivory text-[9px] font-medium grid place-items-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-cocoa-deep/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
            <span className="eyebrow">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block font-display text-2xl py-3 border-b border-border/40 hover:text-cocoa transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <p className="eyebrow mb-4">Contact</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monday – Friday, 9am – 6pm EST<br />
                concierge@ahbhair.com
              </p>
            </div>
          </nav>
          <div className="px-6 py-6 border-t border-border/60 flex gap-3">
            <a className="p-2 rounded-full hover:bg-champagne" href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a className="p-2 rounded-full hover:bg-champagne" href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </aside>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[85svh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Model with luxury AHB hair extensions"
            width={1600}
            height={1808}
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cocoa-deep/60 via-cocoa-deep/30 to-cocoa-deep/70 sm:bg-gradient-to-r sm:from-cocoa-deep/70 sm:via-cocoa-deep/25 sm:to-transparent" />

          <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-end sm:items-center">
            <div className="pb-14 sm:pb-0 max-w-xl text-ivory animate-fade-up">
              <p className="eyebrow text-ivory/80 mb-5">AHB — Est. Boutique Hair House</p>
              <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
                Unlock Your<br />
                <em className="not-italic text-champagne">True Radiance</em>
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-ivory/85 leading-relaxed max-w-md font-light">
                Luxury hair extensions designed to blend effortlessly and last beautifully.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#bestsellers"
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-8 bg-ivory text-cocoa-deep text-xs tracking-[0.24em] uppercase font-medium hover:bg-champagne transition-colors"
                >
                  Shop Best Sellers
                </a>
                <a
                  href="#collections"
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-8 border border-ivory/70 text-ivory text-xs tracking-[0.24em] uppercase font-medium hover:bg-ivory hover:text-cocoa-deep transition-colors"
                >
                  Explore Collections
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-cocoa-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {[
            { icon: Sparkles, label: "100% Raw & Virgin Hair" },
            { icon: Scissors, label: "HD Lace Options" },
            { icon: ShieldCheck, label: "Secure Checkout" },
            { icon: Truck, label: "Fast Shipping" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 min-w-0">
              <Icon className="h-5 w-5 shrink-0 text-champagne" strokeWidth={1.5} />
              <span className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-ivory/85 truncate">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="eyebrow mb-4">The Collections</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              Curated for the woman who wears her hair like a signature.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((c) => (
              <a
                key={c.title}
                href="#"
                className="group relative block overflow-hidden bg-champagne"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/85 via-cocoa-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
                  <p className="mt-1 text-sm text-ivory/80 font-light">{c.copy}</p>
                  <span className="mt-4 inline-block text-[10px] tracking-[0.28em] uppercase border-b border-ivory/70 pb-1 group-hover:border-champagne group-hover:text-champagne transition">
                    {c.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="bestsellers" className="py-20 sm:py-28 bg-champagne/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12 sm:mb-16 gap-4">
            <div className="min-w-0">
              <p className="eyebrow mb-4">Best Sellers</p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
                Loved on repeat.
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-block shrink-0 text-[11px] tracking-[0.24em] uppercase border-b border-cocoa-deep pb-1 hover:text-cocoa transition"
            >
              View all
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
            {products.map((p) => (
              <article key={p.name} className="group min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-ivory/95 text-cocoa-deep text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                      {p.tag}
                    </span>
                  )}
                  <button className="absolute inset-x-3 bottom-3 h-10 bg-cocoa-deep/95 text-ivory text-[10px] tracking-[0.24em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden sm:block">
                    Quick Add
                  </button>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{p.length}</p>
                  <h3 className="font-display text-lg sm:text-xl leading-snug truncate">{p.name}</h3>
                  <p className="text-sm text-cocoa">{p.price}</p>
                </div>
                <button className="mt-3 w-full sm:hidden h-10 border border-cocoa-deep text-cocoa-deep text-[10px] tracking-[0.24em] uppercase hover:bg-cocoa-deep hover:text-ivory transition">
                  View Details
                </button>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:hidden text-center">
            <a href="#" className="text-[11px] tracking-[0.24em] uppercase border-b border-cocoa-deep pb-1">
              View all
            </a>
          </div>
        </div>
      </section>

      {/* Brand promise */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-5">The AHB Promise</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Made for women who want hair that looks <em className="not-italic text-cocoa">effortless</em>.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
              Installs beautifully. Holds its quality wear after wear. We source, hand-inspect and curate every strand so the only thing you have to do is show up radiant.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { t: "Natural-looking blend", d: "Cuticles aligned, ends full — indistinguishable from your own." },
                { t: "Soft, full-bodied texture", d: "A hand-feel that stays luxurious past the first wash." },
                { t: "Long-lasting quality", d: "With proper care, our hair lives with you for years, not weeks." },
              ].map((item, i) => (
                <li key={item.t} className="flex gap-5 border-t border-border/70 pt-6">
                  <span className="font-display text-sm text-cocoa/70 pt-1 w-6 shrink-0">0{i + 1}</span>
                  <div className="min-w-0">
                    <h4 className="font-display text-xl">{item.t}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden bg-champagne">
              <img
                src={storyImg}
                alt="Hands touching luxury AHB hair"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-ivory px-6 py-5 sm:px-8 sm:py-6 shadow-[var(--shadow-soft)] hidden sm:block">
              <p className="font-display text-3xl">10+ yrs</p>
              <p className="eyebrow mt-1">Sourcing raw hair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 sm:py-28 bg-cocoa-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-ivory/70 mb-4">Loved by her</p>
            <h2 className="font-display text-4xl sm:text-5xl">
              She wears it. She reviews it.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-ivory/[0.04] border border-ivory/10 p-8 sm:p-10">
                <div className="flex gap-0.5 text-champagne mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-champagne" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-ivory/15">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-ivory/60 mt-0.5">{r.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Care */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Ritual</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              Care for the Luxury.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md font-light">
              Three quiet habits that keep your hair looking day-one beautiful, wear after wear.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {care.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="border border-border p-8 sm:p-10 bg-card hover:bg-champagne/40 transition-colors">
                <Icon className="h-6 w-6 text-cocoa" strokeWidth={1.25} />
                <h3 className="font-display text-2xl mt-6">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-champagne/40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Questions, answered</p>
            <h2 className="font-display text-4xl sm:text-5xl">Frequently asked.</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-cocoa/15 py-1"
              >
                <AccordionTrigger className="font-display text-lg sm:text-xl text-left hover:no-underline py-6 [&>svg]:hidden group">
                  <span className="pr-4">{f.q}</span>
                  <span className="relative h-4 w-4 shrink-0">
                    <Plus className="absolute inset-0 h-4 w-4 text-cocoa group-data-[state=open]:opacity-0 transition-opacity" strokeWidth={1.5} />
                    <Minus className="absolute inset-0 h-4 w-4 text-cocoa opacity-0 group-data-[state=open]:opacity-100 transition-opacity" strokeWidth={1.5} />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-6 pr-8 font-light">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 sm:py-24 bg-cocoa-deep text-ivory">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <p className="eyebrow text-ivory/70 mb-5">The AHB Letter</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Early access to drops, styling notes, and quiet sales.
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 h-12 bg-transparent border border-ivory/30 px-5 text-sm placeholder:text-ivory/50 focus:outline-none focus:border-champagne transition"
            />
            <button
              type="submit"
              className="h-12 px-8 bg-ivory text-cocoa-deep text-[11px] tracking-[0.24em] uppercase font-medium hover:bg-champagne transition"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-ivory/50">No noise. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cocoa-deep text-ivory/80 border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-display text-2xl tracking-[0.28em] text-ivory">AHB</div>
            <p className="text-[10px] tracking-[0.4em] uppercase mt-1 text-ivory/60">Hair Extensions</p>
            <p className="mt-6 text-sm leading-relaxed max-w-xs font-light">
              A quiet luxury hair house for the woman who wears her radiance without asking permission.
            </p>
            <div className="mt-6 flex gap-2">
              <a className="p-2 border border-ivory/20 hover:bg-ivory/10 transition" href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a className="p-2 border border-ivory/20 hover:bg-ivory/10 transition" href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {[
            { title: "Shop", items: ["HD Lace Wigs", "Bundles", "Closures", "Frontals", "Gift Cards"] },
            { title: "House", items: ["Our Story", "Journal", "Careers", "Press"] },
            { title: "Care", items: ["Contact", "Shipping", "Returns", "FAQ"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-ivory/60 mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:text-ivory transition font-light">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-ivory/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-[11px] text-ivory/50">
            <p>&copy; {new Date().getFullYear()} AHB Hair Extensions. All rights reserved.</p>
            <p className="tracking-[0.2em] uppercase">Made with care</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
