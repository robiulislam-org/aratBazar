import type { Metadata } from "next";
import Link from "next/link";
import { categories, articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "সকল অর্গানিক পণ্যের ক্যাটাগরি | আরতবাজার",
  description:
    "বাংলাদেশের মৌসুমি ফল, গুড় ও মিষ্টি, মাছ ও সামুদ্রিক, দুগ্ধজাত পণ্য, মসলা ও ভেষজ, ডাল ও শস্য সহ সকল ক্যাটাগরির পণ্যের তথ্য।",
};

export default function CategoryListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🛒 পণ্যের ক্যাটাগরি ও বিভাগ
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            আপনার পছন্দের বিভাগ নির্বাচন করুন এবং সংশ্লিষ্ট সকল অর্গানিক পণ্য, দাম ও পাইকারি আড়তের তথ্য জানুন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const count = articles.filter((a) => a.categorySlug === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-400 hover:shadow-lg transition group flex flex-col justify-between"
              >
                <div>
                  <div className="text-5xl mb-4">{cat.icon}</div>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {count > 0 ? `${count}টি বিস্তারিত গাইড ও আর্টিকেল` : "নিয়মিত আপডেট হচ্ছে"}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${cat.color}`}>
                    {cat.name}
                  </span>
                  <span className="text-sm font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                    দেখুন →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
