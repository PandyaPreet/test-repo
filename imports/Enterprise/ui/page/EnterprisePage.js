"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const EnterpriseHeroSection = dynamic(
  () =>
    import("../components/EnterpriseHeroSection").then(
      (mod) => mod.EnterpriseHeroSection
    ),
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
    <PageWrapper>
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
  flex-direction: column;
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
