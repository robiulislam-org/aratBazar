"use client";

import { useState, useEffect, useCallback } from "react";
import { TradeSignal } from "@/app/api/signals/route";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Clock,
  ShieldAlert,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Zap,
  CheckCircle2,
  AlertOctagon,
  SlidersHorizontal,
} from "lucide-react";

interface Props {
  initialSignals: TradeSignal[];
  initialUpdatedAt: string;
}

export default function TradeSignalsClient({
  initialSignals,
  initialUpdatedAt,
}: Props) {
  const [signals, setSignals] = useState<TradeSignal[]>(initialSignals);
  const [updatedAt, setUpdatedAt] = useState<string>(initialUpdatedAt);
  const [filter, setFilter] = useState<string>("ALL");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30 * 60); // 30 minutes countdown

  // Function to fetch latest signals
  const fetchSignals = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/signals?t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.signals) {
          setSignals(data.signals);
          setUpdatedAt(data.updatedAt);
          setSecondsRemaining(30 * 60); // Reset timer to 30 mins
        }
      }
    } catch (err) {
      console.error("Failed to fetch fresh trade signals:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 30-Minute Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          fetchSignals();
          return 30 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [fetchSignals]);

  // Format MM:SS for countdown
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedCountdown = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Filter signals
  const filteredSignals = signals.filter((sig) => {
    if (filter === "ALL") return true;
    if (filter === "BUY_ONLY") return sig.action === "BUY" || sig.action === "STRONG BUY";
    if (filter === "SELL_ONLY") return sig.action === "SELL" || sig.action === "STRONG SELL";
    if (filter === "CRYPTO") return sig.category === "crypto";
    if (filter === "FOREX") return sig.category === "forex";
    if (filter === "STOCKS") return sig.category === "stocks";
    if (filter === "COMMODITIES") return sig.category === "commodities";
    return true;
  });

  const buyCount = signals.filter((s) => s.action === "BUY" || s.action === "STRONG BUY").length;
  const sellCount = signals.filter((s) => s.action === "SELL" || s.action === "STRONG SELL").length;
  const neutralCount = signals.filter((s) => s.action === "NEUTRAL").length;

  return (
    <div className="space-y-8">
      {/* Real-time Status Control Bar */}
      <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Live Algorithmic Radar
                </span>
                <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                  Auto 30m
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Last calculated: <span className="font-mono text-slate-200">{updatedAt}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* 30m Countdown Widget */}
            <div className="flex items-center space-x-2 rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-3.5 py-2 text-xs font-mono text-cyan-300">
              <Clock className="h-4 w-4 text-cyan-400 animate-spin-slow" />
              <span>Next Scan:</span>
              <span className="font-bold text-white tracking-widest">{formattedCountdown}</span>
            </div>

            {/* Manual Refresh Button */}
            <button
              onClick={fetchSignals}
              disabled={isLoading}
              className="inline-flex items-center space-x-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 transition shadow-lg shadow-emerald-500/20 disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>{isLoading ? "Scanning Market..." : "Scan Market Now"}</span>
            </button>
          </div>
        </div>

        {/* Summary Metric Counters */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-slate-800/80 pt-5">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-3">
            <span className="text-[11px] font-medium text-emerald-400 block">
              🟢 Buy / Long Setups (Low / Dip)
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-black text-white">{buyCount}</span>
              <span className="text-[10px] text-slate-400">Oversold Opportunities</span>
            </div>
          </div>

          <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-3">
            <span className="text-[11px] font-medium text-rose-400 block">
              🔴 Sell / Short Setups (High / Peak)
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-black text-white">{sellCount}</span>
              <span className="text-[10px] text-slate-400">Take Profit / Overbought</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <span className="text-[11px] font-medium text-slate-400 block">
              ⚪ Neutral / Range Bound
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-black text-white">{neutralCount}</span>
              <span className="text-[10px] text-slate-400">Awaiting Breakout</span>
            </div>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-3">
            <span className="text-[11px] font-medium text-cyan-400 block">
              ⚡ Scan Frequency
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-black text-white">30 Min</span>
              <span className="text-[10px] text-slate-400">Zero Lag Edge Engine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Sponsored Ad Unit */}
      <AdBanner format="horizontal" label="SPONSORED BROKERAGE & TRADING DESK" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-1.5 text-xs text-slate-400">
          <SlidersHorizontal className="h-4 w-4 text-emerald-400" />
          <span className="font-semibold text-white">Filter Signals:</span>
        </div>

        <div className="flex overflow-x-auto gap-2 no-scrollbar">
          {[
            { id: "ALL", label: `All Setups (${signals.length})` },
            { id: "BUY_ONLY", label: `🟢 Buy Only (${buyCount})` },
            { id: "SELL_ONLY", label: `🔴 Sell Only (${sellCount})` },
            { id: "CRYPTO", label: "Crypto" },
            { id: "FOREX", label: "Forex" },
            { id: "STOCKS", label: "Stocks" },
            { id: "COMMODITIES", label: "Commodities" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredSignals.map((signal) => {
          const isBuy = signal.action === "STRONG BUY" || signal.action === "BUY";
          const isSell = signal.action === "STRONG SELL" || signal.action === "SELL";

          return (
            <div
              key={signal.id}
              className={`group flex flex-col justify-between rounded-2xl border bg-[#0b101c] p-6 shadow-xl transition hover:shadow-2xl ${
                signal.action === "STRONG BUY"
                  ? "border-emerald-500/50 hover:border-emerald-400 hover:shadow-emerald-950/30"
                  : signal.action === "BUY"
                  ? "border-emerald-800/40 hover:border-emerald-600/60"
                  : signal.action === "STRONG SELL"
                  ? "border-rose-500/50 hover:border-rose-400 hover:shadow-rose-950/30"
                  : signal.action === "SELL"
                  ? "border-amber-800/40 hover:border-amber-600/60"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-black tracking-wider font-mono uppercase ${
                      signal.action === "STRONG BUY"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : signal.action === "BUY"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                        : signal.action === "STRONG SELL"
                        ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                        : signal.action === "SELL"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-slate-800 text-slate-300 border border-slate-700"
                    }`}
                  >
                    {isBuy ? (
                      <TrendingUp className="h-3.5 w-3.5" />
                    ) : isSell ? (
                      <TrendingDown className="h-3.5 w-3.5" />
                    ) : (
                      <AlertOctagon className="h-3.5 w-3.5" />
                    )}
                    {signal.action}
                  </span>

                  <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-slate-400">
                    {signal.category}
                  </span>
                </div>

                {/* Asset Title & Live Price */}
                <div className="mt-4 flex items-baseline justify-between border-b border-slate-800/70 pb-4">
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {signal.symbol}
                    </h3>
                    <span className="text-xs text-slate-400">{signal.name}</span>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-xl font-black text-white block">
                      {signal.currentPrice}
                    </span>
                    <span
                      className={`inline-flex items-center font-mono text-xs font-bold ${
                        signal.changeNum >= 0 ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {signal.changeNum >= 0 ? (
                        <ArrowUpRight className="h-3 w-3 mr-0.5" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 mr-0.5" />
                      )}
                      {signal.change24h}
                    </span>
                  </div>
                </div>

                {/* Technical Catalyst / Market Context */}
                <div className="my-4 rounded-xl border border-slate-800/80 bg-[#070c16] p-3.5">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="font-bold text-slate-300 flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                      Technical Catalyst
                    </span>
                    <span className="font-mono text-slate-400">
                      RSI(14):{" "}
                      <strong
                        className={
                          signal.rsi < 35
                            ? "text-emerald-400"
                            : signal.rsi > 65
                            ? "text-rose-400"
                            : "text-slate-200"
                        }
                      >
                        {signal.rsi}
                      </strong>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {signal.technicalReason}
                  </p>
                </div>

                {/* Detailed Trade Levels Matrix */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="rounded-lg border border-slate-800/70 bg-slate-900/60 p-2.5">
                    <span className="text-[10px] text-slate-400 block uppercase">
                      {isBuy ? "Recommended Entry Zone" : "Recommended Sell / Short"}
                    </span>
                    <span className="font-bold text-white mt-0.5 block truncate">
                      {signal.entryZone}
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-800/70 bg-slate-900/60 p-2.5">
                    <span className="text-[10px] text-rose-400 block uppercase">
                      Strict Stop-Loss (SL)
                    </span>
                    <span className="font-bold text-rose-300 mt-0.5 block truncate">
                      {signal.stopLoss}
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-800/70 bg-slate-900/60 p-2.5">
                    <span className="text-[10px] text-emerald-400 block uppercase">
                      Target 1 (Conservative)
                    </span>
                    <span className="font-bold text-emerald-400 mt-0.5 block truncate">
                      {signal.target1}
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-800/70 bg-slate-900/60 p-2.5">
                    <span className="text-[10px] text-cyan-400 block uppercase">
                      Target 2 (Extended)
                    </span>
                    <span className="font-bold text-cyan-300 mt-0.5 block truncate">
                      {signal.target2}
                    </span>
                  </div>
                </div>

                {/* Risk / Reward & Confluence Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-400">
                      R:R Ratio: <strong className="text-white font-mono">{signal.riskReward}</strong>
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      Confidence:{" "}
                      <strong
                        className={
                          signal.confidence >= 85 ? "text-emerald-400" : "text-amber-400"
                        }
                      >
                        {signal.confidence}%
                      </strong>
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        signal.confidence >= 85
                          ? "bg-gradient-to-r from-teal-500 to-emerald-400"
                          : "bg-gradient-to-r from-amber-500 to-teal-400"
                      }`}
                      style={{ width: `${signal.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-[10px] text-slate-400 font-mono">
                  Timeframe: {signal.timeframe}
                </span>

                <Link
                  href="/#chart"
                  className="inline-flex items-center space-x-1 font-bold text-emerald-400 hover:text-emerald-300 transition"
                >
                  <span>Analyze On Chart</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* In-Feed Mid Ad */}
      <AdBanner format="in-feed" label="INSTITUTIONAL LIQUIDITY & EXECUTION PARTNER" />

      {/* Mandatory Risk Advisory Notice */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-950/15 p-6 text-xs text-slate-300 leading-relaxed">
        <div className="flex items-center space-x-2.5 font-bold text-amber-400 text-sm mb-2">
          <ShieldAlert className="h-5 w-5 shrink-0" />
          <span>Institutional Risk Advisory & Signal Execution Guidelines</span>
        </div>
        <p>
          The quantitative trade setups and algorithmic levels displayed on this terminal are
          generated mathematically using momentum oscillators (RSI), moving average ribbons, and
          structural liquidity zones. They are provided solely for analytical and educational
          purposes and do not constitute financial advice.
        </p>
        <p className="mt-2">
          Always apply disciplined position sizing. We recommend risking no more than 1.0% to 1.5%
          of total portfolio capital on any single transaction, and strictly adhere to predefined
          stop-loss orders. Past algorithmic accuracy does not guarantee future market results.
        </p>
      </div>
    </div>
  );
}
