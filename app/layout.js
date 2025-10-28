import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import ProviderLayout from "@/lib/ProviderLayout";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata = {
  metadataBase: new URL("https://ensureprotect.com"),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
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
    images: ["/Group.jpg"],
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P38G9X9LF3`}
          strategy="afterInteractive"
        />
        <script
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
            <ViewTransition>{children}</ViewTransition>
          </ProviderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
