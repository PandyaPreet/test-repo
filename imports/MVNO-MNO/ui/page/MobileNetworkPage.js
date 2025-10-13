"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const MNHeroSection = dynamic(
  () => import("../components/MNHeroSection").then((mod) => mod.MNHeroSection),
  { ssr: false }
);
const MNCardSection = dynamic(() => import("../components/MNCardSection"), {
  ssr: false,
});
const MNServicesSection = dynamic(
  () => import("../components/MNServicesSection"),
  { ssr: false }
);
const MNOverview = dynamic(() => import("../components/MNOverview"), {
  ssr: false,
});
const MNCTASection = dynamic(() => import("../components/MNCTASection"), {
  ssr: false,
});

const MobileNetworkPage = () => {
  return (
    <Fragment>
      <MNHeroSection />
      <MNCardSection />
      <MNServicesSection />
      <MNOverview />
      <MNCTASection />
    </Fragment>
  );
};

export default MobileNetworkPage;
