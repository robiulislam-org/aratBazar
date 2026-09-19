"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { ProductItem, ProductCategory } from "@/types/product";
import ProductCard from "./ProductCard";
import { 
  Search, 
  SlidersHorizontal, 
  Flame, 
  Percent, 
  DollarSign, 
  Star, 
  RefreshCw,
  Loader2,
  Sparkles,
  ArrowDown
} from "lucide-react";

interface ProductGridProps {
  products: ProductItem[];
  defaultCategory?: ProductCategory | "all";
}

const ITEMS_PER_PAGE = 24;

export default function ProductGrid({ products, defaultCategory = "all" }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"trending" | "price_asc" | "price_desc" | "rating" | "discount">("trending");
  const [activeFilter, setActiveFilter] = useState<"all" | "viral" | "under_10" | "high_rating" | "mega_discount">("all");
  
  // Infinite scroll pagination state
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Dynamic categories with live counts
  const categories = useMemo(() => [
    { slug: "all", label: "All Winning Products", count: products.length },
    { slug: "tech-gadgets", label: "Tech & Gadgets", count: products.filter(p => p.category === "tech-gadgets").length },
    { slug: "home-kitchen", label: "Home & Kitchen", count: products.filter(p => p.category === "home-kitchen").length },
    { slug: "beauty-health", label: "Health & Beauty", count: products.filter(p => p.category === "beauty-health").length },
    { slug: "car-outdoor", label: "Car & Outdoor", count: products.filter(p => p.category === "car-outdoor").length },
    { slug: "tools-utility", label: "Problem Solvers", count: products.filter(p => p.category === "tools-utility").length },
    { slug: "fitness-lifestyle", label: "Fitness & Life", count: products.filter(p => p.category === "fitness-lifestyle").length },
    { slug: "smart-home", label: "Smart Home & LEDs", count: products.filter(p => p.category === "smart-home").length },
    { slug: "kids-novelty", label: "Viral Gifts", count: products.filter(p => p.category === "kids-novelty").length },
  ], [products]);

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
        if (activeFilter === "under_10" && p.sourcing.lowestPrice > 10) {
          return false;
        }
        if (activeFilter === "high_rating" && p.rating < 4.8) {
          return false;
        }
        if (activeFilter === "mega_discount" && p.market.profitMarginPercent < 75) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchCategory = p.categoryName.toLowerCase().includes(q);
          const matchTagline = p.tagline.toLowerCase().includes(q);
          if (!matchTitle && !matchCategory && !matchTagline) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "trending") {
          return b.analytics.trendScore - a.analytics.trendScore;
        }
        if (sortBy === "price_asc") {
          return a.sourcing.lowestPrice - b.sourcing.lowestPrice;
        }
        if (sortBy === "price_desc") {
          return b.sourcing.lowestPrice - a.sourcing.lowestPrice;
        }
        if (sortBy === "rating") {
          return b.rating - a.rating;
        }
        if (sortBy === "discount") {
          return b.market.profitMarginPercent - a.market.profitMarginPercent;
        }
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy, activeFilter]);

  // Reset pagination when category, search, or filter changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory, searchQuery, sortBy, activeFilter]);

  // Infinite scroll observer
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && visibleCount < filteredProducts.length && !isLoadingMore) {
          setIsLoadingMore(true);
          // Simulate smooth dynamic fetch delay for realistic Amazon/AliExpress infinite feed
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length));
            setIsLoadingMore(false);
          }, 350);
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount, filteredProducts.length, isLoadingMore]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section id="winning-products" className="py-8 scroll-mt-20">
      {/* Search & Main Filter Control Bar */}
      <div className="bg-slate-900/90 border border-slate-800/80 rounded-3xl p-4 md:p-6 mb-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search viral gadgets, kitchen hacks, life problem solvers..."
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-12 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs font-bold text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="trending">🔥 Viral & Trending First</option>
              <option value="price_asc">💵 Sourcing Cost: Low to High</option>
              <option value="price_desc">💰 Sourcing Cost: High to Low</option>
              <option value="rating">⭐ Customer Rating (4.8+)</option>
              <option value="discount">⚡ Highest Discount (%)</option>
            </select>
          </div>
        </div>

        {/* Category Horizontal Scroll Pills */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]"
                    : "bg-slate-950/80 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? "bg-slate-950/20 text-slate-950 font-black" : "bg-slate-800 text-slate-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Filter Chips */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Fast Filters:</span>
          
          <button
            onClick={() => setActiveFilter(activeFilter === "viral" ? "all" : "viral")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold border transition-colors ${
              activeFilter === "viral"
                ? "bg-amber-500/20 border-amber-500/60 text-amber-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Viral This Week
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === "under_10" ? "all" : "under_10")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold border transition-colors ${
              activeFilter === "under_10"
                ? "bg-blue-500/20 border-blue-500/60 text-blue-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-blue-400" />
            Under $10 Sourcing
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === "high_rating" ? "all" : "high_rating")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold border transition-colors ${
              activeFilter === "high_rating"
                ? "bg-amber-500/20 border-amber-500/60 text-amber-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <Star className="w-3.5 h-3.5 text-amber-400" />
            Top Rated (4.8★+)
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === "mega_discount" ? "all" : "mega_discount")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold border transition-colors ${
              activeFilter === "mega_discount"
                ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-300"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <Percent className="w-3.5 h-3.5 text-emerald-400" />
            Mega Savings (75%+)
          </button>

          {(selectedCategory !== "all" || searchQuery || activeFilter !== "all") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-rose-400 transition-colors ml-auto font-semibold"
            >
              <RefreshCw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Grid Results Status Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <span>Discover High-Demand Products</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/80">
              Showing {displayedProducts.length} of {filteredProducts.length}
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Click any product to view full technical specifications, direct factory links & customer reviews.
          </p>
        </div>
      </div>

      {/* Product Cards Grid: 4 columns on large screens for rich e-commerce feel */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Infinite Scroll Sentinel & Load More Trigger */}
          <div ref={sentinelRef} className="py-12 text-center">
            {hasMore ? (
              <div className="space-y-4">
                {isLoadingMore ? (
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold animate-pulse shadow-xl">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Loading more viral products...</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length))}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-bold text-xs transition-all shadow-xl hover:scale-[1.02]"
                  >
                    <ArrowDown className="w-4 h-4 text-emerald-400" />
                    <span>
                      Load More Products ({filteredProducts.length - visibleCount} remaining)
                    </span>
                  </button>
                )}
                <p className="text-[11px] text-slate-500">
                  Keep scrolling down — hundreds of unique problem-solvers await!
                </p>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>You've explored all {filteredProducts.length} winning products!</span>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-200">No products match your criteria</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Try adjusting your search query or reset your filters to browse our 500+ viral winning products catalog.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="mt-5 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
