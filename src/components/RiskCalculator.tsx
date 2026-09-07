"use client";

import { useState } from "react";
import { Calculator, ShieldAlert, CheckCircle2, TrendingUp } from "lucide-react";

export default function RiskCalculator() {
  const [activeTab, setActiveTab] = useState<"risk" | "roi">("risk");

  // Risk Calculator States
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [stopLossPrice, setStopLossPrice] = useState<number>(95);

  // ROI Calculator States
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(200);
  const [annualRate, setAnnualRate] = useState<number>(15);
  const [years, setYears] = useState<number>(3);

  // Calculations for Risk
  const dollarAtRisk = (accountSize * riskPercent) / 100;
  const priceDifference = Math.abs(entryPrice - stopLossPrice);
  const positionUnits = priceDifference > 0 ? (dollarAtRisk / priceDifference) : 0;
  const totalPositionValue = positionUnits * entryPrice;
  const target2R = entryPrice > stopLossPrice ? entryPrice + (priceDifference * 2) : entryPrice - (priceDifference * 2);
  const target3R = entryPrice > stopLossPrice ? entryPrice + (priceDifference * 3) : entryPrice - (priceDifference * 3);

  // Calculations for Compound ROI
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  let futureValue = initialInvestment;
  for (let i = 0; i < months; i++) {
    futureValue = (futureValue + monthlyContribution) * (1 + monthlyRate);
  }
  const totalDeposited = initialInvestment + (monthlyContribution * months);
  const totalProfit = futureValue - totalDeposited;

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Pro Trader Capital & Risk Suite</h3>
            <p className="text-xs text-slate-400">Institutional position sizing & mathematical longevity</p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("risk")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === "risk"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Position Size & Risk
          </button>
          <button
            onClick={() => setActiveTab("roi")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === "roi"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Compound ROI Engine
          </button>
        </div>
      </div>

      {/* Tab 1: Position Size Calculator */}
      {activeTab === "risk" ? (
        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Account Portfolio Equity ($ USD)
              </label>
              <input
                type="number"
                value={accountSize}
                onChange={(e) => setAccountSize(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>Risk Per Trade (%)</span>
                <span className="text-emerald-400 font-mono font-bold">{riskPercent}%</span>
              </div>
              <input
                type="range"
                min="0.25"
                max="5"
                step="0.25"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0.5% (Conservative)</span>
                <span>1.5% (Institutional)</span>
                <span>3.0% (Aggressive)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Entry Price ($)
                </label>
                <input
                  type="number"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Stop Loss Price ($)
                </label>
                <input
                  type="number"
                  value={stopLossPrice}
                  onChange={(e) => setStopLossPrice(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Results Output */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Calculated Risk Execution Output
              </span>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300">Max Dollar Risk (Loss at Stop):</span>
                  <span className="text-base font-bold font-mono text-rose-400">
                    -${dollarAtRisk.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300">Recommended Position Units:</span>
                  <span className="text-lg font-black font-mono text-emerald-400">
                    {positionUnits.toFixed(2)} Units
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300">Total Capital Committed:</span>
                  <span className="text-sm font-mono text-slate-200">
                    ${totalPositionValue.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-300">Target 2R / 3R Profit:</span>
                  <div className="text-right font-mono text-xs font-bold text-teal-300">
                    <span>${target2R.toFixed(2)} (+${(dollarAtRisk * 2).toFixed(0)})</span>
                    <span className="block text-[11px] text-emerald-400">
                      ${target3R.toFixed(2)} (+${(dollarAtRisk * 3).toFixed(0)})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-emerald-950/40 border border-emerald-800/40 p-2.5 text-[11px] text-emerald-300 flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>
                By risking only {riskPercent}%, you can endure 20 consecutive losing trades with less than 26% drawdown.
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2: Compound ROI Engine */
        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Initial Capital ($)
              </label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Monthly Savings / Contribution ($)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Expected Return (% / Yr)
                </label>
                <input
                  type="number"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Horizon (Years)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Compound Wealth Projection
              </span>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300">Total Capital Deposited:</span>
                  <span className="text-sm font-mono text-slate-200">
                    ${totalDeposited.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300">Compound Profit Generated:</span>
                  <span className="text-base font-bold font-mono text-emerald-400">
                    +${totalProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-300">Projected Portfolio Value:</span>
                  <span className="text-2xl font-black font-mono text-emerald-300">
                    ${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-teal-950/40 border border-teal-800/40 p-2.5 text-[11px] text-teal-300 flex items-start gap-2">
              <TrendingUp className="h-4 w-4 shrink-0 text-teal-400 mt-0.5" />
              <span>
                Demonstrates the exponential power of compounding returns without excessive margin risk.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
