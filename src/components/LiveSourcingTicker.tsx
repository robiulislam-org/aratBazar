"use client";

import React from "react";
import Link from "next/link";
import { TICKER_PRODUCTS } from "@/data/productsData";
import { TrendingUp, Sparkles, ExternalLink } from "lucide-react";

export default function LiveSourcingTicker() {
  const tickerItems = TICKER_PRODUCTS;

  return (
    <div className="w-full bg-slate-950 border-y border-emerald-500/20 py-2.5 overflow-hidden relative shadow-inner">
      {/* Subtle Glow Indicator */}
      <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent w-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent w-20 pointer-events-none" />

      <div className="flex items-center">
        {/* Static Badge on Left */}
        <div className="hidden md:flex items-center gap-2 pl-4 pr-3 border-r border-slate-800 text-xs font-semibold text-emerald-400 shrink-0 z-20 bg-slate-950">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>LIVE SOURCING FEEDS:</span>
        </div>

        {/* Scrolling Ribbon */}
        <div className="flex animate-ticker whitespace-nowrap gap-6 items-center text-xs">
          {[...tickerItems, ...tickerItems].map((prod, idx) => (
            <Link
              key={`${prod.id}-${idx}`}
              href={`/product/${prod.slug}`}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/50 transition-colors group shrink-0"
            >
              <span className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {prod.title.length > 32 ? `${prod.title.slice(0, 32)}...` : prod.title}
              </span>
              <span className="text-slate-400">
                Source: <strong className="text-slate-200">${prod.sourcing.lowestPrice.toFixed(2)}</strong>
              </span>
              <span className="text-slate-500">→</span>
              <span className="text-slate-400">
                Sell: <strong className="text-slate-200">${prod.market.retailPrice.toFixed(2)}</strong>
              </span>
              <span className="font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-700/50 px-1.5 py-0.5 rounded text-[11px] flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5" />
                +{prod.market.profitMarginPercent.toFixed(0)}% Margin
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
