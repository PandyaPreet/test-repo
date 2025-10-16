"use client";
import React, { useState, useEffect } from "react";
import RetailResultSection from "./RetailsResultSection/RetailResultSection";
import RetailResultSectionMobile from "./RetailsResultSection/RetailResultSectionMobile";

export default function RetailResultWrapper() {
  const [deviceSize, setDeviceSize] = useState(null);

  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;

      if (width < 980) {
        setDeviceSize("small");
      } else if (width >= 980 && width < 1200) {
        setDeviceSize("medium");
      } else {
        setDeviceSize("large");
      }
    };

    // Initial check
    checkDeviceSize();

    // Add event listener
    window.addEventListener("resize", checkDeviceSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);

  if (!deviceSize) return null;

  const isDesktop = deviceSize === "medium" || deviceSize === "large";
  return isDesktop ? <RetailResultSection /> : <RetailResultSectionMobile />;
}
