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
  /** Short editorial intro shown on the collection page. */
  intro: string;
  hero: string;
  filter: (p: ProductDetail) => boolean;
};

const wavySlugs = ["body-wave", "deep-wave", "italian-wave"];

export const categories: Record<string, CategoryMeta> = {
  wigs: {
    slug: "wigs",
    title: "HD Lace Wigs",
    eyebrow: "Collection 01",
    tagline: "Melted lace, pre-plucked hairline, ready to install.",
    intro:
      "Units built around the hairline first. HD lace, soft baby hairs, and an adjustable cap so the install sits flat on day one and day thirty.",
    hero: collWigs,
    filter: (p) => p.category === "HD Lace Wig",
  },
  bundles: {
    slug: "bundles",
    title: "Bundles",
    eyebrow: "Collection 02",
    tagline: "Raw, unprocessed, full from root to ends.",
    intro:
      "Single-donor raw hair with the cuticle intact. Choose your length, keep the ends full, and let the texture do the talking.",
    hero: collBundles,
    filter: (p) => p.category === "Bundles",
  },
  closures: {
    slug: "closures",
    title: "Closures",
    eyebrow: "Collection 03",
    tagline: "A clean parting space, sewn to disappear.",
    intro:
      "Closure pieces for a natural parting and a finished crown. Message us for current sizes and availability before your appointment.",
    hero: collClosures,
    filter: () => false,
  },
  frontals: {
    slug: "frontals",
    title: "Frontals",
    eyebrow: "Collection 03",
    tagline: "Ear to ear, styled in any direction.",
    intro:
      "Frontals for full styling freedom — pull it back, part it anywhere. Message us for current sizes and availability before your appointment.",
    hero: collFrontals,
    filter: () => false,
  },
  wavy: {
    slug: "wavy",
    title: "Wavy",
    eyebrow: "By Texture",
    tagline: "Body wave, deep wave, Italian wave.",
    intro:
      "Every wave pattern in the house, from a soft body wave to a defined deep wave. Water revives the pattern, so it stays full past the first wash.",
    hero: bodyWaveTexture,
    filter: (p) => wavySlugs.some((s) => p.slug.includes(s)),
  },
  straight: {
    slug: "straight",
    title: "Straight",
    eyebrow: "By Texture",
    tagline: "Sleek, weightless, mirror finish.",
    intro:
      "Silky straight hair with a clean drape and a quiet shine. Holds a press, moves like it grew from your own scalp.",
    hero: straightTexture,
    filter: (p) => p.slug.includes("straight"),
  },
  "best-sellers": {
    slug: "best-sellers",
    title: "Best Sellers",
    eyebrow: "Loved On Repeat",
    tagline: "The pieces our clients come back for.",
    intro:
      "The units and bundles that leave the studio fastest — reordered, reinstalled, and asked about most often.",
    hero: collWigs,
    filter: (p) => Boolean(p.badge && p.badge !== "Restocking Soon"),
  },
};

export const categoryList = [
  categories.wigs,
  categories.bundles,
  categories.closures,
  categories.frontals,
];

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

export const textureList = [
  textures["body-wave"],
  textures.straight,
  textures["italian-wave"],
  textures["deep-wave"],
];

export const productsByTexture = (texture: TextureMeta): ProductDetail[] =>
  products.filter((p) => texture.matches.some((m) => p.slug.includes(m)));

export const productsByCategory = (cat: CategoryMeta): ProductDetail[] =>
  products.filter(cat.filter);

export const priceOf = (p: ProductDetail) =>
  p.lengths?.[0]?.price ?? p.fixedPrice ?? 0;

export const bestSellers = productsByCategory(categories["best-sellers"]);
