import React, { Fragment } from "react";
import PartnersHeroSection from "../ui/components/PartnersHeroSection";
import PartnersBenefitsSection from "../ui/components/PartnersBenefitsSection";
import PartnersCategoriesSection from "../ui/components/PartnersCategoriesSection";
import PartnersSolutionsSection from "../ui/components/PartnersSolutionsSection";
import PartnersCTASection from "../ui/components/PartnersCTASection";

const PartnersPage = () => {
  return (
    <Fragment>
      <PartnersHeroSection />
      <PartnersBenefitsSection />
      <PartnersCategoriesSection />
      <PartnersSolutionsSection />
      <PartnersCTASection />
    </Fragment>
  );
};

export default PartnersPage;
