"use client";
import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React, { useState } from "react";
import styled from "styled-components";

function PartnersSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const SOLUTIONS_BANNER_IMAGES = [
    { bgImage: "/assets/Partners/solutions-banner-1.webp" },
    { bgImage: "/assets/Partners/solutions-banner-2.webp" },
    { bgImage: "/assets/Partners/solutions-banner-3.webp" },
    { bgImage: "/assets/Partners/solutions-banner-4.webp" },
  ];

  const DESCRIPTIONS = [
    "Reserve sharing with our reinsurance structure, or set up a captive that we help manage",
    "Monthly, yearly, or multi-year options to fit customer buying needs and your Sales & Marketing approach",
    "White-labeled or co-branded coverage, to ensure continuity and brand awareness",
    "Set up quoting and reporting using APIs or flat files",
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
              {DESCRIPTIONS.map((desc, index) => (
                <DescriptionBlock
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                >
                  <PartnersSolutionDescription>
                    {desc}
                  </PartnersSolutionDescription>
                  {index !== DESCRIPTIONS.length - 1 && (
                    <PartnersSolutionDescriptionSeparator />
                  )}
                </DescriptionBlock>
              ))}
            </PartnersSolutionDescriptionContainer>
          </PartnersSolutionDetailsContainer>
        </PartnersSolutionDetails>

        <PlansImageBanner
          banners={SOLUTIONS_BANNER_IMAGES}
          activeIndex={activeIndex}
        />
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

const PartnersSolutionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const PartnersSolutionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const PartnersSolutionDescriptionContainer = styled(Flex)`
  align-self: stretch;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const PartnersSolutionDescription = styled.p`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  padding-top: 12px;
  padding-bottom: 12px;
  ${({ $uppercase }) => $uppercase && `text-transform: uppercase;`}
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
  }
`;

const PartnersSolutionDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
