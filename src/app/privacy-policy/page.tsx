import { Lock, Shield, Eye, Cookie, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AratBazar Financial Intelligence",
  description: "AratBazar (aratbazar.com) Privacy Policy detailing cookie policies, Google AdSense third-party vendor disclosure, and GDPR/CCPA data compliance.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <Lock className="h-4 w-4" />
          <span>DATA PROTECTION & REGULATORY DISCLOSURE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Last Updated: September 2026 • Official Privacy Statement for <strong>aratbazar.com</strong>
        </p>
      </div>

      <div className="mt-8 space-y-7 text-slate-300 text-sm leading-relaxed">
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-400" />
            1. Introduction & Scope
          </h2>
          <p className="mt-3 text-slate-300">
            Welcome to <strong>AratBazar</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), accessible from <strong>https://aratbazar.com</strong>. We are committed to protecting the privacy of our visitors. This Privacy Policy document outlines the types of personal information that is received and collected by AratBazar and how it is utilized.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Cookie className="h-4 w-4 text-amber-400" />
            2. Google AdSense & Third-Party Advertising Vendors
          </h2>
          <p className="mt-3 text-slate-300">
            Google is a third-party vendor on our website. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to aratbazar.com and other sites on the internet.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-400">
            <li>
              Third-party ad servers or ad networks use technology in the advertisements and links that appear on AratBazar. They automatically receive your IP address when this occurs.
            </li>
            <li>
              Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by third-party advertising networks to measure the effectiveness of their campaigns and/or to personalize the advertising content that you see.
            </li>
            <li>
              Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">https://policies.google.com/technologies/ads</a>.
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Eye className="h-4 w-4 text-cyan-400" />
            3. Log Files & Analytics
          </h2>
          <p className="mt-3 text-slate-300">
            Like many standard Web sites, AratBazar makes use of log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user&apos;s movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="h-4 w-4 text-teal-400" />
            4. GDPR Rights (General Data Protection Regulation) & CCPA
          </h2>
          <p className="mt-3 text-slate-300">
            If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights, including the right to request access to, correction of, or deletion of any personal data we hold about you. AratBazar does not sell personal user information to third-party brokers.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
          <p className="mt-2 text-slate-400">
            If you have any questions regarding our Privacy Policy or data practices, please email our compliance team at: <span className="text-emerald-400 font-mono">support@aratbazar.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
