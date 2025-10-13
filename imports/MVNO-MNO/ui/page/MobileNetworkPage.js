"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const MNHeroSection = dynamic(
  () => import("../components/MNHeroSection").then((mod) => mod.default),
  { ssr: false }
);
const MNCardSection = dynamic(() => import("../components/MNCardSection"), {
  ssr: false,
});
const MNServicesSection = dynamic(
  () => import("../components/MNServicesSection"),
  { ssr: false }
);
const MNOverview = dynamic(() => import("../components/MNOverview"), {
  ssr: false,
});
const MNCTASection = dynamic(() => import("../components/MNCTASection"), {
  ssr: false,
});

const MobileNetworkPage = () => {
  return (
    <PageWrapper>
      <MNHeroSection />
      <MNCardSection />
      <MNServicesSection />
      <MNOverview />
      <MNCTASection />
    </PageWrapper>
  );
};

export default MobileNetworkPage;

const PageWrapper = styled(Flex)`
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
