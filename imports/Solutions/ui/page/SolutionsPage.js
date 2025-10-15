"use client";

import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const SolutionsHeroSection = dynamic(
  () => import("../components/SolutionsHeroSection"),
  { ssr: false }
);
const SolutionsPlansSection = dynamic(
  () => import("../components/SolutionsPlansSection"),
  { ssr: false }
);
const SolutionsCardsSection = dynamic(
  () => import("../components/SolutionsCardsSection"),
  { ssr: false }
);
const SolutionsFeaturesSection = dynamic(
  () => import("../components/SolutionsFeaturesSection"),
  { ssr: false }
);
const SolutionsCTASection = dynamic(
  () => import("../components/SolutionsCTASection"),
  { ssr: false }
);

const SolutionsPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <SolutionsHeroSection />
      <SolutionsPlansSection />
      <SolutionsCardsSection />
      <SolutionsFeaturesSection />
      <SolutionsCTASection />
    </PageWrapper>
  );
};

export default SolutionsPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
