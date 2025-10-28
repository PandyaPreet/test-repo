"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const EnterpriseCTASection = ({ ctaData = {} }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const {
    title = "",
    description = "",
    ctaButtonLabel = "CONNECT WITH US",
    backgroundImage = null,
  } = ctaData || {};

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
      buttonText={ctaButtonLabel}
      {...(isMobile
        ? { backgroundImage: backgroundImageUrl }
        : { videoUrl: "/assets/SolutionsPageVideo.mp4" })}
      onButtonClick={() => router.push("/connect")}
    />
  );
};

export default EnterpriseCTASection;
