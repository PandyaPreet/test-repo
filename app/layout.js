import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import ProviderLayout from "@/lib/ProviderLayout";
import { unstable_ViewTransition as ViewTransition } from "react";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://staging.ensureprotect.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Protection Plans That Build Loyalty & Revenue | Ensure Protect",
  description:
    "Discover flexible, white-labeled extended service plans and electronics protection programs designed to drive revenue and build customer trust.",
  keywords: [
    "device protection",
    "warranty programs",
    "embedded service plans",
    "electronics coverage",
    "white-label protection",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: "Protection Plans That Build Loyalty & Revenue | Ensure Protect",
    description:
      "Discover flexible, white-labeled extended service plans and electronics protection programs designed to drive revenue and build customer trust.",
    siteName: "Ensure Protect",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Don't hand-write <head> tags; Next injects them from metadata */}
      <body suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P38G9X9LF3"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P38G9X9LF3');
          `}
        </Script>

        <StyledComponentsRegistry>
          <ProviderLayout>
            <ViewTransition>{children}</ViewTransition>
          </ProviderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
