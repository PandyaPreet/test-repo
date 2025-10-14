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

const HomePage = ({ data }) => {
  return (
    <Fragment>
      <HeroSection heroData={data?.heroSection} />
      <PlansSection plansData={data?.featureSection} />
      <ServicesSection serviceData={data?.solutionsSection} />
      <PartnersSection partnersData={data?.whatWeDoSection} />
      <StatsSection statsData={data?.statsSection} />
      <CTASection ctaData={data?.ctaSection} />
    </Fragment>
  );
};

export default HomePage;
