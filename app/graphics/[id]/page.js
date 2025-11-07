import { getGraphics } from "@/imports/Graphics/api/api";
import GraphicsPage from "@/imports/Graphics/ui/page/GraphicsPage";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const data = await getGraphics(id);
  if (!data || !data.imageUrl) {
    notFound();
  }

  return <GraphicsPage data={data} />;
};

export default page;
