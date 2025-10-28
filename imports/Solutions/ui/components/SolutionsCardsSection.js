"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const SolutionsCardsSection = ({ solutionTypesSectionData }) => {
  const cards = solutionTypesSectionData?.cards || [];

  return (
    <CardsSectionContainer $justifycontent="center" $alignitems="center">
      <CardsSectionBG />
      <CardsWrapper>
        {cards.map((card, index) => (
          <Cards $direction="column" key={card?._key || index}>
            <CardsInnerWrapper
              $direction="column"
              $justifycontent="space-between"
            >
              <CardsTitle>{card?.title}</CardsTitle>
              <CardsDescription>{card?.description}</CardsDescription>
            </CardsInnerWrapper>
          </Cards>
        ))}
      </CardsWrapper>
    </CardsSectionContainer>
  );
};

export default SolutionsCardsSection;

/* -------------------- styled components -------------------- */

const CardsSectionContainer = styled(Flex)`
  width: 100%;
  height: 640px;
  flex-shrink: 0;
  background: var(--100, #fff);
  position: relative;

  @media (max-width: 1194px) {
    height: auto;
  }
`;

const CardsSectionBG = styled.div`
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

const CardsWrapper = styled(Flex)`
  position: absolute;
  gap: 16px;
  width: 100%;
  padding: 0px 16px;
  background: var(--100, #fff);

  @media (max-width: 1194px) {
    width: 100%;
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

  @media (max-width: 768px) {
    background: #fff;
    padding: 24px 16px;
  }
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
  line-height: 100%;
  letter-spacing: -0.96px;
  width: 100%;
  max-width: 220px;

  @media (max-width: 1194px) {
    font-size: 24px;
  }
`;

const CardsDescription = styled.div`
  color: var(--100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;

  @media (max-width: 980px) {
    color: var(--500, #1a1919);
  }
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
      font-weight: 700;
    }

    @media (max-width: 980px) {
      min-width: 267px;
      border: 1px dashed rgba(26, 25, 25, 0.4);
      background: #fff;

      &:hover {
        background: #fff;
        border-color: rgba(26, 25, 25, 0.4);

        ${CardsTitle} {
          color: var(--500, #1a1919);
          font-weight: 400;
        }

        ${CardsDescription} {
          color: var(--500, #1a1919);
        }
      }
    }
  }

  @media (max-width: 980px) {
    min-width: 267px;
  }
`;
