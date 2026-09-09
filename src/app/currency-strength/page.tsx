import CurrencyStrengthMeter from "@/components/CurrencyStrengthMeter";
import AdBanner from "@/components/AdBanner";
import { Gauge, Info, Zap, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Currency Strength Meter | Forex Strength Matrix | AratBazar",
  description:
    "Real-time Forex Currency Strength Meter tracking USD, EUR, GBP, JPY, CAD, AUD, CHF, and NZD. Discover the strongest and weakest currencies to trade high-probability setups.",
  keywords: [
    "currency strength meter live",
    "forex strength meter",
    "best currency to buy today",
    "usd strength live",
    "strongest vs weakest currency",
    "g10 currency matrix",
    "forex trading tools free",
    "aratbazar currency meter",
  ],
  openGraph: {
    title: "Live Currency Strength Meter & Forex Momentum Gauge | AratBazar",
    description:
      "Synthesizes 28 interbank currency cross-pairs to rank major global reserve currencies from strongest to weakest in real-time.",
    url: "https://aratbazar.com/currency-strength",
    siteName: "AratBazar",
    type: "website",
  },
  alternates: {
    canonical: "https://aratbazar.com/currency-strength",
  },
};

export default function CurrencyStrengthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AratBazar Currency Strength Meter",
    url: "https://aratbazar.com/currency-strength",
    description: "Live Forex relative currency strength gauge and momentum matrix.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a currency strength meter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A currency strength meter calculates the relative momentum and buying/selling pressure of each major currency by analyzing all 28 possible currency pairs across the 8 major currencies (USD, EUR, GBP, JPY, AUD, CAD, CHF, NZD). A high score indicates institutional buying pressure; a low score indicates selling pressure.",
        },
      },
      {
        "@type": "Question",
        name: "How do professional traders use a currency strength meter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional traders use currency strength meters to identify the strongest and weakest currencies, then trade the strongest currency against the weakest. For example, if USD scores 8.6 (extremely strong) and JPY scores 1.4 (extremely weak), a trader would look to buy USD/JPY. This strategy avoids choppy, range-bound pairs with similar strength scores.",
        },
      },
      {
        "@type": "Question",
        name: "Which currencies does AratBazar's strength meter track?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AratBazar's live currency strength meter tracks all 8 major G10 currencies: US Dollar (USD), Euro (EUR), British Pound (GBP), Japanese Yen (JPY), Australian Dollar (AUD), Canadian Dollar (CAD), Swiss Franc (CHF), and New Zealand Dollar (NZD). It synthesizes 28 currency cross-pairs to produce each currency's strength score.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Page Header */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <Gauge className="h-3.5 w-3.5" />
            <span>INSTITUTIONAL G10 FOREIGN EXCHANGE MATRIX</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Live Currency Strength Meter
              </h1>
              <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed">
                A quantitative gauge calculating real-time relative momentum across the world&apos;s 8
                primary reserve currencies. Instantly identify high-probability setups by buying the
                strongest currency against the weakest currency.
              </p>
            </div>
          </div>
        </div>

        {/* Top Ad Unit */}
        <AdBanner format="horizontal" label="SPONSORED FOREX EXECUTION PARTNER" />

        {/* The Live Interactive Meter */}
        <div className="my-8">
          <CurrencyStrengthMeter />
        </div>

        {/* Pro Trader Educational Guide (High Value for AdSense & Retention) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
            <div className="flex items-center space-x-2 text-emerald-400 mb-3">
              <Zap className="h-5 w-5" />
              <h3 className="text-base font-bold text-white">How to Trade the Meter</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The fundamental rule of institutional foreign exchange trading is simple:
              <strong> Always buy the strongest currency against the weakest currency.</strong> For
              example, if the USD registers an 8.6 score while JPY languishes at 1.4, the USD/JPY pair
              exhibits the cleanest directional momentum.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
            <div className="flex items-center space-x-2 text-teal-400 mb-3">
              <Info className="h-5 w-5" />
              <h3 className="text-base font-bold text-white">Avoid Matching Equals</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              When two currencies hold identical strength (e.g. EUR at 5.2 and AUD at 5.0), their
              currency pair (EUR/AUD) will typically chop sideways in a range-bound deadlock with
              high slippage and low breakout follow-through. Avoid trading currency pairs with similar
              scores.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
            <div className="flex items-center space-x-2 text-amber-400 mb-3">
              <ShieldAlert className="h-5 w-5" />
              <h3 className="text-base font-bold text-white">Timeframe Alignment</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Intraday scalpers utilize the <strong>1H</strong> gauge for quick sessions, while swing
              traders align their setups with the <strong>4H</strong> and <strong>1D</strong> matrixes.
              Optimal confluence occurs when a currency maintains extreme readings across both 1H and
              4H charts simultaneously.
            </p>
          </div>
        </div>

        {/* Bottom Ad Unit */}
        <div className="mt-10">
          <AdBanner format="horizontal" label="RECOMMENDED INSTITUTIONAL BROKER" />
        </div>
      </div>
    </>
  );
}
