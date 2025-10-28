"use client";

import Flex from "@/lib/atoms/Flex";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RetailResultSection = ({ data = {} }) => {
  const {
    title = "",
    description = "",
    pillarsHeader = "",
    pillarsTitle = [],
  } = data || {};

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const cardContainerRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const animationRef = useRef(null);
  const titleRef = useRef(null);

  // Maintain the same animation shape (4 columns expected)
  const cardHeights = {
    0: [164, 107, 44, 86],
    25: [264, 207, 144, 186],
    50: [360, 296, 227, 273],
    75: [480, 440, 360, 420],
    90: [640, 640, 640, 640],
    100: [640, 640, 640, 640],
  };

  useEffect(() => {
    const count = Array.isArray(pillarsTitle) ? pillarsTitle.length : 0;
    cardRefs.current = cardRefs.current.slice(0, count);
  }, [pillarsTitle]);

  const handleMilestoneChange = useCallback((progress) => {
    if (animationRef.current) animationRef.current.kill();

    const getInterpolatedHeights = (currentProgress) => {
      const milestones = [0, 25, 50, 75, 100];
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
        const startHeight =
          cardHeights[startMilestone]?.[index] ??
          cardHeights[startMilestone]?.[0] ??
          0;
        const endHeight =
          cardHeights[endMilestone]?.[index] ??
          cardHeights[endMilestone]?.[0] ??
          0;
        return startHeight + (endHeight - startHeight) * rangeProgress;
      });
    };

    const targetHeights = getInterpolatedHeights(progress);
    const isFinalStage = progress >= 90;

    const tl = gsap.timeline();
    animationRef.current = tl;

    cardRefs.current.forEach((card, index) => {
      if (card) {
        tl.to(
          card,
          {
            height: targetHeights[index] || 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "sync"
        );
      }
    });

    if (cardContainerRef.current) {
      tl.to(
        cardContainerRef.current,
        {
          gap: isFinalStage ? "0px" : "8px",
          duration: 0.6,
          ease: "power2.out",
        },
        "sync"
      );
    }

    if (cardWrapperRef.current) {
      tl.to(
        cardWrapperRef.current,
        {
          background: isFinalStage
            ? "var(--500, #2877B0)"
            : "var(--5, rgba(26, 25, 25, 0.05))",
          duration: 0.6,
          ease: "power2.out",
        },
        "sync"
      );
    }

    if (titleRef.current) {
      tl.to(
        titleRef.current,
        {
          color: isFinalStage ? "#fff" : "#1a1919",
          duration: 0.6,
          ease: "power2.out",
        },
        "sync"
      );
    }
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
        onEnter: () => handleMilestoneChange(0),
        onLeave: () => handleMilestoneChange(100),
        onEnterBack: () => handleMilestoneChange(0),
        onLeaveBack: () => handleMilestoneChange(0),
      });
    };

    const timeoutId = setTimeout(initScrollAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      if (scrollTrigger) scrollTrigger.kill();
      if (animationRef.current) animationRef.current.kill();
    };
  }, [handleMilestoneChange]);

  const addToRefs = useCallback((el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  }, []);

  return (
    <div style={{ height: "200vh" }} ref={sectionRef}>
      <ResultContainer $justifycontent="center" $alignitems="center">
        <ResultHeaderContainer
          $direction="column"
          $justifycontent="center"
          $alignitems="center"
          $fullwidth
        >
          <ResultContent>
            <ResultTitle>
              <Dark>{title}</Dark>
            </ResultTitle>
            <ResultDescription>{description}</ResultDescription>
          </ResultContent>
        </ResultHeaderContainer>

        <ResultAside
          $direction="column"
          $justifycontent="space-between"
          $fullwidth
          ref={cardWrapperRef}
        >
          <AsideTop
            $direction="column"
            $alignitems="center"
            $justifycontent="center"
          >
            <AsideTitle ref={titleRef}>{pillarsHeader}</AsideTitle>
          </AsideTop>

          <AsideBottom
            $justifycontent="flex-start"
            $alignitems="flex-end"
            $fullwidth
            ref={cardContainerRef}
          >
            {(Array.isArray(pillarsTitle) ? pillarsTitle : []).map((p, idx) => (
              <FeatureCard role="listitem" ref={addToRefs} key={p?._key || idx}>
                <CardText>{p?.cardTitle || ""}</CardText>
              </FeatureCard>
            ))}
          </AsideBottom>
        </ResultAside>
      </ResultContainer>
    </div>
  );
};

export default RetailResultSection;

/* ===== styles (unchanged) ===== */

const ResultContainer = styled(Flex)`
  width: 100%;
  height: 100vh;
  align-self: stretch;
  background: var(--100, #fff);
  gap: 0;
  position: sticky;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const ResultHeaderContainer = styled(Flex)`
  gap: 24px;
  padding: 0 24px;
`;

const ResultContent = styled.div`
  max-width: 403px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
`;

const ResultTitle = styled.div`
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -1.44px;
  text-align: center;
  font-weight: 400;
`;

const Light = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-weight: 400;
`;

const Dark = styled.span`
  color: var(--500, #1a1919);
  font-weight: 400;
`;

const ResultDescription = styled.div`
  color: var(--90, rgba(26, 25, 25, 0.9));
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ResultAside = styled(Flex)`
  min-height: 100%;
  background: var(--5, rgba(26, 25, 25, 0.05));
  gap: 16px;
  transition: background-color 0.6s ease-out;
`;

const AsideTop = styled(Flex)`
  width: 100%;
  margin: auto;
`;

const AsideTitle = styled.h2`
  margin: 0;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #1a1919;
  text-align: center;
  font-weight: 400;
`;

const AsideBottom = styled(Flex)`
  gap: 8px;
  flex-wrap: nowrap;
  transition: gap 0.6s ease-out;
`;

const FeatureCard = styled.div`
  width: 100%;
  background: #fff;
  border: 1px dashed rgba(26, 25, 25, 0.5);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  height: 0px;
  will-change: height;
  transform: translateZ(0);
`;

const CardText = styled.div`
  width: 100%;
  letter-spacing: -0.03em;
  line-height: 100%;
  color: rgba(26, 25, 25, 0.9);
  font-size: 20px;
  opacity: 0;
  animation: fadeIn 0.5s ease-out 0.3s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
