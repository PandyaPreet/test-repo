"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function EnterpriseHeroSection() {
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
              Minimize Downtime. <br /> Maximize Productivity.
            </HeroTitle>
            <HeroSubtitle>
              Protect your infrastructure, field devices, and distributed <br />
              hardware with service plans that deliver fast resolution, <br />
              SLA-level support, and full lifecycle visibility
            </HeroSubtitle>
          </HeroContent>
        </HeroImageWrapper>

        <DescriptionContainer $height={descHeight}>
          <DescriptionWrapper>
            <DescriptionChildWrapper>
              <DescriptionIcon>/</DescriptionIcon>
              <DescriptionsText>
                Enterprise-Scale Problems Need Enterprise-Ready Coverage
              </DescriptionsText>
            </DescriptionChildWrapper>
          </DescriptionWrapper>

          <DescriptionBorderWrapper />

          <DescriptionSecondWrapper>
            <DescriptionChildWrapper>
              <DescriptionIcon>//</DescriptionIcon>
              <BrandsanotherText>
                Whether you manage 50 laptops or 50,000 smart endpoints,
                unexpected failures cost time, money, and credibility. Our group
                service plans and repair coverage help you reduce unplanned
                outages, eliminate administrative chaos, and deliver consistent
                protection across your entire fleet.
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
  /* height: 100vh; */
  /* padding-top: 66.66666666666667%; */
  background-size: cover;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
      0deg,
      var(--40, rgba(26, 25, 25, 0.4)) 0%,
      var(--40, rgba(26, 25, 25, 0.4)) 100%
    ),
    url("/assets/Enterprise/enterprise-hero-bg.webp") lightgray 50% / cover
      no-repeat;
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
  height: 180px;
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
