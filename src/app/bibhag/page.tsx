import type { Metadata } from "next";
import Link from "next/link";
import { divisions } from "@/data/bangladesh";

export const metadata: Metadata = {
  title: "বাংলাদেশের ৮ বিভাগের পণ্য তালিকা",
  description: "বাংলাদেশের ৮টি বিভাগের বিশেষ পণ্য, পাইকারি আড়ত ও দামের তথ্য। ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, সিলেট, বরিশাল, রংপুর ও ময়মনসিংহ বিভাগ।",
};

export default function BibhagListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🏙️ বাংলাদেশের ৮টি বিভাগ
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            আপনার পছন্দের বিভাগ বেছে নিন এবং সেই বিভাগের জেলাগুলোর বিশেষ পণ্য, আড়ত ও দামের তথ্য দেখুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map((div) => (
            <Link
              key={div.slug}
              href={`/bibhag/${div.slug}`}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-green-400 hover:shadow-xl transition p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-xl p-3 text-3xl">🌿</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-green-800 group-hover:text-green-600 mb-1">
                    {div.nameBn}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{div.description}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                      {div.districts.length} জেলা
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 mb-1">বিখ্যাত পণ্য:</div>
                    <div className="flex flex-wrap gap-2">
                      {div.famousProducts.map((p, i) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-green-50 rounded-2xl p-6 border border-green-200">
          <h2 className="font-bold text-green-800 text-lg mb-3">💡 জেলা দিয়েও সার্চ করুন</h2>
          <p className="text-sm text-gray-600 mb-4">
            সরাসরি জেলার নাম দিয়ে খুঁজতে চাইলে নিচের বাটনে ক্লিক করুন।
          </p>
          <Link
            href="/jela"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition"
          >
            🗺️ সব জেলা দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
