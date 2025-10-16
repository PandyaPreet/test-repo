import React, { Fragment } from "react";
import PrivacyHeader from "../components/PrivacyHeader";
import PrivacyFooter from "../components/PrivacyFooter";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <PrivacyHeader />
      <PrivacyPolicyContent />
      <PrivacyFooter />
    </Fragment>
  );
};

export default PrivacyPolicy;
