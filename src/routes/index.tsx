import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, MapPin, ChevronRight } from "lucide-react";

import heroImg from "@/assets/hero-real.jpg";
import storyImg from "@/assets/story-real.jpg";
import collWigs from "@/assets/collection-wigs.jpg";
import collBundles from "@/assets/collection-bundles.jpg";
import collFrontals from "@/assets/collection-frontals.jpg";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { PromiseRibbon } from "@/components/promise-ribbon";
import { ProductCard } from "@/components/product-card";
import { QuickView, useQuickView } from "@/components/quick-view";
import { Reveal, RevealWords, RevealImage } from "@/components/reveal";
import { bestSellers, textureList } from "@/lib/catalog";
import { featuredReview, supportingReviews } from "@/data/reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AHB Hair Extensions — The Boutique Hair House" },
      {
        name: "description",
        content:
          "AHB Hair Extensions: HD lace wigs and raw bundles from a private boutique hair house. Local pickup by appointment in Atlanta.",
      },
      { property: "og:title", content: "AHB Hair Extensions — The Boutique Hair House" },
      {
        property: "og:description",
        content:
          "HD lace wigs and raw bundles, soft from root to ends. Local pickup by appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const collections = [
  {
    n: "01",
    title: "HD Lace Wigs",
    line: "Melted lace, pre-plucked hairline, ready to install.",
    img: collWigs,
    links: [{ label: "Shop Wigs", category: "wigs" }],
  },
  {
    n: "02",
    title: "Bundles",
    line: "Single-donor raw hair, full through the ends.",
    img: collBundles,
    links: [{ label: "Shop Bundles", category: "bundles" }],
  },
  {
    n: "03",
    title: "Closures & Frontals",
    line: "A clean parting space, or ear-to-ear styling freedom.",
    img: collFrontals,
    links: [
      { label: "Shop Closures", category: "closures" },
      { label: "Shop Frontals", category: "frontals" },
    ],
  },
];

const rituals = [
  {
    q: "Wash with intention",
    a: "Sulphate-free shampoo, cool water, and always downward through the strand. Never scrub raw hair in circles — it lifts the cuticle and invites tangling.",
  },
  {
    q: "Condition from mid-shaft down",
    a: "Keep conditioner off the lace and the knots. Work it from the mid-shaft to the ends, leave it five minutes, rinse cool for shine.",
  },
  {
    q: "Air dry, then style",
    a: "Let the hair dry most of the way before heat. Low heat, a heat protectant, and one pass is enough — repeat passes are what cost you length.",
  },
  {
    q: "Sleep protected",
    a: "Braid or twist loosely, wrap in satin. Cotton pulls moisture straight out of the ends overnight.",
  },
];

const faqs = [
  {
    q: "Do you ship?",
    a: "No. Every order is collected in person by appointment, so we can check the hair with you before it leaves the studio.",
  },
  {
    q: "How does pickup work?",
    a: "Place your order, then message us to confirm a pickup window. We'll share the meeting details for your appointment directly.",
  },
  {
    q: "Can I colour or bleach the hair?",
    a: "Raw bundles and our HD units can be coloured and heat styled. We always recommend a licensed stylist for lifting beyond a natural shade.",
  },
  {
    q: "What if my length or texture is sold out?",
    a: "Message us. Drops restock in small runs, and we'll tell you honestly what's in the studio and when the next one lands.",
  },
];

