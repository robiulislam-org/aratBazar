"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { districts, divisions } from "@/data/bangladesh";
import { articles } from "@/data/articles";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  if (!query) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-gray-500">কিছু খুঁজুন — জেলা, বিভাগ বা পণ্যের নাম লিখুন।</p>
      </div>
    );
  }

  const q = query.toLowerCase();

  // Search districts
  const matchedDistricts = districts.filter(
    (d) =>
      d.nameBn.includes(query) ||
      d.name.toLowerCase().includes(q) ||
      d.tags.some((t) => t.includes(query)) ||
      d.famousFor.some((f) => f.includes(query)) ||
      d.specialProducts.some((p) => p.nameBn.includes(query) || p.name.toLowerCase().includes(q))
  );

  // Search divisions
  const matchedDivisions = divisions.filter(
    (d) =>
      d.nameBn.includes(query) ||
      d.name.toLowerCase().includes(q) ||
      d.famousProducts.some((p) => p.includes(query))
  );

  // Search articles
  const matchedArticles = articles.filter(
    (a) =>
      a.title.includes(query) ||
      a.product.includes(query) ||
      a.tags.some((t) => t.includes(query)) ||
      a.region.includes(query) ||
      a.excerpt.includes(query)
  );

  const total = matchedDistricts.length + matchedDivisions.length + matchedArticles.length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          "{query}" এর জন্য ফলাফল
        </h1>
        <p className="text-gray-500 text-sm">{total}টি ফলাফল পাওয়া গেছে</p>
      </div>

      {total === 0 && (
        <div className="bg-white rounded-xl p-10 text-center border border-gray-200">
          <div className="text-5xl mb-3">😔</div>
          <p className="text-gray-600 mb-2">কোনো ফলাফল পাওয়া যায়নি।</p>
          <p className="text-gray-400 text-sm mb-6">অন্য কীওয়ার্ড দিয়ে চেষ্টা করুন।</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["রাজশাহী", "আম", "খুলনা", "চিংড়ি", "সিলেট", "চা", "গুড়", "মধু"].map((s) => (
              <a key={s} href={`/search?q=${s}`} className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200 hover:bg-green-200">
                {s}
              </a>
            ))}
          </div>
        </div>
      )}

      {matchedDivisions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-700 mb-4">🌿 বিভাগ ({matchedDivisions.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matchedDivisions.map((d) => (
              <Link key={d.slug} href={`/bibhag/${d.slug}`} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-md transition">
                <h3 className="font-bold text-green-800">{d.nameBn}</h3>
                <p className="text-sm text-gray-500 mt-1">{d.description.slice(0, 80)}...</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {d.famousProducts.slice(0, 3).map((p, i) => (
                    <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">{p}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {matchedDistricts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-700 mb-4">📍 জেলা ({matchedDistricts.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {matchedDistricts.map((d) => (
              <Link key={d.slug} href={`/jela/${d.slug}`} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-md transition">
                <h3 className="font-bold text-green-800">{d.nameBn}</h3>
                <p className="text-xs text-gray-400 mb-2">{d.division}</p>
                <div className="flex flex-wrap gap-1">
                  {d.famousFor.slice(0, 2).map((f, i) => (
                    <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{f}</span>
                  ))}
                </div>
                {d.specialProducts[0] && (
                  <div className="mt-2 text-xs text-green-700 font-medium">
                    💰 {d.specialProducts[0].priceRange}/{d.specialProducts[0].unit}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {matchedArticles.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-700 mb-4">📝 আর্টিকেল ({matchedArticles.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matchedArticles.map((a) => (
              <Link key={a.slug} href={`/article/${a.slug}`} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-md transition">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{a.category}</span>
                <h3 className="font-bold text-gray-800 mt-2 line-clamp-2">{a.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{a.excerpt}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">📍 {a.region}</span>
                  <span className="text-xs font-bold text-green-700">{a.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Suspense fallback={<div className="text-center py-10 text-gray-500">লোড হচ্ছে...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
