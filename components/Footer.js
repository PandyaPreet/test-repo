"use client";

import { useIsDesktop } from "@/hooks/useIsDesktop";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function ResponsiveFooter() {
  const isDesktop = useIsDesktop("1024px");

  if (isDesktop === null) return null; // optional: avoid flicker before mount

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
}
