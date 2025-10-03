import React, { Fragment } from "react";
import { RetailHeroSection } from "../components/RetailHeroSection";
import RetailOverviewSection from "../components/RetailOverviewSection";

const RetailPage = () => {
  return (
    <Fragment>
      <RetailHeroSection />
      <RetailOverviewSection />
    </Fragment>
  );
};

export default RetailPage;
