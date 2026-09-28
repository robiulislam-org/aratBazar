import type { Metadata } from "next";
import Link from "next/link";
import { districts, divisions } from "@/data/bangladesh";

export const metadata: Metadata = {
  title: "বাংলাদেশের সব জেলার বিশেষ পণ্য তালিকা",
  description: "বাংলাদেশের ৬৪ জেলার বিশেষ অর্গানিক পণ্য, পাইকারি আড়ত ও দামের তথ্য। জেলা অনুযায়ী বাংলাদেশের সেরা পণ্যের গাইড।",
};

export default function JelaListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🗺️ বাংলাদেশের জেলাসমূহ
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            যেকোনো জেলা বেছে নিন এবং সেই জেলার বিশেষ পণ্য, পাইকারি দাম ও আড়তের তথ্য দেখুন।
          </p>
        </div>

        {/* By Division */}
        {divisions.map((div) => {
          const divDistricts = districts.filter((d) => d.divisionSlug === div.slug);
          if (divDistricts.length === 0) return null;
          return (
            <div key={div.slug} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/bibhag/${div.slug}`}
                  className="text-xl font-bold text-green-800 hover:text-green-600"
                >
                  🌿 {div.nameBn}
                </Link>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {div.districts.length} জেলা
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {divDistricts.map((district) => (
                  <Link
                    key={district.slug}
                    href={`/jela/${district.slug}`}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-md transition group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-green-800 group-hover:text-green-600">
                        {district.nameBn}
                      </h3>
                      <span className="text-xs text-gray-400">{district.specialProducts.length} পণ্য</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {district.famousFor.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
                          {f}
                        </span>
                      ))}
                    </div>
                    {district.specialProducts[0] && (
                      <div className="text-xs text-green-700 font-medium">
                        💰 {district.specialProducts[0].nameBn}: {district.specialProducts[0].priceRange}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 text-center">
          <p className="text-green-800 font-medium mb-2">আরও জেলার তথ্য শীঘ্রই যুক্ত হচ্ছে</p>
          <p className="text-sm text-gray-500">
            আপনার জেলার তথ্য যুক্ত করতে আমাদের সাথে{" "}
            <Link href="/contact" className="text-green-700 underline">যোগাযোগ করুন</Link>।
          </p>
        </div>
      </div>
    </div>
  );
}
