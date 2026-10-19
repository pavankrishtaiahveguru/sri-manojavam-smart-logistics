import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("un-box-packing-and-palletisation");

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function UNBoxPackingAndPalletisationPage() {
  return <ServiceDetailPage service={service} />;
}
