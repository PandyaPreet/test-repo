"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const STATS = [
  {
    value: "40+",
    description:
      "Years in warranty, logistics, insurance,and service protection plans",
  },
  {
    value: "50",
    description: "State licensing and compliance coverage",
  },
  {
    value: "4",
    description:
      "Time zone, claims, call, and fulfillment centers optimized for NPS and speed",
  },
];

function AboutUsStatsSection() {
  return (
    <StatsBlock
      $alignitems="flex-end"
      $justifycontent="space-between"
      $fullwidth
    >
      <StatsTitleWrapper $alignitems="center">
        <StatsTitle></StatsTitle>
      </StatsTitleWrapper>
      <AboutStatsMetricsWrapper>
        <StatsMetricsTitleWrapper>
          <StatsMetricsTitle>Proven Experience</StatsMetricsTitle>
          <StatsMetricsDescription>
            We believe service plans should increase trust, not <br />
            frustration.
          </StatsMetricsDescription>
        </StatsMetricsTitleWrapper>
        <StatsMetricsWrapper $alignitems="center">
          {STATS.map((stat, index) => (
            <StatsMetricsBlock $direction="column" key={index}>
              <StatsMetricsValue>{stat.value}</StatsMetricsValue>
              <StatsMetricsDescription>
                {stat.description}
              </StatsMetricsDescription>
            </StatsMetricsBlock>
          ))}
        </StatsMetricsWrapper>
      </AboutStatsMetricsWrapper>
    </StatsBlock>
  );
}

export default AboutUsStatsSection;

const StatsBlock = styled(Flex)`
  gap: 16px;
  padding: 160px 0 80px 0;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    padding: 120px 16px 40px 16px;
  }
  @media (max-width: 980px) {
    padding: 40px 16px 0 16px;
  }
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;

const StatsTitleWrapper = styled(Flex)`
  gap: 10px;
  flex: 1 0 0;
  width: 100%;
  min-width: 330px;
  @media (max-width: 1194px) {
    display: none;
  }
`;

const StatsTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const AboutStatsMetricsWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 64px;
  @media (max-width: 1194px) {
    width: 100%;
  }
  @media (max-width: 980px) {
    gap: 24px;
  }
`;

const StatsMetricsTitleWrapper = styled(Flex)`
  flex-direction: column;
  gap: 12px;
`;

const StatsMetricsTitle = styled.div`
  color: var(--500, #1a1919);
  font-family: Arial;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const StatsMetricsDescription = styled.div`
  color: var(--500, #1a1919);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  padding-right: 40px;
  min-height: 39px;

  @media (max-width: 1194px) {
    font-size: 14px;
  }
  @media (max-width: 980px) {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StatsMetricsWrapper = styled(Flex)`
  gap: 16px;
  flex-shrink: 0;
  @media (max-width: 1194px) {
    max-width: 932px;
    align-self: end;
  }

  @media (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StatsMetricsBlock = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 0 0;
  border-right: 1px solid var(--10, rgba(26, 25, 25, 0.1));
  &:last-child {
    border-right: none;
  }

  @media (max-width: 980px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    padding: 8px 0px;
    border-right: none;
    border-bottom: 1px solid var(--10, rgba(26, 25, 25, 0.1));

    &:last-child {
      border-bottom: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 0px;
    padding: 12px 0px;
  }
`;

const StatsMetricsValue = styled.div`
  color: var(--500, #1a1919);
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.88px;
  @media (max-width: 1194px) {
    font-size: 64px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
