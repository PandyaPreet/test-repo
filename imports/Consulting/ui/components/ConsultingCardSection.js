"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const ConsultingCardSection = ({ planFeaturesSectionData }) => {
  const title = planFeaturesSectionData?.title || "";
  const cards = planFeaturesSectionData?.cards || [];

  return (
    <ConsultingCardContainer $direction="column">
      <ConsultingCardTitleContainer>
        <div />
        <div>
          <Flex style={{ gap: "10px" }}>
            <ConsultingCardTitleDark>{title}</ConsultingCardTitleDark>
          </Flex>
        </div>
      </ConsultingCardTitleContainer>

      <ConsultingCardGridContainer $direction="column">
        <ConsultingCardGridWrapper $alignitems="center">
          {cards.map((card, index) => {
            const iconUrl =
              getBackgroundImageUrl(card?.icon) ||
              "/assets/Consulting/consulting-card-icon-1.svg";
            return (
              <ConsultingCard $direction="column" key={card?._key || index}>
                <Image
                  height={72}
                  width={72}
                  src={iconUrl}
                  alt="retailer service icon"
                  unoptimized
                />
                <ConsultingCardDescription>
                  {card?.description}
                </ConsultingCardDescription>
              </ConsultingCard>
            );
          })}
        </ConsultingCardGridWrapper>
      </ConsultingCardGridContainer>
    </ConsultingCardContainer>
  );
};

export default ConsultingCardSection;

/* -------------------- styled components -------------------- */

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

const ConsultingCardTitleDark = styled.div`
  color: var(--500, #1a1919);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  white-space: pre-wrap;

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
  justify-content: flex-end;

  &:nth-child(odd) {
    background: var(--3, rgba(26, 25, 25, 0.03));
  }
  &:nth-child(even) {
    background: var(--5, rgba(26, 25, 25, 0.05));
  }

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
