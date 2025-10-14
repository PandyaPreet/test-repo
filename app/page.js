import { getHomePage } from "@/imports/Home/api/api";
import HomePage from "@/imports/Home/ui/page/HomePage";
import React from "react";

const Page = async () => {
  const data = await getHomePage();

  return <HomePage data={data} />;
};

export default Page;
