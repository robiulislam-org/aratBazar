"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { href: "/bibhag", label: "বিভাগসমূহ" },
    { href: "/jela", label: "জেলাসমূহ" },
    { href: "/category", label: "পণ্য বিভাগ" },
    { href: "/article", label: "আর্টিকেল" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
  ];

  return (
    <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl">🌿</span>
            <div>
              <div className="text-xl font-bold leading-tight group-hover:text-green-200 transition">
                আরতবাজার
              </div>
              <div className="text-xs text-green-200 leading-tight">
                বাংলাদেশের অর্গানিক পণ্যের তথ্যভাণ্ডার
              </div>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="flex w-full rounded-full overflow-hidden border-2 border-green-300 bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="জেলা, পণ্য বা বিভাগ খুঁজুন..."
                className="flex-1 px-4 py-2 text-gray-800 text-sm outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition"
              >
                🔍 খুঁজুন
              </button>
            </div>
          </form>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-green-600 transition"
            aria-label="মেনু"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden pb-3">
          <div className="flex rounded-full overflow-hidden border-2 border-green-300 bg-white">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="জেলা, পণ্য বা বিভাগ খুঁজুন..."
              className="flex-1 px-4 py-2 text-gray-800 text-sm outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-green-500 text-white text-sm">
              🔍
            </button>
          </div>
        </form>

        {/* Nav */}
        <nav className="hidden md:flex gap-1 pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-600 transition text-green-100 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-3 border-t border-green-600 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
