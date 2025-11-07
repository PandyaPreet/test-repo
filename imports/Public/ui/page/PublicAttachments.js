"use client";

import React from "react";
import styled from "styled-components";

const PublicAttachments = ({ data }) => {
  return (
    <Container>
      <ResponsiveFrame
        src={data?.pdfUrl}
        title={data?.title || "Attachment Preview"}
        allowFullScreen
      />
    </Container>
  );
};

export default PublicAttachments;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #000;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100dvh;
  }
`;

const ResponsiveFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    height: calc(100dvh - 20px);
  }
`;
