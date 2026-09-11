import { siteContent } from "@/data/content";

export default function Promo() {
  return (
    <section className="bg-brand-green py-10 text-center text-brand-white">
      <p className="font-display text-xl font-semibold md:text-2xl">
        {siteContent.promo.text}
      </p>
    </section>
  );
}