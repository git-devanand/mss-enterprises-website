import type { Metadata } from "next";
import { GalleryClient } from "@/components/GalleryClient";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Industrial Machinery Gallery",
  description:
    "View actual photographs of paper plate making machines, dona machines, thermocol machinery, paper cup machines, laser cutting, CNC routers, and industrial equipment from M.S.S. Enterprises.",
};

export default function GalleryPage() {
  return (
    <div className="bg-industrial-grey min-h-screen">
      <section className="bg-navy text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
            Visual Showcase
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Machinery Gallery
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base">
            Actual photographs of industrial machinery and manufacturing units supplied by {COMPANY.name}. Filter by category or click any image to inspect closely.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <GalleryClient />
      </section>
    </div>
  );
}
