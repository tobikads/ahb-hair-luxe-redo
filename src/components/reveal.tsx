import { useEffect, useRef, useState } from "react";

/** Scroll reveal primitive. Respects prefers-reduced-motion. */
export function useReveal<T extends HTMLElement>(threshold = 0.14) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

/** Fades and rises. Used for eyebrows, labels, blocks of copy. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Headline that reveals word by word, in sequence. */
export function RevealWords({
  text,
  className = "",
  delay = 0,
  step = 90,
  accentFrom,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  /** Word index from which the remaining words take the accent colour. */
  accentFrom?: number;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.2);
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            style={{ transitionDelay: shown ? `${delay + i * step}ms` : "0ms" }}
            className={`inline-block transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
              shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[110%]"
            } ${accentFrom !== undefined && i >= accentFrom ? "text-cocoa" : ""}`}
          >
            {w}
          </span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/** Image container that reveals behind a subtle vertical mask. */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  eager?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.1);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
        className={`h-full w-full object-cover transition-[transform,opacity] duration-[1500ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
          shown ? "opacity-100 scale-100" : "opacity-0 scale-[1.06]"
        } ${imgClassName}`}
      />
      <span
        aria-hidden
        style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
        className={`pointer-events-none absolute inset-0 origin-bottom bg-ivory transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
          shown ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </div>
  );
}
