import { siteContent } from "@/data/content";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black text-brand-white md:min-h-[85vh]">
      {/* Background photo placeholder — swap for next/image with `fill` once you have a real photo */}
      <Image
        src="/images/hero2.jpg"
        alt="Completed landscaping project"
        fill
        className="object-cover"
        priority
        />

      {/* Gradient overlay: keeps the headline readable over a busy photo */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30"
        aria-hidden="true"
      />

      {/* Content sits above both layers via z-10 */}
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl leading-tight font-semibold md:text-6xl">
          {siteContent.business.tagline}
        </h1>
        <p className="mt-6 max-w-md text-brand-white/80">
          Licensed and insured crews serving your neighborhood, from design
          through the final walkthrough.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${siteContent.business.phones.primary}`}
            className="rounded bg-brand-gold px-6 py-3 font-semibold text-brand-black hover:bg-brand-gold/90"
          >
            Call {siteContent.business.phones.primary}
          </a>
          <a
            href="#services"
            className="rounded border border-brand-white/30 px-6 py-3 font-semibold hover:border-brand-white"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}