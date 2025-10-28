"use client";

import Flex from "@/lib/atoms/Flex";
import { getBackgroundImageUrl } from "@/lib/imageUtils";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const descriptions = [
  {
    icon: "/",
    text: "Make Protection Part of the Product",
    indent: "27%",
  },
  {
    icon: "//",
    text: "Today's customers expect more than a user manual and a 1-year warranty. They want meaningful protection, easy repair/replace resolution, and a support experience that matches the product they trusted enough to buy. We help you meet that expectation — and turn it into a growth opportunity.",
    indent: "35%",
  },
];

export default function OEMHeroSection({ heroData }) {
  const [descHeight, setDescHeight] = useState(null);

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
  const items = heroData?.supportingTexts || []; // [{ text, indent } or string]

  return (
    <HeroWrapper $direction="column">
      <HeroInner>
        <HeroImageWrapper $bgimg={backgroundImageURL}>
          <HeroContent $direction="column">
            {heroData?.title ? <HeroTitle>{heroData.title}</HeroTitle> : null}
            {heroData?.description ? (
              <HeroSubtitle>{heroData.description} </HeroSubtitle>
            ) : null}
          </HeroContent>
        </HeroImageWrapper>

        <DescriptionContainer $height={descHeight}>
          {items.map((item, index) => {
            const icon = "/".repeat(index + 1);
            const text = typeof item === "string" ? item : item?.text;
            const indent = typeof item === "string" ? undefined : item?.indent;

            return (
              <Fragment key={index}>
                <DescriptionWrapper>
                  <DescriptionChildWrapper>
                    <DescriptionIcon>{icon}</DescriptionIcon>
                    <DescriptionsText $indent={indent}>{text}</DescriptionsText>
                  </DescriptionChildWrapper>
                </DescriptionWrapper>

                {index !== items.length - 1 && <DescriptionBorderWrapper />}
              </Fragment>
            );
          })}
          <DescriptionThirdPartWrapper />
        </DescriptionContainer>
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
    gap: 8px;
    padding: 40px 16px;
  }
`;

const HeroTitle = styled.h1`
  font-family: Arial;
  width: 100%;
  max-width: 1248px;
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

const HeroSubtitle = styled.p`
  color: #fff;
  font-family: Arial;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  max-width: 532px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 120%;
  }
`;

const DescriptionContainer = styled(Flex)`
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

const DescriptionIcon = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const DescriptionWrapper = styled(Flex)`
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

const DescriptionChildWrapper = styled(Flex)`
  padding: 8px 0 48px;
  @media (max-width: 1194px) {
    padding: 8px 40px 8px 0;
  }
  @media (max-width: 768px) {
    border-bottom: 0.5px solid #fff;
    width: 100%;
  }
`;

const DescriptionsText = styled.p`
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  color: #fff;
  text-indent: ${(props) => props.$indent || "27%"};
`;

const DescriptionBorderWrapper = styled(Flex)`
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

const DescriptionThirdPartWrapper = styled(DescriptionBorderWrapper)`
  width: 196px;
  @media (max-width: 1194px) {
    display: none;
  }
`;
