import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { ProductDetail } from "@/data/products";
import { priceOf } from "@/lib/catalog";

export function useQuickView() {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  return {
    product,
    open: (p: ProductDetail) => setProduct(p),
    close: () => setProduct(null),
  };
}

export function QuickView({
  product,
  onClose,
}: {
  product: ProductDetail | null;
  onClose: () => void;
}) {
  const [lengthIdx, setLengthIdx] = useState(0);

  useEffect(() => {
    setLengthIdx(0);
  }, [product?.slug]);

  const price = product
    ? (product.lengths?.[lengthIdx]?.price ?? priceOf(product))
    : 0;

  return (
    <Sheet open={!!product} onOpenChange={(o) => !o && onClose()}>
      <SheetContent
        side="bottom"
        className="max-h-[92svh] overflow-y-auto border-t-0 bg-ivory p-0 sm:mx-auto sm:max-w-lg"
      >
        {product && (
          <div className="pb-8">
            <button
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-cocoa-deep text-ivory shadow-lg transition hover:bg-cocoa"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <SheetHeader className="sr-only">
              <SheetTitle>{product.name}</SheetTitle>
              <SheetDescription>{product.description}</SheetDescription>
            </SheetHeader>

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-champagne sm:aspect-[5/4]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 bg-ivory/95 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-cocoa-deep">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="px-5 pt-6 sm:px-8">
              <p className="eyebrow">{product.category}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight text-cocoa-deep sm:text-3xl">
                {product.name}
              </h3>
              <p className="mt-2 text-lg font-medium text-cocoa">${price}</p>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {product.lengths && (
                <div className="mt-6">
                  <p className="eyebrow mb-3">Length</p>
                  <div className="flex flex-wrap gap-2">
                    {product.lengths.map((l, i) => (
                      <button
                        key={l.label}
                        onClick={() => setLengthIdx(i)}
                        className={`h-11 min-w-[56px] px-3 text-[11px] uppercase tracking-[0.2em] transition ${
                          lengthIdx === i
                            ? "border border-cocoa-deep bg-cocoa-deep text-ivory"
                            : "border border-cocoa/25 bg-transparent text-cocoa-deep hover:border-cocoa"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-7 flex flex-col gap-3">
                {product.available ? (
                  <Link
                    to="/cart"
                    onClick={onClose}
                    className="grid h-12 place-items-center bg-cocoa-deep text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition hover:bg-cocoa"
                  >
                    Add to cart
                  </Link>
                ) : (
                  <p className="py-2 text-center text-[11px] uppercase tracking-[0.22em] text-cocoa/70">
                    Restocking — ask for the next drop
                  </p>
                )}
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="grid h-12 place-items-center border border-cocoa-deep text-[11px] font-semibold uppercase tracking-[0.26em] text-cocoa-deep transition hover:bg-cocoa-deep hover:text-ivory"
                >
                  Ask about availability
                </Link>
                <Link
                  to="/product/$slug"
                  params={{ slug: product.slug }}
                  onClick={onClose}
                  className="mx-auto mt-1 border-b border-cocoa/30 pb-0.5 text-[10px] uppercase tracking-[0.24em] text-cocoa/80"
                >
                  Full product details
                </Link>
              </div>

              <p className="mt-5 text-center text-[11px] font-light text-muted-foreground">
                Local pickup by appointment · No shipping
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
