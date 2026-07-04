import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, Minus, Plus, ShieldCheck, MapPin, Sparkles, ShoppingBag } from "lucide-react";

import { getProduct, type ProductDetail } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — AHB Hair Extensions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — AHB Hair Extensions` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — AHB Hair Extensions` },
        { property: "og:description", content: p.description },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <p className="eyebrow">Not found</p>
        <h1 className="mt-3 text-3xl font-display">This piece isn't available</h1>
        <Link to="/" className="mt-6 inline-block underline underline-offset-4">
          Back to shop
        </Link>
      </div>
    </div>
  ),
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return setShown(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), obs.disconnect()),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [selectedLength, setSelectedLength] = useState(product.lengths?.[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [added, setAdded] = useState(false);

  const price = selectedLength?.price ?? product.fixedPrice ?? 0;
  const total = price * qty;

  const handleAdd = () => {
    if (!product.available) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="min-h-screen bg-background pb-32 lg:pb-16">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-foreground/80 hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
          <Link to="/" className="font-display text-lg tracking-tight">
            AHB
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {product.category}
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-12">
        {/* Gallery */}
        <Gallery
          product={product}
          active={activeImage}
          setActive={setActiveImage}
          zoom={zoom}
          setZoom={setZoom}
        />

        {/* Info */}
        <Info
          product={product}
          selectedLength={selectedLength}
          setSelectedLength={setSelectedLength}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          qty={qty}
          setQty={setQty}
          price={price}
          total={total}
          onAdd={handleAdd}
          added={added}
        />
      </div>

      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              {selectedLength?.label ?? "Total"}
            </span>
            <span className="font-display text-xl text-foreground">${total}</span>
          </div>
          <button
            onClick={handleAdd}
            disabled={!product.available}
            className="flex-[1.6] rounded-full bg-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {product.available ? (added ? "Added ✓" : "Add to cart") : "Sold out"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Gallery({
  product,
  active,
  setActive,
  zoom,
  setZoom,
}: {
  product: ProductDetail;
  active: number;
  setActive: (n: number) => void;
  zoom: boolean;
  setZoom: (b: boolean) => void;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div
        onClick={() => setZoom(!zoom)}
        className="group relative aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-champagne/40 shadow-[var(--shadow-soft)]"
      >
        <img
          src={product.images[active]}
          alt={product.name}
          className={`h-full w-full object-cover transition-transform duration-[900ms] ${
            zoom ? "scale-[1.35]" : "group-hover:scale-[1.05]"
          }`}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cocoa-deep backdrop-blur">
            {product.badge}
          </span>
        )}
        {!product.available && (
          <span className="absolute right-4 top-4 rounded-full bg-cocoa-deep px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ivory">
            Sold out
          </span>
        )}
      </div>
      {product.images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === active
                  ? "border-cocoa-deep shadow-[0_0_0_2px_var(--gold)]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type InfoProps = {
  product: ProductDetail;
  selectedLength: ReturnType<typeof useState<ProductDetail["lengths"] extends (infer U)[] | undefined ? U : never>>[0];
  setSelectedLength: (v: any) => void;
  selectedColor: any;
  setSelectedColor: (v: any) => void;
  qty: number;
  setQty: (v: number) => void;
  price: number;
  total: number;
  onAdd: () => void;
  added: boolean;
};

function Info({
  product,
  selectedLength,
  setSelectedLength,
  selectedColor,
  setSelectedColor,
  qty,
  setQty,
  price,
  total,
  onAdd,
  added,
}: InfoProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const outOfStock = !product.available;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 transition-all duration-700 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div>
        <p className="eyebrow">{product.category}</p>
        <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
          {product.name}
        </h1>
        <p className="mt-3 text-sm italic text-muted-foreground sm:text-base">
          {product.tagline}
        </p>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl text-cocoa-deep">${price}</span>
        {selectedLength && (
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {selectedLength.label}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            outOfStock ? "bg-destructive" : "bg-emerald-600"
          }`}
        />
        <span className="text-muted-foreground">
          {outOfStock ? "Currently unavailable" : "In stock · Local pickup available"}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
        {product.description}
      </p>

      <div className="hairline" />

      {/* Length selector */}
      {product.lengths && product.lengths.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="eyebrow">Length</span>
            <span className="text-xs text-muted-foreground">
              {selectedLength?.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.lengths.map((l) => {
              const isActive = selectedLength?.label === l.label;
              return (
                <button
                  key={l.label}
                  onClick={() => setSelectedLength(l)}
                  className={`min-w-[64px] rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "border-cocoa-deep bg-cocoa-deep text-ivory shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_35%,transparent)]"
                      : "border-border bg-background text-foreground hover:border-cocoa-deep/50"
                  }`}
                >
                  <span className="block leading-none">{l.label}</span>
                  <span
                    className={`mt-1 block text-[0.65rem] uppercase tracking-[0.15em] ${
                      isActive ? "text-ivory/70" : "text-muted-foreground"
                    }`}
                  >
                    ${l.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Color selector */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="eyebrow">Color</span>
            <span className="text-xs text-muted-foreground">{selectedColor?.name}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => {
              const isActive = selectedColor?.name === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                    isActive
                      ? "border-cocoa-deep shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_35%,transparent)]"
                      : "border-border hover:border-cocoa-deep/50"
                  }`}
                >
                  <span
                    className="h-5 w-5 rounded-full ring-1 ring-black/10"
                    style={{ background: c.swatch }}
                  />
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity + total */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="eyebrow">Quantity</span>
          <div className="mt-2 inline-flex items-center rounded-full border border-border bg-background">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="grid h-11 w-11 place-items-center text-foreground/70 hover:text-foreground"
              aria-label="Decrease"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center text-base font-medium">{qty}</span>
            <button
              onClick={() => setQty(Math.min(10, qty + 1))}
              className="grid h-11 w-11 place-items-center text-foreground/70 hover:text-foreground"
              aria-label="Increase"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="text-right">
          <span className="eyebrow">Total</span>
          <div className="mt-2 font-display text-2xl text-cocoa-deep">${total}</div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <button
          onClick={onAdd}
          disabled={outOfStock}
          className="flex-1 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground shadow-[var(--shadow-luxe)] transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {outOfStock ? "Sold out" : added ? "Added to cart ✓" : "Add to cart"}
        </button>
        <button
          disabled={outOfStock}
          className="flex-1 rounded-full border-2 border-cocoa-deep px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-cocoa-deep transition hover:bg-cocoa-deep hover:text-ivory disabled:cursor-not-allowed disabled:opacity-50"
        >
          Buy now
        </button>
      </div>

      {/* Assurance strip */}
      <div className="grid grid-cols-1 gap-2 rounded-2xl border border-border bg-champagne/40 p-4 text-xs sm:grid-cols-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cocoa-deep" />
          <span>Local pickup available</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-cocoa-deep" />
          <span>Secure checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-cocoa-deep" />
          <span>Raw virgin quality</span>
        </div>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible defaultValue="details" className="mt-2">
        <AccordionItem value="details">
          <AccordionTrigger className="eyebrow">Details</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-foreground/85">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="care">
          <AccordionTrigger className="eyebrow">Hair Care</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-foreground/85">
              Wash gently in cool water with a sulfate-free cleanser. Air-dry when possible,
              wrap in silk overnight, and use lightweight oils to preserve the natural
              softness and shine.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pickup">
          <AccordionTrigger className="eyebrow">Pickup Info</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-foreground/85">
              We do not ship. Local pickup only — pickup details are confirmed after purchase
              via text or email. Message us any time to check current availability.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="included">
          <AccordionTrigger className="eyebrow">What's Included</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-foreground/85">
              {product.included.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
