"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const RETAILER_SERVICES = [
  {
    icon: "/assets/ISP-MSP/isp-icon-1.svg",
    text: "Embedded or add-on service coverage with subscription activation",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/ISP-MSP/isp-icon-2.svg",
    text: "Protection for routers, cameras, and home tech",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/ISP-MSP/isp-icon-3.svg",
    text: "Monthly-billed or pre-paid plans",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
  {
    icon: "/assets/ISP-MSP/isp-icon-4.svg",
    text: "App-based claims, replacements, and service scheduling",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05))",
  },
  {
    icon: "/assets/ISP-MSP/isp-icon-5.svg",
    text: "Analytics dashboard for plan conversion and performance",
    bgcolor: "var(--3, rgba(26, 25, 25, 0.03))",
  },
];

const ISPFeaturesSection = () => {
  return (
    <ISPFeaturesContainer $direction="column">
      <ISPFeaturesTitleContainer>
        <div></div>
        <div>
          <Flex style={{ gap: "10px" }}>
            <ISPFeaturesTitleLight>Plan</ISPFeaturesTitleLight>
          </Flex>
          <Flex style={{ gap: "10px" }}>
            <ISPFeaturesTitleDark>Features:</ISPFeaturesTitleDark>
          </Flex>
        </div>
      </ISPFeaturesTitleContainer>
      <ISPFeaturesGridContainer $direction="column">
        <ISPFeaturesGridWrapper $alignitems="center">
          {RETAILER_SERVICES.map((card, index) => (
            <ISPFeaturesCard
              $direction="column"
              bgcolor={card.bgcolor}
              key={index}
            >
              <Image
                height={72}
                width={72}
                src={card.icon}
                alt="retailer service icon"
              />
              <ISPFeaturesDescription>{card.text}</ISPFeaturesDescription>
            </ISPFeaturesCard>
          ))}
        </ISPFeaturesGridWrapper>
      </ISPFeaturesGridContainer>
    </ISPFeaturesContainer>
  );
};

export default ISPFeaturesSection;

const ISPFeaturesContainer = styled(Flex)`
  align-self: stretch;
  background: var(--100, #fff);
`;

const ISPFeaturesTitleContainer = styled(Flex)`
  padding: 180px 16px 40px 16px;
  gap: 299px;
  align-self: stretch;
  background: var(--100, #fff);
`;

const ISPFeaturesTitleLight = styled.div`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const ISPFeaturesTitleDark = styled.div`
  color: var(--500, #1a1919);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const ISPFeaturesGridContainer = styled(Flex)`
  gap: -16px;
  align-self: stretch;
`;

const ISPFeaturesGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
`;

const ISPFeaturesCard = styled(Flex)`
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

const ISPFeaturesDescription = styled.div`
  color: var(--500, #1a1919);
  max-width: 227px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
