"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Factory,
} from "lucide-react";
import { COMPANY, getWhatsAppUrl } from "@/data/company";
import { PRODUCT_CATEGORIES } from "@/data/products";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div className="bg-navy text-white/90 text-xs sm:text-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:+91${COMPANY.phones[0]}`}
              className="inline-flex items-center gap-1.5 hover:text-industrial-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-orange" />
              <span>+91 {COMPANY.phones[0]}</span>
            </a>
            <a
              href={`tel:+91${COMPANY.phones[1]}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-industrial-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-orange" />
              <span>+91 {COMPANY.phones[1]}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-industrial-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-industrial-orange" />
              <span>{COMPANY.email}</span>
            </a>
          </div>
          <div className="text-white/75 hidden lg:block">
            Kalyanpur Ring Road, Lucknow, Uttar Pradesh
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        aria-label="Primary Navigation"
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-md border-b border-slate-200/80" : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-navy flex items-center justify-center text-white shadow-sm group-hover:bg-royal transition-colors">
                <Factory className="w-6 h-6 text-industrial-orange" />
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-extrabold text-lg md:text-xl text-navy tracking-tight">
                  M.S.S. <span className="text-royal">Enterprises</span>
                </span>
                <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Industrial Machinery
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-royal bg-royal/5"
                    : "text-industrial-charcoal hover:text-royal hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    pathname.startsWith("/products")
                      ? "text-royal bg-royal/5"
                      : "text-industrial-charcoal hover:text-royal hover:bg-slate-50"
                  }`}
                >
                  Products &amp; Machinery
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {productsOpen && (
                  <div className="absolute left-0 top-full pt-2 w-80">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2">
                      <Link
                        href="/products"
                        className="block px-3.5 py-2.5 rounded-lg text-sm font-bold text-navy hover:bg-industrial-grey transition-colors border-b border-slate-100 mb-1"
                      >
                        View All Industrial Machinery →
                      </Link>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products?category=${cat.slug}`}
                          className="block px-3.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-industrial-grey hover:text-royal transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-royal bg-royal/5"
                      : "text-industrial-charcoal hover:text-royal hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-industrial-orange hover:bg-industrial-orangeHover shadow-sm transition-colors"
              >
                Get Quotation
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-lg text-navy hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 pt-3 pb-5 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === "/" ? "bg-royal/10 text-royal" : "text-navy"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  pathname.startsWith("/products") ? "bg-royal/10 text-royal" : "text-navy"
                }`}
              >
                Products &amp; Machinery
              </Link>
              <div className="pl-4 space-y-1 border-l-2 border-slate-200 ml-3 my-1">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products?category=${cat.slug}`}
                    className="block px-3 py-1.5 text-sm text-slate-600 hover:text-royal"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    pathname === link.href ? "bg-royal/10 text-royal" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-slate-200 grid grid-cols-2 gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-industrial-orange hover:bg-industrial-orangeHover"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
