import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-dark text-brand-white md:min-h-[85vh]">
      <Image
        src="/images/hero2.jpg"
        alt="Completed landscaping project"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Image
          src={siteContent.business.logo}
          alt={siteContent.business.name}
          width={500}
          height={180}
          className="mb-6 h-40 w-auto md:h-64"
        />
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
            className="rounded bg-brand-gold px-6 py-3 font-semibold text-brand-dark hover:bg-brand-gold/90"
          >
            Call {siteContent.business.phones.primary}
          </a>
          <Link
            href="/quote"
            className="rounded border border-brand-white/30 px-6 py-3 font-semibold hover:border-brand-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}