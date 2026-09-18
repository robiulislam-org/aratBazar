import React from "react";
import Link from "next/link";
import { INITIAL_PRODUCTS, CATEGORIES } from "@/data/productsData";
import ProductGrid from "@/components/ProductGrid";
import ProfitCalculatorWidget from "@/components/ProfitCalculatorWidget";
import { 
  Flame, 
  TrendingUp, 
  ShieldCheck, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  DollarSign, 
  PackageCheck,
  Zap
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = INITIAL_PRODUCTS.filter(p => p.isFeatured);
  const totalProductsCount = INITIAL_PRODUCTS.length;
  const avgMargin = (
    INITIAL_PRODUCTS.reduce((acc, p) => acc + p.market.profitMarginPercent, 0) / totalProductsCount
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/60">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-bold mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>DAILY VIRAL SOURCING INTELLIGENCE</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-medium">Free for Sellers & Shoppers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              The Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Arat</span> for Viral Products & Factory Prices
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Stop guessing what to sell. We uncover the world's highest-demand viral products, match them with verified lowest-cost factory suppliers, and calculate true profit margins so you can launch profitable e-commerce businesses with confidence.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#winning-products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.02]"
              >
                <Flame className="w-4 h-4 fill-slate-950" />
                <span>Explore {totalProductsCount}+ Winning Products</span>
              </a>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Profit Margin Calculator</span>
              </Link>
            </div>

            {/* Key Value Stat Pills */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Average Profit Spread</span>
                <div className="text-xl md:text-2xl font-black text-emerald-400 mt-0.5">+{avgMargin}%</div>
                <span className="text-[10px] text-slate-500">Net markup potential</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Verified Suppliers</span>
                <div className="text-xl md:text-2xl font-black text-cyan-400 mt-0.5">Direct Factory</div>
                <span className="text-[10px] text-slate-500">AliExpress, CJ, 1688, Temu</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Social Media Buzz</span>
                <div className="text-xl md:text-2xl font-black text-amber-400 mt-0.5">Millions</div>
                <span className="text-[10px] text-slate-500">TikTok & Reels verified demand</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Daily Market Research</span>
                <div className="text-xl md:text-2xl font-black text-purple-400 mt-0.5">Automated</div>
                <span className="text-[10px] text-slate-500">Updated every single day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Product Grid Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ProductGrid products={INITIAL_PRODUCTS} />
      </div>

      {/* Live Profit Margin Calculator Section */}
      <section className="py-16 border-t border-slate-800/60 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Calculate Your Dropshipping Margins Instantly
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Never launch a paid TikTok or Facebook ad campaign blindly. Input your supplier cost and test your real breakeven ROAS and net take-home profit.
            </p>
          </div>

          <ProfitCalculatorWidget />
        </div>
      </section>

      {/* How AratBazar Empowers Sellers & Shoppers */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold mb-3">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE ARATBAZAR ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Why Smart Sellers Source Through AratBazar
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Traditionally in wholesale commerce, an "Arat" (আড়ৎ) is where merchants go to buy goods in bulk at wholesale rates to stock their retail stores. We have modernized this concept for the global digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Real Viral Market Validation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We track products blowing up on TikTok, Instagram Reels, and Amazon Movers & Shakers with millions of organic video views so you only sell what consumers already desire.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Verified Lowest Factory Rates</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We hunt down the original factory manufacturers on AliExpress, CJ Dropshipping, 1688, and Temu so you avoid paying greedy middlemen and protect your 70%+ profit margins.
              </p>
            </div>

            {/* Card 3 */}
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
