"use client";

import CTABanner from "@/components/CTABanner";
import React from "react";
import { useRouter } from "next/navigation";

function AboutUsCTASection() {
  const router = useRouter();

  return (
    <CTABanner
      title="Let's Build What's Next, Together"
      buttonText="Schedule a Discovery Call"
      backgroundImage="/assets/cta-banner-image.webp"
      onButtonClick={() => router.push("/connect")}
    />
  );
}

export default AboutUsCTASection;
