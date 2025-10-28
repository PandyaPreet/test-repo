"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const EnterpriseOverviewSection = ({ benefitsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    benefitsData && benefitsData.featureImages
      ? benefitsData.featureImages
      : [];

  const featureImages = images.map((img) => ({
    bgImage: getBackgroundImageUrl(img?.asset ? img.asset : null),
  }));

  const descriptions =
    benefitsData && benefitsData.featurePoints
      ? benefitsData.featurePoints
      : [];

  const title = benefitsData?.title || "";

  return (
    <EnterpriseOverviewContainer $fullwidth>
      <EnterpriseOverviewInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <EnterpriseOverviewDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <EnterpriseOverviewDetailsContainer $direction="column" $fullwidth>
            <EnterpriseOverviewTitle>{title}</EnterpriseOverviewTitle>

            <EnterpriseOverviewDescriptionContainer $direction="column">
              {descriptions.map((desc, index) => (
                <React.Fragment key={index}>
                  <DescriptionBlock
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                  >
                    <EnterpriseOverviewDescription>
                      {desc}
                    </EnterpriseOverviewDescription>
                    {index !== descriptions.length - 1 && (
                      <EnterpriseOverviewDescriptionSeparator />
                    )}
                  </DescriptionBlock>
                </React.Fragment>
              ))}
            </EnterpriseOverviewDescriptionContainer>
          </EnterpriseOverviewDetailsContainer>
        </EnterpriseOverviewDetails>

        <PlansImageBanner banners={featureImages} activeIndex={activeIndex} />
      </EnterpriseOverviewInnerWrapper>
    </EnterpriseOverviewContainer>
  );
};

export default EnterpriseOverviewSection;

const EnterpriseOverviewContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const EnterpriseOverviewInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const EnterpriseOverviewDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const EnterpriseOverviewDetailsContainer = styled(Flex)`
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

const EnterpriseOverviewTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
  color: var(--500, #1a1919);
  @media (max-width: 1194px) {
    font-size: 36px;
    letter-spacing: -1.08px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.96px;
  }
`;

const EnterpriseOverviewDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const EnterpriseOverviewDescription = styled.div`
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

const EnterpriseOverviewDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
