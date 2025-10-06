import React, { Fragment } from "react";
import { MNHeroSection } from "../components/MNHeroSection";
import MNCardSection from "../components/MNCardSection";
import MNServicesSection from "../components/MNServicesSection";
import MNOverview from "../components/MNOverview";
import MNCTASection from "../components/MNCTASection";

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
