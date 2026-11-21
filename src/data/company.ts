declare const process: {
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER?: string;
  };
};

export const COMPANY = {
  name: "M.S.S. Enterprises",
  tagline: "Industrial Machinery & Equipment Solutions",
  proprietor: "Mr. Tauqeer Sheikh",
  category: "Industrial Machinery and Equipment Manufacturing & Supply",
  address: {
    line1: "Plot No. 18, 19, Nehru Vihar, Kanchana Bihari Marg",
    line2: "Kalyanpur Ring Road, Lucknow, Uttar Pradesh – 226022, India",
    full: "Plot No. 18, 19, Nehru Vihar, Kanchana Bihari Marg, Kalyanpur Ring Road, Lucknow, Uttar Pradesh – 226022, India",
    city: "Lucknow",
    state: "Uttar Pradesh",
    postalCode: "226022",
    country: "IN",
  },
  phones: ["7985816594", "7233839433", "8808505944"] as const,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917233839433",
  email: "mssenterprises723@gmail.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Plot+No.+18,+19,+Nehru+Vihar,+Kanchana+Bihari+Marg,+Kalyanpur+Ring+Road,+Lucknow,+Uttar+Pradesh+226022,+India&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+No.+18,+19,+Nehru+Vihar,+Kanchana+Bihari+Marg,+Kalyanpur+Ring+Road,+Lucknow,+Uttar+Pradesh+226022,+India",
} as const;

export function getWhatsAppUrl(productName?: string, customMessage?: string): string {
  const defaultMsg = productName
    ? `Hello ${COMPANY.name}, I am interested in your ${productName}. Please share product details, specifications, and quotation.`
    : `Hello ${COMPANY.name}, I would like to enquire about your industrial machinery and request a quotation.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
}
