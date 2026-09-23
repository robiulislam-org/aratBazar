"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("aratbazar_cookie_consent");
      if (!consent) {
        // Small delay so it doesn't flash on initial load
        const timer = setTimeout(() => {
          setVisible(true);
          requestAnimationFrame(() => setAnimateIn(true));
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("aratbazar_cookie_consent", "accepted");
      localStorage.setItem("aratbazar_cookie_consent_date", new Date().toISOString());
    } catch {
      // ignore
    }
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("aratbazar_cookie_consent", "essential_only");
      localStorage.setItem("aratbazar_cookie_consent_date", new Date().toISOString());
    } catch {
      // ignore
    }
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-transform duration-300 ease-out ${
        animateIn ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-slate-700/80 bg-slate-950/98 backdrop-blur-xl shadow-2xl shadow-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 md:py-5">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mt-0.5">
                <Cookie className="w-5 h-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  We Use Cookies &amp; Similar Technologies
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  AratBazar uses cookies to personalize content, analyze site traffic, and serve
                  relevant advertisements via{" "}
                  <strong className="text-slate-300">Google AdSense</strong> and analytics tools.
                  By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies and
                  tracking as described in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition"
                  >
                    Privacy Policy
                  </Link>
                  . You may withdraw consent at any time by clearing your browser cookies.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Accept All Cookies
              </button>
              <button
                onClick={handleDecline}
                aria-label="Close cookie banner"
                className="p-2 rounded-xl hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
