"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React from "react";

const SolutionsCTASection = () => {
  const router = useRouter();

  return (
    <>
      <CTABanner
        title="Start Offering Smarter Coverage — Your Way"
        description="Empower your business with tailored protection solutions that fit your customers, your products, and your brand."
        buttonText="Learn More"
        backgroundImage="/assets/cta-banner-image.webp"
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
};

export default SolutionsCTASection;
