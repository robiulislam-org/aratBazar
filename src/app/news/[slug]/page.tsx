import { FINANCIAL_NEWS } from "@/data/newsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, User, Calendar, Tag, ArrowLeft, Share2, ShieldAlert } from "lucide-react";
import AdBanner from "@/components/AdBanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FINANCIAL_NEWS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = FINANCIAL_NEWS.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | AratBazar" };

  return {
    title: `${article.title} | AratBazar Intelligence`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = FINANCIAL_NEWS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = FINANCIAL_NEWS.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Back button */}
      <Link
        href="/#news"
        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Market Intelligence</span>
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Main Article Content (2 Cols) */}
        <div className="lg:col-span-2">
          <div className="border-b border-slate-800 pb-6">
            <div className="flex items-center space-x-3 text-xs mb-3">
              <span className="rounded bg-cyan-500/20 px-2.5 py-0.5 font-mono font-semibold uppercase text-cyan-400 border border-cyan-500/30">
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-400 font-bold border border-slate-700">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">{article.author}</span>
                  <span className="text-xs text-slate-400">{article.authorRole}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 hover:text-white transition">
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics Dashboard inside article */}
          {article.keyMetrics && (
            <div className="my-6 rounded-xl border border-slate-800 bg-[#0c121e] p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
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
          <AdBanner format="in-feed" label="SPONSORED INSIGHTS" />

          {/* Article Body */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/### (.*?)\n/g, '<h3 class="text-lg font-bold text-white mt-6 mb-2">$1</h3>')
                  .replace(/"(.*?)"/g, '<blockquote class="border-l-2 border-emerald-400 pl-4 italic text-slate-300 my-4">$1</blockquote>')
                  .replace(/\n\n/g, '<p class="text-slate-300 leading-relaxed">')
                  .replace(/\n/g, '</p>')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-slate-400" />
            <span className="text-xs text-slate-400 mr-2">Topics:</span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
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
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-xs text-slate-400 flex items-start gap-3">
            <ShieldAlert className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
            <p>
              This analysis is prepared for institutional and retail educational awareness. AratBazar research team members may hold positions in securities mentioned. See our full <Link href="/disclaimer" className="text-emerald-400 underline">Financial Risk Disclaimer</Link>.
            </p>
          </div>
        </div>

        {/* Sidebar (1 Col) */}
        <div className="space-y-6 lg:col-span-1">
          {/* Related Articles */}
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h3 className="text-base font-bold text-white pb-3 border-b border-slate-800">
              Related Market Dispatches
            </h3>
            <div className="mt-4 space-y-4">
              {relatedArticles.map((rel) => (
                <div key={rel.id} className="group border-b border-slate-800/60 pb-3 last:border-none">
                  <span className="text-[10px] font-mono uppercase font-semibold text-cyan-400">
                    {rel.category}
                  </span>
                  <Link href={`/news/${rel.slug}`}>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition mt-1 line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                  <span className="text-[11px] text-slate-400 block mt-1">{rel.publishedAt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Ad Placement */}
          <AdBanner format="sidebar" label="SPONSORED SIDEBAR" />
        </div>
      </div>
    </div>
  );
}
