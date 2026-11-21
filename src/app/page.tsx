import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Headphones,
  ClipboardCheck,
  Wrench,
  Briefcase,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/products";
import { COMPANY, getWhatsAppUrl } from "@/data/company";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/MotionWrapper";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  const trustHighlights = [
    {
      icon: Layers,
      title: "Wide Range of Industrial Machinery",
      desc: "Paper plate, thermocol, paper cup, lamination, laser, CNC, plotter, and RO plants.",
    },
    {
      icon: Briefcase,
      title: "Customer-Focused Solutions",
      desc: "Equipment options aligned with startup, wholesale, and commercial production needs.",
    },
    {
      icon: Wrench,
      title: "Professional Technical Support",
      desc: "Guidance on machine selection, operational requirements, and setup planning.",
    },
    {
      icon: ClipboardCheck,
      title: "Business Enquiry Assistance",
      desc: "Prompt quotation support via phone, email, and WhatsApp Business.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Diverse Machinery Portfolio",
      desc: "Comprehensive selection spanning disposable tableware manufacturing, laser & CNC fabrication, and water treatment.",
    },
    {
      title: "Business-Oriented Solutions",
      desc: "Practical equipment recommendations tailored for entrepreneurs, distributors, and industrial buyers.",
    },
    {
      title: "Customer Support",
      desc: "Direct communication with our Lucknow team for pre-purchase guidance and after-enquiry assistance.",
    },
    {
      title: "Machinery Enquiry Assistance",
      desc: "Fast, transparent quotation workflows over WhatsApp, phone call, or online enquiry form.",
    },
    {
      title: "Industrial Equipment Expertise",
      desc: "Focused on dependable machinery supplied from Plot No. 18, 19, Kalyanpur Ring Road, Lucknow.",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-royal-dark opacity-95" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full bg-industrial-orange" />
                Industrial Machinery &amp; Equipment — Lucknow, Uttar Pradesh
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15]">
                Powering Industries with Reliable Machinery &amp; Innovative Solutions.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Your trusted partner for industrial machinery, manufacturing equipment, and customized business solutions. Explore our extensive range of machinery designed to support businesses across multiple industries.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orangeHover text-white font-semibold text-sm sm:text-base shadow-lg shadow-industrial-orange/25 transition-all"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all"
                >
                  Get a Free Quotation
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                <a
                  href={`tel:+91${COMPANY.phones[0]}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-industrial-orange" />
                  +91 {COMPANY.phones[0]}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  WhatsApp: +91 {COMPANY.phones[1]}
                </a>
              </div>
            </div>

            {/* Hero Machinery Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white/10 p-3 border border-white/15 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/hero/hero-machinery.webp"
                    alt="Industrial Hydraulic Paper Plate & Press Machinery — M.S.S. Enterprises"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white p-1">
                    <Image
                      src="/images/paper-plate-machines/double-die-machine.webp"
                      alt="Double Die Paper Plate Machine"
                      fill
                      sizes="150px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white p-1">
                    <Image
                      src="/images/paper-cup-machines/paper-cup-making-machine.webp"
                      alt="Paper Cup Making Machine"
                      fill
                      sizes="150px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white p-1">
                    <Image
                      src="/images/laser-machines/laser-cutting-machine.webp"
                      alt="Laser Cutting Machine"
                      fill
                      sizes="150px"
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST HIGHLIGHTS */}
      <section className="bg-industrial-grey border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={idx * 0.06}>
                  <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm h-full flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-royal/10 text-royal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-sm text-navy">
                        {item.title}
                      </h2>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
                Machinery Portfolio
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                Industrial Product Categories
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-navy"
            >
              Browse Full Catalogue
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <FadeIn key={cat.slug} delay={idx * 0.05}>
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-royal/40 transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] bg-industrial-grey overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-navy group-hover:text-royal transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-industrial-orange uppercase tracking-wider">
                      Explore Category
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 lg:py-20 bg-industrial-grey industrial-grid-bg border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
                Featured Equipment
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                Featured Industrial Machinery
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-navy"
            >
              View All {PRODUCTS.length} Machines
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
                Why M.S.S. Enterprises
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
                Focused on Practical, Reliable Equipment for Growing Businesses
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Operating from Kalyanpur Ring Road in Lucknow, Uttar Pradesh, {COMPANY.name} supports entrepreneurs, wholesalers, and industrial buyers with straightforward machinery enquiry assistance and dependable supply.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy hover:bg-royal text-white text-sm font-semibold transition-colors"
                >
                  About Our Company
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-navy text-navy text-sm font-semibold transition-colors"
                >
                  View Machinery Gallery
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, idx) => (
                <FadeIn
                  key={item.title}
                  delay={idx * 0.05}
                  className={idx === whyChooseUs.length - 1 ? "sm:col-span-2" : ""}
                >
                  <div className="p-5 rounded-xl bg-industrial-grey border border-slate-200/80 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-industrial-orange shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-heading font-bold text-base text-navy">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION BANNER */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-royal opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-industrial-orange text-xs font-bold uppercase tracking-widest mb-2">
                <Headphones className="w-4 h-4" />
                Direct Business Enquiry
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Looking for the Right Industrial Machinery?
              </h2>
              <p className="text-slate-300 mt-2 text-sm sm:text-base">
                Share your production requirements with {COMPANY.name} and receive tailored machine details and quotations directly from our team.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orangeHover text-white font-semibold text-sm shadow-lg transition-colors"
              >
                Request a Quotation
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
