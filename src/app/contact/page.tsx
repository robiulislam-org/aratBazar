import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import ContactFormClient from "@/components/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact AratBazar — Product Research, Support & Business Inquiries",
  description:
    "Contact the AratBazar team for product sourcing inquiries, press requests, advertising partnerships, technical support, or editorial feedback. We respond within 24 business hours.",
  keywords: [
    "contact aratbazar",
    "aratbazar support",
    "product sourcing help",
    "aratbazar advertising",
    "wholesale inquiry",
    "dropshipping help",
  ],
  openGraph: {
    title: "Contact AratBazar — Sourcing & Support",
    description:
      "Reach out to AratBazar for product sourcing questions, business partnerships, or editorial inquiries.",
    url: "https://aratbazar.com/contact",
    siteName: "AratBazar",
    type: "website",
  },
  alternates: {
    canonical: "https://aratbazar.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <Mail className="h-4 w-4" />
          <span>EDITORIAL &amp; SUPPORT DESK</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Contact AratBazar</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Have feedback, press inquiries, technical questions, or corporate advertising requests?
          Get in touch with our team. We typically respond within 24 business hours.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-4 md:col-span-1">
          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" />
              Direct Inquiries
            </h2>
            <p className="text-xs text-slate-400 mb-1">General &amp; Support:</p>
            <a
              href="mailto:support@aratbazar.com"
              className="font-mono text-xs text-emerald-400 block font-semibold hover:underline"
            >
              support@aratbazar.com
            </a>
            <p className="text-xs text-slate-400 mt-3 mb-1">Editorial Desk:</p>
            <a
              href="mailto:editor@aratbazar.com"
              className="font-mono text-xs text-cyan-400 block font-semibold hover:underline"
            >
              editor@aratbazar.com
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-400" />
              Headquarters
            </h2>
            <address className="not-italic text-xs text-slate-400 leading-relaxed">
              AratBazar Sourcing Intelligence<br />
              Web:{" "}
              <span className="text-slate-300 font-mono">https://aratbazar.com</span>
              <br />
              Global Digital Operations
            </address>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-5">
            <h2 className="text-sm font-bold text-white mb-2">Response Time</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We aim to respond to all inquiries within{" "}
              <strong className="text-slate-300">24–48 business hours</strong>. For urgent
              partnership or press matters, please indicate in the subject line.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6 md:col-span-2">
          <h2 className="text-base font-bold text-white mb-5 border-b border-slate-800 pb-3">
            Send Us a Message
          </h2>
          <ContactFormClient />
        </div>
      </div>
    </div>
  );
}
