"use client";

import React from "react";
import dynamic from "next/dynamic";
import Flex from "@/lib/atoms/Flex";
import styled from "styled-components";

const PartnersHeroSection = dynamic(
  () => import("../ui/components/PartnersHeroSection"),
  { ssr: false }
);
const PartnersBenefitsSection = dynamic(
  () => import("../ui/components/PartnersBenefitsSection"),
  { ssr: false }
);
const PartnersCategoriesSection = dynamic(
  () => import("../ui/components/PartnersCategoriesSection"),
  { ssr: false }
);
const PartnersSolutionsSection = dynamic(
  () => import("../ui/components/PartnersSolutionsSection"),
  { ssr: false }
);
const PartnersCTASection = dynamic(
  () => import("../ui/components/PartnersCTASection"),
  { ssr: false }
);

const PartnersPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
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
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
