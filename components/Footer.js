"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function ResponsiveFooter() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 899px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width: 900px) and (max-width: 1199px)"
  );
  const isLargeDevice = useMediaQuery("only screen and (min-width: 1200px)");

  const ready = [isSmallDevice, isMediumDevice, isLargeDevice].every(
    (v) => typeof v === "boolean"
  );

  if (!ready) return null;

  // Treat tablet landscape (≥900px) as desktop
  const isDesktop = isMediumDevice || isLargeDevice;

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
}
