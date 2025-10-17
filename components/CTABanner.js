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
  videoUrl,
  onButtonClick,
}) {
  return (
    <CTABlock
      $direction="column"
      $justifycontent="center"
      $alignitems="center"
      $fullwidth
    >
      {videoUrl ? (
        <VideoWrapper>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <Overlay />
        </VideoWrapper>
      ) : (
        <ImageBackground $background={backgroundImage} />
      )}

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
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  overflow: hidden;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 25, 25, 0.3);
  z-index: 1;
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(26, 25, 25, 0.3) 0%,
      rgba(26, 25, 25, 0.3) 100%
    ),
    url(${(props) => props.$background}) lightgray 50% / cover no-repeat;
  z-index: 0;
`;

const CTAInnerWrapper = styled(Flex)`
  position: relative;
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
