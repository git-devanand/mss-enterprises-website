import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { COMPANY, getWhatsAppUrl } from "@/data/company";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us & Request Quotation",
  description:
    "Contact M.S.S. Enterprises in Lucknow, Uttar Pradesh for industrial machinery quotations. Call 7985816594, 7233839433, 8808505944 or send an enquiry online.",
};

export default function ContactPage() {
  return (
    <div className="bg-industrial-grey min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
            Get in Touch
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Contact Us &amp; Request a Quotation
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base">
            Connect directly with {COMPANY.name} in Lucknow for machinery details, availability, and business quotations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
              <div>
                <h2 className="font-heading font-bold text-xl text-navy">
                  {COMPANY.name}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Proprietor: <strong className="text-navy">{COMPANY.proprietor}</strong>
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy">
                    Phone Numbers (Click to Call)
                  </h3>
                  <div className="mt-1.5 flex flex-col space-y-1 text-sm">
                    {COMPANY.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:+91${phone}`}
                        className="font-semibold text-royal hover:text-industrial-orange transition-colors"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy">
                    Business Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 block text-sm font-semibold text-royal hover:text-industrial-orange break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy">
                    Business Address
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {COMPANY.address.full}
                  </p>
                  <a
                    href={COMPANY.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-industrial-orange hover:underline"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Box */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp (+91 {COMPANY.phones[1]})
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-extrabold text-2xl text-navy">
                Send a Business Enquiry
              </h2>
              <p className="text-sm text-slate-600 mt-1 mb-6">
                Share the machinery you are interested in and our team will contact you with quotation details.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="font-heading font-bold text-base text-navy">
              Location Map — Kalyanpur Ring Road, Lucknow
            </h2>
            <a
              href={COMPANY.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-royal hover:underline"
            >
              Get Directions →
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 bg-slate-100">
            <iframe
              title="M.S.S. Enterprises Lucknow Location"
              src={COMPANY.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
