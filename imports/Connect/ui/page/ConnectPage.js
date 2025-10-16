"use client";

import React, { Fragment } from "react";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import ConnectHeroSection from "../components/ConnectHeroSection";
import ConnectClientForm from "../components/ConnectClientForm";
import ConnectCTASection from "../components/ConnectCTASection";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

function ConnectPage() {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <ConnectHeroSection />
      <ConnectClientForm />
      <ConnectCTASection />
      <ClientFooter />
    </PageWrapper>
  );
}

export default ConnectPage;

const PageWrapper = styled(Flex)`
  @media (max-width: 1194px) {
    gap: 64px;
  }
`;
