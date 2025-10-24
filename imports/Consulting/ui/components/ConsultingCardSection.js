"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const RETAILER_SERVICES = [
  {
    icon: "/assets/Consulting/consulting-card-icon-1.svg",
    text: "Warranty and Customer Experience consultants",
  },
  {
    icon: "/assets/Consulting/consulting-card-icon-2.svg",
    text: "Technical sales solution providers",
  },
  {
    icon: "/assets/Consulting/consulting-card-icon-3.svg",
    text: "Embedded service integrators",
  },
  {
    icon: "/assets/Consulting/consulting-card-icon-4.svg",
    text: "Nationwide deployment and field service providers",
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
            <ConsultingCardTitleDark>This Is For </ConsultingCardTitleDark>
          </Flex>
        </div>
      </ConsultingCardTitleContainer>
      <ConsultingCardGridContainer $direction="column">
        <ConsultingCardGridWrapper $alignitems="center">
          {RETAILER_SERVICES.map((card, index) => (
            <ConsultingCard $direction="column" key={index}>
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
  @media (max-width: 1194px) {
    gap: 32px;
  }
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const ConsultingCardTitleContainer = styled(Flex)`
  padding: 180px 16px 40px 16px;
  gap: 299px;
  align-self: stretch;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    padding: 0px 16px;
    gap: 0px;
  }
`;

const ConsultingCardTitleLight = styled.div`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
`;

const ConsultingCardTitleDark = styled.div`
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

const ConsultingCardGridContainer = styled(Flex)`
  gap: -16px;
  align-self: stretch;
`;

const ConsultingCardGridWrapper = styled.div`
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

const ConsultingCard = styled(Flex)`
  width: 100%;
  height: 340px;
  padding: 16px 16px 32px 16px;
  gap: 10px;
  border-bottom: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  &:nth-child(odd) {
    background: var(--3, rgba(26, 25, 25, 0.03));
  }

  &:nth-child(even) {
    background: var(--5, rgba(26, 25, 25, 0.05));
  }
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

const ConsultingCardDescription = styled.p`
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
