"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

export default function RetailHeroSection({ heroSectionData }) {
  const title = heroSectionData?.title || "";
  const subtitle = heroSectionData?.description || "";
  const backgroundImage =
    getBackgroundImageUrl(heroSectionData?.backgroundImage) ||
    "/assets/retail-hero-bg.webp";

  return (
    <HeroWrapper $direction="column">
      <HeroInner $fullwidth>
        <HeroImageWrapper
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <HeroContent $direction="column">
            <HeroTitle>{title}</HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
          </HeroContent>
        </HeroImageWrapper>
      </HeroInner>
    </HeroWrapper>
  );
}

/* -------------------- styled components -------------------- */

const HeroWrapper = styled(Flex)`
  background: rgb(40, 119, 176);
  width: 100%;
`;

const HeroInner = styled(Flex)`
  flex-direction: column;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
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
  font-size: 88px;
  font-weight: 400;
  line-height: 85%;
  width: 100%;
  max-width: 1162px;
  letter-spacing: -3.52px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 9%;
  white-space: pre-wrap;

  @media (max-width: 1194px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    text-indent: 0%;
  }
`;

const HeroSubtitle = styled.p`
  color: #fff;
  font-family: Arial;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  max-width: 532px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 120%;
  }
`;
