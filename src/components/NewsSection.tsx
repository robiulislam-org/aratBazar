"use client";

import { useState } from "react";
import { FINANCIAL_NEWS, NewsArticle } from "@/data/newsData";
import Link from "next/link";
import { Newspaper, ArrowRight, Clock, User, Tag } from "lucide-react";

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Stocks", "Crypto", "Commodities", "Forex", "Economy"];

  const filteredArticles = selectedCategory === "All"
    ? FINANCIAL_NEWS
    : FINANCIAL_NEWS.filter(article => article.category === selectedCategory);

  return (
    <section id="news" className="my-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-400 mb-1.5">
            <Newspaper className="h-4 w-4" />
            <span className="uppercase tracking-wider">Editorial Intelligence & Analysis</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Daily Macro & Market Dispatches
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Curated analysis, institutional order-flow insights, and liquidity reports.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto space-x-1.5 pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-lg transition hover:border-slate-700 hover:shadow-cyan-950/20 hover:shadow-xl"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase text-cyan-400 border border-slate-700">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <Link href={`/news/${article.slug}`}>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                  {article.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="mt-2.5 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Key Metrics Bar */}
              {article.keyMetrics && (
                <div className="mt-4 rounded-lg bg-slate-900/90 border border-slate-800/80 p-2 text-xs">
                  <div className="grid grid-cols-3 gap-1 text-center">
                    {article.keyMetrics.map((m, idx) => (
                      <div key={idx} className="border-r last:border-none border-slate-800">
                        <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                        <span className="font-mono font-bold text-emerald-400 text-[11px] truncate block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Author & Footer Link */}
            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <span className="font-medium text-slate-300 block text-[11px]">{article.author}</span>
                  <span className="text-[10px] text-slate-400 block">{article.authorRole}</span>
                </div>
              </div>

              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center space-x-1 font-semibold text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>Read</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
