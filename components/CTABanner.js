"use client";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import CTAButtonArrow from "./svg/CTAButtonArrow";
import { Button } from "@/lib/atoms/Button";
import ButtonIcon from "@/lib/atoms/ButtonIcon";

function CTABanner({
  title,
  description,
  buttonText,
  backgroundImage,
  onButtonClick,
}) {
  return (
    <CTABlock
      $direction="column"
      $justifycontent="center"
      $alignitems="center"
      $background={backgroundImage}
      $fullwidth
    >
      <CTAInnerWrapper
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
      >
        <CTAContentWrapper $direction="column" $alignitems="center">
          <CTATitle>{title}</CTATitle>
          <CTADescription> {description}</CTADescription>
        </CTAContentWrapper>

        <Button variant="secondary" size="xl" onClick={onButtonClick}>
          {buttonText}
          <ButtonIcon />
        </Button>
      </CTAInnerWrapper>
    </CTABlock>
  );
}

export default CTABanner;

const CTABlock = styled(Flex)`
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
    url(${(props) => props.$background}) lightgray 50% / cover no-repeat;
`;

const CTAInnerWrapper = styled(Flex)`
  height: 550px;
  gap: 40px;
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

const CTAButton = styled(Flex)`
  height: 52px;
  min-width: 406px;
  padding: 12px 80px;
  gap: 12px;
  background: var(--100, #fff);
  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

const ButtonText = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
  text-transform: uppercase;
`;

const CTAButtonTextWrapper = styled(Flex)`
  gap: 12px;
`;

const CTAContentWrapper = styled(Flex)`
  gap: 16px;
  align-self: stretch;
`;

const CTATitle = styled.div`
  color: var(--100, #fff);
  text-align: center;
  font-size: 40px;
  font-style: normal;
  width: 100%;
  max-width: 600px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.2px;

  @media (max-width: 1194px) {
    font-size: 36px;
  }
  @media (max-width: 430px) {
    text-align: unset;
  }
`;

const CTADescription = styled.div`
  color: var(--100, #fff);
  text-align: center;
  width: 100%;
  max-width: 500px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (max-width: 430px) {
    text-align: unset;
  }
`;
