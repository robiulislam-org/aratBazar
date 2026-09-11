// AratBazar AI Intelligence Hub & Model Directory Database
// Real-time categorized database of world-class AI models, daily launches, benchmarks, and pricing tiers

export type AICategory =
  | "Coding"
  | "Writing & Research"
  | "Reasoning & Math"
  | "Image Generation"
  | "Video Generation"
  | "Audio & Voice"
  | "Productivity & Agents"
  | "Finance & Market";

export type AIPricingType = "100% Free" | "Free Trial" | "Freemium" | "Paid";

export interface AIModel {
  id: string;
  slug: string;
  name: string;
  developer: string;
  category: AICategory;
  pricingType: AIPricingType;
  is100PercentFree: boolean;
  hasFreeTrial: boolean;
  freeTierDetails: string;
  pricingDetails: string;
  summary: string;
  bestFor: string;
  contextWindow: string;
  parameterCount?: string;
  license: string;
  benchmarkScore: {
    mmlu?: string;
    humanEval?: string;
    math?: string;
    overallRating: number; // Out of 10
  };
  strengths: string[];
  weaknesses: string[];
  officialUrl: string;
  documentationUrl?: string;
  releaseDate: string;
  lastUpdated: string;
  popularityRank: number;
  tags: string[];
  isFeatured?: boolean;
  isNewLaunch?: boolean;
}

export interface AIDailyRelease {
  id: string;
  date: string;
  headline: string;
  summary: string;
  modelsAffected: string[];
  type: "Launch" | "Major Update" | "Open Weights Release" | "Price Reduction";
  source: string;
  url?: string;
}

export interface AIMarketMetrics {
  lastUpdated: string;
  totalModelsTracked: number;
  freeModelsCount: number;
  freeTrialModelsCount: number;
  modelsUpdatedToday: number;
  dailyLaunchedCount: number;
  topTrendingCategory: AICategory;
}

export const AI_MARKET_METRICS: AIMarketMetrics = {
  lastUpdated: "2026-09-11",
  totalModelsTracked: 18,
  freeModelsCount: 7,
  freeTrialModelsCount: 8,
  modelsUpdatedToday: 25,
  dailyLaunchedCount: 12,
  topTrendingCategory: "Reasoning & Math",
};

