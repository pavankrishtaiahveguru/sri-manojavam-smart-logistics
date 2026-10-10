import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("supply-chain");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function SupplyChainPage() {
  return <ServiceDetailPage service={service} />;
}
