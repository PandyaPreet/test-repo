"use client";

import CTABanner from "@/components/CTABanner";
import React from "react";
import { useRouter } from "next/navigation";

function ConnectCTASection() {
  const router = useRouter();

  return (
    <CTABanner
      title=" Looking to offer service plans
            under your brand?"
      buttonText="Partner With US"
      backgroundImage="/assets/cta-banner-image.webp"
      onButtonClick={() => router.push("/connect")}
    />
  );
}

export default ConnectCTASection;
