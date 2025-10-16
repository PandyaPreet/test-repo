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

const ISPCablePage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <ISPHomeSection />
      <ISPCardSection />
      <ISPOverviewSection />
      <ISPFeaturesSection />
      <ISPOutcomesSection />
      <ISPCTASection />
      <ClientFooter />
    </PageWrapper>
  );
};

export default ISPCablePage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
