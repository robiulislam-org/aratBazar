import TradeSignalsClient from "@/components/TradeSignalsClient";
import { Radar, Zap, ShieldCheck } from "lucide-react";
import { getAssetMarketStatus } from "@/utils/marketHours";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Trading Signals & 30-Minute Market Scanner | AratBazar",
  description:
    "Institutional algorithmic buy and sell signals across Crypto (Bitcoin, Solana), Stocks (Nvidia, Tesla), Forex (EUR/USD, USD/JPY), and Commodities (Gold, Oil). Updated every 30 minutes with precise entry, stop loss, and profit targets.",
  keywords: [
    "trading signals live",
    "crypto buy sell signals",
    "what to buy today stock market",
    "forex signals free",
    "bitcoin trading signals",
    "oversold dip buy signals",
    "overbought sell signals",
    "market scanner 30 minutes",
    "aratbazar signals",
    "best stocks to buy now",
  ],
  openGraph: {
    title: "Live Algorithmic Trading Signals & 30-Minute Market Scanner | AratBazar",
    description:
      "Actionable Buy & Sell recommendations for professional traders. Real-time entries, stop-loss, and multi-tier take profit levels refreshed every 30 minutes.",
    url: "https://aratbazar.com/signals",
    siteName: "AratBazar",
    type: "website",
  },
  alternates: {
    canonical: "https://aratbazar.com/signals",
  },
};

