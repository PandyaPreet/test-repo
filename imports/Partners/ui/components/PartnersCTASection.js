"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React from "react";

function PartnersCTASection() {
  const router = useRouter();

  return (
    <>
      <CTABanner
        title="Get Started Today"
        description="Let's Talk About What's Possible"
        buttonText="GET STARTED"
        backgroundImage="/assets/cta-banner-image.webp"
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
}

export default PartnersCTASection;
