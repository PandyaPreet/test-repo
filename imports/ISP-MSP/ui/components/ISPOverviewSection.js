"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React from "react";
import styled from "styled-components";

const ISPOverviewSection = () => {
  const BANNER_IMAGES = [
    {
      bgImage: "/assets/ISP-MSP/isp-banner-1.webp",
    },
    {
      bgImage: "/assets/ISP-MSP/isp-banner-2.webp",
    },
    {
      bgImage: "/assets/ISP-MSP/isp-banner-3.webp",
    },
  ];

  return (
    <ISPOverviewContainer $fullwidth>
      <ISPOverviewInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PlansImageBanner banners={BANNER_IMAGES} />

        <ISPOverviewDetails $direction="column" $justifycontent="flex-end">
          <ISPOverviewDetailsContainer $direction="column" $fullwidth>
            <ISPOverviewTitle>
              <ISPOverviewTitleDark>Ideal For:</ISPOverviewTitleDark>
            </ISPOverviewTitle>

            <ISPOverviewDescriptionContainer $direction="column">
              <ISPOverviewDescription>
                Wi-Fi and broadband providers
              </ISPOverviewDescription>
              <ISPOverviewDescriptionSeparator />
              <ISPOverviewDescription>
                Smart home platforms
              </ISPOverviewDescription>
              <ISPOverviewDescriptionSeparator />
              <ISPOverviewDescription>
                Connected device resellers and MVNO
              </ISPOverviewDescription>
              <ISPOverviewDescriptionSeparator />
              <ISPOverviewDescription>
                White-label tech or hardware bundles
              </ISPOverviewDescription>
            </ISPOverviewDescriptionContainer>
          </ISPOverviewDetailsContainer>
        </ISPOverviewDetails>
      </ISPOverviewInnerWrapper>
    </ISPOverviewContainer>
  );
};

export default ISPOverviewSection;

const ISPOverviewContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ISPOverviewInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

const ISPOverviewDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const ISPOverviewDetailsContainer = styled(Flex)`
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

const ISPOverviewTitle = styled.h2`
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

const ISPOverviewTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ISPOverviewTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ISPOverviewDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const ISPOverviewDescription = styled.div`
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

const ISPOverviewDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
