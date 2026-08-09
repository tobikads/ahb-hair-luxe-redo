import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { PromiseRibbon } from "@/components/promise-ribbon";
import { ProductCard } from "@/components/product-card";
import { QuickView, useQuickView } from "@/components/quick-view";
import { Reveal, RevealImage, RevealWords } from "@/components/reveal";
import { bestSellers, categories, textureList } from "@/lib/catalog";
import { featuredReview, supportingReviews } from "@/data/reviews";

import heroReal from "@/assets/hero-real.jpg";
import storyReal from "@/assets/story-real.jpg";
import collWigs from "@/assets/collection-wigs.jpg";
import collBundles from "@/assets/collection-bundles.jpg";
import collClosures from "@/assets/collection-closures.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AHB Hair Extensions — The Private Edit" },
      {
        name: "description",
        content:
          "AHB Hair Extensions: a private hair house of HD lace wigs, raw bundles, closures and frontals. Local pickup by appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "AHB Hair Extensions — The Private Edit" },
      {
        property: "og:description",
        content:
          "HD lace wigs, raw bundles, closures and frontals. Soft from root to ends. Local pickup by appointment.",
      },
    ],
  }),
  component: HomePage,
});

/* ------------------------------------------------------------------ */
/* Shared editorial atoms                                              */
/* ------------------------------------------------------------------ */

function EditLabel({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <Reveal>
      <p
        className={`text-[9px] font-medium uppercase tracking-[0.42em] ${
          tone === "light" ? "text-gold" : "text-gold"
        }`}
      >
        {children}
      </p>
    </Reveal>
  );
}

function GoldRule({ className = "" }: { className?: string }) {
  return <span className={`block h-px bg-gold/55 ${className}`} />;
}

