import React from "react";
import Head from "next/head";
import EnterprisePage from "@/imports/Enterprise/ui/page/EnterprisePage";

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Enterprise Service Contracts &amp; Device Protection | Ensure Protect
        </title>
        <meta
          name="description"
          content="Minimize downtime and streamline claims across distributed devices with scalable group plans and tiered SLAs."
        />
        <meta
          name="keywords"
          content="enterprise device coverage, group service plans, SLA protection plans, IT asset protection, fleet device support"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <EnterprisePage />
    </>
  );
};

export default Page;
