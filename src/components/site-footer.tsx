import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Mail, MessageCircle } from "lucide-react";
import { AhbLockup } from "@/components/ahb-lockup";

const shopLinks = [
  { label: "HD Lace Wigs", category: "wigs" },
  { label: "Bundles", category: "bundles" },
  { label: "Closures", category: "closures" },
  { label: "Frontals", category: "frontals" },
  { label: "Best Sellers", category: "best-sellers" },
];

const textureLinks = [
  { label: "Body Wave", texture: "body-wave" },
  { label: "Straight", texture: "straight" },
  { label: "Italian Wave", texture: "italian-wave" },
  { label: "Deep Wave", texture: "deep-wave" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-cocoa-deep text-ivory/80">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-28 sm:px-8 sm:pt-20 sm:pb-12">
        <div className="grid gap-10 border-b border-ivory/10 pb-12 md:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <AhbLockup tone="light" size="lg" />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-ivory/70">
              A boutique hair house. Raw texture, melted lace, and installs
              collected in person.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                className="grid h-11 w-11 place-items-center border border-ivory/20 transition hover:border-gold/50 hover:bg-ivory/10"
                href="#"
                aria-label="AHB on Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                className="grid h-11 w-11 place-items-center border border-ivory/20 transition hover:border-gold/50 hover:bg-ivory/10"
                href="#"
                aria-label="AHB on Facebook"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5 text-ivory/55">Shop</p>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to="/collections/$category"
                    params={{ category: l.category }}
                    className="text-sm font-light transition hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="text-sm font-light transition hover:text-gold">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-ivory/55">Textures</p>
            <ul className="space-y-3">
              {textureLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to="/textures/$texture"
                    params={{ texture: l.texture }}
                    className="text-sm font-light transition hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-ivory/55">Pickup &amp; contact</p>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--gold)" }}
                  strokeWidth={1.5}
                />
                <span>Local pickup by appointment</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--gold)" }}
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:concierge@ahbhair.com"
                  className="break-all transition hover:text-gold"
                >
                  concierge@ahbhair.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--gold)" }}
                  strokeWidth={1.5}
                />
                <Link to="/contact" className="transition hover:text-gold">
                  Ask about availability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-6 text-[11px] text-ivory/45 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} AHB Hair Extensions.</p>
          <p className="uppercase tracking-[0.28em]">AHB / Atlanta · Pickup only</p>
        </div>
      </div>
    </footer>
  );
}
