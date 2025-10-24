"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/lib/atoms/Button";
import Flex from "@/lib/atoms/Flex";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const NotFound = () => {
  const router = useRouter();
  return (
    <Container $alignitems="center" $justifycontent="center">
      <Navbar />
      <ContentContainer
        $alignitems="center"
        $direction="column"
        $justifycontent="center"
      >
        <HeaderTitle>404</HeaderTitle>
        <SubHeaderBlock $direction="column" $alignitems="center">
          <SubHeaderBlockTitle>Oops! Page not found.</SubHeaderBlockTitle>
          <SubHeaderBlockDescription>
            We couldn't find the page you're looking for. It might have been
            moved or doesn't exist anymore.
          </SubHeaderBlockDescription>
        </SubHeaderBlock>
        <Button variant="secondary" size="xl" onClick={() => router.push("/")}>
          GO HOME
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default NotFound;

const Container = styled(Flex)`
  height: 100vh;
  background: #000;
`;
const ContentContainer = styled(Flex)`
  gap: 24px;
  padding: 56px 16px;
  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 88px;
  font-weight: 400;
  line-height: 85%;
  letter-spacing: -3.52px;
  text-transform: uppercase;
`;

const SubHeaderBlock = styled(Flex)`
  gap: 16px;
`;

const SubHeaderBlockTitle = styled.span`
  color: var(--100, #fff);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.96px;
  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

const SubHeaderBlockDescription = styled.span`
  color: var(--300, #e5e5e5);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  max-width: 532px;
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
