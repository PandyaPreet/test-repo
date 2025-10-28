"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import MNHeroSection from "../components/MNHeroSection";
import MNCardSection from "../components/MNCardSection";
import MNServicesSection from "../components/MNServicesSection";
import MNOverview from "../components/MNOverview";
import MNCTASection from "../components/MNCTASection";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";

const MobileNetworkPage = ({ data }) => {
  return (
    <PageWrapper>
      <Navbar />
      <MNHeroSection heroSectionData={data?.heroSection} />
      <MNCardSection cardSectionData={data?.cardSection} />
      <MNServicesSection
        whatWeProvideSectionData={data?.whatWeProvideSection}
      />
      <MNOverview featureSectionData={data?.featureSection} />
      <Wrapper>
        <MNCTASection ctaSectionData={data?.ctaSection} />
        <ClientFooter />
      </Wrapper>
    </PageWrapper>
  );
};

export default MobileNetworkPage;

const PageWrapper = styled(Flex)`
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;
