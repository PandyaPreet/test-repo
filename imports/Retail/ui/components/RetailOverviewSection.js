"use client";

import React, { Fragment } from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const CARDS_DATA = [
  {
    id: "retail-reality",
    variant: "light",
    eyebrow: "The",
    title: "Retail Reality",
    paragraphs: [
      "Margins are tight. Loyalty is hard-won. And service is the battleground where most retail brands win or lose long-term trust.",
      "Whether you're selling electronics, power tools & appliances, or connected home goods, your customers expect reliable coverage—and a seamless experience when things go wrong.",
      "We help you deliver both.",
    ],
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05));",
  },
  {
    id: "why-ensure-protect",
    variant: "brand",
    eyebrow: "Why",
    title: "Ensure Protect?",
    paragraphs: [
      "Ensure Protect helps retail and ecommerce brands add high-performing extended service plans and protection programs to their point-of-sale experience.",
      "Our programs are either fully white-labeled, or co-branded, designed for multi-channel selling, and built to maximize attachment rate and lifetime value—without adding operational overhead.",
    ],
    // bgcolor: "var(--500, #2877B0);",
    bgcolor: "var(--5, rgba(26, 25, 25, 0.05));",
  },
];

const RetailOverviewSection = () => {
  return (
    <RetailOverviewSectionContainer $direction="column">
      <RetailOverviewCardsContainer
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
      >
        {CARDS_DATA.map(
          ({ id, variant, eyebrow, title, paragraphs, bgcolor }) => (
            <RetailOverviewCardWrapper
              key={id}
              $direction="column"
              $justifycontent="center"
              $alignitems="center"
              $bgcolor={bgcolor}
              $variant={variant}
            >
              <RetailOverviewCardContent $direction="column">
                <Flex $direction="column">
                  <RetailOverviewTitleEyebrow>
                    {eyebrow}
                  </RetailOverviewTitleEyebrow>
                  <RetailOverviewTitle>{title}</RetailOverviewTitle>
                </Flex>

                <RetailOverviewDescriptionContainer $direction="column">
                  {paragraphs.map((text, idx) => (
                    <React.Fragment key={`${id}-p-${idx}`}>
                      <RetailOverviewDescriptionText>
                        {text}
                      </RetailOverviewDescriptionText>
                      {idx !== paragraphs.length - 1 && (
                        <RetailOverviewDescriptionSeparator />
                      )}
                    </React.Fragment>
                  ))}
                </RetailOverviewDescriptionContainer>
              </RetailOverviewCardContent>
            </RetailOverviewCardWrapper>
          )
        )}
      </RetailOverviewCardsContainer>
    </RetailOverviewSectionContainer>
  );
};

export default RetailOverviewSection;

const RetailOverviewSectionContainer = styled(Flex)`
  align-self: stretch;
`;

const RetailOverviewCardsContainer = styled(Flex)`
  height: auto;
  padding: 80px 0;
  gap: 10px;
  align-self: stretch;
  background: var(--100, #fff);
`;
const RetailOverviewCardWrapper = styled(Flex)`
  min-height: 480px;
  width: 650px;
  padding: 0 80px;
  flex: 1 0 0;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: ${({ $bgcolor }) => $bgcolor};
`;

const RetailOverviewCardContent = styled(Flex)`
  gap: 40px;
  align-self: stretch;
`;

const RetailOverviewTitleEyebrow = styled.h2`
  margin: 0;
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const RetailOverviewTitle = styled.h3`
  margin: 0;
  color: var(--500, #1a1919);
  font-family: Arial, sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const RetailOverviewDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const RetailOverviewDescriptionText = styled.p`
  margin: 0;
  color: var(--500, #1a1919);
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const RetailOverviewDescriptionSeparator = styled.div`
  height: 1px;
  align-self: stretch;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
