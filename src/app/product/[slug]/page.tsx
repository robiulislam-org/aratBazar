import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { INITIAL_PRODUCTS } from "@/data/productsData";
import ProductCard from "@/components/ProductCard";
import { 
  TrendingUp, 
  ExternalLink, 
  ShieldCheck, 
  Star, 
  Flame, 
  DollarSign, 
  Truck, 
  Box, 
  Layers, 
  Target, 
  Video, 
  CheckCircle2, 
  AlertCircle,
  ArrowLeft
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | AratBazar",
    };
  }

  return {
    title: `${product.title} — Lowest Sourcing Price & Profit Intelligence`,
    description: `Source ${product.title} at factory direct price ($${product.sourcing.lowestPrice.toFixed(2)}). Retail benchmark: $${product.market.retailPrice.toFixed(2)} with +${product.market.profitMarginPercent.toFixed(0)}% profit margin. Read seller market research and ad angles.`,
    openGraph: {
      title: `${product.title} | AratBazar Wholesale Sourcing`,
      description: `Factory price: $${product.sourcing.lowestPrice.toFixed(2)} | Profit margin: +${product.market.profitMarginPercent.toFixed(0)}%`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const {
    title,
    tagline,
    description,
    categoryName,
    category,
    images,
    sourcing,
    market,
    analytics,
    businessGuide,
    specs,
    rating,
    reviewsCount,
  } = product;

  const similarProducts = INITIAL_PRODUCTS.filter(
    (p) => p.category === category && p.id !== product.id
  ).slice(0, 3);

  // Google Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: title,
    image: images,
    description: description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Factory Direct / AratBazar Verified",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      reviewCount: reviewsCount.toString(),
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: sourcing.lowestPrice.toString(),
      highPrice: market.retailPrice.toString(),
      offerCount: (sourcing.secondarySuppliers.length + 1).toString(),
      offers: [
        {
          "@type": "Offer",
          url: sourcing.supplierUrl,
          priceCurrency: "USD",
          price: sourcing.lowestPrice.toString(),
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: sourcing.supplierName,
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-10">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href={`/category/${category}`} className="hover:text-emerald-400 transition-colors">
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs sm:max-w-md">{title}</span>
        </div>

        {/* Top Split: Gallery & Sourcing Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 relative shadow-2xl">
              <img
                src={images[0]}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-wide px-3 py-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-md">
                  {analytics.trendStatus}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-colors"
                  >
                    <img src={img} alt={`${title} preview ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Quick Sourcing Metrics Box */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 grid grid-cols-3 gap-3 text-center text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">MOQ</span>
                <span className="font-bold text-slate-200">{sourcing.moq}</span>
              </div>
              <div className="border-x border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Est. Shipping</span>
                <span className="font-bold text-slate-200">{sourcing.shippingTimeEst}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Competition</span>
                <span className="font-bold text-emerald-400">{analytics.competitionLevel}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Margins & Direct Supplier Action */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold uppercase text-[10px]">
                  {categoryName}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold">{rating.toFixed(1)}</span>
                  <span className="text-slate-500">({reviewsCount.toLocaleString()} seller reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {title}
              </h1>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Master Margin Box */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Verified Factory Sourcing Price
                  </span>
                  <div className="text-3xl font-black text-white mt-0.5">
                    ${sourcing.lowestPrice.toFixed(2)}
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {sourcing.supplierName}
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Retail Selling Benchmark
                  </span>
                  <div className="text-2xl font-extrabold text-slate-300 mt-0.5 line-through decoration-slate-500">
                    ${market.retailPrice.toFixed(2)}
                  </div>
                  <span className="text-xs text-slate-400">
                    {market.competitorStoreName}
                  </span>
                </div>
              </div>

              {/* Net Profit Spread Highlight */}
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Estimated Profit Spread
                  </span>
                  <div className="text-2xl font-black text-emerald-400">
                    +${market.potentialProfit.toFixed(2)} / unit
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-300 block">Gross Margin</span>
                  <div className="text-2xl font-black text-emerald-400">
                    +{market.profitMarginPercent.toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* Primary Call to Action: Direct Factory Link */}
              <div className="pt-2 space-y-3">
                <a
                  href={sourcing.supplierUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.01]"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Source Directly at Factory Rate (${sourcing.lowestPrice.toFixed(2)})</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span>✓ 100% Free Direct Supplier Link</span>
                  <span>✓ Dropshipping & Sample Order Friendly</span>
                </div>
              </div>
            </div>

            {/* Sourcing Comparison Table */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Supplier Rate Comparison</span>
              </h3>

              <div className="divide-y divide-slate-800 text-xs">
                {/* Main Supplier */}
                <div className="py-2.5 flex items-center justify-between">
                  <div>
                    <strong className="text-slate-100">{sourcing.supplierName}</strong>
                    <span className="text-emerald-400 text-[10px] ml-2 font-bold px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                      Lowest Price
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <strong className="text-white">${sourcing.lowestPrice.toFixed(2)}</strong>
                    <a
                      href={sourcing.supplierUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-emerald-400 hover:underline flex items-center gap-0.5"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Secondary Suppliers */}
                {sourcing.secondarySuppliers.map((sec, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-slate-300">{sec.name}</span>
                      <span className="text-slate-500 text-[10px] ml-2">({sec.shippingEst})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <strong className="text-slate-300">${sec.price.toFixed(2)}</strong>
                      <a
                        href={sec.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-slate-400 hover:text-emerald-400 flex items-center gap-0.5"
                      >
                        <span>Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Seller Intelligence Dossier */}
        <div className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Why It Sells & Marketing Angles */}
          <div className="lg:col-span-8 space-y-8">
            {/* Why It Sells */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span>Market Research: Why This Product Sells</span>
              </h2>

              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                {businessGuide.whyItSells.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Ad Hooks for TikTok/Reels */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-purple-400" />
                <span>Ready-to-Use Video Ad Hooks (TikTok & Reels)</span>
              </h2>
              <p className="text-xs text-slate-400">
                Use these opening script lines for the first 3 seconds of your short-form video ads to maximize hook rate:
              </p>

              <div className="space-y-3">
                {businessGuide.adHooks.map((hook, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs md:text-sm font-medium text-slate-200 flex items-center justify-between"
                  >
                    <span>"{hook}"</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 shrink-0 ml-3">
                      Hook #{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h2 className="text-lg md:text-xl font-black text-white">
                Technical Specifications & Factory Specs
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(specs).map(([key, val], idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between"
                  >
                    <span className="text-slate-400">{key}:</span>
                    <span className="font-semibold text-slate-200 text-right ml-2">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Target Audience & Niches */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-400" />
                <span>Target Customer Avatars</span>
              </h3>

              <div className="space-y-2 text-xs">
                {businessGuide.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium"
                  >
                    🎯 {aud}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3 text-xs">
              <h3 className="text-base font-black text-white">Recommended Niches</h3>
              <div className="flex flex-wrap gap-2">
                {businessGuide.recommendedNiches.map((niche, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-semibold text-xs"
                  >
                    {niche}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Winning Products */}
        {similarProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-black text-white">
                  Similar High-Margin Products in {categoryName}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Expand your store with more verified winning items in the same niche.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
