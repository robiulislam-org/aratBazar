import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CATEGORIES, INITIAL_PRODUCTS } from "@/data/productsData";
import { ProductCategory } from "@/types/product";
import ProductGrid from "@/components/ProductGrid";
import { ArrowLeft, Sparkles } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found | AratBazar",
    };
  }

  return {
    title: `${category.name} — Winning Products & Lowest Factory Sourcing`,
    description: `Discover top viral ${category.name} winning products with verified factory supplier quotes, high profit margins, and dropshipping market research on AratBazar.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = INITIAL_PRODUCTS.filter((p) => p.category === slug);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span>Categories</span>
          <span>/</span>
          <span className="text-slate-200 font-semibold">{category.name}</span>
        </div>

        {/* Category Header Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden shadow-2xl mb-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATEGORY SOURCING INTELLIGENCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              {category.name}
            </h1>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {category.description}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
              <span>Verified Winning Products: <strong className="text-emerald-400">{categoryProducts.length}</strong></span>
              <span>•</span>
              <span>Average Margin: <strong className="text-emerald-400">79%+</strong></span>
            </div>
          </div>
        </div>

        {/* Filterable Products */}
        <ProductGrid products={categoryProducts} defaultCategory={slug as ProductCategory} />
      </div>
    </div>
  );
}
