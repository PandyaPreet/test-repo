import React from "react";
import Head from "next/head";
import ISPCablePage from "@/imports/ISP-MSP/ui/page/ISPCablePage";

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Service Plans for ISPs &amp; Managed Providers | Ensure Protect
        </title>
        <meta
          name="description"
          content="Increase ARPU and reduce churn by bundling embedded protection with your broadband, hardware, and connected services."
        />
        <meta
          name="keywords"
          content="ISP protection programs, MSP device insurance, router coverage plans, smart home protection services"
        />
      </Head>

      <ISPCablePage />
    </>
  );
};

export default Page;
