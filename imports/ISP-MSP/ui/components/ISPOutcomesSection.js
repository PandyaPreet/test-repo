"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const ISPOutcomesSection = ({ featureSection2Data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ---- Sanity mappings & fallbacks ----
  const title = featureSection2Data?.title || "Outcomes that Matter:";

  const featurePoints =
    Array.isArray(featureSection2Data?.featurePoints) &&
    featureSection2Data.featurePoints.length
      ? featureSection2Data.featurePoints
      : [
          "Lower churn from better post-install support",
          "Increased monthly revenue via service add-ons",
          "Fewer escalations and ticket volumes for device failures",
          "Branded customer experience across all service interactions",
        ];

  const bannersFromSanity =
    Array.isArray(featureSection2Data?.featureImages) &&
    featureSection2Data.featureImages.length
      ? featureSection2Data.featureImages
          .map((img) => getBackgroundImageUrl(img)) // or getBackgroundImageUrl(img.asset._ref)
          .filter(Boolean)
          .map((url) => ({ bgImage: url }))
      : [
          { bgImage: "/assets/ISP-MSP/outcomes-banner-1.webp" },
          { bgImage: "/assets/ISP-MSP/outcomes-banner-2.webp" },
          { bgImage: "/assets/ISP-MSP/outcomes-banner-3.webp" },
          { bgImage: "/assets/ISP-MSP/outcomes-banner-4.webp" },
        ];

  return (
    <ISPOutcomesContainer $fullwidth>
      <ISPOutcomesInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <ISPOutcomesDetails $direction="column" $justifycontent="flex-end">
          <ISPOutcomesDetailsContainer $direction="column" $fullwidth>
            <ISPOutcomesTitle>
              <ISPOutcomesTitleDark>{title}</ISPOutcomesTitleDark>
            </ISPOutcomesTitle>

            <ISPOutcomesDescriptionContainer $direction="column">
              {featurePoints.map((desc, index) => (
                <React.Fragment key={index}>
                  <DescriptionBlock
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                  >
                    <ISPOutcomesDescription>{desc}</ISPOutcomesDescription>
                    {index !== featurePoints.length - 1 && (
                      <ISPOutcomesDescriptionSeparator />
                    )}
                  </DescriptionBlock>
                </React.Fragment>
              ))}
            </ISPOutcomesDescriptionContainer>
          </ISPOutcomesDetailsContainer>
        </ISPOutcomesDetails>

        <PlansImageBanner
          banners={bannersFromSanity}
          activeIndex={activeIndex}
        />
      </ISPOutcomesInnerWrapper>
    </ISPOutcomesContainer>
  );
};

export default ISPOutcomesSection;

/* ---------------- styles (mostly unchanged) ---------------- */

const ISPOutcomesContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ISPOutcomesInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ISPOutcomesDetails = styled(Flex)`
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

const ISPOutcomesDetailsContainer = styled(Flex)`
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

const ISPOutcomesTitle = styled.h2`
  font-size: 48px;
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

const ISPOutcomesTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ISPOutcomesDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const ISPOutcomesDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  padding: 12px 0;
  letter-spacing: -0.42px;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
    letter-spacing: normal;
  }
`;

const ISPOutcomesDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
