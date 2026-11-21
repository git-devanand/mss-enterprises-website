import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { COMPANY } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mssenterprises.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} | Industrial Machinery Supplier in Lucknow, India`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "M.S.S. Enterprises in Lucknow, Uttar Pradesh manufactures and supplies Paper Plate & Dona Making Machines, Thermocol Plate Machines, Paper Cup Machines, Laser Cutting, CNC Router, Plotter Machines, and RO Water Treatment Plants.",
  keywords: [
    "Industrial Machinery Supplier in Lucknow",
    "Paper Plate Making Machine in Lucknow",
    "Dona Making Machine Manufacturer",
    "Thermocol Plate Making Machine",
    "Paper Cup Making Machine Supplier",
    "CNC Router Machine Supplier",
    "Laser Cutting Machine Supplier",
    "Disposable Glass Making Machine",
    "Industrial Machinery and Equipment",
    "M.S.S. Enterprises Lucknow",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Industrial Machinery & Equipment Solutions`,
    description:
      "Reliable industrial machinery and manufacturing equipment supplier in Lucknow, Uttar Pradesh. Request a free quotation today.",
    images: [
      {
        url: "/images/hero/hero-machinery.webp",
        width: 1000,
        height: 703,
        alt: "M.S.S. Enterprises Industrial Machinery",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: COMPANY.category,
    url: siteUrl,
    telephone: COMPANY.phones.map((p) => `+91-${p}`),
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, Kalyanpur Ring Road`,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    founder: {
      "@type": "Person",
      name: COMPANY.proprietor,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-industrial-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
