"use client";

import React, { use } from "react";
import styled from "styled-components";
import { notFound } from "next/navigation";

export default function IframePage({ params, searchParams }) {
  const resolvedParams = use(params);
  const resolvedSearch = use(searchParams);

  const id = resolvedParams?.id;
  const url =
    typeof resolvedSearch?.get === "function"
      ? resolvedSearch.get("url")
      : resolvedSearch?.url;

  const validDealers = [
    "calranch-frame",
    "lmfleetsupply",
    "seeds",
    "education",
    "eastwood",
    "buchheit",
    "coastal-frame",
    "ruralking",
    "atwoods",
    "fcfarmandhome",
    "theisens",
    "shoppers",
    "fhs",
    "5devices",
    "scw",
    "instaprotek",
    "rides",
    "bikemart",
    "gorhambikeandski",
    "landrys",
    "pedal",
    "wheelandsprocket",
    "globalbikes",
    "biggear",
  ];

  if (!id || !url || !validDealers.includes(id)) {
    notFound();
  }

  return (
    <Wrapper>
      <Iframe src={url} allowFullScreen />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
