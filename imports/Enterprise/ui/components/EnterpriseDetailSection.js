"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";

const EnterpriseDetailSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const BANNER_IMAGES = [
    {
      bgImage: "/assets/Enterprise/enterprise-banner-1.webp",
    },
    {
      bgImage: "/assets/Enterprise/enterprise-banner-2.webp",
    },
    {
      bgImage: "/assets/Enterprise/enterprise-banner-3.webp",
    },
    {
      bgImage: "/assets/Enterprise/enterprise-banner-4.webp",
    },
  ];

  const DESCRIPTIONS = [
    "Centralized claims and service coordination",
    "White-labeled portals to maintain internal branding",
    "Reporting dashboards segmented by department, region, or asset class",
    " Customized plans including accidental damage for handheld devices, and on-site service for larger installed devices",
  ];

  return (
    <EnterpriseDetailContainer $fullwidth>
      <EnterpriseDetailInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PlansImageBanner banners={BANNER_IMAGES} activeIndex={activeIndex} />

        <EnterpriseDetailDetails $direction="column" $justifycontent="flex-end">
          <EnterpriseDetailDetailsContainer $direction="column" $fullwidth>
            <EnterpriseDetailTitle>
              <EnterpriseDetailTitleDark>What </EnterpriseDetailTitleDark>
              <EnterpriseDetailTitleLight>Sets </EnterpriseDetailTitleLight>
              <br />
              <EnterpriseDetailTitleLight>Us </EnterpriseDetailTitleLight>
              <EnterpriseDetailTitleDark>Apart</EnterpriseDetailTitleDark>
            </EnterpriseDetailTitle>

            <EnterpriseDetailDescriptionContainer $direction="column">
              {DESCRIPTIONS.map((desc, index) => (
                <React.Fragment key={index}>
                  <DescriptionBlock
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                  >
                    <EnterpriseDetailDescription>
                      {desc}
                    </EnterpriseDetailDescription>
                    {index !== DESCRIPTIONS.length - 1 && (
                      <EnterpriseDetailDescriptionSeparator />
                    )}
                  </DescriptionBlock>
                </React.Fragment>
              ))}
            </EnterpriseDetailDescriptionContainer>
          </EnterpriseDetailDetailsContainer>
        </EnterpriseDetailDetails>
      </EnterpriseDetailInnerWrapper>
    </EnterpriseDetailContainer>
  );
};

export default EnterpriseDetailSection;

const EnterpriseDetailContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const EnterpriseDetailInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

const EnterpriseDetailDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const EnterpriseDetailDetailsContainer = styled(Flex)`
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

const EnterpriseDetailTitle = styled.h2`
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

const EnterpriseDetailTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const EnterpriseDetailTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const EnterpriseDetailDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const EnterpriseDetailDescription = styled.div`
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
const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const EnterpriseDetailDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
