import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ProductDetail } from "@/data/products";
import { priceOf } from "@/lib/catalog";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { ProductCard } from "@/components/product-card";
import { QuickView, useQuickView } from "@/components/quick-view";
import { Reveal, RevealWords } from "@/components/reveal";

type Sort = "featured" | "low" | "high" | "name";

const sortLabels: Record<Sort, string> = {
  featured: "Featured",
  low: "Price ↑",
  high: "Price ↓",
  name: "A–Z",
};

export function CollectionView({
  eyebrow,
  title,
  intro,
  hero,
  items,
  index,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  hero?: string;
  items: ProductDetail[];
  /** Small catalog index, e.g. "EDIT 02 / 04". */
  index?: string;
}) {
  const quick = useQuickView();
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");

  const filters = useMemo(() => {
    const cats = Array.from(new Set(items.map((p) => p.category)));
    return cats.length > 1 ? ["All", ...cats] : [];
  }, [items]);

  const visible = useMemo(() => {
    const list = items.filter((p) => filter === "All" || p.category === filter);
    const sorted = [...list];
    if (sort === "low") sorted.sort((a, b) => priceOf(a) - priceOf(b));
    if (sort === "high") sorted.sort((a, b) => priceOf(b) - priceOf(a));
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [items, filter, sort]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      {/* Compact dark editorial masthead — edge-to-edge image, overlapping type */}
      <section className="relative isolate overflow-hidden bg-cocoa-deep text-ivory">
        {hero && (
          <>
            <img
              src={hero}
              alt=""
              className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-45 sm:w-[58%] sm:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cocoa-deep via-cocoa-deep/85 to-cocoa-deep/20" />
          </>
        )}

        <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-end gap-x-4 gap-y-6 px-5 pb-7 pt-8 sm:px-8 sm:pb-10 sm:pt-12">
          <div className="min-w-0">
            <Reveal>
              <p className="text-[9px] font-medium uppercase tracking-[0.42em] text-gold">
                The AHB Edit · {eyebrow}
              </p>
            </Reveal>
            <h1 className="mt-3 font-display text-[2.6rem] leading-[0.94] sm:text-6xl lg:text-7xl">
              <RevealWords text={title} />
            </h1>
            <span className="mt-4 block h-px w-24 bg-gold/60" />
            <Reveal delay={120}>
              <p className="mt-4 max-w-md text-[13px] font-light leading-relaxed text-ivory/75 sm:text-sm">
                {intro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="shrink-0 text-right">
            <p className="font-display text-3xl leading-none text-gold sm:text-5xl">
              {String(visible.length).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.32em] text-ivory/60">
              {visible.length === 1 ? "Piece" : "Pieces"}
            </p>
            {index && (
              <p className="mt-3 text-[8px] uppercase tracking-[0.32em] text-ivory/45">
                {index}
              </p>
            )}
            <p className="mt-3 text-[8px] uppercase leading-[1.7] tracking-[0.28em] text-ivory/45">
              Local pickup
              <br />
              By appointment
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky filter + sort rail */}
      {items.length > 0 && (
        <div className="sticky top-14 z-20 border-b border-cocoa/15 bg-ivory/95 backdrop-blur sm:top-16">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-5 py-2.5 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="hidden shrink-0 text-[9px] uppercase tracking-[0.32em] text-cocoa/45 sm:inline">
              Filter
            </span>
            <div className="flex min-w-0 flex-1 items-center gap-4">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`min-h-[44px] shrink-0 border-b-2 pb-0.5 text-[10px] uppercase tracking-[0.24em] transition ${
                    filter === f
                      ? "border-gold text-cocoa-deep"
                      : "border-transparent text-cocoa/55 hover:text-cocoa-deep"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <label className="ml-auto flex min-h-[44px] shrink-0 items-center gap-2">
              <span className="hidden text-[9px] uppercase tracking-[0.32em] text-cocoa/45 sm:inline">
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="h-9 border-0 border-b border-cocoa/25 bg-transparent pr-1 text-[10px] uppercase tracking-[0.2em] text-cocoa-deep focus:border-gold focus:outline-none"
              >
                {(Object.keys(sortLabels) as Sort[]).map((s) => (
                  <option key={s} value={s}>
                    {sortLabels[s]}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Dense editorial grid */}
      {visible.length > 0 ? (
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
            {visible.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} onQuickView={quick.open} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:grid-cols-[auto_minmax(0,1fr)] sm:px-8 sm:py-20">
          <p className="font-display text-[4rem] leading-none text-gold/60 sm:text-[7rem]">00</p>
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.42em] text-gold">Between drops</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.03] sm:text-5xl">
              Nothing listed here right now.
            </h2>
            <span className="mt-4 block h-px w-20 bg-gold/60" />
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
              Sizes in this edit move quickly. Message us and we'll tell you exactly
              what's in the studio and when the next pickup window opens.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="grid min-h-[44px] place-items-center bg-cocoa-deep px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory hover:bg-cocoa"
              >
                Ask about availability
              </Link>
              <Link
                to="/shop"
                className="grid min-h-[44px] place-items-center border border-cocoa-deep px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-cocoa-deep hover:bg-cocoa-deep hover:text-ivory"
              >
                Browse the full house
              </Link>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
      <MobileBottomNav />
      <QuickView product={quick.product} onClose={quick.close} />
    </div>
  );
}
