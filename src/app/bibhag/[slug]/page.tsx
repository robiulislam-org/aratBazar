import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { divisions, getDivisionBySlug, getDistrictsByDivision } from "@/data/bangladesh";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) return { title: "বিভাগ পাওয়া যায়নি" };
  return {
    title: `${division.nameBn} | বিভাগের বিশেষ পণ্য ও আড়ত`,
    description: `${division.nameBn}-এর জেলাগুলোর বিশেষ অর্গানিক পণ্য, পাইকারি বাজার ও দামের তথ্য। ${division.famousProducts.join(", ")}।`,
    keywords: [division.nameBn, ...division.famousProducts, "পাইকারি বাজার", "অর্গানিক পণ্য", "বাংলাদেশ"],
    openGraph: {
      title: `${division.nameBn} বিভাগের বিশেষ পণ্য`,
      description: division.description,
    },
  };
}

export async function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export default async function DivisionPage({ params }: Props) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) notFound();

  const divisionDistricts = getDistrictsByDivision(slug);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "হোম", item: "https://aratbazar.com" },
      { "@type": "ListItem", position: 2, name: "বিভাগসমূহ", item: "https://aratbazar.com/bibhag" },
      { "@type": "ListItem", position: 3, name: division.nameBn, item: `https://aratbazar.com/bibhag/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-green-200 mb-4">
            <Link href="/" className="hover:text-white">হোম</Link> › 
            <Link href="/bibhag" className="hover:text-white mx-1">বিভাগ</Link> › 
            <span className="text-white ml-1">{division.nameBn}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{division.nameBn}</h1>
          <p className="text-green-100 max-w-2xl leading-relaxed">{division.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {division.famousProducts.map((p, i) => (
              <span key={i} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {division.nameBn}-এর জেলাগুলো ({divisionDistricts.length}টি)
        </h2>

        {divisionDistricts.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
            <p className="text-gray-500">এই বিভাগের জেলার তথ্য শীঘ্রই যুক্ত হবে।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisionDistricts.map((district) => (
              <Link
                key={district.slug}
                href={`/jela/${district.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-300 transition group"
              >
                <div className="bg-green-700 p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{district.nameBn}</h3>
                      <p className="text-xs text-green-200">{district.specialProducts.length}টি বিশেষ পণ্য</p>
                    </div>
                    <span className="text-2xl">📍</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{district.description}</p>
                  
                  {/* Products */}
                  <div className="space-y-2 mb-3">
                    {district.specialProducts.slice(0, 2).map((product, i) => (
                      <div key={i} className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-gray-700">{product.nameBn}</span>
                        <div className="text-right">
                          <div className="text-xs text-green-700 font-bold">{product.priceRange}</div>
                          <div className="text-xs text-gray-400">পাইকারি: {product.wholesalePrice}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Markets */}
                  {district.wholesaleMarkets.length > 0 && (
                    <div className="text-xs text-gray-500 bg-blue-50 rounded-lg px-3 py-2">
                      🏪 {district.wholesaleMarkets[0].name} — {district.wholesaleMarkets[0].schedule}
                    </div>
                  )}

                  <div className="mt-3 text-xs text-green-600 font-medium group-hover:text-green-800">
                    বিস্তারিত দেখুন →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* All districts link */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-600 mb-4">
            এই বিভাগের বাকি জেলাগুলোর তথ্য শীঘ্রই যুক্ত হবে। সব জেলার তালিকা দেখতে:
          </p>
          <div className="flex gap-3">
            <Link href="/jela" className="text-sm bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">
              সব জেলা দেখুন
            </Link>
            <Link href="/bibhag" className="text-sm border border-green-700 text-green-700 px-5 py-2 rounded-full hover:bg-green-50 transition">
              সব বিভাগ দেখুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
