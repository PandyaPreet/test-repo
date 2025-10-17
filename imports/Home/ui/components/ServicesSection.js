"use client";

import Flex from "@/lib/atoms/Flex";
import { getBackgroundImageUrl } from "@/lib/imageUtils";
import Image from "next/image";
import React, { Fragment } from "react";
import styled from "styled-components";

const ServicesSection = ({ serviceData }) => {
  const cards = serviceData && serviceData.cards ? serviceData.cards : [];

  return (
    <Fragment>
      <ServicesHeader>
        <ServicesPagination />
        <ServicesHeaderTitle>
          <ServicesHeaderTitleDark>
            {serviceData && serviceData.title ? serviceData.title : ""}
          </ServicesHeaderTitleDark>
        </ServicesHeaderTitle>
      </ServicesHeader>

      <ServicesWrapper $direction="column" className="services-container">
        {cards.map((card, idx) => {
          const iconAsset = card && card.icon ? card.icon.asset : null;
          const iconAlt = card && card.icon ? card.icon.alt : "";

          return (
            <ServicesContainer
              key={idx}
              $direction="column"
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
                      {card && card.title ? card.title : ""}
                    </ServicesTitle>
                    <ServicesDescription>
                      {card && card.description ? card.description : ""}
                    </ServicesDescription>
                  </ServicesDetailsContent>

                  {iconAsset && (
                    <ServicesImage
                      src={getBackgroundImageUrl(iconAsset)}
                      height={120}
                      width={120}
                      alt={iconAlt}
                    />
                  )}
                </ServicesDetailsContainer>
              </ServicesInnerWrapper>
            </ServicesContainer>
          );
        })}
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

  & > div:nth-child(odd) {
    background: var(--200, #f2f2f2);
  }

  & > div:nth-child(even) {
    background: var(--100, #fff);
  }
`;

const ServicesContainer = styled(Flex)`
  min-height: 357px;
  height: 100%;
  width: 100%;
  padding: 48px 16px;
  gap: 10px;
  align-self: stretch;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));

  @media (max-width: 980px) {
    padding: 24px 16px;
    flex-direction: column;
    gap: 40px;
    min-height: auto;
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
