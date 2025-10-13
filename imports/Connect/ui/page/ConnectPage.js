"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const ConnectHeroSection = dynamic(
  () => import("../components/ConnectHeroSection"),
  { ssr: false }
);
const ConnectFormSection = dynamic(
  () => import("../components/ConnectFormSection"),
  { ssr: false }
);
const ConnectCTASection = dynamic(
  () => import("../components/ConnectCTASection"),
  { ssr: false }
);

function ConnectPage() {
  return (
    <Fragment>
      <ConnectHeroSection />
      <ConnectFormSection />
      <ConnectCTASection />
    </Fragment>
  );
}

export default ConnectPage;
