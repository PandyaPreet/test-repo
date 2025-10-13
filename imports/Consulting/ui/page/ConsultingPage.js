"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const ConsultingHeroSection = dynamic(
  () =>
    import("../components/ConsultingHeroSection").then((mod) => mod.default),
  { ssr: false }
);
const ConsultingWorkTogetherSection = dynamic(
  () => import("../components/ConsultingWorkTogetherSection"),
  { ssr: false }
);
const ConsultingCardSection = dynamic(
  () => import("../components/ConsultingCardSection"),
  { ssr: false }
);
const ConsultingPartnerSection = dynamic(
  () => import("../components/ConsultingPartnerSection"),
  { ssr: false }
);
const ConsultingCTASection = dynamic(
  () => import("../components/ConsultingCTASection"),
  { ssr: false }
);

const ConsultingPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <ConsultingHeroSection />
      <ConsultingWorkTogetherSection />
      <ConsultingCardSection />
      <ConsultingPartnerSection />
      <ConsultingCTASection />
    </PageWrapper>
  );
};

export default ConsultingPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
