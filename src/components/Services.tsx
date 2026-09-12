import { siteContent } from "@/data/content";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-brand-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-dark md:text-4xl">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.serviceGroups.map((group) => (
            <ServiceCard key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  );
}