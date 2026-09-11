import { MetadataRoute } from "next";
import { FINANCIAL_NEWS } from "@/data/newsData";
import { AI_MODELS } from "@/data/aiModelsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aratbazar.com";
  const now = new Date();

  // Individual AI Model URLs — massive long-tail organic search traffic
  const aiModelUrls = AI_MODELS.map((model) => ({
    url: `${baseUrl}/ai/${model.slug}`,
    lastModified: new Date(model.lastUpdated),
    changeFrequency: "daily" as const,
    priority: 0.88,
  }));

  // Individual news article URLs — dynamic, high-value pages for organic traffic
  const newsUrls = FINANCIAL_NEWS.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "daily" as const,
    priority: 0.88,
  }));

  return [
    // Homepage — highest priority, updated hourly with live market data
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: 1.0,
    },
    // Trade Signals — high-traffic, updated every 30 min via API
    {
      url: `${baseUrl}/signals`,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: 0.98,
    },
    // AI Intelligence Hub & Free Models Directory — high-traffic daily sync
    {
      url: `${baseUrl}/ai`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.97,
    },
    // News & Intelligence — updated daily with fresh articles
    {
      url: `${baseUrl}/news`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    // Currency Strength Meter — updated hourly
    {
      url: `${baseUrl}/currency-strength`,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: 0.95,
    },
    // Live Currency Rates & Gold Price — updated hourly
    {
      url: `${baseUrl}/exchange`,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: 0.96,
    },
    // Economic Calendar — updated daily
    {
      url: `${baseUrl}/calendar`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.92,
    },
    // Trading Journal — stable utility page
    {
      url: `${baseUrl}/journal`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
    // Tools & Calculators — stable utility page
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
    // About — trust/E-E-A-T page, important for AdSense
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    // Contact — required for AdSense policy compliance
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    // Privacy Policy — REQUIRED for AdSense approval
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.70,
    },
    // Terms of Service — required for AdSense compliance
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    // Financial Disclaimer — required by AdSense finance category policies
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.70,
    },
    // Individual AI Model review & benchmark pages
    ...aiModelUrls,
    // Individual news articles
    ...newsUrls,
  ];
}
