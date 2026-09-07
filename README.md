# AratBazar — Institutional Financial Intelligence & Market Terminal

**Live Domain:** [aratbazar.com](https://aratbazar.com)

AratBazar is an institutional-grade, multi-asset financial terminal and macroeconomic intelligence platform built for active traders, asset managers, and capital allocators worldwide.

---

## ⚡ Key Highlights & Architecture

- **🤖 100% Free Daily Auto-Pilot Sync (Zero API Keys):** Runs automatically via GitHub Actions cron every day at 06:00 UTC (12:00 PM BST). Fetches real-time market data from open public feeds (Yahoo Finance RSS, Alternative.me Fear & Greed, and Binance public pricing), updates market quotes and dispatches, and redeploys to Vercel automatically. **No API keys, no paid subscriptions, 100% free forever.**
- **TradingView Advanced Interactive Charting:** Multi-asset real-time technical analysis with RSI, MACD, Volume, and full indicator suite.
- **Continuous Live Ticker Tape:** Real-time pricing ribbon for Wall Street (S&P 500, Nasdaq, Dow), Crypto (BTC, ETH, SOL), Commodities (Gold, WTI Oil), and Forex (EUR/USD, USD/JPY).
- **Macro Economic Calendar:** Sovereign central bank interest rate decisions, CPI inflation metrics, and Non-Farm Payroll releases.
- **Quantitative Risk & Position Sizing Suite:** Real-time stop-loss calculation, position sizing, and compound ROI wealth engines.
- **Dedicated Intelligence Archive (`/news` & `/news/[slug]`):** SEO-optimized dedicated article pages with JSON-LD Schema.org `NewsArticle` rich snippets for maximum Google Search & Discover ranking.
- **Google AdSense Ready:** High-CTR compliant ad slot containers (`AdBanner.tsx`), automatic `adsbygoogle.js` script injection via `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, and full legal compliance framework (`/privacy-policy`, `/terms`, `/disclaimer`, `/about`, `/contact`).
- **SEO & Search Indexing:** Dynamic sitemap (`/sitemap.xml`), robots.txt with `Mediapartners-Google` crawler permissions, and canonical meta tags.

---

## ⚙️ Environment Variables (Optional)

You do **NOT** need any API key for daily content updates.

| Variable Name | Where to set | Description |
|---|---|---|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | **Vercel Environment Variables** | Your Google AdSense Publisher ID (e.g., `ca-pub-XXXXXXXXXXXXXXXX`), required only when you want to show Google Ads |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | **Vercel Environment Variables** | (Optional) Verification token from Google Search Console |

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, Server Components, SSG)
- **Styling:** Tailwind CSS v4 (Dark Terminal Architecture)
- **Live Data Feeds:** Public Market RSS & Public Financial Tickers (100% Free, Zero Key)
- **Icons:** Lucide React
- **Hosting:** Vercel (Edge CDN, Automated SSL)
- **CI/CD Automation:** GitHub Actions

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/robiulislam-org/aratBazar.git

# Install dependencies
npm install

# Run daily content sync manually (100% free, zero keys)
npm run generate:content

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the terminal.
