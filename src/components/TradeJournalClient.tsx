"use client";

import { useState, useEffect } from "react";
import { BookOpen, Plus, Trash2, TrendingUp, TrendingDown, Award, PieChart, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import AdBanner from "@/components/AdBanner";

interface JournalEntry {
  id: string;
  date: string;
  symbol: string;
  category: "Crypto" | "Forex" | "Stocks" | "Commodities";
  type: "BUY / LONG" | "SELL / SHORT";
  entryPrice: string;
  exitPrice: string;
  pnl: number; // positive or negative dollars
  notes: string;
}

const SAMPLE_TRADES: JournalEntry[] = [
  {
    id: "t1",
    date: "2026-09-06",
    symbol: "BTC/USD",
    category: "Crypto",
    type: "BUY / LONG",
    entryPrice: "78,950",
    exitPrice: "80,450",
    pnl: 1500,
    notes: "Support retest at $79k block with high ETF inflow",
  },
  {
    id: "t2",
    date: "2026-09-05",
    symbol: "NVDA",
    category: "Stocks",
    type: "SELL / SHORT",
    entryPrice: "149.20",
    exitPrice: "144.10",
    pnl: 510,
    notes: "RSI overbought divergence near $150 resistance",
  },
  {
    id: "t3",
    date: "2026-09-04",
    symbol: "EUR/USD",
    category: "Forex",
    type: "BUY / LONG",
    entryPrice: "1.0450",
    exitPrice: "1.0415",
    pnl: -350,
    notes: "Premature long entry before ECB rate speech. Hit stop loss.",
  },
];

export default function TradeJournalClient() {
  const [trades, setTrades] = useState<JournalEntry[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState<"ALL" | "WINS" | "LOSSES">("ALL");

  // New trade form state
  const [formData, setFormData] = useState({
    symbol: "BTC/USD",
    category: "Crypto" as JournalEntry["category"],
    type: "BUY / LONG" as JournalEntry["type"],
    entryPrice: "",
    exitPrice: "",
    pnl: "",
    notes: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem("aratbazar_trade_journal");
      if (saved) {
        setTrades(JSON.parse(saved));
      } else {
        setTrades(SAMPLE_TRADES);
        localStorage.setItem("aratbazar_trade_journal", JSON.stringify(SAMPLE_TRADES));
      }
    } catch (err) {
      console.error("Failed to access localStorage:", err);
      setTrades(SAMPLE_TRADES);
    }
  }, []);

  // Save to localStorage
  const saveTrades = (newTrades: JournalEntry[]) => {
    setTrades(newTrades);
    try {
      localStorage.setItem("aratbazar_trade_journal", JSON.stringify(newTrades));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }
  };

  const handleAddTrade = (e: React.FormEvent) => {
    e.preventDefault();
    const pnlNum = parseFloat(formData.pnl) || 0;
    const newTrade: JournalEntry = {
      id: "t_" + Date.now(),
      date: new Date().toISOString().split("T")[0],
      symbol: formData.symbol.toUpperCase().trim(),
      category: formData.category,
      type: formData.type,
      entryPrice: formData.entryPrice.trim() || "--",
      exitPrice: formData.exitPrice.trim() || "--",
      pnl: pnlNum,
      notes: formData.notes.trim() || "Executed per algorithmic discipline.",
    };

    const updated = [newTrade, ...trades];
    saveTrades(updated);
    setShowAddModal(false);
    setFormData({
      symbol: "BTC/USD",
      category: "Crypto",
      type: "BUY / LONG",
      entryPrice: "",
      exitPrice: "",
      pnl: "",
      notes: "",
    });
  };

  const handleDeleteTrade = (id: string) => {
    const updated = trades.filter((t) => t.id !== id);
    saveTrades(updated);
  };

  const handleResetData = () => {
    if (confirm("Reset trade journal back to sample data?")) {
      saveTrades(SAMPLE_TRADES);
    }
  };

  // Metrics calculation
  const totalTrades = trades.length;
  const winningTrades = trades.filter((t) => t.pnl > 0);
  const losingTrades = trades.filter((t) => t.pnl < 0);
  const winRate = totalTrades > 0 ? (winningTrades.length / totalTrades) * 100 : 0;
  const netPnl = trades.reduce((acc, t) => acc + t.pnl, 0);

  const totalGains = winningTrades.reduce((acc, t) => acc + t.pnl, 0);
  const totalLosses = Math.abs(losingTrades.reduce((acc, t) => acc + t.pnl, 0));
  const profitFactor = totalLosses > 0 ? (totalGains / totalLosses).toFixed(2) : totalGains > 0 ? "MAX" : "0.00";

  // Filtered list
  const displayTrades = trades.filter((t) => {
    if (filter === "WINS") return t.pnl > 0;
    if (filter === "LOSSES") return t.pnl < 0;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Top Performance Analytics Bar */}
      <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Personal Performance Metrics</span>
                <span className="rounded bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-300 uppercase">
                  100% Private (Local)
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Mathematical win-rate and profit factor analytics stored safely in your browser
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center space-x-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Log New Trade</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Boxes */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Win Rate</span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className={`font-mono text-2xl font-black ${winRate >= 50 ? "text-emerald-400" : "text-amber-400"}`}>
                {isClient ? `${winRate.toFixed(1)}%` : "--"}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                ({winningTrades.length}W / {losingTrades.length}L)
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Net Realized P&L</span>
            <span className={`font-mono text-2xl font-black block mt-1 ${netPnl >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {isClient ? `${netPnl >= 0 ? "+" : ""}$${netPnl.toLocaleString()}` : "$0"}
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Profit Factor</span>
            <span className="font-mono text-2xl font-black text-white block mt-1">
              {isClient ? profitFactor : "0.00"}
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Total Logged</span>
            <span className="font-mono text-2xl font-black text-cyan-300 block mt-1">
              {isClient ? totalTrades : 0} Trades
            </span>
          </div>
        </div>
      </div>

      {/* Top Ad Unit */}
      <AdBanner format="horizontal" label="SPONSORED PRO TRADING DESK" />

      {/* Filter and Table Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
          {[
            { id: "ALL", label: `All Trades (${totalTrades})` },
            { id: "WINS", label: `Wins (${winningTrades.length})` },
            { id: "LOSSES", label: `Losses (${losingTrades.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                filter === tab.id
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleResetData}
          className="text-xs text-slate-500 hover:text-slate-300 transition underline cursor-pointer"
        >
          Reset to Sample Data
        </button>
      </div>

      {/* Trade Log Table */}
      <div className="rounded-2xl border border-slate-800 bg-[#0c121e] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-mono text-[11px] uppercase">
                <th className="p-3.5">Date</th>
                <th className="p-3.5">Asset</th>
                <th className="p-3.5">Sector</th>
                <th className="p-3.5">Action</th>
                <th className="p-3.5">Entry</th>
                <th className="p-3.5">Exit</th>
                <th className="p-3.5 text-right">P&L ($)</th>
                <th className="p-3.5">Notes / Strategy</th>
                <th className="p-3.5 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {displayTrades.map((trade) => {
                const isWin = trade.pnl > 0;
                const isLoss = trade.pnl < 0;

                return (
                  <tr key={trade.id} className="transition hover:bg-slate-800/40">
                    <td className="p-3.5 font-mono text-slate-400">{trade.date}</td>
                    <td className="p-3.5 font-bold text-white font-mono">{trade.symbol}</td>
                    <td className="p-3.5">
                      <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400 uppercase">
                        {trade.category}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-mono font-bold ${
                          trade.type.includes("BUY")
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        }`}
                      >
                        {trade.type}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-slate-300">{trade.entryPrice}</td>
                    <td className="p-3.5 font-mono text-slate-300">{trade.exitPrice}</td>
                    <td className="p-3.5 text-right">
                      <span
                        className={`font-mono font-black text-sm ${
                          isWin ? "text-emerald-400" : isLoss ? "text-rose-400" : "text-slate-400"
                        }`}
                      >
                        {trade.pnl > 0 ? `+$${trade.pnl.toLocaleString()}` : `$${trade.pnl.toLocaleString()}`}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-400 max-w-xs truncate text-[11px]">
                      {trade.notes}
                    </td>
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleDeleteTrade(trade.id)}
                        className="p-1 text-slate-500 hover:text-rose-400 transition cursor-pointer"
                        title="Delete entry"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding Trade */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#0c121e] p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">Log New Trade Execution</h3>
            <p className="text-xs text-slate-400 mb-4">
              Saved strictly on your device. Zero external data transmission.
            </p>

            <form onSubmit={handleAddTrade} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Symbol</label>
                  <input
                    type="text"
                    required
                    value={formData.symbol}
                    onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                    placeholder="e.g. BTC/USD, NVDA"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white uppercase focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Sector</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Crypto">Crypto</option>
                    <option value="Forex">Forex</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Commodities">Commodities</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">Action Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "BUY / LONG" })}
                    className={`rounded-lg py-2 text-xs font-bold font-mono transition cursor-pointer ${
                      formData.type === "BUY / LONG"
                        ? "bg-emerald-500 text-slate-950"
                        : "border border-slate-700 bg-slate-900 text-slate-400"
                    }`}
                  >
                    BUY / LONG
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "SELL / SHORT" })}
                    className={`rounded-lg py-2 text-xs font-bold font-mono transition cursor-pointer ${
                      formData.type === "SELL / SHORT"
                        ? "bg-rose-500 text-white"
                        : "border border-slate-700 bg-slate-900 text-slate-400"
                    }`}
                  >
                    SELL / SHORT
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Entry Price</label>
                  <input
                    type="text"
                    value={formData.entryPrice}
                    onChange={(e) => setFormData({ ...formData, entryPrice: e.target.value })}
                    placeholder="79,500"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Exit Price</label>
                  <input
                    type="text"
                    value={formData.exitPrice}
                    onChange={(e) => setFormData({ ...formData, exitPrice: e.target.value })}
                    placeholder="81,200"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">P&L ($)</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.pnl}
                    onChange={(e) => setFormData({ ...formData, pnl: e.target.value })}
                    placeholder="+250 or -100"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">Trade Notes / Confluence</label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. 200 EMA bounce, news release scalp"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="mt-5 flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-2 text-xs font-bold text-slate-950 transition shadow-lg shadow-emerald-500/20"
                >
                  Save Trade Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Privacy Guarantee Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 flex items-center space-x-3 text-xs text-slate-400">
        <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
        <p>
          <strong className="text-slate-200">100% Client-Side Confidentiality:</strong> Your trading history and profit metrics are stored entirely in your local browser storage (<code className="text-emerald-400">localStorage</code>). No financial data is ever sent to our servers or third parties.
        </p>
      </div>
    </div>
  );
}
