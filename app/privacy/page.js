export const revalidate = 10;

import { getPrivacyPage } from "@/imports/Privacy/api/api";
import PrivacyPolicy from "@/imports/Privacy/ui/page/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy - Ensure Protect",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "https://ensureprotect.com/privacy",
  },
};

export default async function Page() {
  const data = await getPrivacyPage();
  return <PrivacyPolicy data={data} />;
}
