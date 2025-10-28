"use client";

import React from "react";

function DealersLoginPage({ id }) {
  const iframeSrc =
    id == "servicecenter"
      ? `https://ensureprotect.tfaforms.net/f/servicecenter`
      : `https://ensureprotect1.wpengine.com/${id}`;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={iframeSrc}
        style={{
          border: "none",
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          display: "block",
        }}
        title={`Dealer - ${id}`}
      />
    </div>
  );
}

export default DealersLoginPage;
