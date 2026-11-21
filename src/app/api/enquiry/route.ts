import { NextResponse } from "next/server";
import { z } from "zod";
import { COMPANY } from "@/data/company";

const enquirySchema = z.object({
  fullName: z.string().min(2),
  companyName: z.string().optional(),
  phone: z.string().min(10).max(16),
  email: z.string().email(),
  product: z.string().min(1),
  quantity: z.string().optional(),
  message: z.string().min(5),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid enquiry details.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Optional Resend email forwarding if RESEND_API_KEY is configured in .env
    const resendKey = process.env.RESEND_API_KEY;
    const receiver = process.env.ENQUIRY_RECEIVER_EMAIL || COMPANY.email;

    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "M.S.S. Enterprises Website <onboarding@resend.dev>",
          to: [receiver],
          reply_to: data.email,
          subject: `New Machinery Enquiry: ${data.product} — ${data.fullName}`,
          text: [
            `New Business Enquiry for ${COMPANY.name}`,
            `----------------------------------------`,
            `Name: ${data.fullName}`,
            `Company: ${data.companyName || "N/A"}`,
            `Phone: ${data.phone}`,
            `Email: ${data.email}`,
            `Product: ${data.product}`,
            `Quantity: ${data.quantity || "N/A"}`,
            `Message:
${data.message}`,
          ].join("\n"),
        }),
      });

      if (!emailRes.ok) {
        console.error("Resend delivery failed:", await emailRes.text());
      }
    } else {
      // Logged in server console when email provider env vars are not yet configured
      console.info("[M.S.S. Enterprises Enquiry]", {
        ...data,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { ok: true, message: "Enquiry submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Enquiry API Error:", err);
    return NextResponse.json(
      { error: "Unable to process enquiry right now." },
      { status: 500 }
    );
  }
}
