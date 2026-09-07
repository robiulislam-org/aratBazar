import TradeJournalClient from "@/components/TradeJournalClient";
import AdBanner from "@/components/AdBanner";
import { BookOpen, ShieldCheck, Award, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trader Journal & P&L Analytics | AratBazar",
  description:
    "Free, private, in-browser trading journal. Track your trades, calculate win-rate, profit factor, and net P&L across Crypto, Forex, and Stocks with zero signup required.",
  keywords: [
    "trading journal free",
    "online trade log",
    "win rate calculator trading",
    "forex trading journal",
    "crypto trade tracker",
    "profit factor analytics",
    "aratbazar journal",
  ],
  openGraph: {
    title: "Free Private Trading Journal & Performance Analytics | AratBazar",
    description:
      "Track your trading journey with precision. Mathematical win-rate, profit factor, and net return calculations stored privately in your browser.",
    url: "https://aratbazar.com/journal",
    siteName: "AratBazar",
    type: "website",
  },
  alternates: {
    canonical: "https://aratbazar.com/journal",
  },
};

export default function JournalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AratBazar Private Trade Journal",
    url: "https://aratbazar.com/journal",
    description: "Private in-browser trade performance tracker and win-rate analytics.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Page Header */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>DISCIPLINED CAPITAL MANAGEMENT JOURNAL</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Private Trader Journal & Analytics
              </h1>
              <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed">
                The single defining trait of profitable market participants is ruthless trade
                documentation. Record your setups, track your win-rate, and analyze your profit factor
                with 100% private in-browser storage.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2 text-slate-300 font-mono">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Zero Cloud Logging (100% Private)
              </span>
            </div>
          </div>
        </div>

        {/* Client Interactive Journal Component */}
        <TradeJournalClient />
      </div>
    </>
  );
}
