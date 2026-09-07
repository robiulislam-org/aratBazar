"use client";

import { useState, useEffect } from "react";
import { Clock, Globe, Flame, Zap, CheckCircle2 } from "lucide-react";

interface SessionData {
  id: string;
  name: string;
  city: string;
  flag: string;
  utcOpen: number; // in UTC hours (e.g. 7 for 07:00)
  utcClose: number; // in UTC hours
  timeZone: string;
  localTimeStr: string;
  isOpen: boolean;
  progressPercent: number;
}

export default function MarketSessionClock() {
  const [nowUtc, setNowUtc] = useState<Date>(new Date());
  const [bengalTime, setBengalTime] = useState<string>("");
  const [utcTime, setUtcTime] = useState<string>("");
  const [nyTime, setNyTime] = useState<string>("");
  const [londonTime, setLondonTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setNowUtc(now);

      setBengalTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );

      setUtcTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );

      setNyTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );

      setLondonTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Compute UTC fractional hours
  const utcHours = nowUtc.getUTCHours() + nowUtc.getUTCMinutes() / 60;
  const utcDay = nowUtc.getUTCDay(); // 0 = Sun, 6 = Sat
  const isWeekend = utcDay === 6 || (utcDay === 0 && utcHours < 21); // Weekend forex / equity closed

  // 4 Major Global Sessions definition in UTC hours
  // Sydney: 22:00 - 07:00 UTC (crosses midnight)
  // Tokyo: 00:00 - 09:00 UTC
  // London: 08:00 - 16:30 UTC
  // New York: 13:30 - 20:00 UTC

  const isSydneyOpen = !isWeekend && (utcHours >= 22 || utcHours < 7);
  const isTokyoOpen = !isWeekend && utcHours >= 0 && utcHours < 9;
  const isLondonOpen = !isWeekend && utcHours >= 8 && utcHours < 16.5;
  const isNewYorkOpen = !isWeekend && utcHours >= 13.5 && utcHours < 20;

  // Key Overlaps
  // London + New York Overlap: 13:30 - 16:30 UTC (Most volatile & profitable session worldwide)
  const isLondonNyOverlap = isLondonOpen && isNewYorkOpen;
  // Tokyo + London Overlap: 08:00 - 09:00 UTC
  const isTokyoLondonOverlap = isTokyoOpen && isLondonOpen;

  const sessions: SessionData[] = [
    {
      id: "syd",
      name: "Sydney Session",
      city: "Sydney / Pacific",
      flag: "🇦🇺",
      utcOpen: 22,
      utcClose: 7,
      timeZone: "Australia/Sydney",
      localTimeStr: nowUtc.toLocaleTimeString("en-US", { timeZone: "Australia/Sydney", hour: "2-digit", minute: "2-digit", hour12: true }),
      isOpen: isSydneyOpen,
      progressPercent: isSydneyOpen ? Math.min(100, Math.max(10, ((utcHours >= 22 ? utcHours - 22 : utcHours + 2) / 9) * 100)) : 0,
    },
    {
      id: "tok",
      name: "Tokyo Session",
      city: "Tokyo / Asian Hub",
      flag: "🇯🇵",
      utcOpen: 0,
      utcClose: 9,
      timeZone: "Asia/Tokyo",
      localTimeStr: nowUtc.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hour12: true }),
      isOpen: isTokyoOpen,
      progressPercent: isTokyoOpen ? Math.min(100, Math.max(10, (utcHours / 9) * 100)) : 0,
    },
    {
      id: "lon",
      name: "London Session",
      city: "London / European Hub",
      flag: "🇬🇧",
      utcOpen: 8,
      utcClose: 16.5,
      timeZone: "Europe/London",
      localTimeStr: londonTime || "08:00 AM",
      isOpen: isLondonOpen,
      progressPercent: isLondonOpen ? Math.min(100, Math.max(10, ((utcHours - 8) / 8.5) * 100)) : 0,
    },
    {
      id: "ny",
      name: "New York Session",
      city: "Wall Street / Americas",
      flag: "🇺🇸",
      utcOpen: 13.5,
      utcClose: 20,
      timeZone: "America/New_York",
      localTimeStr: nyTime || "09:30 AM",
      isOpen: isNewYorkOpen,
      progressPercent: isNewYorkOpen ? Math.min(100, Math.max(10, ((utcHours - 13.5) / 6.5) * 100)) : 0,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="rounded-lg bg-teal-500/10 p-2 text-teal-400 border border-teal-500/20">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>World Financial Session Clock</span>
              <span className="rounded bg-teal-500/20 border border-teal-500/30 px-2 py-0.5 text-[10px] font-mono text-teal-300 uppercase">
                Live Interbank
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Track global market liquidity centers & volume overlaps
            </p>
          </div>
        </div>

        {/* Real-Time Dual Clocks */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-right">
            <span className="text-[10px] text-slate-400 block uppercase">Dhaka (BST)</span>
            <span className="font-bold text-emerald-400">{bengalTime || "--:--:--"}</span>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-right">
            <span className="text-[10px] text-slate-400 block uppercase">UTC Time</span>
            <span className="font-bold text-cyan-300">{utcTime || "--:--:--"}</span>
          </div>
        </div>
      </div>

      {/* Golden Overlap Highlight Banner */}
      {isLondonNyOverlap ? (
        <div className="mt-4 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-emerald-950/20 to-amber-500/15 p-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Flame className="h-4 w-4 animate-bounce" />
            </div>
            <div>
              <span className="text-xs font-black text-amber-300 uppercase tracking-wider block">
                🔥 LONDON & NEW YORK OVERLAP ACTIVE
              </span>
              <span className="text-[11px] text-slate-300">
                Peak global trading volume (~70% daily FX & Equity turnover happening now)
              </span>
            </div>
          </div>
          <span className="rounded-lg bg-amber-500 px-2.5 py-1 text-[10px] font-black text-slate-950 uppercase font-mono">
            MAX LIQUIDITY
          </span>
        </div>
      ) : isTokyoLondonOverlap ? (
        <div className="mt-4 rounded-xl border border-teal-500/40 bg-teal-950/20 p-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Zap className="h-4 w-4 text-teal-400" />
            <span className="text-xs font-bold text-teal-300">
              ⚡ Asian - European Handover Active (London Open Breakouts)
            </span>
          </div>
          <span className="rounded bg-teal-500/20 px-2 py-0.5 text-[10px] font-mono text-teal-300 font-bold">
            HIGH VOLATILITY
          </span>
        </div>
      ) : null}

      {/* 4 Session Progress Cards Grid */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {sessions.map((sess) => (
          <div
            key={sess.id}
            className={`rounded-xl border p-3.5 transition ${
              sess.isOpen
                ? "border-emerald-500/40 bg-emerald-950/15 shadow-lg shadow-emerald-950/20"
                : "border-slate-800/80 bg-slate-900/50 opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{sess.flag}</span>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">{sess.name}</h4>
                  <span className="text-[10px] text-slate-400 block">{sess.city}</span>
                </div>
              </div>

              {sess.isOpen ? (
                <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPEN
                </span>
              ) : (
                <span className="rounded bg-rose-500/15 px-2 py-0.5 text-[10px] font-mono font-bold text-rose-300 border border-rose-500/30">
                  CLOSED
                </span>
              )}
            </div>

            {/* Local Time & Progress bar */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Local Time:</span>
                <span className="text-white font-bold">{sess.localTimeStr}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    sess.isOpen
                      ? "bg-gradient-to-r from-teal-500 to-emerald-400"
                      : "bg-slate-700"
                  }`}
                  style={{ width: `${sess.isOpen ? sess.progressPercent : 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          Best execution hours: London Open (08:00 GMT) & US Core Session (13:30 - 16:00 GMT)
        </span>
        <span className="text-slate-400 font-mono">Auto synchronized to system edge clock</span>
      </div>
    </div>
  );
}
