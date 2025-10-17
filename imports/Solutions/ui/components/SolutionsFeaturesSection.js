"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";

const SolutionsFeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const BANNER_IMAGES = [
    {
      bgImage: "/assets/Solutions/solutions-banner-1.jpg",
    },
    {
      bgImage: "/assets/Solutions/solutions-banner-2.jpg",
    },
    {
      bgImage: "/assets/Solutions/solutions-banner-3.jpg",
    },
    {
      bgImage: "/assets/Solutions/solutions-banner-4.jpg",
    },
  ];

  const DESCRIPTIONS = [
    "Add plans to product pages, checkouts, CRMs, or customer portals",
    "Real-time registration, claim submission, and status tracking",
    "Dashboards to monitor plan adoption, revenue, and claims",
    "We make it easy to launch and scale",
  ];

  return (
    <SolutionsFeaturesContainer $fullwidth>
      <SolutionsFeaturesInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <SolutionsFeaturesDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <SolutionsFeaturesDetailsContainer $direction="column" $fullwidth>
            <SolutionsFeaturesTitle>
              <SolutionsFeaturesTitleLight>
                Powered By{" "}
              </SolutionsFeaturesTitleLight>
              <SolutionsFeaturesTitleDark>
                Embedded Service Plan APIs{" "}
              </SolutionsFeaturesTitleDark>
              <SolutionsFeaturesTitleLight>and </SolutionsFeaturesTitleLight>
              <br />
              <SolutionsFeaturesTitleDark>
                Automation
              </SolutionsFeaturesTitleDark>
            </SolutionsFeaturesTitle>

            <SolutionsFeaturesDescriptionContainer $direction="column">
              {DESCRIPTIONS.map((desc, index) => (
                <React.Fragment key={index}>
                  <DescriptionBlock
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                  >
                    <SolutionsFeaturesDescription>
                      {desc}
                    </SolutionsFeaturesDescription>
                    {index !== DESCRIPTIONS.length - 1 && (
                      <SolutionsFeaturesDescriptionSeparator />
                    )}
                  </DescriptionBlock>
                </React.Fragment>
              ))}
            </SolutionsFeaturesDescriptionContainer>
          </SolutionsFeaturesDetailsContainer>
        </SolutionsFeaturesDetails>

        <PlansImageBanner banners={BANNER_IMAGES} activeIndex={activeIndex} />
      </SolutionsFeaturesInnerWrapper>
    </SolutionsFeaturesContainer>
  );
};

export default SolutionsFeaturesSection;

const SolutionsFeaturesContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const SolutionsFeaturesInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
    padding: 0px;
  }
`;

const SolutionsFeaturesDetails = styled(Flex)`
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

const SolutionsFeaturesDetailsContainer = styled(Flex)`
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

const SolutionsFeaturesTitle = styled.p`
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

const SolutionsFeaturesTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const SolutionsFeaturesTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const SolutionsFeaturesDescriptionContainer = styled(Flex)`
  /* gap: 12px; */
  align-self: stretch;
`;

const SolutionsFeaturesDescription = styled.div`
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

const SolutionsFeaturesDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
