"use client";

import CTABanner from "@/components/CTABanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getBackgroundImageUrl } from "@/lib/imageUtils";

const ISPCTASection = ({ ctaSectionData }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const title = ctaSectionData?.title;

  const description = ctaSectionData?.description;

  const buttonText = ctaSectionData?.ctaButtonLabel;

  const backgroundImage = getBackgroundImageUrl(ctaSectionData.backgroundImage);

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
        : { videoUrl: "/assets/SolutionsPageVideo.mp4" })}
      onButtonClick={() => router.push("/connect")}
    />
  );
};

export default ISPCTASection;
