"use client";
import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

function OEMBenefitsLeftSection({ leftFeatureData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    leftFeatureData && leftFeatureData.featureImages
      ? leftFeatureData.featureImages
      : [];
  const featureImages = images.map((img, i) => ({
    bgImage: getBackgroundImageUrl(img && img.asset ? img.asset : null),
  }));

  return (
    <OEMBenefitsLeftSectionContainer $fullwidth>
      <OEMBenefitsLeftSectionInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PlansImageBanner banners={featureImages} activeIndex={activeIndex} />

        <OEMBenefitsLeftSectionDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <OEMBenefitsLeftSectionDetailsContainer
            $direction="column"
            $fullwidth
          >
            <OEMBenefitsLeftSectionHeader $direction="column">
              <OEMBenefitsLeftSectionTitle>
                {leftFeatureData && leftFeatureData.title
                  ? leftFeatureData.title
                  : ""}
              </OEMBenefitsLeftSectionTitle>
            </OEMBenefitsLeftSectionHeader>

            <OEMBenefitsLeftSectionDescriptionContainer $direction="column">
              {leftFeatureData &&
                leftFeatureData.featurePoints &&
                leftFeatureData.featurePoints.map((desc, index) => (
                  <React.Fragment key={index}>
                    <DescriptionBlock
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(0)}
                    >
                      <OEMBenefitsLeftSectionDescription>
                        {desc}{" "}
                      </OEMBenefitsLeftSectionDescription>
                      {leftFeatureData.featurePoints &&
                        index !== leftFeatureData.featurePoints.length - 1 && (
                          <OEMBenefitsLeftSectionDescriptionSeparator />
                        )}
                    </DescriptionBlock>
                  </React.Fragment>
                ))}
            </OEMBenefitsLeftSectionDescriptionContainer>
          </OEMBenefitsLeftSectionDetailsContainer>
        </OEMBenefitsLeftSectionDetails>
      </OEMBenefitsLeftSectionInnerWrapper>
    </OEMBenefitsLeftSectionContainer>
  );
}

export default OEMBenefitsLeftSection;

const OEMBenefitsLeftSectionContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const OEMBenefitsLeftSectionInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

const OEMBenefitsLeftSectionDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const OEMBenefitsLeftSectionDetailsContainer = styled(Flex)`
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

const OEMBenefitsLeftSectionHeader = styled(Flex)`
  gap: 16px;
`;

const OEMBenefitsLeftSectionTitle = styled.h2`
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

const OEMBenefitsLeftSectionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const OEMBenefitsLeftSectionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const OEMBenefitsLeftSectionDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const OEMBenefitsLeftSectionDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  padding-top: 12px;
  padding-bottom: 12px;
  ${({ $uppercase }) => $uppercase && `text-transform: uppercase;`}
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
  }
`;

const OEMBenefitsLeftSectionDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
