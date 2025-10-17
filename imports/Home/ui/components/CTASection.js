"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React from "react";

const CTASection = () => {
  const router = useRouter();
  return (
    <>
      <CTABanner
        title="Let's Create a Protection Program Built for Growth"
        description="We make it easy to launch, sell, and support protection plans—while you focus on your brand and customer experience."
        buttonText="GET STARTED"
        videoUrl={"/assets/HomePageCTAvideo.mp4"}
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
};

export default CTASection;
