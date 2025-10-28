"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

function ConnectHeroSection({ heroData }) {
  const backgroundImageURL = getBackgroundImageUrl(heroData?.backgroundImage);

  return (
    <HeroWrapper $direction="column">
      <HeroInner>
        <HeroImageWrapper $bgimg={backgroundImageURL}>
          <HeroContent $direction="column">
            {heroData?.title ? <HeroTitle>{heroData?.title}</HeroTitle> : null}
            {heroData?.description ? (
              <HeroSubtitle>{heroData?.description}</HeroSubtitle>
            ) : null}
          </HeroContent>
        </HeroImageWrapper>
      </HeroInner>
    </HeroWrapper>
  );
}

export default ConnectHeroSection;

const HeroWrapper = styled(Flex)`
  background: rgb(40, 119, 176);
  width: 100%;
`;

const HeroInner = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100svh;

  background: ${(props) =>
    props.$bgimg
      ? `linear-gradient(
          0deg,
          rgba(26, 25, 25, 0.4) 0%,
          rgba(26, 25, 25, 0.4) 100%
        ),
        url("${props.$bgimg}") center center / cover no-repeat`
      : `none`};
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

const HeroContent = styled(Flex)`
  position: absolute;
  width: 100%;
  gap: 24px;
  padding: 56px 16px;
  bottom: 0;
  justify-content: center;
  z-index: 3;
  @media (max-width: 1194px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 40px 16px;
    br {
      display: none;
    }
  }
`;

const HeroTitle = styled.h1`
  font-family: Arial;
  font-size: 80px;
  font-weight: 400;
  line-height: 85%;
  letter-spacing: -3.2px;
  text-transform: uppercase;
  color: #fff;
  @media (max-width: 1194px) {
    font-size: 64px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled.p`
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  width: 100%;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
