"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdBannerProps {
  slotId?: string;
  format?: "horizontal" | "sidebar" | "in-feed";
  label?: string;
}

export default function AdBanner({
  slotId,
  format = "horizontal",
  label = "SPONSORED FINANCIAL INTELLIGENCE",
}: AdBannerProps) {
  const isSidebar = format === "sidebar";
  const isInFeed = format === "in-feed";
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isAdPushed = useRef(false);

  useEffect(() => {
    if (clientId && slotId && typeof window !== "undefined" && !isAdPushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdPushed.current = true;
      } catch (err) {
        console.error("AdSense display error:", err);
      }
    }
  }, [clientId, slotId]);

  // If AdSense client ID is not configured yet or no slotId is passed,
  // do NOT render empty dashed placeholder boxes that Google reviewers might flag as
  // "site under construction" or "blank ad space". Keep the page pristine and clean.
  if (!clientId || !slotId) {
    return null;
  }

  return (
    <aside
      aria-label={label}
      className={`my-6 mx-auto w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-3 text-center transition hover:border-slate-700/60 ${
        isSidebar
          ? "max-w-xs min-h-[350px]"
          : isInFeed
          ? "max-w-3xl min-h-[140px]"
          : "max-w-5xl min-h-[100px]"
      }`}
    >
      <div className="flex items-center justify-between px-2 pb-2 text-[10px] uppercase tracking-wider text-slate-400 font-mono">
        <span>{label}</span>
        <span className="rounded bg-slate-800/80 px-1.5 py-0.5 text-slate-400">
          Google Ads Partner
        </span>
      </div>

      <div className="flex justify-center overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            minHeight: isSidebar ? "300px" : isInFeed ? "100px" : "90px",
          }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format={isSidebar ? "vertical" : "auto"}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
