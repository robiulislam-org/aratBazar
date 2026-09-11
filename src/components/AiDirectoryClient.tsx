"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  AIModel,
  AIDailyRelease,
  AIMarketMetrics,
  AICategory,
} from "@/data/aiModelsData";
import AdBanner from "@/components/AdBanner";
import {
  Sparkles,
  Zap,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter,
  Award,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  Cpu,
  Layers,
  Code2,
  PenTool,
  BrainCircuit,
  Image as ImageIcon,
  Video,
  Mic,
  Briefcase,
  LineChart,
} from "lucide-react";

interface AiDirectoryClientProps {
  initialModels: AIModel[];
  dailyReleases: AIDailyRelease[];
  metrics: AIMarketMetrics;
  leaderboard: { category: AICategory; model: AIModel; badge: string }[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  All: <Layers className="h-4 w-4" />,
  Coding: <Code2 className="h-4 w-4 text-emerald-400" />,
  "Writing & Research": <PenTool className="h-4 w-4 text-cyan-400" />,
  "Reasoning & Math": <BrainCircuit className="h-4 w-4 text-purple-400" />,
  "Image Generation": <ImageIcon className="h-4 w-4 text-pink-400" />,
  "Video Generation": <Video className="h-4 w-4 text-amber-400" />,
  "Audio & Voice": <Mic className="h-4 w-4 text-teal-400" />,
  "Productivity & Agents": <Briefcase className="h-4 w-4 text-blue-400" />,
  "Finance & Market": <LineChart className="h-4 w-4 text-emerald-400" />,
};

const CATEGORIES: ("All" | AICategory)[] = [
  "All",
  "Coding",
  "Reasoning & Math",
  "Writing & Research",
  "Image Generation",
  "Video Generation",
  "Audio & Voice",
  "Productivity & Agents",
  "Finance & Market",
];

const PRICING_FILTERS: { label: string; value: "All" | "100% Free" | "Free Trial" | "Paid" }[] = [
  { label: "All Pricing Tiers", value: "All" },
  { label: "🟢 100% Free & Open Source", value: "100% Free" },
  { label: "⚡ Free Trial / Free Tier", value: "Free Trial" },
  { label: "💎 Commercial / Pro", value: "Paid" },
];

export default function AiDirectoryClient({
  initialModels,
  dailyReleases,
  metrics,
  leaderboard,
}: AiDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | AICategory>("All");
  const [selectedPricing, setSelectedPricing] = useState<"All" | "100% Free" | "Free Trial" | "Paid">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popularity" | "rating" | "newest">("popularity");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filtered & Sorted Models
  const filteredModels = useMemo(() => {
    return initialModels
      .filter((model) => {
        // Category filter
        if (selectedCategory !== "All" && model.category !== selectedCategory) {
          return false;
        }

        // Pricing filter
        if (selectedPricing === "100% Free" && !model.is100PercentFree) {
          return false;
        }
        if (selectedPricing === "Free Trial" && !model.hasFreeTrial) {
          return false;
        }
        if (selectedPricing === "Paid" && (model.is100PercentFree || model.pricingType === "100% Free")) {
          return false;
        }

        // Search query
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const matchName = model.name.toLowerCase().includes(q);
          const matchDev = model.developer.toLowerCase().includes(q);
          const matchBest = model.bestFor.toLowerCase().includes(q);
          const matchTags = model.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchName && !matchDev && !matchBest && !matchTags) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "popularity") {
          return a.popularityRank - b.popularityRank;
        }
        if (sortBy === "rating") {
          return b.benchmarkScore.overallRating - a.benchmarkScore.overallRating;
        }
        if (sortBy === "newest") {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        }
        return 0;
      });
  }, [initialModels, selectedCategory, selectedPricing, searchQuery, sortBy]);

  const faqs = [
    {
      q: "Which AI models are completely 100% free to use in 2026?",
      a: "Top 100% free AI models include DeepSeek-V3 (free web chat & open weights), DeepSeek-R1 (free reasoning model), Meta Llama 3.3 70B (open weights and free via Groq), FLUX.1 Schnell (Apache 2.0 open-source image generation), Google NotebookLM (100% free research with Google account), and OpenAI Whisper Large v3 for offline speech-to-text.",
    },
    {
      q: "How can I access premium models like Claude 3.5 Sonnet or Gemini 1.5 Pro without paying?",
      a: "Claude.ai provides a permanent free daily message allowance with full Artifacts support without entering a credit card. For Gemini 1.5 Pro, Google AI Studio offers a free developer tier providing up to 15 Requests Per Minute (RPM) and a 1-million-token context window completely free forever.",
    },
    {
      q: "What is the single best AI model for coding and software engineering?",
      a: "Claude 3.5 Sonnet and Cursor AI lead industry benchmarks for software architecture, code generation, and multi-file refactoring. For a 100% free open-source coding solution, DeepSeek-V3 and Qwen 2.5 72B Instruct offer frontier-grade Python, TypeScript, and C++ code completion.",
    },
    {
      q: "How frequently does AratBazar update AI model releases and benchmarks?",
      a: "Our automated AI Intelligence Engine synchronizes with Hugging Face open-source repositories and tier-1 AI engineering labs every single day to track new releases, open-weights drops, context-window expansions, and pricing changes.",
    },
    {
      q: "Are the open-source weights safe to run on my local computer?",
      a: "Yes. Models with permissive licenses (like MIT, Apache 2.0, or Llama Community) can be run locally using runtimes such as Ollama, LM Studio, or vLLM. This ensures 100% offline data privacy with zero data transmission to third-party cloud servers.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* ─── 1. Live Market Pulse & Counter Banner ─────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        <div className="rounded-xl border border-slate-800 bg-[#0c121e]/90 p-4 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>MODELS TRACKED</span>
            <Cpu className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">{metrics.totalModelsTracked}</span>
            <span className="text-xs text-emerald-400 font-semibold">Tier-1 Curated</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Frontier LLMs & Diffusion</p>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 shadow-lg">
          <div className="flex items-center justify-between text-xs text-emerald-400">
            <span>UPDATED TODAY</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-emerald-300">{metrics.modelsUpdatedToday}</span>
            <span className="text-xs text-emerald-400 font-semibold font-mono">LIVE SYNC</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Hugging Face & RSS Feeds</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#0c121e]/90 p-4 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>100% FREE MODELS</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">{metrics.freeModelsCount}</span>
            <span className="text-xs text-slate-400 font-medium">Zero Cost</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Open-Weights & Free Web Tiers</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#0c121e]/90 p-4 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>FREE TRIAL TIERS</span>
            <Zap className="h-4 w-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">{metrics.freeTrialModelsCount}</span>
            <span className="text-xs text-amber-400 font-medium">No Credit Card</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Generous Daily Free Credits</p>
        </div>
      </div>

      {/* ─── 2. Daily AI Releases & Launch Ticker ──────────────────────── */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0c1322] via-[#090e18] to-[#0d1627] p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
          <div className="flex items-center space-x-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Daily AI Model Launches & Intelligence Updates</span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-300 uppercase tracking-wider border border-emerald-500/30">
                  {metrics.lastUpdated}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Verified daily updates from OpenAI, Anthropic, Google DeepMind, DeepSeek, Meta, and Hugging Face.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Auto-Sync: <span className="text-emerald-400 font-semibold">Active (Every 2h)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dailyReleases.slice(0, 4).map((release) => (
            <div
              key={release.id}
              className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition hover:border-slate-700 hover:bg-slate-900/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] mb-2">
                  <span className="rounded bg-slate-800 px-2 py-0.5 font-medium text-slate-300 font-mono">
                    {release.date}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      release.type === "Open Weights Release"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : release.type === "Launch"
                        ? "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                        : "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                    }`}
                  >
                    {release.type}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-slate-100 leading-snug line-clamp-2">
                  {release.headline}
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {release.summary}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-medium">Source: {release.source}</span>
                {release.url && (
                  <a
                    href={release.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition font-semibold"
                  >
                    <span>Read Dispatch</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. Best-in-Class Leaderboard ──────────────────────────────── */}
      <section className="rounded-2xl border border-slate-800 bg-[#0c121e]/80 p-5 sm:p-6 shadow-xl">
        <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-1">
          <Award className="h-4 w-4" />
          <span className="uppercase tracking-wider">Benchmark Hall of Fame</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Best AI Models of 2026 by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hand-tested and verified by AratBazar Intelligence across coding, reasoning, media synthesis, and finance.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">Updated for September 2026</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {leaderboard.map((item) => (
            <Link
              key={item.category}
              href={`/ai/${item.model.slug}`}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-emerald-500/40 hover:bg-slate-900/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    {CATEGORY_ICONS[item.category]}
                    {item.category}
                  </span>
                  <span className="font-mono font-bold text-amber-400 text-xs">
                    ★ {item.model.benchmarkScore.overallRating}/10
                  </span>
                </div>
                <div className="text-base font-extrabold text-white group-hover:text-emerald-400 transition flex items-center justify-between">
                  <span>{item.model.name}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 transition transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-[11px] font-semibold text-emerald-400/90 leading-tight">
                  {item.badge}
                </p>
                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.model.summary}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{item.model.developer}</span>
                <span
                  className={`font-semibold ${
                    item.model.is100PercentFree ? "text-emerald-400" : "text-cyan-400"
                  }`}
                >
                  {item.model.pricingType}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 4. Search & Category Filters Bar ──────────────────────────── */}
      <div className="space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI models, developers (e.g. DeepSeek, Claude, Free)..."
              className="w-full rounded-xl border border-slate-800 bg-[#0c121e] pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Filter className="h-3.5 w-3.5" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-lg border border-slate-800 bg-[#0c121e] px-2.5 py-1.5 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
              >
                <option value="popularity">Popularity / Rank</option>
                <option value="rating">Top Benchmark Score</option>
                <option value="newest">Recently Released</option>
              </select>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing <strong className="text-white">{filteredModels.length}</strong> of {initialModels.length}
            </span>
          </div>
        </div>

        {/* Pricing Tier Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {PRICING_FILTERS.map((p) => {
            const active = selectedPricing === p.value;
            return (
              <button
                key={p.value}
                onClick={() => setSelectedPricing(p.value)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                  active
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "border border-slate-800 bg-[#0c121e] text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center space-x-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                  active
                    ? "border border-emerald-500/50 bg-emerald-500/15 text-emerald-400"
                    : "border border-slate-800/80 bg-slate-900/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                <span>{CATEGORY_ICONS[cat]}</span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 5. Models Directory Grid ──────────────────────────────────── */}
      {filteredModels.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-12 text-center">
          <BrainCircuit className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-4 text-base font-bold text-white">No AI models found</h3>
          <p className="mt-1 text-xs text-slate-400">
            Try adjusting your search query or reset the pricing/category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedPricing("All");
              setSearchQuery("");
            }}
            className="mt-4 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModels.map((model, idx) => (
            <React.Fragment key={model.id}>
              {/* Optional in-feed ad insertion after every 6 cards for AdSense monetization */}
              {idx === 6 && (
                <div className="col-span-full my-2">
                  <AdBanner format="in-feed" label="SPONSORED CLOUD & AI INFRASTRUCTURE" />
                </div>
              )}

              <div className="group rounded-2xl border border-slate-800 bg-[#0c121e] p-5 shadow-lg transition hover:border-slate-700 hover:shadow-xl hover:shadow-emerald-950/10 flex flex-col justify-between">
                <div>
                  {/* Card Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      {CATEGORY_ICONS[model.category]}
                      {model.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {model.is100PercentFree ? (
                        <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-black text-emerald-400 tracking-wider">
                          100% FREE
                        </span>
                      ) : model.hasFreeTrial ? (
                        <span className="rounded-md bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-black text-cyan-400 tracking-wider">
                          FREE TRIAL
                        </span>
                      ) : (
                        <span className="rounded-md bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 text-[10px] font-black text-purple-400 tracking-wider">
                          PRO
                        </span>
                      )}
                      <span className="rounded-md bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono font-bold text-amber-400">
                        ★ {model.benchmarkScore.overallRating}
                      </span>
                    </div>
                  </div>

                  {/* Model Name & Developer */}
                  <Link href={`/ai/${model.slug}`} className="block group-hover:text-emerald-400 transition">
                    <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition flex items-center justify-between">
                      <span>{model.name}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 transition transform group-hover:translate-x-0.5" />
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">
                    By <span className="text-slate-300">{model.developer}</span> •{" "}
                    <span className="font-mono text-slate-400">{model.license}</span>
                  </p>

                  {/* Best For Tagline */}
                  <div className="mt-3 rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Recommended Best For:
                    </span>
                    <span className="text-slate-200 font-semibold mt-0.5 block leading-snug">
                      {model.bestFor}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {model.summary}
                  </p>

                  {/* Free Access Explanation */}
                  <div className="mt-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-2.5 text-[11px] leading-relaxed">
                    <span className="font-bold text-emerald-400 flex items-center gap-1 mb-0.5">
                      <CheckCircle2 className="h-3 w-3" /> Free Access Terms:
                    </span>
                    <span className="text-slate-300">{model.freeTierDetails}</span>
                  </div>

                  {/* Key Strengths */}
                  <div className="mt-3 space-y-1">
                    {model.strengths.slice(0, 2).map((s, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span className="line-clamp-1">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <Link
                    href={`/ai/${model.slug}`}
                    className="flex items-center gap-1 font-semibold text-slate-300 hover:text-emerald-400 transition"
                  >
                    <span>Full Review & Benchmarks</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <a
                    href={model.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 px-3 py-1.5 text-xs font-bold text-white transition shadow-sm"
                  >
                    <span>Use Free</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* ─── 6. Editorial Methodology & Trust (E-E-A-T for AdSense) ─────── */}
      <section className="rounded-2xl border border-slate-800 bg-[#0a0f19] p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <ShieldCheck className="h-4 w-4" />
          <span className="uppercase tracking-wider">AratBazar Editorial Independence & Methodology</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          How We Test, Benchmark, and Verify AI Models
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
          AratBazar Intelligence operates an unbiased testing framework designed to assist software engineers, quantitative analysts, and everyday users in choosing the optimal AI model for their workflow without unnecessary subscription expenses.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">1</span>
              Standardized Benchmarks
            </h3>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
              We aggregate verified industry evaluations including MMLU (academic knowledge), HumanEval (Python coding), GSM8K (multistep math), and Elo ratings from independent LMSYS leaderboards.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xs">2</span>
              Zero Hidden Cost Audits
            </h3>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
              Every tool labeled "100% Free" or "Free Trial" is personally audited to verify that users can access meaningful functionality without being subjected to deceptive bait-and-switch billing.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xs">3</span>
              Local Privacy & Open Weights
            </h3>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
              We prioritize open-weights models that can run 100% offline via Ollama, LM Studio, or vLLM to preserve privacy for proprietary trade secrets, financial records, and intellectual property.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. Comprehensive FAQ Section ──────────────────────────────── */}
      <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
        <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-400 mb-1">
          <HelpCircle className="h-4 w-4" />
          <span className="uppercase tracking-wider">Frequently Asked Questions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-6">
          Everything You Need to Know About Free AI Models
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-slate-100 hover:text-emerald-400 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`h-4 w-4 text-slate-400 transition-transform ${
                      isOpen ? "rotate-90 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
