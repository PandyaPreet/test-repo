import ConnectPage from "@/imports/Connect/ui/page/ConnectPage";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>
          Contact Us | Request a Demo or Connect With Ensure Protect
        </title>

        <meta
          name="description"
          content="Get in touch to schedule a product demo, request program info, or talk to our support and partnership teams."
        />
        <meta
          name="keywords"
          content="contact Ensure Protect, request a demo, warranty support, protection plan info, partner inquiry"
        />
        <meta name="robots" content="index, follow" />
        {/* 
        <link rel="canonical" href="https://ensureprotect.com/" /> */}
      </Head>
      <ConnectPage />
    </>
  );
};

export default page;
