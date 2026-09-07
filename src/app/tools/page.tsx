import RiskCalculator from "@/components/RiskCalculator";
import AdBanner from "@/components/AdBanner";
import { Calculator, ShieldCheck, TrendingUp, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Trading Calculators & Risk Management Suite | AratBazar",
  description: "Free institutional trading calculators including Position Size, Stop Loss Risk, Compound ROI, and Pip Value calculators.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <Calculator className="h-4 w-4" />
          <span>QUANTITATIVE CAPITAL MANAGEMENT ENGINES</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Pro Trading Calculators Suite</h1>
        <p className="mt-2 text-slate-400 text-sm max-w-3xl">
          Institutional-grade mathematical models for calculating stop-loss risk exposure, lot sizing, and exponential compounding longevity.
        </p>
      </div>

      <div className="mt-6">
        <AdBanner format="horizontal" label="TRADING TOOLS SPONSOR" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RiskCalculator />
        </div>

        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              The 1% Rule of Wall Street
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Proprietary hedge funds rarely risk more than <strong>1.0% to 1.5%</strong> of their total liquid capital on any single trade setup.
            </p>
            <div className="mt-3 rounded-lg bg-slate-900 border border-slate-800 p-3 text-xs space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>$10,000 Balance (1% Risk):</span>
                <span className="font-bold text-emerald-400 font-mono">$100 Max Loss</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>$50,000 Balance (1% Risk):</span>
                <span className="font-bold text-emerald-400 font-mono">$500 Max Loss</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>$100,000 Balance (1% Risk):</span>
                <span className="font-bold text-emerald-400 font-mono">$1,000 Max Loss</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-teal-400" />
              Compound Growth Formula
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consistently achieving 2% to 3% monthly return on compounding equity creates exponential growth far outpacing aggressive, reckless over-leveraging.
            </p>
          </div>

          <AdBanner format="sidebar" label="BROKERAGE INTEGRATION" />
        </div>
      </div>
    </div>
  );
}
