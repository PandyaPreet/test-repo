"use client";

import ClientFooter from "@/components/ClientFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/lib/atoms/Button";
import Flex from "@/lib/atoms/Flex";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import styled from "styled-components";

const ThankYou = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Navbar />
      <Container $alignitems="center" $justifycontent="center">
        <ContentContainer
          $alignitems="center"
          $direction="column"
          $justifycontent="center"
          $fullwidth
        >
          <SubHeaderBlock $direction="column" $alignitems="center">
            <SubHeaderBlockTitle>Thank you!</SubHeaderBlockTitle>
            <SubHeaderBlockDescription>
              We will contact you as soon as possible!
            </SubHeaderBlockDescription>
          </SubHeaderBlock>
          <Button
            variant="secondary"
            size="xl"
            onClick={() => router.push("/")}
          >
            GO HOME
          </Button>
        </ContentContainer>
      </Container>
      <ClientFooter />
    </Fragment>
  );
};

export default ThankYou;

const Container = styled(Flex)`
  height: 100vh;
  background: linear-gradient(
      0deg,
      var(--40, rgba(26, 25, 25, 0.4)) 0%,
      var(--40, rgba(26, 25, 25, 0.4)) 100%
    ),
    url("32227c7bbe01ee580dd161c9a758939a48d06d24.webp") lightgray 50% / cover
      no-repeat;
`;
const ContentContainer = styled(Flex)`
  gap: 32px;
  padding: 56px 16px;
  ${Button} {
    min-height: 52px;
  }
  @media (max-width: 375px) {
    padding: 40px 16px;
    ${Button} {
      width: 100%;
    }
  }
`;

const SubHeaderBlock = styled(Flex)`
  gap: 14px;
`;

const SubHeaderBlockTitle = styled.h2`
  color: var(--100, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -1.44 px;
  @media (max-width: 550px) {
    font-size: 40px;
  }
`;

const SubHeaderBlockDescription = styled.p`
  color: var(--100, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  max-width: 532px;
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
