import type { Metadata } from "next";
import Link from "next/link";
import { categories, getArticlesByCategory } from "@/data/articles";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "বিভাগ পাওয়া যায়নি" };
  return {
    title: `${cat.name} | বাংলাদেশের অর্গানিক পণ্য`,
    description: `বাংলাদেশের ${cat.name} বিভাগের পণ্যের তথ্য — কোথায় পাবেন, দাম কত, কোন জেলায় সেরা মান।`,
  };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const catArticles = getArticlesByCategory(slug);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>›</span>
          <Link href="/article" className="hover:text-green-700">আর্টিকেল</Link>
          <span>›</span>
          <span className="text-gray-700">{cat.name}</span>
        </nav>

        <div className="text-center mb-10">
          <span className="text-6xl">{cat.icon}</span>
          <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-2">{cat.name}</h1>
          <p className="text-gray-500">এই বিভাগে {catArticles.length}টি আর্টিকেল আছে</p>
        </div>

        {catArticles.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center border border-gray-200">
            <p className="text-gray-500">এই বিভাগে শীঘ্রই আর্টিকেল যুক্ত হবে।</p>
            <Link href="/article" className="mt-4 inline-block text-green-700 underline">
              সব আর্টিকেল দেখুন
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-300 transition group"
              >
                <div className="bg-gradient-to-br from-green-600 to-emerald-500 h-28 flex items-center justify-center">
                  <span className="text-4xl">{cat.icon}</span>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-gray-800 group-hover:text-green-700 mb-2 line-clamp-2">{article.title}</h2>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">📍 {article.region}</span>
                    <span className="font-bold text-green-700">{article.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Other categories */}
        <div className="mt-10">
          <h2 className="font-bold text-gray-700 mb-4">অন্যান্য বিভাগ</h2>
          <div className="flex flex-wrap gap-2">
            {categories.filter((c) => c.slug !== slug).map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className={`${c.color} px-4 py-2 rounded-full text-sm font-medium border hover:opacity-80 transition`}
              >
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
