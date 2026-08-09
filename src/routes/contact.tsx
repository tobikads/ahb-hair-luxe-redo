import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Instagram, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { Reveal, RevealWords } from "@/components/reveal";
import storyImg from "@/assets/story-real.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Pickup — AHB Hair Extensions" },
      {
        name: "description",
        content:
          "Message AHB Hair Extensions about availability, sizing, or to arrange local pickup by appointment.",
      },
      { property: "og:title", content: "Contact & Pickup — AHB Hair Extensions" },
      {
        property: "og:description",
        content: "Local pickup by appointment. Message us about availability and sizing.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-cocoa/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>
                Appointments
              </p>
            </Reveal>
            <h1 className="mt-4 font-display text-[2.25rem] leading-[1.04] sm:text-5xl lg:text-6xl">
              <RevealWords text="Come collect your hair" accentFrom={2} />
            </h1>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                We don't ship. Every order is collected in person, at a time we
                confirm with you directly. Message us with the texture, length,
                and the date you need it for.
              </p>
            </Reveal>

            <ul className="mt-9 max-w-md">
              {[
                {
                  icon: MapPin,
                  label: "Pickup",
                  value: "Local pickup by appointment — Atlanta area",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "concierge@ahbhair.com",
                  href: "mailto:concierge@ahbhair.com",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: "Send a DM for availability",
                },
                {
                  icon: Clock,
                  label: "Timing",
                  value: "Pickup windows confirmed after checkout",
                },
              ].map((row, i) => (
                <Reveal as="li" key={row.label} delay={i * 90}>
                  <div className="flex items-start gap-4 border-t border-cocoa/15 py-4">
                    <row.icon
                      className="mt-1 h-4 w-4 shrink-0"
                      style={{ color: "var(--gold)" }}
                      strokeWidth={1.5}
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-cocoa/55">
                        {row.label}
                      </p>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="mt-1 block break-words font-display text-lg hover:text-cocoa"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-display text-lg leading-snug">{row.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={160}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border border-cocoa/15 bg-champagne/25 p-6 sm:p-8"
            >
              <p className="eyebrow mb-5">Send a note</p>
              <div className="space-y-4">
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "you@email.com" },
                  { label: "What you're after", type: "text", placeholder: 'e.g. 22" body wave bundles' },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-cocoa/60">
                      {f.label}
                    </span>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="mt-2 h-12 w-full min-w-0 border border-cocoa/20 bg-ivory px-4 text-sm text-cocoa-deep transition placeholder:text-cocoa/35 focus:border-cocoa-deep focus:outline-none"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-cocoa/60">
                    Message
                  </span>
                  <textarea
                    rows={4}
                    className="mt-2 w-full min-w-0 resize-none border border-cocoa/20 bg-ivory px-4 py-3 text-sm text-cocoa-deep transition placeholder:text-cocoa/35 focus:border-cocoa-deep focus:outline-none"
                    placeholder="Tell us the date you need it and any questions."
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 h-12 w-full bg-cocoa-deep text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition hover:bg-cocoa"
              >
                Send message
              </button>
              <p className="mt-4 text-center text-[11px] font-light text-muted-foreground">
                Pickup only — no shipping.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden">
          <img
            src={storyImg}
            alt="AHB client wearing a finished install"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-cocoa-deep/45" />
          <p className="absolute inset-x-0 bottom-6 text-center text-[10px] uppercase tracking-[0.4em] text-ivory/85">
            Local pickup / by appointment
          </p>
        </div>
      </section>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}
