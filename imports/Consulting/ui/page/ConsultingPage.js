"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const ConsultingHeroSection = dynamic(
  () =>
    import("../components/ConsultingHeroSection").then((mod) => mod.default),
  { ssr: false }
);
const ConsultingWorkTogetherSection = dynamic(
  () => import("../components/ConsultingWorkTogetherSection"),
  { ssr: false }
);
const ConsultingCardSection = dynamic(
  () => import("../components/ConsultingCardSection"),
  { ssr: false }
);
const ConsultingPartnerSection = dynamic(
  () => import("../components/ConsultingPartnerSection"),
  { ssr: false }
);
const ConsultingCTASection = dynamic(
  () => import("../components/ConsultingCTASection"),
  { ssr: false }
);

const ConsultingPage = () => {
  return (
    <Fragment>
      <ConsultingHeroSection />
      <ConsultingWorkTogetherSection />
      <ConsultingCardSection />
      <ConsultingPartnerSection />
      <ConsultingCTASection />
    </Fragment>
  );
};

export default ConsultingPage;
