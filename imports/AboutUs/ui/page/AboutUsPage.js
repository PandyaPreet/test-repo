"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import AboutUsFeatureSection from "../components/AboutUsFeatureSection";
import AboutUsCardsSection from "../components/AboutUsCardsSection";
import AboutUsStatsSection from "../components/AboutUsStatsSection";
import AboutUsCTASection from "../components/AboutUsCTASection";

function AboutUsPage({ data }) {
  return (
    <PageWrapper>
      <Navbar />
      <AboutUsHeroSection heroData={data?.heroSection} />
      <AboutUsFeatureSection featureData={data?.featureSection} />
      <AboutUsCardsSection cardData={data?.cardSection} />
      <AboutUsStatsSection statsData={data?.statsSection} />
      <Wrapper>
        <AboutUsCTASection ctaData={data?.ctaSection} />
        <ClientFooter />
      </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
`;
