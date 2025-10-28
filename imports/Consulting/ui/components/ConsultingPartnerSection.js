"use client";

import PlansImageBanner from "@/components/PlansImageBanner";
import Flex from "@/lib/atoms/Flex";
import React, { useState } from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const ConsultingPartnerSection = ({ featureSection2Data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const title = featureSection2Data?.title || "";
  const featurePoints = featureSection2Data?.featurePoints || [];
  const featureImages = featureSection2Data?.featureImages || [];

  // Map Sanity images -> banner objects { bgImage }
  const BANNERS =
    featureImages
      ?.map((img) => ({ bgImage: getBackgroundImageUrl(img) }))
      .filter((b) => !!b.bgImage) || [];

  // Fallbacks if CMS has no images
  const FALLBACK_BANNERS = [
    { bgImage: "/assets/Consulting/left-banner-1.webp" },
    { bgImage: "/assets/Consulting/left-banner-2.webp" },
    { bgImage: "/assets/Consulting/left-banner-3.webp" },
    { bgImage: "/assets/Consulting/left-banner-4.webp" },
  ];

  const banners = BANNERS.length ? BANNERS : FALLBACK_BANNERS;

  return (
    <ConsultingPartnerContainer $fullwidth>
      <ConsultingPartnerInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PlansImageBanner banners={banners} activeIndex={activeIndex} />

        <ConsultingPartnerDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <ConsultingPartnerDetailsContainer $direction="column" $fullwidth>
            <ConsultingPartnerTitle>{title}</ConsultingPartnerTitle>

            <ConsultingPartnerDescriptionContainer $direction="column">
              {featurePoints.map((desc, index) => (
                <DescriptionBlock
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                >
                  <ConsultingPartnerDescription>
                    {desc}
                  </ConsultingPartnerDescription>
                  {index !== featurePoints.length - 1 && (
                    <ConsultingPartnerDescriptionSeparator />
                  )}
                </DescriptionBlock>
              ))}
            </ConsultingPartnerDescriptionContainer>
          </ConsultingPartnerDetailsContainer>
        </ConsultingPartnerDetails>
      </ConsultingPartnerInnerWrapper>
    </ConsultingPartnerContainer>
  );
};

export default ConsultingPartnerSection;

/* -------------------- styled components -------------------- */

const ConsultingPartnerContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ConsultingPartnerInnerWrapper = styled(Flex)`
  flex: 1 0 0;

  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

const ConsultingPartnerDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;

  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const ConsultingPartnerDetailsContainer = styled(Flex)`
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

const ConsultingPartnerTitle = styled.h2`
  color: var(--500, #1a1919);
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

const ConsultingPartnerDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const ConsultingPartnerDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  padding-top: 12px;
  padding-bottom: 12px;

  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
  }
`;

const ConsultingPartnerDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
