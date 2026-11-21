import Link from "next/link";
import { Phone, Mail, MapPin, Factory, MessageCircle } from "lucide-react";
import { COMPANY, getWhatsAppUrl } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Overview */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Factory className="w-6 h-6 text-industrial-orange" />
              </div>
              <div>
                <span className="block font-heading font-bold text-lg text-white leading-tight">
                  {COMPANY.name}
                </span>
                <span className="block text-xs text-slate-400">
                  {COMPANY.tagline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Industrial machinery and equipment manufacturing and supply based in Lucknow, Uttar Pradesh. Serving entrepreneurs, wholesalers, distributors, and manufacturing units.
            </p>
            <p className="text-xs text-slate-400">
              <span className="text-white font-semibold">Proprietor:</span>{" "}
              {COMPANY.proprietor}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-white font-bold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-industrial-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-industrial-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-industrial-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-industrial-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-industrial-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="font-heading text-white font-bold text-base mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products?category=paper-plate-dona-machines"
                  className="hover:text-industrial-orange transition-colors"
                >
                  Paper Plate Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=thermocol-plate-machines"
                  className="hover:text-industrial-orange transition-colors"
                >
                  Thermocol Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=paper-cup-glass-machines"
                  className="hover:text-industrial-orange transition-colors"
                >
                  Paper Cup Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products/laser-cutting-machine"
                  className="hover:text-industrial-orange transition-colors"
                >
                  Laser Cutting Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products/cnc-router-machine"
                  className="hover:text-industrial-orange transition-colors"
                >
                  CNC Router Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=ro-water-treatment-plants"
                  className="hover:text-industrial-orange transition-colors"
                >
                  RO Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-heading text-white font-bold text-base mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-1" />
                <span className="text-slate-300 leading-relaxed">
                  {COMPANY.address.full}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-industrial-orange shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  {COMPANY.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+91${phone}`}
                      className="hover:text-industrial-orange transition-colors"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-industrial-orange shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-industrial-orange transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Lucknow, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
