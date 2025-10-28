"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function PartnersCTASection({ ctaData }) {
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
        title={ctaData && ctaData.title ? ctaData.title : "Get Started Today"}
        description={
          ctaData && ctaData.description
            ? ctaData.description
            : "Let's Talk About What's Possible"
        }
        buttonText={
          ctaData && ctaData.ctaButtonLabel
            ? ctaData.ctaButtonLabel
            : "GET STARTED"
        }
        {...(isMobile
          ? { backgroundImage: "/assets/cta-banner-image.webp" }
          : { videoUrl: "/assets/HomePageVideo.mp4" })}
        onButtonClick={() => router.push("/connect")}
      />
    </>
  );
}

export default PartnersCTASection;
