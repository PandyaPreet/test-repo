"use client";

import React from "react";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";

const EnterpriseCardSection = () => {
  return (
    <EnterpriseCardSectionContainer $direction="column">
      <EnterpriseCardContainer
        $direction="column"
        $justifycontent="center"
        $alignitems="center"
      >
        <EnterpriseCardWrapper
          $direction="column"
          $justifycontent="center"
          $alignitems="center"
          $bgcolor="var(--5, rgba(26, 25, 25, 0.05))"
          $variant="light"
        >
          <EnterpriseCardContent $direction="column">
            <Flex $direction="column">
              <Flex style={{ gap: "10px" }}>
                <EnterpriseCardTitleEyebrow>
                  Simplify
                </EnterpriseCardTitleEyebrow>
                <EnterpriseCardTitle>Support</EnterpriseCardTitle>
                <EnterpriseCardTitleEyebrow>Across</EnterpriseCardTitleEyebrow>
              </Flex>
              <EnterpriseCardTitle>
                Departments <br /> and Regions
              </EnterpriseCardTitle>
            </Flex>

            <EnterpriseCardDescriptionContainer $direction="column">
              <EnterpriseCardDescriptionText>
                Whether your team operates regionally or nationwide, our
                platform offers centralized control with localized support.
                Device replacements, on-site, depot and mail-in repairs, and
                logistics are managed through trusted vendors—backed by
                real-time performance data
              </EnterpriseCardDescriptionText>
            </EnterpriseCardDescriptionContainer>
          </EnterpriseCardContent>
        </EnterpriseCardWrapper>
      </EnterpriseCardContainer>
    </EnterpriseCardSectionContainer>
  );
};

export default EnterpriseCardSection;

const EnterpriseCardSectionContainer = styled(Flex)`
  align-self: stretch;
`;

const EnterpriseCardContainer = styled(Flex)`
  height: auto;
  padding: 80px 0;
  gap: 10px;
  align-self: stretch;
  background: var(--100, #fff);
`;

const EnterpriseCardWrapper = styled(Flex)`
  min-height: 480px;
  width: 650px;
  padding: 0 80px;
  flex: 1 0 0;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: ${({ $bgcolor }) => $bgcolor};
`;

const EnterpriseCardContent = styled(Flex)`
  gap: 40px;
  align-self: stretch;
`;

const EnterpriseCardTitleEyebrow = styled.h2`
  margin: 0;
  color: var(--40, rgba(26, 25, 25, 0.4));
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const EnterpriseCardTitle = styled.h3`
  margin: 0;
  color: var(--500, #1a1919);
  font-family: Arial, sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const EnterpriseCardDescriptionContainer = styled(Flex)`
  gap: 12px;
  align-self: stretch;
`;

const EnterpriseCardDescriptionText = styled.p`
  margin: 0;
  color: var(--500, #1a1919);
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;
