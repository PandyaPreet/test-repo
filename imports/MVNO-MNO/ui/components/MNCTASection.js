"use client";

import CTABanner from "@/components/CTABanner";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const MNCTASection = ({ ctaSectionData }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const title =
    ctaSectionData?.title ||
    "Let's Create a Protection Program Built for Growth";

  const description =
    ctaSectionData?.description ||
    "We make it easy to launch, sell, and support protection plans — while you focus on your brand and customer experience.";

  const buttonText = ctaSectionData?.ctaButtonLabel || "CONNECT WITH US";

  // Use Sanity image or fallback
  const backgroundImage = ctaSectionData?.backgroundImage
    ? getBackgroundImageUrl(ctaSectionData.backgroundImage)
    : "/assets/cta-banner-image.webp";

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
      title={title}
      description={description}
      buttonText={buttonText}
      {...(isMobile
        ? { backgroundImage }
        : { videoUrl: "/assets/HomePageVideo.mp4" })}
      onButtonClick={() => router.push("/connect")}
    />
  );
};

export default MNCTASection;
