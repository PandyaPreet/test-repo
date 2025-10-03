"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const PlansSection = () => {
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
        <PlansBannerContainer $alignitems="center">
          {BANNER_IMAGES.map((banner, index) => (
            <PlansBannerImagesBackground bg={banner.bgcolor} key={index}>
              <PlansBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </PlansBannerImageWrapper>
            </PlansBannerImagesBackground>
          ))}
        </PlansBannerContainer>
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
`;

const PlansDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const PlansDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const PlansDetailsTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const PlansDetailsDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const PlansBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const PlansBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const PlansBannerImagesBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${PlansBannerImageWrapper} {
      display: block;
    }
  }
`;
