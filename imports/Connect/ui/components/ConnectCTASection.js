"use client";

import CTAButtonArrow from "@/components/svg/CTAButtonArrow";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function ConnectCTASection() {
  return (
    <ConnectCTASectionBlock
      $direction="column"
      $justifycontent="center"
      $alignitems="center"
    >
      <ConnectCTASectionInnerWrapper
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
      >
        <ConnectCTASectionContentWrapper
          $direction="column"
          $alignitems="center"
        >
          <ConnectCTASectionTitle>
            Looking to offer service plans <br />
            under your brand?
          </ConnectCTASectionTitle>
        </ConnectCTASectionContentWrapper>
        <ConnectCTASectionButton $justifycontent="center" $alignitems="center">
          <ConnectCTASectionButtonTextWrapper $alignitems="center">
            <ConnectCTASectionButtonText>
              Partner With US
            </ConnectCTASectionButtonText>
            <CTAButtonArrow />
          </ConnectCTASectionButtonTextWrapper>
        </ConnectCTASectionButton>
      </ConnectCTASectionInnerWrapper>
    </ConnectCTASectionBlock>
  );
}

export default ConnectCTASection;

const ConnectCTASectionBlock = styled(Flex)`
  height: 550px;
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

const ConnectCTASectionInnerWrapper = styled(Flex)`
  height: 550px;
  padding: 149px 422px;
  gap: 40px;
  width: 100%;
  flex-shrink: 0;
`;

const ConnectCTASectionButton = styled(Flex)`
  height: 52px;
  min-width: 406px;
  padding: 12px 80px;
  gap: 12px;
  background: var(--100, #fff);
`;

const ConnectCTASectionButtonText = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
  text-transform: uppercase;
`;

const ConnectCTASectionButtonTextWrapper = styled(Flex)`
  gap: 12px;
`;

const ConnectCTASectionContentWrapper = styled(Flex)`
  gap: 16px;
  align-self: stretch;
`;

const ConnectCTASectionTitle = styled.div`
  color: var(--100, #fff);
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.2px;
  white-space: nowrap;
`;

const ConnectCTASectionDescription = styled.div`
  color: var(--100, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
