"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React from "react";
import styled from "styled-components";

const PlansSection = () => {
  const BANNER_IMAGES = [
    {
      bgImage: "/assets/plan-banner-1.webp",
    },
    {
      bgImage: "/assets/plan-banner-2.webp",
    },
    {
      bgImage: "/assets/plan-banner-3.webp",
    },
    {
      bgImage: "/assets/plan-banner-4.webp",
    },
  ];
  return (
    <PlansContiner $fullwidth>
      <PlansInnerWrapper $justifycontent="space-between" $alignitems="center">
        <PlansDetails $direction="column" $justifycontent="flex-end">
          <PlansDetailsContainer $direction="column" $fullwidth>
            <PlansDetailsTitle>
              <PlansDetailsTitleLight>A New </PlansDetailsTitleLight>
              <PlansDetailsTitleDark>Standard</PlansDetailsTitleDark>
              <br />
              <PlansDetailsTitleLight>for </PlansDetailsTitleLight>
              <PlansDetailsTitleDark>Protection</PlansDetailsTitleDark>
              <br />
              <PlansDetailsTitleDark>Plans</PlansDetailsTitleDark>
            </PlansDetailsTitle>
            <PlansDetailsDescriptionContainer $direction="column">
              <PlansDetailsDescription>
                We’re a modern Independent TPA (third-party administrator) built
                for OEMs, retailers, and connected product brands that want to
                offer protection plans without operational headaches.{" "}
              </PlansDetailsDescription>
              <PlansDetailsDescriptionSeparator />
              <PlansDetailsDescription>
                Whether your business runs on ecommerce, retail stores, or
                app-based experiences, our platform powers embedded warranty
                solutions that drive loyalty and long-term value.
              </PlansDetailsDescription>
              <PlansDetailsDescriptionSeparator />
              <PlansDetailsDescription>
                Ensure Protect isn’t just a service provider—we’re a protection
                plan partner who shares your goals: higher attachment rates,
                lower churn, better customer experience, and higher margins.
              </PlansDetailsDescription>
            </PlansDetailsDescriptionContainer>
          </PlansDetailsContainer>
        </PlansDetails>
        <PlansImageBanner banners={BANNER_IMAGES} />
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
  gap: 12px;
  align-self: stretch;
`;

const PlansDetailsDescription = styled.div`
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

const PlansDetailsDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
