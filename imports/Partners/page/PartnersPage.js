"use client";

import React from "react";
import Flex from "@/lib/atoms/Flex";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import PartnersHeroSection from "../ui/components/PartnersHeroSection";
import PartnersBenefitsSection from "../ui/components/PartnersBenefitsSection";
import PartnersCategoriesSection from "../ui/components/PartnersCategoriesSection";
import PartnersSolutionsSection from "../ui/components/PartnersSolutionsSection";
import PartnersCTASection from "../ui/components/PartnersCTASection";

const PartnersPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <PartnersHeroSection />
      <PartnersBenefitsSection />
      <PartnersCategoriesSection />
      <PartnersSolutionsSection />
      <PartnersCTASection />
      <ClientFooter />
    </PageWrapper>
  );
};

export default PartnersPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
