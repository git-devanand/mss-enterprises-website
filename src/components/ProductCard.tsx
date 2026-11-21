"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product } from "@/data/products";
import { getWhatsAppUrl } from "@/data/company";

interface ProductCardProps {
  product: Product;
  onEnquire?: (productName: string) => void;
}

export function ProductCard({ product, onEnquire }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-royal/30 transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] bg-industrial-grey overflow-hidden"
      >
        <Image
          src={product.image}
          alt={`${product.name} — M.S.S. Enterprises Lucknow`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-navy/90 text-white backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading font-bold text-lg text-navy group-hover:text-royal transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Features */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-600 flex-1">
          {product.features.slice(0, 3).map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-royal shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            {onEnquire ? (
              <button
                type="button"
                onClick={() => onEnquire(product.name)}
                className="px-3.5 py-2.5 rounded-lg bg-industrial-orange hover:bg-industrial-orangeHover text-white text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                Enquire Now
              </button>
            ) : (
              <Link
                href={`/products/${product.slug}#enquiry`}
                className="px-3.5 py-2.5 rounded-lg bg-industrial-orange hover:bg-industrial-orangeHover text-white text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                Enquire Now
              </Link>
            )}

            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-royal hover:text-navy transition-colors"
          >
            View Machine Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
