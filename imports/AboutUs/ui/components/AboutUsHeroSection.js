"use client";
import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function AboutUsHeroSection() {
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
    <AboutUsHeroWrapper $direction="column">
      <AboutUsHeroInner>
        <AboutUsHeroImageWrapper>
          <AboutUsHeroContent $direction="column">
            <AboutUsHeroTitle>
              Protection Plans, <br /> Reimagined for today's
              <br /> brands
            </AboutUsHeroTitle>
            <AboutUsHeroSubtitle>
              That's why we build everything around your brand,
              <br /> your product, and your customer experience.”
            </AboutUsHeroSubtitle>
          </AboutUsHeroContent>
        </AboutUsHeroImageWrapper>

        <AboutUsDescriptionContainer $height={descHeight}>
          <AboutUsDescriptionWrapper>
            <AboutUsDescriptionChildWrapper>
              <AboutUsDescriptionIcon>/</AboutUsDescriptionIcon>
              <AboutUsDescriptionsText>
                Ensure Protect is an independent third-party administrator (TPA)
                helping brands launch and scale high-performing protection
                programs across OEM, retail, ecommerce, IoT, education, and
                enterprise.
              </AboutUsDescriptionsText>
            </AboutUsDescriptionChildWrapper>
          </AboutUsDescriptionWrapper>
        </AboutUsDescriptionContainer>
      </AboutUsHeroInner>
    </AboutUsHeroWrapper>
  );
}

export default AboutUsHeroSection;

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
  height: 780px;
  background: url("/assets/About/AboutUsHeroImage.webp") no-repeat center center;
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
`;

const AboutUsHeroTitle = styled.div`
  font-family: Arial;
  font-size: 88px;
  font-weight: 400;
  line-height: 85%;
  letter-spacing: -3.52px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 9%;
`;

const AboutUsHeroSubtitle = styled.div`
  color: #fff;
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

const AboutUsDescriptionIcon = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const AboutUsDescriptionWrapper = styled(Flex)`
  padding: 40px 16px 0px 16px;
  width: 527px;
`;

const AboutUsDescriptionSecondWrapper = styled(AboutUsDescriptionWrapper)`
  width: 420px;
`;

const AboutUsDescriptionChildWrapper = styled(Flex)`
  padding: 8px 0 48px;
`;

const AboutUsDescriptionsText = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  text-transform: uppercase;
  color: #fff;
  text-indent: 27%;
`;

const AboutUsBrandsanotherText = styled(AboutUsDescriptionsText)`
  text-indent: 35%;
`;

const AboutUsDescriptionBorderWrapper = styled(Flex)`
  width: 121px;
  height: 180px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 16px 0 16px;
  border-right: 0.5px solid #fff;
`;

const AboutUsDescriptionThirdPartWrapper = styled(
  AboutUsDescriptionBorderWrapper
)`
  width: 196px;
`;
