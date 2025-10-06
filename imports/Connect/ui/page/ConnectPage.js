import React, { Fragment } from "react";
import ConnectHeroSection from "../components/ConnectHeroSection";
import ConnectFormSection from "../components/ConnectFormSection";
import ConnectCTASection from "../components/ConnectCTASection";

function ConnectPage() {
  return (
    <Fragment>
      <ConnectHeroSection />
      <ConnectFormSection />
      <ConnectCTASection />
    </Fragment>
  );
}

export default ConnectPage;
