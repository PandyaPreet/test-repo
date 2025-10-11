"use client";

import { useEffect, useState } from "react";

export function useIsDesktop(minWidth = "1024px") {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth})`);

    const handleChange = () => setIsDesktop(mediaQuery.matches);

    // Set the initial value
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup on unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [minWidth]);

  return isDesktop;
}
