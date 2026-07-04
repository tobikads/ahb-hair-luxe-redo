import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { categories, productsByCategory } from "@/lib/catalog";
import { PageHeader, PageHero, ProductGrid } from "@/components/catalog-shell";

export const Route = createFileRoute("/collections/$category")({
  loader: ({ params }) => {
    const cat = categories[params.category];
    if (!cat) throw notFound();
    return { cat, items: productsByCategory(cat) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Collection not found — AHB" }, { name: "robots", content: "noindex" }] };
    const { cat } = loaderData;
    return {
      meta: [
        { title: `${cat.title} — AHB Hair Extensions` },
        { name: "description", content: cat.tagline },
        { property: "og:title", content: `${cat.title} — AHB Hair Extensions` },
        { property: "og:description", content: cat.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
      <div>
        <p className="eyebrow">Not found</p>
        <h1 className="mt-3 font-display text-3xl">This collection isn't available</h1>
        <Link to="/shop" className="mt-6 inline-block underline underline-offset-4">Browse all</Link>
      </div>
    </div>
  ),
  component: CollectionPage,
});

function CollectionPage() {
  const { cat, items } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <PageHero eyebrow={cat.eyebrow} title={cat.title} tagline={cat.tagline} image={cat.hero} />
      <ProductGrid items={items} />
    </div>
  );
}
