"use client";

import Flex from "@/lib/atoms/Flex";
import React, { Fragment } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { markdown } from "./privacyPolicyMarkdown";

const PrivacyPolicyContent = () => {
  return (
    <Fragment>
      <HeaderContainer $direction="column" $alignitems="center">
        <HeaderContentWrapper $direction="column">
          <HeaderTitle>Ensure Protect Privacy Policy</HeaderTitle>
          <HeaderSubtitle>
            Last updated: January, 2024 <br /> This Privacy Policy describes Our
            policies and procedures on the collection, use and disclosure of
            Your information when You use the Service and tells You about Your
            privacy rights and how the law protects You. We use Your Personal
            data to provide and improve the Service. By using the Service, You
            agree to the collection and use of information in accordance with
            this Privacy Policy.
          </HeaderSubtitle>
        </HeaderContentWrapper>
      </HeaderContainer>

      <PolicyContainer $direction="column" $alignitems="center">
        <MarkdownWrapper>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </MarkdownWrapper>
      </PolicyContainer>
    </Fragment>
  );
};

export default PrivacyPolicyContent;

const HeaderContainer = styled(Flex)`
  padding: 100px 20px 56px 20px;
  gap: 80px;
  align-self: stretch;
  background: var(--500, #2877b0);

  @media (max-width: 768px) {
    padding: 50px 10px 25px 10px;
  }
`;

const HeaderContentWrapper = styled(Flex)`
  width: 100%;
  max-width: 1000px;
  gap: 24px;
  border-bottom: 2px solid var(--500, #2877b0);
`;

const HeaderTitle = styled.h1`
  color: var(--100, #fff);
  font-size: 88px;
  font-style: normal;
  font-weight: 400;
  line-height: 85%;
  letter-spacing: -3.52px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 44px;
  }
`;

const HeaderSubtitle = styled.p`
  color: var(--100, #fff);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.36px;
`;

const PolicyContainer = styled(Flex)`
  padding: 40px 0 84px 0;
  gap: 40px;
  align-self: stretch;
`;

const MarkdownWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px 84px;
  color: #1a1919;

  /* Headings */
  h1 {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 100%;
    margin: 0 0 16px 0;
    color: #1a1919;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 100%;
    margin: 40px 0 32px 0;
    color: #1a1919;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 100%;
    margin: 32px 0 16px 0;
    color: #1a1919;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 100%;
    margin: 24px 0 16px 0;
    color: #1a1919;
  }

  /* Paragraphs */
  p {
    font-size: 16px;
    line-height: 130%;
    color: #292828;
    margin: 0 0 16px 0;
  }

  /* Lists */
  ul {
    margin: 0 0 16px 0;
    padding-left: 21px;
    font-size: 16px;
    line-height: 130%;
    color: #292828;
  }

  ol {
    margin: 0 0 16px 0;
    padding-left: 21px;
    font-size: 16px;
    line-height: 130%;
    color: #292828;
  }

  li {
    margin-bottom: 0;

    p {
      margin: 0;
    }
  }

  /* Nested lists */
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  /* Strong/Bold text */
  strong {
    font-weight: 700;
  }

  /* Links */
  a {
    color: #1a1919;
    text-decoration: underline;

    &:hover {
      color: #000;
    }
  }

  /* Sections with gaps */
  > * + h2 {
    margin-top: 40px;
  }

  > * + h3 {
    margin-top: 32px;
  }

  > * + h4 {
    margin-top: 24px;
  }

  /* First heading special styling (intro section) */
  > h1:first-child {
    font-size: 24px;
  }

  > h1:first-child + p {
    height: auto;
    min-height: 84px;
  }

  /* Code blocks (if needed) */
  code {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    font-size: 14px;
  }

  pre {
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 4px;
    overflow-x: auto;

    code {
      background-color: transparent;
      padding: 0;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 24px 16px 48px;

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 18px;
    }

    p,
    ul,
    ol {
      font-size: 14px;
    }
  }
`;
