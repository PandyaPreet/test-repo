"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function ConnectHeroSection() {
  return (
    <HeroWrapper $direction="column">
      <HeroInner>
        <HeroImageWrapper>
          <HeroContent $direction="column">
            <HeroTitle>Let's Connect</HeroTitle>
            <HeroSubtitle>
              Have a question, need a product demo, or want to explore a
              partnership? We're here to help—whether you're just getting
              started or ready to launch.
            </HeroSubtitle>
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
  height: 100vh;
  /* padding-top: 66.66666666666667%; */
  background-size: cover;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
      0deg,
      var(--40, rgba(26, 25, 25, 0.4)) 0%,
      var(--40, rgba(26, 25, 25, 0.4)) 100%
    ),
    url("/assets/Connect/connect-hero-bg.jpg") lightgray 50% / cover no-repeat;
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
