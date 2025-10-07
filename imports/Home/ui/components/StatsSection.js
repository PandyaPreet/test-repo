"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const STATS = [
  {
    value: "82+",
    description: "NPS on post-claim satisfaction",
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

const StatsSection = () => {
  return (
    <StatsBlock
      $alignitems="flex-end"
      $justifycontent="space-between"
      $fullwidth
    >
      <StatsTitleWrapper $alignitems="center">
        <StatsTitle>
          Performance Backed <br /> by Data
        </StatsTitle>
      </StatsTitleWrapper>
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
    </StatsBlock>
  );
};

export default StatsSection;

const StatsBlock = styled(Flex)`
  padding: 260px 16px 80px 16px;
  gap: 16px;
  background: var(--100, #fff);
`;

const StatsTitleWrapper = styled(Flex)`
  gap: 10px;
  flex: 1 0 0;
`;

const StatsTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const StatsMetricsWrapper = styled(Flex)`
  gap: 16px;
  flex-shrink: 0;
`;

const StatsMetricsBlock = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 0 0;
  border-right: 1px solid var(--10, rgba(26, 25, 25, 0.1));
  &:last-child {
    border-right: none;
  }
`;

const StatsMetricsValue = styled.div`
  color: var(--500, #1a1919);
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.88px;
`;

const StatsMetricsDescription = styled.div`
  color: var(--100, #4e4b4b);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;
