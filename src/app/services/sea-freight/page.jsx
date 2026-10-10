import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("sea-freight");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function SeaFreightPage() {
  return <ServiceDetailPage service={service} />;
}
