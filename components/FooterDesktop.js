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
  // { name: "Privacy Policy", href: "/privacy-policy" },
];

const FooterDesktop = () => {
  const solutions = ROUTES.find((r) => r.name === "Solutions");

  return (
    <Container $fullwidth>
      <LeftSection $direction="column" $fullwidth>
        <RoutesContainer $alignitems="flex-end">
          {ROUTES.map((route) => (
            <Link href={route.href} key={route.name} aria-label={route.name}>
              <RoutesName>{route.name}</RoutesName>
            </Link>
          ))}
        </RoutesContainer>

        <DashedSeparator />

        <SubroutesContainer $direction="column">
          {solutions?.subRoutes?.map((sub) => (
            <Link href={sub.href} key={sub.name} aria-label={sub.name}>
              <RoutesName>{sub.name}</RoutesName>
            </Link>
          ))}
        </SubroutesContainer>

        <LogoContainer $alignitems="flex-end">
          <Flex
            $fullwidth
            $alignitems="flex-end"
            $justifycontent="space-between"
          >
            <FooterBrandLogo />
            <CreditsText>© All rights reserved 2025 Ensure Protect</CreditsText>
          </Flex>
        </LogoContainer>
      </LeftSection>

      <RightSection $alignitems="center" $fullwidth>
        <RightSectionInnerContainer bg="var(--400, #212020)">
          <ContactInfoBlock $direction="column">
            <ContactInfoTitle>Come visit us</ContactInfoTitle>
            <ContactInfoDetails>
              <Link
                href="https://maps.app.goo.gl/BixZx5dU6cEpzSTy6"
                target="_blank"
              >
                303 Potrero Street #53 <br /> Santa Cruz, CA 95060
              </Link>
            </ContactInfoDetails>
          </ContactInfoBlock>
        </RightSectionInnerContainer>

        <RightSectionInnerContainer bg="var(--300, #292828)">
          <ContactInfoBlock $direction="column">
            <ContactInfoTitle>Talk with us</ContactInfoTitle>
            <ContactInfoDetails>
              <Link href="mailto:info@ensureprotect.com">
                info@ensureprotect.com
              </Link>
              <br />
              <Link href="tel:+18449277689">+1 (844) 927-7689</Link>
            </ContactInfoDetails>
          </ContactInfoBlock>
        </RightSectionInnerContainer>

        <RightSectionInnerContainer bg="var(--200, #393737)">
          <ContactInfoBlock $direction="column">
            <Link
              href={"https://www.linkedin.com/company/ensure-protect/"}
              target="_blank"
            >
              <ContactInfoTitle>LinkedIn</ContactInfoTitle>
            </Link>
            <ContactInfoDetails></ContactInfoDetails>
          </ContactInfoBlock>
        </RightSectionInnerContainer>
      </RightSection>
    </Container>
  );
};

export default FooterDesktop;

const Container = styled(Flex)`
  height: 780px;
  flex-shrink: 0;
`;
const LeftSection = styled(Flex)`
  gap: 16px;
  align-self: stretch;
  background: var(--500, #1a1919);
  @media (max-width: 1194px) {
    width: 70%;
  }
`;
const RightSection = styled(Flex)`
  align-self: stretch;
  background-color: beige;
  @media (max-width: 1194px) {
    flex-direction: column;
    width: 30%;
  }
`;
const RoutesContainer = styled(Flex)`
  height: 138px;
  padding: 0 16px;
  gap: 48px;
  align-self: stretch;
`;
const DashedSeparator = styled.span`
  width: 100%;
  height: 1px;
  border-top: 1px dashed var(--600, #8c8c8c);
`;
const SubroutesContainer = styled(Flex)`
  padding: 0 16px;
  gap: 16px;
  align-self: stretch;
`;
const LogoContainer = styled(Flex)`
  height: 100%;
  padding: 15px 11px;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;
const RoutesName = styled.div`
  color: var(--100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
const CreditsText = styled.div`
  color: var(--300, #e5e5e5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.36px;
`;
const RightSectionInnerContainer = styled(Flex)`
  padding: 16px;
  gap: 32px;
  flex: 1;
  align-self: stretch;
  background: ${(props) => props.bg};
  &:hover {
    background: var(--500, #1e1e1e);
  }
`;
const ContactInfoBlock = styled(Flex)`
  padding-top: 101px;
  gap: 32px;
`;
const ContactInfoTitle = styled.div`
  color: var(--100, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ContactInfoDetails = styled.div`
  color: var(--100, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.42px;
`;
