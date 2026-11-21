"use client";

import { X } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryModalProps {
  open: boolean;
  productName?: string;
  onClose: () => void;
}

export function EnquiryModal({ open, productName, onClose }: EnquiryModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-industrial-grey rounded-t-2xl">
          <div>
            <h2 id="enquiry-modal-title" className="font-heading font-bold text-lg text-navy">
              Request Quotation &amp; Details
            </h2>
            {productName && (
              <p className="text-xs text-royal font-semibold mt-0.5">{productName}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-200 hover:text-navy transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <EnquiryForm defaultProduct={productName} compact />
        </div>
      </div>
    </div>
  );
}
