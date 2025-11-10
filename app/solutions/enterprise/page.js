export const revalidate = 10;

import React from "react";
import EnterprisePage from "@/imports/Enterprise/ui/page/EnterprisePage";
import { getEnterprisePage } from "@/imports/Enterprise/ui/api/api";

export const metadata = {
  title:
    "Enterprise Service Contracts &amp; Device Protection | Ensure Protect",
  description:
    "Minimize downtime and streamline claims across distributed devices with scalable group plans and tiered SLAs.",
  keywords: [
    "enterprise device coverage",
    "group service plans",
    "SLA protection plans",
    "IT asset protectionIT asset protection",
    "fleet device support",
  ],
  alternates: {
    canonical: "https://ensureprotect.com/solutions/enterprise",
  },
};

export default async function Page() {
  const data = await getEnterprisePage();
  return <EnterprisePage data={data} />;
}
