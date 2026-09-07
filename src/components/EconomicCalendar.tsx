"use client";

import { useState, useEffect } from "react";
import { ECONOMIC_EVENTS } from "@/data/economicCalendar";
import { Calendar, Clock, AlertTriangle, ArrowRight, Bell, Zap, Volume2 } from "lucide-react";
import Link from "next/link";

export default function EconomicCalendar() {
  const [countdownSeconds, setCountdownSeconds] = useState<number>(3600 * 2 + 14 * 60 + 35); // Initial countdown ~2h 14m
  const [alertEnabled, setAlertEnabled] = useState<boolean>(false);

  // Find the first upcoming High-Impact event
  const highImpactEvent = ECONOMIC_EVENTS.find((e) => e.impact === "HIGH") || ECONOMIC_EVENTS[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(countdownSeconds / 3600);
  const minutes = Math.floor((countdownSeconds % 3600) / 60);
  const seconds = countdownSeconds % 60;
  const formattedCountdown = `${hours.toString().padStart(2, "0")}h ${minutes
    .toString()
    .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-teal-500/10 p-2 text-teal-400 border border-teal-500/20">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Macro Economic Calendar</span>
              <span className="rounded bg-rose-500/20 border border-rose-500/30 px-2 py-0.5 text-[10px] font-mono text-rose-300 uppercase">
                High Volatility
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Central bank interest rate decisions, CPI inflation, and sovereign employment metrics
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center space-x-1.5 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-slate-300">
          <Clock className="h-3 w-3 text-teal-400" />
          <span>Live Synchronized</span>
        </span>
      </div>

      {/* Real-time High Impact Event Countdown Banner */}
      {highImpactEvent && (
        <div className="my-4 rounded-xl border border-rose-500/40 bg-gradient-to-r from-rose-950/30 via-slate-900 to-rose-950/20 p-4 shadow-lg shadow-rose-950/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60"></span>
                <AlertTriangle className="relative h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                    NEXT HIGH-IMPACT RELEASE
                  </span>
                  <span className="rounded bg-rose-500 px-1.5 py-0.2 text-[9px] font-black text-slate-950 uppercase font-mono">
                    {highImpactEvent.currency}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  {highImpactEvent.event}
                </h4>
                <span className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <Zap className="h-3 w-3 text-amber-400" />
                  Expected Market Impact: Sharp volatility in USD, Gold, and S&P 500
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Countdown Clock */}
              <div className="rounded-xl border border-rose-500/40 bg-slate-950/80 px-4 py-2 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">
                  Release In:
                </span>
                <span className="font-mono text-base font-black text-white tracking-wider block">
                  {formattedCountdown}
                </span>
              </div>

              {/* Alert notification toggle */}
              <button
                onClick={() => setAlertEnabled(!alertEnabled)}
                className={`flex items-center space-x-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition cursor-pointer ${
                  alertEnabled
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                    : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
                }`}
                title="Toggle Sound Alert"
              >
                <Bell className={`h-3.5 w-3.5 ${alertEnabled ? "text-emerald-400 fill-emerald-400" : ""}`} />
                <span className="hidden sm:inline">{alertEnabled ? "Alert Active" : "Alert Me"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
              <th className="pb-2.5">Time</th>
              <th className="pb-2.5">Cur</th>
              <th className="pb-2.5">Impact</th>
              <th className="pb-2.5">Macro Release</th>
              <th className="pb-2.5 text-right">Actual</th>
              <th className="pb-2.5 text-right">Forecast</th>
              <th className="pb-2.5 text-right">Previous</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {ECONOMIC_EVENTS.map((event) => {
              const isHigh = event.impact === "HIGH";
              const isMedium = event.impact === "MEDIUM";

              return (
                <tr key={event.id} className="transition hover:bg-slate-800/40">
                  <td className="py-3 font-mono text-slate-300">{event.time}</td>
                  <td className="py-3 font-bold text-slate-200">
                    <span className="rounded bg-slate-800/80 px-1.5 py-0.5 text-[11px] font-mono border border-slate-700">
                      {event.currency}
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold font-mono ${
                        isHigh
                          ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          : isMedium
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {isHigh && <AlertTriangle className="h-2.5 w-2.5" />}
                      {event.impact}
                    </span>
                  </td>
                  <td className="py-3 font-medium text-white max-w-[220px] truncate">
                    {event.event}
                  </td>
                  <td className="py-3 text-right font-mono font-bold text-emerald-400">
                    {event.actual}
                  </td>
                  <td className="py-3 text-right font-mono text-slate-400">{event.forecast}</td>
                  <td className="py-3 text-right font-mono text-slate-400">{event.previous}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
        <span className="text-slate-400 text-[11px]">
          Pro tip: Avoid executing new market orders 15 minutes before High-Impact prints
        </span>
        <Link
          href="/calendar"
          className="inline-flex items-center space-x-1 font-semibold text-teal-400 hover:text-teal-300 transition"
        >
          <span>Full Economic Schedule</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
