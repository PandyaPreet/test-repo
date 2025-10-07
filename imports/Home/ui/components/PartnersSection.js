"use client";

import Flex from "@/lib/atoms/Flex";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useCallback, useState } from "react";
import styled from "styled-components";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PartnersSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const animationRef = useRef(null);
  const cardTitleRef = useRef([]);
  const [cardStates, setCardStates] = useState([false, false, false, false]);

  const PARTNER_CARDS = [
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

  // Card height configurations for different milestones
  const cardHeights = {
    0: [0, 0, 0, 0],
    25: [0, 0, 0, 0],
    50: [161, 116, 41, 83],
    75: [308, 265, 216, 296],
    100: [340, 340, 340, 340],
  };

  // Initialize card refs
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, 4);
    cardTitleRef.current = cardTitleRef.current.slice(0, 4);
  }, []);

  const handleMilestoneChange = useCallback((progress) => {
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Calculate interpolated heights for smoother transitions
    const getInterpolatedHeights = (currentProgress) => {
      const milestones = [0, 25, 50, 75, 100];

      // Find current milestone range
      let startMilestone = 0;
      let endMilestone = 25;

      for (let i = 0; i < milestones.length - 1; i++) {
        if (
          currentProgress >= milestones[i] &&
          currentProgress <= milestones[i + 1]
        ) {
          startMilestone = milestones[i];
          endMilestone = milestones[i + 1];
          break;
        }
      }

      const rangeProgress =
        (currentProgress - startMilestone) / (endMilestone - startMilestone);

      return cardRefs.current.map((_, index) => {
        const startHeight = cardHeights[startMilestone][index];
        const endHeight = cardHeights[endMilestone][index];
        return startHeight + (endHeight - startHeight) * rangeProgress;
      });
    };

    const targetHeights = getInterpolatedHeights(progress);
    const isFinalStage = progress >= 75;

    // Check if cards have reached full height (340px)
    const fullHeight = 340;
    const newCardStates = targetHeights.map(
      (height) => Math.round(height) >= fullHeight
    );

    // Update card states if changed
    setCardStates((prevStates) => {
      const hasChanged = prevStates.some(
        (state, index) => state !== newCardStates[index]
      );
      return hasChanged ? newCardStates : prevStates;
    });

    // Create animation timeline for better performance
    const tl = gsap.timeline();
    animationRef.current = tl;

    // Animate cards height only
    cardRefs.current.forEach((card, index) => {
      if (card) {
        tl.to(
          card,
          {
            height: targetHeights[index],
            duration: 0.8,
            ease: "power2.out",
            opacity: 1,
          },
          "sync"
        );
      }
    });

    // Animate title opacity
    cardTitleRef.current.forEach((title, index) => {
      if (title) {
        tl.to(
          title,
          {
            opacity: isFinalStage ? 1 : 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "sync"
        );
      }
    });
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    let scrollTrigger;

    const initScrollAnimation = () => {
      scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const currentProgress = Math.round(self.progress * 100);
          handleMilestoneChange(currentProgress);
        },
        onEnter: () => {
          handleMilestoneChange(0);
        },
        onLeave: () => {
          handleMilestoneChange(100);
        },
        onEnterBack: () => {
          handleMilestoneChange(0);
        },
        onLeaveBack: () => {
          handleMilestoneChange(0);
        },
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initScrollAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [handleMilestoneChange]);

  const addToCardRefs = useCallback((el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  }, []);

  const addToTitleRefs = useCallback((el) => {
    if (el && !cardTitleRef.current.includes(el)) {
      cardTitleRef.current.push(el);
    }
  }, []);

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
            We Partner{" "}
            <PartnersHeaderTitleWithBrand>
              with Brands
            </PartnersHeaderTitleWithBrand>
            <br />
            Who Sell Smarter
          </PartnersHeaderTitle>
          <PartnersDetails $alignitems="flex-end" $justifycontent="flex-end">
            {PARTNER_CARDS.map((data, index) => (
              <PartnersDetailsCards
                $direction="column"
                $justifycontent="space-between"
                key={index}
                ref={addToCardRefs}
                $isFullHeight={cardStates[index]}
              >
                <PartnersDetailsCardsTitle ref={addToTitleRefs}>
                  {data.title}
                </PartnersDetailsCardsTitle>
                <PartnersDetailsCardsDescription>
                  {data.description}
                </PartnersDetailsCardsDescription>
              </PartnersDetailsCards>
            ))}
          </PartnersDetails>
        </PartnersContentContainer>
      </PartnersInnerWrapper>
    </PartnersContainer>
  );
};

export default PartnersSection;

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

const PartnersHeaderTitle = styled.div`
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
  opacity: 0; /* Start with opacity 0 */
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
