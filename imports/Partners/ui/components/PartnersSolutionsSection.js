"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React from "react";
import styled from "styled-components";

function PartnersSolutionsSection() {
  const SOLUTIONS_BANNER_IMAGES = [
    {
      bgcolor: "var(--3, rgba(85, 86, 89, 0.03))",
      bgImage: "/assets/Partners/solutions-banner-1.png",
    },
    {
      bgcolor: "var(--8, rgba(85, 86, 89, 0.08))",
      bgImage: "/assets/Partners/solutions-banner-2.png",
    },
    {
      bgcolor: "var(--12, rgba(85, 86, 89, 0.12))",
      bgImage: "/assets/Partners/solutions-banner-3.png",
    },
    {
      bgcolor: "var(--15, rgba(85, 86, 89, 0.15))",
      bgImage: "/assets/Partners/solutions-banner-4.png",
    },
  ];
  return (
    <PartnersSolutionContainer $fullwidth>
      <PartnersSolutionInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PartnersSolutionDetails $direction="column" $justifycontent="flex-end">
          <PartnersSolutionDetailsContainer $direction="column" $fullwidth>
            <PartnersSolutionHeader $direction="column">
              <PartnersSolutionTitle>
                <PartnersSolutionTitleLight>Choose</PartnersSolutionTitleLight>
                <PartnersSolutionTitleDark>
                  {" "}
                  What Works
                </PartnersSolutionTitleDark>
                <br />
                <PartnersSolutionTitleLight>For</PartnersSolutionTitleLight>
                <PartnersSolutionTitleDark>
                  {" "}
                  Your Business:
                </PartnersSolutionTitleDark>
              </PartnersSolutionTitle>
            </PartnersSolutionHeader>

            <PartnersSolutionDescriptionContainer $direction="column">
              <PartnersSolutionDescription>
                Reserve sharing with our reinsurance structure, or set up a
                captive that we help manage
              </PartnersSolutionDescription>
              <PartnersSolutionDescriptionSeparator />
              <PartnersSolutionDescription>
                Monthly, yearly, or multi-year options to fit customer buying
                needs and your Sales & Marketing approach
              </PartnersSolutionDescription>
              <PartnersSolutionDescriptionSeparator />
              <PartnersSolutionDescription>
                White-labeled or co-branded coverage, to ensure continuity and
                brand awareness
              </PartnersSolutionDescription>
              <PartnersSolutionDescriptionSeparator />
              <PartnersSolutionDescription>
                Set up quoting and reporting using APIs or flat files
              </PartnersSolutionDescription>
            </PartnersSolutionDescriptionContainer>
          </PartnersSolutionDetailsContainer>
        </PartnersSolutionDetails>
        <PlansImageBanner banners={SOLUTIONS_BANNER_IMAGES} />
      </PartnersSolutionInnerWrapper>
    </PartnersSolutionContainer>
  );
}

export default PartnersSolutionsSection;

const PartnersSolutionContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const PartnersSolutionInnerWrapper = styled(Flex)`
  flex: 1 0 0;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const PartnersSolutionDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const PartnersSolutionDetailsContainer = styled(Flex)`
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

const PartnersSolutionHeader = styled(Flex)`
  gap: 16px;
`;

const PartnersSolutionTitle = styled.h2`
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

const PartnersSolutionSubTitle = styled.span``;

const PartnersSolutionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const PartnersSolutionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const PartnersSolutionDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const PartnersSolutionDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  ${({ $uppercase }) => $uppercase && `text-transform: uppercase;`}
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
    letter-spacing: none;
  }
`;

const PartnersSolutionDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const PartnersSolutionBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const PartnersSolutionBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const PartnersSolutionBannerImagesBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${PartnersSolutionBannerImageWrapper} {
      display: block;
    }
  }
`;
