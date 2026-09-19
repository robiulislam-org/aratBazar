import type { Metadata, Viewport } from "next";
import React from "react";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import LiveSourcingTicker from "@/components/LiveSourcingTicker";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aratbazar.com"),
  title: {
    default: "AratBazar | Global Winning Products & Wholesale Sourcing Intelligence",
    template: "%s | AratBazar Wholesale & Sourcing Intelligence",
  },
  description:
    "AratBazar (aratbazar.com) is the premier global winning product hunter and wholesale sourcing intelligence hub. Discover high-margin viral products, lowest factory supplier rates, profit calculators, and market research for smart e-commerce sellers.",
  keywords: [
    "winning products",
    "viral gadgets",
    "dropshipping winning products",
    "wholesale sourcing hub",
    "lowest price supplier",
    "aliexpress factory direct",
    "dropship profit calculator",
    "aratbazar",
    "e-commerce product hunting",
    "tiktok viral finds",
    "high margin products",
    "b2b sourcing",
    "cheap useful gadgets"
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
    title: "AratBazar | Global Winning Products & Wholesale Sourcing Hub",
    description:
      "Discover high-margin viral products, factory supplier quotes, profit margin analytics, and video ad hooks for e-commerce entrepreneurs.",
    url: "https://aratbazar.com",
    siteName: "AratBazar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AratBazar - Global Sourcing & Winning Products Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AratBazar | Global Winning Products & Wholesale Hub",
    description:
      "Find viral winning products, lowest factory prices, profit calculators, and supplier links.",
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
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-7DXMHPCQQ0";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AratBazar",
    url: "https://aratbazar.com",
    description: "Global winning product hunter, wholesale sourcing quotes, and e-commerce seller intelligence.",
    publisher: {
      "@type": "Organization",
      name: "AratBazar Sourcing Intelligence",
      url: "https://aratbazar.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aratbazar.com/favicon.ico",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aratbazar.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AratBazar",
    url: "https://aratbazar.com",
    logo: "https://aratbazar.com/favicon.ico",
    description:
      "AratBazar is an independent global product research and wholesale sourcing directory connecting online sellers and shoppers to verified lowest-price manufacturers.",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: "https://aratbazar.com/contact",
      availableLanguage: "English",
    },
    sameAs: [
      "https://aratbazar.com",
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
        {/* Google Analytics 4 */}
        {gaMeasurementId && (
          <>
            <Script
              id="google-analytics"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
        <CartProvider>
          <div>
            <Header />
            <LiveSourcingTicker />
            <main>{children}</main>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
