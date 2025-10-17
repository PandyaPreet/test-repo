import React from "react";
import Head from "next/head";
import SolutionsPage from "@/imports/Solutions/ui/page/SolutionsPage";

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Custom Service Plan & Warranty Solutions for Every Industry
        </title>
        <meta
          name="description"
          content="Explore scalable service contracts, repair programs, and accidental damage protection for retail, OEM, IoT, and enterprise brands."
        />
        <meta
          name="keywords"
          content="warranty solutions for retailers, embedded protection, electronics repair programs, service plan provider, IoT warranty API, warranty solutions for retailers, extended service plans, accidental damage protection, IoT device protection, embedded warranty APIs, maintenance plan administrator"
        />
      </Head>
      <SolutionsPage />
    </>
  );
};

export default Page;
