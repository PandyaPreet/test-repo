"use client";

import CTABanner from "@/components/CTABanner";
import { getBackgroundImageUrl } from "@/lib/imageUtils";
import { useRouter } from "next/navigation";
import React from "react";

const CTASection = ({ ctaData }) => {
  const router = useRouter();
  return (
    <>
      <CTABanner
        videoUrl={"/assets/HomePageCTAvideo.mp4"}
        title={
          ctaData && ctaData.title
            ? ctaData.title
            : "Let's Create a Protection Program Built for Growth"
        }
        description={
          ctaData && ctaData.description
            ? ctaData.description
            : "We make it easy to launch, sell, and support protection plans—while you focus on your brand and customer experience."
        }
        buttonText={
          ctaData && ctaData.ctaButtonLabel
            ? ctaData.ctaButtonLabel
            : "GET STARTED"
        }
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
};

export default CTASection;
