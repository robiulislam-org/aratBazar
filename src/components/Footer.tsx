"use client";

import Link from "next/link";
import { ShoppingBag, ShieldCheck, Mail, Globe, Lock, ExternalLink, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/90 bg-slate-950 pt-16 pb-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 shadow-md shadow-emerald-500/20 text-slate-950">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                ARAT<span className="text-emerald-400">BAZAR</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              AratBazar is the premier global winning product hunter and wholesale sourcing intelligence hub. We analyze viral market trends daily to help e-commerce sellers, dropshippers, and smart shoppers source top-tier products directly from verified factories at the lowest possible rates.
            </p>
            <div className="flex items-center space-x-3 text-slate-400 pt-1">
              <span className="flex items-center gap-1"><Lock className="h-3 w-3 text-emerald-400" /> SSL Encrypted</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Globe className="h-3 w-3 text-teal-400" /> Global Factory Sourcing</span>
            </div>
          </div>

          {/* Sourcing Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Winning Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/tech-gadgets" className="hover:text-emerald-400 transition">Tech & Smart Gadgets</Link></li>
              <li><Link href="/category/home-kitchen" className="hover:text-emerald-400 transition">Home & Kitchen Innovations</Link></li>
              <li><Link href="/category/beauty-health" className="hover:text-emerald-400 transition">Health, Beauty & Wellness</Link></li>
              <li><Link href="/category/car-outdoor" className="hover:text-emerald-400 transition">Car Accessories & Outdoor Gear</Link></li>
              <li><Link href="/category/tools-utility" className="hover:text-emerald-400 transition">Everyday Problem Solvers</Link></li>
              <li><Link href="/category/fitness-lifestyle" className="hover:text-emerald-400 transition">Fitness & Active Lifestyle</Link></li>
            </ul>
          </div>

          {/* Seller Intelligence Tools */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Seller Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/tools" className="hover:text-emerald-400 transition text-emerald-400 font-semibold">🧮 Dropship Profit Calculator</Link></li>
              <li><Link href="/tools#breakeven-roas" className="hover:text-emerald-400 transition">Breakeven ROAS Finder</Link></li>
              <li><Link href="/#winning-products" className="hover:text-emerald-400 transition">High Margin (&gt;80%) Deals</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">Factory Sourcing Standards</Link></li>
            </ul>
          </div>

          {/* Compliance & Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Daily Winning Alerts</h4>
            <p className="text-slate-400 text-xs">
              Get the top 2 daily researched winning products with supplier quotes sent straight to your inbox.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your seller email"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button className="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              No spam. 100% free daily winning product analytics.
            </div>
          </div>
        </div>

        {/* FTC Affiliate Disclaimer Box (Mandatory for Google AdSense & Amazon/AliExpress compliance) */}
        <div className="my-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center gap-2 text-slate-300 font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FTC Affiliate & Sourcing Transparency Disclosure:</span>
          </div>
          <p>
            AratBazar (aratbazar.com) is an independent market intelligence and product sourcing aggregator. We do not manufacture or stock inventory directly. Instead, our automated and editorial research indexes the lowest factory prices and verified suppliers across AliExpress, CJ Dropshipping, Temu, and Alibaba. Some links on this website are affiliate links, meaning we may receive a referral commission if you make a purchase or sample order through our links, at absolutely zero additional cost to you. Sourcing prices and competitor retail figures reflect snapshot market data and may vary based on supplier stock and promotions.
          </p>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            &copy; {new Date().getFullYear()} AratBazar. All rights reserved. Built for smart e-commerce entrepreneurs and shoppers worldwide.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-emerald-400 transition">Terms of Service</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-emerald-400 transition">Affiliate Disclosure</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-emerald-400 transition">About Us</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
