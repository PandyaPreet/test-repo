"use client";

import Flex from "@/lib/atoms/Flex";

import Image from "next/image";
import React, { Fragment } from "react";

import styled from "styled-components";

const SERVICE_FEATURES = [
  {
    id: "1/4",
    title: "Flexible Program Design",
    description:
      "Modular extended service plans tailored by product category, sales channel, and lifecycle stage / Support for power tools, consumer electronics, smart devices, home tech, appliances, and more",
    bgcolor: "var(--200, #f2f2f2)",
    icon: "/assets/services-icon-1.svg",
  },
  {
    id: "2/4",
    title: "Revenue-Sharing Business Models",
    description:
      "Drive margin with reserve participation, renewal campaigns, and upsell opportunities / Analytics dashboards that show plan performance and profit potential",

    bgcolor: "var(--100, #FFF)",
    icon: "/assets/services-icon-2.svg",
  },
  {
    id: "3/4",
    title: "End-to-End Service Procedures & Fulfillment",
    description:
      "We manage claims, customer support, repairs, and logistics under your brand / Reduce overhead while improving NPS and response time",
    bgcolor: "var(--200, #f2f2f2)",
    icon: "/assets/services-icon-3.svg",
  },
  {
    id: "4/4",
    title: "Embedded Digital Experiences",
    description:
      "Add warranty offers to checkout, portals, or mobile apps / Our APIs and no-code modules simplify integration into any digital ecosystem",
    bgcolor: "var(--100, #FFF)",
    icon: "/assets/services-icon-4.svg",
  },
];

const ServicesSection = () => {
  return (
    <Fragment>
      <ServicesHeader>
        <ServicesPagination>0/4</ServicesPagination>
        <ServicesHeaderTitle>
          A Smarter{" "}
          <ServicesHeaderTitleDark>
            Approach <br /> to Service Plans
          </ServicesHeaderTitleDark>
        </ServicesHeaderTitle>
      </ServicesHeader>

      <div style={{ display: "block", height: "100vh" }}>
        <ServicesWrapper $direction="column" className="services-container">
          {SERVICE_FEATURES.map((service, index) => (
            <ServicesContainer
              key={index}
              $direction="column"
              bgcolor={service.bgcolor}
              $justifycontent="center"
              className="services-cards"
            >
              <ServicesInnerWrapper>
                <ServicesPagination>{service.id}</ServicesPagination>
                <ServicesDetailsContainer
                  $justifycontent="space-between"
                  $alignitems="center"
                >
                  <ServicesDetailsContent $direction="column">
                    <ServicesTitle>{service.title}</ServicesTitle>
                    <ServicesDescription>
                      {service.description}
                    </ServicesDescription>
                  </ServicesDetailsContent>
                  <Image
                    src={service.icon}
                    height={120}
                    width={120}
                    alt="some icon"
                  />
                </ServicesDetailsContainer>
              </ServicesInnerWrapper>
            </ServicesContainer>
          ))}
        </ServicesWrapper>
      </div>
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
`;

const ServicesContainer = styled(Flex)`
  height: 100%;
  max-height: 281px;
  padding: 48px 16px;
  gap: 10px;
  align-self: stretch;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));
  background: ${({ bgcolor }) => bgcolor};
  position: sticky;
  position: -webkit-sticky;

  &:nth-child(1) {
    top: calc(8rem + 0 * 8rem);
    z-index: 1;
  }
  &:nth-child(2) {
    top: calc(8rem + 1 * 8rem);
    z-index: 2;
  }
  &:nth-child(3) {
    top: calc(8rem + 2 * 8rem);
    z-index: 3;
  }
  &:nth-child(4) {
    top: calc(8rem + 3 * 8rem);
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
