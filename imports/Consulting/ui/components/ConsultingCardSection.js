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

const ConsultingCardSection = () => {
  return (
    <ConsultingCardContainer $direction="column">
      <ConsultingCardTitleContainer>
        <div></div>
        <div>
          <Flex style={{ gap: "10px" }}>
            <ConsultingCardTitleLight>Who </ConsultingCardTitleLight>
          </Flex>
          <Flex style={{ gap: "10px" }}>
            <ConsultingCardTitleDark>This </ConsultingCardTitleDark>
            <ConsultingCardTitleDark>Is </ConsultingCardTitleDark>
            <ConsultingCardTitleDark>For</ConsultingCardTitleDark>
          </Flex>
        </div>
      </ConsultingCardTitleContainer>
      <ConsultingCardGridContainer $direction="column">
        <ConsultingCardGridWrapper $alignitems="center">
          {RETAILER_SERVICES.map((card, index) => (
            <ConsultingCard
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
              <ConsultingCardDescription>{card.text}</ConsultingCardDescription>
            </ConsultingCard>
          ))}
        </ConsultingCardGridWrapper>
      </ConsultingCardGridContainer>
    </ConsultingCardContainer>
  );
};

export default ConsultingCardSection;

const ConsultingCardContainer = styled(Flex)`
  align-self: stretch;
  background: var(--100, #fff);
`;

const ConsultingCardTitleContainer = styled(Flex)`
  padding: 180px 16px 40px 16px;
  gap: 299px;
  align-self: stretch;
  background: var(--100, #fff);
`;

const ConsultingCardTitleLight = styled.div`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const ConsultingCardTitleDark = styled.div`
  color: var(--500, #1a1919);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const ConsultingCardGridContainer = styled(Flex)`
  gap: -16px;
  align-self: stretch;
`;

const ConsultingCardGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
`;

const ConsultingCard = styled(Flex)`
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

const ConsultingCardDescription = styled.div`
  color: var(--500, #1a1919);
  max-width: 227px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
