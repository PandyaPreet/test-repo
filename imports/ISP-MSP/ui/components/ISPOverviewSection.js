"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ISPOverviewSection = () => {
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
    <ISPOverviewContainer $fullwidth>
      <ISPOverviewInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <ISPOverviewBannerContainer $alignitems="center">
          {BANNER_IMAGES.map((banner, index) => (
            <ISPOverviewBannerBackground bg={banner.bgcolor} key={index}>
              <ISPOverviewBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </ISPOverviewBannerImageWrapper>
            </ISPOverviewBannerBackground>
          ))}
        </ISPOverviewBannerContainer>

        <ISPOverviewDetails $direction="column" $justifycontent="flex-end">
          <ISPOverviewDetailsContainer $direction="column" $fullwidth>
            <ISPOverviewTitle>
              <ISPOverviewTitleDark>Ideal For:</ISPOverviewTitleDark>
            </ISPOverviewTitle>

            <ISPOverviewDescriptionContainer $direction="column">
              <ISPOverviewDescription>
                Wi-Fi and broadband providers
              </ISPOverviewDescription>
              <ISPOverviewDescriptionSeparator />
              <ISPOverviewDescription>
                Smart home platforms
              </ISPOverviewDescription>
              <ISPOverviewDescriptionSeparator />
              <ISPOverviewDescription>
                Connected device resellers and MVNO
              </ISPOverviewDescription>
              <ISPOverviewDescriptionSeparator />
              <ISPOverviewDescription>
                White-label tech or hardware bundles
              </ISPOverviewDescription>
            </ISPOverviewDescriptionContainer>
          </ISPOverviewDetailsContainer>
        </ISPOverviewDetails>
      </ISPOverviewInnerWrapper>
    </ISPOverviewContainer>
  );
};

export default ISPOverviewSection;

/* -------------------- Styled Components -------------------- */

const ISPOverviewContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ISPOverviewInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const ISPOverviewDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const ISPOverviewDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const ISPOverviewTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const ISPOverviewTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ISPOverviewTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ISPOverviewDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const ISPOverviewDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ISPOverviewDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const ISPOverviewBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const ISPOverviewBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const ISPOverviewBannerBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${ISPOverviewBannerImageWrapper} {
      display: block;
    }
  }
`;
