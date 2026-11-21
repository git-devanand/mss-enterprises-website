import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Settings,
  Layers,
  Info,
} from "lucide-react";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { COMPANY, getWhatsAppUrl } from "@/data/company";
import { ProductGallery } from "@/components/ProductGallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Machine Not Found" };
  }
  return {
    title: `${product.name} — Supplier in Lucknow`,
    description: `${product.shortDescription} Enquire with ${COMPANY.name}, Lucknow for verified technical specifications and quotation.`,
    openGraph: {
      title: `${product.name} | ${COMPANY.name}`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.detailedDescription,
    category: product.category,
    image: product.gallery,
    brand: {
      "@type": "Organization",
      name: COMPANY.name,
    },
  };

  return (
    <div className="bg-white pb-20 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-industrial-grey border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-600"
          >
            <Link href="/" className="hover:text-royal">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/products" className="hover:text-royal">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-navy">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Right: Core Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
                {product.name}
              </h1>
              <p className="text-slate-600 mt-4 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#enquiry"
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orangeHover text-white font-semibold text-sm shadow-sm transition-colors"
              >
                Request Quotation
              </a>
              <a
                href={getWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
              <a
                href={`tel:+91${COMPANY.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-300 hover:border-navy text-navy font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-industrial-orange" />
                Call
              </a>
            </div>

            {/* Key Features */}
            <div className="bg-industrial-grey rounded-2xl p-5 border border-slate-200/80">
              <h2 className="font-heading font-bold text-base text-navy flex items-center gap-2 mb-3">
                <Settings className="w-4 h-4 text-royal" />
                Key Features
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications & Configurations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-heading font-bold text-sm text-navy flex items-center gap-1.5 mb-2.5">
                  <Layers className="w-4 h-4 text-royal" />
                  Applications
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {product.applications.map((app) => (
                    <li key={app}>• {app}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-heading font-bold text-sm text-navy flex items-center gap-1.5 mb-2.5">
                  <Info className="w-4 h-4 text-royal" />
                  Available Configurations
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {product.configurations.map((cfg) => (
                    <li key={cfg}>• {cfg}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 rounded-2xl border border-slate-200 overflow-hidden">
          <div className="bg-navy text-white px-6 py-4">
            <h2 className="font-heading font-bold text-lg text-white">
              Technical Specifications
            </h2>
          </div>
          <div className="p-6 bg-white">
            {product.specifications.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <tbody>
                    {product.specifications.map((spec) => (
                      <tr key={spec.label} className="border-b border-slate-200 last:border-0">
                        <th className="py-3 pr-4 font-semibold text-navy w-1/3">
                          {spec.label}
                        </th>
                        <td className="py-3 text-slate-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-industrial-grey rounded-xl p-5 border border-slate-200">
                <div>
                  <p className="font-semibold text-navy text-sm">
                    Verified Technical Specifications Available on Request
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Machine configurations, power requirements, die compatibility, and current pricing are shared directly with your quotation to ensure accuracy.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Spec Sheet
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Product Enquiry Form */}
        <div
          id="enquiry"
          className="mt-12 scroll-mt-24 rounded-2xl bg-industrial-grey border border-slate-200 p-6 sm:p-8"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
              Direct Quotation
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-navy mt-1">
              Enquire About {product.name}
            </h2>
            <p className="text-sm text-slate-600 mt-1 mb-6">
              Fill out the form below and our team at {COMPANY.name} will reach out with verified details and pricing.
            </p>
            <EnquiryForm defaultProduct={product.name} />
          </div>
        </div>

        {/* Related Machinery */}
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-extrabold text-navy mb-6">
            Related Industrial Machinery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile Enquiry Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 shadow-2xl grid grid-cols-2 gap-3">
        <a
          href="#enquiry"
          className="flex items-center justify-center py-3 rounded-lg bg-industrial-orange text-white text-sm font-bold"
        >
          Enquire Now
        </a>
        <a
          href={getWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-emerald-600 text-white text-sm font-bold"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
