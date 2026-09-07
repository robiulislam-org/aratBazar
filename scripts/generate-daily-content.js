/**
 * AratBazar — Daily Content Generation Script
 * ============================================
 * Powered by Google Gemini AI API
 * Runs via GitHub Actions every day at 06:00 UTC
 *
 * This script:
 * 1. Calls Gemini AI to generate fresh market analysis articles
 * 2. Updates market data (prices, fear/greed index, etc.)
 * 3. Updates economic calendar events
 * 4. Writes updated TypeScript data files to src/data/
 * 5. GitHub Actions then commits + pushes → Vercel auto-deploys
 *
 * Required environment variable: GEMINI_API_KEY
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ─── Configuration ──────────────────────────────────────────────────────────
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const TODAY = new Date();
const TODAY_STR = TODAY.toISOString().split("T")[0]; // YYYY-MM-DD
const YESTERDAY_STR = new Date(TODAY - 86400000).toISOString().split("T")[0];

// Day of week for content variety
const DAY_OF_WEEK = TODAY.toLocaleDateString("en-US", { weekday: "long" });
const MONTH_YEAR = TODAY.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

console.log(`\n🚀 AratBazar Daily Content Generator`);
console.log(`📅 Generating content for: ${TODAY_STR} (${DAY_OF_WEEK})`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

// ─── Helper: HTTP POST to Gemini API ────────────────────────────────────────
function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      },
    });

    const url = new URL(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(`Gemini API Error: ${parsed.error.message}`));
            return;
          }
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!text) {
            reject(new Error("No text in Gemini response"));
            return;
          }
          // Parse the JSON response from Gemini
          const jsonMatch = text.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
          if (!jsonMatch) {
            reject(new Error("No JSON found in Gemini response"));
            return;
          }
          resolve(JSON.parse(jsonMatch[0]));
        } catch (e) {
          reject(new Error(`Parse error: ${e.message}\nRaw: ${data.substring(0, 500)}`));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ─── Prompt 1: Generate Daily News Articles ─────────────────────────────────
async function generateNewsArticles() {
  console.log("📰 Generating daily market intelligence articles...");

  const prompt = `
You are AratBazar's chief financial editor generating daily institutional market intelligence for ${TODAY_STR} (${DAY_OF_WEEK}, ${MONTH_YEAR}).

Generate EXACTLY 6 professional market analysis articles as a JSON array. Each article must be completely unique, analytically rigorous, and directly useful to professional traders.

IMPORTANT RULES:
- publishedAt must be "${TODAY_STR}" for articles 1-4 (today's top stories)
- publishedAt must be "${YESTERDAY_STR}" for articles 5-6 (yesterday's analysis)  
- Each slug must be unique and SEO-friendly (lowercase, hyphens only)
- Content must be specific, detailed, and contain real market mechanics knowledge
- Vary the categories: mix Stocks, Crypto, Forex, Commodities, Economy
- Include realistic-sounding price data (consistent with late 2025/2026 market environment)

Return a pure JSON array with this exact structure:
[
  {
    "id": "1",
    "slug": "unique-seo-friendly-slug-${TODAY_STR}",
    "title": "Specific Detailed Article Title with Key Market Metrics",
    "excerpt": "2-3 sentence professional summary for traders. Should include specific data points.",
    "content": "### Section Header 1\\n\\nDetailed paragraph with institutional analysis, order flow data, specific levels.\\n\\n### Section Header 2\\n\\nAnother detailed section with technical analysis or fundamental drivers.\\n\\n### Section Header 3\\n\\nTrading implications, risk factors, and outlook for professional traders.",
    "category": "Stocks",
    "author": "Marcus Vance",
    "authorRole": "Chief Market Strategist",
    "publishedAt": "${TODAY_STR}",
    "readTime": "5 min read",
    "tags": ["S&P 500", "Nasdaq", "Technology", "Earnings"],
    "keyMetrics": [
      {"label": "S&P 500 Level", "value": "+0.X%"},
      {"label": "Volume", "value": "$XXB"},
      {"label": "Key Level", "value": "X,XXX"}
    ]
  }
]

Use these authors and roles:
- Marcus Vance — Chief Market Strategist (Stocks, Economy)
- Elena Rostova — Head of Digital Asset Research (Crypto)
- David Sterling — Senior Macro Commodity Analyst (Commodities, Forex)
- Julian Thorne — Quantitative Risk Architect (Risk, Strategy, Forex)

Today's required categories: Write 2 Stocks articles, 1 Crypto, 1 Forex, 1 Commodities, 1 Economy.
Generate realistic content reflecting current global market conditions as of ${MONTH_YEAR}.
`;

  const articles = await callGemini(prompt);
  console.log(`   ✅ Generated ${articles.length} articles`);
  return articles;
}

// ─── Prompt 2: Generate Market Data ─────────────────────────────────────────
async function generateMarketData() {
  console.log("📊 Generating daily market data snapshot...");

  const prompt = `
Generate realistic financial market data for ${TODAY_STR} (${DAY_OF_WEEK}).
Return pure JSON with this exact structure. Use realistic values consistent with late 2025/2026 global markets.

{
  "tickerItems": [
    {"symbol": "SPX", "name": "S&P 500", "price": "X,XXX.XX", "change": "+/-XX.XX", "changePercent": X.XX, "high24h": "X,XXX.XX", "low24h": "X,XXX.XX", "volume": "$XXB", "category": "indices"},
    {"symbol": "NDX", "name": "Nasdaq 100", "price": "XX,XXX.XX", "change": "+/-XXX.XX", "changePercent": X.XX, "high24h": "XX,XXX.XX", "low24h": "XX,XXX.XX", "volume": "$XXB", "category": "indices"},
    {"symbol": "DJI", "name": "Dow Jones", "price": "XX,XXX.XX", "change": "+/-XXX.XX", "changePercent": X.XX, "high24h": "XX,XXX.XX", "low24h": "XX,XXX.XX", "volume": "$XXB", "category": "indices"},
    {"symbol": "BTC/USD", "name": "Bitcoin", "price": "XX,XXX.XX", "change": "+/-X,XXX.XX", "changePercent": X.XX, "high24h": "XX,XXX.XX", "low24h": "XX,XXX.XX", "volume": "$XXB", "marketCap": "$X.XXT", "category": "crypto"},
    {"symbol": "ETH/USD", "name": "Ethereum", "price": "X,XXX.XX", "change": "+/-XXX.XX", "changePercent": X.XX, "high24h": "X,XXX.XX", "low24h": "X,XXX.XX", "volume": "$XXB", "marketCap": "$XXXB", "category": "crypto"},
    {"symbol": "SOL/USD", "name": "Solana", "price": "XXX.XX", "change": "+/-XX.XX", "changePercent": X.XX, "high24h": "XXX.XX", "low24h": "XXX.XX", "volume": "$X.XB", "marketCap": "$XXB", "category": "crypto"},
    {"symbol": "NVDA", "name": "Nvidia Corp", "price": "XXX.XX", "change": "+/-X.XX", "changePercent": X.XX, "high24h": "XXX.XX", "low24h": "XXX.XX", "volume": "$XXB", "marketCap": "$X.XXT", "category": "stocks"},
    {"symbol": "AAPL", "name": "Apple Inc", "price": "XXX.XX", "change": "+/-X.XX", "changePercent": X.XX, "high24h": "XXX.XX", "low24h": "XXX.XX", "volume": "$XXB", "marketCap": "$X.XXT", "category": "stocks"},
    {"symbol": "TSLA", "name": "Tesla Inc", "price": "XXX.XX", "change": "+/-X.XX", "changePercent": -X.XX, "high24h": "XXX.XX", "low24h": "XXX.XX", "volume": "$XXB", "marketCap": "$X.XXT", "category": "stocks"},
    {"symbol": "XAU/USD", "name": "Gold Spot", "price": "X,XXX.XX", "change": "+/-XX.XX", "changePercent": X.XX, "high24h": "X,XXX.XX", "low24h": "X,XXX.XX", "volume": "$XXB", "category": "commodities"},
    {"symbol": "WTI/USD", "name": "Crude Oil", "price": "XX.XX", "change": "+/-X.XX", "changePercent": -X.XX, "high24h": "XX.XX", "low24h": "XX.XX", "volume": "$XXB", "category": "commodities"},
    {"symbol": "EUR/USD", "name": "Euro / US Dollar", "price": "X.XXXX", "change": "+/-X.XXXX", "changePercent": X.XX, "high24h": "X.XXXX", "low24h": "X.XXXX", "volume": "$XXXB", "category": "forex"},
    {"symbol": "USD/JPY", "name": "US Dollar / Yen", "price": "XXX.XX", "change": "+/-X.XX", "changePercent": -X.XX, "high24h": "XXX.XX", "low24h": "XXX.XX", "volume": "$XXB", "category": "forex"}
  ],
  "topGainers": [
    {"symbol": "SYMBOL", "name": "Name", "price": "$XXX.XX", "change": "+X.XX%", "changePercent": X.XX, "high24h": "$XXX.XX", "low24h": "$XXX.XX", "volume": "$XXB", "category": "crypto"},
    {"symbol": "SYMBOL", "name": "Name", "price": "$XXX.XX", "change": "+X.XX%", "changePercent": X.XX, "high24h": "$XXX.XX", "low24h": "$XXX.XX", "volume": "$XXB", "category": "stocks"},
    {"symbol": "SYMBOL", "name": "Name", "price": "$XXX.XX", "change": "+X.XX%", "changePercent": X.XX, "high24h": "$XXX.XX", "low24h": "$XXX.XX", "volume": "$XXB", "category": "crypto"},
    {"symbol": "SYMBOL", "name": "Name", "price": "$XXX.XX", "change": "+X.XX%", "changePercent": X.XX, "high24h": "$XXX.XX", "low24h": "$XXX.XX", "volume": "$XXB", "category": "stocks"},
    {"symbol": "SYMBOL", "name": "Name", "price": "$XXX.XX", "change": "+X.XX%", "changePercent": X.XX, "high24h": "$XXX.XX", "low24h": "$XXX.XX", "volume": "$XXB", "category": "crypto"}
  ],
  "topLosers": [
    {"symbol": "SYMBOL", "name": "Name", "price": "$XXX.XX", "change": "-X.XX%", "changePercent": -X.XX, "high24h": "$XXX.XX", "low24h": "$XXX.XX", "volume": "$XXB", "category": "stocks"},
    {"symbol": "SYMBOL", "name": "Name", "price": "$XX.XX", "change": "-X.XX%", "changePercent": -X.XX, "high24h": "$XX.XX", "low24h": "$XX.XX", "volume": "$XXB", "category": "commodities"},
    {"symbol": "SYMBOL", "name": "Name", "price": "$XX.XX", "change": "-X.XX%", "changePercent": -X.XX, "high24h": "$XX.XX", "low24h": "$XX.XX", "volume": "$XXB", "category": "stocks"},
    {"symbol": "SYMBOL", "name": "Name", "price": "XXX.XX", "change": "-X.XX%", "changePercent": -X.XX, "high24h": "XXX.XX", "low24h": "XXX.XX", "volume": "$XXB", "category": "forex"}
  ],
  "marketPulse": {
    "fearGreedIndex": XX,
    "fearGreedLabel": "Fear|Neutral|Greed|Extreme Greed",
    "dxyIndex": "XXX.XX",
    "dxyChange": "+/-X.XX%",
    "tenYearYield": "X.XX%",
    "tenYearChange": "+/-X.XX%",
    "marketSentiment": "Bullish Accumulation|Bearish Distribution|Neutral Consolidation|Risk-Off Mode",
    "wallStreetStatus": "Open (Regular Session)|Pre-Market Session|After-Hours Trading|Market Closed (Weekend)"
  }
}

Today is ${DAY_OF_WEEK}. If it's Saturday or Sunday, wallStreetStatus should be "Market Closed (Weekend)".
Make the data internally consistent (gainers/losers should match ticker items).
`;

  const data = await callGemini(prompt);
  console.log(`   ✅ Market data generated`);
  return data;
}

// ─── Prompt 3: Generate Economic Calendar ────────────────────────────────────
async function generateEconomicCalendar() {
  console.log("📅 Generating economic calendar events...");

  const prompt = `
Generate realistic economic calendar events for the trading week containing ${TODAY_STR}.
Return a pure JSON array of 8 events. Mix HIGH, MEDIUM, and LOW impact events.
Include events from USD, EUR, GBP, JPY currencies.

[
  {
    "id": "e1",
    "time": "HH:MM GMT",
    "currency": "USD|EUR|GBP|JPY",
    "event": "Full official event name",
    "impact": "HIGH|MEDIUM|LOW",
    "actual": "X.X% or XX or -- (-- if upcoming/not yet released)",
    "forecast": "X.X% or XX or --",
    "previous": "X.X% or XX or --"
  }
]

Include these types of events (use real names):
- FOMC/Fed related (HIGH impact)
- CPI/Inflation data (HIGH impact)  
- Non-Farm Payrolls (HIGH impact)
- GDP releases (HIGH impact)
- PMI data (MEDIUM impact)
- Trade Balance (MEDIUM impact)
- Retail Sales (MEDIUM impact)
- Consumer Confidence (LOW/MEDIUM impact)

For events that have already happened this week, provide realistic actual values.
For upcoming events, use "--" for actual.
`;

  const events = await callGemini(prompt);
  console.log(`   ✅ Generated ${events.length} calendar events`);
  return events;
}

// ─── Write TypeScript Data Files ─────────────────────────────────────────────
function writeNewsData(articles) {
  const content = `// AUTO-GENERATED by AratBazar Daily Content Bot
// Last updated: ${TODAY_STR} at ${new Date().toISOString()}
// DO NOT EDIT MANUALLY — This file is overwritten daily by GitHub Actions

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Stocks' | 'Crypto' | 'Forex' | 'Commodities' | 'Economy';
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  keyMetrics?: { label: string; value: string }[];
}

export const FINANCIAL_NEWS: NewsArticle[] = ${JSON.stringify(articles, null, 2)};
`;

  fs.writeFileSync(
    path.join(__dirname, "../src/data/newsData.ts"),
    content,
    "utf-8"
  );
  console.log("   ✅ Wrote src/data/newsData.ts");
}

function writeMarketData(data) {
  const content = `// AUTO-GENERATED by AratBazar Daily Content Bot
// Last updated: ${TODAY_STR} at ${new Date().toISOString()}
// DO NOT EDIT MANUALLY — This file is overwritten daily by GitHub Actions

export interface MarketAsset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: number;
  high24h: string;
  low24h: string;
  volume: string;
  marketCap?: string;
  category: 'indices' | 'stocks' | 'crypto' | 'commodities' | 'forex';
}

export const TICKER_ITEMS: MarketAsset[] = ${JSON.stringify(data.tickerItems, null, 2)};

export const TOP_GAINERS: MarketAsset[] = ${JSON.stringify(data.topGainers, null, 2)};

export const TOP_LOSERS: MarketAsset[] = ${JSON.stringify(data.topLosers, null, 2)};

export const MARKET_PULSE = ${JSON.stringify(data.marketPulse, null, 2)};
`;

  fs.writeFileSync(
    path.join(__dirname, "../src/data/marketData.ts"),
    content,
    "utf-8"
  );
  console.log("   ✅ Wrote src/data/marketData.ts");
}

function writeEconomicCalendar(events) {
  const content = `// AUTO-GENERATED by AratBazar Daily Content Bot
// Last updated: ${TODAY_STR} at ${new Date().toISOString()}
// DO NOT EDIT MANUALLY — This file is overwritten daily by GitHub Actions

export interface EconomicEvent {
  id: string;
  time: string;
  currency: string;
  event: string;
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
  actual: string;
  forecast: string;
  previous: string;
}

export const ECONOMIC_EVENTS: EconomicEvent[] = ${JSON.stringify(events, null, 2)};
`;

  fs.writeFileSync(
    path.join(__dirname, "../src/data/economicCalendar.ts"),
    content,
    "utf-8"
  );
  console.log("   ✅ Wrote src/data/economicCalendar.ts");
}

// ─── Fallback: Use Previous Data on API Error ─────────────────────────────
function updateTimestampOnly() {
  console.log("⚠️  Updating timestamps on existing data files (fallback mode)");
  const files = ["newsData", "marketData", "economicCalendar"];
  files.forEach((file) => {
    const filePath = path.join(__dirname, `../src/data/${file}.ts`);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf-8");
      content = content.replace(
        /\/\/ Last updated:.*/,
        `// Last updated: ${TODAY_STR} at ${new Date().toISOString()}`
      );
      fs.writeFileSync(filePath, content, "utf-8");
    }
  });
}

