import { ShieldAlert, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Financial Disclaimer & Risk Warning | AratBazar",
  description: "Official financial disclaimer and high-risk investment disclosure for AratBazar (aratbazar.com).",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-2">
          <ShieldAlert className="h-4 w-4" />
          <span>STATUTORY FINANCIAL DISCLOSURE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Financial Disclaimer & Risk Disclosure</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Please read this disclosure thoroughly before utilizing any information or analytical tools on <strong>aratbazar.com</strong>.
        </p>
      </div>

      <div className="mt-8 space-y-7 text-slate-300 text-sm leading-relaxed">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
          <div className="flex items-center space-x-2.5 font-bold text-amber-400 text-base">
            <AlertTriangle className="h-5 w-5" />
            <span>High-Risk Investment Warning</span>
          </div>
          <p className="mt-3 text-slate-300">
            Trading financial instruments, including but not limited to foreign exchange (Forex), cryptocurrencies, options, futures, equities, and commodities, carries a high level of risk and may result in the substantial or complete loss of your invested capital. 
          </p>
          <p className="mt-2 text-slate-300">
            You should never invest money that you cannot afford to lose. The leverage typically offered in forex and CFD trading can work both to your advantage and disadvantage.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            1. No Financial Advice
          </h2>
          <p className="mt-3 text-slate-300">
            The content, charts, calculators, algorithmic metrics, market wraps, and opinions published on <strong>AratBazar</strong> are intended solely for general informational, educational, and analytical purposes. Nothing contained on this website constitutes investment advice, a financial recommendation, or an endorsement of any broker, exchange, or security.
          </p>
          <p className="mt-2 text-slate-300">
            You are strongly encouraged to seek independent financial advice from a licensed financial advisor or registered investment professional before making any investment or speculative trading decisions.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-cyan-400" />
            2. Data Accuracy & Latency
          </h2>
          <p className="mt-3 text-slate-300">
            While AratBazar endeavors to maintain real-time and accurate financial data streams, we do not guarantee that the pricing, volume, macroeconomic releases, or calculations will be error-free, uninterrupted, or perfectly synchronized with interbank exchanges. AratBazar and its affiliates accept no liability for any direct or indirect loss or damage arising from reliance on data presented on this website.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">3. Third-Party Links & Advertising</h2>
          <p className="mt-3 text-slate-300">
            AratBazar may contain hyperlinks to external third-party websites or display advertising content supplied by Google AdSense and financial partners. We do not endorse, oversee, or assume responsibility for the content, privacy practices, or operations of third-party platforms.
          </p>
        </section>
      </div>
    </div>
  );
}
