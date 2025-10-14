"use client";

import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const AboutUsHeroSection = dynamic(() =>
  import("../components/AboutUsHeroSection")
);
const AboutUsFeatureSection = dynamic(() =>
  import("../components/AboutUsFeatureSection")
);
const AboutUsCardsSection = dynamic(() =>
  import("../components/AboutUsCardsSection")
);
const AboutUsStatsSection = dynamic(() =>
  import("../components/AboutUsStatsSection")
);
const AboutUsCTASection = dynamic(() =>
  import("../components/AboutUsCTASection")
);

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
