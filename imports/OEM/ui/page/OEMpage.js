"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import OEMHeroSection from "../components/OEMHeroSection";
import OEMCardSection from "../components/OEMCardSection";
import OEMBenefitsRightSection from "../components/OEMBenefitsRightSection";
import OEMBenefitsLeftSection from "../components/OEMBenefitsLeftSection";
import OEMCtaSection from "../components/OEMCtaSection";

function OEMpage() {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <OEMHeroSection />
      <OEMCardSection />
      <OEMBenefitsRightSection />
      <OEMBenefitsLeftSection />
      <OEMCtaSection />
      <ClientFooter />
    </PageWrapper>
  );
}

export default OEMpage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
