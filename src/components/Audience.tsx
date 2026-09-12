import Link from "next/link";
import Container from "@/components/Container";

const audiences = [
  {
    title: "Residential",
    description:
      "Full-service care for your home's outdoor spaces, from routine maintenance to complete backyard transformations.",
    href: "/residential",
  },
  {
    title: "Commercial",
    description:
      "Reliable landscape maintenance and installation for properties, HOAs, and businesses that need to look their best year-round.",
    href: "/commercial",
  },
];

export default function Audience() {
  return (
    <section className="bg-brand-dark py-20 text-brand-white">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">
          Residential &amp; Commercial
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {audiences.map((audience) => (
            <div key={audience.title} className="rounded-lg border border-brand-green p-8">
              <h3 className="font-display text-2xl font-semibold text-brand-gold">
                {audience.title}
              </h3>
              <p className="mt-4 text-brand-white/80">{audience.description}</p>
              <Link
                href={audience.href}
                className="mt-6 inline-block rounded bg-brand-green px-5 py-2 font-semibold hover:bg-brand-green-light"
                >
                Learn More
                </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}