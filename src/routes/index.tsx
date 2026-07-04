import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  User,
  ShoppingBag,
  X,
  Star,
  Plus,
  Minus,
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
});

const nav = ["Shop", "Wigs", "Bundles", "Closures & Frontals", "About", "Contact"];

const collections = [
  { title: "HD Lace Wigs", copy: "Invisible melt, unreal blend.", img: collWigs, cta: "Shop wigs" },
  { title: "Bundles", copy: "Raw, virgin, unprocessed.", img: collBundles, cta: "Shop bundles" },
  { title: "Closures", copy: "Effortless parting.", img: collClosures, cta: "Shop closures" },
  { title: "Frontals", copy: "Sculpt your silhouette.", img: collFrontals, cta: "Shop frontals" },
];

const products = [
  { name: "Signature Body Wave", price: "$285", img: product1, tag: "Best Seller", length: '20" bundle' },
  { name: "Silk Straight Raw", price: "$310", img: product2, tag: "Ready for Pickup", length: '22" bundle' },
  { name: "Deep Wave Luxury", price: "$295", img: product3, tag: "Client Favorite", length: '20" bundle' },
  { name: "Honey Blonde Wave", price: "$340", img: product4, tag: "Limited", length: '22" bundle' },
];

const reviews = [
  {
    name: "Jasmine R.",
    label: "AHB Girl · Atlanta",
    product: "HD Lace Body Wave Wig",
    body: "This wig gave full, soft, birthday hair. I got compliments all night.",
  },
  {
    name: "Simone A.",
    label: "AHB Girl · Houston",
    product: 'Raw Bundles · 22"',
    body: "The bundles were thick from top to ends and blended so naturally.",
  },
  {
    name: "Amara K.",
    label: "AHB Girl · Dallas",
    product: "HD Lace Frontal",
    body: "The lace melted perfectly and the hair stayed soft after multiple installs.",
  },
  {
    name: "Nia B.",
    label: "AHB Girl · Charlotte",
    product: "Deep Wave Bundles",
    body: "It looked fresh even after reinstalling. That's what sold me.",
  },
  {
    name: "Taylor M.",
    label: "AHB Girl · Miami",
    product: "Silk Straight Raw",
    body: "Softest hair I've ever touched. Zero shedding after weeks of wear.",
  },
];

const featuredReview = {
  name: "Kori D.",
  label: "AHB Girl · New Orleans",
  product: "HD Lace Wig · Body Wave",
  body: "I've bought from every so-called luxury brand. Nothing compares. The density, the softness, the melt — AHB is the standard.",
};

