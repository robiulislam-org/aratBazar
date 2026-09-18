import { ShoppingBag, Target, Users, Award, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AratBazar — Global Sourcing & Winning Products Intelligence",
  description:
    "Learn about AratBazar, the premier global winning product hunter and wholesale sourcing directory for e-commerce sellers, dropshippers, and smart consumers worldwide.",
  keywords: [
    "about aratbazar",
    "wholesale sourcing platform",
    "dropshipping winning products hunter",
    "factory direct sourcing",
    "e-commerce research company",
  ],
  openGraph: {
    title: "About AratBazar — Global Sourcing Intelligence Hub",
    description: "Discover how AratBazar indexes viral winning products and verified factory supplier quotes.",
    url: "https://aratbazar.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Title */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <ShoppingBag className="h-4 w-4" />
          <span>GLOBAL WHOLESALE & SOURCING MISSION</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">About AratBazar</h1>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">
          The premier global directory for viral winning products, lowest factory supplier quotes, and actionable e-commerce intelligence.
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <section className="rounded-3xl border border-slate-800 bg-[#0c121e] p-6 md:p-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-emerald-400" />
            The "Arat" Philosophy
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            In South Asian commerce, an <strong>"Arat" (আড়ৎ)</strong> has historically referred to the central wholesale depot or sourcing hub where merchants and shopkeepers go to procure goods directly from farmers, craftsmen, and manufacturers at bottom-line prices before stocking their retail shelves.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            At <strong>AratBazar (aratbazar.com)</strong>, we took this time-tested wholesale principle and applied it to the global digital economy. Today, millions of aspiring entrepreneurs want to launch dropshipping stores, TikTok Shops, or Amazon storefronts, but struggle with the #1 barrier to entry: <em>"What should I sell, and where can I find the true manufacturer at the lowest price?"</em>
          </p>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-[#0c121e] p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-teal-400" />
            Our 4-Step Sourcing & Verification Standards
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400 block">1. Viral Demand Signals</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                We track millions of impressions across TikTok, Instagram Reels, and Pinterest to identify products with explosive organic consumer curiosity.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-teal-400 block">2. Lowest Factory Price Match</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                We hunt down the original factory manufacturers on AliExpress, 1688, CJ Dropshipping, and Temu to secure minimum 70%+ gross margin potential.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-amber-400 block">3. Supplier Vetting</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                We filter out unreliable vendors. Every featured supplier must maintain a 4.7+ customer rating, fast processing times, and tracked international shipping.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-cyan-400 block">4. Actionable Marketing Blueprints</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                We provide ready-to-test video ad hooks, target audience personas, and net profit calculations so you can execute immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-[#0c121e] p-6 md:p-8 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-400" />
            100% Free & Transparent Sourcing
          </h2>
          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
            AratBazar does not charge sellers any fee to access our research or supplier links. We maintain full transparency: some outbound links to suppliers are affiliate referral links, allowing us to fund our automated research engines without charging you a penny.
          </p>
          <div className="pt-2">
            <Link
              href="/disclaimer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline text-xs font-semibold"
            >
              <span>Read our full FTC Affiliate Disclosure & Sourcing Policies →</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
