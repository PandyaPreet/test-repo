import DealersLoginPage from "@/imports/Dealers/DealersLoginPage";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;
  const validDealers = [
    "atwoods",
    "5devices",
    "ruralking",
    "rides",
    "bikemart",
    "gorhambikeandski",
    "landrys",
    "pedal",
    "wheelandsprocket",
    "globalbikes",
    "seeds",
    "lmfleetsupply",
    "fcfarmandhome",
    "theisens",
    "scw",
    "buchheit",
    "shoppers",
    "instaprotek",
    "fhsfpp-frame-brochure",
    "fhs",
    "education",
    "biggear",
    "eastwood",
    "servicecenter",
  ];

  if (!validDealers.includes(id)) {
    notFound();
  }

  return <DealersLoginPage id={id} />;
}
