"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const RETAILER_SERVICES = [
  {
    icon: "/assets/MVNO-MNO/mn-icon-1.svg",
    text: "API-based embedded plan activation",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/MVNO-MNO/mn-icon-2.svg",
    text: "Protection from electro-mechanical failure and damage",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/MVNO-MNO/mn-icon-3.svg",
    text: "Optional maintenance programs and service handling",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/MVNO-MNO/mn-icon-4.svg",
    text: "Portal and app integration for claims or service scheduling",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/MVNO-MNO/mn-icon-5.svg",
    text: "Transparent coverage tied to device ID or serial number",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
];

const MNServicesSection = () => {
  return (
    <ServicesContainer $direction="column">
      <TitleCardContainer>
        <div></div>
        <div>
          <Flex style={{ gap: "10px" }}>
            <TitleLight>What </TitleLight>
          </Flex>
          <Flex style={{ gap: "10px" }}>
            <TitleDark>We </TitleDark>
            <TitleDark>Provide </TitleDark>
          </Flex>
        </div>
      </TitleCardContainer>
      <ServicesCardContainer $direction="column">
        <ServicesCardWrapper $alignitems="center">
          {RETAILER_SERVICES.map((card) => (
            <ServicesCard $direction="column" bgcolor={card.bgcolor}>
              <Image height={72} width={72} src={card.icon} alt="some icon" />
              <ServiceCardDescription>{card.text}</ServiceCardDescription>
            </ServicesCard>
          ))}
        </ServicesCardWrapper>
      </ServicesCardContainer>
    </ServicesContainer>
  );
};

export default MNServicesSection;

const ServicesContainer = styled(Flex)`
  align-self: stretch;
  background: var(--100, #fff);
`;

const TitleCardContainer = styled(Flex)`
  padding: 180px 16px 40px 16px;
  gap: 299px;
  align-self: stretch;
  background: var(--100, #fff);
`;

const TitleLight = styled.div`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 48px */
  letter-spacing: -1.44px;
`;

const TitleDark = styled.div`
  color: var(--500, #1a1919);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
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
`;

const ServiceCardDescription = styled.div`
  color: var(--500, #1a1919);
  max-width: 227px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
