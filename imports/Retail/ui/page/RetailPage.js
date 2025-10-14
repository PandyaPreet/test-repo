"use client";

import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const RetailHeroSection = dynamic(
  () => import("../components/RetailHeroSection").then((mod) => mod.default),
  { ssr: false }
);
const RetailOverviewSection = dynamic(
  () => import("../components/RetailOverviewSection"),
  { ssr: false }
);
const RetailServicesSection = dynamic(
  () => import("../components/RetailServicesSection"),
  { ssr: false }
);
const RetailResultSection = dynamic(
  () => import("../components/RetailResultSection"),
  { ssr: false }
);
const RetailCTASection = dynamic(
  () => import("../components/RetailCTASection"),
  { ssr: false }
);

const RetailPage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <RetailHeroSection />
      <RetailOverviewSection />
      <RetailServicesSection />
      <RetailResultSection />
      <RetailCTASection />
    </PageWrapper>
  );
};

export default RetailPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
