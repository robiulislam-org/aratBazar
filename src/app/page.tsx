import MarketHero from "@/components/MarketHero";
import TradingViewChart from "@/components/TradingViewChart";
import MarketMovers from "@/components/MarketMovers";
import EconomicCalendar from "@/components/EconomicCalendar";
import RiskCalculator from "@/components/RiskCalculator";
import NewsSection from "@/components/NewsSection";
import AdBanner from "@/components/AdBanner";
import { ShieldCheck, TrendingUp, Award, Layers } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-16">
      {/* Hero Macro Pulse */}
      <MarketHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Ad Unit */}
        <AdBanner format="horizontal" label="SPONSORED FINANCIAL PLACEMENT • BILLBOARD" />

        {/* Primary Trading Workspace: Chart + Movers */}
        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Interactive Institutional Chart (2 Cols) */}
          <div className="lg:col-span-2">
            <TradingViewChart />
          </div>

          {/* Market Movers & Hot Orderbook (1 Col) */}
          <div className="lg:col-span-1">
            <MarketMovers />
          </div>
        </div>

        {/* Secondary Pro Tools Grid: Risk Engine + Macro Calendar */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Pro Risk & Position Calculator */}
          <RiskCalculator />

          {/* Macro Economic Calendar */}
          <EconomicCalendar />
        </div>

        {/* Middle Ad Unit */}
        <div className="my-8">
          <AdBanner format="in-feed" label="INSTITUTIONAL PARTNER SPOTLIGHT" />
        </div>

        {/* Daily Intelligence & Analysis Feed */}
        <NewsSection />

        {/* Value Proposition & Trust Section */}
        <section className="mt-12 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-900 via-[#0c1322] to-slate-900 p-8 text-center shadow-xl">
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Award className="h-4 w-4" />
            <span>GLOBAL FINANCIAL ACCURACY GUARANTEE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineered for Precision, Mathematical Discipline & Consistency
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
            AratBazar aggregates streaming institutional data feeds, central bank communications, and quantitative indicators without retail bias. Bookmark AratBazar as your essential market companion.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <span className="text-2xl font-black text-emerald-400 font-mono">100%</span>
              <span className="text-xs text-slate-400 block mt-1">Real-Time Data Feeds</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <span className="text-2xl font-black text-teal-400 font-mono">&lt; 50ms</span>
              <span className="text-xs text-slate-400 block mt-1">Global Edge Latency</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <span className="text-2xl font-black text-cyan-400 font-mono">24/7</span>
              <span className="text-xs text-slate-400 block mt-1">Crypto & FX Updates</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <span className="text-2xl font-black text-amber-400 font-mono">Zero Fee</span>
              <span className="text-xs text-slate-400 block mt-1">Open Financial Tools</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools"
              className="rounded-xl bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              Launch Calculators
            </Link>
            <Link
              href="/calendar"
              className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700"
            >
              View Economic Calendar
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
