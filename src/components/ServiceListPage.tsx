import Link from "next/link";
import Container from "@/components/Container";

type ServiceListPageProps = {
  title: string;
  description: string;
  services: readonly string[];
};

export default function ServiceListPage({ title, description, services }: ServiceListPageProps) {
  return (
    <>
      <section className="bg-brand-dark py-16 text-center text-brand-white">
        <Container>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-brand-white/70">{description}</p>
        </Container>
      </section>

      <section className="bg-brand-dark py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded border border-brand-green/30 bg-brand-white p-4"
              >
                <span className="text-brand-green">✓</span>
                <span className="text-brand-dark">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/quote"
              className="inline-block rounded bg-brand-gold px-8 py-3 font-semibold text-brand-dark hover:bg-brand-gold/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}