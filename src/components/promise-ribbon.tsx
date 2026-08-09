const trackOne = [
  "Soft From Root To Ends",
  "Made To Blend",
  "Installed To Be Noticed",
];

const trackTwo = [
  "Raw Texture",
  "Melted Lace",
  "Full Ends",
  "Pickup Ready",
];

function Track({
  items,
  duration,
  reverse = false,
  className = "",
  size = "lg",
}: {
  items: string[];
  duration: string;
  reverse?: boolean;
  className?: string;
  size?: "lg" | "sm";
}) {
  // Four copies so a -50% translate loops with no visible seam.
  const loop = [...items, ...items, ...items, ...items];
  const type =
    size === "lg"
      ? "font-display text-[19px] tracking-[0.05em] sm:text-[34px]"
      : "text-[10px] font-medium uppercase tracking-[0.34em] sm:text-[12px]";

  return (
    <div
      className={`flex w-max whitespace-nowrap ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } ${className}`}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
      aria-hidden
    >
      {loop.map((phrase, i) => (
        <span key={`${phrase}-${i}`} className="flex shrink-0 items-center">
          <span className={`px-4 leading-none text-ivory sm:px-8 ${type}`}>{phrase}</span>
          <span className="h-[6px] w-[6px] rotate-45 border border-gold/70" />
        </span>
      ))}
    </div>
  );
}

/** The AHB Quality Code — two-track editorial ribbon, opposing directions. */
export function PromiseRibbon() {
  return (
    <section
      aria-label="The AHB quality code"
      className="relative isolate overflow-hidden bg-cocoa-deep py-5 text-ivory sm:py-8"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gold/35" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-gold/35" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cocoa-deep to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cocoa-deep to-transparent sm:w-40" />

      <Track items={trackOne} duration="52s" />
      <div className="mt-3 sm:mt-5">
        <Track items={trackTwo} duration="34s" reverse size="sm" className="text-gold/80" />
      </div>
    </section>
  );
}
