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

  @media (max-width: 1194px) {
    height: auto;
  }
`;

const PartnersCardsSectionBG = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("/assets/grid-line-horizontal.svg"),
    url("/assets/grid-line-verticle.svg");
  background-repeat: repeat;
  background-size: 200px 200px;

  @media (max-width: 1194px) {
    background-image: none;
  }
`;

const PartnersCardsWrapper = styled(Flex)`
  position: absolute;
  gap: 16px;
  width: 100%;
  padding: 0px 16px;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    position: relative;
    padding: 40px 16px;
    background: linear-gradient(
        0deg,
        var(--5, rgba(26, 25, 25, 0.05)) 0%,
        var(--5, rgba(26, 25, 25, 0.05)) 100%
      ),
      var(--100, #fff);
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
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
  @media (max-width: 1194px) {
    font-size: 24px;
  }
`;

const PartnersCardsDescription = styled.div`
  color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  transition: color 0.3s ease;
  @media (max-width: 980px) {
    color: var(--500, #1a1919);
  }
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
    @media (max-width: 980px) {
      min-width: 267px;
      border: 1px dashed rgba(26, 25, 25, 0.4);
      background: #fff;

      &:hover {
        background: #fff;
        border-color: rgba(26, 25, 25, 0.4);

        ${PartnersCardsTitle} {
          color: var(--500, #1a1919);
          font-weight: 400;
        }

        ${PartnersCardsDescription} {
          color: var(--500, #1a1919);
        }
      }
    }
  }
  @media (max-width: 980px) {
    min-width: 267px;
  }
`;
