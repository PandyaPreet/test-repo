"use client";

import React, { useState } from "react";
import Flex from "@/lib/atoms/Flex";
import styled from "styled-components";
import PlansImageBanner from "@/components/PlansImageBanner";

function AboutUsFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const BANNER_IMAGES = [
    { bgImage: "/assets/About/about-feature-1.webp" },
    { bgImage: "/assets/About/about-feature-2.webp" },
    { bgImage: "/assets/About/about-feature-3.webp" },
    { bgImage: "/assets/About/about-feature-4.webp" },
  ];

  const DESCRIPTIONS = [
    "We don't cross-sell other insurance to your customers, You own the relationship.",
    "We deliver full-service protection: plan setup, underwriting, program development, compliance, tech, claims, and logistics.",
    "We're not a carrier—we build plans that serve your business, not ours, with a variety of risk structures to fit your business.",
    "We help you turn aftermarket service into a strategic growth driver.",
  ];

  return (
    <AboutUsFeatureContainer $fullwidth>
      <AboutUsFeatureInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <AboutUsFeatureDetails $direction="column" $justifycontent="flex-end">
          <AboutUsFeatureDetailsContainer $direction="column" $fullwidth>
            <AboutUsFeatureTitle>
              <AboutUsFeatureTitleLight>Your </AboutUsFeatureTitleLight>
              <AboutUsFeatureTitleDark>Brand.</AboutUsFeatureTitleDark>
              <br />
              <AboutUsFeatureTitleDark>Our Backbone.</AboutUsFeatureTitleDark>
            </AboutUsFeatureTitle>

            <AboutUsFeatureDescriptionContainer $direction="column">
              {DESCRIPTIONS.map((desc, index) => (
                <DescriptionBlock
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                >
                  <AboutUsFeatureDescription>{desc}</AboutUsFeatureDescription>
                  {index !== DESCRIPTIONS.length - 1 && (
                    <AboutUsFeatureDescriptionSeparator />
                  )}
                </DescriptionBlock>
              ))}
            </AboutUsFeatureDescriptionContainer>
          </AboutUsFeatureDetailsContainer>
        </AboutUsFeatureDetails>

        <PlansImageBanner banners={BANNER_IMAGES} activeIndex={activeIndex} />
      </AboutUsFeatureInnerWrapper>
    </AboutUsFeatureContainer>
  );
}

export default AboutUsFeatureSection;

const AboutUsFeatureContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const AboutUsFeatureInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const AboutUsFeatureDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const AboutUsFeatureDetailsContainer = styled(Flex)`
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

const AboutUsFeatureTitle = styled.h2`
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

const AboutUsFeatureTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const AboutUsFeatureTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const AboutUsFeatureDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const AboutUsFeatureDescription = styled.h2`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  padding-top: 12px;
  padding-bottom: 12px;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
  }
`;

const AboutUsFeatureDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
