import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("refrigerated-transportation");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function RefrigeratedTransportationPage() {
  return <ServiceDetailPage service={service} />;
}
