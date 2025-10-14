"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import RetailResultSection from "./RetailsResultSection/RetailResultSection";
import RetailResultSectionMobile from "./RetailsResultSection/RetailResultSectionMobile";

export default function RetailResultWrapper() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 979px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width: 980px) and (max-width: 1199px)"
  );
  const isLargeDevice = useMediaQuery("only screen and (min-width: 1200px)");

  const ready = [isSmallDevice, isMediumDevice, isLargeDevice].every(
    (v) => typeof v === "boolean"
  );
  if (!ready) return null;

  const isDesktop = isMediumDevice || isLargeDevice;
  return isDesktop ? <RetailResultSection /> : <RetailResultSectionMobile />;
}
