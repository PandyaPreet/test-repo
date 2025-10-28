"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const RetailResultSectionMobile = ({ data = {} }) => {
  const {
    title = "",
    description = "",
    pillarsHeader = "",
    pillarsTitle = [],
  } = data || {};

  const cards = Array.isArray(pillarsTitle) ? pillarsTitle.slice(0, 4) : [];

  return (
    <Flex $direction="column" $justifycontent="center" $alignitems="center">
      <ResultHeaderContainer
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
      >
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </ResultHeaderContainer>

      <ResultCardContainer $direction="column" $justifycontent="center">
        <ResultCardTitleContainer
          $direction="column"
          $justifycontent="center"
          $alignitems="center"
        >
          <ResultCardTitle>{pillarsHeader}</ResultCardTitle>
        </ResultCardTitleContainer>

        <ResultCardsWrapper $direction="column">
          {cards.map((card, index) => (
            <ResultCard $direction="column" key={card?._key || index}>
              <CardTitle>{card?.cardTitle}</CardTitle>
            </ResultCard>
          ))}
        </ResultCardsWrapper>
      </ResultCardContainer>
    </Flex>
  );
};

export default RetailResultSectionMobile;

/* ===== styles (unchanged) ===== */

const ResultHeaderContainer = styled(Flex)`
  padding: 24px 16px 92px 16px;
  gap: 16px;
  align-self: stretch;
`;

const TitleText = styled.div`
  color: var(--500, #1a1919);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
`;

const DescriptionText = styled.div`
  color: var(--300, #292828);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const ResultCardContainer = styled(Flex)`
  width: 100%;
  min-height: 572px;
  height: 100%;
  gap: 24px;
  background: var(--500, #2877b0);
`;

const ResultCardTitleContainer = styled(Flex)`
  padding: 24px 0;
  gap: 16px;
  align-self: stretch;
`;

const ResultCardTitle = styled.div`
  color: var(--100, #fff);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
`;

const ResultCardsWrapper = styled(Flex)`
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;

  > :nth-child(1) {
    min-width: 25%;
  }
  > :nth-child(2) {
    min-width: 50%;
  }
  > :nth-child(3) {
    min-width: 75%;
  }
  > :nth-child(4) {
    min-width: 100%;
  }
`;

const ResultCard = styled(Flex)`
  padding: 32px 24px;
  gap: 16px;
  border-top: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  border-right: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  border-bottom: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);
`;

const CardTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
