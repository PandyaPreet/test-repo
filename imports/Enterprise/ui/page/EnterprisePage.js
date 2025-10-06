import React, { Fragment } from "react";
import { EnterpriseHeroSection } from "../components/EnterpriseHeroSection";
import EnterpriseOverviewSection from "../components/EnterpriseOverviewSection";
import EnterpriseDetailSection from "../components/EnterpriseDetailSection";
import EnterpriseCardSection from "../components/EnterpriseCardSection";
import EnterpriseCTASection from "../components/EnterpriseCTASection";

const EnterprisePage = () => {
  return (
    <Fragment>
      <EnterpriseHeroSection />
      <EnterpriseOverviewSection />
      <EnterpriseDetailSection />
      <EnterpriseCardSection />
      <EnterpriseCTASection />
    </Fragment>
  );
};

export default EnterprisePage;
