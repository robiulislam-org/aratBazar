import type { Metadata, Viewport } from "next";
import React from "react";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aratbazar.com"),
  title: {
    default: "আরতবাজার | বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার",
    template: "%s | আরতবাজার - বাংলাদেশের অর্গানিক পণ্য",
  },
  description:
    "বাংলাদেশের ৬৪ জেলার বিশেষ অর্গানিক পণ্য, পাইকারি আড়ত, দাম ও বিক্রেতার তথ্য। আম, গুড়, চিংড়ি, চা, তাঁত শাড়ি সহ সব পণ্যের বিস্তারিত তথ্য। AratBazar - Bangladesh Organic Products Information Hub.",
  keywords: [
    "বাংলাদেশের অর্গানিক পণ্য",
    "বাংলাদেশের বিশেষ পণ্য",
    "পাইকারি বাজার বাংলাদেশ",
    "জেলার বিশেষ পণ্য",
    "রাজশাহীর আম",
    "চাঁপাইনবাবগঞ্জের আম",
    "খুলনার চিংড়ি",
    "সুন্দরবনের মধু",
    "টাঙ্গাইলের শাড়ি",
    "বগুড়ার দই",
    "সিলেটের চা",
    "শ্রীমঙ্গল চা",
    "খেজুর গুড়",
    "Bangladesh organic products",
    "Bangladesh wholesale market",
    "aratbazar",
    "আরত বাজার",
    "বাংলাদেশ কৃষি পণ্য",
    "দেশি পণ্য বাংলাদেশ",
    "bangladesh local products",
    "bangladesh division products",
    "64 districts bangladesh products",
  ],
  authors: [{ name: "আরতবাজার টিম", url: "https://aratbazar.com/about" }],
  creator: "AratBazar",
  publisher: "AratBazar",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "আরতবাজার | বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার",
    description:
      "বাংলাদেশের ৬৪ জেলার বিশেষ অর্গানিক পণ্য, পাইকারি আড়ত, দাম ও বিক্রেতার তথ্য একটি জায়গায়।",
    url: "https://aratbazar.com",
    siteName: "আরতবাজার",
    locale: "bn_BD",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "আরতবাজার - বাংলাদেশের অর্গানিক পণ্য" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "আরতবাজার | বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার",
    description: "বাংলাদেশের ৬৪ জেলার বিশেষ পণ্য, পাইকারি দাম ও আড়তের তথ্য।",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://aratbazar.com" },
  verification: { google: "_N0pjK4jsVVQxYeyeZAQp0gebsiRLi9fKjna2i74B1M" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-7DXMHPCQQ0";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "আরতবাজার",
    url: "https://aratbazar.com",
    description: "বাংলাদেশের ৬৪ জেলার বিশেষ অর্গানিক পণ্য, পাইকারি আড়ত ও দামের তথ্যভাণ্ডার।",
    inLanguage: "bn",
    publisher: {
      "@type": "Organization",
      name: "আরতবাজার",
      url: "https://aratbazar.com",
      logo: { "@type": "ImageObject", url: "https://aratbazar.com/favicon.ico" },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aratbazar.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="_N0pjK4jsVVQxYeyeZAQp0gebsiRLi9fKjna2i74B1M" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
