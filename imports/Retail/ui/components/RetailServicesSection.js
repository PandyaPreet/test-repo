"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const RETAILER_SERVICES = [
  {
    icon: "/assets/retailer-services-icon-1.svg",
    text: "White-labeled or co-branded protection plans at checkout (online or in-store)",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/retailer-services-icon-2.svg",
    text: "Repair, replacement, and maintenance coverage for mechanical and accidental damage",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/retailer-services-icon-3.svg",
    text: "Program designs tailored by product category and price point",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/retailer-services-icon-4.svg",
    text: "Embedded ecommerce modules and point-of-sale system integrations",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/retailer-services-icon-5.svg",
    text: "Branded claim portals and 24/7 customer support",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/retailer-services-icon-6.svg",
    text: "Sales training tools, pitch prompts, and in-store enablement",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/retailer-services-icon-7.svg",
    text: "Real-time dashboards to track attach rate, conversions, and NPS",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
];

const RetailServicesSection = () => {
  return (
    <ServicesContainer $direction="column">
      <TitleCardContainer>
        <div></div>
        <h2>
          <Flex style={{ gap: "10px" }}>
            <TitleLight>What </TitleLight>
            <TitleDark>We </TitleDark>
          </Flex>
          <Flex style={{ gap: "10px" }}>
            <TitleDark>Provide </TitleDark>
            <TitleLight>for </TitleLight>
            <TitleDark>Retailers</TitleDark>
          </Flex>
        </h2>
      </TitleCardContainer>
      <ServicesCardContainer $direction="column">
        <ServicesCardWrapper $alignitems="center">
          {RETAILER_SERVICES.map((card, index) => (
            <ServicesCard
              $direction="column"
              bgcolor={card.bgcolor}
              key={index}
            >
              <Image height={72} width={72} src={card.icon} alt="some icon" />
              <ServiceCardDescription>{card.text}</ServiceCardDescription>
            </ServicesCard>
          ))}
        </ServicesCardWrapper>
      </ServicesCardContainer>
    </ServicesContainer>
  );
};

export default RetailServicesSection;

const ServicesContainer = styled(Flex)`
  align-self: stretch;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    gap: 32px;
  }
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const TitleCardContainer = styled(Flex)`
  padding: 180px 16px 40px 16px;
  gap: 299px;
  align-self: stretch;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    padding: 0px 16px;
    gap: 0px;
  }
`;

const TitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 48px */
  letter-spacing: -1.44px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
`;

const TitleDark = styled.span`
  color: var(--500, #1a1919);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
`;

const ServicesCardContainer = styled(Flex)`
  gap: -16px;
  align-self: stretch;
`;

const ServicesCardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  @media (max-width: 1194px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ServicesCard = styled(Flex)`
  width: 100%;
  height: 340px;
  padding: 16px 16px 32px 16px;
  gap: 10px;
  border-bottom: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: ${({ bgcolor }) => bgcolor};
  justify-content: flex-end;

  img {
    display: none;
  }

  &:hover {
    background: transparent;
    img {
      display: block;
    }
    justify-content: space-between;
  }
  @media (max-width: 1194px) {
    justify-content: space-between;
    height: auto;
    gap: 32px;
    padding: 32px 16px;
    background: #fff;
    border-bottom: none;
    border-right: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
    img {
      display: block;
    }
  }
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  }
`;

const ServiceCardDescription = styled.div`
  color: var(--500, #1a1919);
  max-width: 227px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (max-width: 1194px) {
    max-width: unset;
  }
`;
