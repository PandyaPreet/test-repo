"use client";
import React, { Fragment } from "react";
import { SolutionsHeroSection } from "../components/SolutionsHeroSection";
import SolutionsPlansSection from "../components/SolutionsPlansSection";
import SolutionsCardsSection from "../components/SolutionsCardsSection";
import SolutionsFeaturesSection from "../components/SolutionsFeaturesSection";
import SolutionsCTASection from "../components/SolutionsCTASection";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const SolutionsPage = () => {
  return (
    <PageWrapper>
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
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
