import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

export function HeroSection() {
  return (
    <HeroWrapper>
      <HeroInner>
        <HeroImageWrapper>
          <HeroContent>
            <HeroTitle>Repair.Replace. Maintain.</HeroTitle>
            <HeroSubtitle>
              When products break or fail,
              <br /> so can the customer relationship with your brand.
            </HeroSubtitle>
          </HeroContent>
        </HeroImageWrapper>
      </HeroInner>
      <DescriptionContainer>
        <DescriptionWrapper>
          <DescriptionChildWrapper>
            <DescriptionIcon>/</DescriptionIcon>
            <DescriptionsText>
              Ensure Protect delivers partner-first service plans and programs
              designed for today’s multi-channel economy.
            </DescriptionsText>
          </DescriptionChildWrapper>
        </DescriptionWrapper>

        <DescriptionBorderWrapper />

        <DescriptionSecondWrapper>
          <DescriptionChildWrapper>
            <DescriptionIcon>//</DescriptionIcon>
            <BrandsanotherText>
              We help brands unlock scalable aftermarket revenue and increase
              customer satisfaction with service contracts featuring repair,
              replacement, and maintenance programs.
            </BrandsanotherText>
          </DescriptionChildWrapper>
        </DescriptionSecondWrapper>

        <DescriptionThirdPartWrapper />
      </DescriptionContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Flex)`
  background: rgb(40, 119, 176);
  flex-direction: column;
`;

const HeroInner = styled(Flex)`
  width: 100%;
  /* flex-direction: column; */
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 780px;
  background: url("/assets/Hero.png") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

const HeroContent = styled(Flex)`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  padding: 56px 16px;
  bottom: 0;
  justify-content: center;
`;

const HeroTitle = styled.div`
  font-family: Arial;
  font-size: 88px;
  font-style: normal;
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
  width: 100%;
  margin: 0 auto;
  align-items: center;
`;

const DescriptionIcon = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const DescriptionWrapper = styled(Flex)`
  padding: 40px 16px 0px 16px;
  justify-content: space-between;
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
  font-style: normal;
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
  border-right: 0.5px solid var(--100, #fff);
`;

const DescriptionThirdPartWrapper = styled(DescriptionBorderWrapper)`
  width: 196px;
`;
