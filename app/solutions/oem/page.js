import { getOemPage } from "@/imports/OEM/ui/api/api";
import OEMpage from "@/imports/OEM/ui/page/OEMpage";

export const metadata = {
  title: "OEM Extended Warranty & Embedded Coverage | Ensure Protect",
  description:
    "Deliver branded support with embedded protection plans and aftermarket coverage designed for product manufacturers.",
  keywords: [
    "OEM warranty provider",
    "co-branded service plans",
    "embedded device coverage",
    "warranty extensions for manufacturers",
  ],
  alternates: { canonical: "https://ensureprotect.com/solutions/oem" },
};

export default async function Page() {
  const data = await getOemPage();
  return <OEMpage data={data} />;
}
