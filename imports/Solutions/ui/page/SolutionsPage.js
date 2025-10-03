import React, { Fragment } from "react";
import { SolutionsHeroSection } from "../components/SolutionsHeroSection";
import SolutionsPlansSection from "../components/SolutionsPlansSection";
import SolutionsCardsSection from "../components/SolutionsCardsSection";
import SolutionsFeaturesSection from "../components/SolutionsFeaturesSection";
import SolutionsCTASection from "../components/SolutionsCTASection";

const SolutionsPage = () => {
  return (
    <Fragment>
      <SolutionsHeroSection />
      <SolutionsPlansSection />
      <SolutionsCardsSection />
      <SolutionsFeaturesSection />
      <SolutionsCTASection />
    </Fragment>
  );
};

export default SolutionsPage;
