import React from "react";
import Head from "next/head";
import MobileNetworkPage from "@/imports/MVNO-MNO/ui/page/MobileNetworkPage";

const Page = () => {
  return (
    <>
      <Head>
        <title>IoT Device Protection & Embedded Support Plans</title>
        <meta
          name="description"
          content="Activate coverage at onboarding with embedded service plans for smart home, energy, industrial, and connected devices."
        />
        <meta
          name="keywords"
          content="IoT protection, embedded coverage for devices, smart tech warranty, connected product support, IoT warranty API"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <MobileNetworkPage />
    </>
  );
};

export default Page;
