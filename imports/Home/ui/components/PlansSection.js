"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const PlansSection = ({ plansData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = plansData && plansData.images ? plansData.images : [];
  const featureImages = images.map((img, i) => ({
    bgImage: getBackgroundImageUrl(img && img.asset ? img.asset : null),
  }));

  return (
    <PlansContiner $fullwidth>
      <PlansInnerWrapper $justifycontent="space-between" $alignitems="center">
        <PlansDetails $direction="column" $justifycontent="flex-end">
          <PlansDetailsContainer $direction="column" $fullwidth>
            <PlansDetailsTitle>
              {plansData && plansData.title ? plansData.title : ""}
            </PlansDetailsTitle>
            <PlansDetailsDescriptionContainer $direction="column">
              {plansData &&
                plansData.points &&
                plansData.points.map((desc, index) => (
                  <React.Fragment key={index}>
                    <DescriptionBlock
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(0)}
                    >
                      <PlansDetailsDescription>{desc}</PlansDetailsDescription>
                      {plansData.points &&
                        index !== plansData.points.length - 1 && (
                          <PlansDetailsDescriptionSeparator />
                        )}
                    </DescriptionBlock>
                  </React.Fragment>
                ))}
            </PlansDetailsDescriptionContainer>
          </PlansDetailsContainer>
        </PlansDetails>
        <PlansImageBanner banners={featureImages} activeIndex={activeIndex} />
      </PlansInnerWrapper>
    </PlansContiner>
  );
};

export default PlansSection;

const PlansContiner = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const PlansInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
    padding: 64px 0px;
  }
`;

const PlansDetails = styled(Flex)`
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

const PlansDetailsContainer = styled(Flex)`
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

const PlansDetailsTitle = styled.h2`
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

const PlansDetailsTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const PlansDetailsTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const PlansDetailsDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const PlansDetailsDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-bottom: 12px;
  padding-top: 12px;
  line-height: 120%;
  letter-spacing: -0.42px;
  cursor: pointer;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
    letter-spacing: normal;
  }
`;

const PlansDetailsDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
