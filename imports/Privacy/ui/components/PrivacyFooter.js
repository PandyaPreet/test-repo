"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const PrivacyFooter = () => {
  return (
    <FooterContainer
      $justifycontent="center"
      $alignitems="center"
      $direction="column"
      $fullwidth
    >
      <CopyrightContent>
        © 2024 Ensure Protect. All Rights Reserved.
      </CopyrightContent>
      <CopyrightContent>
        +1-844-927-7689, or email us at info@ensureprotect.com.
      </CopyrightContent>
    </FooterContainer>
  );
};

export default PrivacyFooter;

const FooterContainer = styled(Flex)`
  padding: 29px 93px;
  align-self: stretch;
  background: var(--500, #1a1919);

  @media (max-width: 768px) {
    padding: 19px 23px;
  }
`;

const CopyrightContent = styled.div`
  color: var(--500, #b2b2b2);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
