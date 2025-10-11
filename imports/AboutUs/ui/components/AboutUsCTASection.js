"use client";

import CTAButtonArrow from "@/components/svg/CTAButtonArrow";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function AboutUsCTASection() {
  return (
    <AboutUsCTASectionBlock
      $direction="column"
      $justifycontent="center"
      $alignitems="center"
    >
      <AboutUsCTASectionInnerWrapper
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
      >
        <AboutUsCTASectionContentWrapper
          $direction="column"
          $alignitems="center"
        >
          <AboutUsCTASectionTitle>
            Let's Build What's Next, Together
          </AboutUsCTASectionTitle>
        </AboutUsCTASectionContentWrapper>
        <AboutUsCTASectionButton $justifycontent="center" $alignitems="center">
          <AboutUsCTASectionButtonTextWrapper $alignitems="center">
            <AboutUsCTASectionButtonText>
              Schedule a Discovery Call
            </AboutUsCTASectionButtonText>
            <CTAButtonArrow />
          </AboutUsCTASectionButtonTextWrapper>
        </AboutUsCTASectionButton>
      </AboutUsCTASectionInnerWrapper>
    </AboutUsCTASectionBlock>
  );
}

export default AboutUsCTASection;

const AboutUsCTASectionBlock = styled(Flex)`
  height: 550px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: linear-gradient(
      0deg,
      var(--30, rgba(26, 25, 25, 0.3)) 0%,
      var(--30, rgba(26, 25, 25, 0.3)) 100%
    ),
    url("/assets/cta-banner-image.png") lightgray 50% / cover no-repeat;
`;

const AboutUsCTASectionInnerWrapper = styled(Flex)`
  height: 550px;
  /* padding: 149px 422px; */
  gap: 40px;
  width: 100%;
  flex-shrink: 0;
  @media (max-width: 1194px) {
    padding: 0px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 0px 16px;
    gap: 16px;
    br {
      display: none;
    }
  }
`;

const AboutUsCTASectionButton = styled(Flex)`
  height: 52px;
  min-width: 406px;
  padding: 12px 80px;
  gap: 12px;
  background: var(--100, #fff);
  @media (max-width: 768px) {
    padding: 12px 18px;
  }
  @media (max-width: 449px) {
    width: 100%;
    min-width: auto;
  }
`;

const AboutUsCTASectionButtonText = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
  text-transform: uppercase;
`;

const AboutUsCTASectionButtonTextWrapper = styled(Flex)`
  gap: 12px;
`;

const AboutUsCTASectionContentWrapper = styled(Flex)`
  gap: 16px;
  align-self: stretch;
`;

const AboutUsCTASectionTitle = styled.div`
  color: var(--100, #fff);
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.2px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
`;

const AboutUsCTASectionDescription = styled.div`
  color: var(--100, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
