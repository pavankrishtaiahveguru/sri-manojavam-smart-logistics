import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("transportation");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function TransportationPage() {
  return <ServiceDetailPage service={service} />;
}
