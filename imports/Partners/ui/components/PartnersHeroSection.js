"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function PartnersHeroSection() {
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

  return (
    <PartnersHeroWrapper $direction="column">
      <PartnersHeroInner>
        <PartnersHeroImageWrapper>
          <PartnersHeroContent $direction="column">
            <PartnersHeroTitle>
              Turn Coverage into <br /> Customer Loyalty — and <br /> New
              Revenue
            </PartnersHeroTitle>
          </PartnersHeroContent>
        </PartnersHeroImageWrapper>

        <PartnersDescriptionContainer $height={descHeight}>
          <PartnersDescriptionWrapper>
            <PartnersDescriptionChildWrapper>
              <PartnersDescriptionIcon>/</PartnersDescriptionIcon>
              <PartnersDescriptionsText>
                Whether you're launching your first service protection and
                extended warranty program or scaling your embedded protection
                platform, we bring the tools, infrastructure, experience, and
                support to help you build lasting value
              </PartnersDescriptionsText>
            </PartnersDescriptionChildWrapper>
          </PartnersDescriptionWrapper>
        </PartnersDescriptionContainer>
      </PartnersHeroInner>
    </PartnersHeroWrapper>
  );
}

export default PartnersHeroSection;

const PartnersHeroWrapper = styled(Flex)`
  background: rgb(40, 119, 176);
  width: 100%;
`;

const PartnersHeroInner = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const PartnersHeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 780px;
  background: url("/assets/Partners/partners-hero-bg.webp") no-repeat center
    center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

const PartnersHeroContent = styled(Flex)`
  position: absolute;
  width: 100%;
  gap: 24px;
  padding: 56px 16px;
  bottom: 0;
  justify-content: center;
  z-index: 3;
`;

const PartnersHeroTitle = styled.div`
  font-family: Arial;
  font-size: 88px;
  font-weight: 400;
  line-height: 85%;
  letter-spacing: -3.52px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 9%;
`;

const PartnersDescriptionContainer = styled(Flex)`
  position: relative;
  width: 100%;
  background: rgb(40, 119, 176);
  z-index: 2;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;

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
`;

const PartnersDescriptionIcon = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const PartnersDescriptionWrapper = styled(Flex)`
  padding: 40px 16px 0px 16px;
  width: 527px;
`;

const PartnersDescriptionSecondWrapper = styled(PartnersDescriptionWrapper)`
  width: 420px;
`;

const PartnersDescriptionChildWrapper = styled(Flex)`
  padding: 8px 0 48px;
`;

const PartnersDescriptionsText = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 27%;
`;

const PartnersBrandsanotherText = styled(PartnersDescriptionsText)`
  text-indent: 35%;
`;

const PartnersDescriptionBorderWrapper = styled(Flex)`
  width: 121px;
  height: 180px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 16px 0 16px;
  border-right: 0.5px solid #fff;
`;

const PartnersDescriptionThirdPartWrapper = styled(
  PartnersDescriptionBorderWrapper
)`
  width: 196px;
`;
