"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const RetailResultSection = () => {
  return (
    <ResultContainer $justifycontent="center" $alignitems="center">
      <ResultHeaderContainer
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
        $fullwidth
      >
        <ResultContent>
          <div>
            <ResultTitle>
              <Light>You</Light> <Dark>Own the</Dark>
            </ResultTitle>
            <ResultTitle>
              <Dark>Experience.</Dark> <Light>We</Light>
            </ResultTitle>
            <ResultTitle>
              <Dark>Power It.</Dark>
            </ResultTitle>
          </div>

          <ResultDescription>
            We stay behind the curtain—so your customers experience your brand,
            your tone, and your service standards throughout every part of the
            coverage lifecycle.
          </ResultDescription>
        </ResultContent>
      </ResultHeaderContainer>

      <ResultAside
        $direction="column"
        $justifycontent="sapce-between"
        $fullwidth
      >
        <AsideTop
          $direction="column"
          $alignitems="center"
          $justifycontent="center"
        >
          <AsideTitle>The Result?</AsideTitle>
        </AsideTop>

        <AsideBottom
          $justifycontent="flex-start"
          $alignitems="flex-end"
          $fullwidth
        >
          <FeatureCard role="listitem" style={{ height: 360 }}>
            <CardText>Higher margins</CardText>
          </FeatureCard>
          <FeatureCard role="listitem" style={{ height: 296 }}>
            <CardText>Fewer returns</CardText>
          </FeatureCard>
          <FeatureCard role="listitem" style={{ height: 227 }}>
            <CardText>Repeat customers</CardText>
          </FeatureCard>
          <FeatureCard role="listitem" style={{ height: 273 }}>
            <CardText>A support model that scales with your growth</CardText>
          </FeatureCard>
        </AsideBottom>
      </ResultAside>
    </ResultContainer>
  );
};

export default RetailResultSection;

const ResultContainer = styled(Flex)`
  width: 100%;
  height: 100vh;
  align-self: stretch;
  background: var(--100, #fff);

  gap: 0;
`;

const ResultHeaderContainer = styled(Flex)`
  gap: 24px;
  padding: 0 24px;
`;

const ResultContent = styled.div`
  max-width: 403px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
`;

const ResultTitle = styled.div`
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -1.44px;
  text-align: center;
  font-weight: 400;
  font-family: Arial, system-ui, -apple-system, Segoe UI, Roboto,
    "Helvetica Neue", Helvetica, Arial, "Noto Sans", "Liberation Sans",
    sans-serif;
`;

const Light = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-weight: 400;
`;

const Dark = styled.span`
  color: var(--500, #1a1919);
  font-weight: 400;
`;

const ResultDescription = styled.div`
  color: var(--90, rgba(26, 25, 25, 0.9));
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ResultAside = styled(Flex)`
  min-height: 100%;
  background: var(--5, rgba(26, 25, 25, 0.05));
  /* padding: 24px 24px 32px 24px; */
  gap: 16px;
`;

const AsideTop = styled(Flex)`
  width: 100%;
  margin: auto;
`;

const AsideTitle = styled.h2`
  margin: 0;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #1a1919;
  text-align: center;
  font-weight: 400;
`;

const AsideBottom = styled(Flex)`
  gap: 8px;
  flex-wrap: nowrap;
`;

const FeatureCard = styled.div`
  width: 100%;
  background: #fff;
  border: 1px dashed rgba(26, 25, 25, 0.5);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

const CardText = styled.div`
  width: 100%;
  letter-spacing: -0.03em;
  line-height: 100%;
  color: rgba(26, 25, 25, 0.9);
  font-size: 20px;
`;
