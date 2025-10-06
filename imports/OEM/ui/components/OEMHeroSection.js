"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function OEMHeroSection() {
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
              {" "}
              Control the Full <br /> Lifecycle — From Sale <br />
              to Support
            </HeroTitle>
            <HeroSubtitle>
              Design, deliver, and manage co-branded warranties, extended
              warranties and protection plans that extend your product's value
              long after it leaves the box
            </HeroSubtitle>
          </HeroContent>
        </HeroImageWrapper>

        <DescriptionContainer $height={descHeight}>
          <DescriptionWrapper>
            <DescriptionChildWrapper>
              <DescriptionIcon>/</DescriptionIcon>
              <DescriptionsText>
                Make Protection Part of the Product
              </DescriptionsText>
            </DescriptionChildWrapper>
          </DescriptionWrapper>

          <DescriptionBorderWrapper />

          <DescriptionSecondWrapper>
            <DescriptionChildWrapper>
              <DescriptionIcon>//</DescriptionIcon>
              <BrandsanotherText>
                Today's customers expect more than a user manual and a 1-year
                warranty. They want meaningful protection, easy repair/replace
                resolution, and a support experience that matches the product
                they trusted enough to buy. We help you meet that
                expectation—and turn it into a growth opportunity.
              </BrandsanotherText>
            </DescriptionChildWrapper>
          </DescriptionSecondWrapper>

          <DescriptionThirdPartWrapper />
        </DescriptionContainer>
      </HeroInner>
    </HeroWrapper>
  );
}

export default OEMHeroSection;

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
    url("/assets/MVNO-MNO/mn-hero-bg.jpg") lightgray 50% / cover no-repeat;
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
  max-width: 532px;
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
