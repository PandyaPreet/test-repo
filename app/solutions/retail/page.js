export const revalidate = 10;

import { getRetailPage } from "@/imports/Retail/api/api";
import RetailPage from "@/imports/Retail/ui/page/RetailPage";

export const metadata = {
  title: "Retail Protection Plans That Sell | Ensure Protect",
  description:
    "Offer extended service and protection coverage at checkout with white-labeled plans built for retail POS and ecommerce.",
  keywords: [
    "retail protection plans",
    "extended warranty for electronics",
    "POS warranty integration",
    "protection plan at checkout",
  ],
  alternates: {
    canonical: "https://ensureprotect.com/solutions/retail",
  },
};

export default async function Page() {
  const data = await getRetailPage();
  return <RetailPage data={data} />;
}
