import Container from "@/components/Container";
import QuoteForm from "@/components/QuoteForm";
import { siteContent } from "@/data/content";

export default function QuotePage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-center text-brand-white">
        <Container>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">Get a Free Quote</h1>
          <p className="mt-4 text-brand-white/70">
            Tell us about your project and we&apos;ll get back to you shortly.
          </p>
        </Container>
      </section>

      <section className="bg-brand-white py-16">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-brand-dark">Contact Information</h2>
            <div className="mt-6 space-y-3 text-brand-dark/70">
              <p>{siteContent.contact.address}</p>
              <p>{siteContent.contact.hours}</p>
              <a href={`mailto:${siteContent.contact.email}`} className="block hover:text-brand-green">
                {siteContent.contact.email}
              </a>
              <a href={`tel:${siteContent.business.phones.primary}`} className="block hover:text-brand-green">
                {siteContent.business.phones.primary}
              </a>
              <a href={`tel:${siteContent.business.phones.secondary}`} className="block text-sm text-brand-dark/50 hover:text-brand-green">
                Alt: {siteContent.business.phones.secondary}
              </a>
            </div>
          </div>
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}