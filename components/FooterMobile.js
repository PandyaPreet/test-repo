"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import FooterBrandLogo from "./svg/FooterBrandLogo";
import Link from "next/link";

const ROUTES = [
  {
    name: "Solutions",
    href: "/solutions",
    subRoutes: [
      { name: "Retail", href: "/solutions/retail" },
      { name: "Enterprise", href: "/solutions/enterprise" },
      { name: "MVNO/MNO", href: "/solutions/mvno-mno" },
      { name: "ISP Cable", href: "/solutions/isp-msp" },
      { name: "OEM", href: "/solutions/oem" },
      { name: "Consulting", href: "/solutions/consulting" },
    ],
  },
  { name: "Partners", href: "/partners" },
  { name: "About us", href: "/about" },
  { name: "Connect", href: "/connect" },
  { name: "Privacy Policy", href: "/privacy" },
];

const FooterMobile = () => {
  const solutions = ROUTES.find((r) => r.name === "Solutions");
  const otherRoutes = ROUTES.filter((r) => r.name !== "Solutions");

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
            <Link href={solutions.href} aria-label={solutions.name}>
              <Routes>{solutions.name}</Routes>
            </Link>
            {solutions.subRoutes.map((sub) => (
              <Link href={sub.href} key={sub.name} aria-label={sub.name}>
                <Routes>{sub.name}</Routes>
              </Link>
            ))}
          </RoutesBlock>

          <RoutesBlock $direction="column">
            {otherRoutes.map((route) => (
              <Link href={route.href} key={route.name} aria-label={route.name}>
                <Routes>{route.name}</Routes>
              </Link>
            ))}
          </RoutesBlock>
        </RoutesInfoContainer>

        <HowToReachContainer $direction="column">
          <Link
            href="https://www.linkedin.com/company/ensure-protect/"
            target="_blank"
          >
            <HowToReachTitle>LinkedIn</HowToReachTitle>
          </Link>

          <HowToReachWrapper $direction="column">
            <HowToReachTitle>Come visit us</HowToReachTitle>
            <HowToReachDesc>
              <Link
                href="https://maps.app.goo.gl/BixZx5dU6cEpzSTy6"
                target="_blank"
              >
                303 Potrero Street #53, Santa Cruz, CA 95060
              </Link>
            </HowToReachDesc>
          </HowToReachWrapper>

          <HowToReachWrapper $direction="column">
            <HowToReachTitle>Talk with us</HowToReachTitle>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <HowToReachDesc>
                <Link href="mailto:info@ensureprotect.com">
                  info@ensureprotect.com
                </Link>
              </HowToReachDesc>
              <HowToReachDesc>
                <Link href="tel:+18449277689">+1 (844) 927-7689</Link>
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
  transition: color 0.2s ease;
  &:hover {
    color: var(--accent, #ccc);
  }
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
  color: rgba(255, 255, 255, 0.7);
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
