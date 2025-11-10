import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import ProviderLayout from "@/lib/ProviderLayout";
import Script from "next/script";
import { Toaster } from "sonner";

export const metadata = {
  metadataBase: new URL("https://ensureprotect.com"),
  title: "Ensure Protect – Trusted Insurance & Financial Protection",
  description:
    "Ensure Protect offers comprehensive insurance and financial protection solutions designed to safeguard your future with trust and reliability.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  alternates: {
    canonical: "https://ensureprotect.com/",
  },
  openGraph: {
    title: "Ensure Protect – Trusted Insurance & Financial Protection",
    description:
      "Ensure Protect offers comprehensive insurance and financial protection solutions designed to safeguard your future.",
    url: "https://ensureprotect.com/",
    siteName: "Ensure Protect",
    images: [
      {
        url: "https://ensureprotect.com/Group.jpg",
        width: 1200,
        height: 630,
        alt: "Ensure Protect preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensure Protect – Trusted Insurance & Financial Protection",
    description:
      "Ensure Protect offers reliable insurance and financial protection tailored for peace of mind.",
    images: ["https://ensureprotect.com/Group.jpg"],
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
        <meta
          name="google-site-verification"
          content="3lCw_IqwooftJtlYfnRU7VmHCKQdVLeDKa8rbaPqUds"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P38G9X9LF3"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P38G9X9LF3', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ProviderLayout>
            {children}
            <Toaster />
          </ProviderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
