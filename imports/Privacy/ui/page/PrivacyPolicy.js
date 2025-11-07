import React, { Fragment } from "react";
import PrivacyHeader from "../components/PrivacyHeader";
import PrivacyFooter from "../components/PrivacyFooter";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

const PrivacyPolicy = ({ data }) => {
  return (
    <Fragment>
      <PrivacyHeader />
      <PrivacyPolicyContent data={data} />
      <PrivacyFooter />
    </Fragment>
  );
};

export default PrivacyPolicy;
