import { Lock, Shield, Eye, Cookie, FileText, UserCheck, BellOff } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AratBazar — Data Protection & Cookie Disclosure",
  description:
    "AratBazar (aratbazar.com) Privacy Policy covering data collection, Google AdSense cookie disclosure, GDPR/CCPA rights, children's privacy (COPPA), and your right to opt-out.",
  alternates: {
    canonical: "https://aratbazar.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
          <Lock className="h-4 w-4" />
          <span>DATA PROTECTION &amp; REGULATORY DISCLOSURE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
        <p className="mt-2 text-slate-400 text-sm">
          Last Updated: September 2026 &bull; Official Privacy Statement for{" "}
          <strong>aratbazar.com</strong>
        </p>
      </div>

      <div className="mt-8 space-y-7 text-slate-300 text-sm leading-relaxed">

        {/* 1. Introduction */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-400" />
            1. Introduction &amp; Scope
          </h2>
          <p className="mt-3 text-slate-300">
            Welcome to <strong>AratBazar</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;), accessible from <strong>https://aratbazar.com</strong>. We are
            committed to protecting the privacy of our visitors and complying with all applicable
            data protection laws including GDPR (EU/EEA), CCPA (California), and COPPA (USA).
          </p>
          <p className="mt-3 text-slate-300">
            This Privacy Policy outlines what data we collect, how we use it, how third-party
            vendors (including Google) may collect data on our platform, and what rights you have
            regarding your personal information. By using our website, you consent to the practices
            described in this policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Eye className="h-4 w-4 text-cyan-400" />
            2. Information We Collect
          </h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                2a. Information You Provide Directly
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                When you use our contact form or newsletter subscription, we collect your name,
                email address, and any message content you voluntarily provide. This information is
                used solely to respond to your inquiries.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                2b. Information Collected Automatically
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Like most websites, AratBazar automatically collects certain information when you
                visit: IP address, browser type, operating system, referring URLs, pages visited,
                time and date of visit, and click interactions. This data is collected via server
                log files and analytics tools (Google Analytics 4) and is not linked to personally
                identifiable information.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Cookies & Tracking */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Cookie className="h-4 w-4 text-amber-400" />
            3. Cookies &amp; Tracking Technologies
          </h2>
          <p className="mt-3 text-slate-300">
            We use cookies and similar tracking technologies to enhance your experience and serve
            relevant advertisements. Cookies are small data files stored in your browser.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
              <h3 className="text-xs font-bold text-white mb-2">Essential Cookies</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Required for the website to function properly. These include session cookies and
                your cookie consent preference (stored in localStorage). These cannot be disabled.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
              <h3 className="text-xs font-bold text-white mb-2">
                Analytics Cookies (Google Analytics 4)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We use Google Analytics 4 to understand how visitors interact with our website.
                Data collected includes page views, session duration, and user behavior patterns.
                IP addresses are anonymized. You can opt out via the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>
            <div className="rounded-xl bg-amber-950/20 border border-amber-800/40 p-4">
              <h3 className="text-xs font-bold text-amber-300 mb-2">
                Advertising Cookies (Google AdSense / DART Cookies)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google, as a third-party vendor, uses DART cookies to serve ads to our visitors
                based on their visits to aratbazar.com and other sites on the internet. These
                cookies allow Google to display personalized advertisements to you across the web.
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-xs text-slate-400">
                <li>
                  Google uses your IP address and browsing history to show relevant ads.
                </li>
                <li>
                  Third-party ad networks may use JavaScript, Web Beacons, or other tracking
                  technologies within advertisements.
                </li>
                <li>
                  You may opt out of personalized Google advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline"
                  >
                    Google Ad Settings
                  </a>{" "}
                  or the{" "}
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline"
                  >
                    NAI opt-out page
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                Google&apos;s use of advertising cookies is governed by the{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline"
                >
                  Google Advertising Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 4. How We Use Your Information */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="h-4 w-4 text-teal-400" />
            4. How We Use Your Information
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-400 text-xs leading-relaxed">
            <li>To respond to your contact form submissions and support inquiries</li>
            <li>To analyze website traffic and improve user experience</li>
            <li>To serve personalized advertising via Google AdSense</li>
            <li>To send optional newsletter communications (only if you subscribed)</li>
            <li>To comply with legal obligations and prevent fraud</li>
            <li>To enforce our Terms of Service</li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            We do <strong className="text-white">not</strong> sell your personal information to
            third-party data brokers. We do not share your personal data with third parties except
            as necessary to operate our services (e.g., Google Analytics, Formspree for contact
            forms) or as required by law.
          </p>
        </section>

        {/* 5. GDPR Rights */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-blue-400" />
            5. Your Rights — GDPR (EU/EEA) &amp; CCPA (California)
          </h2>
          <p className="mt-3 text-slate-300 text-xs leading-relaxed">
            Depending on your location, you may have the following rights regarding your personal
            data:
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "Right to Access", desc: "Request a copy of data we hold about you." },
              { title: "Right to Rectification", desc: "Correct inaccurate personal data." },
              { title: "Right to Erasure", desc: "Request deletion of your personal data." },
              { title: "Right to Object", desc: "Object to processing based on legitimate interest." },
              { title: "Right to Portability", desc: "Receive your data in a portable format." },
              { title: "Right to Withdraw Consent", desc: "Withdraw consent for cookie tracking at any time by clearing browser cookies." },
            ].map((right) => (
              <div key={right.title} className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                <span className="text-xs font-bold text-emerald-400 block">{right.title}</span>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{right.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">
            <strong className="text-slate-300">California residents (CCPA):</strong> You have the
            right to know what personal data is collected, to opt out of the &ldquo;sale&rdquo; of
            personal information, and to non-discrimination for exercising your rights. AratBazar
            does <strong>not</strong> sell personal data.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            To exercise any of these rights, contact us at:{" "}
            <a
              href="mailto:support@aratbazar.com"
              className="text-emerald-400 font-mono underline"
            >
              support@aratbazar.com
            </a>
          </p>
        </section>

        {/* 6. Children's Privacy */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <BellOff className="h-4 w-4 text-rose-400" />
            6. Children&apos;s Privacy (COPPA)
          </h2>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            AratBazar is not directed at children under the age of 13. We do not knowingly collect
            any personal information from children under 13. If you are a parent or guardian and
            believe your child has provided us with personal information, please contact us at{" "}
            <a
              href="mailto:support@aratbazar.com"
              className="text-emerald-400 font-mono underline"
            >
              support@aratbazar.com
            </a>{" "}
            and we will promptly delete such information. Our content is intended for adults 18+
            engaged in e-commerce and wholesale sourcing activities.
          </p>
        </section>

        {/* 7. Data Security & Retention */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">7. Data Security &amp; Retention</h2>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            We implement commercially reasonable security measures to protect your data. Our site
            is served over HTTPS (SSL/TLS encrypted). However, no method of transmission over the
            internet is 100% secure. Contact form data submitted via Formspree is retained per
            their privacy policy. We retain log data for up to 12 months for security and
            operational analysis.
          </p>
        </section>

        {/* 8. Third-Party Links */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">8. Third-Party Links &amp; Affiliate Disclosure</h2>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            AratBazar contains links to third-party marketplaces (AliExpress, CJ Dropshipping,
            Temu, Amazon, Alibaba). Some of these are affiliate links — if you click and make a
            purchase, we may earn a small commission at no extra cost to you. These third parties
            have their own privacy policies which we encourage you to review. AratBazar is not
            responsible for the privacy practices of external sites.
          </p>
        </section>

        {/* 9. Policy Changes */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">9. Changes to This Privacy Policy</h2>
          <p className="mt-3 text-slate-400 text-xs leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes by updating the &ldquo;Last Updated&rdquo; date at the top of this
            page. We encourage you to review this policy periodically for any changes.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="rounded-2xl border border-slate-800 bg-[#0c121e] p-6">
          <h2 className="text-lg font-bold text-white">10. Contact Information</h2>
          <p className="mt-2 text-slate-400 text-xs leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your
            personal data, please contact our privacy compliance team at:{" "}
            <a
              href="mailto:support@aratbazar.com"
              className="text-emerald-400 font-mono underline"
            >
              support@aratbazar.com
            </a>
            . We aim to respond to all privacy inquiries within 30 days.
          </p>
        </section>

      </div>
    </div>
  );
}
