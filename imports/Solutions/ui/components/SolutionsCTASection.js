"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SolutionsCTASection = () => {
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
        title="Start Offering Smarter Coverage — Your Way"
        description="Empower your business with tailored protection solutions that fit your customers, your products, and your brand."
        buttonText="Learn More"
        {...(isMobile
          ? { backgroundImage: "/assets/cta-banner-image.webp" }
          : { videoUrl: "/assets/SolutionsPageVideo.mp4" })}
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
};

export default SolutionsCTASection;
