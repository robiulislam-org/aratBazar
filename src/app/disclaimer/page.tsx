import { ShieldAlert, AlertTriangle, CheckCircle, HelpCircle, DollarSign } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTC Affiliate Disclosure & Sourcing Disclaimer | AratBazar",
  description: "Official FTC affiliate compensation disclosure and sourcing pricing disclaimer for AratBazar (aratbazar.com).",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-2">
          <ShieldAlert className="h-4 w-4" />
          <span>STATUTORY DISCLOSURE & FTC COMPLIANCE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">FTC Affiliate & Sourcing Disclaimer</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Please read this disclosure thoroughly to understand how <strong>aratbazar.com</strong> generates revenue and provides sourcing data.
        </p>
      </div>

      <div className="mt-8 space-y-7 text-slate-300 text-sm leading-relaxed">
        {/* FTC Highlight */}
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/30 p-6 md:p-8">
          <div className="flex items-center space-x-2.5 font-bold text-emerald-400 text-base">
            <DollarSign className="h-5 w-5" />
            <span>FTC Affiliate Compensation Disclosure</span>
          </div>
          <p className="mt-3 text-slate-300 leading-relaxed">
            In compliance with the Federal Trade Commission (FTC) guidelines, please assume that certain links pointing to third-party marketplaces (such as AliExpress, CJ Dropshipping, Temu, Amazon, and Alibaba) are affiliate referral links.
          </p>
          <p className="mt-2 text-slate-300 leading-relaxed">
            If you click on these links and initiate a purchase or place a sample order, AratBazar may receive a small affiliate commission from the respective marketplace at <strong>zero extra cost to you</strong>. These commissions help fund our ongoing server infrastructure, web crawlers, and automated daily product research.
          </p>
        </div>

        {/* Pricing Fluctuation */}
        <section className="rounded-3xl border border-slate-800 bg-[#0c121e] p-6 md:p-8">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            1. Supplier Pricing & Stock Fluctuations
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            The factory sourcing costs, shipping estimates, and retail benchmark prices displayed on AratBazar represent snapshot estimates collected at the time of publication or automated indexing.
          </p>
          <p className="mt-2 text-slate-300 leading-relaxed">
            Independent third-party manufacturers may alter their unit pricing, minimum order quantities (MOQ), coupons, or shipping options at their discretion. AratBazar does not own, manufacture, inspect, or directly dispatch any physical inventory. Always verify current prices and seller feedback on the merchant's checkout page before placing orders.
          </p>
        </section>

        {/* E-Commerce Earnings Warning */}
        <section className="rounded-3xl border border-slate-800 bg-[#0c121e] p-6 md:p-8">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            2. Business Earnings & Marketing Disclaimers
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            The potential profit margins and calculator projections showcased across AratBazar are mathematical models based on industry averages and competitor retail benchmarks. They do <strong>not</strong> constitute a guarantee of personal income, profit, or sales success.
          </p>
          <p className="mt-2 text-slate-300 leading-relaxed">
            Your actual e-commerce profitability depends on diverse factors beyond our control, including your advertising spend, video creative quality, customer service, tax obligations, and store conversion optimization.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="rounded-3xl border border-slate-800 bg-[#0c121e] p-6 md:p-8">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-cyan-400" />
            3. Intellectual Property & Trademarks
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            All trademarks, logos, and brand names (e.g. AliExpress, Amazon, TikTok, Temu) referenced on this platform are the property of their respective trademark holders. Reference to them does not imply endorsement, sponsorship, or direct affiliation, other than standard approved publisher/affiliate agreements.
          </p>
        </section>
      </div>
    </div>
  );
}
