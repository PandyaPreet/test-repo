"use client";

import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const PlansImageBanner = ({ banners, activeIndex = 0 }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const visibleIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  return (
    <PlansBannerContainer $alignitems="center">
      {banners.map((banner, index) => (
        <PlansBannerImagesBackground
          key={index}
          $isActive={index === visibleIndex}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <PlansBannerImageWrapper
            className={index === visibleIndex ? "active" : ""}
          >
            <StyledImage
              src={banner.bgImage}
              width={509}
              height={760}
              alt="plans banner image"
              priority
            />
          </PlansBannerImageWrapper>
        </PlansBannerImagesBackground>
      ))}
    </PlansBannerContainer>
  );
};

export default PlansImageBanner;

const PlansBannerContainer = styled(Flex)`
  flex: 1;
  overflow: hidden;

  @media (max-width: 980px) {
    width: 100%;
  }

  & > :nth-child(1) {
    background: var(--3, rgba(85, 86, 89, 0.03));
  }
  & > :nth-child(2) {
    background: var(--8, rgba(85, 86, 89, 0.08));
  }
  & > :nth-child(3) {
    background: var(--12, rgba(85, 86, 89, 0.12));
  }
  & > :nth-child(4) {
    background: var(--15, rgba(85, 86, 89, 0.15));
  }
`;

const PlansBannerImagesBackground = styled.div`
  height: 760px;
  flex: ${({ $isActive }) => ($isActive ? "5" : "1")};
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (max-width: 980px) {
    width: 100%;
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 309px;
  }
`;

const PlansBannerImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: none;

  &.active {
    display: flex;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1194px) {
    width: 100%;
  }
`;