function Spec({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] uppercase tracking-[0.3em] ${
        tone === "light" ? "text-ivory/65" : "text-cocoa/60"
      }`}
    >
      {items.map((it, i) => (
        <li key={it} className="flex items-center gap-3">
          {i > 0 && <span className="h-[4px] w-[4px] rotate-45 border border-gold/70" />}
          {it}
        </li>
      ))}
    </ul>
  );
}

function CtaSolid({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to as never}
      className="group inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap bg-ivory px-5 py-3 text-[9.5px] font-semibold uppercase tracking-[0.22em] sm:px-7 sm:text-[10px] sm:tracking-[0.3em] text-cocoa-deep transition-colors hover:bg-gold"
    >
      {children}
      <ArrowUpRight
        className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />
    </Link>
  );
}

function CtaGhost({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to as never}
      className="group inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap border border-ivory/50 px-5 py-3 text-[9.5px] font-semibold uppercase tracking-[0.22em] sm:px-7 sm:text-[10px] sm:tracking-[0.3em] text-ivory transition-colors hover:border-gold hover:text-gold"
    >
      {children}
      <ArrowUpRight
        className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Cinematic hero                                                   */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative isolate h-[100svh] min-h-[600px] w-full overflow-hidden bg-cocoa-deep text-ivory">
      <img
        src={heroReal}
        alt="AHB client wearing a body wave HD lace unit"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[70%_center]"
      />
      {/* Protect type from the model: darkness weighted to the lower left */}
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep via-cocoa-deep/35 to-cocoa-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa-deep/85 via-cocoa-deep/20 to-transparent" />

      {/* Vertical editorial index */}
      <div className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 sm:block">
        <p className="[writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-[0.52em] text-ivory/70">
          AHB 01 / The Signature
        </p>
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-24 sm:px-14 sm:pb-20">
        <div className="max-w-[30ch] sm:max-w-[34ch]">
          <Reveal>
            <p className="text-[9px] font-medium uppercase tracking-[0.44em] text-gold">
              The AHB Private Edit
            </p>
          </Reveal>

          <h1 className="mt-5 max-w-[9ch] font-display text-[3.1rem] leading-[0.92] sm:text-[5.5rem] lg:text-[6.75rem]">
            <span className="block">
              <RevealWords text="Unlock" />
            </span>
            <span className="block italic text-gold/90">
              <RevealWords text="Your True" delay={260} />
            </span>
            <span className="block">
              <RevealWords text="Radiance" delay={560} />
            </span>
          </h1>

          <GoldRule className="mt-7 w-28" />

          <Reveal delay={820} className="mt-4">
            <Spec items={["Raw Texture", "HD Finish", "Local Pickup"]} tone="light" />
          </Reveal>

          <Reveal delay={940} className="mt-8 flex flex-wrap gap-3">
            <CtaSolid to="/collections/best-sellers">Shop Best Sellers</CtaSolid>
            <CtaGhost to="/shop">Explore Collections</CtaGhost>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-5 right-5 hidden items-center gap-2 sm:flex">
        <span className="text-[8px] uppercase tracking-[0.4em] text-ivory/55">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-[fade-up_2.4s_ease-in-out_infinite] text-gold" strokeWidth={1.5} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. The AHB Edit — lookbook                                          */
/* ------------------------------------------------------------------ */

function LookOne() {
  return (
    <div className="relative grid items-center gap-5 sm:grid-cols-[0.92fr_1.08fr] sm:gap-0">
      <div className="relative z-10 order-2 px-5 sm:order-1 sm:px-8 lg:pl-14">
        <p className="font-display text-[3.4rem] leading-none text-gold/70 sm:text-[6rem]">01</p>
        <h3 className="-mt-2 font-display text-4xl leading-[0.95] sm:text-6xl">
          <RevealWords text="HD Lace Wigs" />
        </h3>
        <GoldRule className="mt-5 w-20" />
        <Reveal delay={120}>
          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            {categories.wigs.tagline} Built around the hairline first, so the melt reads
            like scalp from the front row.
          </p>
          <div className="mt-5">
            <Spec items={["Texture / Wave", "Length / 18–26", "Finish / HD Lace"]} />
          </div>
          <Link
            to="/collections/$category"
            params={{ category: "wigs" }}
            className="group mt-6 inline-flex min-h-[44px] items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cocoa-deep"
          >
            Shop the wig edit
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
          </Link>
        </Reveal>
      </div>
      <RevealImage
        src={collWigs}
        alt="HD lace wig edit"
        className="order-1 aspect-[4/5] w-full sm:order-2 sm:aspect-[5/6]"
      />
    </div>
  );
}

function LookTwo() {
  return (
    <div className="relative">
      <RevealImage
        src={collBundles}
        alt="Raw bundle edit"
        className="aspect-[4/5] w-full sm:aspect-[16/9]"
      />
      {/* Overlapping type block */}
      <div className="relative z-10 -mt-16 ml-5 max-w-md bg-ivory p-6 sm:-mt-24 sm:ml-14 sm:p-9">
        <p className="font-display text-[3.4rem] leading-none text-gold/70 sm:text-[5rem]">02</p>
        <h3 className="-mt-2 font-display text-4xl leading-[0.95] sm:text-5xl">
          <RevealWords text="Raw Bundles" />
        </h3>
        <GoldRule className="mt-4 w-20" />
        <Reveal delay={120}>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            {categories.bundles.tagline} Cuticle intact, one donor, ends that stay thick
            through the whole install.
          </p>
          <div className="mt-5">
            <Spec items={["Texture / Raw", "Length / 18–26", "Finish / Unprocessed"]} />
          </div>
          <Link
            to="/collections/$category"
            params={{ category: "bundles" }}
            className="group mt-6 inline-flex min-h-[44px] items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cocoa-deep"
          >
            Shop the bundle edit
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

function LookThree() {
  return (
    <div className="relative bg-cocoa-deep text-ivory">
      <div className="mx-auto grid max-w-7xl items-end gap-6 px-5 py-12 sm:grid-cols-[1.1fr_0.9fr] sm:gap-12 sm:px-8 sm:py-16">
        <div className="min-w-0">
          <p className="font-display text-[3.4rem] leading-none text-gold/80 sm:text-[6rem]">03</p>
          <h3 className="-mt-2 font-display text-4xl leading-[0.95] sm:text-6xl">
            <RevealWords text="Closures & Frontals" />
          </h3>
          <GoldRule className="mt-5 w-20" />
          <Reveal delay={120}>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-ivory/70">
              A clean parting space or full ear-to-ear styling freedom. Sizes rotate — message
              the studio for what's on the shelf this week.
            </p>
            <div className="mt-5">
              <Spec items={["Texture / Matched", "Size / On Request", "Finish / Lace"]} tone="light" />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaSolid to="/collections/closures">Shop Closures</CtaSolid>
              <CtaGhost to="/collections/frontals">Shop Frontals</CtaGhost>
            </div>
          </Reveal>
        </div>
        <RevealImage
          src={collClosures}
          alt="Closures and frontals"
          className="aspect-[4/5] w-full sm:aspect-[3/4]"
        />
      </div>
    </div>
  );
}

function AhbEdit() {
  return (
    <section id="edit" className="bg-ivory">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-5 pb-8 pt-14 sm:px-8 sm:pb-12 sm:pt-20">
        <div className="min-w-0">
          <EditLabel>The AHB Edit</EditLabel>
          <h2 className="mt-3 font-display text-3xl leading-[0.98] sm:text-5xl">
            <RevealWords text="Three looks, one house." />
          </h2>
        </div>
        <p className="hidden shrink-0 text-right text-[9px] uppercase leading-[1.8] tracking-[0.3em] text-cocoa/50 sm:block">
          Look 01 — 03
          <br />
          Atlanta studio
        </p>
      </div>

      <div className="space-y-14 pb-16 sm:space-y-24 sm:pb-24">
        <LookOne />
        <LookTwo />
      </div>
      <LookThree />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Texture selector                                                 */
/* ------------------------------------------------------------------ */

function TextureSelector() {
  const [active, setActive] = useState(0);
  const t = textureList[active];

  return (
    <section id="textures" className="bg-ivory py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <EditLabel>Choose Your Finish</EditLabel>
        <h2 className="mt-3 font-display text-3xl leading-[0.98] sm:text-5xl">
          <RevealWords text="The texture library." />
        </h2>
        <GoldRule className="mt-6 w-full" />
      </div>

      {/* Desktop: index list + oversized featured plate */}
      <div className="mx-auto mt-8 hidden max-w-7xl gap-12 px-8 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
        <ul className="flex flex-col">
          {textureList.map((tx, i) => (
            <li key={tx.slug}>
              <button
                onClick={() => setActive(i)}
                className={`flex w-full items-baseline gap-5 border-b border-cocoa/12 py-5 text-left transition-colors ${
                  i === active ? "text-cocoa-deep" : "text-cocoa/40 hover:text-cocoa/75"
                }`}
              >
                <span className="w-8 shrink-0 text-[10px] uppercase tracking-[0.28em]">
                  0{i + 1}
                </span>
                <span
                  className={`font-display leading-none transition-all duration-500 ${
                    i === active ? "text-5xl" : "text-3xl"
                  }`}
                >
                  {tx.name}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="min-w-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-champagne">
            {textureList.map((tx, i) => (
              <img
                key={tx.slug}
                src={tx.img}
                alt={tx.name}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
                }`}
              />
            ))}
            <span className="absolute left-0 top-0 bg-cocoa-deep px-3 py-1.5 font-display text-[12px] tracking-[0.3em] text-ivory">
              0{active + 1}
            </span>
          </div>
          <div key={t.slug} className="animate-fade-up">
            <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
              {t.description}
            </p>
            <Link
              to="/textures/$texture"
              params={{ texture: t.slug }}
              className="group mt-5 inline-flex min-h-[44px] items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cocoa-deep"
            >
              Shop this texture
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: one dominant texture per snap panel */}
      <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {textureList.map((tx, i) => (
          <article
            key={tx.slug}
            className="w-[82vw] shrink-0 snap-center sm:w-[58vw]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-champagne">
              <img src={tx.img} alt={tx.name} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute left-0 top-0 bg-cocoa-deep px-2.5 py-1 font-display text-[11px] tracking-[0.28em] text-ivory">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-3 font-display text-3xl leading-none">{tx.name}</h3>
            <p className="mt-2 text-[13px] font-light leading-relaxed text-muted-foreground">
              {tx.description}
            </p>
            <Link
              to="/textures/$texture"
              params={{ texture: tx.slug }}
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.28em]"
            >
              Shop this texture
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Best sellers editorial wall                                      */
/* ------------------------------------------------------------------ */

function BestSellerWall({ onQuickView }: { onQuickView: (p: (typeof bestSellers)[number]) => void }) {
  const [featured, ...rest] = bestSellers;
  const supporting = rest.slice(0, 2);
  const narrow = rest[2];

  if (!featured) return null;

  return (
    <section id="best-sellers" className="border-t border-cocoa/12 bg-ivory py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <EditLabel>The Boutique Window</EditLabel>
            <h2 className="mt-3 font-display text-3xl leading-[0.98] sm:text-5xl">
              <RevealWords text="Best sellers." />
            </h2>
          </div>
          <Link
            to="/collections/$category"
            params={{ category: "best-sellers" }}
            className="group hidden shrink-0 items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] sm:inline-flex"
          >
            View all
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
          </Link>
        </div>
        <GoldRule className="mt-6 w-full" />

        <div className="mt-8 grid gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProductCard
              product={featured}
              index={0}
              onQuickView={onQuickView}
              ratio="aspect-[4/5] lg:aspect-[5/6]"
              size="lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:col-span-5 lg:content-start">
            {supporting.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                index={i + 1}
                onQuickView={onQuickView}
                ratio="aspect-[3/4]"
              />
            ))}
            {narrow && (
              <div className="col-span-2">
                <ProductCard
                  product={narrow}
                  index={3}
                  onQuickView={onQuickView}
                  ratio="aspect-[3/4] lg:aspect-[21/9]"
                />
              </div>
            )}
          </div>
        </div>

        <Link
          to="/collections/$category"
          params={{ category: "best-sellers" }}
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] sm:hidden"
        >
          View all best sellers
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Brand story                                                      */
/* ------------------------------------------------------------------ */

const principles = [
  { n: "01", t: "Natural-looking blend", c: "Hairlines and partings chosen so the install disappears into your own hair." },
  { n: "02", t: "Full-bodied texture", c: "Ends stay thick — no thinning halfway down the length." },
  { n: "03", t: "Long-lasting quality", c: "Cared for properly, a unit stays soft through repeat installs." },
];

function BrandStory() {
  return (
    <section className="relative isolate bg-cocoa-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <RevealImage
          src={storyReal}
          alt="AHB client wearing a raw straight install"
          className="aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[520px]"
        />
        <div className="min-w-0 lg:py-6">
          <EditLabel tone="light">The House Standard</EditLabel>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.95] sm:text-6xl">
            <RevealWords text="Hair That Moves Like It's Yours." />
          </h2>
          <GoldRule className="mt-6 w-24" />
          <ul className="mt-8 divide-y divide-ivory/12 border-y border-ivory/12">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 120} className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-5">
                <span className="font-display text-2xl leading-none text-gold/85 sm:text-3xl">{p.n}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl">{p.t}</h3>
                  <p className="mt-1.5 text-[13px] font-light leading-relaxed text-ivory/65">{p.c}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={360} className="mt-8">
            <Spec items={["AHB / Atlanta", "Local Pickup", "By Appointment"]} tone="light" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Client diary                                                     */
/* ------------------------------------------------------------------ */

function ClientDiary() {
  return (
    <section id="reviews" className="bg-ivory py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <EditLabel>The Client Diary</EditLabel>
        <GoldRule className="mt-6 w-full" />

        {featuredReview ? (
          <>
            <blockquote className="mt-8 max-w-4xl">
              <p className="font-display text-[1.9rem] leading-[1.12] sm:text-[3.25rem]">
                <span className="text-gold">“</span>
                {featuredReview.body}
                <span className="text-gold">”</span>
              </p>
              <footer className="mt-6 text-[10px] uppercase tracking-[0.3em] text-cocoa/60">
                {featuredReview.name}
                {featuredReview.product ? ` · ${featuredReview.product}` : ""}
              </footer>
            </blockquote>

            {supportingReviews.length > 0 && (
              <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {supportingReviews.map((r) => (
                  <figure
                    key={r.name + r.body.slice(0, 12)}
                    className="w-[78vw] shrink-0 snap-center border-t border-gold/40 pt-4 sm:w-[34%]"
                  >
                    <blockquote className="text-sm font-light leading-relaxed text-cocoa-deep/85">
                      {r.body}
                    </blockquote>
                    <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-cocoa/55">
                      {r.name}
                      {r.product ? ` · ${r.product}` : ""}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="mt-8 grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-12">
            <p className="font-display text-[4rem] leading-none text-gold/50 sm:text-[8rem]">“</p>
            <div className="min-w-0">
              <h2 className="font-display text-[2rem] leading-[1.05] sm:text-5xl">
                <RevealWords text="The diary opens with our clients' own words." />
              </h2>
              <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
                We publish reviews exactly as clients write them — nothing invented. Wore an
                AHB install? Send yours and it goes straight into the diary.
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex min-h-[44px] items-center gap-2 border-b border-cocoa-deep pb-1 text-[10px] font-semibold uppercase tracking-[0.3em]"
              >
                Share your install
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. The hair ritual                                                  */
/* ------------------------------------------------------------------ */

const ritual = [
  {
    n: "01",
    t: "Wash gently",
    c: "Cool water, sulfate-free cleanser, downward strokes only. Never scrub the lace or the wefts.",
  },
  {
    n: "02",
    t: "Wrap before bed",
    c: "Silk or satin, loosely wrapped. It protects the pattern and keeps the ends from friction.",
  },
  {
    n: "03",
    t: "Use lightweight products",
    c: "A little oil through the mid-lengths and ends. Heavy creams weigh the hair down and dull the shine.",
  },
];

function HairRitual() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-cocoa/12 bg-ivory py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="min-w-0">
          <EditLabel>The Hair Ritual</EditLabel>
          <h2 className="mt-3 font-display text-3xl leading-[0.98] sm:text-5xl">
            <RevealWords text="Keep it soft." />
          </h2>
          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            Three habits that decide how long a unit stays worth wearing.
          </p>
        </div>

        <ul className="min-w-0 border-t border-cocoa/15">
          {ritual.map((r, i) => {
            const isOpen = open === i;
            return (
              <li key={r.n} className="border-b border-cocoa/15">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 py-5 text-left"
                >
                  <span
                    className={`font-display leading-none transition-colors ${
                      isOpen ? "text-gold" : "text-cocoa/35"
                    } text-2xl sm:text-4xl`}
                  >
                    {r.n}
                  </span>
                  <span className="min-w-0 font-display text-xl leading-tight sm:text-3xl">{r.t}</span>
                  <span
                    className={`relative h-3 w-3 shrink-0 transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cocoa-deep" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cocoa-deep" />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-[700ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 pb-6 pl-[calc(2rem+1.25rem)] pr-6 text-[13px] font-light leading-relaxed text-muted-foreground sm:text-sm">
                    {r.c}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function HomePage() {
  const quick = useQuickView();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader overHero />
      <Hero />
      <PromiseRibbon />
      <AhbEdit />
      <TextureSelector />
      <BestSellerWall onQuickView={quick.open} />
      <BrandStory />
      <ClientDiary />
      <HairRitual />
      <SiteFooter />
      <MobileBottomNav />
      <QuickView product={quick.product} onClose={quick.close} />
    </div>
  );
}
