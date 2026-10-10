import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("non-hazardous-goods");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function NonHazardousGoodsPage() {
  return <ServiceDetailPage service={service} />;
}
