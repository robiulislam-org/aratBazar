# AratBazar — Institutional Financial Intelligence & Market Terminal

**Live Domain:** [aratbazar.com](https://aratbazar.com)

AratBazar is an institutional-grade, multi-asset financial terminal and macroeconomic intelligence platform built for active traders, asset managers, and capital allocators worldwide.

---

## ⚡ Key Highlights & Architecture

- **🤖 Automated Daily AI Market Intelligence:** Fully automated daily publishing engine powered by Google Gemini AI and GitHub Actions cron (`0 6 * * *` UTC / 12:00 PM BST). Analyzes trending market movements, macroeconomic catalysts, and publishes fresh dispatches daily without any manual effort.
- **TradingView Advanced Interactive Charting:** Multi-asset real-time technical analysis with RSI, MACD, Volume, and full indicator suite.
- **Continuous Live Ticker Tape:** Real-time pricing ribbon for Wall Street (S&P 500, Nasdaq, Dow), Crypto (BTC, ETH, SOL), Commodities (Gold, WTI Oil), and Forex (EUR/USD, USD/JPY).
- **Macro Economic Calendar:** Sovereign central bank interest rate decisions, CPI inflation metrics, and Non-Farm Payroll releases.
- **Quantitative Risk & Position Sizing Suite:** Real-time stop-loss calculation, position sizing, and compound ROI wealth engines.
- **Dedicated Intelligence Archive (`/news` & `/news/[slug]`):** SEO-optimized dedicated article pages with JSON-LD Schema.org `NewsArticle` rich snippets for maximum Google Search & Discover ranking.
- **Google AdSense Ready:** High-CTR compliant ad slot containers (`AdBanner.tsx`), automatic `adsbygoogle.js` script injection via `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, and full legal compliance framework (`/privacy-policy`, `/terms`, `/disclaimer`, `/about`, `/contact`).
- **SEO & Search Indexing:** Dynamic sitemap (`/sitemap.xml`), robots.txt with `Mediapartners-Google` crawler permissions, and canonical meta tags.

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file locally, or add these to **Vercel** and **GitHub Repository Secrets**:

| Variable Name | Where to set | Description |
|---|---|---|
| `GEMINI_API_KEY` | **GitHub Repo Secrets** | Free API key from [Google AI Studio](https://aistudio.google.com/) for automated daily content generation |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | **Vercel Environment Variables** | Your Google AdSense Publisher ID (e.g., `ca-pub-XXXXXXXXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | **Vercel Environment Variables** | (Optional) Verification token from Google Search Console |

### 🔑 Setting up Daily AI Auto-Updates:
1. Go to your GitHub repository: [robiulislam-org/aratBazar](https://github.com/robiulislam-org/aratBazar)
2. Click **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
3. Name: `GEMINI_API_KEY`
4. Secret: Paste your Google AI Studio API key.
5. Daily at 06:00 UTC (12:00 PM Bangladesh Time), GitHub Actions runs `scripts/generate-daily-content.js`, generates fresh market reports, commits to `main`, and Vercel automatically deploys the live update!

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, Server Components, SSG)
- **Styling:** Tailwind CSS v4 (Dark Terminal Architecture)
- **AI Automation:** Google Gemini AI API (`gemini-1.5-flash`)
- **Icons:** Lucide React
- **Hosting:** Vercel (Edge CDN, Automated SSL)
- **CI/CD:** GitHub Actions

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/robiulislam-org/aratBazar.git

# Install dependencies
npm install

# Generate daily content manually (optional, requires GEMINI_API_KEY)
npm run generate:content

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the terminal.
