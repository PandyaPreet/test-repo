"use client";

import CTABanner from "@/components/CTABanner";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ConnectCTASection() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 835);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CTABanner
      title=" Looking to offer service plans
            under your brand?"
      buttonText="Partner With US"
      {...(isMobile
        ? { backgroundImage: "/assets/cta-banner-image.webp" }
        : { videoUrl: "/assets/HomePageVideo.mp4" })}
      onButtonClick={() => router.push("/connect")}
    />
  );
}

export default ConnectCTASection;
