"use client";

import PlansImageBanner from "@/components/PlansImageBanner";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const ConsultingPartnerSection = () => {
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
    <ConsultingPartnerContainer $fullwidth>
      <ConsultingPartnerInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PlansImageBanner banners={BANNER_IMAGES} />

        <ConsultingPartnerDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <ConsultingPartnerDetailsContainer $direction="column" $fullwidth>
            <ConsultingPartnerTitle>
              <ConsultingPartnerTitleDark>
                Partner Enablement{" "}
              </ConsultingPartnerTitleDark>
              <ConsultingPartnerTitleLight>
                Includes
              </ConsultingPartnerTitleLight>
            </ConsultingPartnerTitle>

            <ConsultingPartnerDescriptionContainer $direction="column">
              <ConsultingPartnerDescription>
                Discovery workshops and whiteboarding
              </ConsultingPartnerDescription>
              <ConsultingPartnerDescriptionSeparator />
              <ConsultingPartnerDescription>
                API and onboarding documentation
              </ConsultingPartnerDescription>
              <ConsultingPartnerDescriptionSeparator />
              <ConsultingPartnerDescription>
                Sample plan templates and pricing models
              </ConsultingPartnerDescription>
              <ConsultingPartnerDescriptionSeparator />
              <ConsultingPartnerDescription>
                Channel support and client-facing materials
              </ConsultingPartnerDescription>
            </ConsultingPartnerDescriptionContainer>
          </ConsultingPartnerDetailsContainer>
        </ConsultingPartnerDetails>
      </ConsultingPartnerInnerWrapper>
    </ConsultingPartnerContainer>
  );
};

export default ConsultingPartnerSection;

const ConsultingPartnerContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ConsultingPartnerInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const ConsultingPartnerDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const ConsultingPartnerDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const ConsultingPartnerTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const ConsultingPartnerTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ConsultingPartnerTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ConsultingPartnerDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const ConsultingPartnerDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ConsultingPartnerDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
