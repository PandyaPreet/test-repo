import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import ProviderLayout from "@/lib/ProviderLayout";
import { unstable_ViewTransition as ViewTransition } from "react";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ensureprotect.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
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
      <head>
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
