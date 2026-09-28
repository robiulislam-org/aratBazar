import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি | আরতবাজার",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-green-700 text-white p-8">
          <h1 className="text-3xl font-bold">গোপনীয়তা নীতি</h1>
          <p className="text-green-200 mt-1">Privacy Policy</p>
        </div>
        <div className="p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-green-800 mb-3">তথ্য সংগ্রহ</h2>
            <p className="leading-relaxed">আরতবাজার ব্যবহারকারীদের ব্যক্তিগত তথ্য সংগ্রহ করে না। আমরা শুধুমাত্র Google Analytics ব্যবহার করি যা ওয়েবসাইট ভিজিটর সংক্রান্ত পরিসংখ্যান প্রদান করে।</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-800 mb-3">Google Analytics</h2>
            <p className="leading-relaxed">আমরা Google Analytics ব্যবহার করি যা কুকির মাধ্যমে ভিজিটরের তথ্য সংগ্রহ করে। এই তথ্য সাইটের মান উন্নয়নে ব্যবহৃত হয়।</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-green-800 mb-3">তথ্যের নির্ভরযোগ্যতা</h2>
            <p className="leading-relaxed">আরতবাজারে প্রদর্শিত দাম ও তথ্য একটি সাধারণ গাইড হিসেবে। সঠিক তথ্যের জন্য সরাসরি বাজার বা বিক্রেতার সাথে যোগাযোগ করুন।</p>
          </section>
          <div className="pt-4">
            <Link href="/" className="text-green-700 underline">← হোমপেজে ফিরে যান</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
