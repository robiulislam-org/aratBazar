import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "আর্টিকেল পাওয়া যায়নি" };
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "আরতবাজার" },
    publisher: { "@type": "Organization", name: "আরতবাজার", url: "https://aratbazar.com" },
    keywords: article.tags.join(", "),
    inLanguage: "bn",
  };

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    return content
      .split("\n\n")
      .map((para, i) => {
        if (para.startsWith("## ")) {
          return <h2 key={i} className="text-xl font-bold text-green-800 mt-6 mb-3 pb-2 border-b border-green-100">{para.replace("## ", "")}</h2>;
        }
        if (para.startsWith("| ")) {
          // Table
          const rows = para.split("\n").filter((r) => r.startsWith("|"));
          return (
            <div key={i} className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {rows.map((row, ri) => {
                    const cells = row.split("|").filter((c) => c.trim());
                    const isHeader = ri === 0;
                    return (
                      <tr key={ri} className={isHeader ? "bg-green-700 text-white" : ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        {cells.map((cell, ci) => (
                          <td key={ci} className={`px-3 py-2 border border-gray-200 ${isHeader ? "font-bold" : ""}`}>
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }
        if (para.startsWith("- ") || para.startsWith("1. ")) {
          const items = para.split("\n").filter((l) => l.trim());
          return (
            <ul key={i} className="list-disc list-inside space-y-1 my-3 text-gray-700">
              {items.map((item, ii) => (
                <li key={ii}>{item.replace(/^[-\d.]+\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
              ))}
            </ul>
          );
        }
        return <p key={i} className="text-gray-700 leading-relaxed my-3">{para.replace(/\*\*(.*?)\*\*/g, "$1")}</p>;
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-green-200 mb-4 flex flex-wrap gap-1">
            <Link href="/" className="hover:text-white">হোম</Link>
            <span>›</span>
            <Link href="/article" className="hover:text-white">আর্টিকেল</Link>
            <span>›</span>
            <span className="text-white">{article.category}</span>
          </nav>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full mb-3 inline-block border border-white/30">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{article.title}</h1>
          <p className="text-green-100 text-lg leading-relaxed">{article.excerpt}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { icon: "📅", label: "মৌসুম", value: article.season },
            { icon: "📍", label: "অঞ্চল", value: article.region },
            { icon: "💰", label: "মূল্য", value: article.price },
            { icon: "🗺️", label: "লোকেশন", value: article.location.split(",")[0] },
          ].map((info, i) => (
            <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
              <div className="text-xl mb-1">{info.icon}</div>
              <div className="text-xs text-gray-400 mb-1">{info.label}</div>
              <div className="text-sm font-medium text-gray-700">{info.value}</div>
            </div>
          ))}
        </div>

        {/* Contact/Location */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <h3 className="font-bold text-green-800 mb-2">📞 কোথায় পাবেন ও যোগাযোগ</h3>
          <p className="text-sm text-gray-700 mb-1"><strong>লোকেশন:</strong> {article.location}</p>
          <p className="text-sm text-gray-700"><strong>যোগাযোগ:</strong> {article.contact}</p>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="prose-bangla">
            {renderContent(article.content)}
          </div>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {article.tags.map((tag, i) => (
            <span key={i} className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200">
              #{tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex gap-4">
          <Link href="/article" className="text-sm bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
            ← সব আর্টিকেল
          </Link>
          <Link href="/jela" className="text-sm border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-50 transition">
            জেলার তথ্য দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
