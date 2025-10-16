"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import RetailHeroSection from "../components/RetailHeroSection";
import RetailOverviewSection from "../components/RetailOverviewSection";
import RetailServicesSection from "../components/RetailServicesSection";
import RetailResultWrapper from "../components/RetailResultWrapper";
import RetailCTASection from "../components/RetailCTASection";

const RetailPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <RetailHeroSection />
      <RetailOverviewSection />
      <RetailServicesSection />
      <Wrapper>
        <RetailResultWrapper />
        <RetailCTASection />
      </Wrapper>
      <ClientFooter />
    </PageWrapper>
  );
};

export default RetailPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
