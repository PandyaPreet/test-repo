"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const ISPHomeSection = dynamic(
  () =>
    import("../components/ISPHomeSection").then((mod) => mod.ISPHomeSection),
  { ssr: false }
);
const ISPCardSection = dynamic(() => import("../components/ISPCardSection"), {
  ssr: false,
});
const ISPOverviewSection = dynamic(
  () => import("../components/ISPOverviewSection"),
  { ssr: false }
);
const ISPFeaturesSection = dynamic(
  () => import("../components/ISPFeaturesSection"),
  { ssr: false }
);
const ISPOutcomesSection = dynamic(
  () => import("../components/ISPOutcomesSection"),
  { ssr: false }
);
const ISPCTASection = dynamic(() => import("../components/ISPCTASection"), {
  ssr: false,
});

const ISPCablePage = () => {
  return (
    <Fragment>
      <ISPHomeSection />
      <ISPCardSection />
      <ISPOverviewSection />
      <ISPFeaturesSection />
      <ISPOutcomesSection />
      <ISPCTASection />
    </Fragment>
  );
};

export default ISPCablePage;
