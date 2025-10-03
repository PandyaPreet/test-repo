"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

function AboutUsCardsSection() {
  return (
    <CardsContainer $direction={"column"}>
      <CardsWrapper $justifycontent={"space-between"} $alignitems={"center"}>
        <DashedBlocks>
          <FirstBlock></FirstBlock>
        </DashedBlocks>
      </CardsWrapper>
    </CardsContainer>
  );
}

export default AboutUsCardsSection;

const CardsContainer = styled(Flex)`
  width: 100%;
  padding: 80px 0px;
  gap: 10px;
  align-self: stretch;
`;

const CardsWrapper = styled(Flex)`
  height: 600px;
`;

const DashedBlocks = styled(Flex)`
  gap: 16px;
`;
const FirstBlock = styled.div`
  width: 104px;
  height: 100%; /* make it stretch vertically */
  border-right: 1px dashed rgba(26, 25, 25, 0.5);
  border-left: 1px dashed rgba(26, 25, 25, 0.5);
  background: #fff;
`;
