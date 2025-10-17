import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";

const AboutUsPage = dynamic(() =>
  import("@/imports/AboutUs/ui/page/AboutUsPage")
);

const Page = () => {
  return (
    <>
      <Head>
        <title>About Ensure Protect | Modern Protection Plan Partner</title>
        <meta
          name="description"
          content="Learn how Ensure Protect redefines the TPA model with customer-first service, white-labeled support, and end-to-end program management."
        />
        <meta
          name="keywords"
          content="third-party administrator, electronics insurance partner, protection plan company, insuretech TPA, service contract provider"
        />
        {/* <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ensureprotect.com/about-us" /> */}
      </Head>
      <AboutUsPage />
    </>
  );
};

export default Page;
