"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function ISPCardSection() {
  return (
    <CardsContainer $direction={"column"}>
      <CardsWrapper
        $justifycontent={"space-between"}
        $alignitems={"center"}
        $fullwidth
      >
        <HorizontalLineTop />
        <HorizontalLineBottom />

        <DashedBlocks>
          <FirstBlock />
          <SecondBlock />
        </DashedBlocks>

        <ContentBlock>
          <ContentWrapper $alignitems="center" $justifycontent="center">
            <ContentSection $direction="column">
              <HeaderSection>
                <HeaderSectionTitleDark>From </HeaderSectionTitleDark>
                <HeaderSectionTitleLight>Setup </HeaderSectionTitleLight>
                <HeaderSectionTitleDark>to </HeaderSectionTitleDark>
                <br />
                <HeaderSectionTitleLight>Support </HeaderSectionTitleLight>
                <HeaderSectionTitleDark>— Make </HeaderSectionTitleDark>
                <br />
                <HeaderSectionTitleDark>It Seamless</HeaderSectionTitleDark>
              </HeaderSection>

              <SubHeaderSection>
                Bundle repair, replacement, or service plans with your connected
                devices to increase ARPU and customer stickiness—without added
                support strain.
              </SubHeaderSection>
              <SubHeaderSection>
                Subscribers expect more than a signal. They want confidence that
                the devices they rely on will work, be fixed fast, or be
                replaced easily.
              </SubHeaderSection>
              <SubHeaderSection>
                Ensure Protect helps you offer device protection plans and
                embedded support coverage through your existing customer
                relationships, without building out an entire service
                infrastructure.
              </SubHeaderSection>
            </ContentSection>
          </ContentWrapper>
        </ContentBlock>

        <DashedBlocks>
          <SecondBlock />
          <FirstBlock />
        </DashedBlocks>
      </CardsWrapper>
    </CardsContainer>
  );
}

export default ISPCardSection;

const CardsContainer = styled(Flex)`
  width: 100%;
  padding: 80px 0px;
  gap: 10px;
  align-self: stretch;
`;

const CardsWrapper = styled(Flex)`
  height: 600px;
  position: relative;
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
`;

const ContentWrapper = styled(Flex)`
  padding: 0px 80px;
  background: var(--5, rgba(26, 25, 25, 0.05));
  height: 100%;
  z-index: 1;
`;

const ContentSection = styled(Flex)`
  max-width: 376px;
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

const SubHeaderSection = styled.span`
  color: var(--80, rgba(26, 25, 25, 0.8));
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;
