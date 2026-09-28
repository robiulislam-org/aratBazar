import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "যোগাযোগ করুন | আরতবাজার",
  description: "আরতবাজারের সাথে যোগাযোগ করুন। তথ্য যুক্ত করতে, সংশোধন করতে বা ব্যবসায়িক যোগাযোগের জন্য।",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-green-700">হোম</Link> › <span className="text-gray-700">যোগাযোগ</span>
        </nav>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-8">
            <div className="text-4xl mb-3">📬</div>
            <h1 className="text-3xl font-bold mb-2">যোগাযোগ করুন</h1>
            <p className="text-green-100">আমরা আপনার মতামত ও তথ্যকে স্বাগত জানাই</p>
          </div>

          <div className="p-8">
            <div className="space-y-4 mb-8">
              {[
                { icon: "✉️", title: "ইমেইল", value: "info@aratbazar.com", desc: "সাধারণ যোগাযোগের জন্য" },
                { icon: "📝", title: "তথ্য যুক্ত করুন", value: "আপনার জেলার পণ্যের তথ্য শেয়ার করুন", desc: "আমরা যাচাই করে সাইটে যুক্ত করব" },
                { icon: "🔄", title: "তথ্য সংশোধন", value: "ভুল তথ্য দেখলে জানান", desc: "আমরা দ্রুত সংশোধন করব" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <div className="font-bold text-gray-800">{c.title}</div>
                    <div className="text-green-700 font-medium">{c.value}</div>
                    <div className="text-sm text-gray-500">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h2 className="font-bold text-green-800 mb-3">🤝 ব্যবসায়িক অংশীদারিত্ব</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                আপনি যদি একজন উৎপাদক, আড়তদার বা পাইকারি বিক্রেতা হন এবং আপনার পণ্যের তথ্য আরতবাজারে যুক্ত করতে চান, আমাদের সাথে যোগাযোগ করুন।
              </p>
              <div className="text-sm text-gray-600">
                <strong>প্রয়োজনীয় তথ্য:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>পণ্যের নাম ও বিবরণ</li>
                  <li>জেলা ও এলাকা</li>
                  <li>পাইকারি ও খুচরা মূল্য</li>
                  <li>যোগাযোগের নম্বর</li>
                  <li>হাট বা বাজারের তথ্য</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/" className="text-green-700 font-medium hover:text-green-900 underline">
                ← হোমপেজে ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
