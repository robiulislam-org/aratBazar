import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import TickerTape from "@/components/TickerTape";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AratBazar | Global Financial Terminal, Real-Time Trading & Macro Analytics",
  description: "AratBazar (aratbazar.com) is the premier institutional market intelligence terminal. Featuring real-time stock, crypto, forex, and commodity analytics, macro economic calendar, and risk management calculators.",
  keywords: [
    "trading news",
    "stock market live",
    "bitcoin price",
    "crypto terminal",
    "forex rates",
    "economic calendar",
    "position size calculator",
    "aratbazar",
    "gold spot price",
    "sp500 live"
  ],
  authors: [{ name: "AratBazar Intelligence Team" }],
  openGraph: {
    title: "AratBazar | Global Financial Terminal",
    description: "Real-time institutional market intelligence, live charting, and macroeconomic analytics.",
    url: "https://aratbazar.com",
    siteName: "AratBazar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AratBazar | Real-Time Market Terminal",
    description: "Live charts, crypto, stocks, commodities, and daily intelligence reports.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
