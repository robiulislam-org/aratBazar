import React from "react";
import Link from "next/link";
import { INITIAL_PRODUCTS, CATEGORIES } from "@/data/productsData";
import ProductGrid from "@/components/ProductGrid";
import CategoryNavGrid from "@/components/CategoryNavGrid";
import FlashSaleBanner from "@/components/FlashSaleBanner";
import ProfitCalculatorWidget from "@/components/ProfitCalculatorWidget";
import { 
  Flame, 
  ShieldCheck, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Zap, 
  PackageCheck,
  TrendingUp,
  Truck,
  RotateCcw,
  Lock
} from "lucide-react";

export default function HomePage() {
  const totalProductsCount = INITIAL_PRODUCTS.length;
  const avgMargin = (
    INITIAL_PRODUCTS.reduce((acc, p) => acc + p.market.profitMarginPercent, 0) / totalProductsCount
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-12 md:pt-16 md:pb-20 border-b border-slate-800/60">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-800/80 text-emerald-400 text-xs font-bold mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>5,000+ VIRAL PROBLEM-SOLVING PRODUCTS</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-medium">Direct Factory Sourcing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Uncommon Products. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Insane Demand.</span> Factory Direct.
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Discover {totalProductsCount}+ rare, problem-solving inventions you won't find in ordinary local stores. Matched directly with verified lowest-cost factory suppliers so sellers earn 75%+ margins and smart shoppers buy at wholesale rates.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#winning-products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.02]"
              >
                <Flame className="w-4 h-4 fill-slate-950" />
                <span>Explore All {totalProductsCount}+ Products</span>
              </a>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Profit Margin Calculator</span>
              </Link>
            </div>

            {/* Key Value Stat Pills */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Verified Catalog</span>
                <div className="text-xl md:text-2xl font-black text-emerald-400 mt-0.5">{totalProductsCount}+ Items</div>
                <span className="text-[10px] text-slate-500">Across 8 viral categories</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Average Markup Spread</span>
                <div className="text-xl md:text-2xl font-black text-cyan-400 mt-0.5">+{avgMargin}%</div>
                <span className="text-[10px] text-slate-500">Net profit potential</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Social Media Buzz</span>
                <div className="text-xl md:text-2xl font-black text-amber-400 mt-0.5">100M+ Views</div>
                <span className="text-[10px] text-slate-500">Verified TikTok & Reels demand</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tier-1 Sourcing</span>
                <div className="text-xl md:text-2xl font-black text-purple-400 mt-0.5">Direct Factory</div>
                <span className="text-[10px] text-slate-500">AliExpress, CJ & Temu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main E-Commerce Feed Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Category Visual Circles / Cards */}
        <CategoryNavGrid categories={CATEGORIES} />

        {/* Flash Sale Countdown Banner */}
        <FlashSaleBanner />

        {/* Endless Discovery Product Grid (505+ Products, Infinite Scroll, Clean Cards) */}
        <ProductGrid products={INITIAL_PRODUCTS} />
      </div>

      {/* Trust & Guarantee Banner */}
      <section className="py-12 border-t border-slate-800/60 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fast Sourcing Dispatch</h4>
              <p className="text-[11px] text-slate-400">Direct factory dispatch with express tracking routes</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">30-Day Guarantee</h4>
              <p className="text-[11px] text-slate-400">Verified factory quality assurance and sample orders</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Middlemen Fees</h4>
              <p className="text-[11px] text-slate-400">100% transparent direct factory supplier quotes</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Buyer Protection</h4>
              <p className="text-[11px] text-slate-400">Secure wholesale escrow checkout & dispute safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Profit Margin Calculator Section */}
      <section className="py-16 border-t border-slate-800/60 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Calculate Your E-Commerce Margins Instantly
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Never launch a paid TikTok or Facebook ad campaign blindly. Input your supplier cost and test your real breakeven ROAS and net take-home profit.
            </p>
          </div>

          <ProfitCalculatorWidget />
        </div>
      </section>

      {/* Why AratBazar Section */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold mb-3">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE ARATBAZAR ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Why Smart Sellers & Shoppers Use AratBazar
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Traditionally in wholesale commerce, an "Arat" (আড়ৎ) is where merchants go to buy goods in bulk at wholesale rates to stock their retail stores. We have modernized this concept for the global digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Real Viral Market Validation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We track products blowing up on TikTok, Instagram Reels, and Amazon Movers & Shakers with millions of organic video views so you only sell what consumers already desire.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Verified Lowest Factory Rates</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We hunt down the original factory manufacturers on AliExpress, CJ Dropshipping, 1688, and Temu so you avoid paying greedy middlemen and protect your 70%+ profit margins.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Ready-to-Use Ad Hooks</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each product dossier includes recommended customer avatars, problem-solving angles, and proven video ad hook templates so you can launch ads and start selling immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
