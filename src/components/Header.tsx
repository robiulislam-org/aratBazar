"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ShoppingBag, 
  Flame, 
  Percent, 
  Calculator, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ExternalLink 
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const categories = [
    { name: "Tech & Smart Gadgets", slug: "tech-gadgets" },
    { name: "Home & Kitchen Innovations", slug: "home-kitchen" },
    { name: "Health & Beauty", slug: "beauty-health" },
    { name: "Car & Outdoor Gear", slug: "car-outdoor" },
    { name: "Everyday Utilities", slug: "tools-utility" },
    { name: "Fitness & Lifestyle", slug: "fitness-lifestyle" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      {/* Top utility sub-header */}
      <div className="hidden border-b border-slate-800/60 px-4 py-1.5 text-[11px] text-slate-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1.5 font-bold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              ARATBAZAR GLOBAL SOURCING HUB:
            </span>
            <span>Real factory wholesale prices verified daily across AliExpress, 1688, CJ & Temu</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span className="text-emerald-400 font-semibold">Average Margin: 78.4%</span>
            <span className="text-slate-700">|</span>
            <Link href="/disclaimer" className="transition hover:text-emerald-400">
              FTC Affiliate Disclosure
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/about" className="transition hover:text-emerald-400">
              About AratBazar
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Arat<span className="text-emerald-400">Bazar</span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                B2B Sourcing
              </span>
            </div>
            <span className="text-[10px] text-slate-400 hidden sm:block leading-none">
              Winning Products & Wholesale Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-bold text-slate-300">
          <Link
            href="/#winning-products"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-emerald-400 transition-colors"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Viral Winning Deals</span>
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              onMouseEnter={() => setCategoriesOpen(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              <span>Categories</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {categoriesOpen && (
              <div 
                onMouseLeave={() => setCategoriesOpen(false)}
                className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-slate-900 border border-slate-800 p-2 shadow-2xl z-50"
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/tools"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-emerald-400 transition-colors"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Profit Margin Calculator</span>
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-emerald-400 transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Sourcing Standards</span>
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#winning-products"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Products</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800/80 bg-slate-950 p-4 space-y-3">
          <Link
            href="/#winning-products"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 text-sm font-bold text-slate-200"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Viral Winning Deals</span>
          </Link>

          <Link
            href="/tools"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 text-sm font-bold text-slate-200"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Profit Margin Calculator</span>
          </Link>

          <div className="p-3 bg-slate-900/60 rounded-xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Browse Categories:</span>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold text-slate-300 hover:text-emerald-400 py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About AratBazar</Link>
            <Link href="/disclaimer" onClick={() => setMobileMenuOpen(false)}>Affiliate Policy</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
