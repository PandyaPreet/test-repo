"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const EnterpriseHeroSection = dynamic(
  () =>
    import("../components/EnterpriseHeroSection").then((mod) => mod.default),
  { ssr: false }
);
const EnterpriseOverviewSection = dynamic(
  () => import("../components/EnterpriseOverviewSection"),
  { ssr: false }
);
const EnterpriseDetailSection = dynamic(
  () => import("../components/EnterpriseDetailSection"),
  { ssr: false }
);
const EnterpriseCardSection = dynamic(
  () => import("../components/EnterpriseCardSection"),
  { ssr: false }
);
const EnterpriseCTASection = dynamic(
  () => import("../components/EnterpriseCTASection"),
  { ssr: false }
);

const EnterprisePage = () => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <EnterpriseHeroSection />
      <EnterpriseOverviewSection />
      <EnterpriseDetailSection />
      <EnterpriseCardSection />
      <EnterpriseCTASection />
    </PageWrapper>
  );
};

export default EnterprisePage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
