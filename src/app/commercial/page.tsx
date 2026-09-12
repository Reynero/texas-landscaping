import ServiceListPage from "@/components/ServiceListPage";
import { siteContent } from "@/data/content";

export default function CommercialPage() {
  return (
    <ServiceListPage
      title="Commercial Services"
      description="Reliable, scheduled landscape maintenance for properties, HOAs, and businesses that need to look sharp year-round."
      services={siteContent.commercialServices}
    />
  );
}