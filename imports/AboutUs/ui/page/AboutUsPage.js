import React, { Fragment } from "react";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import AboutUsFeatureSection from "../components/AboutUsFeatureSection";
import AboutUsCardsSection from "../components/AboutUsCardsSection";

function AboutUsPage() {
  return (
    <Fragment>
      <AboutUsHeroSection />
      <AboutUsFeatureSection />
      {/* <AboutUsCardsSection /> */}
    </Fragment>
  );
}

export default AboutUsPage;
