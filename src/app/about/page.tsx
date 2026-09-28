import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | আরতবাজার",
  description: "আরতবাজার — বাংলাদেশের ৬৪ জেলার অর্গানিক পণ্য, পাইকারি আড়ত ও দামের তথ্যভাণ্ডার সম্পর্কে জানুন।",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-green-700">হোম</Link> › <span className="text-gray-700">আমাদের সম্পর্কে</span>
        </nav>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-8">
            <div className="text-5xl mb-3">🌿</div>
            <h1 className="text-3xl font-bold mb-2">আরতবাজার সম্পর্কে</h1>
            <p className="text-green-100">বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার</p>
          </div>

          <div className="p-8 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-green-800 mb-3">আমাদের লক্ষ্য</h2>
              <p className="text-gray-700 leading-relaxed">
                আরতবাজার তৈরি হয়েছে বাংলাদেশের অর্গানিক ও ঐতিহ্যবাহী পণ্যের তথ্যকে একটি জায়গায় একত্রিত করতে। বাংলাদেশের প্রতিটি জেলায় এমন কিছু বিশেষ পণ্য আছে যা সেই জেলার গৌরব — কিন্তু এই তথ্য সহজে পাওয়া যায় না।
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-800 mb-3">আমরা কী সেবা দিই?</h2>
              <div className="space-y-3">
                {[
                  { icon: "📍", title: "জেলা ও বিভাগভিত্তিক তথ্য", desc: "৬৪ জেলার বিশেষ পণ্য, আড়ত ও দামের তথ্য" },
                  { icon: "💰", title: "পাইকারি ও খুচরা দাম", desc: "বাজার দর ও পাইকারি কেনার গাইড" },
                  { icon: "🏪", title: "আড়তের তথ্য", desc: "কোথায় কখন হাট বসে, যোগাযোগের পথ" },
                  { icon: "📅", title: "মৌসুমী গাইড", desc: "কোন মাসে কোন পণ্য পাওয়া যায়" },
                  { icon: "🌿", title: "অর্গানিক পণ্যের নির্দেশনা", desc: "খাঁটি পণ্য চেনার উপায় ও ভেজাল থেকে সতর্কতা" },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="font-medium text-gray-800">{s.title}</div>
                      <div className="text-sm text-gray-500">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-800 mb-3">কাদের জন্য?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "ব্যবসায়ী যারা নতুন পণ্য নিয়ে কাজ করতে চান",
                  "ভোক্তা যারা খাঁটি পণ্য কিনতে চান",
                  "উদ্যোক্তা যারা স্থানীয় পণ্য নিয়ে ব্যবসা শুরু করতে চান",
                  "প্রবাসী বাংলাদেশিরা যারা দেশের পণ্য সম্পর্কে জানতে চান",
                  "বিদেশি ক্রেতা যারা বাংলাদেশের পণ্য আমদানি করতে চান",
                  "গবেষক ও সাংবাদিক যারা কৃষি পণ্য নিয়ে কাজ করেন",
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h2 className="text-lg font-bold text-amber-800 mb-2">⚠️ একটি গুরুত্বপূর্ণ কথা</h2>
              <p className="text-sm text-amber-700 leading-relaxed">
                আরতবাজারে দেওয়া দামের তথ্য একটি আনুমানিক গাইড। বাজার দর পরিবর্তনশীল — মৌসুম, চাহিদা ও সরবরাহের উপর নির্ভর করে দাম পরিবর্তন হয়। কেনার আগে সরাসরি বাজার বা বিক্রেতার কাছ থেকে দাম যাচাই করুন।
              </p>
            </section>

            <div className="text-center pt-4">
              <Link href="/contact" className="bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition inline-block">
                আমাদের সাথে যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
