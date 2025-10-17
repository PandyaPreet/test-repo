import PartnersPage from "@/imports/Partners/page/PartnersPage";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>
          Partner With Ensure Protect | Grow with Embedded Protection
        </title>
        <meta
          name="description"
          content="Add new revenue streams and enhance customer experience with branded warranty and service plans backed by Ensure Protect."
        />
        <meta
          name="keywords"
          content="embedded coverage solutions, aftermarket revenue, extended warranty partner, protection program for retailers, co-branded warranty plans, embedded protection platform, extended warranty provider, device insurance partner, service plan monetization"
        />
        <meta name="robots" content="index, follow" />
        {/*
        <link rel="canonical" href="https://ensureprotect.com/" /> */}
      </Head>
      <PartnersPage />
    </>
  );
};

export default page;
