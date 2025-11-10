export const revalidate = 10;

import { getMVNOPage } from "@/imports/MVNO-MNO/api/api";
import MobileNetworkPage from "@/imports/MVNO-MNO/ui/page/MobileNetworkPage";

export const metadata = {
  title: "IoT Device Protection & Embedded Support Plans",
  description:
    "Activate coverage at onboarding with embedded service plans for smart home, energy, industrial, and connected devices.",
  keywords: [
    "IoT protection",
    "embedded coverage for devices",
    "smart tech warranty",
    "connected product support",
    "IoT warranty API",
  ],
  alternates: {
    canonical: "https://ensureprotect.com/solutions/mvno-mno",
  },
};

export default async function Page() {
  const data = await getMVNOPage();
  return <MobileNetworkPage data={data} />;
}
