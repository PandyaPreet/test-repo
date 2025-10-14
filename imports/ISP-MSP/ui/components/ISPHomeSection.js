"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

export default function ISPHomeSection() {
  return (
    <HeroWrapper $direction="column">
      <HeroInner>
        <HeroImageWrapper>
          <HeroContent $direction="column">
            <HeroTitle>Add Value with Every Subscription</HeroTitle>
          </HeroContent>
        </HeroImageWrapper>
      </HeroInner>
    </HeroWrapper>
  );
}

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
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
      0deg,
      var(--40, rgba(26, 25, 25, 0.4)) 0%,
      var(--40, rgba(26, 25, 25, 0.4)) 100%
    ),
    url("/assets/ISP-MSP/isp-hero-bg.webp") lightgray 50% / cover no-repeat;
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
  }
`;

const HeroTitle = styled.div`
  font-family: Arial;
  font-size: 88px;
  font-weight: 400;
  line-height: 85%;
  letter-spacing: -3.52px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 9%;
  @media (max-width: 1194px) {
    font-size: 64px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled.div`
  color: #fff;
  font-family: Arial;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
`;
