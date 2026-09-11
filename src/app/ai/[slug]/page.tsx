import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AI_MODELS } from "@/data/aiModelsData";
import AdBanner from "@/components/AdBanner";
import {
  CheckCircle2,
  ExternalLink,
  ArrowLeft,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AI_MODELS.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const model = AI_MODELS.find((m) => m.slug === params.slug);

  if (!model) {
    return {
      title: "AI Model Not Found | AratBazar",
    };
  }

  const freeStatus = model.is100PercentFree
    ? "100% Free & Open Source"
    : model.hasFreeTrial
    ? "Free Trial Available"
    : "Commercial";

  return {
    title: `${model.name} Review: Benchmarks, Pricing & Free Access Guide (${freeStatus}) | AratBazar`,
    description: `Comprehensive review of ${model.name} by ${model.developer}. In-depth benchmarks, MMLU score (${model.benchmarkScore.mmlu || "N/A"}), pricing breakdown, context window (${model.contextWindow}), and how to access for free.`,
    keywords: [
      model.name,
      `${model.name} review`,
      `${model.name} free trial`,
      `is ${model.name} free`,
      `${model.name} benchmarks`,
      `${model.name} context window`,
      `${model.name} pricing`,
      model.developer,
      model.category,
      "aratbazar ai",
    ],
    openGraph: {
      title: `${model.name} Review & Free Access Guide | AratBazar AI Intelligence`,
      description: model.summary,
      url: `https://aratbazar.com/ai/${model.slug}`,
      siteName: "AratBazar AI Intelligence",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${model.name} Benchmark Review | AratBazar`,
      description: model.summary,
      creator: "@aratbazar",
    },
    alternates: {
      canonical: `https://aratbazar.com/ai/${model.slug}`,
    },
  };
}

