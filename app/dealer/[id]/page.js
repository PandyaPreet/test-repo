"use client";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { id } = useParams();
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
  ];
  const iframeSrc = `https://ensureprotect.com/${id}/`;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={iframeSrc}
        style={{
          border: "none",
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          display: "block",
        }}
        title={`Dealer - ${id}`}
      />
    </div>
  );
}

export default page;