function HomePage() {
  const quick = useQuickView();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative isolate min-h-[86svh] overflow-hidden bg-cocoa-deep text-ivory sm:min-h-[92svh]">
        <img
          src={heroImg}
          alt="AHB client wearing an HD lace install"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa-deep/85 via-cocoa-deep/45 to-cocoa-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa-deep/80 via-cocoa-deep/25 to-transparent" />

        <div className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-24 sm:min-h-[92svh] sm:px-8 sm:pb-24 lg:justify-center lg:pb-32">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>
                The Boutique Hair House
              </p>
            </Reveal>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              <RevealWords text="Unlock Your" delay={120} />
              <br />
              <RevealWords text="True Radiance" delay={340} />
            </h1>
            <Reveal delay={520}>
              <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-ivory/80 sm:text-base">
                Raw texture and melted lace, selected one piece at a time.
              </p>
            </Reveal>
            <Reveal delay={640}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/collections/$category"
                  params={{ category: "best-sellers" }}
                  className="grid h-13 min-h-[52px] place-items-center bg-ivory px-9 text-[11px] font-semibold uppercase tracking-[0.26em] text-cocoa-deep transition hover:bg-champagne"
                >
                  Shop Best Sellers
                </Link>
                <Link
                  to="/shop"
                  className="grid h-13 min-h-[52px] place-items-center border border-ivory/60 px-9 text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition hover:bg-ivory hover:text-cocoa-deep"
                >
                  Explore Collections
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 right-5 hidden text-right sm:block">
          <p className="text-[9px] uppercase tracking-[0.34em] text-ivory/55">
            Local Pickup
          </p>
          <p className="text-[9px] uppercase tracking-[0.34em] text-champagne/70">
            By Appointment
          </p>
        </div>
      </section>

      <PromiseRibbon />

      {/* ── COLLECTIONS ────────────────────────────────── */}
      <section id="collections" className="py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <Reveal>
                <p className="eyebrow" style={{ color: "var(--gold)" }}>
                  The Collections
                </p>
              </Reveal>
              <h2 className="mt-3 font-display text-[1.9rem] leading-[1.08] sm:text-5xl">
                <RevealWords text="Shop The Collections" />
              </h2>
            </div>
            <Reveal className="hidden shrink-0 sm:block">
              <Link
                to="/shop"
                className="border-b border-cocoa-deep/40 pb-1 text-[10px] uppercase tracking-[0.24em] hover:border-cocoa-deep"
              >
                All products
              </Link>
            </Reveal>
          </div>
        </div>

        {/* mobile swipe rail / desktop grid */}
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {collections.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={i * 110}
              className="relative w-[78vw] max-w-[340px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <RevealImage
                src={c.img}
                alt={c.title}
                delay={i * 90}
                className="aspect-[3/4] w-full bg-champagne"
                imgClassName="transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cocoa-deep/90 via-cocoa-deep/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-6">
                <p className="font-display text-[11px] tracking-[0.3em] text-champagne/80">
                  {c.n}
                </p>
                <h3 className="mt-1.5 font-display text-2xl leading-tight sm:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[26ch] text-[12.5px] font-light leading-snug text-ivory/75">
                  {c.line}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {c.links.map((l) => (
                    <Link
                      key={l.label}
                      to="/collections/$category"
                      params={{ category: l.category }}
                      className="inline-flex min-h-[36px] items-center gap-1.5 border-b border-champagne/50 pb-0.5 text-[10px] uppercase tracking-[0.22em] text-ivory hover:border-gold hover:text-gold"
                    >
                      {l.label}
                      <ChevronRight className="h-3 w-3" strokeWidth={2} />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <div className="w-1 shrink-0 lg:hidden" aria-hidden />
        </div>
      </section>

      {/* ── TEXTURE LIBRARY ───────────────────────────── */}
      <section className="border-y border-cocoa/12 bg-champagne/35 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              Texture Library
            </p>
          </Reveal>
          <h2 className="mt-3 max-w-lg font-display text-[1.9rem] leading-[1.08] sm:text-5xl">
            <RevealWords text="Find Your Texture" />
          </h2>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:gap-4 sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {textureList.map((t, i) => (
            <Reveal
              key={t.slug}
              delay={i * 90}
              className="w-[62vw] max-w-[280px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <Link to="/textures/$texture" params={{ texture: t.slug }} className="group block">
                <RevealImage
                  src={t.img}
                  alt={`${t.name} hair texture`}
                  delay={i * 70}
                  className="aspect-[4/5] w-full bg-sand"
                  imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="min-w-0 font-display text-lg leading-tight sm:text-xl">
                    {t.name}
                  </h3>
                  <span className="shrink-0 font-display text-[10px] tracking-[0.28em] text-cocoa/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <div className="w-1 shrink-0 lg:hidden" aria-hidden />
        </div>
      </section>

      {/* ── BEST SELLERS ──────────────────────────────── */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <Reveal>
                <p className="eyebrow" style={{ color: "var(--gold)" }}>
                  Loved On Repeat
                </p>
              </Reveal>
              <h2 className="mt-3 font-display text-[1.9rem] leading-[1.08] sm:text-5xl">
                <RevealWords text="Best Sellers" />
              </h2>
            </div>
            <Reveal className="shrink-0">
              <Link
                to="/collections/$category"
                params={{ category: "best-sellers" }}
                className="border-b border-cocoa-deep/40 pb-1 text-[10px] uppercase tracking-[0.24em] hover:border-cocoa-deep"
              >
                View all
              </Link>
            </Reveal>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                index={i}
                numbered
                onQuickView={quick.open}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STORY ───────────────────────────────── */}
      <section className="bg-cocoa-deep text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <RevealImage
            src={storyImg}
            alt="AHB studio detail"
            className="aspect-[4/5] w-full bg-cocoa"
          />
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>
                The House
              </p>
            </Reveal>
            <h2 className="mt-3 font-display text-[2rem] leading-[1.06] sm:text-5xl">
              <RevealWords text="Hair That Moves Like It's Yours" />
            </h2>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-ivory/75 sm:text-base">
                <p>
                  AHB started the way most good things do — one client at a time,
                  hair chosen by hand instead of by the box. Every unit is checked
                  for softness, weft strength, and how the lace sits before it's
                  offered here.
                </p>
                <p>
                  Nothing is warehoused in bulk. Drops are small, lengths sell
                  through, and we'd rather tell you to wait a week than hand you
                  something we wouldn't wear ourselves.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/shop"
                  className="grid min-h-[52px] place-items-center bg-ivory px-8 text-[11px] font-semibold uppercase tracking-[0.26em] text-cocoa-deep transition hover:bg-champagne"
                >
                  Shop the house
                </Link>
                <Link
                  to="/contact"
                  className="grid min-h-[52px] place-items-center border border-ivory/50 px-8 text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition hover:bg-ivory hover:text-cocoa-deep"
                >
                  Book a pickup
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLIENT DIARY ──────────────────────────────── */}
      <section id="reviews" className="py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              Client Diary
            </p>
          </Reveal>

          {featuredReview ? (
            <>
              <Reveal delay={100}>
                <blockquote className="mt-6 max-w-3xl">
                  <p className="font-display text-[1.6rem] leading-[1.22] sm:text-4xl">
                    “{featuredReview.body}”
                  </p>
                  <footer className="mt-5 text-[10px] uppercase tracking-[0.26em] text-cocoa/60">
                    {featuredReview.name}
                    {featuredReview.location ? ` · ${featuredReview.location}` : ""}
                    {featuredReview.product ? ` · ${featuredReview.product}` : ""}
                  </footer>
                </blockquote>
              </Reveal>

              {supportingReviews.length > 0 && (
                <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {supportingReviews.map((r, i) => (
                    <Reveal
                      key={r.name + i}
                      delay={i * 100}
                      className="w-[82vw] max-w-[380px] shrink-0 snap-start border border-cocoa/12 bg-champagne/30 p-6 lg:w-auto lg:max-w-none"
                    >
                      <p className="text-[15px] font-light leading-relaxed text-cocoa-deep/90">
                        “{r.body}”
                      </p>
                      <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-cocoa/55">
                        {r.name}
                        {r.location ? ` · ${r.location}` : ""}
                      </p>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Reveal delay={100}>
              <div className="mt-6 max-w-2xl border-l border-gold/50 pl-6 sm:pl-8">
                <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-4xl">
                  Client notes are collected in person.
                </h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  We only publish words a client actually wrote. If you've worn an
                  AHB install, send us your note after your pickup and it will live
                  here — in your own words, with your name on it.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-grid min-h-[52px] place-items-center border border-cocoa-deep px-8 text-[11px] font-semibold uppercase tracking-[0.26em] text-cocoa-deep transition hover:bg-cocoa-deep hover:text-ivory"
                >
                  Share your experience
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── CARE ──────────────────────────────────────── */}
      <section className="border-y border-cocoa/12 bg-champagne/35 py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>
                The Ritual
              </p>
            </Reveal>
            <h2 className="mt-3 font-display text-[1.9rem] leading-[1.08] sm:text-5xl">
              <RevealWords text="Care For The Hair" />
            </h2>
            <Reveal delay={120}>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                Raw hair rewards patience. Four habits keep your install soft for
                months instead of weeks.
              </p>
            </Reveal>
          </div>
          <Tapper items={rituals} />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              Good To Know
            </p>
          </Reveal>
          <h2 className="mt-3 font-display text-[1.9rem] leading-[1.08] sm:text-5xl">
            <RevealWords text="Questions, Answered" />
          </h2>
          <Tapper items={faqs} className="mt-8" />
          <Reveal delay={120}>
            <p className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cocoa/60">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              Local pickup by appointment · No shipping
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <MobileBottomNav />
      <QuickView product={quick.product} onClose={quick.close} />
    </div>
  );
}

/** Tap-to-expand editorial list — used for care rituals and FAQ. */
function Tapper({
  items,
  className = "",
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`min-w-0 ${className}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={it.q} delay={i * 80} className="border-t border-cocoa/15 last:border-b">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex min-h-[60px] w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="flex min-w-0 items-baseline gap-4">
                <span className="shrink-0 font-display text-[11px] tracking-[0.26em] text-cocoa/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 font-display text-lg leading-snug sm:text-xl">
                  {it.q}
                </span>
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-cocoa" strokeWidth={1.5} />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-cocoa" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-[calc(1rem+1.6em)] pr-6 text-sm font-light leading-relaxed text-muted-foreground">
                  {it.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
