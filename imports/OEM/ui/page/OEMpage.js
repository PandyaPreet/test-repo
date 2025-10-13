"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const OEMHeroSection = dynamic(() => import("../components/OEMHeroSection"), {
  ssr: false,
});
const OEMCardSection = dynamic(() => import("../components/OEMCardSection"), {
  ssr: false,
});
const OEMBenefitsRightSection = dynamic(
  () => import("../components/OEMBenefitsRightSection"),
  { ssr: false }
);
const OEMBenefitsLeftSection = dynamic(
  () => import("../components/OEMBenefitsLeftSection"),
  { ssr: false }
);
const OEMCtaSection = dynamic(() => import("../components/OEMCtaSection"), {
  ssr: false,
});

function OEMpage() {
  return (
    <Fragment>
      <OEMHeroSection />
      <OEMCardSection />
      <OEMBenefitsRightSection />
      <OEMBenefitsLeftSection />
      <OEMCtaSection />
    </Fragment>
  );
}

export default OEMpage;
