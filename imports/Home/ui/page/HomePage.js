"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const PlansSection = dynamic(() => import("../components/PlansSection"), {
  ssr: false,
});
const ServicesSection = dynamic(() => import("../components/ServicesSection"), {
  ssr: false,
});
const PartnersSection = dynamic(() => import("../components/PartnersSection"), {
  ssr: false,
});
const StatsSection = dynamic(() => import("../components/StatsSection"), {
  ssr: false,
});
const CTASection = dynamic(() => import("../components/CTASection"), {
  ssr: false,
});

const HomePage = () => {
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
