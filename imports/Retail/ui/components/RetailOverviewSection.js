"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const RetailOverviewSection = () => {
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState([600, 600]);

  useEffect(() => {
    const updateHeights = () => {
      const newHeights = contentRefs.current.map((el) =>
        el ? el.offsetHeight + 120 : 600
      );
      setHeights(newHeights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const CARDS_DATA = [
    {
      id: "retail-reality",
      variant: "light",
      title: (
        <>
          <HeaderSectionTitleLight>
            The <br />
          </HeaderSectionTitleLight>
          <HeaderSectionTitleDark>Retail Reality</HeaderSectionTitleDark>
        </>
      ),
      description: (
        <>
          <p>
            Margins are tight. Loyalty is hard-won. And service is the
            battleground where most retail brands win or lose long-term trust.
          </p>
          <p className="intro-text">
            Whether you're selling electronics, power tools & appliances, or
            connected home goods, your customers expect reliable coverage—and a
            seamless experience when things go wrong.
          </p>
          <p className="highlight-text intro-text">
            We help you <strong>deliver both.</strong>
          </p>
        </>
      ),
      bg: "var(--5, rgba(26, 25, 25, 0.05))",
      textColor: "dark",
    },
    {
      id: "why-ensure-protect",
      variant: "brand",
      title: (
        <>
          <HeaderSectionTitleLight>
            Why <br />{" "}
          </HeaderSectionTitleLight>
          <HeaderSectionTitleWhite>Ensure Protect?</HeaderSectionTitleWhite>
        </>
      ),
      description: (
        <>
          <p>
            Ensure Protect helps retail and ecommerce brands add high-performing
            extended service plans and protection programs to their
            point-of-sale experience.
          </p>
          <p className="borderWhite">
            Our programs are either fully white-labeled, or co-branded, designed
            for multi-channel selling, and built to maximize attachment rate and
            lifetime value—without adding operational overhead.
          </p>
        </>
      ),
      bg: "var(--500, #2877b0)",
      textColor: "light",
    },
  ];

  return (
    <CardsContainer $direction="column">
      {CARDS_DATA.map((card, index) => (
        <CardsWrapper
          key={card.id}
          $justifycontent="space-between"
          $alignitems="center"
        >
          <HorizontalLineTop />
          <HorizontalLineBottom />

          <DashedBlocks style={{ height: `${heights[index] || 600}px` }}>
            <FirstBlock />
            <SecondBlock $isLeft />
          </DashedBlocks>

          <ContentBlock>
            <ContentWrapper
              ref={(el) => (contentRefs.current[index] = el)}
              $bg={card.bg}
              $alignitems="center"
              $justifycontent="center"
            >
              <ContentSection $direction="column">
                <HeaderSection>{card.title}</HeaderSection>
                <SubHeaderSection $light={card.textColor === "light"}>
                  {card.description}
                </SubHeaderSection>
              </ContentSection>
            </ContentWrapper>
          </ContentBlock>

          <DashedBlocks style={{ height: `${heights[index] || 600}px` }}>
            <SecondBlock $isRight />
            <FirstBlock />
          </DashedBlocks>
        </CardsWrapper>
      ))}
    </CardsContainer>
  );
};

export default RetailOverviewSection;

const CardsContainer = styled(Flex)`
  width: 100%;
  padding: 80px 0px;
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
`;

const HorizontalLineTop = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  border-top: 1px dashed rgba(26, 25, 25, 0.5);
  z-index: 0;
`;

const HorizontalLineBottom = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  border-top: 1px dashed rgba(26, 25, 25, 0.5);
  z-index: 0;
`;

const DashedBlocks = styled(Flex)`
  gap: 16px;
  height: 100%;
  &:last-of-type div:last-child {
    border-right: none;
  }
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
  width: clamp(20px, 15vw, 195px);
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

const ContentBlock = styled(Flex)`
  padding: 60px 0px;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled(Flex)`
  padding: 0px 80px;
  background: ${(p) => p.$bg};
  height: 100%;
  z-index: 1;
  width: 100%;
  @media (max-width: 1194px) {
    padding: 0px 120px;
  }
  @media (max-width: 980px) {
    padding: 40px;
  }
`;

const ContentSection = styled(Flex)`
  gap: 40px;
  @media (max-width: 980px) {
    gap: 16px;
  }
`;

const HeaderSection = styled.span`
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  max-width: 350px;
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

const HeaderSectionTitleWhite = styled.span`
  color: var(--100, #fff);
`;

const HeaderSectionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const SubHeaderSection = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  max-width: 480px;
  color: ${({ $light }) =>
    $light ? "var(--300, #e5e5e5)" : "var(--80, rgba(26, 25, 25, 0.8))"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }

  p.intro-text {
    border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
    padding-top: 12px;
  }
  p.borderWhite {
    border-top: 0.5px dashed var(--40, rgba(255, 255, 255, 0.4));
    padding-top: 12px;
  }
  p.highlight-text {
    font-weight: 400;
    color: var(--500, #1a1919);

    strong {
      font-weight: 700;
    }
  }
`;
