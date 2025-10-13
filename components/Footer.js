"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

// Dynamically import the hook with SSR disabled
const useMediaQuery = dynamic(
  () => import("@uidotdev/usehooks").then((mod) => mod.useMediaQuery),
  { ssr: false }
);

export default function ResponsiveFooter() {
  const [isReady, setIsReady] = useState(false);

  const isSmallDevice = useMediaQuery?.("only screen and (max-width: 979px)");
  const isMediumDevice = useMediaQuery?.(
    "only screen and (min-width: 980px) and (max-width: 1199px)"
  );
  const isLargeDevice = useMediaQuery?.("only screen and (min-width: 1200px)");

  useEffect(() => {
    if (useMediaQuery) {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  // Treat tablet landscape (≥980px) as desktop
  const isDesktop = isMediumDevice || isLargeDevice;

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
}
