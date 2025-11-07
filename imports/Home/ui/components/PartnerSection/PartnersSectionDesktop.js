"use client";

import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  useMemo,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PartnersContainer = ({ children, ...props }) => (
  <div
    style={{
      height: "200vh",
      width: "100%",
      background:
        "linear-gradient(0deg, rgba(26, 25, 25, 0.05) 0%, rgba(26, 25, 25, 0.05) 100%), #fff",
    }}
    {...props}
  >
    {children}
  </div>
);

const PartnersInnerWrapper = ({ children }) => (
  <div
    style={{
      margin: "0 auto",
      padding: "200px 16px 16px 16px",
      height: "100vh",
      position: "sticky",
      top: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const PartnersContentContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "120px",
      height: "100%",
    }}
  >
    {children}
  </div>
);

const PartnersHeaderTitle = ({ children }) => (
  <div
    style={{
      color: "#1a1919",
      textAlign: "center",
      fontSize: "48px",
      fontWeight: 400,
      lineHeight: "100%",
      letterSpacing: "-1.44px",
      margin: "auto",
    }}
  >
    {children}
  </div>
);

const PartnersDetails = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      gap: "16px",
      width: "100%",
    }}
  >
    {children}
  </div>
);

const PartnersDetailsCards = ({ children, isFullHeight, ...props }) => (
  <div
    style={{
      height: "0px",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "24px",
      flex: "1 0 0",
      border: "1px dashed rgba(26, 25, 25, 0.5)",
      background: "#fff",
      willChange: "height",
      transform: "translateZ(0)",
      overflow: "hidden",
      opacity: 0,
      transition: isFullHeight
        ? "background 0.3s ease, border-color 0.3s ease"
        : "none",
      cursor: isFullHeight ? "pointer" : "default",
    }}
    onMouseEnter={(e) => {
      if (isFullHeight) {
        e.currentTarget.style.background = "#2877b0";
        e.currentTarget.style.borderColor = "transparent";
        const title = e.currentTarget.querySelector("[data-title]");
        if (title) title.style.color = "#fff";
      }
    }}
    onMouseLeave={(e) => {
      if (isFullHeight) {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.borderColor = "rgba(26, 25, 25, 0.5)";
        const title = e.currentTarget.querySelector("[data-title]");
        if (title) title.style.color = "#1a1919";
      }
    }}
    {...props}
  >
    {children}
  </div>
);

const PartnersDetailsCardsTitle = ({ children, ...props }) => (
  <div
    data-title
    style={{
      color: "#1a1919",
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "100%",
      maxWidth: "220px",
      letterSpacing: "-0.96px",
      opacity: 0,
    }}
    {...props}
  >
    {children}
  </div>
);

const PartnersDetailsCardsDescription = ({ children }) => (
  <div
    style={{
      color: "#fff",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "120%",
      letterSpacing: "-0.42px",
    }}
  >
    {children}
  </div>
);

function PartnersSectionDesktop({ partnersData, registerTrigger }) {
  const cards = partnersData?.cards?.slice(0, 4) || [
    { _key: "1", title: "Card 1", description: "Description 1" },
    { _key: "2", title: "Card 2", description: "Description 2" },
    { _key: "3", title: "Card 3", description: "Description 3" },
    { _key: "4", title: "Card 4", description: "Description 4" },
  ];

  const sectionRef = useRef(null);
  const cardRefs = useRef([null, null, null, null]);
  const cardTitleRef = useRef([null, null, null, null]);
  const animationRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const lastProgressRef = useRef(-1);

  const [cardStates, setCardStates] = useState([false, false, false, false]);

  // Memoize card heights to prevent recreating object
  const cardHeights = useMemo(
    () => ({
      0: [0, 0, 0, 0],
      25: [0, 0, 0, 0],
      50: [161, 116, 41, 83],
      75: [308, 265, 216, 296],
      100: [340, 340, 340, 340],
    }),
    []
  );

  const getInterpolatedHeights = useCallback(
    (currentProgress) => {
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
        const s = cardHeights[start][idx];
        const e = cardHeights[end][idx];
        return s + (e - s) * t;
      });
    },
    [cardHeights]
  );

  const handleMilestoneChange = useCallback(
    (progress) => {
      // Prevent redundant calls with same progress value
      const roundedProgress = Math.round(progress);
      if (lastProgressRef.current === roundedProgress) return;
      lastProgressRef.current = roundedProgress;

      if (animationRef.current) animationRef.current.kill();

      const targetHeights = getInterpolatedHeights(roundedProgress);
      const isFinalStage = roundedProgress >= 75;
      const fullHeight = 340;

      const newCardStates = targetHeights.map(
        (h) => Math.round(h) >= fullHeight
      );

      // Only update state if there's an actual change
      setCardStates((prev) => {
        const hasChanged = newCardStates.some((v, i) => v !== prev[i]);
        return hasChanged ? newCardStates : prev;
      });

      const tl = gsap.timeline();
      animationRef.current = tl;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        tl.to(
          card,
          {
            height: targetHeights[i],
            duration: 0.6,
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
          { opacity: isFinalStage ? 1 : 0, duration: 0.6, ease: "power2.out" },
          "sync"
        );
      });
    },
    [getInterpolatedHeights]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    // Clean up any existing ScrollTrigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = Math.round(self.progress * 100);
        handleMilestoneChange(progress);
      },
      onEnter: () => handleMilestoneChange(0),
      onLeave: () => handleMilestoneChange(100),
      onEnterBack: () => handleMilestoneChange(100),
      onLeaveBack: () => handleMilestoneChange(0),
    });

    scrollTriggerRef.current = st;

    if (registerTrigger) {
      registerTrigger(st);
    }

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      lastProgressRef.current = -1;
    };
  }, [handleMilestoneChange, registerTrigger]);

  return (
    <PartnersContainer ref={sectionRef}>
      <PartnersInnerWrapper>
        <PartnersContentContainer>
          <PartnersHeaderTitle>
            {partnersData?.title || "We Partner with Brands Who Sell Smarter"}
          </PartnersHeaderTitle>

          <PartnersDetails>
            {cards.map((data, index) => (
              <PartnersDetailsCards
                key={data._key ?? index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                isFullHeight={cardStates[index]}
              >
                <PartnersDetailsCardsTitle
                  ref={(el) => {
                    cardTitleRef.current[index] = el;
                  }}
                >
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
}

export default PartnersSectionDesktop;
