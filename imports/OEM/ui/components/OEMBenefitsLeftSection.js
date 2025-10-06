"use client";
import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function OEMBenefitsLeftSection() {
  const BENEFITS_BANNER_IMAGES = [
    {
      bgColor: "var(--3, rgba(85, 86, 89, 0.03))",
      bgImage: "/assets/OEM/benefits-banner-left-1.png",
    },
    {
      bgColor: "var(--8, rgba(85, 86, 89, 0.08))",
      bgImage: "/assets/OEM/benefits-banner-left-2.png",
    },
    {
      bgColor: "var(--12, rgba(85, 86, 89, 0.12))",
      bgImage: "/assets/OEM/benefits-banner-left-3.png",
    },
    {
      bgColor: "var(--15, rgba(85, 86, 89, 0.15))",
      bgImage: "/assets/OEM/benefits-banner-left-4.png",
    },
  ];
  return (
    <OEMBenefitsLeftSectionContainer $fullwidth>
      <OEMBenefitsLeftSectionInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <OEMBenefitsLeftSectionBannerContainer $alignitems="center">
          {BENEFITS_BANNER_IMAGES.map((banner, index) => (
            <OEMBenefitsLeftSectionBannerBackground
              bg={banner.bgColor}
              key={index}
            >
              <OEMBenefitsLeftSectionBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </OEMBenefitsLeftSectionBannerImageWrapper>
            </OEMBenefitsLeftSectionBannerBackground>
          ))}
        </OEMBenefitsLeftSectionBannerContainer>

        <OEMBenefitsLeftSectionDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <OEMBenefitsLeftSectionDetailsContainer
            $direction="column"
            $fullwidth
          >
            <OEMBenefitsLeftSectionHeader $direction="column">
              <OEMBenefitsLeftSectionTitle>
                <OEMBenefitsLeftSectionTitleDark>
                  Revenue
                </OEMBenefitsLeftSectionTitleDark>
                <OEMBenefitsLeftSectionTitleLight>
                  {" "}
                  Without
                </OEMBenefitsLeftSectionTitleLight>
                <br />
                <OEMBenefitsLeftSectionTitleDark>
                  Rework
                </OEMBenefitsLeftSectionTitleDark>
              </OEMBenefitsLeftSectionTitle>
            </OEMBenefitsLeftSectionHeader>

            <OEMBenefitsLeftSectionDescriptionContainer $direction="column">
              <OEMBenefitsLeftSectionDescription>
                Program monetization through reserve sharing or fixed pricing
              </OEMBenefitsLeftSectionDescription>
              <OEMBenefitsLeftSectionDescriptionSeparator />
              <OEMBenefitsLeftSectionDescription>
                Upsell options during product activation or after-sale campaigns
              </OEMBenefitsLeftSectionDescription>
              <OEMBenefitsLeftSectionDescriptionSeparator />
              <OEMBenefitsLeftSectionDescription>
                Seamless experience integration with your CRM or support flows
              </OEMBenefitsLeftSectionDescription>
              <OEMBenefitsLeftSectionDescriptionSeparator />
            </OEMBenefitsLeftSectionDescriptionContainer>
          </OEMBenefitsLeftSectionDetailsContainer>
        </OEMBenefitsLeftSectionDetails>
      </OEMBenefitsLeftSectionInnerWrapper>
    </OEMBenefitsLeftSectionContainer>
  );
}

export default OEMBenefitsLeftSection;

/* ---------- Styled Components ---------- */

const OEMBenefitsLeftSectionContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const OEMBenefitsLeftSectionInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const OEMBenefitsLeftSectionDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const OEMBenefitsLeftSectionDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const OEMBenefitsLeftSectionHeader = styled(Flex)`
  gap: 16px;
`;

const OEMBenefitsLeftSectionTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const OEMBenefitsLeftSectionSubTitle = styled.span``;

const OEMBenefitsLeftSectionTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const OEMBenefitsLeftSectionTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const OEMBenefitsLeftSectionDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const OEMBenefitsLeftSectionDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  ${({ $uppercase }) => $uppercase && `text-transform: uppercase;`}
`;

const OEMBenefitsLeftSectionDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const OEMBenefitsLeftSectionBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const OEMBenefitsLeftSectionBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const OEMBenefitsLeftSectionBannerBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${OEMBenefitsLeftSectionBannerImageWrapper} {
      display: block;
    }
  }
`;
