"use client";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import FooterBrandLogo from "./svg/FooterBrandLogo";
const ROUTES = ["Solutions", "Partners", "About us", "Contact"];
const SUB_ROUTES = [
  "Retail",
  "Enterprise",
  "IoT",
  "ISP Cable",
  "OEM",
  "Consulting",
];
const FooterDesktop = () => {
  return (
    <Container $fullwidth>
      <LeftSection $direction="column">
        <RoutesContainer $alignitems="flex-end">
          {ROUTES.map((route, index) => (
            <RoutesName key={index}>{route}</RoutesName>
          ))}
        </RoutesContainer>
        <DashedSeparator />
        <SubroutesContainer $direction="column">
          {SUB_ROUTES.map((subroute, index) => (
            <RoutesName key={index}>{subroute}</RoutesName>
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
      <RightSection $alignitems="center">
        <RightSectionInnerContainer bg="var(--400, #212020)">
          <ContactInfoBlock $direction="column">
            <ContactInfoTitle>Come visit us</ContactInfoTitle>
            <ContactInfoDetails>
              303 Potrero Street # 53 <br /> Santa Cruz, CA 95060
            </ContactInfoDetails>
          </ContactInfoBlock>
        </RightSectionInnerContainer>
        <RightSectionInnerContainer bg="var(--300, #292828)">
          <ContactInfoBlock $direction="column">
            <ContactInfoTitle>Talk with us</ContactInfoTitle>
            <ContactInfoDetails>
              info@ensureprotect.com <br /> +1 (844) 927-7689
            </ContactInfoDetails>
          </ContactInfoBlock>
        </RightSectionInnerContainer>
        <RightSectionInnerContainer bg="var(--200, #393737)">
          <ContactInfoBlock $direction="column">
            <ContactInfoTitle>LinkedIn</ContactInfoTitle>
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
  width: 648px;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--500, #1a1919);
`;
const RightSection = styled(Flex)`
  flex: 1;
  align-self: stretch;
  background-color: beige;
`;
const RoutesContainer = styled(Flex)`
  height: 138px;
  padding: 0 16px;
  gap: 64px;
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
