import { siteContent } from "@/data/content";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-brand-dark md:text-4xl">
            Get in touch
          </h2>
          <div className="mt-6 space-y-3 text-brand-dark/70">
            <p>{siteContent.contact.address}</p>
            <p>{siteContent.contact.hours}</p>
            <a href={`mailto:${siteContent.contact.email}`} className="block hover:text-brand-green">
              {siteContent.contact.email}
            </a>
            <a href={`tel:${siteContent.business.phones.secondary}`} className="block hover:text-brand-green">
              {siteContent.business.phones.secondary}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}