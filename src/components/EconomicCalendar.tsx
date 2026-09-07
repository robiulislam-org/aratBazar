"use client";

import { ECONOMIC_EVENTS } from "@/data/economicCalendar";
import { Calendar, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EconomicCalendar() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-teal-500/10 p-2 text-teal-400 border border-teal-500/20">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Macro Economic Calendar</h3>
            <p className="text-xs text-slate-400">High-volatility releases & central bank schedules</p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center space-x-1.5 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-slate-300">
          <Clock className="h-3 w-3 text-teal-400" />
          <span>Today&apos;s Sessions</span>
        </span>
      </div>

      {/* Events Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
              <th className="pb-2.5">Time</th>
              <th className="pb-2.5">Cur</th>
              <th className="pb-2.5">Impact</th>
              <th className="pb-2.5">Event</th>
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
                  <td className="py-3 font-bold text-slate-200">{event.currency}</td>
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
                  <td className="py-3 font-medium text-white max-w-[200px] truncate">
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

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px]">Volatility projection: Highly sensitive to USD prints</span>
        <Link
          href="/calendar"
          className="inline-flex items-center space-x-1 font-semibold text-teal-400 hover:text-teal-300"
        >
          <span>Full Economic Schedule</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
