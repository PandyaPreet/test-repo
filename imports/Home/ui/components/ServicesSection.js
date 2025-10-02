"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const [areFirstThreeSticked, setAreFirstThreeSticked] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Increased duration for slower animations
      easing: "ease-in-out-cubic", // Smooth easing function
      once: false, // Animation can happen every time element comes into view
      mirror: true, // Animate out when scrolling past
      offset: 100, // Start animation a bit earlier
      delay: 100, // Small delay for smoother sequencing
    });

    // Refresh AOS when DOM changes
    AOS.refresh();
  }, []);

  useLayoutEffect(() => {
    const TOL = 15; // tolerance for "is sticky" checks (px)
    const LOCK_MARGIN = 40; // extra margin before locking (prevents early lock)
    const UNLOCK_MARGIN = 80; // how far to scroll back up before unlocking

    const checkStickyCards = () => {
      if (
        !card1Ref.current ||
        !card2Ref.current ||
        !card3Ref.current ||
        !card4Ref.current
      )
        return;

      const card1Rect = card1Ref.current.getBoundingClientRect();
      const card2Rect = card2Ref.current.getBoundingClientRect();
      const card3Rect = card3Ref.current.getBoundingClientRect();
      const card4Rect = card4Ref.current.getBoundingClientRect();

      const top1 = 8 * 16;
      const top2 = 16 * 16;
      const top3 = 24 * 16;
      const top4 = 32 * 16;

      const card1Sticky = Math.abs(card1Rect.top - top1) < TOL;
      const card2Sticky = Math.abs(card2Rect.top - top2) < TOL;
      const card3Sticky = Math.abs(card3Rect.top - top3) < TOL;
      const card4Sticky = Math.abs(card4Rect.top - top4) < TOL;

      // ---- Hysteresis logic ----
      if (!areFirstThreeSticked) {
        // Lock only when 1–3 are sticky and 4 is *clearly* not yet sticky
        const fourNotYetSticky = card4Rect.top - top4 > LOCK_MARGIN;
        if (card1Sticky && card2Sticky && card3Sticky && card4Sticky) {
          setAreFirstThreeSticked(true);
        }
      } else {
        // Unlock only after user scrolls back up far enough
        const scrolledUpEnough = card1Rect.top > top1 + UNLOCK_MARGIN;
        if (scrolledUpEnough) {
          setAreFirstThreeSticked(false);
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkStickyCards();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkStickyCards();

    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areFirstThreeSticked]);

  // Optional: Log when the state changes
  useEffect(() => {
    if (areFirstThreeSticked) {
      console.log("First 3 cards are now sticked!");
    }
  }, [areFirstThreeSticked]);

  return (
    <Fragment>
      <ServicesHeader>
        <ServicesPagination data-aos="fade-up" data-aos-delay="100">
          0/4
        </ServicesPagination>
        <ServicesHeaderTitle data-aos="fade-up" data-aos-delay="200">
          A Smarter{" "}
          <ServicesHeaderTitleDark>
            Approach <br /> to Service Plans
          </ServicesHeaderTitleDark>
        </ServicesHeaderTitle>
      </ServicesHeader>

      <ServicesWrapper
        $direction="column"
        className="services-container"
        $isFirstThreeSticked={areFirstThreeSticked}
      >
        {/* Card 1 */}
        <ServicesContainer
          ref={card1Ref}
          $direction="column"
          bgcolor="var(--200, #f2f2f2)"
          $justifycontent="center"
          className="services-cards"
          $isFirstThreeSticked={areFirstThreeSticked}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <ServicesInnerWrapper>
            <ServicesPagination>1/4</ServicesPagination>
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  Flexible Program Design
                </ServicesTitle>
                <ServicesDescription
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="800"
                >
                  Modular extended service plans tailored by product category,
                  sales channel, and lifecycle stage / Support for power tools,
                  consumer electronics, smart devices, home tech, appliances,
                  and more
                </ServicesDescription>
              </ServicesDetailsContent>
              <Image
                src="/assets/services-icon-1.svg"
                height={120}
                width={120}
                alt="some icon"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="800"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>

        {/* Card 2 */}
        <ServicesContainer
          ref={card2Ref}
          $direction="column"
          bgcolor="var(--100, #FFF)"
          $justifycontent="center"
          className="services-cards"
          $isFirstThreeSticked={areFirstThreeSticked}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <ServicesInnerWrapper>
            <ServicesPagination>2/4</ServicesPagination>
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  Revenue-Sharing Business Models
                </ServicesTitle>
                <ServicesDescription
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  Drive margin with reserve participation, renewal campaigns,
                  and upsell opportunities / Analytics dashboards that show plan
                  performance and profit potential
                </ServicesDescription>
              </ServicesDetailsContent>
              <Image
                src="/assets/services-icon-2.svg"
                height={120}
                width={120}
                alt="some icon"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="800"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>

        {/* Card 3 */}
        <ServicesContainer
          ref={card3Ref}
          $direction="column"
          bgcolor="var(--200, #f2f2f2)"
          $justifycontent="center"
          className="services-cards"
          $isFirstThreeSticked={areFirstThreeSticked}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <ServicesInnerWrapper>
            <ServicesPagination>3/4</ServicesPagination>
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  End-to-End Service Procedures & Fulfillment
                </ServicesTitle>
                <ServicesDescription
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  We manage claims, customer support, repairs, and logistics
                  under your brand / Reduce overhead while improving NPS and
                  response time
                </ServicesDescription>
              </ServicesDetailsContent>
              <Image
                src="/assets/services-icon-3.svg"
                height={120}
                width={120}
                alt="some icon"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="800"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>

        {/* Card 4 */}
        <ServicesContainer
          ref={card4Ref}
          $direction="column"
          bgcolor="var(--100, #FFF)"
          $justifycontent="center"
          className="services-cards"
          $isFirstThreeSticked={areFirstThreeSticked}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <ServicesInnerWrapper>
            <ServicesPagination>4/4</ServicesPagination>
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="800"
                >
                  Embedded Digital Experiences
                </ServicesTitle>
                <ServicesDescription
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  Add warranty offers to checkout, portals, or mobile apps / Our
                  APIs and no-code modules simplify integration into any digital
                  ecosystem
                </ServicesDescription>
              </ServicesDetailsContent>
              <Image
                src="/assets/services-icon-4.svg"
                height={120}
                width={120}
                alt="some icon"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="800"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>
      </ServicesWrapper>
    </Fragment>
  );
};

export default ServicesSection;

const ServicesHeader = styled(Flex)`
  padding: 180px 16px 80px 16px;
  gap: 299px;
  background: var(--100, #fff);
`;

const ServicesPagination = styled.div`
  color: var(--500, #1a1919);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const ServicesHeaderTitle = styled.div`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 48px */
  letter-spacing: -1.44px;
`;

const ServicesHeaderTitleDark = styled.div`
  color: var(--500, #1a1919);
`;

const ServicesWrapper = styled(Flex)`
  gap: 0px;
  height: 100vh;
  top: 200px;
  position: ${({ $isFirstThreeSticked }) =>
    $isFirstThreeSticked ? "relative !important" : "unset"};
`;

const ServicesContainer = styled(Flex)`
  height: 100%;
  max-height: 281px;
  width: 100%;
  padding: 48px 16px;
  gap: 10px;
  align-self: stretch;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));
  background: ${({ bgcolor }) => bgcolor};
  position: ${({ $isFirstThreeSticked }) =>
    $isFirstThreeSticked ? "absolute !important" : "sticky"};

  &:nth-child(1) {
    top: ${({ $isFirstThreeSticked }) =>
      $isFirstThreeSticked ? "calc(8rem + 0 * 8rem)" : "calc(8rem + 0 * 8rem)"};
    z-index: 1;
  }
  &:nth-child(2) {
    top: ${({ $isFirstThreeSticked }) =>
      $isFirstThreeSticked ? "calc(8rem + 1 * 8rem)" : "calc(8rem + 1 * 8rem)"};
    z-index: 2;
  }
  &:nth-child(3) {
    top: ${({ $isFirstThreeSticked }) =>
      $isFirstThreeSticked ? "calc(8rem + 2 * 8rem)" : "calc(8rem + 2 * 8rem)"};
    z-index: 3;
  }
  &:nth-child(4) {
    top: ${({ $isFirstThreeSticked }) =>
      $isFirstThreeSticked ? "calc(8rem + 3 * 8rem)" : "calc(8rem + 3 * 8rem)"};
    z-index: 4;
  }
`;

const ServicesInnerWrapper = styled(Flex)`
  padding-right: 115px;
  gap: 299px;
  align-self: stretch;
`;

const ServicesDetailsContainer = styled(Flex)`
  flex: 1 0 0;
`;

const ServicesDetailsContent = styled(Flex)`
  padding-right: 160px;
  gap: 64px;
  flex: 1 0 0;
`;

const ServicesTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
`;

const ServicesDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
