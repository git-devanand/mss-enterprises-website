"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { EnquiryModal } from "./EnquiryModal";

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalProduct, setModalProduct] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm mb-8 space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search machines (e.g., Single Die, Paper Cup, Laser Cutting, RO Plant)..."
            aria-label="Search industrial machinery"
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-navy"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
              selectedCategory === "all"
                ? "bg-navy text-white"
                : "bg-industrial-grey text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Machinery ({PRODUCTS.length})
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                selectedCategory === cat.slug
                  ? "bg-royal text-white"
                  : "bg-industrial-grey text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              onEnquire={(name) => setModalProduct(name)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <p className="font-heading font-bold text-lg text-navy">
            No matching machinery found
          </p>
          <p className="text-sm text-slate-600 mt-1">
            Try clearing your search or selecting another category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-5 py-2.5 rounded-lg bg-royal text-white text-sm font-semibold hover:bg-royal-dark"
          >
            Reset Filters
          </button>
        </div>
      )}

      <EnquiryModal
        open={Boolean(modalProduct)}
        productName={modalProduct || undefined}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
}
