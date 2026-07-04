import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, MapPin, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/catalog-shell";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — AHB Hair Extensions" },
      { name: "description", content: "Review your AHB hair selections and confirm your local pickup." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <section className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-24 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-champagne/50 text-cocoa-deep">
          <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <p className="eyebrow mt-6">Your Bag</p>
        <h1 className="mt-3 font-display text-[2rem] sm:text-4xl leading-[1.05]">
          Your cart is quietly waiting.
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground font-light max-w-md mx-auto">
          Add a piece from the collection and it will appear here. Local pickup only —
          we'll confirm your pickup time after checkout.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center h-12 px-8 bg-cocoa-deep text-ivory text-[11px] tracking-[0.26em] uppercase font-semibold hover:bg-cocoa transition"
          >
            Shop the collection
          </Link>
          <Link
            to="/collections/$category"
            params={{ category: "wigs" }}
            className="inline-flex items-center justify-center h-12 px-8 border border-cocoa-deep text-cocoa-deep text-[11px] tracking-[0.26em] uppercase font-semibold hover:bg-cocoa-deep hover:text-ivory transition"
          >
            Browse HD wigs
          </Link>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 text-left">
          <li className="flex items-center gap-3 border border-cocoa/10 bg-champagne/30 p-4">
            <MapPin className="h-4 w-4 text-cocoa-deep shrink-0" strokeWidth={1.5} />
            <span className="text-xs tracking-[0.18em] uppercase text-cocoa-deep/85">
              Local pickup only
            </span>
          </li>
          <li className="flex items-center gap-3 border border-cocoa/10 bg-champagne/30 p-4">
            <ShieldCheck className="h-4 w-4 text-cocoa-deep shrink-0" strokeWidth={1.5} />
            <span className="text-xs tracking-[0.18em] uppercase text-cocoa-deep/85">
              Secure checkout
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
