# AratBazar — Global Winning Product Hunter & Wholesale Sourcing Intelligence

**Live Domain:** [aratbazar.com](https://aratbazar.com)

AratBazar is the premier global winning product hunter, lowest factory supplier finder, and e-commerce seller intelligence directory. Built for online merchants, dropshippers, and smart shoppers to discover high-margin viral products with verified direct sourcing links (AliExpress, CJ Dropshipping, 1688, Temu).

---

## ⚡ Key Highlights & Architecture

- **🤖 100% Automated Daily Product Research:** Runs automatically via GitHub Actions cron. Discovers new viral products, calculates real-time profit margin spreads, and updates factory supplier links with zero manual maintenance and **zero API keys required**.
- **🛍️ Modern E-Commerce UI:** High-converting product cards with image previews, category filters, trend badges, verified factory sourcing links, and retail competitor benchmarks.
- **📈 Live Wholesale Sourcing Ticker Tape:** Real-time scrolling ribbon showcasing wholesale cost spreads and gross profit margins across trending products.
- **🧮 Interactive Dropshipping Profit Calculator:** Allows sellers to calculate true net profit, gross margins, transaction fees, and breakeven ROAS before launching ad campaigns.
- **📊 Deep-Dive Seller Dossiers (`/product/[slug]`):** Detailed intelligence for each winning item: why it sells, target customer avatars, ready-to-test TikTok & Reels video ad hooks, and supplier rate comparison tables.
- **📂 Dedicated Category Hubs (`/category/[slug]`):** SEO-optimized category archives for Tech Gadgets, Kitchen Innovations, Health & Beauty, Car & Outdoor, Everyday Utilities, and Fitness.
- **💰 Google AdSense & Affiliate Monetization Ready:** Fully compliant with FTC Affiliate Disclosure standards, Google AdSense ad slots (`AdBanner.tsx`), and Google Product Schema (`JSON-LD`) for rich snippet search results.
- **🚀 Ultra-Fast Next.js App Router:** Server-Side Generation (SSG), Tailwind CSS v4, Lucide React icons, and automated Vercel Edge CDN deployment.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, Server Components, SSG)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Data Pipeline:** Automated Node.js market hunter (`scripts/auto-product-hunter.js`)
- **CI/CD:** GitHub Actions Cron
- **Hosting:** Vercel Edge CDN

---

## 🚀 Local Commands

```bash
# Install dependencies
npm install

# Run automated winning product hunter manually
npm run generate:products

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view AratBazar.
