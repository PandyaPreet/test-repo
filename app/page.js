import React from "react";
import Head from "next/head";
import { getHomePage } from "@/imports/Home/api/api";
import HomePage from "@/imports/Home/ui/page/HomePage";

const Page = async () => {
  const data = await getHomePage();

  return (
    <>
      <Head>
        <title>
          Protection Plans That Build Loyalty & Revenue | Ensure Protect
        </title>
        <meta
          name="description"
          content="Discover flexible, white-labeled extended service plans and electronics protection programs designed to drive revenue and build customer trust."
        />
        <meta
          name="keywords"
          content="extended service plans, protection plan administrator, warranty provider, electronics insurance, TPA for retailers and OEMs, extended service plans, connected devices protection plan, power tools protection plan, TPA for OEMs, protection plan administrator, warranty solutions for retailers, aftermarket revenue, TPA for enterprise and education, third party administrator, extended warranty"
        />
        {/* <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ensureprotect.com/" /> */}
      </Head>
      <HomePage data={data} />
    </>
  );
};

export default Page;
