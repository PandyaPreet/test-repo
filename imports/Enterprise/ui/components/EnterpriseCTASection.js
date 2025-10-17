"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EnterpriseCTASection = () => {
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
    <>
      <CTABanner
        title="Let's Create a Protection Program Built for Growth"
        description="We make it easy to launch, sell, and support protection plans —while you focus on your brand and customer experience."
        buttonText="CONTACT WITH US"
        {...(isMobile
          ? { backgroundImage: "/assets/cta-banner-image.webp" }
          : { videoUrl: "/assets/SolutionsPageVideo.mp4" })}
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
};

export default EnterpriseCTASection;
