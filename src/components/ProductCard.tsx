"use client";

import React from "react";
import Link from "next/link";
import { ProductItem } from "@/types/product";
import { 
  TrendingUp, 
  ExternalLink, 
  Flame, 
  Sparkles, 
  DollarSign, 
  Star, 
  ShieldCheck, 
  BarChart2, 
  ArrowRight 
} from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    slug,
    title,
    tagline,
    categoryName,
    images,
    sourcing,
    market,
    analytics,
    rating,
    reviewsCount,
  } = product;

  return (
    <div className="group bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {categoryName}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/90 text-slate-950 shadow-md backdrop-blur-md flex items-center gap-1">
            <Flame className="w-3 h-3 fill-slate-950" />
            {analytics.trendStatus.replace(/^[^\w]+/, "")}
          </span>
        </div>

        {/* Bottom Image Overlay: Sourcing & Margin Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="bg-slate-900/95 border border-slate-800/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
            <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Factory Sourcing</span>
            <span className="text-sm font-extrabold text-white">${sourcing.lowestPrice.toFixed(2)}</span>
          </div>
          <div className="bg-emerald-950/90 border border-emerald-500/50 px-2.5 py-1 rounded-lg backdrop-blur-md text-right">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block leading-tight">Net Profit Spread</span>
            <span className="text-sm font-extrabold text-emerald-400 flex items-center justify-end gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" />
              +{market.profitMarginPercent.toFixed(0)}%
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Social Proof & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <div className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{rating.toFixed(1)}</span>
              <span className="text-slate-500 font-normal">({reviewsCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px]">{analytics.tiktokViews} Buzz</span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/product/${slug}`} className="block group-hover:text-emerald-400 transition-colors">
            <h3 className="font-bold text-base text-slate-100 leading-snug line-clamp-2">
              {title}
            </h3>
          </Link>
          <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {tagline}
          </p>

          {/* Seller Margin Breakdown Box */}
          <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Retail Selling Benchmark:</span>
              <span className="font-semibold text-slate-200 line-through decoration-slate-500">${market.retailPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Lowest Factory Source:</span>
              <span className="font-bold text-emerald-400">${sourcing.lowestPrice.toFixed(2)}</span>
            </div>
            <div className="pt-1.5 border-t border-slate-800/70 flex items-center justify-between font-bold text-slate-200">
              <span className="text-emerald-400 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Potential Margin:
              </span>
              <span className="text-emerald-400 font-extrabold">+${market.potentialProfit.toFixed(2)} / unit</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2">
          {/* Direct Verified Supplier Link */}
          <a
            href={sourcing.supplierUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-emerald-600/20"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Source at ${sourcing.lowestPrice.toFixed(2)}</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* View Research Dossier */}
          <Link
            href={`/product/${slug}`}
            className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors border border-slate-700"
            title="View Seller Research Dossier"
          >
            <BarChart2 className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Dossier</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
