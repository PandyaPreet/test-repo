"use client";

import CTAButtonArrow from "@/components/svg/CTAButtonArrow";
import Flex from "@/lib/atoms/Flex";
import InputLayout from "@/lib/atoms/InputLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  companyName: Yup.string().required("Company name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNo: Yup.string().required("Phone number is required"),
});

function ConnectFormSection() {
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
    <ConnectFormSectionWrapper
      $justifycontent="space-between"
      $alignitems="center"
    >
      <ConnectLeftSection
        $justifycontent="center"
        $direction="column"
        $alignitems="flex-start"
        $fullwidth
      >
        <ConnectLeftContentWrapper
          $direction="column"
          $justifycontent="flex-end"
          $alignitems="center"
        >
          <ConnectTextContent
            $direction="column"
            $justifycontent="center"
            $alignitems="center"
          >
            <ConnectTitle>
              <ConnectTitleDark>Get in touch</ConnectTitleDark>
              <br />
              <ConnectTitleLight>with </ConnectTitleLight>
              <ConnectTitleDark>us</ConnectTitleDark>
            </ConnectTitle>
            <ConnectDescription>
              Whether you're looking to integrate extended service plans,
              request a quote, or learn how our protection programs work, we’d
              love to hear from you. Fill out the form and our team will get
              back to you within one business day.
            </ConnectDescription>
          </ConnectTextContent>
        </ConnectLeftContentWrapper>
        <ConnectContactWrapper>
          <ConnectContactCard $direction="column" $alignitems="flex-start">
            <ConnectContactContent $direction="column" $alignitems="flex-start">
              <ConnectContactTitle>Email</ConnectContactTitle>
              <ConnectContactInfo>
                <Image
                  src="/assets/Connect/Email-icon.svg"
                  alt="Email Icon"
                  width={20}
                  height={24}
                  priority
                />
                <ConnectContactText href="mailto:info@ensureprotect.com">
                  info@ensureprotect.com
                </ConnectContactText>
              </ConnectContactInfo>
            </ConnectContactContent>
          </ConnectContactCard>

          <ConnectContactCardSmall $direction="column" $alignitems="flex-start">
            <ConnectContactContent $direction="column" $alignitems="flex-start">
              <ConnectContactTitle>Phone</ConnectContactTitle>
              <ConnectContactInfo>
                <Image
                  src="/assets/Connect/mobile-phone-icon.svg"
                  alt="Email Icon"
                  width={20}
                  height={24}
                  priority
                />
                <ConnectContactText href="tel:+18449277689">
                  +1 844 927-7689
                </ConnectContactText>
              </ConnectContactInfo>
            </ConnectContactContent>
          </ConnectContactCardSmall>
        </ConnectContactWrapper>
      </ConnectLeftSection>

      <ConnectRightSection
        $justifycontent="center"
        $alignitems="center"
        $fullwidth
      >
        <ConnectFormContainer $direction="column">
          <ConnectFormLayout>
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
          </ConnectFormLayout>
          <ConnectSendButton onClick={handleSubmit(onSubmit)}>
            <ConnectButtonTextWrapper $alignitems="center">
              <ConnectButtonText>SEND MESSAGE</ConnectButtonText>
              <CTAButtonArrow />
            </ConnectButtonTextWrapper>
          </ConnectSendButton>
        </ConnectFormContainer>
      </ConnectRightSection>
    </ConnectFormSectionWrapper>
  );
}

export default ConnectFormSection;

const ConnectFormSectionWrapper = styled(Flex)`
  width: 100%;
  flex-direction: row;
  height: 100vh;
`;

const ConnectLeftSection = styled(Flex)`
  height: 100%;
`;

const ConnectRightSection = styled(Flex)`
  background: #1a1919;
  height: 100%;
  box-sizing: border-box;
`;

const ConnectLeftContentWrapper = styled(Flex)`
  padding: 0 120px 120px 120px;
  flex: 1 0 0;
`;

const ConnectTextContent = styled(Flex)`
  gap: 16px;
`;

const ConnectTitle = styled.h2`
  text-align: center;
  font-family: Arial;
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.44px;
`;

const ConnectTitleDark = styled.span`
  color: var(--500, #1a1919);
`;

const ConnectTitleLight = styled.span`
  color: var(--40, rgba(26, 25, 25, 0.4));
`;

const ConnectDescription = styled(ConnectTitle)`
  color: var(--90, rgba(26, 25, 25, 0.9));
  text-align: center;
  font-size: 14px;
  letter-spacing: -0.42px;
`;

const ConnectContactWrapper = styled(Flex)`
  width: 100%;
  align-items: flex-end;
  gap: 16px;
`;

const ConnectContactCard = styled(Flex)`
  padding: 24px;
  height: 280px;
  gap: 16px;
  border: 1px dashed var(--50, rgba(26, 25, 25, 0.5));
  background: var(--100, #fff);
  flex: 1 0 0;
`;

const ConnectContactCardSmall = styled(ConnectContactCard)`
  height: 240px;
`;

const ConnectContactContent = styled(Flex)`
  gap: 12px;
`;

const ConnectContactTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.6px;
`;

const ConnectContactInfo = styled(Flex)`
  padding: 2px;
  align-items: center;
  gap: 12px;
`;

const ConnectContactText = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.42px;
`;

const ConnectFormContainer = styled(Flex)`
  padding: 32px;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
`;

const ConnectFormLayout = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
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

const ConnectSendButton = styled.button`
  width: 100%;
  background: #ffce00;
  height: 52px;
  min-width: 406px;
  padding: 12px 80px;
  gap: 12px;
  cursor: pointer;
`;

const ConnectButtonTextWrapper = styled(Flex)`
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

const ConnectButtonText = styled.div`
  color: var(--500, #1a1919);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
  text-transform: uppercase;
`;
