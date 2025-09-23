import React, { Fragment } from "react";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";

const HomePage = () => {
  return (
    <Fragment>
      <PartnersSection />
      <StatsSection />
      <CTASection />
    </Fragment>
  );
};

export default HomePage;
