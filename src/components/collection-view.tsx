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
  low: "Price: low to high",
  high: "Price: high to low",
  name: "A–Z",
};

export function CollectionView({
  eyebrow,
  title,
  intro,
  hero,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  hero?: string;
  items: ProductDetail[];
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

      {/* Compact editorial intro */}
      <section className="border-b border-cocoa/12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>
                {eyebrow}
              </p>
            </Reveal>
            <h1 className="mt-3 font-display text-[2.1rem] leading-[1.05] sm:text-5xl">
              <RevealWords text={title} />
            </h1>
            <Reveal delay={120}>
              <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                {intro}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-cocoa/55">
                {visible.length} {visible.length === 1 ? "piece" : "pieces"} · Local pickup
              </p>
            </Reveal>
          </div>

          {hero && (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-champagne lg:aspect-[4/3]">
              <img src={hero} alt={title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/45 to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* Filters + sort */}
      {items.length > 0 && (
        <div className="sticky top-14 z-20 border-b border-cocoa/12 bg-ivory/95 backdrop-blur sm:top-16">
          <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-5 py-3 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`h-9 shrink-0 border px-4 text-[10px] uppercase tracking-[0.2em] transition ${
                    filter === f
                      ? "border-cocoa-deep bg-cocoa-deep text-ivory"
                      : "border-cocoa/20 text-cocoa-deep/80 hover:border-cocoa"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <label className="ml-auto flex shrink-0 items-center gap-2">
              <span className="hidden text-[10px] uppercase tracking-[0.24em] text-cocoa/50 sm:inline">
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="h-9 border border-cocoa/20 bg-transparent px-2 text-[11px] uppercase tracking-[0.14em] text-cocoa-deep focus:border-cocoa-deep focus:outline-none"
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

      {/* Grid or empty state */}
      {visible.length > 0 ? (
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
            {visible.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} onQuickView={quick.open} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-xl px-5 py-16 text-center sm:py-24">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            Between drops
          </p>
          <h2 className="mt-4 font-display text-2xl leading-tight sm:text-4xl">
            Nothing listed here right now.
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            Sizes for this collection move quickly. Message us and we'll tell you
            exactly what's in the studio and when the next pickup window opens.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="grid h-12 place-items-center bg-cocoa-deep px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory hover:bg-cocoa"
            >
              Ask about availability
            </Link>
            <Link
              to="/shop"
              className="grid h-12 place-items-center border border-cocoa-deep px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-cocoa-deep hover:bg-cocoa-deep hover:text-ivory"
            >
              Browse all products
            </Link>
          </div>
        </div>
      )}

      <SiteFooter />
      <MobileBottomNav />
      <QuickView product={quick.product} onClose={quick.close} />
    </div>
  );
}
