import React, { Fragment } from "react";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";
import PlansSection from "../components/PlansSection";

const HomePage = () => {
  return (
    <Fragment>
      <PlansSection />
      <PartnersSection />
      <StatsSection />
      <CTASection />
    </Fragment>
  );
};

export default HomePage;
