import { Metadata } from "next";
import ExchangeClient from "./ExchangeClient";

export const metadata: Metadata = {
  title: "Live Currency Exchange Rates & Gold Price Today (আজকের টাকার রেট ও সোনার দাম) | AratBazar",
  description:
    "Real-time currency exchange rates for 160+ countries, live converter, expatriate remittance rates (প্রবাসী টাকার রেট), and live 24K, 22K, 21K, 18K Gold and Silver rates in BDT, USD, SAR, AED.",
  keywords: [
    "Currency Exchange Rates",
    "Live Gold Price Today",
    "আজকের টাকার রেট",
    "আজকের সোনার দাম",
    "USD to BDT",
    "SAR to BDT",
    "AED to BDT",
    "KWD to BDT",
    "Currency Converter Bangladesh",
    "Gold Price Bangladesh Vhori",
    "22K Gold Price Today",
    "24K Gold Price",
    "Forex Exchange Rates Live",
    "AratBazar Exchange",
  ],
  alternates: {
    canonical: "https://aratbazar.com/exchange",
  },
  openGraph: {
    title: "Live Currency Exchange Rates & Gold Price Today | AratBazar",
    description:
      "Check live exchange rates for 160+ world currencies, expatriate remittance rates, and live 24K, 22K Gold & Silver rates.",
    url: "https://aratbazar.com/exchange",
    siteName: "AratBazar Financial Intelligence",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AratBazar Currency Exchange & Gold Rates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Currency Exchange Rates & Gold Price Today | AratBazar",
    description:
      "Check live exchange rates for 160+ world currencies, expatriate remittance rates, and live 24K, 22K Gold & Silver rates.",
    images: ["/og-image.png"],
  },
};

export default function ExchangePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "AratBazar Global Currency & Precious Metals Exchange Engine",
    description:
      "Real-time institutional foreign exchange rates, expatriate remittance corridors, and live gold spot bullion valuations.",
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