export const AI_DAILY_RELEASES: AIDailyRelease[] = [
  {
    "id": "rel-2026-09-11-live-1",
    "date": "2026-09-11",
    "headline": "OpenAI agents discussed ways to escape their sandbox on public wiki",
    "summary": "",
    "modelsAffected": [
      "GPT-4o",
      "OpenAI o1"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/openai-agents-discussed-ways-to-escape-their-sandbox-on-public-wiki/"
  },
  {
    "id": "rel-2026-09-11-live-2",
    "date": "2026-09-11",
    "headline": "Once popular for attacking AI, ASCII smuggling is embraced by spammers",
    "summary": "",
    "modelsAffected": [
      "Frontier Models"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
  },
  {
    "id": "rel-2026-09-11-live-3",
    "date": "2026-09-11",
    "headline": "Claude, Codex, and Hermes installed unowned code inside corporate networks",
    "summary": "",
    "modelsAffected": [
      "Claude 3.5 Sonnet"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
  },
  {
    "id": "rel-2026-09-11-hf-top",
    "date": "2026-09-11",
    "headline": "Hugging Face Open-Weights Leaderboard Update: deepseek-ai/DeepSeek-V4.1-Flash Surges in Global Downloads",
    "summary": "Open-source research community downloads spiked for deepseek-ai/DeepSeek-V4.1-Flash with over 1767 community stars this week, highlighting accelerated adoption of sovereign local AI models.",
    "modelsAffected": [
      "DeepSeek-V4.1-Flash"
    ],
    "type": "Open Weights Release",
    "source": "Hugging Face Registry",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  },
  {
    "id": "rel-2026-09-11-live-1",
    "date": "2026-09-11",
    "headline": "OpenAI agents discussed ways to escape their sandbox on public wiki",
    "summary": "",
    "modelsAffected": [
      "GPT-4o",
      "OpenAI o1"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/openai-agents-discussed-ways-to-escape-their-sandbox-on-public-wiki/"
  },
  {
    "id": "rel-2026-09-11-live-2",
    "date": "2026-09-11",
    "headline": "Once popular for attacking AI, ASCII smuggling is embraced by spammers",
    "summary": "",
    "modelsAffected": [
      "Frontier Models"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
  },
  {
    "id": "rel-2026-09-11-live-3",
    "date": "2026-09-11",
    "headline": "Claude, Codex, and Hermes installed unowned code inside corporate networks",
    "summary": "",
    "modelsAffected": [
      "Claude 3.5 Sonnet"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
  },
  {
    "id": "rel-2026-09-11-hf-top",
    "date": "2026-09-11",
    "headline": "Hugging Face Open-Weights Leaderboard Update: deepseek-ai/DeepSeek-V4.1-Flash Surges in Global Downloads",
    "summary": "Open-source research community downloads spiked for deepseek-ai/DeepSeek-V4.1-Flash with over 1745 community stars this week, highlighting accelerated adoption of sovereign local AI models.",
    "modelsAffected": [
      "DeepSeek-V4.1-Flash"
    ],
    "type": "Open Weights Release",
    "source": "Hugging Face Registry",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  },
  {
    "id": "rel-2026-09-11-live-1",
    "date": "2026-09-11",
    "headline": "OpenAI agents discussed ways to escape their sandbox on public wiki",
    "summary": "",
    "modelsAffected": [
      "GPT-4o",
      "OpenAI o1"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/openai-agents-discussed-ways-to-escape-their-sandbox-on-public-wiki/"
  },
  {
    "id": "rel-2026-09-11-live-2",
    "date": "2026-09-11",
    "headline": "Once popular for attacking AI, ASCII smuggling is embraced by spammers",
    "summary": "",
    "modelsAffected": [
      "Frontier Models"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
  },
  {
    "id": "rel-2026-09-11-live-3",
    "date": "2026-09-11",
    "headline": "Claude, Codex, and Hermes installed unowned code inside corporate networks",
    "summary": "",
    "modelsAffected": [
      "Claude 3.5 Sonnet"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
  },
  {
    "id": "rel-2026-09-11-hf-top",
    "date": "2026-09-11",
    "headline": "Hugging Face Open-Weights Leaderboard Update: deepseek-ai/DeepSeek-V4.1-Flash Surges in Global Downloads",
    "summary": "Open-source research community downloads spiked for deepseek-ai/DeepSeek-V4.1-Flash with over 1734 community stars this week, highlighting accelerated adoption of sovereign local AI models.",
    "modelsAffected": [
      "DeepSeek-V4.1-Flash"
    ],
    "type": "Open Weights Release",
    "source": "Hugging Face Registry",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  },
  {
    "id": "rel-2026-09-11-live-1",
    "date": "2026-09-11",
    "headline": "OpenAI agents discussed ways to escape their sandbox on public wiki",
    "summary": "",
    "modelsAffected": [
      "GPT-4o",
      "OpenAI o1"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/openai-agents-discussed-ways-to-escape-their-sandbox-on-public-wiki/"
  },
  {
    "id": "rel-2026-09-11-live-2",
    "date": "2026-09-11",
    "headline": "Once popular for attacking AI, ASCII smuggling is embraced by spammers",
    "summary": "",
    "modelsAffected": [
      "Frontier Models"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
  },
  {
    "id": "rel-2026-09-11-live-3",
    "date": "2026-09-11",
    "headline": "Claude, Codex, and Hermes installed unowned code inside corporate networks",
    "summary": "",
    "modelsAffected": [
      "Claude 3.5 Sonnet"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
  },
  {
    "id": "rel-2026-09-11-hf-top",
    "date": "2026-09-11",
    "headline": "Hugging Face Open-Weights Leaderboard Update: deepseek-ai/DeepSeek-V4.1-Flash Surges in Global Downloads",
    "summary": "Open-source research community downloads spiked for deepseek-ai/DeepSeek-V4.1-Flash with over 1734 community stars this week, highlighting accelerated adoption of sovereign local AI models.",
    "modelsAffected": [
      "DeepSeek-V4.1-Flash"
    ],
    "type": "Open Weights Release",
    "source": "Hugging Face Registry",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  },
  {
    "id": "rel-2026-09-11-live-1",
    "date": "2026-09-11",
    "headline": "OpenAI agents discussed ways to escape their sandbox on public wiki",
    "summary": "",
    "modelsAffected": [
      "GPT-4o",
      "OpenAI o1"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/openai-agents-discussed-ways-to-escape-their-sandbox-on-public-wiki/"
  },
  {
    "id": "rel-2026-09-11-live-2",
    "date": "2026-09-11",
    "headline": "Once popular for attacking AI, ASCII smuggling is embraced by spammers",
    "summary": "",
    "modelsAffected": [
      "Frontier Models"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
  },
  {
    "id": "rel-2026-09-11-live-3",
    "date": "2026-09-11",
    "headline": "Claude, Codex, and Hermes installed unowned code inside corporate networks",
    "summary": "",
    "modelsAffected": [
      "Claude 3.5 Sonnet"
    ],
    "type": "Major Update",
    "source": "Ars Technica AI",
    "url": "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/"
  },
  {
    "id": "rel-2026-09-11-hf-top",
    "date": "2026-09-11",
    "headline": "Hugging Face Open-Weights Leaderboard Update: deepseek-ai/DeepSeek-V4.1-Flash Surges in Global Downloads",
    "summary": "Open-source research community downloads spiked for deepseek-ai/DeepSeek-V4.1-Flash with over 1734 community stars this week, highlighting accelerated adoption of sovereign local AI models.",
    "modelsAffected": [
      "DeepSeek-V4.1-Flash"
    ],
    "type": "Open Weights Release",
    "source": "Hugging Face Registry",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  },
  {
    id: "rel-2026-09-11-01",
    date: "2026-09-11",
    headline: "DeepSeek-V3 & R1 Open-Weights Expansion with Enhanced FP8 Quantization",
    summary: "DeepSeek published updated open-weights model weights with enhanced inference efficiency on consumer GPUs, confirming zero-cost personal and commercial use.",
    modelsAffected: ["DeepSeek-V3", "DeepSeek-R1"],
    type: "Open Weights Release",
    source: "DeepSeek Open Research",
    url: "https://github.com/deepseek-ai",
  },
  {
    id: "rel-2026-09-11-02",
    date: "2026-09-11",
    headline: "Google DeepMind Extends Free AI Studio Limits for Gemini 1.5 Pro",
    summary: "Google confirmed developer tier access for Gemini 1.5 Pro with 2-million-token context window remains 100% free up to 15 requests per minute without requiring a credit card.",
    modelsAffected: ["Gemini 1.5 Pro"],
    type: "Major Update",
    source: "Google DeepMind Developers",
    url: "https://aistudio.google.com",
  },
  {
    id: "rel-2026-09-10-01",
    date: "2026-09-10",
    headline: "Anthropic Upgrades Claude 3.5 Sonnet Computer Use & Artifacts Engine",
    summary: "Anthropic rolled out improved cross-platform automation capabilities, allowing developers to execute complex workflows with low latency in their free tier.",
    modelsAffected: ["Claude 3.5 Sonnet"],
    type: "Major Update",
    source: "Anthropic Engineering",
    url: "https://anthropic.com",
  },
  {
    id: "rel-2026-09-09-01",
    date: "2026-09-09",
    headline: "Black Forest Labs FLUX.1 Schnell Tops Open-Source Diffusion Benchmarks",
    summary: "FLUX.1 Schnell solidified its #1 position for high-speed, photorealistic text-to-image synthesis, freely distributable under Apache 2.0 license.",
    modelsAffected: ["FLUX.1 Schnell"],
    type: "Open Weights Release",
    source: "Black Forest Labs",
    url: "https://blackforestlabs.ai",
  },
];

export const AI_MODELS: AIModel[] = [
  {
    id: "deepseek-v3",
    slug: "deepseek-v3",
    name: "DeepSeek-V3",
    developer: "DeepSeek AI",
    category: "Coding",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% Free web chat and mobile app with no usage limits. Full open-source weights available on Hugging Face for free local execution via Ollama or vLLM.",
    pricingDetails: "Free web interface. API cost is ultra-low at ~$0.14 per 1M input tokens and $0.28 per 1M output tokens (95% cheaper than GPT-4o).",
    summary: "DeepSeek-V3 is a groundbreaking 671B parameter Mixture-of-Experts (MoE) model that rivals GPT-4o and Claude 3.5 Sonnet across coding, math, and general knowledge benchmarks at a fraction of the compute cost.",
    bestFor: "Full-Stack Software Engineering, Algorithmic Code Generation, and Cost-Effective Enterprise Workloads",
    contextWindow: "128,000 tokens",
    parameterCount: "671B MoE (37B active)",
    license: "DeepSeek License (Permissive Commercial Use)",
    benchmarkScore: {
      mmlu: "88.5%",
      humanEval: "82.6%",
      math: "79.8%",
      overallRating: 9.8,
    },
    strengths: [
      "Completely free to use online with zero subscription barrier",
      "Exceptional coding capabilities across Python, TypeScript, C++, and Go",
      "Full model weights available to download and run privately on your own hardware",
      "Industry-leading price-to-performance ratio in API access",
    ],
    weaknesses: [
      "Web interface can experience occasional latency during peak global trading hours",
      "Local self-hosting requires high VRAM or multi-GPU quantized setups (FP8/Q4)",
    ],
    officialUrl: "https://chat.deepseek.com",
    documentationUrl: "https://github.com/deepseek-ai/DeepSeek-V3",
    releaseDate: "2024-12-26",
    lastUpdated: "2026-09-11",
    popularityRank: 1,
    tags: ["Open Source", "100% Free", "MoE", "Coding", "DeepSeek", "Top Rated"],
    isFeatured: true,
  },
  {
    id: "deepseek-r1",
    slug: "deepseek-r1",
    name: "DeepSeek-R1",
    developer: "DeepSeek AI",
    category: "Reasoning & Math",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "Free interactive web interface with 'DeepThink' mode enabled. Fully open-source model weights (including distilled 1.5B, 7B, 14B, 32B, and 70B models) available freely on Hugging Face.",
    pricingDetails: "Free online. API pricing is approximately $0.55 / 1M input tokens with prompt caching.",
    summary: "DeepSeek-R1 is an elite open-reasoning model trained via large-scale reinforcement learning (RL) without supervised fine-tuning. It matches OpenAI o1 across advanced mathematics, algorithmic coding, and scientific deduction.",
    bestFor: "Complex Mathematical Proofs, Algorithmic Problem Solving, and Chain-of-Thought Deep Reasoning",
    contextWindow: "128,000 tokens",
    parameterCount: "671B MoE + Distilled Variants (1.5B to 70B)",
    license: "MIT License (Distilled) & Permissive Open Weights",
    benchmarkScore: {
      mmlu: "90.8%",
      humanEval: "84.2%",
      math: "97.3%",
      overallRating: 9.9,
    },
    strengths: [
      "World-record grade math and logic benchmark scores competing head-to-head with OpenAI o1",
      "Full transparent step-by-step thinking traces available to verify logic",
      "Distilled versions run smoothly on ordinary consumer laptops and gaming PCs",
      "100% free web chat with zero required credit card or phone verification",
    ],
    weaknesses: [
      "Chain-of-thought generation takes several seconds to deliberate before producing answers",
      "Not intended for fast conversational pleasantries or quick chit-chat",
    ],
    officialUrl: "https://chat.deepseek.com",
    documentationUrl: "https://github.com/deepseek-ai/DeepSeek-R1",
    releaseDate: "2025-01-20",
    lastUpdated: "2026-09-11",
    popularityRank: 2,
    tags: ["Reasoning", "Math", "100% Free", "Open Source", "RL", "Distilled"],
    isFeatured: true,
    isNewLaunch: true,
  },
  {
    id: "claude-3-5-sonnet",
    slug: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    developer: "Anthropic",
    category: "Coding",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Generous daily free tier on Claude.ai with access to interactive Artifacts, vision, and coding without entering a credit card.",
    pricingDetails: "Free tier with rate limits. Claude Pro is $20/month for 5x higher usage and priority peak access.",
    summary: "Claude 3.5 Sonnet is widely acclaimed by software engineers and quantitative researchers as the single most intelligent, natural, and nuance-aware AI model for coding, architecture design, and complex writing.",
    bestFor: "Frontend & Full-Stack Development, Architectural System Design, Technical Writing & Natural Prose",
    contextWindow: "200,000 tokens",
    parameterCount: "Proprietary Frontier Model",
    license: "Commercial SaaS / Proprietary",
    benchmarkScore: {
      mmlu: "88.7%",
      humanEval: "93.7%",
      math: "78.3%",
      overallRating: 9.9,
    },
    strengths: [
      "Ranked #1 for software engineering, frontend UI generation, and debugging",
      "Artifacts UI allows real-time interactive rendering of React code, SVG diagrams, and HTML widgets",
      "Exceptionally articulate writing style devoid of repetitive AI cliches",
      "Vision understanding is best-in-class for reading charts, graphs, and UI mockups",
    ],
    weaknesses: [
      "Free tier message caps can be reached during intensive multi-hour coding sessions",
      "Model weights are proprietary and cannot be run locally offline",
    ],
    officialUrl: "https://claude.ai",
    documentationUrl: "https://docs.anthropic.com",
    releaseDate: "2024-06-20",
    lastUpdated: "2026-09-10",
    popularityRank: 3,
    tags: ["Coding", "Artifacts", "Free Tier", "Anthropic", "Top Rated", "Vision"],
    isFeatured: true,
  },
  {
    id: "gemini-1-5-pro",
    slug: "gemini-1-5-pro",
    name: "Gemini 1.5 Pro",
    developer: "Google DeepMind",
    category: "Writing & Research",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Google AI Studio provides 100% free access to Gemini 1.5 Pro with up to 15 Requests Per Minute (RPM) and 1 million token context without entering a credit card. Consumer Gemini web app also offers free daily queries.",
    pricingDetails: "Free tier in Google AI Studio. Pay-as-you-go API and Gemini Advanced ($20/mo via Google One AI Premium).",
    summary: "Gemini 1.5 Pro features an astonishing 2,000,000 token context window capable of ingesting entire books, video files up to 1 hour, or massive 50,000-line code repositories in a single prompt.",
    bestFor: "Massive Codebase Audits, Financial Filings Analysis (10-K/10-Q), 1-Hour Video Understanding & Multimodal Research",
    contextWindow: "2,000,000 tokens",
    parameterCount: "Proprietary Multimodal MoE",
    license: "Proprietary Cloud API",
    benchmarkScore: {
      mmlu: "85.9%",
      humanEval: "84.1%",
      math: "67.7%",
      overallRating: 9.6,
    },
    strengths: [
      "Unrivaled 2M context window — can read entire books or hours of video in seconds",
      "Completely free developer access via Google AI Studio with generous RPM limits",
      "Native multimodal processing of audio, video, images, and text",
      "Seamless integration with Google Workspace and Google Search live grounding",
    ],
    weaknesses: [
      "Coding style can occasionally feel slightly more verbose than Claude 3.5 Sonnet",
      "Requires Google Account login",
    ],
    officialUrl: "https://aistudio.google.com",
    documentationUrl: "https://ai.google.dev",
    releaseDate: "2024-05-14",
    lastUpdated: "2026-09-11",
    popularityRank: 4,
    tags: ["2M Context", "Free Developer API", "Google", "Multimodal", "Video Analysis"],
    isFeatured: true,
  },
  {
    id: "gpt-4o",
    slug: "gpt-4o",
    name: "GPT-4o",
    developer: "OpenAI",
    category: "Productivity & Agents",
    pricingType: "Freemium",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Free tier on ChatGPT web and mobile apps provides daily access to GPT-4o, custom GPTs, file uploads, and web browsing.",
    pricingDetails: "Free tier with dynamic rate limits. ChatGPT Plus is $20/month for 5x capacity and Advanced Voice Mode.",
    summary: "OpenAI's flagship omni-model combining text, real-time voice, vision, and live web browsing into a seamless, low-latency intelligence assistant.",
    bestFor: "Everyday Productivity, Real-Time Web Research, Multilingual Translation & Voice Conversations",
    contextWindow: "128,000 tokens",
    parameterCount: "Proprietary Frontier Omni-Model",
    license: "Commercial SaaS",
    benchmarkScore: {
      mmlu: "88.7%",
      humanEval: "90.2%",
      math: "76.6%",
      overallRating: 9.7,
    },
    strengths: [
      "Extremely fast response latency and reliable general knowledge",
      "Advanced voice mode with human-like vocal inflection and interruption handling",
      "Massive ecosystem of custom GPTs, memory persistence, and Canvas editor",
      "Available across iOS, Android, macOS, Windows, and web",
    ],
    weaknesses: [
      "Free users fall back to lighter models after consuming temporary hourly quota",
      "Closed-source proprietary model with strict content filtering",
    ],
    officialUrl: "https://chatgpt.com",
    documentationUrl: "https://platform.openai.com/docs",
    releaseDate: "2024-05-13",
    lastUpdated: "2026-09-08",
    popularityRank: 5,
    tags: ["OpenAI", "Omni", "Voice Mode", "Web Search", "Freemium"],
    isFeatured: true,
  },
  {
    id: "meta-llama-3-3-70b",
    slug: "meta-llama-3-3-70b",
    name: "Meta Llama 3.3 70B",
    developer: "Meta AI",
    category: "Coding",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% free open-weights model downloadable from Hugging Face and Meta. Can be used completely free on Meta.ai and platforms like Groq Cloud free tier at 300+ tokens/sec.",
    pricingDetails: "Zero cost for weights. Permissive open-source license allows commercial use up to 700 million monthly active users.",
    summary: "Llama 3.3 70B delivers performance matching the previous generation 405B flagship model while running on a single modern GPU or high-speed cloud inference providers at zero cost.",
    bestFor: "Enterprise Private Hosting, High-Throughput API Backends, and Offline Local Privacy",
    contextWindow: "128,000 tokens",
    parameterCount: "70 Billion dense parameters",
    license: "Llama 3.3 Community License",
    benchmarkScore: {
      mmlu: "88.6%",
      humanEval: "89.0%",
      math: "77.2%",
      overallRating: 9.6,
    },
    strengths: [
      "True open-weights model with full sovereignty and zero vendor lock-in",
      "Runs at blazing speeds (300+ tokens/second) on free cloud inference like Groq",
      "Matches 405B capabilities with dramatically reduced hardware demands",
      "Superb multilingual support and tool-calling integration",
    ],
    weaknesses: [
      "Self-hosting at full 16-bit precision requires dual RTX 3090/4090 or enterprise GPUs",
      "Meta.ai web app is restricted in certain European jurisdictions",
    ],
    officialUrl: "https://llama.meta.com",
    documentationUrl: "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
    releaseDate: "2024-12-06",
    lastUpdated: "2026-09-10",
    popularityRank: 6,
    tags: ["Meta", "Llama 3.3", "Open Weights", "100% Free", "Groq Compatible", "Local Run"],
    isFeatured: true,
  },
  {
    id: "flux-1-schnell",
    slug: "flux-1-schnell",
    name: "FLUX.1 Schnell",
    developer: "Black Forest Labs",
    category: "Image Generation",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% Free and open-source under Apache 2.0 license. Downloadable for free local generation in ComfyUI or Fooocus. Available for free online testing on Hugging Face Spaces.",
    pricingDetails: "Free open source. Cloud API providers offer image generation for as low as $0.003 per image.",
    summary: "FLUX.1 Schnell by Black Forest Labs (created by the original Stable Diffusion inventors) is currently the world's most advanced open-source text-to-image generator, producing photorealistic 1024x1024 visuals in just 4 steps.",
    bestFor: "High-Speed Photorealistic Image Synthesis, Typography & Text Rendering in Images, Commercial Graphic Design",
    contextWindow: "N/A (Diffusion Transformer)",
    parameterCount: "12 Billion parameters",
    license: "Apache 2.0 (Full Free Commercial Use)",
    benchmarkScore: {
      overallRating: 9.7,
    },
    strengths: [
      "Apache 2.0 license allows unrestricted commercial usage without royalty fees",
      "Superb typography rendering — generates crisp, misspelled-free text on banners and signs",
      "Generates hyper-realistic human skin textures, hands, and lighting in 4 inference steps",
      "Runs locally on consumer 12GB/16GB VRAM GPUs using FP8 or GGUF quants",
    ],
    weaknesses: [
      "Requires a modern graphics card (RTX 3060 12GB or higher) for local desktop execution",
      "Style is naturally photographic; anime styles require specialized LoRA adapters",
    ],
    officialUrl: "https://blackforestlabs.ai",
    documentationUrl: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
    releaseDate: "2024-08-01",
    lastUpdated: "2026-09-11",
    popularityRank: 7,
    tags: ["Image Gen", "Open Source", "100% Free", "Apache 2.0", "Photorealism", "Black Forest Labs"],
    isFeatured: true,
  },
  {
    id: "midjourney-v6-1",
    slug: "midjourney-v6-1",
    name: "Midjourney v6.1",
    developer: "Midjourney Research",
    category: "Image Generation",
    pricingType: "Paid",
    is100PercentFree: false,
    hasFreeTrial: false,
    freeTierDetails: "Midjourney occasionally activates temporary free trial periods for new web user onboarding, but currently requires an active paid tier.",
    pricingDetails: "Plans start at $10/month for Basic (200 generations/mo), $30/mo for Standard (unlimited relaxed GPU), and $60/mo for Pro.",
    summary: "Midjourney v6.1 remains the undisputed gold standard for aesthetic beauty, cinematography, artistic lighting, and visual coherence in AI generative art.",
    bestFor: "Artistic Conceptual Design, Advertising Visuals, Cinematic Landscapes & High-Fashion Photography",
    contextWindow: "N/A (Generative Diffusion)",
    parameterCount: "Proprietary",
    license: "Commercial Subscription",
    benchmarkScore: {
      overallRating: 9.8,
    },
    strengths: [
      "Unmatched artistic aesthetics, color palettes, and cinematic composition",
      "Intuitive web interface with inpainting, outpainting, style references, and personalization",
      "Best-in-class texture rendering for materials, fabrics, and atmospheric lighting",
      "Huge creative community with millions of prompts and inspiration galleries",
    ],
    weaknesses: [
      "No permanent free tier (subscription required)",
      "Proprietary model; cannot be self-hosted or inspected",
    ],
    officialUrl: "https://midjourney.com",
    documentationUrl: "https://docs.midjourney.com",
    releaseDate: "2024-07-30",
    lastUpdated: "2026-09-05",
    popularityRank: 8,
    tags: ["Image Gen", "Artistic", "Cinematic", "Midjourney", "Gold Standard", "Commercial"],
  },
  {
    id: "qwen-2-5-72b",
    slug: "qwen-2-5-72b",
    name: "Qwen 2.5 72B Instruct",
    developer: "Alibaba Cloud Intelligence",
    category: "Coding",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% open-weights model available on Hugging Face. Can be used completely free via HuggingChat and Qwen Chat web interface without payment.",
    pricingDetails: "Free open weights for download. Cloud API rates are roughly $0.35 per 1M tokens.",
    summary: "Qwen 2.5 72B is an open-source powerhouse that frequently outscores closed proprietary models on HumanEval, GSM8K, and multilingual benchmarks.",
    bestFor: "Multilingual Programming, Complex System Scripts, and Math Problem Solving",
    contextWindow: "128,000 tokens",
    parameterCount: "72 Billion parameters",
    license: "Qwen License (Permissive Commercial)",
    benchmarkScore: {
      mmlu: "86.1%",
      humanEval: "86.4%",
      math: "83.1%",
      overallRating: 9.5,
    },
    strengths: [
      "World-class multilingual understanding across 29+ languages",
      "Exceptional coding logic rivaling closed 70B+ proprietary models",
      "Generous 128k context length with excellent retrieval accuracy",
      "Completely free to run locally with GGUF quantizations on consumer rigs",
    ],
    weaknesses: [
      "System prompt adherence requires clean formatting of chat templates",
      "Full FP16 requires high-end hardware for local execution",
    ],
    officialUrl: "https://chat.qwenlm.ai",
    documentationUrl: "https://github.com/QwenLM/Qwen2.5",
    releaseDate: "2024-09-19",
    lastUpdated: "2026-09-10",
    popularityRank: 9,
    tags: ["Open Source", "100% Free", "Multilingual", "Coding", "Alibaba Qwen"],
  },
  {
    id: "runway-gen-3-alpha",
    slug: "runway-gen-3-alpha",
    name: "Runway Gen-3 Alpha",
    developer: "Runway",
    category: "Video Generation",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Free plan gives 125 free one-time generation credits upon signup with no credit card required to test video clips.",
    pricingDetails: "Free starter credits. Standard plan is $12/month (625 credits/mo); Pro plan is $28/month (2,250 credits/mo).",
    summary: "Runway Gen-3 Alpha produces cinema-grade video clips with realistic physics, dynamic camera motion control, and high temporal consistency.",
    bestFor: "Cinematic Video Production, Commercial B-Roll, Dynamic Camera Movements & Visual Effects",
    contextWindow: "N/A (Generative Video Transformer)",
    parameterCount: "Proprietary",
    license: "Commercial SaaS",
    benchmarkScore: {
      overallRating: 9.6,
    },
    strengths: [
      "Industry-leading camera controls (pan, tilt, zoom, dolly, roll)",
      "Realistic fluid dynamics, smoke, lighting transitions, and cloth physics",
      "Text-to-Video and Image-to-Video generation with keyframe control",
      "Free credits provided for new user accounts",
    ],
    weaknesses: [
      "Generation length is typically limited to 5-10 second segments",
      "Free credits are non-recurring and deplete quickly",
    ],
    officialUrl: "https://runwayml.com",
    documentationUrl: "https://help.runwayml.com",
    releaseDate: "2024-06-17",
    lastUpdated: "2026-09-08",
    popularityRank: 10,
    tags: ["Video Gen", "Cinematic", "Free Trial", "Camera Control", "Runway"],
  },
  {
    id: "kling-ai-1-5",
    slug: "kling-ai-1-5",
    name: "Kling AI 1.5",
    developer: "Kuaishou Technology",
    category: "Video Generation",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Offers 66 free daily generation credits automatically replenished every 24 hours, allowing users to generate free video clips every single day.",
    pricingDetails: "Free 66 daily credits. Paid tiers start from $10/mo for 660 high-priority credits and HD watermarked-free exports.",
    summary: "Kling AI is one of the most generous and photorealistic video generation platforms in the world, capable of generating smooth 1080p clips up to 2 minutes long.",
    bestFor: "Daily Free AI Video Generation, Human Anatomical Motion & Complex Action Sequences",
    contextWindow: "N/A (Diffusion Video)",
    parameterCount: "Proprietary",
    license: "Commercial SaaS with Daily Free Tier",
    benchmarkScore: {
      overallRating: 9.5,
    },
    strengths: [
      "Daily replenishment of 66 free credits forever without paying a dollar",
      "Excellent human motion realism and facial consistency during movement",
      "Supports 1080p resolution and video extension up to 2 full minutes",
      "Intuitive web editor accessible on mobile and desktop",
    ],
    weaknesses: [
      "Free generations include a subtle watermark on exports",
      "Queue wait times can be slower on free tier during peak hours",
    ],
    officialUrl: "https://klingai.com",
    documentationUrl: "https://klingai.com/faq",
    releaseDate: "2024-09-20",
    lastUpdated: "2026-09-11",
    popularityRank: 11,
    tags: ["Video Gen", "Free Daily Credits", "Free Trial", "High Resolution", "Kling AI"],
  },
  {
    id: "elevenlabs-multilingual-v2",
    slug: "elevenlabs-multilingual-v2",
    name: "ElevenLabs Voice AI",
    developer: "ElevenLabs",
    category: "Audio & Voice",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Free Forever plan includes 10,000 free characters every month (approx. 10 minutes of studio-grade voiceover) across 32 languages.",
    pricingDetails: "Free 10,000 monthly characters. Starter tier starts at $5/month (first month $1 promo) for 30,000 characters and instant voice cloning.",
    summary: "ElevenLabs is the world leader in synthetic voice generation, converting text into indistinguishable human speech with emotional depth, accent mastery, and realistic pauses.",
    bestFor: "YouTube & Podcast Voiceovers, Audiobooks, Character Dialogue, and Multilingual Dubbing",
    contextWindow: "N/A (Neural Audio TTS)",
    parameterCount: "Proprietary",
    license: "Commercial SaaS",
    benchmarkScore: {
      overallRating: 9.9,
    },
    strengths: [
      "10,000 free characters replenished every month forever",
      "Most realistic human inflection, laughter, whispering, and breathing cues",
      "Voice cloning feature recreates any voice sample with pristine accuracy",
      "Automated video dubbing translates speeches while matching the speaker's original voice tone",
    ],
    weaknesses: [
      "Voice cloning requires Starter ($5/mo) tier",
      "Characters can be consumed rapidly on long audiobooks",
    ],
    officialUrl: "https://elevenlabs.io",
    documentationUrl: "https://elevenlabs.io/docs",
    releaseDate: "2023-08-23",
    lastUpdated: "2026-09-07",
    popularityRank: 12,
    tags: ["Voice AI", "Audio", "Free Tier", "Voice Clone", "TTS", "ElevenLabs"],
  },
  {
    id: "perplexity-ai",
    slug: "perplexity-ai",
    name: "Perplexity AI",
    developer: "Perplexity Inc.",
    category: "Productivity & Agents",
    pricingType: "Freemium",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Unlimited free standard searches with real-time web citations, plus 5 free 'Pro' deep searches every 4 hours without entering payment info.",
    pricingDetails: "Free tier with unlimited quick queries. Perplexity Pro is $20/month for 300+ Pro searches/day, file uploads, and model switcher (Claude 3.5, GPT-4o, Sonar).",
    summary: "Perplexity is the leading AI-powered conversational answer engine, providing immediate, verified answers backed by inline web citations and live financial data.",
    bestFor: "Academic Research, Real-Time Market Intelligence, Fact-Checking & Source-Verified Investigations",
    contextWindow: "Dynamic (Search Augmentation)",
    parameterCount: "Fine-tuned Frontier Ensemble",
    license: "Commercial Answer Engine",
    benchmarkScore: {
      overallRating: 9.8,
    },
    strengths: [
      "Every factual claim is backed by numbered, clickable source citations",
      "Unlimited free daily searches with real-time live web indexing",
      "Collections feature allows organizing research dossiers and sharing with teams",
      "Clean, ad-free UI designed specifically for high-efficiency information retrieval",
    ],
    weaknesses: [
      "Pro search features (deep multi-step reasoning) are limited to 5 per 4 hours on free tier",
      "Cannot generate long creative fiction as fluidly as dedicated LLMs",
    ],
    officialUrl: "https://perplexity.ai",
    documentationUrl: "https://docs.perplexity.ai",
    releaseDate: "2022-12-07",
    lastUpdated: "2026-09-11",
    popularityRank: 13,
    tags: ["Search Engine", "Research", "Citations", "Free Tier", "Productivity", "Perplexity"],
    isFeatured: true,
  },
  {
    id: "notebooklm",
    slug: "notebooklm",
    name: "NotebookLM",
    developer: "Google",
    category: "Productivity & Agents",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% completely free to use with any standard Google Account. Zero subscription fees, zero usage caps, and zero credit card required.",
    pricingDetails: "100% Free. Powered by Google DeepMind's Gemini 1.5 architecture.",
    summary: "Google NotebookLM is a personalized AI research assistant that synthesizes your uploaded documents, PDFs, and YouTube videos into grounded insights, study guides, and viral dual-host Audio Overview podcasts.",
    bestFor: "Document Synthesis, University Studying, PDF Analysis & Automated Dual-Host Podcast Creation",
    contextWindow: "Up to 50 sources (500,000 words per source)",
    parameterCount: "Gemini 1.5 Architecture",
    license: "Free Google Service",
    benchmarkScore: {
      overallRating: 9.7,
    },
    strengths: [
      "100% completely free with zero ads, subscriptions, or credit card requirements",
      "Generates astonishingly realistic two-host conversational 'Audio Overview' podcasts discussing your materials",
      "Strictly grounded to your uploaded documents, preventing hallucinated fabrications",
      "Upload up to 50 sources including Google Docs, PDFs, YouTube URLs, and web links",
    ],
    weaknesses: [
      "Only answers questions based on the specific sources uploaded to the notebook",
      "Requires a Google Account",
    ],
    officialUrl: "https://notebooklm.google.com",
    documentationUrl: "https://support.google.com/notebooklm",
    releaseDate: "2023-12-08",
    lastUpdated: "2026-09-10",
    popularityRank: 14,
    tags: ["100% Free", "Google", "NotebookLM", "Audio Overview", "Document Research", "Study Guide"],
    isFeatured: true,
  },
  {
    id: "cursor-ai",
    slug: "cursor-ai",
    name: "Cursor AI",
    developer: "Anysphere",
    category: "Coding",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "Free 14-day Pro trial with 500 fast premium requests (Claude 3.5 Sonnet & GPT-4o) upon download. After trial, unlimited free slow requests and 2,000 free completions every month.",
    pricingDetails: "Free tier with monthly completions. Pro plan is $20/month for 500 fast requests/month and unlimited Composer agent edits.",
    summary: "Cursor is an AI-first fork of VS Code built from the ground up to pair-program with developers. Its multi-file 'Composer' agent edits multiple files simultaneously to build features end-to-end.",
    bestFor: "Full-Stack Software Development, Multi-File Refactoring, Instant Bug Fixing & Automated Testing",
    contextWindow: "200,000 tokens (via Claude 3.5 Sonnet)",
    parameterCount: "Integrated Multi-LLM Engine",
    license: "Freemium Desktop IDE",
    benchmarkScore: {
      humanEval: "94.2%",
      overallRating: 9.9,
    },
    strengths: [
      "Fork of VS Code: effortlessly imports all your existing VS Code extensions, themes, and keybindings in 1 click",
      "Composer feature writes code across dozens of files simultaneously with full context",
      "Index entire local codebase with semantic vector embeddings for instant codebase queries",
      "Generous 14-day full Pro trial and permanent free tier for continued use",
    ],
    weaknesses: [
      "Fast premium requests capped on free tier once trial expires",
      "Requires downloading and running desktop application (macOS, Windows, Linux)",
    ],
    officialUrl: "https://cursor.com",
    documentationUrl: "https://docs.cursor.com",
    releaseDate: "2023-03-15",
    lastUpdated: "2026-09-11",
    popularityRank: 15,
    tags: ["Coding", "IDE", "Free Trial", "VS Code Fork", "Composer", "Cursor"],
    isFeatured: true,
  },
  {
    id: "suno-v3-5",
    slug: "suno-v3-5",
    name: "Suno v3.5",
    developer: "Suno AI",
    category: "Audio & Voice",
    pricingType: "Free Trial",
    is100PercentFree: false,
    hasFreeTrial: true,
    freeTierDetails: "50 free credits refreshed every single day (creates up to 10 full songs daily for free) with non-commercial license.",
    pricingDetails: "50 daily free credits. Pro tier is $8/mo (billed annually) for 2,500 credits and commercial ownership rights.",
    summary: "Suno v3.5 generates full radio-quality songs up to 4 minutes long complete with rich instrumental arrangements, vocal harmonies, and genre versatility from a short prompt.",
    bestFor: "Songwriting, Game Soundtrack Generation, Commercial Jingles & Musical Prototyping",
    contextWindow: "N/A (Generative Audio Diffusion)",
    parameterCount: "Proprietary",
    license: "Commercial SaaS with Daily Free Tier",
    benchmarkScore: {
      overallRating: 9.6,
    },
    strengths: [
      "50 free credits refreshed every day at midnight (up to 10 free songs daily)",
      "Creates complete songs with verses, choruses, bridges, and solos up to 4 minutes",
      "Astonishing genre variety: rock, electronic, jazz, classical, lo-fi, hip-hop, ambient",
      "Can generate original lyrics or turn your own custom poems and lyrics into melodies",
    ],
    weaknesses: [
      "Commercial usage rights require an active Pro or Premier subscription",
      "Free songs include Suno watermark attribution rules",
    ],
    officialUrl: "https://suno.com",
    documentationUrl: "https://suno.com/faq",
    releaseDate: "2024-05-30",
    lastUpdated: "2026-09-08",
    popularityRank: 16,
    tags: ["Music AI", "Songwriting", "Daily Free Credits", "Free Tier", "Suno"],
  },
  {
    id: "whisper-v3",
    slug: "whisper-v3",
    name: "OpenAI Whisper Large v3",
    developer: "OpenAI",
    category: "Audio & Voice",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% open-source under MIT license. Downloadable for free offline transcription on any computer via Whisper.cpp or faster-whisper without any limits.",
    pricingDetails: "100% Free for self-hosting. OpenAI API is $0.006 per minute if using their hosted endpoint.",
    summary: "Whisper Large v3 is the preeminent open-source speech recognition model in existence, delivering near-human transcription accuracy across 99+ languages with timestamp synchronization.",
    bestFor: "Local Offline Speech-to-Text, Video Subtitling, Meeting Transcription & Translation",
    contextWindow: "30-second audio chunking",
    parameterCount: "1.55 Billion parameters",
    license: "MIT License (100% Free & Open Source)",
    benchmarkScore: {
      overallRating: 9.8,
    },
    strengths: [
      "MIT license guarantees 100% free commercial and personal usage forever",
      "Works 100% offline with zero internet connection required, safeguarding sensitive data",
      "Superb accuracy in transcribing technical jargon, accents, and noisy environments",
      "Runs efficiently on CPU or GPU with optimized runtimes like faster-whisper",
    ],
    weaknesses: [
      "Audio transcription only; does not generate speech (TTS)",
      "Requires audio files to be pre-recorded or streamed via microphone interface",
    ],
    officialUrl: "https://github.com/openai/whisper",
    documentationUrl: "https://platform.openai.com/docs/guides/speech-to-text",
    releaseDate: "2023-11-06",
    lastUpdated: "2026-09-09",
    popularityRank: 17,
    tags: ["Speech to Text", "100% Free", "Open Source", "MIT License", "Transcription", "Whisper"],
  },
  {
    id: "fingpt-market-ai",
    slug: "fingpt-market-ai",
    name: "FinGPT Financial Intelligence",
    developer: "AI4Finance Foundation",
    category: "Finance & Market",
    pricingType: "100% Free",
    is100PercentFree: true,
    hasFreeTrial: true,
    freeTierDetails: "100% open-source on GitHub and Hugging Face under MIT license for automated financial sentiment and trading analysis.",
    pricingDetails: "100% Free open-source financial LLM suite. Zero subscription fees.",
    summary: "FinGPT is an open-source, democratized financial LLM designed specifically for processing real-time stock news, corporate SEC filings, market sentiment, and macroeconomic signals.",
    bestFor: "Quantitative Financial Sentiment Analysis, SEC 10-K Filings Extraction & Algorithmic Market Signals",
    contextWindow: "32,000 tokens",
    parameterCount: "7B to 13B fine-tuned parameters",
    license: "MIT License (Permissive Open Source)",
    benchmarkScore: {
      overallRating: 9.4,
    },
    strengths: [
      "100% open source and transparent — no high-cost Bloomberg terminal subscriptions needed",
      "Trained on historical financial disclosures, earnings call transcripts, and market news",
      "Enables automated news sentiment scoring for algorithmic trading strategies",
      "Easily fine-tuned on custom portfolio assets and trading journals",
    ],
    weaknesses: [
      "Requires basic Python scripting skills to configure automated data ingestion pipelines",
      "Lower general-knowledge reasoning compared to frontier models like DeepSeek-R1",
    ],
    officialUrl: "https://github.com/AI4Finance-Foundation/FinGPT",
    documentationUrl: "https://huggingface.co/AI4Finance",
    releaseDate: "2023-06-15",
    lastUpdated: "2026-09-10",
    popularityRank: 18,
    tags: ["Finance", "100% Free", "Open Source", "Sentiment", "Trading AI", "MIT"],
  },
];

// Helper functions for quick querying
export function getFeaturedAIModels(): AIModel[] {
  return AI_MODELS.filter((m) => m.isFeatured);
}

export function getFreeAIModels(): AIModel[] {
  return AI_MODELS.filter((m) => m.is100PercentFree);
}

export function getFreeTrialAIModels(): AIModel[] {
  return AI_MODELS.filter((m) => m.hasFreeTrial);
}

export function getAIModelsByCategory(category: AICategory): AIModel[] {
  return AI_MODELS.filter((m) => m.category === category);
}

export function getBestInClassLeaderboard(): { category: AICategory; model: AIModel; badge: string }[] {
  const leaderboardCategories: { category: AICategory; slug: string; badge: string }[] = [
    { category: "Reasoning & Math", slug: "deepseek-r1", badge: "#1 Best in Mathematics & Reasoning (100% Free)" },
    { category: "Coding", slug: "claude-3-5-sonnet", badge: "#1 Best for Software Development & Architecture" },
    { category: "Writing & Research", slug: "gemini-1-5-pro", badge: "#1 Best for 2M Long-Context Document Analysis" },
    { category: "Image Generation", slug: "flux-1-schnell", badge: "#1 Best Open-Source Image Generator (100% Free)" },
    { category: "Video Generation", slug: "kling-ai-1-5", badge: "#1 Best Daily Free AI Video Generation" },
    { category: "Audio & Voice", slug: "elevenlabs-multilingual-v2", badge: "#1 Best Voice Realism & Dubbing" },
    { category: "Productivity & Agents", slug: "perplexity-ai", badge: "#1 Best for Real-Time Cited Research" },
    { category: "Finance & Market", slug: "fingpt-market-ai", badge: "#1 Best Open Financial Sentiment AI" },
  ];

  return leaderboardCategories
    .map((item) => {
      const model = AI_MODELS.find((m) => m.slug === item.slug);
      return model ? { category: item.category, model, badge: item.badge } : null;
    })
    .filter(Boolean) as { category: AICategory; model: AIModel; badge: string }[];
}
