"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const ConnectHeroSection = dynamic(
  () => import("../components/ConnectHeroSection"),
  { ssr: false }
);

const ConnectClientForm = dynamic(
  () => import("../components/ConnectClientForm"),
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
      <ConnectClientForm />
      <ConnectCTASection />
    </Fragment>
  );
}

export default ConnectPage;
