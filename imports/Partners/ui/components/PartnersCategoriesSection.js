"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function PartnersCategoriesSection() {
  const CATEGORIES_CARDS = [
    {
      title: "Retailers & DTC Brands",
      description:
        "Boost attachment rate and simplify fulfillment; drive revenue and profit streams while lowering admin costs",
    },
    {
      title: "OEMs & Hardware Brands",
      description:
        "Protect physical products post-sale driving customer retention",
    },
    {
      title: "ISPs & Smart Device Platforms",
      description: "Provide coverage at activation and grow monthly ARPU",
    },
    {
      title: "Enterprise IT & Procurement Teams",
      description:
        "Deliver SLAs and device support to lower organizational costs",
    },
  ];
  return (
    <PartnersCardsSectionContainer
      $justifycontent="center"
      $alignitems="center"
    >
      <PartnersCardsSectionBG />
      <PartnersCardsWrapper>
        {CATEGORIES_CARDS.map((card, index) => (
          <PartnersCards $direction="column" key={index}>
            <PartnersCardsInnerWrapper
              $direction="column"
              $justifycontent="space-between"
            >
              <PartnersCardsTitle>{card.title}</PartnersCardsTitle>
              <PartnersCardsDescription>
                {card.description}
              </PartnersCardsDescription>
            </PartnersCardsInnerWrapper>
          </PartnersCards>
        ))}
      </PartnersCardsWrapper>
    </PartnersCardsSectionContainer>
  );
}

export default PartnersCategoriesSection;

const PartnersCardsSectionContainer = styled(Flex)`
  width: 100%;
  height: 640px;
  flex-shrink: 0;
  background: var(--100, #fff);
  position: relative;
`;

const PartnersCardsSectionBG = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("/assets/grid-line-horizontal.svg"),
    url("/assets/grid-line-verticle.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
`;

const PartnersCardsWrapper = styled(Flex)`
  position: absolute;
  gap: 16px;
  width: 100%;
  padding: 0px 16px;
  background: var(--100, #fff);
`;

const PartnersCardsInnerWrapper = styled(Flex)`
  height: 275px;
  flex-shrink: 0;
  align-self: stretch;
`;

const PartnersCardsTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
  width: 100%;
  max-width: 220px;
`;

const PartnersCardsDescription = styled.div`
  color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  transition: color 0.3s ease;
`;

const PartnersCards = styled(Flex)`
  width: 100%;
  height: 340px;
  padding: 32px;
  gap: 24px;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);

  &:hover {
    background: var(--500, #2877b0);
    border-color: transparent;

    ${PartnersCardsTitle} {
      color: var(--100, #fff);
      font-weight: 700;
    }

    ${PartnersCardsDescription} {
      color: var(--100, #fff);
    }
  }
`;
