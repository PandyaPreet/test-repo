"use client";
import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

function PartnersSolutionsSection({ plansData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    plansData && plansData.featureImages ? plansData.featureImages : [];
  const featureImages = images.map((img, i) => ({
    bgImage: getBackgroundImageUrl(img && img.asset ? img.asset : null),
  }));

  return (
    <PartnersSolutionContainer $fullwidth>
      <PartnersSolutionInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PartnersSolutionDetails $direction="column" $justifycontent="flex-end">
          <PartnersSolutionDetailsContainer $direction="column" $fullwidth>
            <PartnersSolutionHeader $direction="column">
              <PartnersSolutionTitle>
                {plansData && plansData.title ? plansData.title : ""}
              </PartnersSolutionTitle>
            </PartnersSolutionHeader>

            <PartnersSolutionDescriptionContainer $direction="column">
              {plansData &&
                plansData.featurePoints &&
                plansData.featurePoints.map((desc, index) => (
                  <React.Fragment key={index}>
                    <DescriptionBlock
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(0)}
                    >
                      <PartnersSolutionDescription>
                        {desc}{" "}
                      </PartnersSolutionDescription>
                      {plansData.featurePoints &&
                        index !== plansData.featurePoints.length - 1 && (
                          <PartnersSolutionDescriptionSeparator />
                        )}
                    </DescriptionBlock>
                  </React.Fragment>
                ))}
            </PartnersSolutionDescriptionContainer>
          </PartnersSolutionDetailsContainer>
        </PartnersSolutionDetails>

        <PlansImageBanner banners={featureImages} activeIndex={activeIndex} />
      </PartnersSolutionInnerWrapper>
    </PartnersSolutionContainer>
  );
}

export default PartnersSolutionsSection;

const PartnersSolutionContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const PartnersSolutionInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const PartnersSolutionDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const PartnersSolutionDetailsContainer = styled(Flex)`
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

const PartnersSolutionHeader = styled(Flex)`
  gap: 16px;
`;

const PartnersSolutionTitle = styled.h2`
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

const PartnersSolutionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const PartnersSolutionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const PartnersSolutionDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const PartnersSolutionDescription = styled.p`
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

const PartnersSolutionDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
