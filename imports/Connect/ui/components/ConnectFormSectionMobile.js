"use client";

import MessageIcon from "@/components/svg/MessageIcon";
import PhoneIcon from "@/components/svg/PhoneIcon";
import { Button } from "@/lib/atoms/Button";
import ButtonIcon from "@/lib/atoms/ButtonIcon";
import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";

const ConnectFormSectionMobile = () => {
  return (
    <Flex $direction="column">
      <ConnectSectionContainer $direction="column">
        <ConnectHeaderContainer $direction="column">
          <ConnectTitle>Get in touch with us</ConnectTitle>
          <ConnectDescription>
            Whether you're looking to integrate extended service plans, request
            a quote, or learn how our protection programs work, we’d love to
            hear from you. Fill out the form and our team will get back to you
            within one business day
          </ConnectDescription>
        </ConnectHeaderContainer>
        <ConnectInfoContainer $direction="column">
          <ConnectInfoWrapper $direction="column">
            <InfoContainer>
              <Label>Email</Label>
              <ContentContainer $alignitems="center">
                <MessageIcon />
                <ConnectInfo>info@ensureprotect.com</ConnectInfo>
              </ContentContainer>
            </InfoContainer>
            <InfoContainer>
              <Label>Phone</Label>
              <ContentContainer $alignitems="center">
                <PhoneIcon />
                <ConnectInfo>+1 (844) 927-7689</ConnectInfo>
              </ContentContainer>
            </InfoContainer>
          </ConnectInfoWrapper>
        </ConnectInfoContainer>
      </ConnectSectionContainer>
      <ConnectFormContainer $direction="column">
        <ConnectFormGroup>
          <ConnectFormInput type="text" placeholder="FULL NAME" />
        </ConnectFormGroup>

        <ConnectFormGroup>
          <ConnectFormInput type="text" placeholder="COMPANY NAME" />
        </ConnectFormGroup>

        <ConnectFormGroup>
          <ConnectFormInput type="text" placeholder="BUSINESS EMAIL" />
        </ConnectFormGroup>

        <ConnectFormGroup>
          <ConnectFormInput type="text" placeholder="PHONE NUMBER" />
        </ConnectFormGroup>

        <ConnectFormGroup>
          <ConnectFormInput
            type="text"
            placeholder="MESSAGE / ADDITIONAL DETAILS"
          />
        </ConnectFormGroup>
        <Button size="xl">
          Send Message <ButtonIcon />
        </Button>
      </ConnectFormContainer>
    </Flex>
  );
};

export default ConnectFormSectionMobile;

const ConnectSectionContainer = styled(Flex)`
  align-self: stretch;
  padding: 40px 0px;
`;

const ConnectHeaderContainer = styled(Flex)`
  padding: 24px 16px;
  gap: 16px;
  align-self: stretch;
`;

const ConnectTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.96px;
`;

const ConnectDescription = styled.div`
  color: var(--300, #292828);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const ConnectInfoContainer = styled(Flex)`
  padding: 0 16px;
  gap: 24px;
  align-self: stretch;
`;

const ConnectInfoWrapper = styled(Flex)`
  gap: -68px;
  align-self: stretch;
`;

const InfoContainer = styled(Flex)`
  display: flex;
  height: 184px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);
`;

const Label = styled.div`
  color: var(--500, #1a1919);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

const ContentContainer = styled(Flex)`
  padding: 2px;
  gap: 12px;
`;

const ConnectInfo = styled.div`
  color: var(--90, rgba(26, 25, 25, 0.9));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const ConnectFormContainer = styled(Flex)`
  padding: 80px 16px;
  gap: 32px;
  align-self: stretch;
  background: #1a1919;
`;

const ConnectFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const ConnectFormInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
  padding: 13px 16px 13px 0;
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.42px;
  outline: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
`;
