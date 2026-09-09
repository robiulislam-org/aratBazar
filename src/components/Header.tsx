"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, BarChart3, Calculator, Calendar, Newspaper, Shield, Menu, X, ArrowUpRight, Radar, Gauge, BookOpen } from "lucide-react";
import { getWallStreetSession, MarketSessionInfo } from "@/utils/marketHours";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<MarketSessionInfo>(getWallStreetSession());

  useEffect(() => {
    setSession(getWallStreetSession());
    const interval = setInterval(() => {
      setSession(getWallStreetSession());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#090d16]/95 backdrop-blur-md">
      {/* Top utility sub-header */}
      <div className="hidden border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-400 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <span
              className={`flex items-center gap-1.5 font-medium ${
                session.isOpen ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${session.dotColor} ${
                  session.isOpen ? "animate-pulse" : ""
                }`}
              ></span>
              {session.isOpen ? (
                <span>WALL STREET: OPEN (Active Session)</span>
              ) : (
                <span>WALL STREET: {session.session === "PRE_MARKET" ? "PRE-MARKET" : session.session === "AFTER_HOURS" ? "AFTER-HOURS" : "CLOSED"}</span>
              )}
            </span>
            <span className="text-slate-600">|</span>
            <span>CRYPTO: 24/7 GLOBAL ORDERBOOK</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">SERVER TIME: UTC+00:00</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400">
            <Link href="/disclaimer" className="transition hover:text-emerald-400">
              Risk Disclosure
            </Link>
            <span>•</span>
            <Link href="/about" className="transition hover:text-emerald-400">
              Editorial Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center space-x-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 shadow-lg shadow-emerald-500/20">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xl font-black tracking-wider text-white">ARAT<span className="text-emerald-400">BAZAR</span></span>
              <span className="rounded bg-emerald-950/80 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-800/50">PRO</span>
            </div>
            <p className="text-[10px] font-medium tracking-tight text-slate-400">GLOBAL FINANCIAL TERMINAL</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-1 md:flex">
          <Link
            href="/"
            className="flex items-center space-x-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <BarChart3 className="h-4 w-4 text-emerald-400" />
            <span>Markets</span>
          </Link>

          <Link
            href="/signals"
            className="flex items-center space-x-1.5 rounded-md px-3 py-2 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 transition hover:bg-emerald-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Signals</span>
          </Link>

          <Link
            href="/currency-strength"
            className="flex items-center space-x-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <Gauge className="h-4 w-4 text-emerald-400" />
            <span>FX Meter</span>
          </Link>

          <Link
            href="/journal"
            className="flex items-center space-x-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span>Journal</span>
          </Link>

          <Link
            href="/calendar"
            className="flex items-center space-x-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <Calendar className="h-4 w-4 text-teal-400" />
            <span>Calendar</span>
          </Link>

          <Link
            href="/tools"
            className="flex items-center space-x-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <Calculator className="h-4 w-4 text-amber-400" />
            <span>Tools</span>
          </Link>

          <Link
            href="/news"
            className="flex items-center space-x-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <Newspaper className="h-4 w-4 text-cyan-400" />
            <span>Intelligence</span>
          </Link>

          <Link
            href="/about"
            className="flex items-center space-x-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
          >
            <Shield className="h-4 w-4 text-slate-400" />
            <span>About</span>
          </Link>
        </nav>

        {/* Right Action */}
        <div className="hidden items-center space-x-3 sm:flex">
          <Link
            href="/tools"
            className="inline-flex items-center space-x-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 shadow-sm transition hover:bg-emerald-500/20"
          >
            <span>Risk Calculator</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#0c121e] px-4 py-3 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Markets & Overview
            </Link>
            <Link
              href="/signals"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              <span className="flex items-center gap-2">
                <Radar className="h-4 w-4" />
                Live Trade Signals (30m)
              </span>
              <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] text-slate-950 font-black">
                LIVE
              </span>
            </Link>
            <Link
              href="/currency-strength"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 flex items-center gap-2"
            >
              <Gauge className="h-4 w-4 text-emerald-400" />
              <span>Currency Strength Meter</span>
            </Link>
            <Link
              href="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-cyan-400" />
              <span>Private Trade Journal</span>
            </Link>
            <Link
              href="/calendar"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Macro Economic Calendar
            </Link>
            <Link
              href="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Position Size & ROI Calculators
            </Link>
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Market Intelligence & News
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              About & Editorial Policy
            </Link>
            <Link
              href="/disclaimer"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Financial Risk Disclaimer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
