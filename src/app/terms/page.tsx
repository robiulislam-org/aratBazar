import { FileText, CheckCircle, AlertTriangle, Scale, Globe, ShieldCheck, Ban, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AratBazar — User Agreement & Legal Policy",
  description:
    "Read AratBazar's full Terms of Service covering permitted use, intellectual property, limitation of liability, affiliate disclosures, user conduct, dispute resolution, and governing law.",
  alternates: {
    canonical: "https://aratbazar.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <FileText className="h-4 w-4" />
          <span>USER AGREEMENT &amp; LEGAL POLICY</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Effective Date: September 2026 &bull; Official Terms for{" "}
          <strong>aratbazar.com</strong>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Please read these terms carefully before using AratBazar. By accessing our website, you
          agree to be bound by these terms.
        </p>
      </div>

      <div className="mt-8 space-y-7 text-slate-300 text-sm leading-relaxed">

        {/* 1. Agreement */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            1. Agreement to Terms
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            By accessing or using <strong>AratBazar</strong> (&ldquo;aratbazar.com&rdquo;,
            &ldquo;the Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
            you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) agree to be bound by these Terms of
            Service and all applicable laws and regulations. If you disagree with any part of
            these terms, you may not access or use the service. These Terms apply to all visitors,
            users, and others who access or use the Site.
          </p>
        </section>

        {/* 2. Description of Service */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Globe className="h-4 w-4 text-teal-400" />
            2. Description of Service
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            AratBazar is an independent market intelligence, product research, and wholesale
            sourcing aggregation platform. We provide:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-400 text-xs leading-relaxed">
            <li>Curated viral product research and wholesale supplier links</li>
            <li>E-commerce profit margin and breakeven ROAS calculators</li>
            <li>Financial market news, analysis, and educational content</li>
            <li>AI model tracking and industry intelligence tools</li>
            <li>Affiliate links to third-party marketplaces (AliExpress, CJ, Temu, Amazon)</li>
          </ul>
          <p className="mt-3 text-slate-400 text-xs">
            AratBazar does <strong className="text-white">not</strong> manufacture, stock, ship,
            or sell any physical products directly. We are an information and aggregation platform
            only. All purchases are made directly with independent third-party suppliers.
          </p>
        </section>

        {/* 3. Permitted Use & IP */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            3. Permitted Use &amp; Intellectual Property
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            All proprietary analytical calculators, editorial content, UI designs, brand
            trademarks, product research databases, and sourcing methodologies are the
            intellectual property of AratBazar. You are granted a limited, non-exclusive,
            non-transferable, revocable license to access our platform for personal and
            professional research purposes only.
          </p>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the
            Site without our express written permission. This includes but is not limited to our
            product dossiers, supplier research data, profit margin analyses, and editorial
            market intelligence reports.
          </p>
        </section>

        {/* 4. Prohibited Activities */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Ban className="h-4 w-4 text-rose-400" />
            4. Prohibited Activities
          </h2>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            You agree not to engage in any of the following activities:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-400 text-xs leading-relaxed">
            <li>Automated scraping, crawling, or data mining that disrupts server operations</li>
            <li>
              Using our content for competitive intelligence platforms or resale without
              authorization
            </li>
            <li>Misrepresenting your identity or affiliation with AratBazar</li>
            <li>Attempting to gain unauthorized access to our backend systems or databases</li>
            <li>
              Distributing malware, spam, or harmful code through our contact or newsletter forms
            </li>
            <li>
              Reverse engineering, decompiling, or disassembling any portion of the website
              software
            </li>
            <li>
              Using our tools or data for any unlawful purpose or in violation of any applicable
              regulations
            </li>
          </ul>
        </section>

        {/* 5. Affiliate Disclosure */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="h-4 w-4 text-amber-400" />
            5. Affiliate Links &amp; Commercial Relationships
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            AratBazar participates in affiliate marketing programs. Some outbound links to
            third-party marketplaces are affiliate referral links. If you click such a link and
            make a purchase, AratBazar may receive a small commission from the respective
            marketplace at <strong>absolutely no additional cost to you</strong>.
          </p>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            These affiliate relationships do not influence the editorial independence or integrity
            of our product research. Products are selected based on market research merit, viral
            demand signals, and profit margin potential — not on affiliate commission rates. For
            full details, see our{" "}
            <a href="/disclaimer" className="text-emerald-400 underline hover:text-emerald-300">
              FTC Affiliate Disclosure
            </a>
            .
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            6. Limitation of Liability &amp; Disclaimer of Warranties
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            AratBazar is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
            without warranties of any kind, either express or implied. We do not warrant that the
            service will be uninterrupted, error-free, or free of viruses or other harmful
            components.
          </p>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            In no event shall AratBazar, its operators, employees, contributors, or affiliates be
            liable for any:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-400 text-xs">
            <li>Business losses, lost profits, or missed sales opportunities</li>
            <li>Damages arising from reliance on product research, supplier links, or pricing data</li>
            <li>Indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of data, goodwill, or business reputation</li>
          </ul>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            Supplier pricing, product availability, and market data displayed on AratBazar
            represent snapshot estimates at the time of publication. Always verify current prices
            and seller feedback directly on supplier checkout pages before placing orders.
          </p>
        </section>

        {/* 7. User Conduct */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Users className="h-4 w-4 text-purple-400" />
            7. User Conduct &amp; Community Standards
          </h2>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            You agree to use AratBazar in a manner consistent with all applicable laws and
            regulations and in accordance with these Terms. You are solely responsible for all
            content you submit through our contact forms and for any consequences of your
            interactions with third-party suppliers discovered through our platform.
          </p>
        </section>

        {/* 8. Modifications */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">8. Modifications to Service &amp; Terms</h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            We reserve the right to withdraw, amend, or modify our service, data feeds, product
            research tools, and market analysis content at our discretion without prior notice.
            We may revise these Terms of Service at any time by updating this page. Continued use
            of the site following any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Scale className="h-4 w-4 text-cyan-400" />
            9. Governing Law &amp; Dispute Resolution
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable
            international digital commerce laws. Any disputes arising from your use of AratBazar
            shall first be attempted to be resolved through good-faith negotiation by contacting
            us at{" "}
            <a href="mailto:support@aratbazar.com" className="text-emerald-400 font-mono underline">
              support@aratbazar.com
            </a>
            . If resolution cannot be reached informally, disputes shall be resolved through
            binding arbitration in accordance with internationally recognized arbitration
            standards.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">10. Contact Us</h2>
          <p className="mt-2 text-slate-400 text-xs leading-relaxed">
            If you have any questions about these Terms of Service, please contact us:{" "}
            <a
              href="mailto:support@aratbazar.com"
              className="text-emerald-400 font-mono underline"
            >
              support@aratbazar.com
            </a>
            {" "}or through our{" "}
            <a href="/contact" className="text-emerald-400 underline hover:text-emerald-300">
              Contact Page
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}
