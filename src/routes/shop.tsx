import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/products";
import { CollectionView } from "@/components/collection-view";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "All Products — AHB Hair Extensions" },
      {
        name: "description",
        content:
          "Every AHB piece in one place — HD lace wigs and raw bundles, collected by appointment.",
      },
      { property: "og:title", content: "All Products — AHB Hair Extensions" },
      {
        property: "og:description",
        content: "HD lace wigs and raw bundles. Local pickup by appointment.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <CollectionView
      eyebrow="The Full House"
      title="All Products"
      intro="Everything currently in the studio — wigs and bundles, filtered how you like. Prices shown start at the shortest length."
      items={products}
    />
  );
}
