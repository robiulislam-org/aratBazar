import React from "react";
import type { Metadata } from "next";
import ProfitCalculatorWidget from "@/components/ProfitCalculatorWidget";
import { Calculator, ShieldCheck, TrendingUp, CheckCircle2, DollarSign, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Dropshipping & E-Commerce Profit Margin Calculator | AratBazar",
  description:
    "Free e-commerce profit calculator for dropshippers and online sellers. Calculate net profit, true margin percentage, payment gateway fees, and breakeven ROAS before launching ads.",
  keywords: [
    "dropshipping profit calculator",
    "ecommerce profit margin calculator",
    "breakeven roas calculator",
    "cogs calculator",
    "product margin tool",
    "tiktok ad breakeven calculator",
    "aratbazar seller tools",
  ],
  openGraph: {
    title: "Free E-Commerce & Dropshipping Profit Calculator | AratBazar",
    description: "Calculate net margins, factory cost spreads, and breakeven ROAS instantly.",
    url: "https://aratbazar.com/tools",
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>FREE E-COMMERCE SELLER SUITE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            E-Commerce Profit & Breakeven Calculator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Eliminate financial guesswork before you invest a single dollar in inventory or paid ads. Model your unit economics, factory sourcing costs, global shipping, and advertising targets.
          </p>
        </div>

        {/* Master Widget */}
        <ProfitCalculatorWidget />

        {/* Educational Seller Guide */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-300">
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>The 3X Rule for High-Converting Products</span>
            </h3>
            <p className="leading-relaxed text-slate-400">
              When sourcing products on AratBazar, AliExpress, or CJ Dropshipping, successful e-commerce merchants follow the <strong>3X Rule</strong>:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>1/3 for Product & Shipping:</strong> Total Cost of Goods Sold (COGS).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>1/3 for Advertising & Marketing:</strong> Facebook, TikTok, or Google Ad CPA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>1/3 for Clean Net Profit:</strong> What you take home into your bank account.</span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              If a product cannot be sold for at least 3X its factory cost, it is usually too risky to scale with paid traffic.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-400" />
              <span>Understanding Breakeven ROAS</span>
            </h3>
            <p className="leading-relaxed text-slate-400">
              <strong>ROAS (Return On Ad Spend)</strong> measures the revenue generated for every dollar spent on ads. Your Breakeven ROAS is the minimum multiple you must achieve so that your store breaks even:
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400">
              Breakeven ROAS = Retail Price ÷ (Retail Price - Total Costs)
            </div>
            <p className="leading-relaxed text-slate-400 text-[11px]">
              For example, if your Breakeven ROAS is <strong>1.50x</strong>, any ad campaign generating above 1.50x ROAS is generating pure, bankable profit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
