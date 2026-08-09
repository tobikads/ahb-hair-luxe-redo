const lineOne = [
  "Soft From Root To Ends",
  "HD Lace Finish",
  "Made To Blend",
  "Installed To Be Noticed",
  "Raw Texture",
];

const lineTwo = [
  "Local Pickup Available",
  "Melted Lace",
  "Full Ends. Soft Touch.",
  "Pickup Ready Drops",
  "By Appointment",
];

function Track({
  items,
  duration,
  reverse = false,
  className = "",
}: {
  items: string[];
  duration: string;
  reverse?: boolean;
  className?: string;
}) {
  // Two identical halves so the -50% translate loops seamlessly.
  const half = [...items, ...items];
  const loop = [...half, ...half];

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
          <span className="px-4 font-display text-[15px] leading-none tracking-[0.06em] text-ivory sm:px-7 sm:text-[20px]">
            {phrase}
          </span>
          <span className="h-[5px] w-[5px] rotate-45 bg-gold/70" />
        </span>
      ))}
    </div>
  );
}

export function PromiseRibbon() {
  return (
    <section
      aria-label="AHB house promises"
      className="relative isolate overflow-hidden border-y border-gold/20 bg-cocoa-deep py-4 text-ivory sm:py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cocoa-deep to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cocoa-deep to-transparent sm:w-24" />
      <Track items={lineOne} duration="46s" />
      <div className="mt-2.5 sm:mt-4">
        <Track items={lineTwo} duration="64s" reverse className="opacity-65" />
      </div>
    </section>
  );
}
