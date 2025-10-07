"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const SOLUTION_CARDS = [
  {
    title: "Protection Plans & Extended Warranty",
    subtitle: "Parts & Labor",
  },
  {
    title: "Repair & Replacement",
    subtitle: "Mechanical or Accidental",
  },
  {
    title: "Maintenance & Service Plans",
    subtitle: "Tune-ups, Diagnostics",
  },
  {
    title: "Technical Support",
    subtitle: "Onboarding, Setup, Troubleshooting",
  },
];

const SolutionsCardsSection = () => {
  return (
    <CardsSectionContainer $justifycontent="center" $alignitems="center">
      <CardsSectionBG></CardsSectionBG>
      <CardsWrapper>
        {SOLUTION_CARDS.map((card, index) => (
          <Cards $direction="column" key={index}>
            <CardsInnerWrapper
              $direction="column"
              $justifycontent="space-between"
            >
              <CardsTitle>{card.title}</CardsTitle>
              <CardsDescription>{card.subtitle}</CardsDescription>
            </CardsInnerWrapper>
          </Cards>
        ))}
      </CardsWrapper>
    </CardsSectionContainer>
  );
};

export default SolutionsCardsSection;

const CardsSectionContainer = styled(Flex)`
  width: 100%;
  height: 640px;
  flex-shrink: 0;
  background: var(--100, #fff);
  position: relative;
`;

const CardsSectionBG = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("/assets/grid-line-horizontal.svg"),
    url("/assets/grid-line-verticle.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
`;

const CardsWrapper = styled(Flex)`
  position: absolute;
  gap: 16px;
  width: 100%;
  padding: 0px 16px;
  background: var(--100, #fff);
`;

const CardsInnerWrapper = styled(Flex)`
  height: 275px;
  flex-shrink: 0;
  align-self: stretch;
`;

const CardsTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 32px */
  letter-spacing: -0.96px;
  width: 100%;
  max-width: 220px;
`;

const CardsDescription = styled.div`
  color: var(--100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.42px;
`;

const Cards = styled(Flex)`
  width: 100%;
  height: 340px;
  padding: 32px;
  gap: 24px;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);

  &:hover {
    background: var(--500, #2877b0);
    border-color: transparent;
    ${CardsTitle} {
      color: var(--100, #fff);
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 32px */
      letter-spacing: -0.96px;
    }
  }
`;
