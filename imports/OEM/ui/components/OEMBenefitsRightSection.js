"use client";
import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function OEMBenefitsRightSection() {
  const BENEFITS_BANNER_IMAGES = [
    {
      bgColor: "var(--3, rgba(85, 86, 89, 0.03))",
      bgImage: "/assets/OEM/benefits-banner-1.png",
    },
    {
      bgColor: "var(--8, rgba(85, 86, 89, 0.08))",
      bgImage: "/assets/OEM/benefits-banner-2.png",
    },
    {
      bgColor: "var(--12, rgba(85, 86, 89, 0.12))",
      bgImage: "/assets/OEM/benefits-banner-3.png",
    },
    {
      bgColor: "var(--15, rgba(85, 86, 89, 0.15))",
      bgImage: "/assets/OEM/benefits-banner-4.png",
    },
  ];
  return (
    <PartnersPlansContiner $fullwidth>
      <PartnersPlansInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <PartnersPlansDetails $direction="column" $justifycontent="flex-end">
          <PartnersPlansDetailsContainer $direction="column" $fullwidth>
            <PartnersDetailsHeader $direction="column">
              <PartnersPlansDetailsTitle>
                <PartnersPlansDetailsTitleDark>
                  Our OEM
                </PartnersPlansDetailsTitleDark>
                <PartnersPlansDetailsTitleLight>
                  {" "}
                  Offering
                </PartnersPlansDetailsTitleLight>
                <br />
                <PartnersPlansDetailsTitleDark>
                  Includes:
                </PartnersPlansDetailsTitleDark>
              </PartnersPlansDetailsTitle>
            </PartnersDetailsHeader>

            <PartnersPlansDetailsDescriptionContainer $direction="column">
              <PartnersPlansDetailsDescription>
                Embedded coverage activated during registration or app
                onboarding
              </PartnersPlansDetailsDescription>
              <PartnersPlansDetailsDescriptionSeparator />
              <PartnersPlansDetailsDescription>
                White-labeled warranty extensions and accidental damage
                protection
              </PartnersPlansDetailsDescription>
              <PartnersPlansDetailsDescriptionSeparator />
              <PartnersPlansDetailsDescription>
                Technical and repair support built into your customer experience
                ecosystem
              </PartnersPlansDetailsDescription>
              <PartnersPlansDetailsDescriptionSeparator />
              <PartnersPlansDetailsDescription>
                Options for bundled support + protection SKUs sold through your
                channels
              </PartnersPlansDetailsDescription>
            </PartnersPlansDetailsDescriptionContainer>
          </PartnersPlansDetailsContainer>
        </PartnersPlansDetails>

        <PartnersPlansBannerContainer $alignitems="center">
          {BENEFITS_BANNER_IMAGES.map((banner, index) => (
            <PartnersPlansBannerImagesBackground
              bg={banner.bgColor}
              key={index}
            >
              <PartnersPlansBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </PartnersPlansBannerImageWrapper>
            </PartnersPlansBannerImagesBackground>
          ))}
        </PartnersPlansBannerContainer>
      </PartnersPlansInnerWrapper>
    </PartnersPlansContiner>
  );
}

export default OEMBenefitsRightSection;

const PartnersPlansContiner = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const PartnersPlansInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const PartnersPlansDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const PartnersPlansDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const PartnersDetailsHeader = styled(Flex)`
  gap: 16px;
`;

const PartnersPlansDetailsTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const PartnersPlansDetailsSubTitle = styled.span``;

const PartnersPlansDetailsTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const PartnersPlansDetailsTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const PartnersPlansDetailsDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const PartnersPlansDetailsDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  ${({ $uppercase }) => $uppercase && `text-transform: uppercase;`}
`;

const PartnersPlansDetailsDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const PartnersPlansBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const PartnersPlansBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const PartnersPlansBannerImagesBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${PartnersPlansBannerImageWrapper} {
      display: block;
    }
  }
`;
