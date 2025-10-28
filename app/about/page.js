import { getAboutUsPage } from "@/imports/AboutUs/ui/api/api";
import AboutUsPage from "@/imports/AboutUs/ui/page/AboutUsPage";

export const metadata = {
  title: "About Ensure Protect | Modern Protection Plan Partner",
  description:
    "Learn how Ensure Protect redefines the TPA model with customer-first service, white-labeled support, and end-to-end program management.",
  keywords: [
    "third-party administrator",
    "electronics insurance partner",
    "protection plan company",
    "insuretech TPA",
    "service contract provider",
  ],
  alternates: { canonical: "https://ensureprotect.com/about" },
};

export default async function Page() {
  const data = await getAboutUsPage();
  return <AboutUsPage data={data} />;
}
