import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { districts, getDistrictBySlug } from "@/data/bangladesh";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) return { title: "জেলা পাওয়া যায়নি" };
  return {
    title: `${district.nameBn} জেলার বিশেষ পণ্য, পাইকারি আড়ত ও দাম`,
    description: `${district.nameBn} জেলার বিশেষ অর্গানিক পণ্য: ${district.famousFor.join(", ")}। পাইকারি বাজার, দাম ও বিক্রেতার তথ্য। ${district.description}`,
    keywords: [
      district.nameBn,
      ...district.famousFor,
      ...district.tags,
      "পাইকারি বাজার",
      "অর্গানিক পণ্য",
      district.division,
      "বাংলাদেশ",
    ],
    openGraph: {
      title: `${district.nameBn} জেলার বিশেষ পণ্য ও আড়ত`,
      description: district.description,
    },
  };
}

export async function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export default async function DistrictPage({ params }: Props) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${district.nameBn} জেলার বিশেষ পণ্য ও পাইকারি আড়ত`,
    description: district.description,
    author: { "@type": "Organization", name: "আরতবাজার" },
    publisher: { "@type": "Organization", name: "আরতবাজার", url: "https://aratbazar.com" },
    inLanguage: "bn",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "হোম", item: "https://aratbazar.com" },
      { "@type": "ListItem", position: 2, name: "জেলাসমূহ", item: "https://aratbazar.com/jela" },
      { "@type": "ListItem", position: 3, name: district.nameBn, item: `https://aratbazar.com/jela/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-200 mb-4 flex flex-wrap gap-1">
            <Link href="/" className="hover:text-white">হোম</Link>
            <span>›</span>
            <Link href="/jela" className="hover:text-white">জেলা</Link>
            <span>›</span>
            <Link href={`/bibhag/${district.divisionSlug}`} className="hover:text-white">
              {district.division}
            </Link>
            <span>›</span>
            <span className="text-white">{district.nameBn}</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">📍</span>
                <div>
                  <h1 className="text-3xl font-bold">{district.nameBn} জেলা</h1>
                  <p className="text-green-200 text-sm">{district.division} • বাংলাদেশ</p>
                </div>
              </div>
              <p className="text-green-100 max-w-xl leading-relaxed mt-3">{district.description}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20 min-w-fit">
              <div className="text-sm text-green-200 mb-2 font-medium">বিখ্যাত পণ্য:</div>
              <div className="space-y-1">
                {district.famousFor.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-green-300">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Special Products */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            🛒 {district.nameBn}-এর বিশেষ পণ্য ও দাম
          </h2>
          <div className="space-y-5">
            {district.specialProducts.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{product.nameBn}</h3>
                      <p className="text-green-200 text-sm">{product.name}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-200">মৌসুম</div>
                      <div className="font-medium text-yellow-300">{product.season}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  {/* Price Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="bg-green-50 rounded-xl p-3 border border-green-200 text-center">
                      <div className="text-xs text-gray-500 mb-1">খুচরা মূল্য</div>
                      <div className="text-lg font-bold text-green-700">{product.priceRange}</div>
                      <div className="text-xs text-gray-400">প্রতি {product.unit}</div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-center">
                      <div className="text-xs text-gray-500 mb-1">পাইকারি মূল্য</div>
                      <div className="text-lg font-bold text-amber-700">{product.wholesalePrice}</div>
                      <div className="text-xs text-gray-400">প্রতি {product.unit}</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-200 text-center">
                      <div className="text-xs text-gray-500 mb-1">সেরা মান পাবেন</div>
                      <div className="text-sm font-medium text-blue-700">{product.bestQuality}</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-xs text-yellow-800">
                      <span className="font-bold">💡 টিপস:</span> পাইকারি কিনতে চাইলে সরাসরি আড়ত থেকে কিনুন। দাম মৌসুম ও চাহিদা অনুযায়ী পরিবর্তন হতে পারে।
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wholesale Markets */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            🏪 পাইকারি বাজার ও আড়ত
          </h2>
          <div className="space-y-4">
            {district.wholesaleMarkets.map((market, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 bg-green-100 rounded-xl p-3 text-center w-12 h-12 flex items-center justify-center">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-green-800 mb-1">{market.name}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">📍</span>
                        <span>{market.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">🕐</span>
                        <span>{market.schedule}</span>
                      </div>
                      {market.contact && (
                        <div className="flex items-start gap-2 col-span-2">
                          <span className="text-amber-500 mt-0.5">📞</span>
                          <span>{market.contact}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for buyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">💼 ক্রেতাদের জন্য টিপস</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div>
                <p className="font-medium text-gray-800">সকালে কিনুন</p>
                <p className="text-sm text-gray-500">পাইকারি বাজার ভোর ৪টা–সকাল ১০টায় সবচেয়ে সক্রিয় থাকে।</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div>
                <p className="font-medium text-gray-800">হাট-বার জেনে যান</p>
                <p className="text-sm text-gray-500">প্রতিটি হাট সপ্তাহে ১–২ দিন বসে, হাটের দিন বেশি পণ্য ও কম দাম।</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div>
                <p className="font-medium text-gray-800">সরাসরি উৎপাদক থেকে কিনুন</p>
                <p className="text-sm text-gray-500">মধ্যস্থতাকারী এড়িয়ে সরাসরি কৃষক বা উৎপাদকের কাছ থেকে কিনলে দাম কম পড়বে।</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">⚠️</span>
              <div>
                <p className="font-medium text-gray-800">দাম যাচাই করুন</p>
                <p className="text-sm text-gray-500">মৌসুমের শুরুতে দাম বেশি, মাঝে কম। কেনার আগে বাজার দর যাচাই করুন।</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {district.tags.map((tag, i) => (
            <span key={i} className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200">
              #{tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href={`/bibhag/${district.divisionSlug}`}
            className="bg-green-700 text-white rounded-xl p-4 hover:bg-green-800 transition text-center"
          >
            <div className="text-lg mb-1">🌿</div>
            <div className="font-bold">{district.division}</div>
            <div className="text-xs text-green-200">এই বিভাগের সব জেলা দেখুন</div>
          </Link>
          <Link
            href="/jela"
            className="bg-white border-2 border-green-700 text-green-700 rounded-xl p-4 hover:bg-green-50 transition text-center"
          >
            <div className="text-lg mb-1">🗺️</div>
            <div className="font-bold">সব জেলা</div>
            <div className="text-xs text-gray-500">বাংলাদেশের সব জেলার তথ্য</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
