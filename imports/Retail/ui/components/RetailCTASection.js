"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getBackgroundImageUrl } from "@/lib/imageUtils"; // helper for sanity image URLs

const RetailCTASection = ({ ctaSectionData = {} }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const {
    title = "",
    description = "",
    ctaButtonLabel = "",
    backgroundImage = null,
  } = ctaSectionData || {};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 835);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImageUrl = backgroundImage
    ? getBackgroundImageUrl(backgroundImage)
    : "/assets/cta-banner-image.webp";

  return (
    <CTABanner
      title={title}
      description={description}
      buttonText={ctaButtonLabel || "CONNECT WITH US"}
      {...(isMobile
        ? { backgroundImage: backgroundImageUrl }
        : { videoUrl: "/assets/HomePageVideo.mp4" })}
      onButtonClick={() => router.push("/connect")}
    />
  );
};

export default RetailCTASection;
