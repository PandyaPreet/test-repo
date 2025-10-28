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

const SolutionsPage = ({ data }) => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <SolutionsHeroSection heroSectionData={data?.heroSection} />
      <SolutionsPlansSection solutionsSectionData={data?.solutionsSection} />
      <SolutionsCardsSection
        solutionTypesSectionData={data?.solutionTypesSection}
      />
      <SolutionsFeaturesSection featureSectionData={data?.featureSection} />
      <Wrapper>
        <SolutionsCTASection ctaSectionData={data?.ctaSection} />
        <ClientFooter />
      </Wrapper>
    </PageWrapper>
  );
};

export default SolutionsPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;