// ─── Main Execution ───────────────────────────────────────────────────────────
async function main() {
  if (!GEMINI_API_KEY) {
    console.error(
      "❌ ERROR: GEMINI_API_KEY environment variable is not set!\n" +
        "   Set it in GitHub repository secrets:\n" +
        "   Settings → Secrets and variables → Actions → New repository secret\n" +
        "   Name: GEMINI_API_KEY\n" +
        "   Value: Your Google AI Studio API key\n"
    );
    // Don't fail the build — just skip content generation
    process.exit(0);
  }

  try {
    // Generate all content in parallel for speed
    console.log("⚡ Calling Gemini AI (parallel requests)...\n");
    const [articles, marketData, calendarEvents] = await Promise.all([
      generateNewsArticles(),
      generateMarketData(),
      generateEconomicCalendar(),
    ]);

    console.log("\n💾 Writing data files...");
    writeNewsData(articles);
    writeMarketData(marketData);
    writeEconomicCalendar(calendarEvents);

    console.log("\n✅ Daily content generation complete!");
    console.log(`   📰 Articles: ${articles.length} new market intelligence pieces`);
    console.log(`   📊 Market Data: ${marketData.tickerItems?.length || 13} assets updated`);
    console.log(`   📅 Calendar: ${calendarEvents.length} economic events`);
    console.log(`   🕐 Timestamp: ${new Date().toISOString()}`);
    console.log("\n🚀 Vercel will auto-deploy the updated content!\n");
  } catch (error) {
    console.error(`\n❌ Content generation failed: ${error.message}`);
    console.error("   Falling back to timestamp update to trigger redeploy...");
    updateTimestampOnly();
    // Exit 0 so GitHub Actions doesn't fail the workflow
    process.exit(0);
  }
}

main();
