import type { Metadata, Viewport } from "next";
import React from "react";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import TickerTape from "@/components/TickerTape";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aratbazar.com"),
  title: {
    default: "AratBazar | Global Financial Terminal, Real-Time Trading & Macro Analytics",
    template: "%s | AratBazar Financial Intelligence",
  },
  description:
    "AratBazar (aratbazar.com) is the premier institutional market intelligence terminal. Featuring real-time stock, crypto, forex, and commodity analytics, macro economic calendar, position calculators, and daily market dispatches.",
  keywords: [
    "trading news",
    "stock market live",
    "bitcoin price analysis",
    "crypto terminal",
    "forex rates live",
    "economic calendar",
    "position size calculator",
    "aratbazar",
    "gold spot price",
    "sp500 live analysis",
    "institutional market intelligence",
    "financial news today",
    "macro economics daily",
  ],
  authors: [{ name: "AratBazar Intelligence Team", url: "https://aratbazar.com/about" }],
  creator: "AratBazar Research",
  publisher: "AratBazar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AratBazar | Global Financial Terminal & Macro Intelligence",
    description:
      "Real-time institutional market intelligence, live interactive charting, macroeconomic calendar, and algorithmic risk management for professional traders.",
    url: "https://aratbazar.com",
    siteName: "AratBazar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AratBazar - Global Financial Terminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AratBazar | Institutional Market Terminal",
    description:
      "Live charts, crypto, stocks, commodities, economic calendar, and daily intelligence reports.",
    creator: "@aratbazar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aratbazar.com",
  },
  verification: {
    google: "_N0pjK4jsVVQxYeyeZAQp0gebsiRLi9fKjna2i74B1M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AratBazar",
    url: "https://aratbazar.com",
    description: "Institutional-grade financial terminal, macroeconomic news, and real-time market analytics.",
    publisher: {
      "@type": "Organization",
      name: "AratBazar Intelligence",
      url: "https://aratbazar.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aratbazar.com/favicon.ico",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aratbazar.com/news?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content={googleVerification || "_N0pjK4jsVVQxYeyeZAQp0gebsiRLi9fKjna2i74B1M"}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google AdSense Script */}
        {adsenseClientId && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
        <div>
          <Header />
          <TickerTape />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
