"use client";

import React from "react";

import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import SolutionsHeroSection from "../components/SolutionsHeroSection";
import SolutionsPlansSection from "../components/SolutionsPlansSection";
import SolutionsCardsSection from "../components/SolutionsCardsSection";
import SolutionsFeaturesSection from "../components/SolutionsFeaturesSection";
import SolutionsCTASection from "../components/SolutionsCTASection";

const SolutionsPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <SolutionsHeroSection />
      <SolutionsPlansSection />
      <SolutionsCardsSection />
      <SolutionsFeaturesSection />
      <SolutionsCTASection />
      <ClientFooter />
    </PageWrapper>
  );
};

export default SolutionsPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
