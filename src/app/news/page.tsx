import { FINANCIAL_NEWS } from "@/data/newsData";
import Link from "next/link";
import { Newspaper, ArrowRight, Clock, Calendar, TrendingUp } from "lucide-react";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Intelligence & Financial News | AratBazar",
  description:
    "Daily institutional market analysis, macro intelligence, and financial news covering stocks, crypto, forex, commodities, and global economics. Updated every trading day.",
  keywords: [
    "financial news today",
    "stock market analysis",
    "crypto market update",
    "forex analysis daily",
    "market intelligence",
    "trading news",
    "bitcoin analysis",
    "gold market update",
    "S&P 500 outlook",
    "economic news",
    "aratbazar news",
  ],
  openGraph: {
    title: "Market Intelligence & Daily Financial News | AratBazar",
    description:
      "Institutional-grade daily market analysis for professional traders. Stocks, crypto, forex, commodities, and macro coverage.",
    url: "https://aratbazar.com/news",
    siteName: "AratBazar",
    type: "website",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Stocks: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  Crypto: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  Forex: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  Commodities: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  Economy: "text-teal-400 bg-teal-500/10 border-teal-500/30",
};

export default function NewsPage() {
  const categories = ["All", "Stocks", "Crypto", "Forex", "Commodities", "Economy"];
  const latestArticles = FINANCIAL_NEWS.slice(0, 3);
  const remainingArticles = FINANCIAL_NEWS.slice(3);

  // Get today's date string
  const todayStr = new Date().toISOString().split("T")[0];
  const todayArticles = FINANCIAL_NEWS.filter((a) => a.publishedAt === todayStr);
  const latestDate = FINANCIAL_NEWS[0]?.publishedAt ?? todayStr;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-400 mb-2">
          <Newspaper className="h-4 w-4" />
          <span className="uppercase tracking-wider">Daily Market Intelligence</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Financial News & Market Analysis
            </h1>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl leading-relaxed">
              Institutional-grade daily market dispatches, macro intelligence, and quantitative
              analysis for professional traders and capital allocators. Updated every trading day.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Latest Update</span>
              <span className="font-mono font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {latestDate}
              </span>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Total Articles</span>
              <span className="font-mono font-bold text-white mt-0.5 block">{FINANCIAL_NEWS.length}</span>
            </div>
          </div>
        </div>

        {/* Category Filter Links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={cat === "All" ? "/news" : `/news?category=${cat.toLowerCase()}`}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition border ${
                cat === "All"
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Top Ad Unit */}
      <AdBanner format="horizontal" label="INSTITUTIONAL RESEARCH PARTNER" />

      {/* Featured / Latest Articles (Top 3) */}
      <section className="mt-8">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <h2 className="text-base font-bold text-white uppercase tracking-wider text-sm">
            Top Stories — {latestDate}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestArticles.map((article, idx) => (
            <article
              key={article.id}
              className={`group flex flex-col justify-between rounded-2xl border bg-[#0c121e] p-5 shadow-lg transition hover:shadow-xl ${
                idx === 0
                  ? "border-emerald-800/40 hover:border-emerald-700/60 md:col-span-2 md:row-span-2"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span
                    className={`rounded border px-2 py-0.5 text-[10px] font-mono font-semibold uppercase ${
                      CATEGORY_COLORS[article.category] ?? "text-slate-400 bg-slate-800 border-slate-700"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>

                <Link href={`/news/${article.slug}`}>
                  <h3
                    className={`font-bold text-white group-hover:text-cyan-300 transition line-clamp-3 ${
                      idx === 0 ? "text-xl sm:text-2xl" : "text-base"
                    }`}
                  >
                    {article.title}
                  </h3>
                </Link>

                <p className="mt-2.5 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {article.keyMetrics && idx === 0 && (
                  <div className="mt-4 rounded-lg bg-slate-900/90 border border-slate-800/80 p-3 text-xs">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {article.keyMetrics.map((m, i) => (
                        <div key={i} className="border-r last:border-none border-slate-800">
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

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold border border-slate-700">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-medium text-slate-300 block text-[11px]">{article.author}</span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Calendar className="h-2.5 w-2.5" />
                      {article.publishedAt}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center space-x-1 font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Read Full Analysis</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Middle Ad */}
      <div className="my-8">
        <AdBanner format="in-feed" label="SPONSORED MARKET INTELLIGENCE PARTNER" />
      </div>

      {/* Remaining Articles Grid */}
      {remainingArticles.length > 0 && (
        <section className="mt-2">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
            <Newspaper className="h-4 w-4 text-cyan-400" />
            More Market Dispatches
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-lg transition hover:border-slate-700 hover:shadow-cyan-950/20 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span
                      className={`rounded border px-2 py-0.5 text-[10px] font-mono font-semibold uppercase ${
                        CATEGORY_COLORS[article.category] ?? "text-slate-400 bg-slate-800 border-slate-700"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link href={`/news/${article.slug}`}>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <span className="font-medium text-slate-300 block text-[11px]">{article.author}</span>
                      <span className="text-[10px] text-slate-400">{article.publishedAt}</span>
                    </div>
                  </div>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center space-x-1 font-semibold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Ad */}
      <div className="mt-10">
        <AdBanner format="horizontal" label="FINANCIAL MARKETS PARTNER" />
      </div>
    </div>
  );
}
