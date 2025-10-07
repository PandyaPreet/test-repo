import React, { Fragment } from "react";
import { RetailHeroSection } from "../components/RetailHeroSection";
import RetailOverviewSection from "../components/RetailOverviewSection";
import RetailServicesSection from "../components/RetailServicesSection";
import RetailCTASection from "../components/RetailCTASection";
import RetailResultSection from "../components/RetailResultSection";

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
