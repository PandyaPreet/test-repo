import { getHomePage } from "@/imports/Home/api/api";
import HomePage from "@/imports/Home/ui/page/HomePage";

export const metadata = {
  title: "Protection Plans That Build Loyalty & Revenue | Ensure Protect",
  description:
    "Discover flexible, white-labeled extended service plans and electronics protection programs designed to drive revenue and build customer trust.",
  keywords: [
    "extended service plans",
    "protection plan administrator",
    "warranty provider",
    "electronics insurance",
    "TPA for retailers and OEMs",
    "connected devices protection plan",
    "power tools protection plan",
    "TPA for OEMs",
    "warranty solutions for retailers",
    "aftermarket revenue",
    "TPA for enterprise and education",
    "third party administrator",
    "extended warranty",
  ],
};

export default async function Page() {
  const data = await getHomePage();
  return <HomePage data={data} />;
}
