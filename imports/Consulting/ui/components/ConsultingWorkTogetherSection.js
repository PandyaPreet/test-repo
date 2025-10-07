"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ConsultingWorkTogetherSection = () => {
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
    <ConsultingWorkTogetherContainer $fullwidth>
      <ConsultingWorkTogetherInnerWrapper
        $justifycontent="space-between"
        $alignitems="center"
      >
        <ConsultingWorkTogetherDetails
          $direction="column"
          $justifycontent="flex-end"
        >
          <ConsultingWorkTogetherDetailsContainer
            $direction="column"
            $fullwidth
          >
            <ConsultingWorkTogetherTitle>
              <ConsultingWorkTogetherTitleDark>
                Let’s Work Together{" "}
              </ConsultingWorkTogetherTitleDark>
              <ConsultingWorkTogetherTitleLight>
                to Offer
              </ConsultingWorkTogetherTitleLight>
            </ConsultingWorkTogetherTitle>

            <ConsultingWorkTogetherDescriptionContainer $direction="column">
              <ConsultingWorkTogetherDescription>
                Co-branded or white-labeled protection programs
              </ConsultingWorkTogetherDescription>
              <ConsultingWorkTogetherDescriptionSeparator />
              <ConsultingWorkTogetherDescription>
                Custom service plan design for end clients
              </ConsultingWorkTogetherDescription>
              <ConsultingWorkTogetherDescriptionSeparator />
              <ConsultingWorkTogetherDescription>
                Revenue-sharing opportunities
              </ConsultingWorkTogetherDescription>
              <ConsultingWorkTogetherDescriptionSeparator />
              <ConsultingWorkTogetherDescription>
                Fulfillment, tech, and compliance included
              </ConsultingWorkTogetherDescription>
            </ConsultingWorkTogetherDescriptionContainer>
          </ConsultingWorkTogetherDetailsContainer>
        </ConsultingWorkTogetherDetails>

        <ConsultingWorkTogetherBannerContainer $alignitems="center">
          {BANNER_IMAGES.map((banner, index) => (
            <ConsultingWorkTogetherBannerBackground
              bg={banner.bgcolor}
              key={index}
            >
              <ConsultingWorkTogetherBannerImageWrapper>
                <Image
                  src={banner.bgImage}
                  width={509}
                  height={760}
                  style={{ height: "100%" }}
                  alt="plans banner image"
                />
              </ConsultingWorkTogetherBannerImageWrapper>
            </ConsultingWorkTogetherBannerBackground>
          ))}
        </ConsultingWorkTogetherBannerContainer>
      </ConsultingWorkTogetherInnerWrapper>
    </ConsultingWorkTogetherContainer>
  );
};

export default ConsultingWorkTogetherSection;

const ConsultingWorkTogetherContainer = styled(Flex)`
  gap: 10px;
  background: var(--100, #fff);
`;

const ConsultingWorkTogetherInnerWrapper = styled(Flex)`
  flex: 1 0 0;
`;

const ConsultingWorkTogetherDetails = styled(Flex)`
  width: 580px;
  padding: 0 72px 80px 16px;
  align-self: stretch;
`;

const ConsultingWorkTogetherDetailsContainer = styled(Flex)`
  max-width: 455px;
  gap: 40px;
`;

const ConsultingWorkTogetherTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
  margin: 0;
`;

const ConsultingWorkTogetherTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ConsultingWorkTogetherTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ConsultingWorkTogetherDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const ConsultingWorkTogetherDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ConsultingWorkTogetherDescriptionSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));
`;

const ConsultingWorkTogetherBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const ConsultingWorkTogetherBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const ConsultingWorkTogetherBannerBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${ConsultingWorkTogetherBannerImageWrapper} {
      display: block;
    }
  }
`;
