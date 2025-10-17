import ConsultingPage from "@/imports/Consulting/ui/page/ConsultingPage";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Consultant & Partner Enablement | Ensure Protect</title>

        <meta
          name="description"
          content="Expand your offerings with white-label protection plans for your clients. Full enablement, flexible models, shared success."
        />

        <meta
          name="keywords"
          content="warranty consulting partner, white-label service plans, reseller protection plans, partner program warranty"
        />

        <meta name="robots" content="index, follow" />
        {/* 
        <link rel="canonical" href="https://ensureprotect.com/consulting" /> */}
      </Head>

      <ConsultingPage />
    </>
  );
};

export default page;
