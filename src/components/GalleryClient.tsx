"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/products";
import { getWhatsAppUrl } from "@/data/company";

export function GalleryClient() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + visibleItems.length) % visibleItems.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % visibleItems.length);
  };

  const currentItem = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-navy text-white shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:border-royal hover:text-royal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style Responsive Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {visibleItems.map((item, idx) => (
          <div
            key={item.id}
            className="break-inside-avoid group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => openLightbox(idx)}
              className="relative block w-full bg-industrial-grey overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-royal"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-navy text-xs font-bold shadow-md">
                  <ZoomIn className="w-4 h-4 text-industrial-orange" />
                  View Full Image
                </span>
              </div>
            </button>

            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-royal">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-sm text-navy mt-0.5">
                  {item.title}
                </h3>
              </div>
              {item.productSlug && (
                <Link
                  href={`/products/${item.productSlug}`}
                  className="shrink-0 text-xs font-semibold text-industrial-orange hover:underline"
                >
                  Details →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {visibleItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative w-full h-[65vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="90vw"
                className="object-contain p-4"
              />
            </div>
            <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
              <div>
                <span className="text-xs font-semibold text-industrial-orange uppercase tracking-wider">
                  {currentItem.category}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  {currentItem.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                {currentItem.productSlug && (
                  <Link
                    href={`/products/${currentItem.productSlug}`}
                    onClick={closeLightbox}
                    className="px-4 py-2 rounded-lg bg-royal hover:bg-royal-light text-white text-xs sm:text-sm font-semibold"
                  >
                    View Machine
                  </Link>
                )}
                <a
                  href={getWhatsAppUrl(currentItem.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
