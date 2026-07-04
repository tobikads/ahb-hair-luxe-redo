import { Link } from "@tanstack/react-router";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import type { ProductDetail } from "@/data/products";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ivory/10 bg-cocoa-deep text-ivory backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase text-ivory/85 hover:text-champagne"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          Back
        </Link>
        <Link to="/" className="text-center leading-none">
          <div className="font-display text-lg sm:text-xl tracking-[0.32em]">AHB</div>
          <div className="text-[7px] sm:text-[9px] tracking-[0.42em] uppercase text-champagne/80 mt-0.5">
            Hair Extensions
          </div>
        </Link>
        <Link
          to="/cart"
          aria-label="Cart"
          className="relative p-2 rounded-full hover:bg-ivory/10 transition"
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
        </Link>
      </div>
    </header>
  );
}

export function PageHero({
  eyebrow,
  title,
  tagline,
  image,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cocoa-deep text-ivory">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cocoa-deep/60 via-cocoa-deep/70 to-cocoa-deep" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 text-center">
        <p
          className="eyebrow mb-4"
          style={{ color: "var(--gold)" }}
        >
          {eyebrow}
        </p>
        <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-6xl leading-[1.05]">
          {title}
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-ivory/80 font-light">{tagline}</p>
      </div>
    </section>
  );
}

export function ProductGrid({ items }: { items: ProductDetail[] }) {
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="eyebrow mb-3">Coming Soon</p>
        <h2 className="font-display text-2xl sm:text-3xl leading-tight">
          This edit is being curated.
        </h2>
        <p className="mt-4 text-muted-foreground font-light">
          Message us for early access to upcoming drops and current availability.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block border-b border-cocoa-deep pb-1 text-[11px] tracking-[0.24em] uppercase"
        >
          Browse all pieces
        </Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-8 sm:gap-y-10">
        {items.map((p) => {
          const price = p.fixedPrice ?? p.lengths?.[0]?.price ?? 0;
          return (
            <article key={p.slug} className="group min-w-0">
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="relative block w-full aspect-[4/5] overflow-hidden bg-champagne"
              >
                <img
                  src={p.images[0]}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                {p.badge && (
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-ivory/95 text-cocoa-deep text-[9px] tracking-[0.18em] uppercase px-2 py-1 font-medium">
                    {p.badge}
                  </span>
                )}
              </Link>
              <div className="mt-3 sm:mt-4 space-y-1 min-w-0">
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  {p.category}
                </p>
                <h3 className="font-display text-base sm:text-xl leading-snug break-words">
                  <Link
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    className="hover:underline underline-offset-4"
                  >
                    {p.name}
                  </Link>
                </h3>
                <p className="text-sm text-cocoa font-medium">From ${price}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
