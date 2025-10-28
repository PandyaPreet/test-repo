"use client";

import CTABanner from "@/components/CTABanner";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function AboutUsCTASection({ ctaData }) {
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
      {...(isMobile
        ? { backgroundImage: "/assets/cta-banner-image.webp" }
        : { videoUrl: "/assets/SolutionsPageVideo.mp4" })}
      title={
        ctaData && ctaData.title
          ? ctaData.title
          : "Let's Build What's Next, Together"
      }
      buttonText={
        ctaData && ctaData.ctaButtonLabel
          ? ctaData.ctaButtonLabel
          : "Schedule a Discovery Call"
      }
      onButtonClick={() => router.push("/connect")}
    />
  );
}

export default AboutUsCTASection;
