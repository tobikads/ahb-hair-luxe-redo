import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, User, ShoppingBag, X, ChevronDown, ChevronRight } from "lucide-react";
import { AhbLockupLink, AhbLockup } from "@/components/ahb-lockup";

type NavLink = { label: string; to: string; params?: Record<string, string> };

const primaryNav: NavLink[] = [
  { label: "Wavy", to: "/collections/$category", params: { category: "wavy" } },
  { label: "Straight", to: "/collections/$category", params: { category: "straight" } },
  { label: "HD Lace Wigs", to: "/collections/$category", params: { category: "wigs" } },
  { label: "Bundles", to: "/collections/$category", params: { category: "bundles" } },
];

const closureLinks: NavLink[] = [
  { label: "Closures", to: "/collections/$category", params: { category: "closures" } },
  { label: "Frontals", to: "/collections/$category", params: { category: "frontals" } },
];

const secondaryNav: NavLink[] = [
  { label: "Best Sellers", to: "/collections/$category", params: { category: "best-sellers" } },
  { label: "All Products", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

const linkClass =
  "group relative text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:text-champagne";
const underline =
  "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100 data-[status=active]:after:scale-x-100 data-[status=active]:text-champagne";

export function SiteHeader({ overHero = false }: { overHero?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 text-ivory transition-colors duration-500 ${
          overHero && !scrolled
            ? "bg-transparent"
            : "bg-cocoa-deep"
        }`}
      >
        {/* editorial detail line */}
        <div
          className={`overflow-hidden border-b border-ivory/10 transition-all duration-500 ${
            scrolled ? "h-0 opacity-0" : "h-8 opacity-100"
          }`}
        >
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-8">
            <span className="text-[9px] uppercase tracking-[0.34em] text-champagne/70">
              AHB / Atlanta
            </span>
            <span className="text-[9px] uppercase tracking-[0.34em] text-ivory/55">
              Local pickup by appointment
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div
            className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 transition-all duration-500 ${
              scrolled ? "h-14 sm:h-16" : "h-16 sm:h-24"
            }`}
          >
            <div className="flex min-w-0 items-center gap-1">
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="-ml-2 grid h-11 w-11 place-items-center rounded-full transition hover:bg-ivory/10 lg:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <AhbLockupLink tone="light" size={scrolled ? "sm" : "md"} />
            </div>

            {/* Desktop nav — sits right of the logo, never touching it */}
            <nav className="hidden justify-center gap-8 lg:flex xl:gap-10">
              {primaryNav.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  params={l.params as never}
                  className={`${linkClass} ${underline}`}
                >
                  {l.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  onClick={() => setDropOpen((o) => !o)}
                  aria-expanded={dropOpen}
                  className={`${linkClass} ${underline} inline-flex items-center gap-1.5`}
                >
                  Closures &amp; Frontals
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-5 transition-all duration-300 ${
                    dropOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="border border-ivory/10 bg-cocoa-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
                    {closureLinks.map((c, i) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        params={c.params as never}
                        onClick={() => setDropOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-ivory/80 transition hover:bg-ivory/[0.06] hover:text-champagne ${
                          i > 0 ? "border-t border-ivory/10" : ""
                        }`}
                      >
                        <span>Shop {c.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex min-w-0 items-center justify-end">
              <Link
                to="/shop"
                aria-label="Search the collection"
                className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-ivory/10"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                aria-label="Account and appointments"
                className="hidden h-11 w-11 place-items-center rounded-full transition hover:bg-ivory/10 sm:grid"
              >
                <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </Link>
              <Link
                to="/cart"
                aria-label="Cart"
                className="-mr-2 grid h-11 w-11 place-items-center rounded-full transition hover:bg-ivory/10"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-cocoa-deep/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-cocoa/10 px-5 py-4">
            <AhbLockup tone="dark" size="sm" />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="-mr-2 grid h-11 w-11 place-items-center rounded-full hover:bg-champagne/60"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-7">
            <p className="eyebrow mb-4">Shop by texture</p>
            <ul>
              {[...primaryNav, ...closureLinks].map((l, i) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    params={l.params as never}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[52px] items-center justify-between gap-4 border-b border-cocoa/10 py-3 font-display text-[21px] text-cocoa-deep transition hover:text-cocoa"
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="shrink-0 text-[10px] tracking-[0.28em] text-gold">
                        0{i + 1}
                      </span>
                      <span className="truncate">{l.label}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-cocoa/40" strokeWidth={1.5} />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-9 mb-4">The house</p>
            <ul className="space-y-1">
              {secondaryNav.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    params={l.params as never}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[44px] items-center text-[12px] uppercase tracking-[0.22em] text-cocoa-deep/80 hover:text-cocoa-deep"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-cocoa/10 px-5 py-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Pickup</p>
            <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
              Local pickup by appointment.
              <br />
              concierge@ahbhair.com
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
