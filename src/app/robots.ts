import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All general crawlers — allow everything except API internals
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Google Primary Crawler — full access
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // Google AdSense bot — critical for ad targeting and monetization approval
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      {
        // Google AdsBot — critical for AdSense ad quality verification
        userAgent: "AdsBot-Google",
        allow: "/",
      },
      {
        // Google Image crawler — important for visual content indexing
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        // Bing/Microsoft Advertising crawler
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://aratbazar.com/sitemap.xml",
    host: "https://aratbazar.com",
  };
}