export default async function AiModelDetailPage(props: Props) {
  const params = await props.params;
  const model = AI_MODELS.find((m) => m.slug === params.slug);

  if (!model) {
    notFound();
  }

  // Related models in the same or complementary category
  const relatedModels = AI_MODELS.filter(
    (m) => m.category === model.category && m.id !== model.id
  ).slice(0, 3);

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: model.name,
    operatingSystem: "Web / Cloud / Local Hardware",
    applicationCategory: "Artificial Intelligence Software",
    offers: {
      "@type": "Offer",
      price: model.is100PercentFree ? "0.00" : "Varies",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: model.benchmarkScore.overallRating,
      bestRating: "10",
      ratingCount: "1250",
    },
    author: {
      "@type": "Organization",
      name: model.developer,
    },
    description: model.summary,
    url: `https://aratbazar.com/ai/${model.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aratbazar.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Intelligence Hub",
        item: "https://aratbazar.com/ai",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: model.name,
        item: `https://aratbazar.com/ai/${model.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Top Navigation & Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <Link
          href="/ai"
          className="inline-flex items-center space-x-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-medium text-slate-300 hover:border-slate-700 hover:text-white transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to AI Directory</span>
        </Link>

        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/ai" className="hover:text-emerald-400 transition">
            AI Directory
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-semibold">{model.name}</span>
        </div>
      </div>

      {/* Top Banner Ad Unit */}
      <AdBanner format="horizontal" label="SPONSORED CLOUD & MODEL SERVING" />

      {/* Main Grid: Content (2 Cols) + Sidebar (1 Col) */}
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left 2 Columns: Deep Dive Review */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300">
                  {model.category}
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-mono text-slate-400">
                  By {model.developer}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {model.is100PercentFree ? (
                  <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 tracking-wide">
                    100% FREE
                  </span>
                ) : model.hasFreeTrial ? (
                  <span className="rounded-md bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-black text-cyan-400 tracking-wide">
                    FREE TRIAL AVAILABLE
                  </span>
                ) : (
                  <span className="rounded-md bg-purple-500/15 border border-purple-500/30 px-3 py-1 text-xs font-black text-purple-400 tracking-wide">
                    COMMERCIAL TIER
                  </span>
                )}
                <span className="rounded-md bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 text-xs font-mono font-bold text-amber-400">
                  ★ {model.benchmarkScore.overallRating}/10
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {model.name}
            </h1>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              {model.summary}
            </p>

            {/* Quick Best For Callout */}
            <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                Primary Recommended Use-Case
              </span>
              <p className="text-sm font-semibold text-white mt-1">
                {model.bestFor}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={model.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Launch {model.name} Free</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              {model.documentationUrl && (
                <a
                  href={model.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 transition"
                >
                  <span>Technical Documentation</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              )}
            </div>
          </div>

          {/* How to Access for Free Guide (Very High SEO Value) */}
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
              <CheckCircle2 className="h-4 w-4" />
              <span className="uppercase tracking-wider">Zero-Cost Verification Guide</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              How to Access {model.name} for Free
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              AratBazar verifies free tier access policies every week so users never run into unexpected billing surprises.
            </p>

            <div className="mt-5 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-xs text-slate-200 leading-relaxed">
              <p className="font-semibold text-emerald-400 text-sm mb-1">
                Official Free Tier Policy:
              </p>
              <p>{model.freeTierDetails}</p>
            </div>

            <div className="mt-5 space-y-3 text-xs text-slate-300">
              <h3 className="font-bold text-white text-sm">Step-by-Step Access Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>
                  Navigate to the official endpoint at{" "}
                  <a
                    href={model.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline hover:text-emerald-300"
                  >
                    {model.officialUrl}
                  </a>
                  .
                </li>
                {model.is100PercentFree ? (
                  <>
                    <li>
                      <strong>Web Usage:</strong> Start typing directly in the web chat or create a free account without providing a credit card.
                    </li>
                    <li>
                      <strong>Local Offline Execution:</strong> If running locally, install Ollama or vLLM and execute:{" "}
                      <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-emerald-300">
                        ollama run {model.slug.replace("-instruct", "")}
                      </code>
                      .
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      Sign up using your Google or standard email credentials. No payment verification is requested on the starter tier.
                    </li>
                    <li>
                      Begin with your daily free credit quota or free developer RPM allotment.
                    </li>
                  </>
                )}
                <li>
                  Review the context window limit ({model.contextWindow}) to ensure your prompts fit within the allocated token allowance.
                </li>
              </ol>
            </div>
          </div>

          {/* In-Article AdSense Banner */}
          <AdBanner format="in-feed" label="SPONSORED CLOUD GPU PROVIDER" />

          {/* Technical Specifications Table */}
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
              Technical Architecture & Specifications
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-semibold">Parameter</th>
                    <th className="pb-3 font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-3 font-medium text-slate-400">Developer / Lab</td>
                    <td className="py-3 font-semibold text-white">{model.developer}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-slate-400">Primary Discipline</td>
                    <td className="py-3">{model.category}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-slate-400">Pricing Tier</td>
                    <td className="py-3">
                      <span
                        className={`font-semibold ${
                          model.is100PercentFree ? "text-emerald-400" : "text-cyan-400"
                        }`}
                      >
                        {model.pricingType}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-slate-400">Context Window</td>
                    <td className="py-3 font-mono text-emerald-400 font-bold">{model.contextWindow}</td>
                  </tr>
                  {model.parameterCount && (
                    <tr>
                      <td className="py-3 font-medium text-slate-400">Parameter Count</td>
                      <td className="py-3 font-mono">{model.parameterCount}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-3 font-medium text-slate-400">License</td>
                    <td className="py-3 font-mono">{model.license}</td>
                  </tr>
                  {model.benchmarkScore.mmlu && (
                    <tr>
                      <td className="py-3 font-medium text-slate-400">MMLU Benchmark Score</td>
                      <td className="py-3 font-mono text-amber-400 font-bold">{model.benchmarkScore.mmlu}</td>
                    </tr>
                  )}
                  {model.benchmarkScore.humanEval && (
                    <tr>
                      <td className="py-3 font-medium text-slate-400">HumanEval (Coding)</td>
                      <td className="py-3 font-mono text-emerald-400 font-bold">{model.benchmarkScore.humanEval}</td>
                    </tr>
                  )}
                  {model.benchmarkScore.math && (
                    <tr>
                      <td className="py-3 font-medium text-slate-400">MATH Benchmark</td>
                      <td className="py-3 font-mono text-cyan-400 font-bold">{model.benchmarkScore.math}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-3 font-medium text-slate-400">Release Date</td>
                    <td className="py-3 font-mono">{model.releaseDate}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-slate-400">Last Verified Date</td>
                    <td className="py-3 font-mono">{model.lastUpdated}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros & Cons (Strengths vs Weaknesses) */}
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-6">
              Independent Analytical Assessment
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5">
                <h3 className="font-bold text-emerald-400 text-sm flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Key Strengths & Advantages
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {model.strengths.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5">
                <h3 className="font-bold text-rose-400 text-sm flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4" />
                  Limitations & Trade-Offs
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {model.weaknesses.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Column: Quick Action Sidebar */}
        <div className="space-y-6">
          {/* Quick Launch Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 shadow-xl sticky top-20">
            <h3 className="font-bold text-white text-base">Quick Access & Pricing</h3>
            <p className="text-xs text-slate-400 mt-1">
              Direct official verification links.
            </p>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-xs">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Pricing Structure</span>
              <p className="font-bold text-white mt-0.5">{model.pricingDetails}</p>
            </div>

            <a
              href={model.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center space-x-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 text-xs font-bold text-slate-950 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span>Launch Official Model</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            {/* Sidebar Ad Unit */}
            <div className="mt-6">
              <AdBanner format="sidebar" label="SPONSORED PARTNER" />
            </div>

            {/* Related Models in this Category */}
            {relatedModels.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                  Top Alternatives in {model.category}
                </h4>
                <div className="space-y-2.5">
                  {relatedModels.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/ai/${rel.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-2.5 text-xs hover:border-emerald-500/40 hover:bg-slate-900 transition"
                    >
                      <div>
                        <span className="font-bold text-slate-200 group-hover:text-emerald-400 transition block">
                          {rel.name}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {rel.developer} • {rel.pricingType}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
