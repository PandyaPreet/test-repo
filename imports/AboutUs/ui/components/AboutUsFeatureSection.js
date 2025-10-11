"use client";

import React from "react";
import Flex from "@/lib/atoms/Flex";
import styled from "styled-components";
import PlansImageBanner from "@/components/PlansImageBanner";

function AboutUsFeatureSection() {
  const BANNER_IMAGES = [
    {
      bgcolor: "var(--3, rgba(85, 86, 89, 0.03))",
      bgImage: "/assets/About/about-feature-1.png",
    },
    {
      bgcolor: "var(--8, rgba(85, 86, 89, 0.08))",
      bgImage: "/assets/About/about-feature-2.png",
    },
    {
      bgcolor: "var(--12, rgba(85, 86, 89, 0.12))",
      bgImage: "/assets/About/about-feature-3.png",
    },
    {
      bgcolor: "var(--15, rgba(85, 86, 89, 0.15))",
      bgImage: "/assets/About/about-feature-4.png",
    },
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
              <AboutUsFeatureDescription>
                We don't cross-sell other insurance to your customers. You own
                the relationship
              </AboutUsFeatureDescription>
              <AboutUsFeatureDescriptionSeparator />
              <AboutUsFeatureDescription>
                We deliver full-service protection: plan setup,
                underwriting,program development, compliance, tech, claims, and
                logistics
              </AboutUsFeatureDescription>
              <AboutUsFeatureDescriptionSeparator />
              <AboutUsFeatureDescription>
                We're not a carrier—we build plans that serve your business,not
                ours, with a variety of risk structures to fit your business
              </AboutUsFeatureDescription>
              <AboutUsFeatureDescriptionSeparator />
              <AboutUsFeatureDescription>
                We help you turn aftermarket service into a strategic growth
                driver
              </AboutUsFeatureDescription>
            </AboutUsFeatureDescriptionContainer>
          </AboutUsFeatureDetailsContainer>
        </AboutUsFeatureDetails>
        <PlansImageBanner banners={BANNER_IMAGES} />
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
  gap: 12px;
  align-self: stretch;
`;

const AboutUsFeatureDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
    letter-spacing: none;
  }
`;

const AboutUsFeatureDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
