"use client";

import React, { useState, useEffect } from "react";
import { Zap, Clock, Flame, ArrowRight } from "lucide-react";

export default function FlashSaleBanner() {
  // 5 hour countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/30 p-4 sm:p-6 mb-8 relative overflow-hidden shadow-2xl">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Headline */}
        <div className="flex items-center gap-3.5 text-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-emerald-500/20 shrink-0">
            <Zap className="w-6 h-6 fill-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                DAILY SUPER SOURCING DEALS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-bold">
                Up to 80% Off
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
              Limited-Time Factory Clearance on Viral Problem-Solvers
            </h3>
          </div>
        </div>

        {/* Right Countdown & CTA */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Countdown timer blocks */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
            <Clock className="w-4 h-4 text-emerald-400 mr-1" />
            <span className="hidden sm:inline text-slate-400">Ends in:</span>
            <div className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono font-black text-sm">
              {formatNum(timeLeft.hours)}h
            </div>
            <span className="text-slate-600">:</span>
            <div className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono font-black text-sm">
              {formatNum(timeLeft.minutes)}m
            </div>
            <span className="text-slate-600">:</span>
            <div className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-mono font-black text-sm">
              {formatNum(timeLeft.seconds)}s
            </div>
          </div>

          <a
            href="#winning-products"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
          >
            <span>Claim Deals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
