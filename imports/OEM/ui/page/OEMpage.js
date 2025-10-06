import React, { Fragment } from "react";
import OEMHeroSection from "../components/OEMHeroSection";
import OEMCardSection from "../components/OEMCardSection";
import OEMBenefitsRightSection from "../components/OEMBenefitsRightSection";
import OEMBenefitsLeftSection from "../components/OEMBenefitsLeftSection";
import OEMCtaSection from "../components/OEMCtaSection";

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
