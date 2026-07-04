import { products, type ProductDetail } from "@/data/products";
import collWigs from "@/assets/collection-wigs.jpg";
import collBundles from "@/assets/collection-bundles.jpg";
import collClosures from "@/assets/collection-closures.jpg";
import collFrontals from "@/assets/collection-frontals.jpg";
import bodyWaveTexture from "@/assets/texture-body-wave.png";
import straightTexture from "@/assets/texture-straight.jpg";
import italianWaveTexture from "@/assets/texture-italian-wave.png";
import deepWaveTexture from "@/assets/texture-deep-wave.png";

export type CategoryMeta = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  hero: string;
  filter: (p: ProductDetail) => boolean;
};

export const categories: Record<string, CategoryMeta> = {
  wigs: {
    slug: "wigs",
    title: "HD Lace Wigs",
    eyebrow: "The Wig Edit",
    tagline: "Invisible melt. Unreal blend. Installed to be noticed.",
    hero: collWigs,
    filter: (p) => p.category === "HD Lace Wig",
  },
  bundles: {
    slug: "bundles",
    title: "Bundles",
    eyebrow: "The Bundle Edit",
    tagline: "Raw, virgin, unprocessed — soft from root to ends.",
    hero: collBundles,
    filter: (p) => p.category === "Bundles",
  },
  closures: {
    slug: "closures",
    title: "Closures",
    eyebrow: "The Closure Edit",
    tagline: "Effortless parting for a natural, seamless finish.",
    hero: collClosures,
    filter: () => false,
  },
  frontals: {
    slug: "frontals",
    title: "Frontals",
    eyebrow: "The Frontal Edit",
    tagline: "Sculpt your silhouette with an ear-to-ear melt.",
    hero: collFrontals,
    filter: () => false,
  },
};

export type TextureMeta = {
  slug: string;
  name: string;
  copy: string;
  description: string;
  img: string;
  matches: string[]; // product slug fragments
};

export const textures: Record<string, TextureMeta> = {
  "body-wave": {
    slug: "body-wave",
    name: "Body Wave",
    copy: "Soft bounce, natural movement.",
    description:
      "A soft, romantic wave with natural bounce and full ends. Effortless every day, editorial when styled.",
    img: bodyWaveTexture,
    matches: ["body-wave"],
  },
  straight: {
    slug: "straight",
    name: "Straight",
    copy: "Silk-smooth, mirror shine.",
    description:
      "Sleek, polished, and weightless. Silky straight hair with a clean, mirror-like shine.",
    img: straightTexture,
    matches: ["straight"],
  },
  "italian-wave": {
    slug: "italian-wave",
    name: "Italian Wave",
    copy: "Loose editorial waves.",
    description:
      "Loose, undone waves with an editorial finish — the closest thing to hair-off-a-runway.",
    img: italianWaveTexture,
    matches: ["body-wave"],
  },
  "deep-wave": {
    slug: "deep-wave",
    name: "Deep Wave",
    copy: "Defined pattern, full finish.",
    description:
      "A defined, uniform curl pattern with rich density and moisturized ends.",
    img: deepWaveTexture,
    matches: ["deep-wave"],
  },
};

export const productsByTexture = (texture: TextureMeta): ProductDetail[] =>
  products.filter((p) => texture.matches.some((m) => p.slug.includes(m)));

export const productsByCategory = (cat: CategoryMeta): ProductDetail[] =>
  products.filter(cat.filter);
