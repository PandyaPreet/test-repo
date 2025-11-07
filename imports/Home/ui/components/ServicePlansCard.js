"use client";

import { Fragment, useEffect, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import { useScrollTriggerManagement } from "../../hooks/useScrollTriggerManagement";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

export default function ServicePlansCard({ serviceData }) {
  const cardsRef = useRef([]);
  const { registerTrigger } = useScrollTriggerManagement();
  const triggersRef = useRef([]);
  useEffect(() => {
    const loadGSAP = async () => {
      if (window.innerWidth <= 1024) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Clear any existing triggers
      triggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
      triggersRef.current = [];

      const items = cardsRef.current;

      items.forEach((item, index) => {
        if (!item) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top top+=" + item.getAttribute("animation-item"),
            endTrigger: ".container2",
            end: "top 70%",
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: false,
          },
        });

        tl.to(item, {
          transformOrigin: "center center",
        });

        // Register the ScrollTrigger instance
        if (tl.scrollTrigger) {
          registerTrigger(tl.scrollTrigger);
          triggersRef.current.push(tl.scrollTrigger);
        }
      });

      // Refresh ScrollTrigger after all triggers are created
      ScrollTrigger.refresh();
    };

    loadGSAP();

    return () => {
      triggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
      triggersRef.current = [];
    };
  }, [registerTrigger]);

  return (
    <Fragment>
      <ServicesHeader>
        <ServicesPagination />
        <ServicesHeaderTitle>{serviceData?.title}</ServicesHeaderTitle>
      </ServicesHeader>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <MainContainer className="container">
          <CardsWrapper className="cards" animation="list">
            {serviceData?.cards.map((card, index) => (
              <Card
                key={index}
                className="card"
                animation-item={`${80 + index * 180}px`}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <CardInnerWrapper>
                  <CardPagination></CardPagination>
                  <ServicesDetailsContainer
                    $justifycontent="space-between"
                    $alignitems="center"
                  >
                    <CardContentDiv $direction="column">
                      <CardTitle>{card.title}</CardTitle>
                      <CardDesc>{card.description}</CardDesc>
                    </CardContentDiv>
                    <ServicesImage
                      src={getBackgroundImageUrl(card.icon)}
                      alt="example"
                      height={120}
                      width={120}
                    />
                  </ServicesDetailsContainer>
                </CardInnerWrapper>
              </Card>
            ))}
          </CardsWrapper>
        </MainContainer>
        <Container2 className="container2" />
      </div>
    </Fragment>
  );
}

const Container = styled.div`
  font-family: "Signika Negative", sans-serif;
  font-weight: 300;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--100, #fff);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

const MainContainer = styled(Flex)`
  /* padding-bottom: 25%; */
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 980px) {
    padding-bottom: unset;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
`;

const ServicesDetailsContainer = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Card = styled(Flex)`
  width: 100vw;
  display: flex;
  min-height: 357px;
  padding: 80px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));
  z-index: 999;
  box-sizing: border-box;
  background: var(--100, #fff) !important;

  @media (max-width: 1024px) {
    position: static;
    padding: 24px 16px;
    flex-direction: column;
    gap: 40px;
    min-height: auto;
  }
`;

const Container2 = styled.div`
  width: 100%;
  height: 1px;
  box-sizing: border-box;
`;

const CardInnerWrapper = styled(Flex)`
  width: 100%;
  padding-right: 115px;

  gap: 299px;

  @media (max-width: 1194px) {
    gap: 220px;
  }
  @media (max-width: 1024px) {
    gap: 20px;
    padding-right: 0px;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
    padding-right: 0px;
  }
`;

const CardContentDiv = styled(Flex)`
  padding-right: 160px;
  gap: 64px;

  @media (max-width: 1024px) {
    gap: 16px;
    padding-right: 0px;
  }
  @media (max-width: 768px) {
    gap: 8px;
    padding-right: 0px;
  }
`;

const CardTitle = styled.div`
  color: var(--500, #1a1919);
  font-family: Arial;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
  @media (max-width: 1194px) {
    font-size: 24px;
    max-width: 400px;
  }
`;

const CardDesc = styled.div`
  color: var(--500, #1a1919);

  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 552px;
  }
`;

const CardPagination = styled.div`
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (max-width: 980px) {
    display: none;
  }
`;

const ServicesHeaderTitle = styled.h2`
  color: var(--500, #1a1919);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
`;

const ServicesHeader = styled(Flex)`
  padding: 180px 16px 80px 16px;
  gap: 299px;
  width: 100%;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    gap: 220px;
  }
  @media (max-width: 1024px) {
    padding: 40px 16px;
    gap: 20px;
  }
  @media (max-width: 980px) {
    padding: 40px 16px;
    flex-direction: column;
    gap: 40px;
  }
`;

const ServicesPagination = styled.div`
  color: var(--500, #1a1919);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (max-width: 980px) {
    display: none;
  }
`;

const ServicesImage = styled(Image)`
  @media (max-width: 980px) {
    width: 48px;
    height: 48px;
  }
`;
