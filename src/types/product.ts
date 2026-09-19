export type ProductCategory = 
  | "tech-gadgets"
  | "home-kitchen"
  | "beauty-health"
  | "car-outdoor"
  | "tools-utility"
  | "kids-novelty"
  | "fitness-lifestyle"
  | "smart-home";

export type TrendStatus = 
  | "🔥 Viral Now"
  | "🚀 Exploding Demand"
  | "⭐ High Margin"
  | "📦 Evergreen Seller";

export type CompetitionLevel = "Low" | "Medium" | "High";

export interface SupplierOption {
  name: string;
  price: number;
  currency: string;
  url: string;
  moq: string; // e.g. "1 unit (Dropship friendly)"
  shippingEst: string; // e.g. "7-12 days"
  isLowestPrice?: boolean;
}

export interface ProductSourcing {
  lowestPrice: number;
  currency: string;
  supplierName: string;
  supplierUrl: string;
  moq: string;
  shippingTimeEst: string;
  secondarySuppliers: SupplierOption[];
}

export interface ProductMarket {
  retailPrice: number;
  currency: string;
  potentialProfit: number;
  profitMarginPercent: number;
  competitorStoreUrl: string;
  competitorStoreName: string;
  recommendedAdSpend: number;
  estimatedNetProfit: number;
}

export interface ProductAnalytics {
  trendScore: number; // e.g. 9.4 out of 10
  trendStatus: TrendStatus;
  monthlySalesVolumeEst: string;
  competitionLevel: CompetitionLevel;
  tiktokViews: string;
  socialBuzz: "Very High" | "High" | "Moderate";
}

export interface ProductBusinessGuide {
  whyItSells: string[];
  targetAudience: string[];
  adHooks: string[];
  recommendedNiches: string[];
  riskOrNote?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  categoryName: string;
  images: string[];
  sourcing: ProductSourcing;
  market: ProductMarket;
  analytics: ProductAnalytics;
  businessGuide: ProductBusinessGuide;
  specs: Record<string, string>;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isDailyPick?: boolean;
  addedAt: string;
  updatedAt: string;
}

export interface CategoryMeta {
  slug: ProductCategory;
  name: string;
  iconName: string;
  description: string;
  productCount: number;
}
