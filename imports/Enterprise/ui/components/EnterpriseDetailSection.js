"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const EnterpriseDetailSection = () => {
  const BANNER_IMAGES = [
    {
      bgcolor: "var(--3, rgba(85, 86, 89, 0.03))",
      bgImage: "/assets/plan-banner-1.jpg",
    },
    {
      bgcolor: "var(--8, rgba(85, 86, 89, 0.08))",
      bgImage: "/assets/plan-banner-2.jpg",
    },
    {
      bgcolor: "var(--12, rgba(85, 86, 89, 0.12))",
      bgImage: "/assets/plan-banner-3.jpg",
    },
    {
      bgcolor: "var(--15, rgba(85, 86, 89, 0.15))",
      bgImage: "/assets/plan-banner-4.jpg",
    },
  ];

  return (
    <EnterpriseDetailContainer $fullwidth>
      <EnterpriseDetailInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <EnterpriseDetailBannerContainer $alignitems="center">
          {BANNER_IMAGES.map((banner, index) => (
            <EnterpriseDetailBannerBackground bg={banner.bgcolor} key={index}>
              <EnterpriseDetailBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </EnterpriseDetailBannerImageWrapper>
            </EnterpriseDetailBannerBackground>
          ))}
        </EnterpriseDetailBannerContainer>

        <EnterpriseDetailDetails $direction="column" $justifycontent="flex-end">
          <EnterpriseDetailDetailsContainer $direction="column" $fullwidth>
            <EnterpriseDetailTitle>
              <EnterpriseDetailTitleDark>What </EnterpriseDetailTitleDark>
              <EnterpriseDetailTitleLight>Sets </EnterpriseDetailTitleLight>
              <br />
              <EnterpriseDetailTitleLight>Us </EnterpriseDetailTitleLight>
              <EnterpriseDetailTitleDark>Apart</EnterpriseDetailTitleDark>
            </EnterpriseDetailTitle>

            <EnterpriseDetailDescriptionContainer $direction="column">
              <EnterpriseDetailDescription>
                Centralized claims and service coordination
              </EnterpriseDetailDescription>
              <EnterpriseDetailDescriptionSeparator />
              <EnterpriseDetailDescription>
                White-labeled portals to maintain internal branding
              </EnterpriseDetailDescription>
              <EnterpriseDetailDescriptionSeparator />
              <EnterpriseDetailDescription>
                Reporting dashboards segmented by department, region, or asset
                class
              </EnterpriseDetailDescription>
              <EnterpriseDetailDescriptionSeparator />
              <EnterpriseDetailDescription>
                Customized plans including accidental damage for handheld
                devices, and on-site service for larger installed devices
              </EnterpriseDetailDescription>
            </EnterpriseDetailDescriptionContainer>
          </EnterpriseDetailDetailsContainer>
        </EnterpriseDetailDetails>
      </EnterpriseDetailInnerWrapper>
    </EnterpriseDetailContainer>
  );
};

export default EnterpriseDetailSection;

const EnterpriseDetailContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const EnterpriseDetailInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const EnterpriseDetailDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const EnterpriseDetailDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const EnterpriseDetailTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const EnterpriseDetailTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const EnterpriseDetailTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const EnterpriseDetailDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const EnterpriseDetailDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const EnterpriseDetailDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const EnterpriseDetailBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const EnterpriseDetailBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const EnterpriseDetailBannerBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${EnterpriseDetailBannerImageWrapper} {
      display: block;
    }
  }
`;
