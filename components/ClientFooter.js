"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function ClientFooter() {
  return <Footer />;
}