// Initial SSR data to ensure Google can index the signals immediately
const INITIAL_SIGNALS = [
  {
    id: "sig-sol",
    symbol: "SOL/USD",
    name: "Solana",
    category: "crypto" as const,
    action: "STRONG BUY" as const,
    bias: "BULLISH" as const,
    currentPrice: "$104.95",
    priceNum: 104.95,
    change24h: "-1.32%",
    changeNum: -1.32,
    entryZone: "$103.50 - $105.00 (Dip Buying Zone)",
    stopLoss: "$99.80",
    target1: "$112.50",
    target2: "$119.80",
    riskReward: "1 : 3.1",
    timeframe: "4H / Daily Swing",
    confidence: 91,
    rsi: 31.4,
    technicalReason: "Oversold RSI(14) retesting ascending channel trendline support. Heavy institutional limit order cluster detected.",
    keyLevels: { support: "$101.50", resistance: "$114.00" },
    updatedAt: "Live Synchronized",
  },
  {
    id: "sig-nvda",
    symbol: "NVDA",
    name: "Nvidia Corporation",
    category: "stocks" as const,
    action: "STRONG SELL" as const,
    bias: "BEARISH" as const,
    currentPrice: "$148.80",
    priceNum: 148.8,
    change24h: "+3.91%",
    changeNum: 3.91,
    entryZone: "$148.50 - $150.20 (Short / Take Profit)",
    stopLoss: "$152.80",
    target1: "$141.50",
    target2: "$135.20",
    riskReward: "1 : 2.8",
    timeframe: "1H / 4H Intraday",
    confidence: 88,
    rsi: 74.8,
    technicalReason: "RSI deep in overbought territory (>74) meeting major historical supply zone. Bearish divergence on MACD histogram.",
    keyLevels: { support: "$141.20", resistance: "$150.50" },
    updatedAt: "Live Synchronized",
  },
  {
    id: "sig-xau",
    symbol: "XAU/USD",
    name: "Gold Spot Bullion",
    category: "commodities" as const,
    action: "BUY" as const,
    bias: "BULLISH" as const,
    currentPrice: "$2,915.80",
    priceNum: 2915.8,
    change24h: "+0.67%",
    changeNum: 0.67,
    entryZone: "$2,905 - $2,915",
    stopLoss: "$2,882.00",
    target1: "$2,950.00",
    target2: "$2,990.00",
    riskReward: "1 : 2.5",
    timeframe: "Daily / Macro Swing",
    confidence: 86,
    rsi: 44.2,
    technicalReason: "Bullish consolidation above 50-day EMA. Central bank physical reserves demand creating institutional bid floor.",
    keyLevels: { support: "$2,890.00", resistance: "$2,945.00" },
    updatedAt: "Live Synchronized",
  },
  {
    id: "sig-tsla",
    symbol: "TSLA",
    name: "Tesla Inc",
    category: "stocks" as const,
    action: "SELL" as const,
    bias: "BEARISH" as const,
    currentPrice: "$352.10",
    priceNum: 352.1,
    change24h: "-2.33%",
    changeNum: -2.33,
    entryZone: "$352.00 - $355.00 (Short)",
    stopLoss: "$366.50",
    target1: "$335.00",
    target2: "$318.00",
    riskReward: "1 : 2.4",
    timeframe: "4H / Daily Swing",
    confidence: 84,
    rsi: 66.2,
    technicalReason: "Failed breakout at $365 resistance with declining buy volume. Price sliding beneath 20-period EMA on 4H chart.",
    keyLevels: { support: "$332.00", resistance: "$364.50" },
    updatedAt: "Live Synchronized",
  },
  {
    id: "sig-btc",
    symbol: "BTC/USD",
    name: "Bitcoin",
    category: "crypto" as const,
    action: "STRONG BUY" as const,
    bias: "BULLISH" as const,
    currentPrice: "$79,489.70",
    priceNum: 79489.7,
    change24h: "-0.60%",
    changeNum: -0.6,
    entryZone: "$79,000 - $79,500 (Accumulation)",
    stopLoss: "$77,200.00",
    target1: "$84,200.00",
    target2: "$88,500.00",
    riskReward: "1 : 3.4",
    timeframe: "4H / Daily Swing",
    confidence: 93,
    rsi: 36.8,
    technicalReason: "Triple bottom formation at critical $79k liquidity block. High-volume absorption by spot ETF custody desks.",
    keyLevels: { support: "$77,500.00", resistance: "$84,000.00" },
    updatedAt: "Live Synchronized",
  },
  {
    id: "sig-usdjpy",
    symbol: "USD/JPY",
    name: "US Dollar / Japanese Yen",
    category: "forex" as const,
    action: "STRONG SELL" as const,
    bias: "BEARISH" as const,
    currentPrice: "151.80",
    priceNum: 151.8,
    change24h: "-0.26%",
    changeNum: -0.26,
    entryZone: "151.80 - 152.40 (Sell on High)",
    stopLoss: "153.20",
    target1: "149.50",
    target2: "147.80",
    riskReward: "1 : 3.0",
    timeframe: "1H / 4H Intraday",
    confidence: 89,
    rsi: 71.5,
    technicalReason: "Extensive overbought readings near Bank of Japan currency defense boundary. High probability of official intervention.",
    keyLevels: { support: "149.20", resistance: "152.60" },
    updatedAt: "Live Synchronized",
  },
].map((s) => {
  const status = getAssetMarketStatus(s.category);
  return {
    ...s,
    isMarketOpen: status.isOpen,
    marketStatusText: status.badgeEn,
    marketStatusBn: status.badgeBn,
  };
});

export default function SignalsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AratBazar Algorithmic Trade Signals & Market Scanner",
    url: "https://aratbazar.com/signals",
    description:
      "Real-time institutional buy & sell signals for Crypto, Forex, Stocks, and Commodities. Scanned every 30 minutes.",
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
        {/* Page Hero Header */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <Radar className="h-3.5 w-3.5 animate-pulse" />
            <span>INSTITUTIONAL QUANT SCANNER • 30-MINUTE ENGINE</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Live Trade Signals & Market Scanner
              </h1>
              <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed">
                Algorithmic detection of overbought supply peaks (<strong>SELL / Short</strong>) and
                oversold accumulation dips (<strong>BUY / Long</strong>). Precision entries, stop
                losses, and risk-to-reward metrics updated continuously every 30 minutes.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2 text-slate-300 font-mono">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Mathematical Confluence
              </span>
            </div>
          </div>
        </div>

        {/* Client Interactive Terminal */}
        <TradeSignalsClient
          initialSignals={INITIAL_SIGNALS}
          initialUpdatedAt="Live Synchronized"
        />
      </div>
    </>
  );
}
