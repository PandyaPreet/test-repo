"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import ConsultingHeroSection from "../components/ConsultingHeroSection";
import ConsultingWorkTogetherSection from "../components/ConsultingWorkTogetherSection";
import ConsultingCardSection from "../components/ConsultingCardSection";
import ConsultingPartnerSection from "../components/ConsultingPartnerSection";
import ConsultingCTASection from "../components/ConsultingCTASection";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";

const ConsultingPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <ConsultingHeroSection />
      <ConsultingWorkTogetherSection />
      <ConsultingCardSection />
      <ConsultingPartnerSection />
      <ConsultingCTASection />
      <ClientFooter />
    </PageWrapper>
  );
};

export default ConsultingPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
