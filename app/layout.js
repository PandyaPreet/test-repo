import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import ProviderLayout from "@/lib/ProviderLayout";
import { unstable_ViewTransition as ViewTransition } from "react";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://staging.ensureprotect.com";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="device protection, warranty programs, embedded service plans, electronics coverage, white-label protection"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:title"
          content="Protection Plans That Build Loyalty & Revenue | Ensure Protect"
        />
        <meta
          property="og:description"
          content="Discover flexible, white-labeled extended service plans and electronics protection programs designed to drive revenue and build customer trust."
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P38G9X9LF3"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P38G9X9LF3');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ProviderLayout>
            <ViewTransition>{children}</ViewTransition>
          </ProviderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
