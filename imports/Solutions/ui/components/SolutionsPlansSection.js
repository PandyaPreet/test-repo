"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const SolutionsPlansSection = ({ solutionsSectionData }) => {
  const cards = solutionsSectionData?.cards || [];

  return (
    <SolutionsPlansWrapper
      $direction="column"
      className="solutions-plans-container"
    >
      {cards.map((card, idx) => {
        const iconUrl = getBackgroundImageUrl(card?.icon);
        const page = `${idx + 1}/${cards.length}`;

        return (
          <SolutionsPlansContainer
            key={card?._key || idx}
            $direction="column"
            $justifycontent="center"
          >
            <SolutionsPlansInnerWrapper>
              <SolutionsPlansPagination></SolutionsPlansPagination>

              <SolutionsPlansDetailsContainer
                $justifycontent="space-between"
                $alignitems="center"
              >
                <SolutionsPlansDetailsContent $direction="column">
                  <SolutionsPlansTitle>{card?.title}</SolutionsPlansTitle>
                  <SolutionsPlansDescription>
                    {card?.description}
                  </SolutionsPlansDescription>
                </SolutionsPlansDetailsContent>

                {iconUrl ? (
                  <SolutionsServicesImage
                    src={iconUrl}
                    height={120}
                    width={120}
                    alt={`${card?.title || "Plan"} icon`}
                    unoptimized
                  />
                ) : null}
              </SolutionsPlansDetailsContainer>
            </SolutionsPlansInnerWrapper>
          </SolutionsPlansContainer>
        );
      })}
    </SolutionsPlansWrapper>
  );
};

export default SolutionsPlansSection;

/* -------------------- styled components -------------------- */

const SolutionsPlansWrapper = styled(Flex)`
  gap: 0px;
  width: 100%;

  & > :nth-child(odd) {
    background-color: var(--100, #fff);
  }

  & > :nth-child(even) {
    background-color: var(--200, #f2f2f2);
  }
`;

const SolutionsPlansContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  padding: 48px 16px;
  gap: 10px;
  align-self: stretch;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));

  @media (max-width: 980px) {
    padding: 24px 16px;
    flex-direction: column;
    gap: 40px;
    min-height: unset;
  }
`;

const SolutionsPlansInnerWrapper = styled(Flex)`
  padding-right: 115px;
  gap: 299px;
  align-self: stretch;

  @media (max-width: 1194px) {
    gap: 220px;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
    padding-right: 0px;
  }
`;

const SolutionsPlansDetailsContainer = styled(Flex)`
  flex: 1 0 0;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 20px;
  }
`;

const SolutionsPlansDetailsContent = styled(Flex)`
  padding-right: 160px;
  gap: 64px;
  flex: 1 0 0;

  @media (max-width: 980px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 8px;
    padding-right: 0px;
  }
`;

const SolutionsPlansTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;

  @media (max-width: 1194px) {
    font-size: 24px;
    max-width: 400px;
  }
`;

const SolutionsPlansDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 552px;
  }
`;

const SolutionsPlansPagination = styled.div`
  color: var(--500, #1a1919);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media (max-width: 980px) {
    display: none;
  }
`;

const SolutionsServicesImage = styled(Image)`
  @media (max-width: 980px) {
    width: 48px;
    height: 48px;
  }
`;
