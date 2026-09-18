"use client";

import React, { useState, useMemo } from "react";
import { ProductItem, ProductCategory } from "@/types/product";
import ProductCard from "./ProductCard";
import { 
  Search, 
  SlidersHorizontal, 
  Flame, 
  Percent, 
  DollarSign, 
  CheckCircle, 
  RefreshCw 
} from "lucide-react";

interface ProductGridProps {
  products: ProductItem[];
  defaultCategory?: ProductCategory | "all";
}

export default function ProductGrid({ products, defaultCategory = "all" }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"margin" | "trend" | "price_asc" | "profit_desc">("margin");
  const [activeFilter, setActiveFilter] = useState<"all" | "viral" | "high_margin" | "under_10">("all");

  // Category list
  const categories = [
    { slug: "all", label: "All Winning Products" },
    { slug: "tech-gadgets", label: "Tech & Gadgets" },
    { slug: "home-kitchen", label: "Home & Kitchen" },
    { slug: "beauty-health", label: "Health & Beauty" },
    { slug: "car-outdoor", label: "Car & Outdoor" },
    { slug: "tools-utility", label: "Everyday Utilities" },
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category match
        if (selectedCategory !== "all" && p.category !== selectedCategory) {
          return false;
        }

        // Quick filter chips
        if (activeFilter === "viral" && !p.analytics.trendStatus.includes("Viral")) {
          return false;
        }
        if (activeFilter === "high_margin" && p.market.profitMarginPercent < 80) {
          return false;
        }
        if (activeFilter === "under_10" && p.sourcing.lowestPrice > 10) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchCategory = p.categoryName.toLowerCase().includes(q);
          const matchTagline = p.tagline.toLowerCase().includes(q);
          if (!matchTitle && !matchDesc && !matchCategory && !matchTagline) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "margin") {
          return b.market.profitMarginPercent - a.market.profitMarginPercent;
        }
        if (sortBy === "trend") {
          return b.analytics.trendScore - a.analytics.trendScore;
        }
        if (sortBy === "price_asc") {
          return a.sourcing.lowestPrice - b.sourcing.lowestPrice;
        }
        if (sortBy === "profit_desc") {
          return b.market.potentialProfit - a.market.potentialProfit;
        }
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy, activeFilter]);

  return (
    <section id="winning-products" className="py-10">
      {/* Search & Main Toolbar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-6 mb-8 backdrop-blur-md shadow-xl">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Live Search Bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search viral products, kitchen gadgets, electronics, problem solvers..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sorter Dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
              <span>Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-xs font-semibold text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="margin">Highest Profit Margin (%)</option>
              <option value="trend">Trending / Viral Score</option>
              <option value="profit_desc">Highest Dollar Profit ($)</option>
              <option value="price_asc">Lowest Sourcing Cost ($)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "bg-slate-950/80 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quick Filter Badges */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Quick Filters:</span>
          
          <button
            onClick={() => setActiveFilter(activeFilter === "viral" ? "all" : "viral")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition-colors ${
              activeFilter === "viral"
                ? "bg-amber-500/20 border-amber-500/60 text-amber-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Viral This Week
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === "high_margin" ? "all" : "high_margin")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition-colors ${
              activeFilter === "high_margin"
                ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <Percent className="w-3.5 h-3.5 text-emerald-400" />
            High Margin (80%+)
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === "under_10" ? "all" : "under_10")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition-colors ${
              activeFilter === "under_10"
                ? "bg-blue-500/20 border-blue-500/60 text-blue-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-blue-400" />
            Sourcing Under $10
          </button>

          {(selectedCategory !== "all" || searchQuery || activeFilter !== "all") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-slate-400 hover:text-rose-400 transition-colors ml-auto"
            >
              <RefreshCw className="w-3 h-3" />
              Reset All
            </button>
          )}
        </div>
      </div>

      {/* Grid Results Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
            <span>Verified Winning Products</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/80">
              {filteredProducts.length} Discovered
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Real factory quotes matched with retail benchmark pricing & profit margins.
          </p>
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-200">No products match your criteria</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Try adjusting your search query or reset your filters to browse all trending winning products.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
