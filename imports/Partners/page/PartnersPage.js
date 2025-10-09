"use client";

import React, { Fragment } from "react";
import PartnersHeroSection from "../ui/components/PartnersHeroSection";
import PartnersBenefitsSection from "../ui/components/PartnersBenefitsSection";
import PartnersCategoriesSection from "../ui/components/PartnersCategoriesSection";
import PartnersSolutionsSection from "../ui/components/PartnersSolutionsSection";
import PartnersCTASection from "../ui/components/PartnersCTASection";
import Flex from "@/lib/atoms/Flex";
import styled from "styled-components";

const PartnersPage = () => {
  return (
    <PageWrapper>
      <PartnersHeroSection />
      <PartnersBenefitsSection />
      <PartnersCategoriesSection />
      <PartnersSolutionsSection />
      <PartnersCTASection />
    </PageWrapper>
  );
};

export default PartnersPage;

const PageWrapper = styled(Flex)`
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
