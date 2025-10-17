"use client";

import MessageIcon from "@/components/svg/MessageIcon";
import PhoneIcon from "@/components/svg/PhoneIcon";
import { Button } from "@/lib/atoms/Button";
import ButtonIcon from "@/lib/atoms/ButtonIcon";
import Flex from "@/lib/atoms/Flex";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import styled from "styled-components";
import InputLayout from "@/lib/atoms/InputLayout";

const formSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  companyName: Yup.string().required("Comany name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNo: Yup.string().required("Phone number is required"),
});

const ConnectFormSectionMobile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

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
                <ConnectInfo href="mailto:info@ensureprotect.com">
                  info@ensureprotect.com
                </ConnectInfo>
              </ContentContainer>
            </InfoContainer>
            <InfoContainer>
              <Label>Phone</Label>
              <ContentContainer $alignitems="center">
                <PhoneIcon />
                <ConnectInfo href="tel:+18449277689">
                  +1 (844) 927-7689
                </ConnectInfo>
              </ContentContainer>
            </InfoContainer>
          </ConnectInfoWrapper>
        </ConnectInfoContainer>
      </ConnectSectionContainer>
      <ConnectFormContainer $direction="column">
        <InputLayout
          {...register("fullName")}
          dark
          placeholder="FULL NAME"
          message={errors.fullName?.message || ""}
          isError={!!errors.fullName}
        />

        <InputLayout
          {...register("companyName")}
          dark
          placeholder="COMPANY NAME"
          message={errors.companyName?.message || ""}
          isError={!!errors.companyName}
        />

        <InputLayout
          {...register("email")}
          dark
          placeholder="BUSINESS EMAIL"
          message={errors.email?.message || ""}
          isError={!!errors.email}
        />

        <InputLayout
          {...register("phoneNo")}
          dark
          placeholder="PHONE NUMBER"
          message={errors.phoneNo?.message || ""}
          isError={!!errors.phoneNo}
        />

        <InputLayout
          {...register("messgae")}
          dark
          placeholder="MESSAGE / ADDITIONAL DETAILS"
        />
        <Button size="xl" onClick={handleSubmit(onSubmit)}>
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

const ConnectTitle = styled.h2`
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

const ConnectInfo = styled(Link)`
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
