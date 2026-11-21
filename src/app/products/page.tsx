import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsClient } from "@/components/ProductsClient";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Industrial Machinery & Products Catalogue",
  description:
    "Explore M.S.S. Enterprises' complete range of Paper Plate & Dona Making Machines, Thermocol Machines, Paper Cup Machines, Lamination, Laser Cutting, CNC Router, Plotter, and RO Plants in Lucknow.",
};

export default function ProductsPage() {
  return (
    <div className="bg-industrial-grey min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
            {COMPANY.name} Catalogue
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Products &amp; Industrial Machinery
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base">
            Browse our industrial machinery categories. Click any machine to view details, or request verified specifications and quotations directly from our team.
          </p>
        </div>
      </section>

      {/* Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <Suspense
          fallback={
            <div className="py-12 text-center text-slate-500">
              Loading machinery catalogue...
            </div>
          }
        >
          <ProductsClient />
        </Suspense>
      </section>
    </div>
  );
}
