"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React, { Fragment } from "react";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Fragment>
      <ServicesHeader>
        <ServicesPagination />
        <ServicesHeaderTitle>
          A Smarter{" "}
          <ServicesHeaderTitleDark>
            Approach to Service Plans
          </ServicesHeaderTitleDark>
        </ServicesHeaderTitle>
      </ServicesHeader>

      <ServicesWrapper $direction="column" className="services-container">
        {/* Card 1 */}
        <ServicesContainer
          $direction="column"
          bgcolor="var(--200, #f2f2f2)"
          $justifycontent="center"
          className="services-cards"
        >
          <ServicesInnerWrapper>
            <ServicesPagination />
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle>Flexible Program Design</ServicesTitle>
                <ServicesDescription>
                  Modular extended service plans tailored by product category,
                  sales channel, and lifecycle stage / Support for power tools,
                  consumer electronics, smart devices, home tech, appliances,
                  and more
                </ServicesDescription>
              </ServicesDetailsContent>
              <ServicesImage
                src="/assets/services-icon-1.svg"
                height={120}
                width={120}
                alt="some icon"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>

        {/* Card 2 */}
        <ServicesContainer
          $direction="column"
          bgcolor="var(--100, #FFF)"
          $justifycontent="center"
          className="services-cards"
        >
          <ServicesInnerWrapper>
            <ServicesPagination />
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle>Revenue-Sharing Business Models</ServicesTitle>
                <ServicesDescription>
                  Drive margin with reserve participation, renewal campaigns,
                  and upsell opportunities / Analytics dashboards that show plan
                  performance and profit potential
                </ServicesDescription>
              </ServicesDetailsContent>
              <ServicesImage
                src="/assets/services-icon-2.svg"
                height={120}
                width={120}
                alt="some icon"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>

        {/* Card 3 */}
        <ServicesContainer
          $direction="column"
          bgcolor="var(--200, #f2f2f2)"
          $justifycontent="center"
          className="services-cards"
        >
          <ServicesInnerWrapper>
            <ServicesPagination />
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle>
                  End-to-End Service Procedures & Fulfillment
                </ServicesTitle>
                <ServicesDescription>
                  We manage claims, customer support, repairs, and logistics
                  under your brand / Reduce overhead while improving NPS and
                  response time
                </ServicesDescription>
              </ServicesDetailsContent>
              <ServicesImage
                src="/assets/services-icon-3.svg"
                height={120}
                width={120}
                alt="some icon"
              />
            </ServicesDetailsContainer>
          </ServicesInnerWrapper>
        </ServicesContainer>

        {/* Card 4 */}
        <ServicesContainer
          $direction="column"
          bgcolor="var(--100, #FFF)"
          $justifycontent="center"
          className="services-cards"
        >
          <ServicesInnerWrapper>
            <ServicesPagination />
            <ServicesDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <ServicesDetailsContent $direction="column">
                <ServicesTitle>Embedded Digital Experiences</ServicesTitle>
                <ServicesDescription>
                  Add warranty offers to checkout, portals, or mobile apps / Our
                  APIs and no-code modules simplify integration into any digital
                  ecosystem
                </ServicesDescription>
              </ServicesDetailsContent>
              <ServicesImage
                src="/assets/services-icon-4.svg"
                height={120}
                width={120}
                alt="some icon"
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
  width: 100%;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    gap: 220px;
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

const ServicesHeaderTitle = styled.div`
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  @media (max-width: 1194px) {
    font-size: 36px;
  }
`;

const ServicesHeaderTitleDark = styled.div`
  color: var(--500, #1a1919);
`;

const ServicesWrapper = styled(Flex)`
  gap: 0px;
  width: 100%;
  flex-direction: column;
`;

const ServicesContainer = styled(Flex)`
  width: 100%;
  padding: 48px 16px;
  gap: 10px;
  align-self: stretch;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));
  background: ${({ bgcolor }) => bgcolor};

  @media (max-width: 980px) {
    padding: 24px 16px;
    flex-direction: column;
    gap: 40px;
  }
`;

const ServicesInnerWrapper = styled(Flex)`
  padding-right: 115px;
  gap: 299px;
  align-self: stretch;
  @media (max-width: 1194px) {
    gap: 220px;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
    padding-right: 0px;
  }
`;

const ServicesDetailsContainer = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 20px;
  }
`;

const ServicesDetailsContent = styled(Flex)`
  padding-right: 160px;
  gap: 64px;
  flex: 1 0 0;
  @media (max-width: 980px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 8px;
    padding-right: 0px;
  }
`;

const ServicesTitle = styled.div`
  color: var(--500, #1a1919);
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

const ServicesDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 552px;
  }
`;

const ServicesImage = styled(Image)`
  @media (max-width: 980px) {
    width: 48px;
    height: 48px;
  }
`;
