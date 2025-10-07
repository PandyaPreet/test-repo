"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function OEMCardSection() {
  return (
    <CardsContainer $direction={"column"}>
      <CardsWrapper $justifycontent={"space-between"} $alignitems={"center"}>
        <HorizontalLineTop />
        <HorizontalLineBottom />

        <DashedBlocks>
          <FirstBlock />
          <SecondBlock />
        </DashedBlocks>

        <ContentBlock>
          <ContentWrapper $alignitems="center" $justifycontent="center">
            <ContentSection $direction="column" $alignitems="center">
              <HeaderSection>
                <HeaderSectionTitleDark>
                  Custom Plans for
                </HeaderSectionTitleDark>
                <br />
                <HeaderSectionTitleLight>Any </HeaderSectionTitleLight>
                <HeaderSectionTitleDark>Device or </HeaderSectionTitleDark>
                <HeaderSectionTitleLight>Use </HeaderSectionTitleLight>

                <br />
                <HeaderSectionTitleDark>Case</HeaderSectionTitleDark>
              </HeaderSection>
              <SubHeaderSection>
                From high-end electronics to durable power tools and smart
                devices, we tailor each plan to match the risk profile and
                expected lifespan of the product
              </SubHeaderSection>
            </ContentSection>
          </ContentWrapper>
        </ContentBlock>

        <DashedBlocks>
          <SecondBlock />
          <FirstBlock />
        </DashedBlocks>
      </CardsWrapper>

      <CardsWrapper $justifycontent={"space-between"} $alignitems={"center"}>
        <HorizontalLineTop />
        <HorizontalLineBottom />

        <DashedBlocks>
          <FirstBlock />
          <SecondBlock />
        </DashedBlocks>

        <ContentBlock>
          <SubContentWrapper $alignitems="center" $justifycontent="center">
            <ContentSection $direction="column" $alignitems="center">
              <HeaderSection>
                <HeaderSectionTitleLight>Co</HeaderSectionTitleLight>
                <HeaderSectionTitleWhite>-Branded or</HeaderSectionTitleWhite>
                <br />
                <HeaderSectionTitleWhite>White-</HeaderSectionTitleWhite>
                <HeaderSectionTitleLight>Labeled</HeaderSectionTitleLight>
                <br />

                <HeaderSectionTitleWhite>— Your Choice</HeaderSectionTitleWhite>
              </HeaderSection>
              <DescriptionLight>
                As the world connects everything from thermostats to industrial
                sensors, the need for device-level support and repair coverage
                has grown dramatically. We offer embedded coverage that
                activates in real time—during setup, in the app, or at the
                dashboard level—so your customers are protected.
              </DescriptionLight>
            </ContentSection>
          </SubContentWrapper>
        </ContentBlock>

        <DashedBlocks>
          <SecondBlock />
          <FirstBlock />
        </DashedBlocks>
      </CardsWrapper>
    </CardsContainer>
  );
}

export default OEMCardSection;

const CardsContainer = styled(Flex)`
  width: 100%;
  padding: 80px 0px;
  align-self: stretch;
`;

const CardsWrapper = styled(Flex)`
  height: 600px;
  position: relative;
  width: 100%;
`;

const HorizontalLineTop = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  border-top: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  z-index: 0;
`;

const HorizontalLineBottom = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  border-top: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  z-index: 0;
`;

const DashedBlocks = styled(Flex)`
  gap: 16px;
  height: 100%;
`;

const FirstBlock = styled.div`
  width: 104px;
  height: 100%;
  border-right: 1px dashed rgba(26, 25, 25, 0.5);
  border-left: 1px dashed rgba(26, 25, 25, 0.5);
  background: #fff;
`;

const SecondBlock = styled.div`
  height: 100%;
  width: 195px;
  border-right: 1px dashed rgba(26, 25, 25, 0.5);
  border-left: 1px dashed rgba(26, 25, 25, 0.5);
  background: #fff;
`;

const ContentBlock = styled(Flex)`
  padding: 60px 0px;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled(Flex)`
  padding: 0px 80px;
  background: var(--5, rgba(26, 25, 25, 0.05));
  height: 100%;
  z-index: 1;
  width: 100%;
`;

const SubContentWrapper = styled(ContentWrapper)`
  background: var(--500, #2877b0);
`;

const ContentSection = styled(Flex)`
  gap: 40px;
`;

const HeaderSection = styled.span`
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const HeaderSectionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const HeaderSectionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const HeaderSectionTitleWhite = styled.span`
  color: var(--100, #fff);
`;

const SubHeaderSection = styled.span`
  color: var(--80, rgba(26, 25, 25, 0.8));
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const DescriptionLight = styled(SubHeaderSection)`
  color: var(--300, #e5e5e5);
`;
