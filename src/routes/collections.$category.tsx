import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { categories, productsByCategory } from "@/lib/catalog";
import { CollectionView } from "@/components/collection-view";

export const Route = createFileRoute("/collections/$category")({
  loader: ({ params }) => {
    if (!categories[params.category]) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const cat = categories[params.category];
    if (!cat)
      return {
        meta: [
          { title: "Collection not found — AHB" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${cat.title} — AHB Hair Extensions` },
        { name: "description", content: cat.intro },
        { property: "og:title", content: `${cat.title} — AHB Hair Extensions` },
        { property: "og:description", content: cat.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <p className="eyebrow">Not found</p>
        <h1 className="mt-3 font-display text-3xl">This collection isn't available</h1>
        <Link to="/shop" className="mt-6 inline-block underline underline-offset-4">
          Browse all
        </Link>
      </div>
    </div>
  ),
  component: CollectionPage,
});

function CollectionPage() {
  const { category } = Route.useParams();
  const cat = categories[category];
  if (!cat) return null;
  return (
    <CollectionView
      eyebrow={cat.eyebrow}
      title={cat.title}
      intro={cat.intro}
      hero={cat.hero}
      items={productsByCategory(cat)}
    />
  );
}
