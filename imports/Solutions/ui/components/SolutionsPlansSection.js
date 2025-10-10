"use client";

import Flex from "@/lib/atoms/Flex";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const SOLUTIONS_PLANS = [
  {
    id: "1/4",
    title: "Retail & Ecommerce Protection Plans",
    description:
      "Add white-labeled coverage at checkout, online or in-store / Offer repair, replacement, or maintenance plans across SKUs / Ideal for laptops, smartphones, power tools, appliances, and firearms",
    icon: "/assets/solutions-icon-1.svg",
  },
  {
    id: "2/4",
    title: "OEM & Embedded Programs",
    description:
      "Bundle electronics service protection directly with the product / Configure plan length, pricing tiers, and coverage triggers / Support nationwide SKUs with regional regulatory compliance",
    icon: "/assets/solutions-icon-2.svg",
  },
  {
    id: "3/4",
    title: "Enterprise & Group Coverage",
    description:
      "Manage extended warranty and service plans for large-scale deployments / Ideal for schools, SMBs, healthcare, and government technology / Add SLAs, fleet-level coverage, and centralized claim visibility",
    icon: "/assets/solutions-icon-3.svg",
  },
  {
    id: "4/4",
    title: "ISP & IoT Device Protection",
    description:
      "Offer protection for connected devices and infrastructure / Embed activation in onboarding flows or user portals / Cover all your hand held and desk top devices, plus, routers, home security",
    icon: "/assets/solutions-icon-4.svg",
  },
];

const SolutionsPlansSection = () => {
  return (
    <SolutionsPlansWrapper
      $direction="column"
      className="solutions-plans-container"
    >
      {SOLUTIONS_PLANS.map((plan) => (
        <SolutionsPlansContainer
          key={plan.id}
          $direction="column"
          bgcolor={plan.bgcolor}
          $justifycontent="center"
        >
          <SolutionsPlansInnerWrapper>
            <SolutionsPlansPagination>{plan.id}</SolutionsPlansPagination>
            <SolutionsPlansDetailsContainer
              $justifycontent="space-between"
              $alignitems="center"
            >
              <SolutionsPlansDetailsContent $direction="column">
                <SolutionsPlansTitle>{plan.title}</SolutionsPlansTitle>
                <SolutionsPlansDescription>
                  {plan.description}
                </SolutionsPlansDescription>
              </SolutionsPlansDetailsContent>
              <Image
                src={plan.icon}
                height={120}
                width={120}
                alt={`${plan.title} icon`}
              />
            </SolutionsPlansDetailsContainer>
          </SolutionsPlansInnerWrapper>
        </SolutionsPlansContainer>
      ))}
    </SolutionsPlansWrapper>
  );
};

export default SolutionsPlansSection;

const SolutionsPlansWrapper = styled(Flex)`
  gap: 0px;

  & > :nth-child(odd) {
    background-color: var(--100, #fff);
  }

  & > :nth-child(even) {
    background-color: var(--200, #f2f2f2);
  }
`;

const SolutionsPlansContainer = styled(Flex)`
  height: 100%;
  min-height: 357px;
  width: 100%;
  padding: 48px 16px;
  gap: 10px;
  align-self: stretch;
  border-top: 1px dashed var(--40, rgba(26, 25, 25, 0.4));
  background: ${({ bgcolor }) => bgcolor};
`;

const SolutionsPlansInnerWrapper = styled(Flex)`
  padding-right: 115px;
  gap: 299px;
  align-self: stretch;
`;

const SolutionsPlansDetailsContainer = styled(Flex)`
  flex: 1 0 0;
`;

const SolutionsPlansDetailsContent = styled(Flex)`
  padding-right: 160px;
  gap: 64px;
  flex: 1 0 0;
`;

const SolutionsPlansTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
`;

const SolutionsPlansDescription = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const SolutionsPlansPagination = styled.div`
  color: var(--500, #1a1919);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
