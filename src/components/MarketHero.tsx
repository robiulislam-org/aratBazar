"use client";

import { useState, useEffect } from "react";
import { MARKET_PULSE } from "@/data/marketData";
import { Gauge, DollarSign, Percent, ShieldCheck, Zap } from "lucide-react";
import { getWallStreetSession, MarketSessionInfo } from "@/utils/marketHours";

export default function MarketHero() {
  const [session, setSession] = useState<MarketSessionInfo>(getWallStreetSession());

  useEffect(() => {
    setSession(getWallStreetSession());
    const interval = setInterval(() => {
      setSession(getWallStreetSession());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-slate-800/80 bg-gradient-to-b from-[#090d16] via-[#0d1424] to-[#090d16] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-6 border-b border-slate-800/60">
          <div>
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
              <Zap className="h-3.5 w-3.5" />
              <span>INSTITUTIONAL MACRO INTELLIGENCE</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Global Financial Market Terminal
            </h1>
            <p className="mt-1.5 text-sm sm:text-base text-slate-400 max-w-2xl">
              Real-time multi-asset quotes, systematic algorithmic sentiment, and deep macroeconomic briefings for professional capital allocators.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 text-xs">
            {/* Dynamic Market Session Indicator */}
            <div
              className={`rounded-lg border px-3.5 py-2 transition ${
                session.isOpen
                  ? "border-emerald-500/40 bg-emerald-950/30"
                  : "border-rose-500/50 bg-rose-950/30"
              }`}
            >
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                Wall Street Session
              </span>
              <span
                className={`font-bold flex items-center gap-1.5 mt-0.5 ${
                  session.isOpen ? "text-emerald-400" : "text-rose-300"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${session.dotColor} ${
                    session.isOpen ? "animate-ping" : ""
                  }`}
                ></span>
                <span>
                  {session.isOpen ? "মার্কেট চালু আছে (Open)" : "এখন মার্কেট অফ আছে (Closed)"}
                </span>
              </span>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Algorithmic Bias</span>
              <span className="font-semibold text-teal-300 mt-0.5 block">
                {MARKET_PULSE.marketSentiment}
              </span>
            </div>
          </div>
        </div>

        {/* Institutional Macro Metrics Bar */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {/* Fear & Greed Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-medium flex items-center gap-1.5">
                <Gauge className="h-4 w-4 text-emerald-400" />
                Fear & Greed Index
              </span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Live</span>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">{MARKET_PULSE.fearGreedIndex}</span>
              <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                {MARKET_PULSE.fearGreedLabel}
              </span>
            </div>
            {/* Meter bar */}
            <div className="mt-2.5 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-500"
                style={{ width: `${MARKET_PULSE.fearGreedIndex}%` }}
              ></div>
            </div>
          </div>

          {/* DXY Dollar Index */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-medium flex items-center gap-1.5">
                <DollarSign className="h-4 w-4 text-cyan-400" />
                US Dollar Index (DXY)
              </span>
              <span className="text-[10px] font-mono text-cyan-400">FX Benchmark</span>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">{MARKET_PULSE.dxyIndex}</span>
              <span className="text-xs font-semibold text-emerald-400 font-mono">
                {MARKET_PULSE.dxyChange}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Safe-haven currency resilience</p>
          </div>

          {/* 10-Yr Treasury Yield */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-medium flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-amber-400" />
                US 10-Yr Benchmark Yield
              </span>
              <span className="text-[10px] font-mono text-amber-400">Bonds</span>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">{MARKET_PULSE.tenYearYield}</span>
              <span className="text-xs font-semibold text-rose-400 font-mono">
                {MARKET_PULSE.tenYearChange}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Sovereign discount benchmark</p>
          </div>

          {/* Capital Protection Metric */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-medium flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-teal-400" />
                Institutional Risk Model
              </span>
              <span className="text-[10px] font-mono text-teal-400">Basel III</span>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-xl font-bold text-white">Tier-1 Assets</span>
              <span className="text-xs font-bold text-emerald-400">Optimal</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">Portfolio stress threshold: Low</p>
          </div>
        </div>
      </div>
    </section>
  );
}
