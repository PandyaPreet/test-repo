"use client";

import React, { useState, useEffect, Fragment } from "react";
import ConnectFormSectionMobile from "./ConnectFormSectionMobile";
import ConnectFormSection from "./ConnectFormSection";

const ConnectClientForm = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Show nothing until we know the screen size (prevents hydration mismatch)
  if (isMobile === null) return null;

  return (
    <Fragment>
      {isMobile ? <ConnectFormSectionMobile /> : <ConnectFormSection />}
    </Fragment>
  );
};

export default ConnectClientForm;
