import bodyWaveWig from "@/assets/product-body-wave-wig.png";
import straightWig from "@/assets/product-straight-wig.jpg";
import deepWaveWig from "@/assets/product-deep-wave-wig.png";
import blondeWig from "@/assets/product-blonde-wig.png";
import bodyWaveTexture from "@/assets/texture-body-wave.png";
import straightTexture from "@/assets/texture-straight.jpg";
import deepWaveTexture from "@/assets/texture-deep-wave.png";
import italianWaveTexture from "@/assets/texture-italian-wave.png";

export type LengthOption = { label: string; price: number };
export type ColorOption = { name: string; swatch: string };

export type ProductDetail = {
  slug: string;
  name: string;
  category: "Bundles" | "HD Lace Wig";
  tagline: string;
  description: string;
  images: string[];
  lengths?: LengthOption[];
  fixedPrice?: number;
  colors?: ColorOption[];
  available: boolean;
  badge?: string;
  details: string[];
  included: string[];
};

// NOTE: Prices are placeholders — edit here to update site-wide.
export const products: ProductDetail[] = [
  {
    slug: "body-wave-bundles",
    name: "Body Wave Bundles",
    category: "Bundles",
    tagline: "Raw. Full-ended. Soft to the touch.",
    description:
      "Unprocessed raw body wave bundles with a soft, natural bounce. Rich density from root to end, no shedding, no synthetic shine.",
    images: [bodyWaveTexture, bodyWaveWig],
    lengths: [
      { label: '18"', price: 110 },
      { label: '20"', price: 120 },
      { label: '22"', price: 135 },
      { label: '24"', price: 150 },
      { label: '26"', price: 165 },
    ],
    colors: [
      { name: "Natural Black", swatch: "#1a1108" },
      { name: "Honey Blonde", swatch: "#c99a5b" },
    ],
    available: true,
    badge: "Best Seller",
    details: [
      "100% raw virgin human hair",
      "Cuticles aligned, single donor",
      "Can be colored, bleached, and heat styled",
    ],
    included: ["1 bundle per unit ordered", "AHB signature satin pouch", "Care card"],
  },
  {
    slug: "straight-bundles",
    name: "Straight Bundles",
    category: "Bundles",
    tagline: "Silk-smooth, mirror shine, effortless drape.",
    description:
      "Sleek raw straight bundles with a soft hand-feel and clean, weightless shine. Perfect for a polished editorial finish.",
    images: [straightTexture, straightWig],
    lengths: [
      { label: '18"', price: 110 },
      { label: '20"', price: 120 },
      { label: '22"', price: 130 },
      { label: '24"', price: 145 },
      { label: '26"', price: 160 },
    ],
    colors: [{ name: "Natural Black", swatch: "#1a1108" }],
    available: true,
    badge: "Ready for Pickup",
    details: [
      "Raw virgin, single donor",
      "Holds a flat-iron press beautifully",
      "Minimal shedding, no tangling",
    ],
    included: ["1 bundle per unit ordered", "Satin pouch", "Care card"],
  },
  {
    slug: "deep-wave-bundles",
    name: "Deep Wave Bundles",
    category: "Bundles",
    tagline: "Defined pattern, full ends, luxurious weight.",
    description:
      "Deep wave raw bundles with a defined, uniform curl pattern. Full from root to tip with a soft, moisturized finish.",
    images: [deepWaveTexture, italianWaveTexture],
    lengths: [
      { label: '18"', price: 120 },
      { label: '20"', price: 135 },
      { label: '22"', price: 150 },
      { label: '24"', price: 165 },
      { label: '26"', price: 180 },
    ],
    colors: [{ name: "Natural Black", swatch: "#1a1108" }],
    available: true,
    badge: "Client Favorite",
    details: [
      "Raw virgin human hair",
      "Pattern revives with water",
      "Rich density, thick ends",
    ],
    included: ["1 bundle per unit ordered", "Satin pouch", "Care card"],
  },
  {
    slug: "body-wave-hd-wig",
    name: "Body Wave HD Lace Wig",
    category: "HD Lace Wig",
    tagline: "Invisible melt. Effortless blend.",
    description:
      "Pre-plucked HD lace wig in a soft body wave texture. Realistic hairline, breathable cap, ready to install.",
    images: [bodyWaveWig, bodyWaveTexture],
    fixedPrice: 650,
    colors: [{ name: "Natural Black", swatch: "#1a1108" }],
    lengths: [
      { label: '18"', price: 650 },
      { label: '20"', price: 690 },
      { label: '22"', price: 730 },
      { label: '24"', price: 780 },
    ],
    available: true,
    badge: "Best Seller",
    details: [
      "HD melt lace, virtually invisible",
      "Pre-plucked hairline & baby hairs",
      "Adjustable straps and combs",
    ],
    included: ["1 HD lace wig", "Wig cap", "Satin bag", "Care card"],
  },
  {
    slug: "silk-straight-hd-wig",
    name: "Silk Straight HD Lace Wig",
    category: "HD Lace Wig",
    tagline: "Polished. Sleek. Photo-ready.",
    description:
      "Silky straight HD lace wig with a soft flow and a clean, natural shine. Effortless to style and install.",
    images: [straightWig, straightTexture],
    fixedPrice: 470,
    colors: [{ name: "Natural Black", swatch: "#1a1108" }],
    lengths: [
      { label: '18"', price: 470 },
      { label: '20"', price: 510 },
      { label: '22"', price: 550 },
      { label: '24"', price: 600 },
    ],
    available: true,
    badge: "Ready for Pickup",
    details: [
      "HD lace with a seamless melt",
      "Silky, soft, low-maintenance texture",
      "Adjustable straps and combs",
    ],
    included: ["1 HD lace wig", "Wig cap", "Satin bag", "Care card"],
  },
  {
    slug: "deep-wave-hd-wig",
    name: "Deep Wave HD Lace Wig",
    category: "HD Lace Wig",
    tagline: "Defined curls. Full density. Statement finish.",
    description:
      "Deep wave HD lace wig with a rich, defined curl pattern and full body. Soft, moisturized, and ready to slay.",
    images: [deepWaveWig, deepWaveTexture],
    fixedPrice: 550,
    colors: [{ name: "Natural Black", swatch: "#1a1108" }],
    lengths: [
      { label: '18"', price: 550 },
      { label: '20"', price: 590 },
      { label: '22"', price: 630 },
    ],
    available: true,
    badge: "Client Favorite",
    details: [
      "HD melt lace, breathable cap",
      "Rich curl pattern, refreshes with water",
      "Pre-plucked hairline",
    ],
    included: ["1 HD lace wig", "Wig cap", "Satin bag", "Care card"],
  },
  {
    slug: "honey-blonde-body-wave-wig",
    name: "Honey Blonde Body Wave Wig",
    category: "HD Lace Wig",
    tagline: "Dimensional honey. Soft statement.",
    description:
      "A hand-colored honey blonde body wave wig with soft, dimensional tones. A warm, editorial statement piece.",
    images: [blondeWig, bodyWaveTexture],
    fixedPrice: 340,
    colors: [{ name: "Honey Blonde", swatch: "#c99a5b" }],
    lengths: [
      { label: '20"', price: 340 },
      { label: '22"', price: 380 },
    ],
    available: false,
    badge: "Restocking Soon",
    details: [
      "Hand-colored honey blonde",
      "HD lace with soft baby hairs",
      "Refresh tones at any licensed colorist",
    ],
    included: ["1 HD lace wig", "Wig cap", "Satin bag", "Care card"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
