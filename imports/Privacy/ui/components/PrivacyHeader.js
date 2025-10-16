"use client";

import HeaderBrandLogo from "@/components/svg/HeaderBrandLogo";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const PrivacyHeader = () => {
  return (
    <HeaderContainer $justifycontent="space-between" $alignitems="center">
      <div />
      <LogoContainer $direction="column">
        <HeaderBrandLogo />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default PrivacyHeader;

const HeaderContainer = styled(Flex)`
  padding: 8px;
  align-self: stretch;
  background: #fff;
  width: 100%;
`;

const LogoContainer = styled(Flex)`
  width: 90%;
  padding: 8px;
  gap: 10px;
`;
