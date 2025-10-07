"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const PlansImageBanner = ({ banners }) => {
  return (
    <PlansBannerContainer $alignitems="center">
      {banners.map((banner, index) => (
        <PlansBannerImagesBackground bg={banner.bgcolor} key={index}>
          <PlansBannerImageWrapper>
            <Image
              src={banner.bgImage}
              width={509}
              height={760}
              style={{ height: "100%" }}
              alt="plans banner image"
            />
          </PlansBannerImageWrapper>
        </PlansBannerImagesBackground>
      ))}
    </PlansBannerContainer>
  );
};

export default PlansImageBanner;

const PlansBannerContainer = styled(Flex)`
  flex: 1 0 0;
`;

const PlansBannerImageWrapper = styled.div`
  height: 100%;
  display: none;
`;

const PlansBannerImagesBackground = styled.div`
  height: 760px;
  flex: 1 0 0;
  background: ${({ bg }) => bg};

  &:hover {
    ${PlansBannerImageWrapper} {
      display: block;
    }
  }
`;
