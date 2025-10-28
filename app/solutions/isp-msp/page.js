import { getISPPage } from "@/imports/ISP-MSP/api/api";
import ISPCablePage from "@/imports/ISP-MSP/ui/page/ISPCablePage";

export const metadata = {
  title: "Service Plans for ISPs & Managed Providers | Ensure Protect",
  description:
    "Increase ARPU and reduce churn by bundling embedded protection with your broadband, hardware, and connected services.",
  keywords: [
    "ISP protection programs",
    "MSP device insurance",
    "router coverage plans",
    "smart home protection services",
  ],
  alternates: {
    canonical: "https://ensureprotect.com/solutions/isp-msp",
  },
};

export default async function Page() {
  const data = await getISPPage();
  return <ISPCablePage data={data} />;
}
