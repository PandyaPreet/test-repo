import React, { Fragment } from "react";
import { ConsultingHeroSection } from "../components/ConsultingHeroSection";
import ConsultingWorkTogetherSection from "../components/ConsultingWorkTogetherSection";
import ConsultingCardSection from "../components/ConsultingCardSection";
import ConsultingPartnerSection from "../components/ConsultingPartnerSection";
import ConsultingCTASection from "../components/ConsultingCTASection";

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
