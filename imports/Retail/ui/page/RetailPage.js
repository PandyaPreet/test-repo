"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const RetailHeroSection = dynamic(
  () => import("../components/RetailHeroSection").then((mod) => mod.default),
  { ssr: false }
);
const RetailOverviewSection = dynamic(
  () => import("../components/RetailOverviewSection"),
  { ssr: false }
);
const RetailServicesSection = dynamic(
  () => import("../components/RetailServicesSection"),
  { ssr: false }
);
const RetailResultSection = dynamic(
  () => import("../components/RetailResultSection"),
  { ssr: false }
);
const RetailCTASection = dynamic(
  () => import("../components/RetailCTASection"),
  { ssr: false }
);

const RetailPage = () => {
  return (
    <Fragment>
      <RetailHeroSection />
      <RetailOverviewSection />
      <RetailServicesSection />
      <RetailResultSection />
      <RetailCTASection />
    </Fragment>
  );
};

export default RetailPage;
