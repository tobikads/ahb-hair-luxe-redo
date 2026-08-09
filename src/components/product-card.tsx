import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ProductDetail } from "@/data/products";
import { priceOf } from "@/lib/catalog";
import { Reveal } from "@/components/reveal";

/**
 * Editorial product card. Image is a bare, edge-clean plate; all type sits
 * outside the image on a thin gold rule — no floating cards, no rounding.
 */
export function ProductCard({
  product,
  index = 0,
  onQuickView,
  ratio = "aspect-[3/4]",
  size = "md",
}: {
  product: ProductDetail;
  index?: number;
  onQuickView?: (p: ProductDetail) => void;
  ratio?: string;
  size?: "md" | "lg";
}) {
  const price = priceOf(product);
  const multi = product.lengths && product.lengths.length > 1;

  return (
    <Reveal as="article" delay={index * 80} className="group flex min-w-0 flex-col">
      <div className="relative w-full overflow-hidden bg-champagne">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className={`block w-full overflow-hidden ${ratio}`}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] group-hover:scale-[1.06]"
          />
        </Link>

        <span className="absolute left-0 top-0 bg-cocoa-deep px-2 py-1 font-display text-[11px] tracking-[0.24em] text-ivory">
          {String(index + 1).padStart(2, "0")}
        </span>

        {product.badge && (
          <span className="absolute bottom-0 right-0 bg-ivory px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-cocoa-deep">
            {product.badge}
          </span>
        )}

        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute inset-x-0 bottom-0 hidden h-11 translate-y-full items-center justify-center bg-cocoa-deep/95 text-[10px] uppercase tracking-[0.3em] text-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,0.84,0.28,1)] group-hover:translate-y-0 sm:flex"
          >
            Quick view
          </button>
        )}
      </div>

      <div className="mt-3 min-w-0 border-t border-gold/40 pt-2.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.28em] text-cocoa/55">
              {product.category}
            </p>
            <h3
              className={`mt-1 font-display leading-[1.15] break-words ${
                size === "lg" ? "text-xl sm:text-3xl" : "text-[17px] sm:text-2xl"
              }`}
            >
              <Link
                to="/product/$slug"
                params={{ slug: product.slug }}
                className="underline-offset-4 hover:underline"
              >
                {product.name}
              </Link>
            </h3>
          </div>
          <p className="shrink-0 pt-3 text-[13px] font-medium tabular-nums text-cocoa-deep">
            {multi ? `$${price}+` : `$${price}`}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="group/cta inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.26em] text-cocoa-deep"
          >
            Details
            <ArrowUpRight
              className="h-3 w-3 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              strokeWidth={1.6}
            />
          </Link>
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="min-h-[24px] text-[10px] uppercase tracking-[0.26em] text-cocoa/60 sm:hidden"
            >
              Quick view
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}
