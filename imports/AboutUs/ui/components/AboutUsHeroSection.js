"use client";
import Flex from "@/lib/atoms/Flex";
import { getBackgroundImageUrl } from "@/lib/imageUtils";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

export default function AboutUsHeroSection({ heroData }) {
  const [descHeight, setDescHeight] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        const newHeight = 180 + scrollY;
        setDescHeight(newHeight);
      } else {
        setDescHeight(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const backgroundImageURL = getBackgroundImageUrl(heroData?.backgroundImage);
  const items = heroData?.supportingTexts || [];

  return (
    <AboutUsHeroWrapper $direction="column">
      <AboutUsHeroInner>
        <AboutUsHeroImageWrapper $bgimg={backgroundImageURL}>
          <AboutUsHeroContent $direction="column">
            {heroData?.title ? (
              <AboutUsHeroTitle>{heroData.title}</AboutUsHeroTitle>
            ) : null}

            {heroData?.description ? (
              <AboutUsHeroSubtitle>{heroData.description} </AboutUsHeroSubtitle>
            ) : null}
          </AboutUsHeroContent>
        </AboutUsHeroImageWrapper>

        <AboutUsDescriptionContainer $height={descHeight}>
          {items.map((item, index) => {
            const icon = "/".repeat(index + 1);
            const text = typeof item === "string" ? item : item?.text;
            const indent = typeof item === "string" ? undefined : item?.indent;
            return (
              <Fragment key={index}>
                <AboutUsDescriptionWrapper>
                  <AboutUsDescriptionChildWrapper>
                    <AboutUsDescriptionIcon>{icon}</AboutUsDescriptionIcon>
                    <AboutUsDescriptionsText $indent={indent}>
                      {text}
                    </AboutUsDescriptionsText>
                  </AboutUsDescriptionChildWrapper>
                </AboutUsDescriptionWrapper>

                <AboutUsDescriptionBorderWrapper />
              </Fragment>
            );
          })}
        </AboutUsDescriptionContainer>
      </AboutUsHeroInner>
    </AboutUsHeroWrapper>
  );
}

const AboutUsHeroWrapper = styled(Flex)`
  background: rgb(40, 119, 176);
  width: 100%;
`;

const AboutUsHeroInner = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const AboutUsHeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100svh;
  height: 100dvh;
  height: 100vh;
  background: ${(props) =>
    props.$bgimg ? `url("${props.$bgimg}") no-repeat center center` : "none"};
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

const AboutUsHeroContent = styled(Flex)`
  position: absolute;
  width: 100%;
  gap: 24px;
  padding: 56px 16px;
  bottom: 0;
  justify-content: center;
  z-index: 3;

  @media (max-width: 1194px) {
    gap: 8px;
    padding: 40px 16px;
  }
`;

const AboutUsHeroTitle = styled.h1`
  font-family: Arial;
  width: 100%;
  max-width: 1162px;
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
    text-indent: 0%;
  }
`;

const AboutUsHeroSubtitle = styled.p`
  color: #fff;
  width: 100%;
  max-width: 552px;
  font-family: Arial;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
`;

const AboutUsDescriptionContainer = styled(Flex)`
  position: relative;
  width: 100%;
  background: rgb(40, 119, 176);
  z-index: 2;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-wrap: wrap;

  ${({ $height }) =>
    $height
      ? `
        margin-top: -${$height - 180}px;
        height: ${$height}px;
      `
      : `
        margin-top: 0;
        height: auto;
      `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    overflow: visible;
    padding: 24px 16px;
    gap: 16px;

    ${({ $height }) =>
      $height
        ? `
        margin-top: -${Math.min($height - 180, 300)}px;
        height: auto; 
        padding-top: ${Math.min($height - 180, 300)}px; 
      `
        : `
        margin-top: 0;
        height: auto;
        padding-top: 0;
      `}
  }
`;

const AboutUsDescriptionIcon = styled.p`
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const AboutUsDescriptionWrapper = styled(Flex)`
  padding: 40px 16px 0px 16px;
  flex: 1 1 300px;
  min-width: 250px;
  max-width: 500px;
  min-height: 180px;

  @media (max-width: 1194px) {
    padding: 24px 16px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    min-height: auto;
    padding: unset;
    flex: unset;
  }
`;

const AboutUsDescriptionChildWrapper = styled(Flex)`
  padding: 8px 0 48px;
  @media (max-width: 1194px) {
    padding: 8px 40px 8px 0;
  }
  @media (max-width: 768px) {
    border-bottom: 0.5px solid #fff;
  }
`;

const AboutUsDescriptionsText = styled.p`
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  color: #fff;
  text-indent: ${(props) => props.$indent || "27%"};
`;

const AboutUsDescriptionBorderWrapper = styled(Flex)`
  height: 100%;
  max-height: 180px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 16px 0 16px;
  border-right: 0.5px solid #fff;

  @media (max-width: 1194px) {
    margin-right: 240px;
  }
  @media (max-width: 980px) {
    margin-right: 91px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
