"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React from "react";
import styled from "styled-components";

const ISPOutcomesSection = () => {
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
    <ISPOutcomesContainer $fullwidth>
      <ISPOutcomesInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <ISPOutcomesDetails $direction="column" $justifycontent="flex-end">
          <ISPOutcomesDetailsContainer $direction="column" $fullwidth>
            <ISPOutcomesTitle>
              <ISPOutcomesTitleDark>Outcomes </ISPOutcomesTitleDark>
              <br />
              <ISPOutcomesTitleLight>that </ISPOutcomesTitleLight>
              <ISPOutcomesTitleDark>Matter:</ISPOutcomesTitleDark>
            </ISPOutcomesTitle>

            <ISPOutcomesDescriptionContainer $direction="column">
              <ISPOutcomesDescription>
                Lower churn from better post-install support
              </ISPOutcomesDescription>
              <ISPOutcomesDescriptionSeparator />
              <ISPOutcomesDescription>
                Increased monthly revenue via service add-ons
              </ISPOutcomesDescription>
              <ISPOutcomesDescriptionSeparator />
              <ISPOutcomesDescription>
                Fewer escalations and ticket volumes for device failures
              </ISPOutcomesDescription>
              <ISPOutcomesDescriptionSeparator />
              <ISPOutcomesDescription>
                Branded customer experience across all service interactions
              </ISPOutcomesDescription>
            </ISPOutcomesDescriptionContainer>
          </ISPOutcomesDetailsContainer>
        </ISPOutcomesDetails>
        <PlansImageBanner banners={BANNER_IMAGES} />
      </ISPOutcomesInnerWrapper>
    </ISPOutcomesContainer>
  );
};

export default ISPOutcomesSection;

/* -------------------- Styled Components -------------------- */

const ISPOutcomesContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ISPOutcomesInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const ISPOutcomesDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const ISPOutcomesDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const ISPOutcomesTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const ISPOutcomesTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ISPOutcomesTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ISPOutcomesDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const ISPOutcomesDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ISPOutcomesDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
