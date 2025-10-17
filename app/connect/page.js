import ConnectPage from "@/imports/Connect/ui/page/ConnectPage";

export const metadata = {
  title: "Contact Us | Request a Demo or Connect With Ensure Protect",
  description:
    "Get in touch to schedule a product demo, request program info, or talk to our support and partnership teams.",
  keywords: [
    "contact Ensure Protect",
    "request a demo",
    "warranty support",
    "protection plan info",
    "partner inquiry",
  ],
  robots: "index, follow",
  alternates: { canonical: "https://staging.ensureprotect.com/connect" },
};

export default function Page() {
  return <ConnectPage />;
}
