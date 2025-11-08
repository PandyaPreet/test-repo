import { getDealerPage } from "@/imports/Dealers/api/api";
import DealersLoginPage from "@/imports/Dealers/ui/page/DealersLoginPage";

import { notFound, redirect } from "next/navigation";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;

  if (id === "servicecenter") {
    redirect("https://ensureprotect1.wpengine.com/servicecenter");
  }

  const data = await getDealerPage(id);
  const validDealers = [
    "calranch-frame",
    "lmfleetsupply",
    "seeds",
    "education",
    "eastwood",
    "buchheit",
    "coastal-frame",
    "ruralking",
    "atwoods",
    "fcfarmandhome",
    "theisens",
    "shoppers",
    "fhs",
    "instaprotek",
    "5devices",
    "scw",
    "rides",
    "bikemart",
    "gorhambikeandski",
    "landrys",
    "pedal",
    "wheelandsprocket",
    "globalbikes",
    "biggear",
  ];

  if (!validDealers.includes(id)) {
    notFound();
  }

  return <DealersLoginPage id={id} data={data} />;
}
