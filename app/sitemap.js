export default function sitemap() {
  const baseUrl = "https://staging.ensureprotect.com";

  const paths = [
    "/",
    "/about",
    "/connect",
    "/partners",
    "/privacy",

    "/solutions",
    "/solutions/consulting",
    "/solutions/enterprise",
    "/solutions/isp-msp",
    "/solutions/mvno-mno",
    "/solutions/oem",
    "/solutions/retail",
  ];

  const now = new Date();

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
