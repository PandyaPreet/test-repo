"use client";

import Flex from "@/lib/atoms/Flex";
import PlansImageBanner from "@/components/PlansImageBanner";
import React from "react";
import styled from "styled-components";

const EnterpriseOverviewSection = () => {
  const BANNER_IMAGES = [
    {
      bgImage: "/assets/Enterprise/tailored-banner-1.webp",
    },
    {
      bgImage: "/assets/Enterprise/tailored-banner-2.webp",
    },
    {
      bgImage: "/assets/Enterprise/tailored-banner-3.webp",
    },
  ];

  return (
    <EnterpriseOverviewContainer $fullwidth>
      <EnterpriseOverviewInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <EnterpriseOverviewDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <EnterpriseOverviewDetailsContainer $direction="column" $fullwidth>
            <EnterpriseOverviewTitle>
              <EnterpriseOverviewTitleLight>
                Tailored for{" "}
              </EnterpriseOverviewTitleLight>
              <EnterpriseOverviewTitleDark>
                Enterprise Buyers
              </EnterpriseOverviewTitleDark>
            </EnterpriseOverviewTitle>

            <EnterpriseOverviewDescriptionContainer $direction="column">
              <EnterpriseOverviewDescription>
                Service contracts built for high-volume hardware and connected
                devices
              </EnterpriseOverviewDescription>
              <EnterpriseOverviewDescriptionSeparator />
              <EnterpriseOverviewDescription>
                Coverage for internal systems, field tools, displays, medical
                tech, and more
              </EnterpriseOverviewDescription>
              <EnterpriseOverviewDescriptionSeparator />
              <EnterpriseOverviewDescription>
                Tiered SLAs based on device importance or location
              </EnterpriseOverviewDescription>
              <EnterpriseOverviewDescriptionSeparator />
              <EnterpriseOverviewDescription>
                Flexible group enrollment and asset-based coverage assignment
              </EnterpriseOverviewDescription>
              <EnterpriseOverviewDescriptionSeparator />
              <EnterpriseOverviewDescription>
                Custom claims workflows, escalation paths, and reporting access
              </EnterpriseOverviewDescription>
            </EnterpriseOverviewDescriptionContainer>
          </EnterpriseOverviewDetailsContainer>
        </EnterpriseOverviewDetails>
        <PlansImageBanner banners={BANNER_IMAGES} />
      </EnterpriseOverviewInnerWrapper>
    </EnterpriseOverviewContainer>
  );
};

export default EnterpriseOverviewSection;

const EnterpriseOverviewContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const EnterpriseOverviewInnerWrapper = styled(Flex)`
  flex: 1 0 0;
  @media (max-width: 1194px) {
    /* padding: 64px 0px; */
  }
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const EnterpriseOverviewDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
  @media (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const EnterpriseOverviewDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
  @media (max-width: 980px) {
    max-width: none;
    width: 100%;
    gap: 24px;
  }
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    gap: 20px;
  }
`;

const EnterpriseOverviewTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
  @media (max-width: 1194px) {
    font-size: 36px;
    letter-spacing: -1.08px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.96px;
  }
`;

const EnterpriseOverviewTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const EnterpriseOverviewTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const EnterpriseOverviewDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const EnterpriseOverviewDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 14px;
    max-width: 552px;
    letter-spacing: none;
  }
`;

const EnterpriseOverviewDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;
