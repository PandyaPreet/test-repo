"use client";

import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const OEMHeroSection = dynamic(() => import("../components/OEMHeroSection"), {
  ssr: false,
});
const OEMCardSection = dynamic(() => import("../components/OEMCardSection"), {
  ssr: false,
});
const OEMBenefitsRightSection = dynamic(
  () => import("../components/OEMBenefitsRightSection"),
  { ssr: false }
);
const OEMBenefitsLeftSection = dynamic(
  () => import("../components/OEMBenefitsLeftSection"),
  { ssr: false }
);
const OEMCtaSection = dynamic(() => import("../components/OEMCtaSection"), {
  ssr: false,
});

function OEMpage() {
  return (
    <PageWrapper $fullwidth $direction="column">
      <OEMHeroSection />
      <OEMCardSection />
      <OEMBenefitsRightSection />
      <OEMBenefitsLeftSection />
      <OEMCtaSection />
    </PageWrapper>
  );
}

export default OEMpage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
