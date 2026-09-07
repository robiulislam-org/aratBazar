"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart2, Maximize2, RefreshCw } from "lucide-react";

interface AssetTab {
  symbol: string;
  name: string;
  label: string;
}

const ASSET_TABS: AssetTab[] = [
  { symbol: "BINANCE:BTCUSDT", name: "Bitcoin", label: "BTC/USDT" },
  { symbol: "NASDAQ:NVDA", name: "Nvidia", label: "NVDA" },
  { symbol: "SP:SPX", name: "S&P 500", label: "S&P 500" },
  { symbol: "OANDA:XAUUSD", name: "Gold", label: "Gold (XAU)" },
  { symbol: "FX:EURUSD", name: "Euro / Dollar", label: "EUR/USD" },
  { symbol: "NASDAQ:AAPL", name: "Apple", label: "AAPL" },
  { symbol: "NASDAQ:TSLA", name: "Tesla", label: "TSLA" }
];

export default function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAsset, setActiveAsset] = useState<AssetTab>(ASSET_TABS[0]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous widget
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: activeAsset.symbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(9, 13, 22, 1)",
      gridColor: "rgba(30, 41, 59, 0.4)",
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });

    containerRef.current.appendChild(script);
  }, [activeAsset]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-4 sm:p-5 shadow-2xl">
      {/* Header with Asset switcher */}
      <div className="flex flex-col gap-3 pb-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
            <BarChart2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              TradingView Institutional Chart
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                Live Feeds
              </span>
            </h2>
            <p className="text-xs text-slate-400">Multi-timeframe technical indicator workbench</p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition"
            title="Reload Chart Data"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-emerald-400" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      {/* Asset Switcher Pills */}
      <div className="flex overflow-x-auto py-3 space-x-2 no-scrollbar border-b border-slate-800/60">
        {ASSET_TABS.map((asset) => {
          const isActive = asset.symbol === activeAsset.symbol;
          return (
            <button
              key={asset.symbol}
              onClick={() => setActiveAsset(asset)}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {asset.label}
            </button>
          );
        })}
      </div>

      {/* TradingView Chart Container */}
      <div className="relative mt-3 h-[520px] w-full overflow-hidden rounded-xl bg-[#090d16]">
        <div
          ref={containerRef}
          className="tradingview-widget-container h-full w-full"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
      </div>

      {/* Chart Footer with Pro Indicator Legend */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800/40">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Volume Profile & Orderbook
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span> Exponential Moving Averages (20/50/200)
          </span>
        </div>
        <span className="text-slate-400">Direct Financial Feed via TradingView Enterprise Engine</span>
      </div>
    </div>
  );
}
