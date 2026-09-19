import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { INITIAL_PRODUCTS, getProductBySlug } from "@/data/productsData";
import ProductDetailClient from "@/components/ProductDetailClient";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Prerender top 100 daily picks & featured products at build time;
  // remaining 5,000+ products are rendered on-demand and cached dynamically.
  return INITIAL_PRODUCTS.slice(0, 100).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | AratBazar",
      description: "The requested viral product could not be found.",
    };
  }

  const discountPercent = Math.round(product.market.profitMarginPercent) || 50;
  const title = `${product.title} — Buy Online at Factory Rate ($${product.sourcing.lowestPrice.toFixed(2)}) | AratBazar`;
  const description = `Buy ${product.title} at verified factory rate ($${product.sourcing.lowestPrice.toFixed(2)} vs retail $${product.market.retailPrice.toFixed(2)} - save ${discountPercent}%). Rated ${product.rating.toFixed(1)}/5 with ${product.reviewsCount.toLocaleString()}+ reviews. Free worldwide shipping & 30-day guarantee.`;
  const canonicalUrl = `https://aratbazar.com/product/${product.slug}`;

  return {
    title,
    description,
    keywords: [
      product.title,
      `buy ${product.title}`,
      `${product.title} lowest price`,
      `${product.title} factory source`,
      `${product.title} reviews`,
      `${product.categoryName}`,
      "viral problem solving gadgets",
      "wholesale factory pricing",
      "trending online products",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.title} | Factory Direct Wholesale — AratBazar`,
      description: `Factory price: $${product.sourcing.lowestPrice.toFixed(2)} | Retail Benchmark: $${product.market.retailPrice.toFixed(2)} (Save ${discountPercent}%). Discover viral market research, reviews and free shipping.`,
      url: canonicalUrl,
      siteName: "AratBazar",
      type: "website",
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: `${product.title} - Factory Sourcing Deal`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - $${product.sourcing.lowestPrice.toFixed(2)} Factory Rate`,
      description: `Save ${discountPercent}% on ${product.title}. Verified factory suppliers & customer reviews.`,
      images: [product.images[0]],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const {
    title,
    description,
    categoryName,
    category,
    images,
    sourcing,
    market,
    rating,
    reviewsCount,
  } = product;

  const similarProducts = INITIAL_PRODUCTS.filter(
    (p) => p.category === category && p.id !== product.id
  ).slice(0, 4);

  const productUrl = `https://aratbazar.com/product/${product.slug}`;
  const categoryUrl = `https://aratbazar.com/category/${category}`;

  // 1. Google Rich Snippet: Product Schema
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: title,
    image: images,
    description: description,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: "AratBazar Verified Direct",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      reviewCount: reviewsCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "USD",
      price: sourcing.lowestPrice.toFixed(2),
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: sourcing.supplierName,
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0.00",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 7,
            maxValue: 12,
            unitCode: "DAY",
          },
        },
      },
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Marcus T.",
        },
        datePublished: "2026-09-10",
        reviewBody: "Outstanding problem solver! 10x better than ordinary store alternatives. Build quality is exceptional and shipping was fast.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah L.",
        },
        datePublished: "2026-09-14",
        reviewBody: "Saw this on TikTok and had to order. Completely solved my daily headache. Highly recommended!",
      },
    ],
  };

  // 2. Google Rich Snippet: BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aratbazar.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: categoryUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: productUrl,
      },
    ],
  };

  // 3. Google Rich Snippet: FAQPage Schema (Displays expandable Q&A under Google search results)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Why is ${title} cheaper on AratBazar than Amazon or local stores?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `AratBazar aggregates direct verified tier-1 factory manufacturers across AliExpress, CJ Dropshipping, and Temu. By cutting out greedy retail middlemen and advertising markups, you can purchase directly at factory rate ($${sourcing.lowestPrice.toFixed(2)}).`,
        },
      },
      {
        "@type": "Question",
        name: `How long does delivery take for ${title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Estimated shipping time is ${sourcing.shippingTimeEst} with end-to-end parcel tracking provided immediately after dispatch.`,
        },
      },
      {
        "@type": "Question",
        name: `Is there a warranty or money-back guarantee for this product?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes! Every order includes a 30-Day Risk-Free Money Back Guarantee and factory direct quality inspection before shipment.`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-8 md:py-10">
      {/* 3x Google Rich Snippets JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb Navigation for SEO & User Experience */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6 overflow-hidden">
          <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1 shrink-0">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href={`/category/${category}`} className="hover:text-emerald-400 transition-colors shrink-0 font-medium">
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-semibold truncate" aria-current="page">{title}</span>
        </nav>

        {/* Interactive E-Commerce Client Component */}
        <ProductDetailClient product={product} similarProducts={similarProducts} />
      </div>
    </div>
  );
}
