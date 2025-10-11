"use client";

import React, { Fragment } from "react";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import AboutUsFeatureSection from "../components/AboutUsFeatureSection";
import AboutUsCardsSection from "../components/AboutUsCardsSection";
import AboutUsStatsSection from "../components/AboutUsStatsSection";
import AboutUsCTASection from "../components/AboutUsCTASection";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

function AboutUsPage() {
  return (
    <PageWrapper>
      <AboutUsHeroSection />
      <AboutUsFeatureSection />
      <AboutUsCardsSection />
      <AboutUsStatsSection />
      <AboutUsCTASection />
    </PageWrapper>
  );
}

export default AboutUsPage;

const PageWrapper = styled(Flex)`
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
