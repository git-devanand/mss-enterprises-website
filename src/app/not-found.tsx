import Link from "next/link";
import { Factory, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center bg-industrial-grey px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-navy text-industrial-orange flex items-center justify-center mx-auto mb-5">
          <Factory className="w-7 h-7" />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-industrial-orange">
          404 Error
        </p>
        <h1 className="font-heading text-2xl font-extrabold text-navy mt-1">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          The page or machinery listing you are looking for could not be found.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy hover:bg-royal text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-industrial-orange hover:bg-industrial-orangeHover text-white text-sm font-semibold transition-colors"
          >
            Browse Machinery
          </Link>
        </div>
      </div>
    </div>
  );
}
