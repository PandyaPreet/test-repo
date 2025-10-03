"use client";

import React from "react";
import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import styled from "styled-components";

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
              <AboutUsFeatureTitleLight>Your</AboutUsFeatureTitleLight>
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

        <AboutUsFeatureBannerContainer $alignitems="center">
          {BANNER_IMAGES.map((banner, index) => (
            <AboutUsFeatureBannerBackground bg={banner.bgcolor} key={index}>
              <AboutUsFeatureBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </AboutUsFeatureBannerImageWrapper>
            </AboutUsFeatureBannerBackground>
          ))}
        </AboutUsFeatureBannerContainer>
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
`;

const AboutUsFeatureDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const AboutUsFeatureDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const AboutUsFeatureTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const AboutUsFeatureDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const AboutUsFeatureBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const AboutUsFeatureBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const AboutUsFeatureBannerBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${AboutUsFeatureBannerImageWrapper} {
      display: block;
    }
  }
`;
