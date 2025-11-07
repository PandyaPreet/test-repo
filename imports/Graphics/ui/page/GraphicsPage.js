"use client";

import React from "react";
import styled from "styled-components";

const GraphicsPage = ({ data }) => {
  return (
    <Container>
      <ImagePreview src={data?.imageUrl} alt={data?.alt || "Preview"} />
    </Container>
  );
};

export default GraphicsPage;

const Container = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePreview = styled.img`
  background-color: #fff;
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 80%;
  }
`;
