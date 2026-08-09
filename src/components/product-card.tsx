import { Link } from "@tanstack/react-router";
import type { ProductDetail } from "@/data/products";
import { priceOf } from "@/lib/catalog";
import { Reveal } from "@/components/reveal";

export function ProductCard({
  product,
  index = 0,
  onQuickView,
  numbered = false,
}: {
  product: ProductDetail;
  index?: number;
  onQuickView?: (p: ProductDetail) => void;
  numbered?: boolean;
}) {
  const price = priceOf(product);
  const from = product.lengths && product.lengths.length > 1;

  return (
    <Reveal as="article" delay={index * 90} className="group min-w-0">
      <div className="relative w-full overflow-hidden bg-champagne">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="block aspect-[4/5] w-full overflow-hidden"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] group-hover:scale-[1.05]"
          />
        </Link>

        {numbered && (
          <span className="absolute left-3 top-3 font-display text-[11px] tracking-[0.3em] text-ivory/85 drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        {product.badge && (
          <span className="absolute right-3 top-3 bg-ivory/95 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-cocoa-deep">
            {product.badge}
          </span>
        )}

        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute inset-x-3 bottom-3 hidden h-11 translate-y-2 items-center justify-center bg-cocoa-deep/95 text-[10px] uppercase tracking-[0.24em] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex"
          >
            Quick view
          </button>
        )}
      </div>

      <div className="mt-3 min-w-0 sm:mt-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-base leading-snug break-words sm:text-xl">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="underline-offset-4 hover:underline"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-cocoa">
          {from ? `From $${price}` : `$${price}`}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="border-b border-cocoa-deep/40 pb-0.5 text-[10px] uppercase tracking-[0.22em] text-cocoa-deep hover:border-cocoa-deep"
          >
            View details
          </Link>
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] text-cocoa/70 hover:border-cocoa/40 sm:hidden"
            >
              Quick view
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}
