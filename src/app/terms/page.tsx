import { FileText, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Terms of Service | AratBazar Financial Intelligence",
  description: "Terms of Service and legal agreement governing the usage of aratbazar.com.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <FileText className="h-4 w-4" />
          <span>USER AGREEMENT</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Effective Date: September 2026 • Official Terms for <strong>aratbazar.com</strong>
        </p>
      </div>

      <div className="mt-8 space-y-7 text-slate-300 text-sm leading-relaxed">
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
          <p className="mt-3 text-slate-300">
            By accessing or using <strong>AratBazar</strong> (&ldquo;aratbazar.com&rdquo;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">2. Permitted Use & Intellectual Property</h2>
          <p className="mt-3 text-slate-300">
            All proprietary analytical calculators, UI layouts, brand trademarks, and editorial commentaries are the intellectual property of AratBazar. You are granted a limited, revocable license to access our platform for personal and professional research purposes. Automated scraping that disrupts server operations is strictly prohibited.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">3. Limitation of Liability</h2>
          <p className="mt-3 text-slate-300">
            In no event shall AratBazar, its operators, employees, or contributors be liable for any trading losses, missed opportunities, or damages resulting from reliance on data, charts, or content published on this website.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">4. Modifications to Service</h2>
          <p className="mt-3 text-slate-300">
            We reserve the right to withdraw or amend our service, data feeds, and market analysis tools at our discretion without notice.
          </p>
        </section>
      </div>
    </div>
  );
}
