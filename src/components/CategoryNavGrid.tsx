"use client";

import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  Home, 
  Sparkles, 
  Car, 
  Wrench, 
  Activity, 
  Zap, 
  Gift 
} from "lucide-react";

interface CategoryNavGridProps {
  categories: {
    slug: string;
    name: string;
    productCount: number;
  }[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "tech-gadgets": <Cpu className="w-5 h-5 text-cyan-400" />,
  "home-kitchen": <Home className="w-5 h-5 text-amber-400" />,
  "beauty-health": <Sparkles className="w-5 h-5 text-rose-400" />,
  "car-outdoor": <Car className="w-5 h-5 text-blue-400" />,
  "tools-utility": <Wrench className="w-5 h-5 text-emerald-400" />,
  "fitness-lifestyle": <Activity className="w-5 h-5 text-teal-400" />,
  "smart-home": <Zap className="w-5 h-5 text-purple-400" />,
  "kids-novelty": <Gift className="w-5 h-5 text-orange-400" />,
};

export default function CategoryNavGrid({ categories }: CategoryNavGridProps) {
  return (
    <div className="py-6 border-b border-slate-800/60 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm sm:text-base font-extrabold text-white">
            Explore 500+ Uncommon Product Categories
          </h2>
          <p className="text-[11px] text-slate-400">
            Click any niche to filter verified viral products
          </p>
        </div>
        <Link
          href="/#winning-products"
          className="text-xs font-bold text-emerald-400 hover:underline"
        >
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group p-3 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 text-center transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center gap-2"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all">
              {CATEGORY_ICONS[cat.slug] || <Cpu className="w-5 h-5 text-emerald-400" />}
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-200 group-hover:text-emerald-400 transition-colors block line-clamp-1">
                {cat.name.split("&")[0].trim()}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold">
                {cat.productCount} items
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
