"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import EnterpriseHeroSection from "../components/EnterpriseHeroSection";
import EnterpriseOverviewSection from "../components/EnterpriseOverviewSection";
import EnterpriseDetailSection from "../components/EnterpriseDetailSection";
import EnterpriseCardSection from "../components/EnterpriseCardSection";
import EnterpriseCTASection from "../components/EnterpriseCTASection";

const EnterprisePage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <EnterpriseHeroSection />
      <EnterpriseOverviewSection />
      <EnterpriseDetailSection />
      <EnterpriseCardSection />
      <Wrapper>
        <EnterpriseCTASection />
        <ClientFooter />
      </Wrapper>
    </PageWrapper>
  );
};

export default EnterprisePage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;
