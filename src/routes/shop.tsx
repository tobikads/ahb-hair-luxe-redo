import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/products";
import { PageHeader, PageHero, ProductGrid } from "@/components/catalog-shell";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — AHB Hair Extensions" },
      { name: "description", content: "Shop all AHB luxury hair — HD lace wigs, raw bundles, closures, and frontals. Local pickup available." },
      { property: "og:title", content: "Shop All — AHB Hair Extensions" },
      { property: "og:description", content: "Luxury hair extensions, wigs, and bundles. Boutique quality." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <PageHero
        eyebrow="The Full Collection"
        title="Shop AHB"
        tagline="Every piece, curated for softness, blend, and long-wear luxury."
      />
      <ProductGrid items={products} />
    </div>
  );
}
