"use client";

import React, { useState, useEffect, Fragment } from "react";
import ConnectFormSectionMobile from "./ConnectFormSectionMobile";
import ConnectFormSection from "./ConnectFormSection";

const ConnectClientForm = ({ formData }) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (isMobile === null) return null;

  return (
    <Fragment>
      {isMobile ? (
        <ConnectFormSectionMobile formData={formData} />
      ) : (
        <ConnectFormSection formData={formData} />
      )}
    </Fragment>
  );
};

export default ConnectClientForm;
