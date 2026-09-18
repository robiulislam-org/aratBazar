"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProfitCalculatorWidget() {
  const [sourcingCost, setSourcingCost] = useState<number>(5.40);
  const [sellingPrice, setSellingPrice] = useState<number>(29.99);
  const [shippingCost, setShippingCost] = useState<number>(2.00);
  const [adSpendCPA, setAdSpendCPA] = useState<number>(8.00);
  const [paymentFeePercent, setPaymentFeePercent] = useState<number>(2.9);

  // Calculations
  const paymentFee = (sellingPrice * (paymentFeePercent / 100)) + 0.30;
  const totalCost = sourcingCost + shippingCost + paymentFee + adSpendCPA;
  const netProfit = sellingPrice - totalCost;
  const grossProfit = sellingPrice - (sourcingCost + shippingCost);
  const grossMarginPercent = (grossProfit / sellingPrice) * 100;
  const netMarginPercent = (netProfit / sellingPrice) * 100;
  const breakevenRoas = adSpendCPA > 0 ? (sellingPrice / (sellingPrice - (sourcingCost + shippingCost + paymentFee))) : 1;

  // Viability Score
  let viabilityText = "🚀 Highly Profitable Winner";
  let viabilityColor = "text-emerald-400 border-emerald-500/50 bg-emerald-950/60";
  if (netProfit <= 0) {
    viabilityText = "❌ Unprofitable / Losing Money";
    viabilityColor = "text-rose-400 border-rose-500/50 bg-rose-950/60";
  } else if (netMarginPercent < 20) {
    viabilityText = "⚠️ Tight Margin (Risky for Paid Ads)";
    viabilityColor = "text-amber-400 border-amber-500/50 bg-amber-950/60";
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800/70 text-emerald-400 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Seller Tool</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white">
            E-Commerce & Dropshipping Net Profit Calculator
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Test any product idea before investing. Calculate real net profit after factory sourcing, shipping, ad spend & transaction fees.
          </p>
        </div>

        {/* Quick Reset to Defaults */}
        <button
          onClick={() => {
            setSourcingCost(5.40);
            setSellingPrice(29.99);
            setShippingCost(2.00);
            setAdSpendCPA(8.00);
          }}
          className="self-start md:self-auto text-xs font-semibold text-slate-400 hover:text-emerald-400 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 transition-colors"
        >
          Reset Sample Values
        </button>
      </div>

      {/* Calculator Grid: Inputs Left, Live Results Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sourcing Cost */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Factory Sourcing Cost ($)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">$</span>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={sourcingCost}
                  onChange={(e) => setSourcingCost(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2.5 text-sm font-bold text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">AliExpress / 1688 / CJ quote</span>
            </div>

            {/* Target Selling Price */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Target Retail Selling Price ($)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">$</span>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2.5 text-sm font-bold text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">Your store / Shopify price</span>
            </div>

            {/* Shipping Cost */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Estimated Shipping ($)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">$</span>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2.5 text-sm font-bold text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">Average global tracked ePacket</span>
            </div>

            {/* Ad CPA */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Target Ad Spend / CPA ($)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">$</span>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={adSpendCPA}
                  onChange={(e) => setAdSpendCPA(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2.5 text-sm font-bold text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">Cost to acquire customer via TikTok/FB</span>
            </div>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
          {/* Viability Status */}
          <div className={`px-3 py-2 rounded-xl border text-xs font-bold text-center ${viabilityColor}`}>
            {viabilityText}
          </div>

          {/* Big Net Profit Display */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Estimated Net Profit Per Order
            </span>
            <div className={`text-3xl font-black mt-1 ${netProfit >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {netProfit >= 0 ? `+$${netProfit.toFixed(2)}` : `-$${Math.abs(netProfit).toFixed(2)}`}
            </div>
            <span className="text-xs text-slate-400 mt-0.5 block">
              Net Margin: <strong className={netProfit >= 0 ? "text-emerald-400" : "text-rose-400"}>{netMarginPercent.toFixed(1)}%</strong>
            </span>
          </div>

          {/* Breakdown List */}
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Gross Margin (Before Ads):</span>
              <span className="font-bold text-slate-200">${grossProfit.toFixed(2)} ({grossMarginPercent.toFixed(1)}%)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Processing Fees (Stripe/PayPal):</span>
              <span className="font-semibold text-slate-400">-${paymentFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Breakeven ROAS Needed:</span>
              <span className="font-extrabold text-amber-400">{breakevenRoas.toFixed(2)}x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
