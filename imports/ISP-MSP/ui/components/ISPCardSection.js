"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function ISPCardSection() {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(600);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        setContentHeight(height + 120);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <CardsContainer $direction={"column"}>
      <CardsWrapper
        $justifycontent={"space-between"}
        $alignitems={"center"}
        $fullwidth
      >
        <HorizontalLineTop />
        <HorizontalLineBottom />

        <DashedBlocks style={{ height: `${contentHeight}px` }}>
          <FirstBlock />
          <SecondBlock $isLeft />
        </DashedBlocks>

        <ContentBlock>
          <ContentWrapper
            ref={contentRef}
            $alignitems="center"
            $justifycontent="center"
          >
            <ContentSection $direction="column">
              <HeaderSection>
                <HeaderSectionTitleDark>From </HeaderSectionTitleDark>
                <HeaderSectionTitleLight>Setup </HeaderSectionTitleLight>
                <HeaderSectionTitleDark>to </HeaderSectionTitleDark>
                <HeaderSectionTitleLight>Support </HeaderSectionTitleLight>
                <HeaderSectionTitleDark>— Make </HeaderSectionTitleDark>
                <HeaderSectionTitleDark>It Seamless</HeaderSectionTitleDark>
              </HeaderSection>
              <SubHeaderWrapper>
                <SubHeaderSection>
                  Bundle repair, replacement, or service plans with your
                  connected devices to increase ARPU and customer
                  stickiness—without added support strain.
                </SubHeaderSection>
                <SubHeaderSection>
                  Subscribers expect more than a signal. They want confidence
                  that the devices they rely on will work, be fixed fast, or be
                  replaced easily.
                </SubHeaderSection>
                <SubHeaderSection>
                  Ensure Protect helps you offer device protection plans and
                  embedded support coverage through your existing customer
                  relationships, without building out an entire service
                  infrastructure.
                </SubHeaderSection>
              </SubHeaderWrapper>
            </ContentSection>
          </ContentWrapper>
        </ContentBlock>

        <DashedBlocks style={{ height: `${contentHeight}px` }}>
          <SecondBlock $isRight />
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
  @media (max-width: 1194px) {
    padding: unset;
  }
`;

const CardsWrapper = styled(Flex)`
  height: 600px;
  position: relative;
  width: 100%;
  @media (max-width: 980px) {
    height: auto;
  }
  @media (max-width: 768px) {
    height: auto;
  }
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

const FirstBlock = styled.div`
  width: clamp(40px, 8vw, 104px);
  height: 100%;
  border-right: 1px dashed rgba(26, 25, 25, 0.5);
  border-left: 1px dashed rgba(26, 25, 25, 0.5);
  background: #fff;
  @media (max-width: 1194px) {
    display: none;
  }
`;

const SecondBlock = styled.div`
  height: 100%;
  width: clamp(40px, 8vw, 195px);
  border-right: 1px dashed rgba(26, 25, 25, 0.5);
  border-left: 1px dashed rgba(26, 25, 25, 0.5);
  background: #fff;
  ${({ $isLeft }) =>
    $isLeft &&
    `
    @media (max-width: 1194px) {
      border-left: none !important;
    }
  `}

  ${({ $isRight }) =>
    $isRight &&
    `
    @media (max-width: 1194px) {
      border-right: none !important;
    }
  `}

  @media (max-width: 468px) {
    width: clamp(20px, 8vw, 195px);
  }
  @media (max-width: 340px) {
    width: clamp(20px, 6vw, 195px);
  }
`;

const DashedBlocks = styled(Flex)`
  gap: 16px;
  height: 100%;
  &:last-of-type div:last-child {
    border-right: none;
  }
`;

const ContentBlock = styled(Flex)`
  padding: 60px 0px;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled(Flex)`
  padding: 0px 80px;
  width: 100%;
  background: var(--5, rgba(26, 25, 25, 0.05));
  height: 100%;
  z-index: 1;

  @media (max-width: 1194px) {
    padding: 0px 120px;
  }
  @media (max-width: 980px) {
    padding: 40px;
  }
  @media (max-width: 380px) {
    padding: 25px;
  }
`;

const ContentSection = styled(Flex)`
  gap: 40px;
  @media (max-width: 980px) {
    gap: 16px;
  }
`;

const SubHeaderWrapper = styled(Flex)`
  gap: 20px;
  flex-direction: column;
`;

const HeaderSection = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  width: 100%;
  max-width: 376px;
  letter-spacing: -1.44px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const HeaderSectionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const HeaderSectionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const SubHeaderSection = styled.p`
  width: 100%;
  max-width: 376px;
  color: var(--80, rgba(26, 25, 25, 0.8));
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
