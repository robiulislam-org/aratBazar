import type { Metadata } from "next";
import Link from "next/link";
import { divisions, districts } from "@/data/bangladesh";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার | আরতবাজার",
  description:
    "বাংলাদেশের ৮ বিভাগ ও ৬৪ জেলার বিশেষ অর্গানিক পণ্য, পাইকারি আড়ত, দাম ও বিক্রেতার তথ্য। আম, গুড়, চিংড়ি, চা, মধু সহ সব দেশি পণ্যের বিস্তারিত।",
};

export default function HomePage() {
  const featuredDistricts = districts.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            বাংলাদেশের অর্গানিক পণ্যের<br />
            <span className="text-yellow-300">সম্পূর্ণ তথ্যভাণ্ডার</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            ৮ বিভাগ • ৬৪ জেলা • পাইকারি আড়ত • সঠিক দাম • বিক্রেতার তথ্য
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["রাজশাহীর আম 🥭", "সুন্দরবনের মধু 🍯", "খুলনার চিংড়ি 🦐", "সিলেটের চা 🍃", "বগুড়ার দই 🥛", "খেজুর গুড় 🌴"].map(
              (item, i) => (
                <span
                  key={i}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bibhag"
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition shadow-lg"
            >
              📍 বিভাগ অনুযায়ী দেখুন
            </Link>
            <Link
              href="/jela"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg"
            >
              🗺️ জেলা অনুযায়ী দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-green-800 text-white py-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🏙️", count: "৮", label: "বিভাগ" },
              { icon: "🗺️", count: "৬৪+", label: "জেলা" },
              { icon: "🛒", count: "৫০০+", label: "পণ্য তথ্য" },
              { icon: "🏪", count: "২০০+", label: "পাইকারি বাজার" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl">{s.icon}</div>
                <div className="text-2xl font-bold text-yellow-300">{s.count}</div>
                <div className="text-sm text-green-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              🏙️ বিভাগ অনুযায়ী পণ্য খুঁজুন
            </h2>
            <p className="text-gray-500">বাংলাদেশের ৮টি বিভাগ থেকে আপনার পছন্দের বিভাগ বেছে নিন</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {divisions.map((div) => (
              <Link
                key={div.slug}
                href={`/bibhag/${div.slug}`}
                className="bg-white rounded-xl p-5 border-2 border-green-100 hover:border-green-400 hover:shadow-lg transition group"
              >
                <div className="text-3xl mb-2">🌿</div>
                <h3 className="font-bold text-green-800 group-hover:text-green-600 mb-1">{div.nameBn}</h3>
                <p className="text-xs text-gray-500 mb-2">{div.districts.length} জেলা</p>
                <div className="flex flex-wrap gap-1">
                  {div.famousProducts.slice(0, 2).map((p, i) => (
                    <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/bibhag" className="text-green-700 font-medium hover:text-green-900 underline">
              সব বিভাগ দেখুন →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Districts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              🗺️ জনপ্রিয় জেলার বিশেষ পণ্য
            </h2>
            <p className="text-gray-500">পাইকারি দাম, আড়ত ও বিক্রেতার তথ্যসহ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDistricts.map((district) => (
              <Link
                key={district.slug}
                href={`/jela/${district.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-300 transition group"
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{district.nameBn}</h3>
                      <p className="text-xs text-green-200">{district.division}</p>
                    </div>
                    <span className="text-3xl">📍</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{district.description}</p>
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-gray-500 mb-1">বিশেষ পণ্য:</div>
                    <div className="flex flex-wrap gap-1">
                      {district.famousFor.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  {district.specialProducts[0] && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-medium text-amber-800">
                          {district.specialProducts[0].nameBn}
                        </div>
                        <div className="text-xs font-bold text-green-700">
                          {district.specialProducts[0].priceRange}
                        </div>
                      </div>
                      <div className="text-xs text-amber-600 mt-1">
                        পাইকারি: {district.specialProducts[0].wholesalePrice}
                      </div>
                    </div>
                  )}
                  <div className="mt-3 text-xs text-green-600 font-medium group-hover:text-green-800">
                    বিস্তারিত দেখুন →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/jela"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition"
            >
              সব জেলা দেখুন →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              📝 অর্গানিক পণ্যের বিশেষ গাইড ও আর্টিকেল
            </h2>
            <p className="text-gray-500">কোথায় আসল ও খাঁটি পণ্য পাবেন, সঠিক দাম ও পাইকারি কেনার বিস্তারিত গাইড</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map((art) => (
              <Link
                key={art.slug}
                href={`/article/${art.slug}`}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-400 transition group flex flex-col justify-between"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full font-medium">
                      {art.category}
                    </span>
                    <span className="text-xs text-gray-400">📍 {art.region}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-green-700 mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-3">
                    {art.excerpt}
                  </p>
                </div>
                <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-green-700">💰 {art.price}</span>
                  <span className="text-green-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    পড়ুন →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/article"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition shadow-md"
            >
              সব আর্টিকেল দেখুন ({articles.length}টি) →
            </Link>
          </div>
        </div>
      </section>

      {/* Why AratBazar */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
            কেন আরতবাজার ব্যবহার করবেন?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏷️",
                title: "সঠিক দামের তথ্য",
                desc: "পাইকারি ও খুচরা উভয় দামের তথ্য থাকে। বাজারে যাওয়ার আগেই দাম জানুন।",
              },
              {
                icon: "📍",
                title: "সঠিক লোকেশন",
                desc: "কোন এলাকায় কোন হাট বা আড়ত আছে, কখন বসে — সব তথ্য এক জায়গায়।",
              },
              {
                icon: "🌿",
                title: "অর্গানিক পণ্যের নিশ্চয়তা",
                desc: "কোথায় আসল ও খাঁটি পণ্য পাওয়া যায় তার গাইড। ভেজাল থেকে বাঁচুন।",
              },
              {
                icon: "📞",
                title: "বিক্রেতার তথ্য",
                desc: "সরাসরি উৎপাদক বা পাইকারি বিক্রেতার সাথে যোগাযোগের পথ।",
              },
              {
                icon: "📅",
                title: "মৌসুমী গাইড",
                desc: "কোন মাসে কোন পণ্য পাওয়া যায় তার সম্পূর্ণ সিজনাল গাইড।",
              },
              {
                icon: "🤝",
                title: "ব্যবসায়ীদের জন্য সহায়ক",
                desc: "কোন এলাকায় কী ব্যবসা করলে লাভ হবে তার তথ্য ও দিকনির্দেশনা।",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-700 to-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            আপনার এলাকার বিশেষ পণ্য খুঁজুন
          </h2>
          <p className="text-green-100 mb-8">
            বাংলাদেশের যেকোনো জেলা বা বিভাগ সার্চ করুন এবং সেখানকার সব বিশেষ পণ্যের তথ্য পান।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bibhag" className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition">
              বিভাগ দেখুন
            </Link>
            <Link href="/jela" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
              জেলা দেখুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
