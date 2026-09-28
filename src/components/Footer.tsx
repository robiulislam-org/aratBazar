import Link from "next/link";

export default function Footer() {
  const divisions = [
    { slug: "dhaka", name: "ঢাকা" },
    { slug: "chittagong", name: "চট্টগ্রাম" },
    { slug: "rajshahi", name: "রাজশাহী" },
    { slug: "khulna", name: "খুলনা" },
    { slug: "sylhet", name: "সিলেট" },
    { slug: "barisal", name: "বরিশাল" },
    { slug: "rangpur", name: "রংপুর" },
    { slug: "mymensingh", name: "ময়মনসিংহ" },
  ];

  const popularDistricts = [
    { slug: "chapainawabganj", name: "চাঁপাইনবাবগঞ্জ (আম)" },
    { slug: "bogura", name: "বগুড়া (দই)" },
    { slug: "khulna", name: "খুলনা (চিংড়ি)" },
    { slug: "sylhet", name: "সিলেট (চা)" },
    { slug: "tangail", name: "টাঙ্গাইল (শাড়ি)" },
    { slug: "dinajpur", name: "দিনাজপুর (লিচু)" },
    { slug: "jessore", name: "যশোর (গুড়)" },
    { slug: "comilla", name: "কুমিল্লা (রসমালাই)" },
  ];

  return (
    <footer className="bg-green-900 text-green-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <div>
                <div className="text-xl font-bold text-white">আরতবাজার</div>
                <div className="text-xs text-green-300">বাংলাদেশের অর্গানিক পণ্য</div>
              </div>
            </div>
            <p className="text-sm text-green-300 leading-relaxed">
              বাংলাদেশের ৮ বিভাগ ও ৬৪ জেলার বিশেষ অর্গানিক পণ্য, পাইকারি আড়ত, দাম এবং বিক্রেতার তথ্য একটি জায়গায়।
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white font-bold mb-4 border-b border-green-700 pb-2">বিভাগসমূহ</h3>
            <ul className="space-y-2">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link href={`/bibhag/${d.slug}`} className="text-sm text-green-300 hover:text-white transition">
                    → {d.name} বিভাগ
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Districts */}
          <div>
            <h3 className="text-white font-bold mb-4 border-b border-green-700 pb-2">জনপ্রিয় জেলা</h3>
            <ul className="space-y-2">
              {popularDistricts.map((d) => (
                <li key={d.slug}>
                  <Link href={`/jela/${d.slug}`} className="text-sm text-green-300 hover:text-white transition">
                    → {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4 border-b border-green-700 pb-2">দরকারি লিংক</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "আমাদের সম্পর্কে" },
                { href: "/contact", label: "যোগাযোগ করুন" },
                { href: "/article", label: "সব আর্টিকেল" },
                { href: "/bibhag", label: "সব বিভাগ" },
                { href: "/jela", label: "সব জেলা" },
                { href: "/privacy-policy", label: "গোপনীয়তা নীতি" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-green-300 hover:text-white transition">
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-green-400">
            © ২০২৫ আরতবাজার। বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার।
          </p>
          <p className="text-xs text-green-500">
            তথ্যের জন্য সরাসরি বিক্রেতা বা স্থানীয় বাজার যাচাই করুন।
          </p>
        </div>
      </div>
    </footer>
  );
}
