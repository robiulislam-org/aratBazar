import { FINANCIAL_NEWS } from "@/data/newsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, User, Calendar, Tag, ArrowLeft, Share2, ShieldAlert, TrendingUp, ArrowRight } from "lucide-react";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FINANCIAL_NEWS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = FINANCIAL_NEWS.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | AratBazar" };

  return {
    title: `${article.title} | AratBazar Market Intelligence`,
    description: article.excerpt,
    keywords: [
      ...article.tags,
      "market analysis",
      "trading",
      "financial news",
      "aratbazar",
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      url: `https://aratbazar.com/news/${article.slug}`,
      siteName: "AratBazar",
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `https://aratbazar.com/news/${article.slug}`,
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Stocks: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  Crypto: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  Forex: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  Commodities: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  Economy: "text-teal-400 bg-teal-500/10 border-teal-500/30",
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = FINANCIAL_NEWS.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  const relatedArticles = FINANCIAL_NEWS.filter(
    (a) => a.slug !== slug && (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
  ).slice(0, 3);

  const fallbackRelated = FINANCIAL_NEWS.filter((a) => a.slug !== slug).slice(0, 3);
  const displayRelated = relatedArticles.length >= 2 ? relatedArticles : fallbackRelated;

  // JSON-LD Structured Data for Google (Article Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "AratBazar Intelligence",
        url: "https://aratbazar.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "AratBazar",
      url: "https://aratbazar.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aratbazar.com/favicon.ico",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aratbazar.com/news/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    url: `https://aratbazar.com/news/${article.slug}`,
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
          <span className="text-slate-600">/</span>
          <Link href="/news" className="hover:text-emerald-400 transition">Intelligence</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300 truncate max-w-xs">{article.category}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main Article Content (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="border-b border-slate-800 pb-6">
              <div className="flex items-center space-x-3 text-xs mb-3">
                <span
                  className={`rounded border px-2.5 py-0.5 font-mono font-semibold uppercase ${
                    CATEGORY_COLORS[article.category] ?? "text-slate-400 bg-slate-800 border-slate-700"
                  }`}
                >
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <Calendar className="h-3 w-3" />
                  {article.publishedAt}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {article.title}
              </h1>

              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                {article.excerpt}
              </p>

              {/* Author bar */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-900 to-slate-800 text-emerald-400 font-bold border border-slate-700 text-sm">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">{article.author}</span>
                    <span className="text-xs text-slate-400">{article.authorRole} · AratBazar Intelligence</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition">
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Key Metrics Dashboard inside article */}
            {article.keyMetrics && (
              <div className="my-6 rounded-xl border border-slate-800 bg-[#0c121e] p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  Executive Market Summary
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {article.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="rounded-lg bg-slate-900/90 border border-slate-800 p-2.5 text-center">
                      <span className="text-xs text-slate-400 block truncate">{metric.label}</span>
                      <span className="font-mono text-base font-bold text-emerald-400 mt-0.5 block">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Article Top Ad Placement */}
            <AdBanner format="in-feed" label="SPONSORED MARKET INSIGHTS" />

            {/* Article Body */}
            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6 mt-4">
              <div
                className="space-y-4"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(
                      /### (.*?)\n/g,
                      '<h3 class="text-lg font-bold text-white mt-8 mb-3 pb-2 border-b border-slate-800">$1</h3>'
                    )
                    .replace(
                      /"(.*?)"/g,
                      '<blockquote class="border-l-4 border-emerald-400 pl-4 italic text-slate-300 my-5 bg-emerald-950/20 py-3 pr-3 rounded-r-lg">$1</blockquote>'
                    )
                    .replace(/\n\n/g, '</p><p class="text-slate-300 leading-relaxed text-sm mt-4">')
                    .replace(/\n/g, " ")
                    .replace(
                      /^/,
                      '<p class="text-slate-300 leading-relaxed text-sm">'
                    )
                    .replace(/$/, "</p>"),
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-slate-400" />
              <span className="text-xs text-slate-400 mr-1">Topics:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 hover:border-slate-700 transition cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Post Article Ad */}
            <div className="my-8">
              <AdBanner format="horizontal" label="RECOMMENDED FINANCIAL PARTNER" />
            </div>

            {/* Article Disclaimer */}
            <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-4 text-xs text-slate-400 flex items-start gap-3">
              <ShieldAlert className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
              <p>
                <strong className="text-amber-400">Risk Disclosure:</strong> This analysis is
                prepared for institutional and retail educational awareness only. Content does not
                constitute financial advice or a solicitation to trade. AratBazar research team
                members may hold positions in securities mentioned. Past performance is not
                indicative of future results. See our full{" "}
                <Link href="/disclaimer" className="text-emerald-400 underline hover:text-emerald-300">
                  Financial Risk Disclaimer
                </Link>{" "}
                before making any investment decisions.
              </p>
            </div>

            {/* Back navigation */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/news"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Market Intelligence</span>
              </Link>
            </div>
          </div>

          {/* Sidebar (1 Col) */}
          <div className="space-y-6 lg:col-span-1">
            {/* Related Articles */}
            <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5 sticky top-24">
              <h3 className="text-sm font-bold text-white pb-3 border-b border-slate-800 uppercase tracking-wide">
                Related Market Dispatches
              </h3>
              <div className="mt-4 space-y-4">
                {displayRelated.map((rel) => (
                  <div key={rel.id} className="group border-b border-slate-800/60 pb-4 last:border-none last:pb-0">
                    <span
                      className={`text-[10px] font-mono uppercase font-semibold ${
                        CATEGORY_COLORS[rel.category]?.split(" ")[0] ?? "text-slate-400"
                      }`}
                    >
                      {rel.category}
                    </span>
                    <Link href={`/news/${rel.slug}`}>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition mt-1 line-clamp-2 leading-relaxed">
                        {rel.title}
                      </h4>
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] text-slate-400">{rel.publishedAt}</span>
                      <Link
                        href={`/news/${rel.slug}`}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5 transition"
                      >
                        Read <ArrowRight className="h-2.5 w-2.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/news"
                className="mt-4 w-full flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition"
              >
                View All Articles
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Sidebar Ad Placement */}
            <AdBanner format="sidebar" label="SPONSORED SIDEBAR" />
          </div>
        </div>
      </div>
    </>
  );
}
