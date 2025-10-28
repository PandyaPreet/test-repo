import { getConsultingPage } from "@/imports/Consulting/api/api";
import ConsultingPage from "@/imports/Consulting/ui/page/ConsultingPage";

export const metadata = {
  title: "Consultant & Partner Enablement | Ensure Protect",
  description:
    "Expand your offerings with white-label protection plans for your clients. Full enablement, flexible models, shared success.",
  keywords: [
    "warranty consulting partner",
    "white-label service plans",
    "reseller protection plans",
    "partner program warranty",
  ],
  alternates: {
    canonical: "https://ensureprotect.com/solutions/consulting",
  },
};

export default async function Page() {
  const data = await getConsultingPage();
  return <ConsultingPage data={data} />;
}
