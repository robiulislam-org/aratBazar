import { Shield, Target, Users, Award, Database, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | AratBazar Financial Intelligence",
  description: "Learn about AratBazar's institutional mission, editorial integrity, and multi-asset financial data infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Title */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <Shield className="h-4 w-4" />
          <span>EDITORIAL CHARTER & INSTITUTIONAL MISSION</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">About AratBazar Financial Intelligence</h1>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">
          Founded to bridge the information asymmetry between Wall Street institutional trading desks and global retail market participants.
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-emerald-400" />
            Our Core Mission
          </h2>
          <p className="mt-3 text-slate-300">
            At <strong>AratBazar (aratbazar.com)</strong>, our objective is straightforward: provide transparent, unbiased, and mathematically verifiable market data, algorithmic sentiment metrics, and macro-economic intelligence.
          </p>
          <p className="mt-3 text-slate-300">
            Financial markets in the modern era are dominated by systematic high-frequency algorithms and institutional order flow. We believe individual investors, professional traders, and capital allocators require institutional-grade tools—such as real-time multi-asset charts, dynamic position sizing risk engines, and macro-economic calendars—to make calculated, disciplined decisions.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Database className="h-5 w-5 text-cyan-400" />
            Data Methodology & Integrity
          </h2>
          <p className="mt-3 text-slate-300">
            All market quotes, technical charts, and pricing indicators displayed across AratBazar are sourced from world-class financial data aggregators, including TradingView, verified digital asset order books, and official sovereign statistical bureaus.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-400">
            <li><strong>Equities & Indices:</strong> Streaming data covering S&P 500, Nasdaq, Dow Jones, and mega-cap enterprise equities.</li>
            <li><strong>Cryptocurrency:</strong> 24/7 aggregated liquidity pools covering Bitcoin, Ethereum, and major altcoins.</li>
            <li><strong>Commodities & Forex:</strong> Spot precious metals (Gold, Silver), Energy benchmarks (WTI, Brent), and G10 currency pairs.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            Editorial Independence & Ad Transparency
          </h2>
          <p className="mt-3 text-slate-300">
            AratBazar maintains strict editorial independence. Our research dispatches, market wraps, and educational articles are authored and vetted with analytical rigor. We do not accept sponsored compensation to endorse specific speculative financial products or guarantee investment outcomes.
          </p>
          <p className="mt-3 text-slate-300">
            Third-party advertising partners (such as Google AdSense) displayed on this platform are distinctly marked to preserve user clarity and regulatory compliance.
          </p>
        </section>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white text-base">Inquiries & Editorial Team</h3>
            <p className="text-xs text-slate-400 mt-0.5">Reach out for corporate partnerships, corrections, or press inquiries.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition"
          >
            Contact Editorial Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
