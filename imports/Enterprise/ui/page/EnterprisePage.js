"use client";
import React, { Fragment } from "react";
import { EnterpriseHeroSection } from "../components/EnterpriseHeroSection";
import EnterpriseOverviewSection from "../components/EnterpriseOverviewSection";
import EnterpriseDetailSection from "../components/EnterpriseDetailSection";
import EnterpriseCardSection from "../components/EnterpriseCardSection";
import EnterpriseCTASection from "../components/EnterpriseCTASection";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const EnterprisePage = () => {
  return (
    <PageWrapper>
      <EnterpriseHeroSection />
      <EnterpriseOverviewSection />
      <EnterpriseDetailSection />
      <EnterpriseCardSection />
      <EnterpriseCTASection />
    </PageWrapper>
  );
};

export default EnterprisePage;

const PageWrapper = styled(Flex)`
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
