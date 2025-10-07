"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const SolutionsFeaturesSection = () => {
  const BANNER_IMAGES = [
    {
      bgcolor: "var(--3, rgba(85, 86, 89, 0.03))",
      bgImage: "/assets/plan-banner-1.jpg",
    },
    {
      bgcolor: "var(--8, rgba(85, 86, 89, 0.08))",
      bgImage: "/assets/plan-banner-2.jpg",
    },
    {
      bgcolor: "var(--12, rgba(85, 86, 89, 0.12))",
      bgImage: "/assets/plan-banner-3.jpg",
    },
    {
      bgcolor: "var(--15, rgba(85, 86, 89, 0.15))",
      bgImage: "/assets/plan-banner-4.jpg",
    },
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
              <SolutionsFeaturesDescription>
                Add plans to product pages, checkouts, CRMs, or customer portals
              </SolutionsFeaturesDescription>
              <SolutionsFeaturesDescriptionSeparator />
              <SolutionsFeaturesDescription>
                Real-time registration, claim submission, and status tracking
              </SolutionsFeaturesDescription>
              <SolutionsFeaturesDescriptionSeparator />
              <SolutionsFeaturesDescription>
                Dashboards to monitor plan adoption, revenue, and claims
              </SolutionsFeaturesDescription>
              <SolutionsFeaturesDescriptionSeparator />
              <SolutionsFeaturesDescription>
                We make it easy to launch and scale
              </SolutionsFeaturesDescription>
            </SolutionsFeaturesDescriptionContainer>
          </SolutionsFeaturesDetailsContainer>
        </SolutionsFeaturesDetails>

        <SolutionsFeaturesBannerContainer $alignitems="center">
          {BANNER_IMAGES.map((banner, index) => (
            <SolutionsFeaturesBannerBackground bg={banner.bgcolor} key={index}>
              <SolutionsFeaturesBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </SolutionsFeaturesBannerImageWrapper>
            </SolutionsFeaturesBannerBackground>
          ))}
        </SolutionsFeaturesBannerContainer>
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
`;

const SolutionsFeaturesDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const SolutionsFeaturesDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const SolutionsFeaturesTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const SolutionsFeaturesTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const SolutionsFeaturesTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const SolutionsFeaturesDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const SolutionsFeaturesDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const SolutionsFeaturesDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const SolutionsFeaturesBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const SolutionsFeaturesBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const SolutionsFeaturesBannerBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${SolutionsFeaturesBannerImageWrapper} {
      display: block;
    }
  }
`;
