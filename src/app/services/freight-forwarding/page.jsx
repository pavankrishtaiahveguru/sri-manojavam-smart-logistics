import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("freight-forwarding");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function FreightForwardingPage() {
  return <ServiceDetailPage service={service} />;
}
