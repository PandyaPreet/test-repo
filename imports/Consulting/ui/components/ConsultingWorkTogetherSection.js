"use client";

import PlansImageBanner from "@/components/PlansImageBanner";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const ConsultingWorkTogetherSection = () => {
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
    <ConsultingWorkTogetherContainer $fullwidth>
      <ConsultingWorkTogetherInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <ConsultingWorkTogetherDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <ConsultingWorkTogetherDetailsContainer
            $direction="column"
            $fullwidth
          >
            <ConsultingWorkTogetherTitle>
              <ConsultingWorkTogetherTitleDark>
                Let’s Work Together{" "}
              </ConsultingWorkTogetherTitleDark>
              <ConsultingWorkTogetherTitleLight>
                to Offer
              </ConsultingWorkTogetherTitleLight>
            </ConsultingWorkTogetherTitle>

            <ConsultingWorkTogetherDescriptionContainer $direction="column">
              <ConsultingWorkTogetherDescription>
                Co-branded or white-labeled protection programs
              </ConsultingWorkTogetherDescription>
              <ConsultingWorkTogetherDescriptionSeparator />
              <ConsultingWorkTogetherDescription>
                Custom service plan design for end clients
              </ConsultingWorkTogetherDescription>
              <ConsultingWorkTogetherDescriptionSeparator />
              <ConsultingWorkTogetherDescription>
                Revenue-sharing opportunities
              </ConsultingWorkTogetherDescription>
              <ConsultingWorkTogetherDescriptionSeparator />
              <ConsultingWorkTogetherDescription>
                Fulfillment, tech, and compliance included
              </ConsultingWorkTogetherDescription>
            </ConsultingWorkTogetherDescriptionContainer>
          </ConsultingWorkTogetherDetailsContainer>
        </ConsultingWorkTogetherDetails>
        <PlansImageBanner banners={BANNER_IMAGES} />
      </ConsultingWorkTogetherInnerWrapper>
    </ConsultingWorkTogetherContainer>
  );
};

export default ConsultingWorkTogetherSection;

const ConsultingWorkTogetherContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ConsultingWorkTogetherInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ConsultingWorkTogetherDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const ConsultingWorkTogetherDetailsContainer = styled(Flex)`
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

const ConsultingWorkTogetherTitle = styled.h2`
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

const ConsultingWorkTogetherTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ConsultingWorkTogetherTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ConsultingWorkTogetherDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const ConsultingWorkTogetherDescription = styled.div`
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

const ConsultingWorkTogetherDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
