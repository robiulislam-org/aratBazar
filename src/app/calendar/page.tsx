import EconomicCalendar from "@/components/EconomicCalendar";
import AdBanner from "@/components/AdBanner";
import { Calendar, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Economic Calendar — NFP, CPI, FOMC Dates & Forex Events | AratBazar",
  description:
    "Real-time macroeconomic calendar with high-impact events: Non-Farm Payrolls (NFP), Core CPI inflation, FOMC interest rate decisions, GDP releases, and central bank speeches. Essential for forex and stock traders.",
  keywords: [
    "economic calendar forex",
    "NFP release date 2025",
    "FOMC meeting calendar",
    "CPI inflation data release",
    "interest rate decision schedule",
    "central bank calendar",
    "forex high impact news today",
    "economic events this week",
    "GDP release date",
    "non farm payrolls calendar",
    "aratbazar economic calendar",
  ],
  openGraph: {
    title: "Live Economic Calendar — NFP, CPI, FOMC & High-Impact Events | AratBazar",
    description:
      "Track all major macro data releases that move Forex, Stocks, Gold, and Crypto markets. Updated daily with actual vs. forecast deviations.",
    url: "https://aratbazar.com/calendar",
    siteName: "AratBazar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macro Economic Calendar — NFP, CPI & FOMC Dates | AratBazar",
    description: "Real-time economic event calendar for professional forex and stock market traders.",
    creator: "@aratbazar",
  },
  alternates: {
    canonical: "https://aratbazar.com/calendar",
  },
};

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-teal-400 mb-2">
          <Calendar className="h-4 w-4" />
          <span>GLOBAL CENTRAL BANK & SOVEREIGN SCHEDULE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Institutional Economic Calendar</h1>
        <p className="mt-2 text-slate-400 text-sm max-w-3xl">
          High-impact macroeconomic releases driving liquidity in foreign exchange, bond yields, equity benchmarks, and crypto assets.
        </p>
      </div>

      <div className="mt-6">
        <AdBanner format="horizontal" label="SPONSORED ECONOMIC INTELLIGENCE" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EconomicCalendar />
        </div>

        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <Info className="h-4 w-4 text-teal-400" />
              How Pro Traders Use This Calendar
            </h3>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                <strong>High Impact Events (Red):</strong> Releases like US Core CPI, Non-Farm Payrolls (NFP), and FOMC statements typically trigger sharp volatility. Pro traders widen stop losses or avoid opening positions 15 minutes before the release.
              </p>
              <p>
                <strong>Deviation Analysis:</strong> Compare the &quot;Actual&quot; number with the &quot;Forecast&quot;. An actual CPI release higher than forecast usually strengthens the US Dollar and pressures equities and gold.
              </p>
            </div>
          </div>

          <AdBanner format="sidebar" label="BROKER PARTNER PLACEMENT" />
        </div>
      </div>
    </div>
  );
}
