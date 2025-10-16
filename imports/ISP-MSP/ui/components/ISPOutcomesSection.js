"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";

const ISPOutcomesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const BANNER_IMAGES = [
    {
      bgImage: "/assets/ISP-MSP/outcomes-banner-1.webp",
    },
    {
      bgImage: "/assets/ISP-MSP/outcomes-banner-2.webp",
    },
    {
      bgImage: "/assets/ISP-MSP/outcomes-banner-3.webp",
    },
    {
      bgImage: "/assets/ISP-MSP/outcomes-banner-4.webp",
    },
  ];

  const DESCRIPTIONS = [
    "Lower churn from better post-install support",
    "Increased monthly revenue via service add-ons",
    "Fewer escalations and ticket volumes for device failures",
    "Branded customer experience across all service interactions",
  ];

  return (
    <ISPOutcomesContainer $fullwidth>
      <ISPOutcomesInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <ISPOutcomesDetails $direction="column" $justifycontent="flex-end">
          <ISPOutcomesDetailsContainer $direction="column" $fullwidth>
            <ISPOutcomesTitle>
              <ISPOutcomesTitleDark>Outcomes </ISPOutcomesTitleDark>
              <br />
              <ISPOutcomesTitleLight>that </ISPOutcomesTitleLight>
              <ISPOutcomesTitleDark>Matter:</ISPOutcomesTitleDark>
            </ISPOutcomesTitle>

            <ISPOutcomesDescriptionContainer $direction="column">
              {DESCRIPTIONS.map((desc, index) => (
                <React.Fragment key={index}>
                  <DescriptionBlock
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                  >
                    <ISPOutcomesDescription>{desc}</ISPOutcomesDescription>
                    {index !== DESCRIPTIONS.length - 1 && (
                      <ISPOutcomesDescriptionSeparator />
                    )}
                  </DescriptionBlock>
                </React.Fragment>
              ))}
            </ISPOutcomesDescriptionContainer>
          </ISPOutcomesDetailsContainer>
        </ISPOutcomesDetails>
        <PlansImageBanner banners={BANNER_IMAGES} activeIndex={activeIndex} />
      </ISPOutcomesInnerWrapper>
    </ISPOutcomesContainer>
  );
};

export default ISPOutcomesSection;

const ISPOutcomesContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ISPOutcomesInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ISPOutcomesDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const ISPOutcomesDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
  @media (max-width: 980px) {
    max-width: none;
    width: 100%;
    gap: 24px;
  }
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    gap: 20px;
  }
`;

const ISPOutcomesTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
  @media (max-width: 1194px) {
    font-size: 36px;
    letter-spacing: -1.08px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.96px;
  }
`;

const ISPOutcomesTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ISPOutcomesTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ISPOutcomesDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const ISPOutcomesDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-bottom: 12px;
  padding-top: 12px;
  letter-spacing: -0.42px;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
    letter-spacing: none;
  }
`;

const ISPOutcomesDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
