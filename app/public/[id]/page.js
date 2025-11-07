import { getPublicAttachments } from "@/imports/Public/api/api";
import PublicAttachments from "@/imports/Public/ui/page/PublicAttachments";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;
  const data = await getPublicAttachments(id);

  if (!data || !data.pdfUrl) {
    notFound();
  }

  return <PublicAttachments data={data} />;
};

export default Page;
