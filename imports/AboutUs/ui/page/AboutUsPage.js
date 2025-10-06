import React, { Fragment } from "react";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import AboutUsFeatureSection from "../components/AboutUsFeatureSection";
import AboutUsCardsSection from "../components/AboutUsCardsSection";
import AboutUsStatsSection from "../components/AboutUsStatsSection";
import AboutUsCTASection from "../components/AboutUsCTASection";

function AboutUsPage() {
  return (
    <Fragment>
      <AboutUsHeroSection />
      <AboutUsFeatureSection />
      <AboutUsCardsSection />
      <AboutUsStatsSection />
      <AboutUsCTASection />
    </Fragment>
  );
}

export default AboutUsPage;
