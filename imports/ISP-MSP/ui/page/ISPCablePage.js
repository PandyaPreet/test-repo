"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import ISPHomeSection from "../components/ISPHomeSection";
import ISPCardSection from "../components/ISPCardSection";
import ISPOverviewSection from "../components/ISPOverviewSection";
import ISPFeaturesSection from "../components/ISPFeaturesSection";
import ISPOutcomesSection from "../components/ISPOutcomesSection";
import ISPCTASection from "../components/ISPCTASection";

const ISPCablePage = ({ data }) => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <ISPHomeSection heroSectionData={data?.heroSection} />
      <ISPCardSection cardSectionData={data?.cardSection} />
      <ISPOverviewSection featureSectiondData={data?.featureSection} />
      <ISPFeaturesSection planFeaturesSectionData={data?.planFeaturesSection} />
      <ISPOutcomesSection featureSection2Data={data?.featureSection2} />
      <Wrapper>
        <ISPCTASection ctaSectionData={data?.ctaSection} />
        <ClientFooter />
      </Wrapper>
    </PageWrapper>
  );
};

export default ISPCablePage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;
