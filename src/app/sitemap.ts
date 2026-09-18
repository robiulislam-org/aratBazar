import { MetadataRoute } from "next";
import { INITIAL_PRODUCTS, CATEGORIES } from "@/data/productsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aratbazar.com";
  const now = new Date();

  // Winning Product Dossier URLs — High search intent for buyers and sellers
  const productUrls = INITIAL_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/product/${prod.slug}`,
    lastModified: new Date(prod.updatedAt || now),
    changeFrequency: "daily" as const,
    priority: 0.95,
  }));

  // Category Landing Pages
  const categoryUrls = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    // Dropshipping & Seller Tools
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // Affiliate Disclaimer
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // Privacy Policy
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    // Terms of Service
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    // Contact
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...categoryUrls,
    ...productUrls,
  ];
}
