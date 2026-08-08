import { Link } from "@tanstack/react-router";

/**
 * AHB horizontal lockup.
 *
 * NOTE: drop the client's original horizontal logo file into
 * `src/assets/ahb-logo.png`, then import it here and render it in place of the
 * type lockup below. Nothing about the mark should be redrawn or rotated.
 */
export function AhbLockup({
  tone = "light",
  size = "md",
}: {
  /** light = ivory type (dark header), dark = chocolate type (light surfaces) */
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const text = tone === "light" ? "text-ivory" : "text-cocoa-deep";
  const sub = tone === "light" ? "text-champagne/75" : "text-cocoa/60";
  const rule = tone === "light" ? "bg-ivory/25" : "bg-cocoa/25";

  const mark =
    size === "sm"
      ? "text-lg sm:text-xl"
      : size === "lg"
        ? "text-3xl sm:text-4xl"
        : "text-2xl sm:text-[26px]";
  const label =
    size === "sm" ? "text-[7px]" : size === "lg" ? "text-[10px]" : "text-[8px]";

  return (
    <span className="flex items-center gap-2.5 sm:gap-3 leading-none select-none">
      <span className={`font-display tracking-[0.3em] ${mark} ${text}`}>AHB</span>
      <span className={`h-6 w-px shrink-0 sm:h-7 ${rule}`} />
      <span className={`${label} ${sub} uppercase leading-[1.5] tracking-[0.32em]`}>
        Hair
        <br />
        Extensions
      </span>
    </span>
  );
}

export function AhbLockupLink({
  tone = "light",
  size = "md",
}: {
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link to="/" aria-label="AHB Hair Extensions — home" className="shrink-0">
      <AhbLockup tone={tone} size={size} />
    </Link>
  );
}
