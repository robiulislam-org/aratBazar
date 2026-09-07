import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // Google AdSense bot — critical for ad targeting and site approval
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
    ],
    sitemap: "https://aratbazar.com/sitemap.xml",
    host: "https://aratbazar.com",
  };
}
