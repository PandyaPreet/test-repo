export const dynamic = "force-dynamic";

import { getPartnersPage } from "@/imports/Partners/api/api";
import PartnersPage from "@/imports/Partners/page/PartnersPage";

export const metadata = {
  title: "Partner With Ensure Protect | Grow with Embedded Protection",
  description:
    "Add new revenue streams and enhance customer experience with branded warranty and service plans backed by Ensure Protect.",
  keywords: [
    "embedded coverage solutions",
    "aftermarket revenue",
    "extended warranty partner",
    "protection program for retailers",
    "co-branded warranty plans",
    "embedded protection platform",
    "extended warranty provider",
    "device insurance partner",
    "service plan monetization",
  ],
  alternates: { canonical: "https://ensureprotect.com/partners" },
};

export default async function Page() {
  const data = await getPartnersPage();
  return <PartnersPage data={data} />;
}
