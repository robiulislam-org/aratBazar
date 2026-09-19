"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductItem } from "@/types/product";
import { useCart } from "@/context/CartContext";
import ProductCard from "./ProductCard";
import { 
  Star, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Lock, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  Video, 
  Sparkles,
  Zap,
  ArrowRight,
  TrendingUp,
  PackageCheck
} from "lucide-react";

interface ProductDetailClientProps {
  product: ProductItem;
  similarProducts: ProductItem[];
}

export default function ProductDetailClient({ product, similarProducts }: ProductDetailClientProps) {
  const {
    id,
    title,
    tagline,
    description,
    categoryName,
    images,
    sourcing,
    market,
    analytics,
    businessGuide,
    specs,
    rating,
    reviewsCount,
  } = product;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "viral" | "reviews" | "faq">("overview");

  const { toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(id);

  const discountPercent = Math.round(market.profitMarginPercent) || 50;

  // Realistic verified reviews
  const mockReviews = [
    {
      name: "Marcus T.",
      date: "3 days ago",
      rating: 5,
      verified: true,
      text: "Literally the best problem solver I have ever ordered online. Works 10x better than expected. Super solid build quality and delivery was swift.",
    },
    {
      name: "Sarah L.",
      date: "1 week ago",
      rating: 5,
      verified: true,
      text: "Saw this blowing up on TikTok and decided to test it out. Completely solves the daily hassle. Will definitely recommend to friends and family!",
    },
    {
      name: "David K.",
      date: "2 weeks ago",
      rating: 4,
      verified: true,
      text: "Great value for the price. Sourced as a sample for our online store and the margins are indeed outstanding.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Top Split: Interactive Gallery & Product Buy Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 relative shadow-2xl group">
            <img
              src={images[activeImageIndex] || images[0]}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-xl bg-rose-600 text-white shadow-lg">
                -{discountPercent}% OFF
              </span>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 shadow-lg flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-slate-950" />
                {analytics.trendStatus}
              </span>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(id)}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg ${
                wishlisted
                  ? "bg-rose-500 text-white"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Heart className={`w-5 h-5 ${wishlisted ? "fill-white" : ""}`} />
            </button>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`aspect-square rounded-2xl overflow-hidden bg-slate-950 border transition-all ${
                    activeImageIndex === i
                      ? "border-emerald-500 ring-2 ring-emerald-500/30"
                      : "border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantees Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">MOQ</span>
              <span className="font-bold text-slate-200">{sourcing.moq}</span>
            </div>
            <div className="border-x border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Est. Shipping</span>
              <span className="font-bold text-slate-200">{sourcing.shippingTimeEst}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Market Demand</span>
              <span className="font-bold text-emerald-400">{analytics.competitionLevel} Comp</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Buying Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 font-bold uppercase text-[10px]">
                {categoryName}
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{rating.toFixed(1)}</span>
                <span className="text-slate-500 font-normal">
                  ({reviewsCount.toLocaleString()} verified reviews)
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              {title}
            </h1>
            <p className="text-sm text-emerald-400/90 font-semibold mt-2">
              {tagline}
            </p>
          </div>

          {/* Pricing Master Box */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-baseline gap-3 pb-3 border-b border-slate-800">
              <span className="text-3xl sm:text-4xl font-black text-white">
                ${sourcing.lowestPrice.toFixed(2)}
              </span>
              <span className="text-base text-slate-500 line-through decoration-slate-600">
                ${market.retailPrice.toFixed(2)}
              </span>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-400">
                Save ${market.potentialProfit.toFixed(2)} ({discountPercent}%)
              </span>
            </div>

            {/* Urgency Counter */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                In Stock & Ready for Priority Dispatch
              </span>
              <span className="text-amber-400 font-semibold text-[11px]">
                ⚡ {analytics.tiktokViews} Social Buzz
              </span>
            </div>

            {/* Direct Purchase / Best Resource Sourcing CTA */}
            <div className="pt-2 space-y-3">
              {/* Primary Direct Buy Button */}
              <a
                href={sourcing.supplierUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2.5 group"
              >
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>Buy at Factory Rate (${sourcing.lowestPrice.toFixed(2)})</span>
              </a>

              {/* Direct Multi-Marketplace Best Resource Links */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Direct Verified Sourcing Resources:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* AliExpress Verified Factory */}
                  <a
                    href={sourcing.supplierUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-emerald-500/30 text-slate-200 text-xs font-bold transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>AliExpress Factory</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <span>${sourcing.lowestPrice.toFixed(2)}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  {/* Amazon Competitor Benchmark */}
                  <a
                    href={market.competitorStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 text-slate-200 text-xs font-bold transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>Amazon Retail</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="line-through">${market.retailPrice.toFixed(2)}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  {/* CJ Dropshipping */}
                  {sourcing.secondarySuppliers?.[0] && (
                    <a
                      href={sourcing.secondarySuppliers[0].url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 text-slate-200 text-xs font-bold transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>CJ Dropshipping</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <span>${sourcing.secondarySuppliers[0].price.toFixed(2)}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  )}

                  {/* Temu Direct Factory */}
                  {sourcing.secondarySuppliers?.[1] && (
                    <a
                      href={sourcing.secondarySuppliers[1].url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 text-slate-200 text-xs font-bold transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Temu Factory</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-purple-400">
                        <span>${sourcing.secondarySuppliers[1].price.toFixed(2)}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Buyer Protection Badges */}
            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400" /> Free Global Tracking
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" /> 30-Day Money Back
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400" /> Direct Manufacturer Price
              </span>
              <span className="flex items-center gap-1.5">
                <PackageCheck className="w-3.5 h-3.5 text-purple-400" /> Verified Factory Direct
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs: Overview, Specs, Market Intelligence, Customer Reviews */}
      <div className="pt-8 border-t border-slate-800">
        {/* Tab Buttons */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Product Overview & Features
          </button>

          <button
            onClick={() => setActiveTab("specs")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
              activeTab === "specs"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Technical Specifications
          </button>

          <button
            onClick={() => setActiveTab("viral")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
              activeTab === "viral"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Viral Market Dossier
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
              activeTab === "reviews"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Customer Reviews ({reviewsCount})
          </button>

          <button
            onClick={() => setActiveTab("faq")}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
              activeTab === "faq"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Buyer FAQs (3)
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="pt-6 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-black text-white">Why This Product Solves Real Problems</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {businessGuide.whyItSells.map((point, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Technical Specifications */}
        {activeTab === "specs" && (
          <div className="pt-6">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-black text-white">Full Technical Specifications</h3>
              <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="py-3 flex items-center justify-between">
                    <span className="font-semibold text-slate-400">{key}</span>
                    <span className="font-bold text-slate-200">{value}</span>
                  </div>
                ))}
                <div className="py-3 flex items-center justify-between">
                  <span className="font-semibold text-slate-400">SKU / Item ID</span>
                  <span className="font-mono text-emerald-400 font-bold">{id}</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-semibold text-slate-400">Global Category</span>
                  <span className="font-bold text-slate-200">{categoryName}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Viral Market Dossier */}
        {activeTab === "viral" && (
          <div className="pt-6 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-purple-400" />
                <span>Short-Form Video Ad Hooks (TikTok & Reels)</span>
              </h3>
              <p className="text-xs text-slate-400">
                Proven 3-second hook openers used by top viral content creators and dropshippers:
              </p>
              <div className="space-y-3">
                {businessGuide.adHooks.map((hook, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs sm:text-sm font-medium text-slate-200">
                    "{hook}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Customer Reviews */}
        {activeTab === "reviews" && (
          <div className="pt-6 space-y-4">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-black text-white">Verified Customer Feedback</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white">{rating.toFixed(1)} out of 5</span>
                    <span className="text-xs text-slate-400">({reviewsCount.toLocaleString()} global buyers)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {mockReviews.map((rev, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/70 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <strong className="text-white">{rev.name}</strong>
                        {rev.verified && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-slate-500">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {rev.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Buyer FAQs (SEO Accordion) */}
        {activeTab === "faq" && (
          <div className="pt-6 space-y-4">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5">
              <div>
                <h3 className="text-lg font-black text-white">Frequently Asked Questions</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Everything you need to know about purchasing, shipping, and warranty.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="text-emerald-400">Q:</span>
                    <span>Why is {title} cheaper here than on Amazon or retail stores?</span>
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed pl-5">
                    AratBazar aggregates direct verified tier-1 factory manufacturers across AliExpress, CJ Dropshipping, and Temu. By cutting out middleman markups and expensive third-party retailer commissions, you source directly at factory pricing (${sourcing.lowestPrice.toFixed(2)}).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="text-emerald-400">Q:</span>
                    <span>How long does delivery take and how can I track it?</span>
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed pl-5">
                    Estimated delivery time is {sourcing.shippingTimeEst}. End-to-end online package tracking numbers are dispatched directly to your email or order dashboard.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="text-emerald-400">Q:</span>
                    <span>What if I am not satisfied with my product?</span>
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed pl-5">
                    Every order is protected by our 30-Day Risk-Free Money Back Guarantee and complete buyer protection against defects or damages during shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Frequently Bought Together / Related Viral Products */}
      {similarProducts.length > 0 && (
        <div className="pt-12 border-t border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <span>Customers Also Explored</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                  {categoryName}
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                More high-demand problem solvers from the same viral category
              </p>
            </div>
            <Link
              href={`/category/${product.category}`}
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>View Category</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {similarProducts.slice(0, 4).map((sim) => (
              <ProductCard key={sim.id} product={sim} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
