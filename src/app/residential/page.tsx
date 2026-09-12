import ServiceListPage from "@/components/ServiceListPage";
import { siteContent } from "@/data/content";

export default function ResidentialPage() {
  return (
    <ServiceListPage
      title="Residential Services"
      description="From routine lawn care to full backyard transformations, we help homeowners get the outdoor space they actually want to spend time in."
      services={siteContent.residentialServices}
    />
  );
}