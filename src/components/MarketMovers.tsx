"use client";

import { useState } from "react";
import { TOP_GAINERS, TOP_LOSERS, TICKER_ITEMS } from "@/data/marketData";
import { TrendingUp, TrendingDown, Flame, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MarketMovers() {
  const [activeTab, setActiveTab] = useState<'gainers' | 'losers' | 'volume'>('gainers');

  const mostActive = [...TICKER_ITEMS].sort((a, b) => {
    const volA = parseFloat(a.volume.replace(/[^0-9.]/g, ''));
    const volB = parseFloat(b.volume.replace(/[^0-9.]/g, ''));
    return volB - volA;
  }).slice(0, 5);

  const displayList = 
    activeTab === 'gainers' ? TOP_GAINERS :
    activeTab === 'losers' ? TOP_LOSERS :
    mostActive;

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header and Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-amber-500/10 p-2 text-amber-400 border border-amber-500/20">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Daily Market Movers</h3>
            <p className="text-xs text-slate-400">Institutional flow and price momentum leaders</p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab('gainers')}
            className={`flex items-center space-x-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'gainers'
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Top Gainers</span>
          </button>

          <button
            onClick={() => setActiveTab('losers')}
            className={`flex items-center space-x-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'losers'
                ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <TrendingDown className="h-3.5 w-3.5" />
            <span>Top Losers</span>
          </button>

          <button
            onClick={() => setActiveTab('volume')}
            className={`flex items-center space-x-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'volume'
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span>Most Active</span>
          </button>
        </div>
      </div>

      {/* Table / List */}
      <div className="mt-4 divide-y divide-slate-800/60 overflow-hidden">
        {displayList.map((asset, idx) => {
          const isPositive = asset.changePercent >= 0;
          return (
            <div
              key={`${asset.symbol}-${idx}`}
              className="flex items-center justify-between py-3 px-2 rounded-lg transition hover:bg-slate-800/40"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-slate-400 w-4">{idx + 1}</span>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-white text-sm">{asset.symbol}</span>
                    <span className="rounded bg-slate-800 px-1.5 py-0.2 text-[9px] uppercase font-mono text-slate-400">
                      {asset.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block">{asset.name}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="font-mono text-sm font-semibold text-slate-200">
                  {asset.price.startsWith("$") ? asset.price : `$${asset.price}`}
                </div>
                <div
                  className={`inline-flex items-center text-xs font-bold font-mono ${
                    isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {isPositive ? "+" : ""}{asset.changePercent}%
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 text-center">
        <Link
          href="/markets"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
        >
          <span>Explore All 200+ Live Screened Assets</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
