"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SolutionsHeroSection() {
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
    <HeroWrapper $direction="column">
      <HeroInner>
        <HeroImageWrapper>
          <HeroContent $direction="column">
            <HeroTitle>
              Custom-Built <br /> Protection Plans for <br /> Every Product,
              Channel, <br /> and Customer
            </HeroTitle>
            <HeroSubtitle>
              Our coverage isn’t off-the-shelf <br /> —and neither are your
              products.
            </HeroSubtitle>
          </HeroContent>
        </HeroImageWrapper>

        <DescriptionContainer $height={descHeight}>
          <DescriptionWrapper>
            <DescriptionChildWrapper>
              <DescriptionIcon>/</DescriptionIcon>
              <DescriptionsText>
                At Ensure Protect, we design and manage service plans for a wide
                range of industries, helping you increase customer lifetime
                value and reduce service friction.
              </DescriptionsText>
            </DescriptionChildWrapper>
          </DescriptionWrapper>

          <DescriptionBorderWrapper />

          <DescriptionSecondWrapper>
            <DescriptionChildWrapper>
              <DescriptionIcon>//</DescriptionIcon>
              <BrandsanotherText>
                From power tools to consumer electronics to connected devices
                and enterprise networks, we help you deliver reliable protection
                that fits how your customers live, work, and shop.
              </BrandsanotherText>
            </DescriptionChildWrapper>
          </DescriptionSecondWrapper>

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
  height: 780px;
  background: url("/assets/solutions_hero_bg.png") no-repeat center center;
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
`;

const HeroSubtitle = styled.div`
  color: #fff;
  font-family: Arial;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
`;

const DescriptionContainer = styled(Flex)`
  position: relative;
  width: 100%;
  background: rgb(40, 119, 176);
  z-index: 2;
  display: flex;
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

const DescriptionIcon = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const DescriptionWrapper = styled(Flex)`
  padding: 40px 16px 0px 16px;
  width: 316px;
`;

const DescriptionSecondWrapper = styled(DescriptionWrapper)`
  width: 420px;
`;

const DescriptionChildWrapper = styled(Flex)`
  padding: 8px 0 48px;
`;

const DescriptionsText = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 27%;
`;

const BrandsanotherText = styled(DescriptionsText)`
  text-indent: 35%;
`;

const DescriptionBorderWrapper = styled(Flex)`
  width: 121px;
  height: 180px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 16px 0 16px;
  border-right: 0.5px solid #fff;
`;

const DescriptionThirdPartWrapper = styled(DescriptionBorderWrapper)`
  width: 196px;
`;