const faqs = [
  { q: "How long does the hair last?", a: "With proper care, our raw virgin bundles last 2–3 years, and HD lace units last 12–18 months of consistent wear." },
  { q: "Can the hair be dyed or bleached?", a: "Yes. Because our hair is raw and unprocessed, it takes color beautifully. We recommend a licensed colorist for best results." },
  { q: "How does pickup work?", a: "We offer local pickup by appointment. After checkout, we'll confirm your pickup time and location. Reach out any time to check current availability." },
  { q: "What is your return policy?", a: "Unopened bundles and untampered units can be exchanged within 14 days. Custom-colored units are final sale." },
  { q: "How do I choose the right lace option?", a: "HD lace is our finest, virtually invisible film. Transparent lace is more durable and ideal for everyday wear. Reach out for a personal recommendation." },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[900ms] ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </As>
  );
}

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Announcement */}
      <div className="bg-cocoa-deep text-ivory text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-center py-2.5 px-4 font-light">
        Local Pickup Available · Contact for Current Availability
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-cocoa/10 shadow-[0_1px_20px_-10px_rgba(60,30,10,0.15)]"
            : "bg-background border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 sm:h-20 gap-4">
            <div className="flex items-center gap-1 min-w-0">
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 -ml-2 hover:bg-champagne/60 rounded-full transition"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <nav className="hidden lg:flex items-center gap-8 ml-6">
                {nav.slice(0, 4).map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[11px] tracking-[0.22em] uppercase text-cocoa-deep/80 hover:text-cocoa-deep transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <a href="/" className="text-center leading-none select-none justify-self-center">
              <div className="font-display text-2xl sm:text-[28px] tracking-[0.32em] text-cocoa-deep">
                AHB
              </div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.42em] uppercase text-cocoa/60 mt-1.5">
                Hair Extensions
              </div>
            </a>

            <div className="flex items-center justify-end gap-1 min-w-0">
              <button aria-label="Search" className="p-2 hover:bg-champagne/60 rounded-full transition">
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Account" className="p-2 hover:bg-champagne/60 rounded-full transition hidden sm:inline-flex">
                <User className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button aria-label="Cart" className="p-2 -mr-2 hover:bg-champagne/60 rounded-full transition relative">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                <span className="absolute top-1 right-1 h-4 min-w-4 px-1 rounded-full bg-gold text-cocoa-deep text-[9px] font-semibold grid place-items-center">
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
          className="absolute inset-0 bg-cocoa-deep/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-cocoa/10">
            <span className="font-display text-lg tracking-[0.28em] text-cocoa-deep">AHB</span>
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
                    className="block font-display text-2xl py-3.5 border-b border-cocoa/10 hover:text-cocoa transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3">
              <p className="eyebrow mb-3">Visit / Contact</p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Local pickup by appointment.<br />
                concierge@ahbhair.com
              </p>
            </div>
          </nav>
          <div className="px-6 py-6 border-t border-cocoa/10 flex gap-3">
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
        <div className="relative h-[88svh] min-h-[600px] max-h-[860px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Model with luxury AHB hair extensions"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cocoa-deep/70 via-cocoa-deep/30 to-cocoa-deep/80 sm:bg-gradient-to-r sm:from-cocoa-deep/80 sm:via-cocoa-deep/40 sm:to-cocoa-deep/10" />

          <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-end sm:items-center">
            <div className="pb-16 sm:pb-0 max-w-xl text-ivory animate-fade-up">
              <p className="eyebrow text-champagne/90 mb-5">The Boutique Hair House</p>
              <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
                Unlock Your<br />
                <em className="not-italic text-champagne">True Radiance</em>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-ivory/90 leading-relaxed max-w-md font-light">
                Luxury hair extensions designed to blend effortlessly, install
                beautifully, and hold their softness wear after wear.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#bestsellers"
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-8 bg-ivory text-cocoa-deep text-[11px] tracking-[0.26em] uppercase font-semibold hover:bg-champagne transition-colors shadow-lg"
                >
                  Shop Best Sellers
                </a>
                <a
                  href="#collections"
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-8 border border-ivory/80 text-ivory text-[11px] tracking-[0.26em] uppercase font-semibold hover:bg-ivory hover:text-cocoa-deep transition-colors backdrop-blur-sm"
                >
                  Explore Collections
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury promise strip */}
      <section className="border-b border-cocoa/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 sm:py-7">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 divide-y md:divide-y-0 md:divide-x divide-cocoa/10">
            {[
              "Premium Hair Quality",
              "HD Lace Options",
              "Local Pickup Available",
              "Secure Checkout",
            ].map((label, i) => (
              <li
                key={label}
                className={`flex items-center justify-center gap-2 text-center md:px-4 ${
                  i >= 2 ? "pt-4 md:pt-0" : ""
                }`}
              >
                <span className="h-1 w-1 rounded-full bg-gold shrink-0" />
                <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-cocoa-deep/85 font-medium">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl mb-12 sm:mb-16">
            <p className="eyebrow mb-4">The Collections</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              Curated for the woman who wears her hair like a signature.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {collections.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <a
                  href="#"
                  className="group relative block overflow-hidden bg-champagne"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/90 via-cocoa-deep/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[0.32em] uppercase text-ivory/80 font-light">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                    <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
                    <p className="mt-1 text-sm text-ivory/85 font-light">{c.copy}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-champagne">
                      <span className="border-b border-champagne/70 pb-0.5">{c.cta}</span>
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="bestsellers" className="py-20 sm:py-28 bg-champagne/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex items-end justify-between mb-12 sm:mb-16 gap-4">
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
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className="group min-w-0">
                  <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    {p.tag && (
                      <span className="absolute top-3 left-3 bg-ivory/95 text-cocoa-deep text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                        {p.tag}
                      </span>
                    )}
                    <button className="absolute inset-x-3 bottom-3 h-10 bg-cocoa-deep/95 text-ivory text-[10px] tracking-[0.24em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden sm:block">
                      Quick View
                    </button>
                  </div>
                  <div className="mt-4 space-y-1 min-w-0">
                    <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                      {p.length}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl leading-snug break-words">
                      {p.name}
                    </h3>
                    <p className="text-sm text-cocoa font-medium">{p.price}</p>
                  </div>
                  <button className="mt-3 w-full sm:hidden h-10 border border-cocoa-deep text-cocoa-deep text-[10px] tracking-[0.24em] uppercase hover:bg-cocoa-deep hover:text-ivory transition">
                    View Details
                  </button>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 sm:hidden text-center">
            <a href="#" className="text-[11px] tracking-[0.24em] uppercase border-b border-cocoa-deep pb-1">
              View all
            </a>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow mb-5">The AHB Story</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Hair that moves like it's <em className="not-italic text-cocoa">yours</em>.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
              AHB Hair Extensions was made for women who care about the details:
              soft texture, natural blending, full ends, and installs that
              photograph beautifully.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { t: "Natural-looking blend", d: "Cuticles aligned, ends full — indistinguishable from your own." },
                { t: "Full-bodied texture", d: "A soft hand-feel that stays luxurious past the first wash." },
                { t: "Long-lasting quality", d: "With proper care, your hair lives with you for years, not weeks." },
              ].map((item, i) => (
                <li key={item.t} className="flex gap-5 border-t border-cocoa/15 pt-6">
                  <span className="font-display text-sm text-gold pt-1 w-6 shrink-0">0{i + 1}</span>
                  <div className="min-w-0">
                    <h4 className="font-display text-xl">{item.t}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden bg-champagne">
              <img
                src={storyImg}
                alt="Hands touching luxury AHB hair"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-ivory px-6 py-5 sm:px-8 sm:py-6 shadow-[var(--shadow-soft)] hidden sm:block border-t-2 border-gold">
              <p className="font-display text-3xl">10+ yrs</p>
              <p className="eyebrow mt-1">Sourcing raw hair</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature Review Section */}
      <section className="relative py-24 sm:py-32 bg-cocoa-deep text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--gold) 0px, transparent 40%), radial-gradient(circle at 80% 60%, var(--champagne) 0px, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-gold mb-4" style={{ color: "var(--gold)" }}>
              The Client Diary
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Loved by the <em className="not-italic text-champagne">AHB Girls</em>.
            </h2>
            <p className="mt-5 text-ivory/70 font-light">
              Real reviews from real installs. Softer, fuller, and still fresh after weeks.
            </p>
          </Reveal>

          {/* Featured review */}
          <Reveal delay={200} className="max-w-3xl mx-auto mb-14 sm:mb-20">
            <figure className="relative text-center px-4 sm:px-10">
              <div className="flex justify-center gap-0.5 text-champagne mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-champagne" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.25] text-ivory">
                &ldquo;{featuredReview.body}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-display text-lg">{featuredReview.name}</p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold mt-2">
                  {featuredReview.label}
                </p>
                <p className="text-xs text-ivory/60 mt-2 font-light italic">
                  Purchased · {featuredReview.product}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting reviews */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <figure className="h-full bg-ivory/[0.04] border border-ivory/10 p-7 sm:p-8 hover:border-gold/40 transition-colors">
                  <div className="flex gap-0.5 text-champagne mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-champagne" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg sm:text-xl leading-snug text-ivory/95">
                    &ldquo;{r.body}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-ivory/10">
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-[10px] tracking-[0.24em] uppercase text-gold mt-1.5">
                      {r.label}
                    </p>
                    <p className="text-[11px] text-ivory/55 mt-1.5 font-light italic">
                      {r.product}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-champagne/40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center mb-12">
            <p className="eyebrow mb-4">Questions, answered</p>
            <h2 className="font-display text-4xl sm:text-5xl">Frequently asked.</h2>
          </Reveal>

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

      {/* Footer */}
      <footer className="bg-cocoa-deep text-ivory/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
          {/* Big logo moment */}
          <div className="text-center pb-14 border-b border-ivory/10">
            <div className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-[0.28em] text-ivory">
              AHB
            </div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.5em] uppercase mt-4 text-gold">
              Hair Extensions
            </p>
          </div>

          {/* Newsletter */}
          <div className="py-14 grid lg:grid-cols-2 gap-10 items-center border-b border-ivory/10">
            <div>
              <p className="eyebrow text-gold mb-4" style={{ color: "var(--gold)" }}>
                The AHB Letter
              </p>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight text-ivory">
                Early access to drops, styling notes, and quiet restocks.
              </h3>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 min-w-0 h-12 bg-transparent border border-ivory/25 px-5 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-ivory text-cocoa-deep text-[11px] tracking-[0.24em] uppercase font-semibold hover:bg-champagne transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Columns */}
          <div className="py-14 grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <p className="text-sm leading-relaxed max-w-xs font-light text-ivory/75">
                A boutique hair house for the woman who wears her radiance
                without asking permission.
              </p>
              <div className="mt-6 flex gap-2">
                <a className="p-2.5 border border-ivory/20 hover:bg-ivory/10 hover:border-gold/50 transition" href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a className="p-2.5 border border-ivory/20 hover:bg-ivory/10 hover:border-gold/50 transition" href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {[
              { title: "Shop", items: ["HD Lace Wigs", "Bundles", "Closures", "Frontals", "Gift Cards"] },
              { title: "House", items: ["Our Story", "Client Diary", "Care Guide", "FAQ"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-ivory/60 mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm hover:text-gold transition font-light">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="eyebrow text-ivory/60 mb-5">Contact & Pickup</p>
              <ul className="space-y-3 text-sm font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" strokeWidth={1.5} />
                  <span>Local pickup by appointment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" strokeWidth={1.5} />
                  <a href="mailto:concierge@ahbhair.com" className="hover:text-gold transition break-all">
                    concierge@ahbhair.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" strokeWidth={1.5} />
                  <span>Message us for availability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-ivory/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-[11px] text-ivory/50">
            <p>&copy; {new Date().getFullYear()} AHB Hair Extensions. All rights reserved.</p>
            <p className="tracking-[0.24em] uppercase">A Black-owned luxury hair house</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
