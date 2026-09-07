"use client";

import { useState } from "react";
import { Grid, Flame, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Layers } from "lucide-react";
import Link from "next/link";

interface HeatmapAsset {
  symbol: string;
  name: string;
  price: string;
  change: number; // percentage
  marketCap: string;
  category: "crypto" | "stocks";
  size: "large" | "medium" | "small";
}

const HEATMAP_DATA: HeatmapAsset[] = [
  // Crypto
  { symbol: "BTC", name: "Bitcoin", price: "$79,489.70", change: -0.60, marketCap: "$1.57T", category: "crypto", size: "large" },
  { symbol: "ETH", name: "Ethereum", price: "$2,494.56", change: -0.34, marketCap: "$300B", category: "crypto", size: "large" },
  { symbol: "SOL", name: "Solana", price: "$104.95", change: -1.32, marketCap: "$49B", category: "crypto", size: "medium" },
  { symbol: "XRP", name: "Ripple", price: "$2.45", change: 4.20, marketCap: "$138B", category: "crypto", size: "medium" },
  { symbol: "BNB", name: "BNB Chain", price: "$642.10", change: 1.85, marketCap: "$93B", category: "crypto", size: "medium" },
  { symbol: "DOGE", name: "Dogecoin", price: "$0.22", change: 3.40, marketCap: "$32B", category: "crypto", size: "small" },
  { symbol: "ADA", name: "Cardano", price: "$0.78", change: -0.95, marketCap: "$27B", category: "crypto", size: "small" },
  { symbol: "AVAX", name: "Avalanche", price: "$28.40", change: 2.15, marketCap: "$11B", category: "crypto", size: "small" },

  // Stocks
  { symbol: "NVDA", name: "Nvidia", price: "$148.80", change: 3.91, marketCap: "$3.64T", category: "stocks", size: "large" },
  { symbol: "AAPL", name: "Apple Inc", price: "$238.40", change: 0.78, marketCap: "$3.61T", category: "stocks", size: "large" },
  { symbol: "MSFT", name: "Microsoft", price: "$428.10", change: 0.42, marketCap: "$3.18T", category: "stocks", size: "large" },
  { symbol: "TSLA", name: "Tesla", price: "$352.10", change: -2.33, marketCap: "$1.12T", category: "stocks", size: "medium" },
  { symbol: "AMZN", name: "Amazon", price: "$212.40", change: 1.15, marketCap: "$2.23T", category: "stocks", size: "medium" },
  { symbol: "GOOGL", name: "Alphabet", price: "$184.20", change: -0.45, marketCap: "$2.28T", category: "stocks", size: "medium" },
  { symbol: "META", name: "Meta Platforms", price: "$684.50", change: 2.30, marketCap: "$1.73T", category: "stocks", size: "medium" },
  { symbol: "PLTR", name: "Palantir Tech", price: "$69.20", change: 5.65, marketCap: "$154B", category: "stocks", size: "small" },
];

export default function MarketHeatmap() {
  const [activeFilter, setActiveFilter] = useState<"all" | "crypto" | "stocks">("all");

  const filteredAssets =
    activeFilter === "all"
      ? HEATMAP_DATA
      : HEATMAP_DATA.filter((a) => a.category === activeFilter);

  // Helper for background color intensity based on gain/loss
  const getBoxStyle = (change: number) => {
    if (change >= 4.0) {
      return "bg-emerald-600/80 border-emerald-400 text-white shadow-lg shadow-emerald-950/40";
    }
    if (change >= 1.5) {
      return "bg-emerald-700/60 border-emerald-500/60 text-slate-100";
    }
    if (change > 0) {
      return "bg-emerald-900/50 border-emerald-600/40 text-slate-200";
    }
    if (change <= -3.0) {
      return "bg-rose-700/80 border-rose-400 text-white shadow-lg shadow-rose-950/40";
    }
    if (change <= -1.0) {
      return "bg-rose-800/60 border-rose-500/60 text-slate-100";
    }
    return "bg-rose-900/40 border-rose-700/40 text-slate-300";
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-500/20">
            <Grid className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Interactive Market Heatmap</span>
              <span className="rounded bg-cyan-500/20 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-mono text-cyan-300 uppercase">
                Visual Momentum
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Real-time sector performance & capital distribution treemap
            </p>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
          {(["all", "crypto", "stocks"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveFilter(mode)}
              className={`rounded-md px-3 py-1 text-xs font-semibold uppercase font-mono transition cursor-pointer ${
                activeFilter === mode
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {mode === "all" ? "All Sectors" : mode}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5">
        {filteredAssets.map((asset) => {
          const isPositive = asset.change >= 0;
          const isLarge = asset.size === "large";

          return (
            <div
              key={asset.symbol}
              className={`rounded-xl border p-4 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between cursor-default ${
                isLarge ? "sm:col-span-2 min-h-[110px]" : "min-h-[95px]"
              } ${getBoxStyle(asset.change)}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-black font-mono text-base tracking-wider block">
                    {asset.symbol}
                  </span>
                  <span className="text-[10px] opacity-80 block truncate max-w-[120px]">
                    {asset.name}
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs block opacity-90">
                    {asset.price}
                  </span>
                  <span className="text-[10px] opacity-75 font-mono block">
                    Cap: {asset.marketCap}
                  </span>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span
                  className={`inline-flex items-center font-mono text-xs font-black ${
                    isPositive ? "text-emerald-200" : "text-rose-200"
                  }`}
                >
                  {isPositive ? (
                    <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />
                  )}
                  {asset.change > 0 ? `+${asset.change.toFixed(2)}%` : `${asset.change.toFixed(2)}%`}
                </span>

                <span className="rounded bg-black/30 px-1.5 py-0.5 text-[9px] font-mono uppercase">
                  {asset.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Heatmap Legend */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] uppercase font-mono">Heat Scale:</span>
          <div className="flex items-center space-x-1">
            <span className="h-3 w-5 rounded bg-rose-700 text-[8px] text-center text-white font-mono">-3%</span>
            <span className="h-3 w-5 rounded bg-rose-900 text-[8px] text-center text-white font-mono">-1%</span>
            <span className="h-3 w-5 rounded bg-slate-800 text-[8px] text-center text-white font-mono">0%</span>
            <span className="h-3 w-5 rounded bg-emerald-900 text-[8px] text-center text-white font-mono">+1%</span>
            <span className="h-3 w-5 rounded bg-emerald-600 text-[8px] text-center text-white font-mono">+3%+</span>
          </div>
        </div>

        <Link
          href="/signals"
          className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 transition"
        >
          <span>Find High-Momentum Setups on Scanner</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
