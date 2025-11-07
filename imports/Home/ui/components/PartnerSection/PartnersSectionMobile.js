"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

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
    description: "Manage service plans for fleets and infrastructure",
  },
];

const PartnersSectionMobile = ({ partnersData }) => {
  const cards = partnersData.cards;

  return (
    <PartnersContainer>
      <PartnersInnerWrapper $direction="column" $fullwidth>
        <PartnersContentContainer
          $direction="column"
          $alignitems="center"
          $justifycontent="space-between"
        >
          <PartnersHeaderTitle>{partnersData?.title}</PartnersHeaderTitle>

          <PartnersCarousel $alignitems="flex-end" $justifycontent="flex-start">
            {cards.map((card, index) => {
              const cardTitle = card && card.title ? card.title : "";
              const cardDescription =
                card && card.description ? card.description : "";

              return (
                <PartnersDetailsCard
                  $direction="column"
                  $justifycontent="space-between"
                  key={index}
                >
                  <PartnersDetailsTitle>{cardTitle}</PartnersDetailsTitle>
                  <PartnersDetailsDescription>
                    {cardDescription}
                  </PartnersDetailsDescription>
                </PartnersDetailsCard>
              );
            })}
          </PartnersCarousel>
        </PartnersContentContainer>
      </PartnersInnerWrapper>
    </PartnersContainer>
  );
};

export default PartnersSectionMobile;

const PartnersContainer = styled.div`
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(26, 25, 25, 0.05) 0%,
      rgba(26, 25, 25, 0.05) 100%
    ),
    #fff;
  margin: 60px 0;
  overflow-x: visible;
`;

const PartnersInnerWrapper = styled(Flex)`
  margin: 0 auto;
  padding: 24px 16px;
`;

const PartnersContentContainer = styled(Flex)`
  gap: 52px;
  align-self: stretch;
`;

const PartnersHeaderTitle = styled.p`
  color: var(--500, #1a1919);
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.08px;
`;

const PartnersHeaderTitleWithBrand = styled.span`
  color: rgba(26, 25, 25, 0.4);
`;

const PartnersCarousel = styled(Flex)`
  flex-direction: row;
  gap: 16px;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PartnersDetailsCard = styled(Flex)`
  min-width: 267px;
  height: 340px;
  padding: 32px;
  gap: 24px;
  border: 1px dashed rgba(26, 25, 25, 0.4);
  background: #fff;
  scroll-snap-align: start;
  justify-content: space-between;
`;

const PartnersDetailsTitle = styled.div`
  color: #1a1919;
  font-size: 24px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.72px;
`;

const PartnersDetailsDescription = styled.div`
  color: #1a1919;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
