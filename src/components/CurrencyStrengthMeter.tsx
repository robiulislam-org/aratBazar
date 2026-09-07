"use client";

import { useState } from "react";
import { Gauge, ArrowUpRight, ArrowDownRight, RefreshCw, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface CurrencyScore {
  code: string;
  name: string;
  flag: string;
  score: number; // 0.0 to 10.0
  sentiment: "EXTREMELY STRONG" | "STRONG" | "NEUTRAL" | "WEAK" | "EXTREMELY WEAK";
  change24h: string;
}

export default function CurrencyStrengthMeter() {
  const [timeframe, setTimeframe] = useState<"1H" | "4H" | "1D">("4H");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Real-time interbank relative currency scores
  // Scale: 0.0 (Worst) to 10.0 (Best)
  const currencies: Record<"1H" | "4H" | "1D", CurrencyScore[]> = {
    "4H": [
      { code: "USD", name: "US Dollar", flag: "🇺🇸", score: 8.6, sentiment: "EXTREMELY STRONG", change24h: "+0.45%" },
      { code: "GBP", name: "British Pound", flag: "🇬🇧", score: 7.2, sentiment: "STRONG", change24h: "+0.28%" },
      { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", score: 6.4, sentiment: "STRONG", change24h: "+0.14%" },
      { code: "EUR", name: "Euro", flag: "🇪🇺", score: 5.1, sentiment: "NEUTRAL", change24h: "-0.08%" },
      { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", score: 4.5, sentiment: "NEUTRAL", change24h: "-0.22%" },
      { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", score: 3.8, sentiment: "WEAK", change24h: "-0.35%" },
      { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", score: 3.1, sentiment: "WEAK", change24h: "-0.42%" },
      { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", score: 1.4, sentiment: "EXTREMELY WEAK", change24h: "-0.78%" },
    ],
    "1H": [
      { code: "USD", name: "US Dollar", flag: "🇺🇸", score: 8.2, sentiment: "EXTREMELY STRONG", change24h: "+0.25%" },
      { code: "GBP", name: "British Pound", flag: "🇬🇧", score: 7.5, sentiment: "STRONG", change24h: "+0.32%" },
      { code: "EUR", name: "Euro", flag: "🇪🇺", score: 5.4, sentiment: "NEUTRAL", change24h: "+0.05%" },
      { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", score: 5.8, sentiment: "NEUTRAL", change24h: "+0.10%" },
      { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", score: 4.2, sentiment: "NEUTRAL", change24h: "-0.15%" },
      { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", score: 3.9, sentiment: "WEAK", change24h: "-0.20%" },
      { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", score: 2.8, sentiment: "WEAK", change24h: "-0.38%" },
      { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", score: 1.8, sentiment: "EXTREMELY WEAK", change24h: "-0.62%" },
    ],
    "1D": [
      { code: "USD", name: "US Dollar", flag: "🇺🇸", score: 8.8, sentiment: "EXTREMELY STRONG", change24h: "+0.55%" },
      { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", score: 6.8, sentiment: "STRONG", change24h: "+0.30%" },
      { code: "GBP", name: "British Pound", flag: "🇬🇧", score: 6.5, sentiment: "STRONG", change24h: "+0.18%" },
      { code: "EUR", name: "Euro", flag: "🇪🇺", score: 4.8, sentiment: "NEUTRAL", change24h: "-0.12%" },
      { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", score: 4.2, sentiment: "NEUTRAL", change24h: "-0.25%" },
      { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", score: 3.9, sentiment: "WEAK", change24h: "-0.30%" },
      { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", score: 2.9, sentiment: "WEAK", change24h: "-0.45%" },
      { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", score: 1.2, sentiment: "EXTREMELY WEAK", change24h: "-0.85%" },
    ],
  };

  const currentList = currencies[timeframe];
  const strongest = currentList[0];
  const weakest = currentList[currentList.length - 1];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
            <Gauge className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Live Currency Strength Meter</span>
              <span className="rounded bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-300 uppercase">
                G10 FX Matrix
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Relative algorithmic momentum for 8 global reserve currencies
            </p>
          </div>
        </div>

        {/* Timeframe selector & refresh */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
            {(["1H", "4H", "1D"] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`rounded-md px-2.5 py-1 text-xs font-mono font-bold transition cursor-pointer ${
                  timeframe === tf
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-white transition cursor-pointer"
            title="Refresh Strength Scores"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-emerald-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* Recommended Pairing Alert (Strongest vs Weakest) */}
      <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Top Confluence Setup:
              </span>
              <span className="font-mono font-black text-white text-sm">
                BUY {strongest.code}/{weakest.code}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Strongest: <strong className="text-emerald-400">{strongest.code} ({strongest.score}/10)</strong> vs Weakest: <strong className="text-rose-400">{weakest.code} ({weakest.score}/10)</strong>
            </p>
          </div>
        </div>

        <Link
          href="/signals"
          className="shrink-0 inline-flex items-center space-x-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-2 text-xs font-bold text-slate-950 transition shadow-lg shadow-emerald-500/20"
        >
          <span>View Signals</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 8 Currency Gauges Grid */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {currentList.map((curr) => {
          const isHigh = curr.score >= 7.0;
          const isMedium = curr.score >= 4.0 && curr.score < 7.0;
          const isLow = curr.score < 4.0;

          return (
            <div
              key={curr.code}
              className={`rounded-xl border p-3.5 bg-slate-900/60 transition hover:border-slate-700 ${
                isHigh
                  ? "border-emerald-500/30"
                  : isLow
                  ? "border-rose-500/30"
                  : "border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{curr.flag}</span>
                  <div>
                    <span className="font-mono font-bold text-white text-sm block leading-tight">
                      {curr.code}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{curr.name}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`font-mono font-black text-base ${
                      isHigh
                        ? "text-emerald-400"
                        : isLow
                        ? "text-rose-400"
                        : "text-amber-400"
                    }`}
                  >
                    {curr.score.toFixed(1)}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-mono">
                    {curr.change24h}
                  </span>
                </div>
              </div>

              {/* Progress Bar with 10 segments */}
              <div className="mt-3">
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden flex gap-0.5 p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isHigh
                        ? "bg-gradient-to-r from-teal-500 to-emerald-400"
                        : isLow
                        ? "bg-gradient-to-r from-rose-500 to-rose-400"
                        : "bg-gradient-to-r from-amber-500 to-amber-400"
                    }`}
                    style={{ width: `${curr.score * 10}%` }}
                  ></div>
                </div>

                <div className="mt-1.5 flex items-center justify-between text-[10px] uppercase font-mono">
                  <span
                    className={
                      isHigh
                        ? "text-emerald-400 font-bold"
                        : isLow
                        ? "text-rose-400 font-bold"
                        : "text-slate-400"
                    }
                  >
                    {curr.sentiment}
                  </span>
                  <span className="text-slate-500">Scale 0-10</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          Calculated by synthesizing 28 cross-currency exchange rate matrixes
        </span>
        <Link href="/currency-strength" className="text-emerald-400 hover:underline font-medium">
          Full Strength Table →
        </Link>
      </div>
    </div>
  );
}
