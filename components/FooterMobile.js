"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import FooterBrandLogo from "./svg/FooterBrandLogo";

const FooterMobile = () => {
  return (
    <FooterContainer $direction="column">
      <LogoContainer>
        <LogoWrapper $direction="column">
          <FooterBrandLogo />
        </LogoWrapper>
      </LogoContainer>
      <RoutesContainer $direction="column">
        <RoutesInfoContainer $justifycontent="space-between">
          <RoutesBlock $direction="column">
            <Routes>Solutions</Routes>
            <Routes>Retail</Routes>
            <Routes>Enterprise</Routes>
            <Routes>MVNO/MNO</Routes>
            <Routes>ISP Cable</Routes>
            <Routes>OEM</Routes>
            <Routes>Consulting</Routes>
          </RoutesBlock>
          <RoutesBlock $direction="column">
            <Routes>Partners</Routes>
            <Routes>About us</Routes>
            <Routes>Connect</Routes>
            <Routes>Privacy Policy</Routes>
          </RoutesBlock>
        </RoutesInfoContainer>
        <HowToReachContainer $direction="column">
          <HowToReachTitle>Linkedin</HowToReachTitle>
          <HowToReachWrapper $direction="column">
            <HowToReachTitle>Come visit us</HowToReachTitle>
            <HowToReachDesc>
              303 Potrero Street # 53 Santa Cruz, CA 95060
            </HowToReachDesc>
          </HowToReachWrapper>
          <HowToReachWrapper $direction="column">
            <HowToReachTitle>Talk with us</HowToReachTitle>
            <div style={{ display: "flex", gap: "20px" }}>
              <HowToReachDesc>info@ensureprotect.com</HowToReachDesc>
              <HowToReachDesc style={{ margin: "auto" }}>
                +1 (844) 927-7689
              </HowToReachDesc>
            </div>
          </HowToReachWrapper>
        </HowToReachContainer>
      </RoutesContainer>
      <CreditsContainer>
        © All rights reserved 2025 Ensure Protect
      </CreditsContainer>
    </FooterContainer>
  );
};

export default FooterMobile;

const FooterContainer = styled(Flex)`
  padding: 24px 16px;
  gap: 40px;
  align-self: stretch;
  background: var(--500, #1a1919);
`;

const LogoContainer = styled(Flex)`
  gap: 87px;
  align-self: stretch;
`;

const LogoWrapper = styled(Flex)`
  gap: 10px;
`;

const RoutesContainer = styled(Flex)`
  gap: 80px;
  align-self: stretch;
`;

const RoutesInfoContainer = styled(Flex)`
  align-self: stretch;
`;

const RoutesBlock = styled(Flex)`
  width: 100%;
  gap: 16px;
`;

const Routes = styled.div`
  color: var(--100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const HowToReachContainer = styled(Flex)`
  gap: 16px;
  align-self: stretch;
`;

const HowToReachWrapper = styled(Flex)`
  gap: 4px;
  align-self: stretch;
`;

const HowToReachTitle = styled.div`
  color: var(--100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const HowToReachDesc = styled.div`
  color: var(--70, rgba(255, 255, 255, 0.7));
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.36px;
`;

const CreditsContainer = styled.div`
  width: 100%;
  color: var(--300, #e5e5e5);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
