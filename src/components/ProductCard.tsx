"use client";

import React from "react";
import Link from "next/link";
import { ProductItem } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Check, 
  Flame, 
  Zap,
  Eye,
  ExternalLink
} from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { 
    id,
    slug, 
    title, 
    categoryName, 
    images, 
    sourcing, 
    market, 
    rating, 
    reviewsCount 
  } = product;

  const { toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(id);

  const discountPercent = Math.round(market.profitMarginPercent) || 50;

  return (
    <div className="group bg-slate-900/90 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between relative">
      {/* Top Image Box */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
        <Link href={`/product/${slug}`} className="block w-full h-full">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              if (images[1] && target.src !== images[1]) {
                target.src = images[1];
              }
            }}
          />
        </Link>

        {/* Discount & Hot Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none">
          <span className="px-2 py-0.5 rounded-md bg-rose-600 text-white font-black text-[10px] uppercase tracking-wider shadow-md">
            -{discountPercent}%
          </span>
          {rating >= 4.8 && (
            <span className="px-1.5 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-md flex items-center gap-0.5">
              <Flame className="w-2.5 h-2.5 fill-slate-950" />
              HOT
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md ${
            wishlisted
              ? "bg-rose-500 text-white"
              : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`} />
        </button>

        {/* Quick View Link on hover */}
        <Link
          href={`/product/${slug}`}
          className="absolute inset-x-3 bottom-2.5 py-2 rounded-xl bg-slate-950/85 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs font-bold text-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md flex items-center justify-center gap-1.5 shadow-lg"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View Details</span>
        </Link>
      </div>

      {/* Clean Details Section (No Clutter, Professional E-Commerce) */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtle Category */}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
            {categoryName}
          </span>

          {/* Product Title */}
          <Link href={`/product/${slug}`} className="block group-hover:text-emerald-400 transition-colors">
            <h3 className="font-bold text-sm text-slate-100 leading-snug line-clamp-2 min-h-[2.5rem]">
              {title}
            </h3>
          </Link>

          {/* Rating & Social Proof */}
          <div className="flex items-center gap-1.5 text-xs mt-2">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <span className="text-slate-500 text-[11px]">
              ({reviewsCount > 1000 ? `${(reviewsCount / 1000).toFixed(1)}k` : reviewsCount} sold)
            </span>
          </div>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-lg font-black text-emerald-400">
              ${sourcing.lowestPrice.toFixed(2)}
            </span>
            <span className="text-xs text-slate-500 line-through">
              ${market.retailPrice.toFixed(2)}
            </span>
            <span className="text-[10px] font-bold text-emerald-400/90 ml-auto bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded">
              Factory Rate
            </span>
          </div>
        </div>

        {/* Action Button: Direct Supplier Link */}
        <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center gap-2">
          <a
            href={sourcing.supplierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 hover:scale-[1.02] active:scale-95 group/btn"
            title={`Direct Factory Source: ${title}`}
          >
            <span>Get Deal (${sourcing.lowestPrice.toFixed(2)})</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>

          <Link
            href={`/product/${slug}`}
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 hover:text-white"
            title="View Full Specs & Sourcing Intelligence"
          >
            <Eye className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
