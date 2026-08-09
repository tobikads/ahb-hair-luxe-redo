import { Link } from "@tanstack/react-router";
import { ShoppingBag, Star, MessageCircle, LayoutGrid } from "lucide-react";

const items = [
  { label: "Shop", icon: LayoutGrid, to: "/shop" as const },
  { label: "Reviews", icon: Star, to: "/" as const, hash: "reviews" },
  { label: "Contact", icon: MessageCircle, to: "/contact" as const },
  { label: "Cart", icon: ShoppingBag, to: "/cart" as const },
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory/10 bg-cocoa-deep/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl sm:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ label, icon: Icon, to, hash }) => (
          <li key={label}>
            <Link
              to={to}
              hash={hash}
              className="flex min-h-[52px] flex-col items-center justify-center gap-1 py-2.5 text-ivory/80 transition active:bg-ivory/5"
              activeProps={{ className: "text-champagne" }}
              activeOptions={{ exact: true }}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              <span className="text-[9px] font-light uppercase tracking-[0.2em]">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
