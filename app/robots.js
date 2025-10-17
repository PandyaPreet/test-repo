// app/robots.js
export default function robots() {
  const siteUrl = "https://staging.ensureprotect.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },

      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
