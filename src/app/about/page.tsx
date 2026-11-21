import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  User,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { COMPANY, getWhatsAppUrl } from "@/data/company";
import { PRODUCT_CATEGORIES } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about M.S.S. Enterprises, an industrial machinery and equipment manufacturing and supplying business based in Lucknow, Uttar Pradesh, led by Proprietor Mr. Tauqeer Sheikh.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
            About {COMPANY.name}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 max-w-3xl">
            Your Partner in Industrial Machinery Solutions.
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl text-base leading-relaxed">
            Based in Lucknow, Uttar Pradesh, {COMPANY.name} is dedicated to manufacturing and supplying dependable industrial machinery and equipment for entrepreneurs, wholesalers, distributors, and manufacturing units.
          </p>
        </div>
      </section>

      {/* Company Introduction & Business Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy">
              Who We Are
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Led by Proprietor <strong className="text-navy">{COMPANY.proprietor}</strong>, {COMPANY.name} operates in the industrial machinery and equipment manufacturing and supply sector from Kalyanpur Ring Road, Lucknow.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We focus on supplying practical, business-ready machinery spanning disposable paper plate and dona making units, thermocol plate machines, paper roll lamination systems, paper cup and disposable glass machines, laser cutting, CNC router, plotter, spirit laser equipment, and RO water treatment plants.
            </p>

            <div className="pt-2 space-y-3">
              <h3 className="font-heading font-bold text-lg text-navy">
                Our Business Philosophy &amp; Customer Commitment
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-industrial-orange shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-navy">Requirement-First Guidance:</strong> Helping buyers evaluate machinery suited to their workspace, target products, and operational goals.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-industrial-orange shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-navy">Transparent Communication:</strong> Clear quotation discussions and verified specifications shared directly by our team.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-industrial-orange shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-navy">Accessible Support:</strong> Reachable via multiple phone lines, email, and WhatsApp Business for quick enquiry resolution.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-industrial-grey p-3">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/brand/mss-business-card.webp"
                  alt="M.S.S. Enterprises Official Business Card — Lucknow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-center text-slate-500 mt-2.5">
                Official Business Card — {COMPANY.name}, Lucknow
              </p>
            </div>

            <div className="rounded-2xl bg-industrial-grey border border-slate-200 p-6 space-y-3 text-sm">
              <h3 className="font-heading font-bold text-base text-navy">
                Verified Company Details
              </h3>
              <p className="flex items-center gap-2.5 text-slate-700">
                <User className="w-4 h-4 text-industrial-orange shrink-0" />
                <span>
                  <strong>Proprietor:</strong> {COMPANY.proprietor}
                </span>
              </p>
              <p className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-1" />
                <span>{COMPANY.address.full}</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-700">
                <Phone className="w-4 h-4 text-industrial-orange shrink-0" />
                <span>{COMPANY.phones.join(" / ")}</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-700">
                <Mail className="w-4 h-4 text-industrial-orange shrink-0" />
                <span>{COMPANY.email}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="bg-industrial-grey py-14 lg:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy">
                Our Machinery Categories
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore the industrial equipment segments we manufacture and supply.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-navy"
            >
              View Full Catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-royal transition-colors shadow-sm"
              >
                <h3 className="font-heading font-bold text-base text-navy">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1.5">{cat.shortDescription}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-industrial-orange hover:bg-industrial-orangeHover text-white font-semibold text-sm transition-colors"
            >
              Contact Our Team
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
