"use client";

import { TICKER_ITEMS } from "@/data/marketData";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function TickerTape() {
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-800 bg-[#060911] py-2">
      <div className="flex animate-ticker whitespace-nowrap">
        {duplicatedItems.map((item, idx) => {
          const isPositive = item.changePercent >= 0;
          return (
            <div
              key={`${item.symbol}-${idx}`}
              className="mx-4 flex items-center space-x-2.5 rounded border border-slate-800/60 bg-slate-900/60 px-3 py-1 text-xs transition hover:border-slate-700"
            >
              <span className="font-bold text-slate-200">{item.symbol}</span>
              <span className="text-slate-400 font-mono">{item.category === "forex" ? item.price : `$${item.price}`}</span>
              <span
                className={`flex items-center font-mono font-semibold ${
                  isPositive ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="mr-0.5 h-3 w-3" />
                ) : (
                  <TrendingDown className="mr-0.5 h-3 w-3" />
                )}
                {item.changePercent > 0 ? `+${item.changePercent}%` : `${item.changePercent}%`}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Vol: {item.volume}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
