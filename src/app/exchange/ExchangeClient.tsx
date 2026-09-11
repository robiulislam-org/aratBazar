"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  Coins,
  TrendingUp,
  RefreshCw,
  Search,
  Globe,
  Sparkles,
  Calculator,
  ShieldCheck,
  Scale,
  DollarSign,
  Info,
  Clock,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import {
  CURRENCIES,
  POPULAR_EXCHANGES,
  GOLD_UNITS,
  GOLD_PURITIES,
  CurrencyInfo,
} from "@/data/currencies";

interface MetalsData {
  gold: {
    spotUsd: number;
    change24h: number;
    high24h: number;
    low24h: number;
    perGram: Record<string, number>;
    perVhori: Record<string, number>;
    perOunce: number;
    perKg: number;
  };
  silver: {
    spotUsd: number;
    perGram: number;
    perVhori: number;
    perOunce: number;
    perKg: number;
  };
}

export default function ExchangeClient() {
  // State
  const [rates, setRates] = useState<Record<string, number>>({});
  const [metals, setMetals] = useState<MetalsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Converter state
  const [amount, setAmount] = useState<number | string>(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // World table state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [tableBaseCurrency, setTableBaseCurrency] = useState("USD");

  // Gold calculator state
  const [goldSelectedCurrency, setGoldSelectedCurrency] = useState("USD");
  const [goldCalcAmount, setGoldCalcAmount] = useState<number | string>(1);
  const [goldCalcUnit, setGoldCalcUnit] = useState("ounce");
  const [goldCalcKarat, setGoldCalcKarat] = useState("24K");

  // Fetch Exchange Rates & Metals
  const fetchData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/exchange-rates");
      if (res.ok) {
        const data = await res.json();
        if (data.rates) {
          setRates(data.rates);
        }
        if (data.metals) {
          setMetals(data.metals);
        }
        setLastUpdated(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      }
    } catch (err) {
      console.error("Failed to fetch exchange rates:", err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // 1-minute auto-refresh
    return () => clearInterval(interval);
  }, []);

  // Currency lookup map
  const currencyMap = useMemo(() => {
    const map = new Map<string, CurrencyInfo>();
    CURRENCIES.forEach((c) => map.set(c.code, c));
    return map;
  }, []);

  // Conversion calculations
  const numAmount = typeof amount === "number" ? amount : parseFloat(amount) || 0;
  const fromRate = rates[fromCurrency] || 1;
  const toRate = rates[toCurrency] || 1;

  // Conversion: amount in USD = amount / fromRate; amount in target = (amount / fromRate) * toRate
  const rateMultiplier = fromRate > 0 ? toRate / fromRate : 0;
  const convertedAmount = numAmount * rateMultiplier;
  const inverseRate = rateMultiplier > 0 ? 1 / rateMultiplier : 0;

  // Swap currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Set pair from quick corridor card
  const selectPair = (from: string, to: string) => {
    setFromCurrency(from);
    setToCurrency(to);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  // Filtered currencies for world rates table
  const filteredCurrencies = useMemo(() => {
    return CURRENCIES.filter((c) => {
      const matchesSearch =
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === "All" || c.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  // Gold calculations
  const goldRateInCurrencyMultiplier = rates[goldSelectedCurrency] || 1;
  const goldSpotUsd = metals?.gold.spotUsd || 4374.50;
  const goldGram24kUsd = goldSpotUsd / 31.1034768;

  const getGoldPricePerUnit = (unitId: string, karat: string) => {
    const unit = GOLD_UNITS.find((u) => u.id === unitId) || GOLD_UNITS[0];
    const purity = GOLD_PURITIES.find((p) => p.karat === karat)?.purity || 0.999;
    const priceInUsd = goldGram24kUsd * purity * unit.grams;
    return priceInUsd * goldRateInCurrencyMultiplier;
  };

  const calculatedGoldTotal = useMemo(() => {
    const qty = typeof goldCalcAmount === "number" ? goldCalcAmount : parseFloat(goldCalcAmount) || 0;
    const unitPrice = getGoldPricePerUnit(goldCalcUnit, goldCalcKarat);
    return qty * unitPrice;
  }, [goldCalcAmount, goldCalcUnit, goldCalcKarat, goldRateInCurrencyMultiplier, goldSpotUsd]);

  const selectedCurrencySymbol = currencyMap.get(goldSelectedCurrency)?.symbol || "$";
  const toCurrencySymbol = currencyMap.get(toCurrency)?.symbol || "";
  const fromCurrencySymbol = currencyMap.get(fromCurrency)?.symbol || "";

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-emerald-500 selection:text-white pb-20">
      {/* ─── Hero Header ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0c1322] via-[#090d16] to-[#060911] py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Live Real-Time Forex & Bullion Engine</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                World Currency Rates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Live Gold Price</span>
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed">
                Real-time exchange rates across 160+ world currencies, institutional forex converter, global remittance corridors, and live 24K, 22K, 21K, 18K Gold and Silver bullion spot valuations.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span>Updated: <strong className="text-slate-200">{lastUpdated || "Live Feed"}</strong></span>
              </div>
              <button
                onClick={fetchData}
                disabled={isRefreshing}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${isRefreshing ? "animate-spin" : ""}`} />
                <span>Refresh Rates</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {/* ─── 1. Live Currency Converter ────────────────────────────────────── */}
        <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ArrowLeftRight className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Live Currency Converter</h2>
                <p className="text-xs text-slate-400">Calculate real-time exchange rates with zero hidden markups</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-lg">
              <span>1 {fromCurrency} = {rateMultiplier.toFixed(4)} {toCurrency}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Amount Input */}
            <div className="lg:col-span-4 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Amount</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  {fromCurrencySymbol}
                </span>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/90 pl-9 pr-4 py-3.5 text-lg font-bold text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
                  placeholder="Enter amount..."
                />
              </div>
            </div>

            {/* From Currency Selector */}
            <div className="lg:col-span-3 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">From Currency</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3.5 text-sm font-semibold text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
              >
                {CURRENCIES.map((c) => (
                  <option key={`from-${c.code}`} value={c.code}>
                    {c.flag} {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="lg:col-span-2 flex justify-center pt-6 lg:pt-4">
              <button
                type="button"
                onClick={handleSwap}
                aria-label="Swap currencies"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 transition shadow-lg active:scale-95"
              >
                <ArrowLeftRight className="h-5 w-5" />
              </button>
            </div>

            {/* To Currency Selector */}
            <div className="lg:col-span-3 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">To Currency</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3.5 text-sm font-semibold text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
              >
                {CURRENCIES.map((c) => (
                  <option key={`to-${c.code}`} value={c.code}>
                    {c.flag} {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Conversion Output Display */}
          <div className="mt-8 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-emerald-950/20 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  {numAmount.toLocaleString()} {currencyMap.get(fromCurrency)?.name} ({fromCurrency}) =
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                    {convertedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                  </span>
                  <span className="text-xl font-bold text-white">
                    {currencyMap.get(toCurrency)?.name} ({toCurrency})
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-400 md:text-right border-t md:border-t-0 border-slate-800 pt-3 md:pt-0 w-full md:w-auto">
                <p>
                  1 {fromCurrency} = <strong className="text-slate-200">{rateMultiplier.toFixed(4)} {toCurrency}</strong>
                </p>
                <p>
                  1 {toCurrency} = <strong className="text-slate-200">{inverseRate.toFixed(4)} {fromCurrency}</strong>
                </p>
                <p className="text-[11px] text-emerald-400/80">Real-Time Wholesale Interbank Rate (Zero Bank Spread)</p>
              </div>
            </div>

            {/* Quick breakdown ladder */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-center text-xs">
              {[1, 5, 10, 50, 100, 1000].map((unit) => (
                <div key={unit} className="bg-slate-900/60 rounded-lg py-2 px-1 border border-slate-800">
                  <span className="text-slate-400">{unit} {fromCurrency} =</span>
                  <p className="font-bold text-slate-200 mt-0.5">
                    {(unit * rateMultiplier).toLocaleString("en-US", { maximumFractionDigits: 2 })} {toCurrency}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 2. Global Forex & Remittance Corridors ─────────────────────────── */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 mb-1">
                <Globe className="h-3.5 w-3.5" />
                <span>Global Currency Corridors</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Major Foreign Exchange & Remittance Rates
              </h2>
            </div>
            <p className="text-xs text-slate-400">Click any currency pair to load directly into the converter</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {POPULAR_EXCHANGES.map((item) => {
              const fromVal = rates[item.from] || 1;
              const toVal = rates[item.to] || 1;
              const pairRate = fromVal > 0 ? toVal / fromVal : 0;
              const toSymbol = currencyMap.get(item.to)?.symbol || "";

              return (
                <button
                  key={`${item.from}-${item.to}`}
                  type="button"
                  onClick={() => selectPair(item.from, item.to)}
                  className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-[#090d16] p-4 text-left transition hover:border-teal-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-teal-500/5"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.flagFrom}</span>
                      <span className="text-xs text-slate-500">→</span>
                      <span className="text-2xl">{item.flagTo}</span>
                    </div>
                    <span className="rounded bg-teal-500/10 px-2 py-0.5 text-[11px] font-bold text-teal-400 group-hover:bg-teal-500/20 transition">
                      {item.from} / {item.to}
                    </span>
                  </div>

                  <div className="my-3">
                    <p className="text-xs font-medium text-slate-400">{item.label}</p>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-white group-hover:text-teal-300 transition">
                        {toSymbol}{pairRate >= 10 ? pairRate.toFixed(2) : pairRate.toFixed(4)}
                      </span>
                      <span className="text-xs text-slate-400">per 1 {item.from}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 w-full">
                    <span>1,000 {item.from} = {toSymbol}{(pairRate * 1000).toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── 3. Live Gold & Silver Rate Center ─────────────────────────────── */}
        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#10141e] to-[#090d16] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-950 font-black shadow-lg shadow-amber-500/20">
                <Coins className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white">Live Gold & Silver Rates (London Bullion Spot)</h2>
                  <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-400 border border-amber-500/30">
                    London Spot XAU
                  </span>
                </div>
                <p className="text-xs text-slate-400">Real-time bullion spot pricing for 24K, 22K, 21K, 18K in Troy Ounces, Grams, and Kilograms</p>
              </div>
            </div>

            {/* Currency Selector for Gold Table */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Display Currency:</span>
              <select
                value={goldSelectedCurrency}
                onChange={(e) => setGoldSelectedCurrency(e.target.value)}
                className="rounded-lg border border-amber-500/30 bg-slate-900 px-3 py-1.5 text-xs font-bold text-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {CURRENCIES.map((c) => (
                  <option key={`gold-${c.code}`} value={c.code}>
                    {c.flag} {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Spot Summary Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Gold Spot (1 Troy Ounce)</span>
                <span className={`font-bold ${(metals?.gold.change24h || 0) >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {(metals?.gold.change24h || 0) >= 0 ? "+" : ""}{(metals?.gold.change24h || 0).toFixed(2)}%
                </span>
              </div>
              <p className="text-2xl font-black text-amber-400 mt-1">
                ${goldSpotUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                ≈ {selectedCurrencySymbol}{((goldSpotUsd * goldRateInCurrencyMultiplier)).toLocaleString("en-US", { maximumFractionDigits: 0 })} {goldSelectedCurrency}
              </p>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
              <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>24 Karat Pure (1 Gram)</span>
                <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px]">99.9% Pure</span>
              </div>
              <p className="text-2xl font-black text-white mt-1">
                {selectedCurrencySymbol}{getGoldPricePerUnit("gram", "24K").toLocaleString("en-US", { maximumFractionDigits: 2 })}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Raw Bullion / Sovereign Bar Standard</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>22 Karat (1 Gram)</span>
                <span className="text-[10px] text-amber-300 font-semibold">Jewelry Standard</span>
              </div>
              <p className="text-2xl font-black text-slate-200 mt-1">
                {selectedCurrencySymbol}{getGoldPricePerUnit("gram", "22K").toLocaleString("en-US", { maximumFractionDigits: 2 })}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">91.6% Hallmarked Fine Jewelry</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Silver Spot (1 Troy Ounce)</span>
                <span className="text-[10px] text-slate-400">Silver 999</span>
              </div>
              <p className="text-2xl font-black text-slate-300 mt-1">
                {selectedCurrencySymbol}{((metals?.silver.spotUsd || 33.5) * goldRateInCurrencyMultiplier).toLocaleString("en-US", { maximumFractionDigits: 2 })}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Spot: ${(metals?.silver.spotUsd || 33.5).toFixed(2)}/oz
              </p>
            </div>
          </div>

          {/* Detailed Karat & Weight Matrix */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold uppercase">
                <tr>
                  <th className="py-3 px-4">Gold Purity / Grade</th>
                  <th className="py-3 px-4">Purity %</th>
                  <th className="py-3 px-4">Per 1 Gram (g)</th>
                  <th className="py-3 px-4">Per 1 Troy Ounce (oz)</th>
                  <th className="py-3 px-4">Per 1 Tola (11.66g)</th>
                  <th className="py-3 px-4">Per 1 Kilogram (kg)</th>
                  <th className="py-3 px-4">Primary Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {GOLD_PURITIES.map((p) => {
                  const gramPrice = getGoldPricePerUnit("gram", p.karat);
                  const ouncePrice = getGoldPricePerUnit("ounce", p.karat);
                  const tolaPrice = getGoldPricePerUnit("tola", p.karat);
                  const kgPrice = getGoldPricePerUnit("kg", p.karat);

                  return (
                    <tr key={p.karat} className="hover:bg-slate-900/50 transition">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>{p.name}</span>
                        {p.karat === "24K" && (
                          <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[10px] text-amber-300 font-semibold">
                            Pure Bullion
                          </span>
                        )}
                        {p.karat === "22K" && (
                          <span className="rounded bg-teal-500/20 px-1.5 py-0.2 text-[10px] text-teal-300 font-semibold">
                            Crown Hallmark
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-400">{(p.purity * 100).toFixed(1)}%</td>
                      <td className="py-3.5 px-4 font-bold text-amber-300 font-mono">
                        {selectedCurrencySymbol}{gramPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3.5 px-4 font-black text-emerald-400 font-mono text-sm">
                        {selectedCurrencySymbol}{ouncePrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-300">
                        {selectedCurrencySymbol}{tolaPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-300">
                        {selectedCurrencySymbol}{kgPrice.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </td>
                      <td className="py-3.5 px-4 text-[11px] text-slate-400">{p.desc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Interactive Gold Valuation Calculator */}
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <Calculator className="h-5 w-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Interactive Precious Metals Valuation Calculator</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-400">Weight / Quantity</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={goldCalcAmount}
                  onChange={(e) => setGoldCalcAmount(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-bold text-white focus:border-amber-500 focus:outline-none"
                  placeholder="e.g. 5"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">Weight Unit</label>
                <select
                  value={goldCalcUnit}
                  onChange={(e) => setGoldCalcUnit(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-white focus:border-amber-500 focus:outline-none"
                >
                  {GOLD_UNITS.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">Gold Karat / Purity</label>
                <select
                  value={goldCalcKarat}
                  onChange={(e) => setGoldCalcKarat(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-white focus:border-amber-500 focus:outline-none"
                >
                  {GOLD_PURITIES.map((p) => (
                    <option key={p.karat} value={p.karat}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-4 py-2 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Estimated Market Value</span>
                  <p className="text-lg font-black text-white">
                    {selectedCurrencySymbol}{calculatedGoldTotal.toLocaleString("en-US", { maximumFractionDigits: 2 })} {goldSelectedCurrency}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. World Currencies Master Table ───────────────────────────────── */}
        <div className="rounded-2xl border border-slate-800 bg-[#090d16] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white">All World Currencies Exchange Rates</h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Comprehensive real-time interbank exchange rates across 160+ world currencies</p>
            </div>

            {/* Controls: Search & Base Currency */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search country or currency..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/90 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 whitespace-nowrap">Base Currency:</span>
                <select
                  value={tableBaseCurrency}
                  onChange={(e) => setTableBaseCurrency(e.target.value)}
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="USD">🇺🇸 USD — US Dollar</option>
                  <option value="EUR">🇪🇺 EUR — Euro</option>
                  <option value="GBP">🇬🇧 GBP — British Pound</option>
                  <option value="JPY">🇯🇵 JPY — Japanese Yen</option>
                  <option value="CAD">🇨🇦 CAD — Canadian Dollar</option>
                  <option value="AUD">🇦🇺 AUD — Australian Dollar</option>
                  <option value="CHF">🇨🇭 CHF — Swiss Franc</option>
                  <option value="SAR">🇸🇦 SAR — Saudi Riyal</option>
                  <option value="AED">🇦🇪 AED — UAE Dirham</option>
                  <option value="SGD">🇸🇬 SGD — Singapore Dollar</option>
                  <option value="INR">🇮🇳 INR — Indian Rupee</option>
                  <option value="BDT">🇧🇩 BDT — Bangladeshi Taka</option>
                </select>
              </div>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80 text-xs">
            {["All", "Middle East", "Asia", "Europe", "Americas", "Africa", "Oceania"].map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`rounded-lg px-3 py-1.5 font-semibold transition whitespace-nowrap ${
                  selectedRegion === region
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-900/90 text-slate-400 font-semibold uppercase">
                <tr>
                  <th className="py-3 px-4">Currency</th>
                  <th className="py-3 px-4">Country / Region</th>
                  <th className="py-3 px-4">1 {tableBaseCurrency} Equivalent</th>
                  <th className="py-3 px-4">Inverse (1 Unit to {tableBaseCurrency})</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {filteredCurrencies.map((c) => {
                  const baseVal = rates[tableBaseCurrency] || 1;
                  const targetVal = rates[c.code] || 1;
                  const rateAgainstBase = baseVal > 0 ? targetVal / baseVal : 0;
                  const inverseRateAgainstBase = rateAgainstBase > 0 ? 1 / rateAgainstBase : 0;
                  const baseSymbol = currencyMap.get(tableBaseCurrency)?.symbol || "$";

                  return (
                    <tr key={c.code} className="hover:bg-slate-900/50 transition">
                      <td className="py-3 px-4 font-bold text-white flex items-center gap-2.5">
                        <span className="text-xl">{c.flag}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono">{c.code}</span>
                            <span className="text-slate-400 font-normal">({c.symbol})</span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-normal">{c.name}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        <span>{c.country}</span>
                        <span className="block text-[10px] text-slate-400">{c.region}</span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-400">
                        {rateAgainstBase.toFixed(4)} {c.code}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-300">
                        {baseSymbol}
                        {inverseRateAgainstBase.toFixed(4)} {tableBaseCurrency}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          type="button"
                          onClick={() => selectPair(tableBaseCurrency, c.code)}
                          className="rounded-md bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-400 px-2.5 py-1 text-[11px] font-semibold text-slate-300 transition"
                        >
                          Convert
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ─── 5. Educational FAQ & Authority Section (SEO & AdSense Boost) ───── */}
        <div className="rounded-2xl border border-slate-800 bg-[#090d16]/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="h-5 w-5" />
            <h2 className="text-xl font-bold text-white">Frequently Asked Questions & Forex Guide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-400 leading-relaxed">
            <div className="space-y-2 rounded-xl bg-slate-900/50 p-4 border border-slate-800">
              <h3 className="font-bold text-slate-200 text-sm">How are foreign exchange (Forex) rates determined?</h3>
              <p>
                Foreign exchange rates are determined in the global decentralized interbank market driven by macroeconomic supply and demand dynamics. Key catalysts include central bank interest rate policies (such as the Federal Reserve, ECB, and Bank of England), sovereign inflation differentials, trade balance surpluses/deficits, geopolitical stability, and benchmark sovereign bond yields.
              </p>
            </div>

            <div className="space-y-2 rounded-xl bg-slate-900/50 p-4 border border-slate-800">
              <h3 className="font-bold text-slate-200 text-sm">What is the difference between 24K, 22K, and 18K Gold?</h3>
              <p>
                The karat rating system measures gold purity on a 24-part scale. 24 Karat represents 99.9% pure bullion, typically held as raw institutional bars and sovereign coins. 22 Karat contains 91.6% pure gold alloyed with 8.4% copper or silver for structural durability, widely favored for fine jewelry. 18 Karat contains 75% pure gold, offering enhanced scratch resistance ideal for luxury watches and diamond settings.
              </p>
            </div>

            <div className="space-y-2 rounded-xl bg-slate-900/50 p-4 border border-slate-800">
              <h3 className="font-bold text-slate-200 text-sm">What is the international standard weight of a Troy Ounce?</h3>
              <p>
                In international bullion and commodity clearing centers (such as the London Bullion Market Association - LBMA and COMEX), gold, silver, and platinum are measured in Troy Ounces. Exactly 1 Troy Ounce equals 31.1034768 grams, which is heavier than a standard commercial avoirdupois ounce (28.3495 grams).
              </p>
            </div>

            <div className="space-y-2 rounded-xl bg-slate-900/50 p-4 border border-slate-800">
              <h3 className="font-bold text-slate-200 text-sm">What is the difference between Interbank Rates and Retail Bank Rates?</h3>
              <p>
                The interbank rate (or mid-market rate) is the real-time wholesale exchange rate at which institutional banks trade currencies among themselves in multi-million dollar volume tranches. Retail commercial banks and consumer money transfer providers typically add a spread (markup of 1% to 4%) over the mid-market rate to cover operational margins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
