export default function sitemap() {
  const baseUrl = "https://ensureprotect.com";

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

    "/calranch-frame",
    "/lmfleetsupply",
    "/seeds",
    "/education",
    "/eastwood",
    "/buchheit",
    "/coastal-frame",
    "/ruralking",
    "/atwoods",
    "/fcfarmandhome",
    "/theisens",
    "/shoppers",
    "/fhs",
    "/instaprotek",
    "/5devices",
    "/scw",
    "/rides",
    "/bikemart",
    "/gorhambikeandski",
    "/landrys",
    "/pedal",
    "/wheelandsprocket",
    "/globalbikes",
    "/biggear",
  ];

  const now = new Date();

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
