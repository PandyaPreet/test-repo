"use client";

import { useIsDesktop } from "@/lib/hooks/useIsDesktop";
import PartnersSectionMobile from "./PartnerSection/PartnersSectionMobile";
import PartnersSectionDesktop from "./PartnerSection/PartnersSectionDesktop";

export default function PartnersSection() {
  const isDesktop = useIsDesktop(980);

  return isDesktop ? <PartnersSectionDesktop /> : <PartnersSectionMobile />;
}
