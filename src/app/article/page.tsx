import type { Metadata } from "next";
import Link from "next/link";
import { articles, categories } from "@/data/articles";

export const metadata: Metadata = {
  title: "বাংলাদেশের অর্গানিক পণ্যের আর্টিকেল সংগ্রহ",
  description: "বাংলাদেশের আম, গুড়, চিংড়ি, চা, মধু সহ সব অর্গানিক পণ্যের বিস্তারিত আর্টিকেল। কোথায় পাবেন, কত দাম, কোথায় সেরা মান।",
};

export default function ArticleListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            📝 পণ্যের বিস্তারিত আর্টিকেল
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            বাংলাদেশের অর্গানিক পণ্য সম্পর্কে বিস্তারিত তথ্য, ইতিহাস, দাম ও কোথায় পাবেন।
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`${cat.color} px-4 py-2 rounded-full text-sm font-medium border hover:opacity-80 transition`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-300 transition group"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-500 h-32 flex items-center justify-center">
                <span className="text-5xl">🌿</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.season}</span>
                </div>
                <h2 className="font-bold text-gray-800 group-hover:text-green-700 mb-2 line-clamp-2 leading-tight">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">📍 {article.region}</div>
                  <div className="text-xs font-bold text-green-700">{article.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
