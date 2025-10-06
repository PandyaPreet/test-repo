import React, { Fragment } from "react";
import { ISPHomeSection } from "../components/ISPHomeSection";
import ISPCardSection from "../components/ISPCardSection";
import ISPOverviewSection from "../components/ISPOverviewSection";
import ISPFeaturesSection from "../components/ISPFeaturesSection";
import ISPOutcomesSection from "../components/ISPOutcomesSection";
import ISPCTASection from "../components/ISPCTASection";

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
