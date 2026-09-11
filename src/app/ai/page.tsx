import { Metadata } from "next";
import React from "react";
import {
  AI_MODELS,
  AI_DAILY_RELEASES,
  AI_MARKET_METRICS,
  getBestInClassLeaderboard,
} from "@/data/aiModelsData";
import AiDirectoryClient from "@/components/AiDirectoryClient";
import AdBanner from "@/components/AdBanner";
import { BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Intelligence Hub | Free AI Models, Daily Launches & Benchmark Leaderboard",
  description:
    "Explore the premier global AI model directory. Daily automated tracking of newly launched AI models, 100% free open-weights LLMs, free trials, and best-in-class rankings for coding, writing, reasoning, and media generation.",
  keywords: [
    "free ai models",
    "best ai models 2026",
    "ai models with free trial",
    "latest ai model releases today",
    "deepseek v3 free",
    "deepseek r1 reasoning",
    "claude 3.5 sonnet free",
    "open source llm leaderboard",
    "best ai for coding",
    "best ai for image generation",
    "flux 1 schnell free",
    "daily ai launch tracker",
    "aratbazar ai hub",
  ],
  openGraph: {
    title: "AI Intelligence Hub | Free AI Models, Daily Launches & Rankings | AratBazar",
    description:
      "Automated daily AI launch intelligence, 100% free open-weights LLMs, free trial directory, and benchmark leaderboards across coding, research, reasoning, and generative media.",
    url: "https://aratbazar.com/ai",
    siteName: "AratBazar AI Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global AI Intelligence Hub & Free Model Tracker | AratBazar",
    description:
      "Track newly launched AI models daily. Discover 100% free models, free trials, and benchmark leaderboards for coding, writing, and reasoning.",
    creator: "@aratbazar",
  },
  alternates: {
    canonical: "https://aratbazar.com/ai",
  },
};

export default function AiHubPage() {
  const leaderboard = getBestInClassLeaderboard();

  // Structured Data (JSON-LD) for SEO & Google Rich Snippets
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best AI Models & Free LLMs Leaderboard 2026",
    description: "Curated directory of top-tier AI models, daily launches, and free pricing tiers.",
    numberOfItems: AI_MODELS.length,
    itemListElement: AI_MODELS.map((model, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: model.name,
        applicationCategory: "Artificial Intelligence Software",
        operatingSystem: "Web / Cloud / Local Hardware",
        offers: {
          "@type": "Offer",
          price: model.is100PercentFree ? "0.00" : "Varies",
          priceCurrency: "USD",
        },
        description: model.summary,
        url: `https://aratbazar.com/ai/${model.slug}`,
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which AI models are completely 100% free to use in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top 100% free AI models include DeepSeek-V3 (free web chat & open weights), DeepSeek-R1 (free reasoning model), Meta Llama 3.3 70B (open weights and free via Groq), FLUX.1 Schnell (Apache 2.0 open-source image generation), Google NotebookLM, and OpenAI Whisper Large v3 for speech-to-text.",
        },
      },
      {
        "@type": "Question",
        name: "How can I access premium models like Claude 3.5 Sonnet or Gemini 1.5 Pro without paying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claude.ai provides a permanent free daily message allowance with Artifacts support without entering a credit card. For Gemini 1.5 Pro, Google AI Studio offers a free developer tier providing up to 15 Requests Per Minute (RPM) and a 1-million-token context window completely free forever.",
        },
      },
      {
        "@type": "Question",
        name: "What is the single best AI model for coding and software engineering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claude 3.5 Sonnet and Cursor AI lead industry benchmarks for software architecture and code generation. For a 100% free open-source coding solution, DeepSeek-V3 and Qwen 2.5 72B Instruct offer frontier-grade performance.",
        },
      },
    ],
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
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* JSON-LD Schemas for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Top Billboard Ad Unit */}
      <AdBanner format="horizontal" label="SPONSORED AI CLOUD & INFRASTRUCTURE" />

      {/* Page Header */}
      <div className="border-b border-slate-800 pb-8 pt-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <BrainCircuit className="h-4 w-4" />
          <span className="uppercase tracking-wider">AratBazar AI Intelligence Terminal</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              AI Models Directory & Daily Launch Tracker
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Automated daily tracking of frontier AI models, open-weights releases, and verified pricing tiers. Discover which models are 100% free, which provide generous free trials, and which dominate the benchmark leaderboards for coding, reasoning, writing, and generative media.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs shrink-0">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-mono">Engine Status</span>
              <span className="font-mono font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE (DAILY SYNC)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive AI Hub Client Component */}
      <div className="mt-8">
        <AiDirectoryClient
          initialModels={AI_MODELS}
          dailyReleases={AI_DAILY_RELEASES}
          metrics={AI_MARKET_METRICS}
          leaderboard={leaderboard}
        />
      </div>

      {/* Bottom Ad Unit */}
      <div className="mt-12">
        <AdBanner format="horizontal" label="SPONSORED AI COMPUTE & API ACCELERATORS" />
      </div>
    </div>
  );
}
