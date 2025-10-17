import OEMpage from "@/imports/OEM/ui/page/OEMpage";
import Head from "next/head";
import React from "react";

function page() {
  return (
    <>
      <Head>
        <title>
          OEM Extended Warranty & Embedded Coverage | Ensure Protect
        </title>

        <meta
          name="description"
          content="Deliver branded support with embedded protection plans and aftermarket coverage designed for product manufacturers."
        />

        <meta
          name="keywords"
          content="OEM warranty provider, co-branded service plans, embedded device coverage, warranty extensions for manufacturers"
        />

        <meta name="robots" content="index, follow" />
        {/* 
        <link rel="canonical" href="https://ensureprotect.com/consulting" /> */}
      </Head>
      <OEMpage />
    </>
  );
}

export default page;
