"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const PartnersSection = () => {
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
      description: "Manage service plans for fleets and infrastructure ",
    },
  ];

  return (
    <PartnersContainer>
      <PartnersInnerWrapper
        $direction="column"
        $fullwidth
        $justifycontent="center"
      >
        <PartnersContentContainer $direction="column" $alignitems="center">
          <PartnersHeaderTitle>
            We Partner{" "}
            <PartnersHeaderTitleWithBrand>
              with Brands
            </PartnersHeaderTitleWithBrand>
            <br />
            Who Sell Smarter
          </PartnersHeaderTitle>
          <PartnersDetails $alignitems="center">
            {PARTNER_CARDS.map((data, index) => (
              <PartnersDetailsCards
                $direction="column"
                $justifycontent="space-between"
                key={index}
              >
                <PartnersDetailsCardsTitle>
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
`;

const PartnersContentContainer = styled(Flex)`
  gap: 120px;
  align-self: stretch;
`;

const PartnersHeaderTitle = styled.div`
  color: var(--500, #1a1919);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
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
  letter-spacing: -0.96px;
`;

const PartnersDetailsCards = styled(Flex)`
  height: 340px;
  padding: 32px;
  gap: 24px;
  flex: 1 0 0;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);
  &:hover {
    background: var(--500, #2877b0);
    border: none;

    ${PartnersDetailsCardsTitle} {
      color: var(--100, #fff);
    }
  }
`;

const PartnersDetailsCardsDescription = styled.div`
  color: var(--100, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;
