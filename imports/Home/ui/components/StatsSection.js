"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const STATS = [
  {
    value: "82+",
    description: "NPS on post-claim satisfaction ",
  },
  {
    value: "5x",
    description:
      "Average increase in attach rates with embedded warranty prompts",
  },
  {
    value: "6w",
    description: "6-week average time to launch new comprehensive programs",
  },
];

const StatsSection = ({ statsData }) => {
  const stats = statsData && statsData.stats ? statsData.stats : STATS;

  return (
    <StatsBlock
      $alignitems="flex-end"
      $justifycontent="space-between"
      $fullwidth
    >
      <StatsTitleWrapper>
        <StatsTitle>
          {statsData && statsData.title ? statsData.title : ""}
        </StatsTitle>
      </StatsTitleWrapper>
      <StatsMetricsWrapper>
        {stats.map((stat, index) => {
          const statValue = stat && stat.value ? stat.value : "";
          const statLabel =
            stat && stat.label
              ? stat.label
              : stat && stat.description
              ? stat.description
              : "";

          return (
            <StatsMetricsBlock $direction="column" key={index}>
              <StatsMetricsValue>{statValue}</StatsMetricsValue>
              <StatsMetricsDescription>{statLabel}</StatsMetricsDescription>
            </StatsMetricsBlock>
          );
        })}
      </StatsMetricsWrapper>
    </StatsBlock>
  );
};

export default StatsSection;

const StatsBlock = styled(Flex)`
  padding: 260px 16px 80px 16px;
  gap: 16px;
  background: var(--100, #fff);
  @media (max-width: 1194px) {
    padding: 120px 16px 80px 16px;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 64px 0px;
    padding: 0px 16px;
  }
`;

const StatsTitleWrapper = styled(Flex)`
  gap: 10px;
  flex: 1 0 0;
`;

const StatsTitle = styled.div`
  max-width: 134px;
  width: 100%;
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  min-width: 314px;
  letter-spacing: -0.42px;
  @media (max-width: 980px) {
    br {
      display: none;
    }
  }
`;

const StatsMetricsWrapper = styled(Flex)`
  gap: 16px;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StatsMetricsBlock = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  flex: 1;
  border-right: 1px solid var(--10, rgba(26, 25, 25, 0.1));
  &:last-child {
    border-right: none;
  }
  @media (max-width: 980px) {
    border-right: none;
    border-bottom: 1px solid var(--10, rgba(26, 25, 25, 0.1));
    &:last-child {
      border-bottom: none;
    }
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
    font-size: 48px;
  }
`;

const StatsMetricsDescription = styled.div`
  color: var(--100, #4e4b4b);
  font-size: 16px;
  font-style: normal;
  min-height: 39px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
  @media (max-width: 1194px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
