import React from "react";
import Head from "next/head";
import RetailPage from "@/imports/Retail/ui/page/RetailPage";

const Page = () => {
  return (
    <>
      <Head>
        <title>Retail Protection Plans That Sell | Ensure Protect</title>
        <meta
          name="description"
          content="Offer extended service and protection coverage at checkout with white-labeled plans built for retail POS and ecommerce."
        />
        <meta
          name="keywords"
          content="retail protection plans, extended warranty for electronics, POS warranty integration, protection plan at checkout"
        />
      </Head>

      <RetailPage />
    </>
  );
};

export default Page;
