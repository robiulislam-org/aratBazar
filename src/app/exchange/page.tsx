import { Metadata } from "next";
import ExchangeClient from "./ExchangeClient";

export const metadata: Metadata = {
  title: "Live Currency Exchange Rates & World Gold Price Today | AratBazar",
  description:
    "Real-time exchange rates for 160+ world currencies, institutional forex converter, global cross-currency rates, and live 24K, 22K, 21K, 18K Gold and Silver bullion prices.",
  keywords: [
    "Currency Exchange Rates",
    "Live Gold Price Today",
    "Forex Converter",
    "EUR to USD",
    "GBP to USD",
    "USD to JPY",
    "USD to SAR",
    "USD to AED",
    "USD to INR",
    "USD to CAD",
    "USD to BDT",
    "Gold Spot Bullion Rate",
    "24K Gold Price per Gram",
    "22K Gold Price per Ounce",
    "Precious Metals Calculator",
    "AratBazar Exchange",
  ],
  alternates: {
    canonical: "https://aratbazar.com/exchange",
  },
  openGraph: {
    title: "Live Currency Exchange Rates & World Gold Price Today | AratBazar",
    description:
      "Real-time currency exchange rates for 160+ world currencies, live forex converter, and live 24K, 22K, 21K, 18K Gold & Silver bullion prices.",
    url: "https://aratbazar.com/exchange",
    siteName: "AratBazar Financial Intelligence",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AratBazar Global Currency Exchange & Gold Rates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Currency Exchange Rates & World Gold Price Today | AratBazar",
    description:
      "Real-time currency exchange rates for 160+ world currencies, live forex converter, and live 24K, 22K, 21K, 18K Gold & Silver bullion prices.",
    images: ["/og-image.png"],
  },
};

export default function ExchangePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "AratBazar Global Currency & Precious Metals Exchange Engine",
    description:
      "Real-time institutional foreign exchange rates, global cross-currency corridors, and live gold spot bullion valuations.",
    provider: {
      "@type": "Organization",
      name: "AratBazar Financial Intelligence",
      url: "https://aratbazar.com",
    },
    serviceType: "Currency Exchange and Precious Metals Valuation",
    areaServed: "Global",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExchangeClient />
    </>
  );
}
