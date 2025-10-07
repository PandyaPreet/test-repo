"use client";

import React, { Fragment } from "react";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";
import PlansSection from "../components/PlansSection";
import { HeroSection } from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

const HomePage = () => {
  console.log("Rendering HomePage");
  return (
    <Fragment>
      <HeroSection />
      <PlansSection />
      <ServicesSection />
      <PartnersSection />
      <StatsSection />
      <CTASection />
    </Fragment>
  );
};

export default HomePage;
