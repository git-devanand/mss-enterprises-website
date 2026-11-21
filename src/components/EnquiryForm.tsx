"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { COMPANY, getWhatsAppUrl } from "@/data/company";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().optional(),
  phone: z
    .string()
    .regex(/^[0-9+\-\s]{10,15}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  product: z.string().min(1, "Please select a machine or product"),
  quantity: z.string().optional(),
  message: z.string().min(5, "Please share brief details about your requirement"),
  website: z.string().max(0).optional(), // honeypot spam field
});

type EnquiryValues = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  defaultProduct?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export function EnquiryForm({
  defaultProduct = "",
  compact = false,
  onSuccess,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedData, setSubmittedData] = useState<EnquiryValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      product: defaultProduct,
      website: "",
    },
  });

  const onSubmit = async (data: EnquiryValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit enquiry");
      setSubmittedData(data);
      setStatus("success");
      reset({ product: defaultProduct, website: "" });
      onSuccess?.();
    } catch {
      setSubmittedData(data);
      setStatus("error");
    }
  };

  const buildFallbackWhatsApp = (data: EnquiryValues | null) => {
    if (!data) return getWhatsAppUrl(defaultProduct);
    const msg = `Hello ${COMPANY.name}, I am ${data.fullName}${
      data.companyName ? ` (${data.companyName})` : ""
    }. I am interested in: ${data.product}${
      data.quantity ? ` (Qty: ${data.quantity})` : ""
    }. Phone: ${data.phone}, Email: ${data.email}. Requirement: ${data.message}`;
    return getWhatsAppUrl(data.product, msg);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <div>
          <h3 className="font-heading font-bold text-lg text-navy">
            Enquiry Received Successfully
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Thank you for contacting {COMPANY.name}. Our team will review your requirement and respond shortly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={buildFallbackWhatsApp(submittedData)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Also Send on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-navy hover:bg-white"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Honeypot field */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      <div className={`grid grid-cols-1 ${compact ? "gap-3" : "sm:grid-cols-2 gap-4"}`}>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">
            Full Name <span className="text-industrial-orange">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            {...register("fullName")}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Business / Firm name (Optional)"
            {...register("companyName")}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
        </div>
      </div>

      <div className={`grid grid-cols-1 ${compact ? "gap-3" : "sm:grid-cols-2 gap-4"}`}>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">
            Phone Number <span className="text-industrial-orange">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. 9876543210"
            {...register("phone")}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1">
            Email Address <span className="text-industrial-orange">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${compact ? "gap-3" : "sm:grid-cols-3 gap-4"}`}>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="block text-sm font-semibold text-navy mb-1">
            Product Interested In <span className="text-industrial-orange">*</span>
          </label>
          <select
            {...register("product")}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy bg-white focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          >
            <option value="">Select a machinery category / model</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Multiple / Custom Industrial Machinery">
              Multiple / Custom Industrial Machinery
            </option>
          </select>
          {errors.product && (
            <p className="text-xs text-red-600 mt-1">{errors.product.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1">
            Quantity (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. 1 Unit"
            {...register("quantity")}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1">
          Message / Requirement <span className="text-industrial-orange">*</span>
        </label>
        <textarea
          rows={compact ? 3 : 4}
          placeholder="Tell us about your production requirement, city, or quotation details..."
          {...register("message")}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none resize-y"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            Direct submission unavailable right now. Send your enquiry instantly via WhatsApp:
          </span>
          <a
            href={buildFallbackWhatsApp(submittedData)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:underline shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Open WhatsApp
          </a>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-industrial-orange hover:bg-industrial-orangeHover disabled:opacity-60 text-white font-semibold text-sm shadow-sm transition-colors"
        >
          <Send className="w-4 h-4" />
          {status === "submitting" ? "Submitting Enquiry..." : "Submit Business Enquiry"}
        </button>

        <a
          href={getWhatsAppUrl(defaultProduct)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Directly
        </a>
      </div>
    </form>
  );
}
