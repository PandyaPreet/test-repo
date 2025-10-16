import dynamic from "next/dynamic";
import React from "react";

const AboutUsPage = dynamic(() =>
  import("@/imports/AboutUs/ui/page/AboutUsPage")
);

const page = () => {
  return <AboutUsPage />;
};

export default page;
