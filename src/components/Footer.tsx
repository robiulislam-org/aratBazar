"use client";

import Link from "next/link";
import { Activity, ShieldAlert, Mail, Globe, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#060911] pt-12 pb-8 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 pb-10 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 shadow-md shadow-emerald-500/20">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-black tracking-wider text-white">ARAT<span className="text-emerald-400">BAZAR</span></span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              AratBazar is an independent financial data aggregation and market intelligence terminal providing multi-asset market analytics, algorithmic sentiment, and macroeconomic insights for global traders.
            </p>
            <div className="flex items-center space-x-3 text-slate-400 pt-1">
              <span className="flex items-center gap-1"><Lock className="h-3 w-3 text-emerald-400" /> SSL Encrypted</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Globe className="h-3 w-3 text-teal-400" /> Global Feeds</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Market Hubs</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-emerald-400 transition">Global Overview</Link></li>
              <li><Link href="/signals" className="hover:text-emerald-300 transition text-emerald-400 font-semibold">⚡ Trade Signals (30m Scanner)</Link></li>
              <li><Link href="/currency-strength" className="hover:text-emerald-300 transition text-cyan-400 font-semibold">📊 Currency Strength Meter</Link></li>
              <li><Link href="/journal" className="hover:text-emerald-300 transition text-teal-400 font-semibold">📓 Private Trade Journal</Link></li>
              <li><Link href="/calendar" className="hover:text-emerald-400 transition">Economic Calendar</Link></li>
              <li><Link href="/tools" className="hover:text-emerald-400 transition">Risk & Position Calculator</Link></li>
              <li><Link href="/news" className="hover:text-emerald-400 transition">Market Intelligence & News</Link></li>
            </ul>
          </div>

          {/* Editorial & Tools */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Calculators & Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/journal" className="hover:text-emerald-400 transition">Win-Rate & P&L Journal</Link></li>
              <li><Link href="/currency-strength" className="hover:text-emerald-400 transition">FX Strength Matrix</Link></li>
              <li><Link href="/tools" className="hover:text-emerald-400 transition">Lot Size Calculator</Link></li>
              <li><Link href="/tools" className="hover:text-emerald-400 transition">Compound ROI Engine</Link></li>
              <li><Link href="/tools" className="hover:text-emerald-400 transition">Forex Pip Value</Link></li>
              <li><Link href="/calendar" className="hover:text-emerald-400 transition">Fed Rate Tracker</Link></li>
            </ul>
          </div>

          {/* Compliance & Policy - AdSense Essentials */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Compliance & Trust</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-emerald-400 transition">About AratBazar</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact & Support</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy (GDPR)</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-400 transition">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-amber-400 hover:text-amber-300 transition">Financial Risk Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Mandatory Financial Disclaimer Banner */}
        <div className="my-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center space-x-2 font-bold text-amber-400 mb-1.5">
            <ShieldAlert className="h-4 w-4" />
            <span>IMPORTANT FINANCIAL RISK DISCLOSURE</span>
          </div>
          <p>
            Trading foreign exchange (Forex), cryptocurrencies, commodities, and equities on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade or invest in any financial instrument, you should carefully consider your investment objectives, level of experience, and risk appetite. The content published on <strong>AratBazar (aratbazar.com)</strong> is for informational, analytical, and educational purposes only and does not constitute financial, investment, legal, or tax advice. Past performance is not indicative of future results.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} AratBazar Financial Intelligence. All rights reserved.</p>
          <p>Domain: <span className="text-slate-300 font-mono">aratbazar.com</span> • Hosted on Edge Cloud Architecture</p>
        </div>
      </div>
    </footer>
  );
}
