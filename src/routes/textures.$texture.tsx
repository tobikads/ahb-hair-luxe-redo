import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { textures, productsByTexture } from "@/lib/catalog";
import { CollectionView } from "@/components/collection-view";

export const Route = createFileRoute("/textures/$texture")({
  loader: ({ params }) => {
    if (!textures[params.texture]) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const texture = textures[params.texture];
    if (!texture)
      return {
        meta: [
          { title: "Texture not found — AHB" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${texture.name} Hair — AHB Hair Extensions` },
        { name: "description", content: texture.description },
        { property: "og:title", content: `${texture.name} Hair — AHB Hair Extensions` },
        { property: "og:description", content: texture.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <p className="eyebrow">Not found</p>
        <h1 className="mt-3 font-display text-3xl">This texture isn't available</h1>
        <Link to="/shop" className="mt-6 inline-block underline underline-offset-4">
          Browse all
        </Link>
      </div>
    </div>
  ),
  component: TexturePage,
});

function TexturePage() {
  const { texture: slug } = Route.useParams();
  const texture = textures[slug];
  if (!texture) return null;
  return (
    <CollectionView
      eyebrow="Texture Library"
      title={texture.name}
      intro={texture.description}
      hero={texture.img}
      items={productsByTexture(texture)}
    />
  );
}
