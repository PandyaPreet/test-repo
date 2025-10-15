"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React from "react";

const RetailCTASection = () => {
  const router = useRouter();

  return (
    <>
      <CTABanner
        title="Let's Create a Protection Program Built for Growth"
        description="We make it easy to launch, sell, and support protection plans —while you focus on your brand and customer experience."
        buttonText="CONTACT WITH US"
        backgroundImage="/assets/cta-banner-image.webp"
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
};

export default RetailCTASection;
