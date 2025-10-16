"use client";

import HeaderBrandLogo from "@/components/svg/HeaderBrandLogo";
import Flex from "@/lib/atoms/Flex";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const PrivacyHeader = () => {
  const router = useRouter();
  return (
    <HeaderContainer $justifycontent="space-between" $alignitems="center">
      <div />
      <LogoContainer $direction="column" onClick={() => router.push("/")}>
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
  cursor: pointer;
`;
