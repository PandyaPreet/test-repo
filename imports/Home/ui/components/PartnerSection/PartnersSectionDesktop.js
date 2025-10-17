"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import Flex from "@/lib/atoms/Flex";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function PartnersSectionDesktop({ partnersData }) {
  // Sanity enforces exactly 4 cards; keep a safe fallback:
  const DEFAULT_CARDS = [
    {
      title: "Retail & Ecommerce",
      description:
        "Boost point-of-sale attach rates and drive post-sale renewals",
    },
    {
      title: "OEMs & Device Manufacturers",
      description:
        "Launch manufacturer and extended protection plans across SKUs and regions",
    },
    {
      title: "ISPs, Cable Companies & Smart Tech Providers",
      description: "Offer embedded coverage with account-based billing",
    },
    {
      title: "Enterprise & Group Buyers",
      description: "Manage service plans for fleets and infrastructure ",
    },
  ];

  const cards = (
    partnersData && partnersData.cards && partnersData.cards.length
      ? partnersData.cards
      : DEFAULT_CARDS
  ).slice(0, 4);

  const sectionRef = useRef(null);
  const cardRefs = useRef([null, null, null, null]);
  const cardTitleRef = useRef([null, null, null, null]);
  const animationRef = useRef(null);

  const [cardStates, setCardStates] = useState([false, false, false, false]);

  // exact choreography preserved
  const cardHeights = {
    0: [0, 0, 0, 0],
    25: [0, 0, 0, 0],
    50: [161, 116, 41, 83],
    75: [308, 265, 216, 296],
    100: [340, 340, 340, 340],
  };

  const getInterpolatedHeights = useCallback((currentProgress) => {
    const milestones = [0, 25, 50, 75, 100];
    let start = 0,
      end = 25;

    for (let i = 0; i < milestones.length - 1; i++) {
      if (
        currentProgress >= milestones[i] &&
        currentProgress <= milestones[i + 1]
      ) {
        start = milestones[i];
        end = milestones[i + 1];
        break;
      }
    }

    const t = (currentProgress - start) / (end - start);
    return [0, 1, 2, 3].map((idx) => {
      const s = cardHeights[start] ? cardHeights[start][idx] : 0;
      const e = cardHeights[end] ? cardHeights[end][idx] : 0;
      return s + (e - s) * t;
    });
  }, []);

  const handleMilestoneChange = useCallback(
    (progress) => {
      if (animationRef.current) animationRef.current.kill();

      const targetHeights = getInterpolatedHeights(progress);
      const isFinalStage = progress >= 75;
      const fullHeight = 340;

      const newCardStates = targetHeights.map(
        (h) => Math.round(h) >= fullHeight
      );
      setCardStates((prev) =>
        prev.some((v, i) => v !== newCardStates[i]) ? newCardStates : prev
      );

      const tl = gsap.timeline();
      animationRef.current = tl;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        tl.to(
          card,
          {
            height: targetHeights[i],
            duration: 0.8,
            ease: "power2.out",
            opacity: 1,
          },
          "sync"
        );
      });

      cardTitleRef.current.forEach((title) => {
        if (!title) return;
        tl.to(
          title,
          {
            opacity: isFinalStage ? 1 : 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "sync"
        );
      });
    },
    [getInterpolatedHeights]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) =>
        handleMilestoneChange(Math.round(self.progress * 100)),
      onEnter: () => handleMilestoneChange(0),
      onLeave: () => handleMilestoneChange(100),
      onEnterBack: () => handleMilestoneChange(0),
      onLeaveBack: () => handleMilestoneChange(0),
    });

    // initial frame
    handleMilestoneChange(0);

    return () => {
      st.kill();
      if (animationRef.current) animationRef.current.kill();
    };
  }, [handleMilestoneChange]);

  return (
    <PartnersContainer ref={sectionRef}>
      <PartnersInnerWrapper
        $direction="column"
        $fullwidth
        $justifycontent="center"
      >
        <PartnersContentContainer
          $direction="column"
          $alignitems="center"
          $justifycontent="space-between"
        >
          <PartnersHeaderTitle>
            {partnersData && partnersData.title ? partnersData.title : ""}
          </PartnersHeaderTitle>

          <PartnersDetails $alignitems="flex-end" $justifycontent="flex-end">
            {cards.map((data, index) => {
              const cardKey = data && data._key ? data._key : index;
              const cardTitle = data && data.title ? data.title : "";
              const cardDescription =
                data && data.description ? data.description : "";

              return (
                <PartnersDetailsCards
                  $direction="column"
                  $justifycontent="space-between"
                  key={cardKey}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  $isFullHeight={cardStates[index]}
                >
                  <PartnersDetailsCardsTitle
                    ref={(el) => {
                      cardTitleRef.current[index] = el;
                    }}
                  >
                    {cardTitle}
                  </PartnersDetailsCardsTitle>

                  <PartnersDetailsCardsDescription>
                    {cardDescription}
                  </PartnersDetailsCardsDescription>
                </PartnersDetailsCards>
              );
            })}
          </PartnersDetails>
        </PartnersContentContainer>
      </PartnersInnerWrapper>
    </PartnersContainer>
  );
}

export default PartnersSectionDesktop;

// --- helpers & styles ---

function renderSplitTitle(title) {
  const fallback = (
    <>
      We Partner{" "}
      <PartnersHeaderTitleWithBrand>with Brands</PartnersHeaderTitleWithBrand>
      <br />
      Who Sell Smarter
    </>
  );
  if (!title) return fallback;

  const phrase = "with Brands";
  const i = title.indexOf(phrase);
  if (i === -1) return title;

  const before = title.slice(0, i);
  const after = title.slice(i + phrase.length);
  return (
    <>
      {before}
      <PartnersHeaderTitleWithBrand>{phrase}</PartnersHeaderTitleWithBrand>
      {after}
    </>
  );
}

const PartnersContainer = styled.div`
  height: 200vh;
  width: 100%;
  background: linear-gradient(
      0deg,
      var(--5, rgba(26, 25, 25, 0.05)) 0%,
      var(--5, rgba(26, 25, 25, 0.05)) 100%
    ),
    var(--100, #fff);
`;

const PartnersInnerWrapper = styled(Flex)`
  margin: 0 auto;
  padding: 200px 16px 16px 16px;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const PartnersContentContainer = styled(Flex)`
  gap: 120px;
  align-self: stretch;
  height: 100%;
`;

const PartnersHeaderTitle = styled.p`
  color: var(--500, #1a1919);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: auto;
`;

const PartnersHeaderTitleWithBrand = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const PartnersDetails = styled(Flex)`
  gap: 16px;
  align-self: stretch;
`;

const PartnersDetailsCardsTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 100%;
  max-width: 220px;
  letter-spacing: -0.96px;
  opacity: 0;
  @media (max-width: 1194px) {
    font-size: 24px;
  }
`;

const PartnersDetailsCards = styled(Flex)`
  height: 0px;
  padding: 32px;
  gap: 24px;
  flex: 1 0 0;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);
  will-change: height;
  transform: translateZ(0);
  overflow: hidden;
  opacity: 0;

  ${(props) =>
    props.$isFullHeight &&
    `
    &:hover {
      background: var(--500, #2877b0);
      border-color: transparent;

      ${PartnersDetailsCardsTitle} {
        color: var(--100, #fff);
      }
    }
  `}
`;

const PartnersDetailsCardsDescription = styled.div`
  color: var(--100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;
