"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import React, { Fragment } from "react";
import ConnectFormSectionMobile from "./ConnectFormSectionMobile";
import ConnectFormSection from "./ConnectFormSection";

const ConnectClientForm = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <Fragment>
      {isMobile ? <ConnectFormSectionMobile /> : <ConnectFormSection />}
    </Fragment>
  );
};

export default ConnectClientForm;
