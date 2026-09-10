import { useState, useEffect } from "react";
import { X, Tag, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getWhatsAppUrl } from "../utils/contactUtils";

interface ExitIntentModalProps {
  onClaimCoupon: () => void;
}

export function ExitIntentModal({ onClaimCoupon }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only enable on desktop screens
    if (window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse leaves top of document
      if (e.clientY <= 10 && !hasTriggered) {
        const dismissed = sessionStorage.getItem("exit_modal_dismissed");
        if (!dismissed) {
          setIsOpen(true);
          setHasTriggered(true);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("exit_modal_dismissed", "true");
  };

  const handleClaim = () => {
    handleClose();
    onClaimCoupon();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
          <Tag className="w-3.5 h-3.5 text-amber-600" />
          Wait! Special Noida Sector 128 Discount
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 font-heading leading-tight">
          Get Flat ₹200 OFF Your First RO Service or Filter Change
        </h3>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Don't drink unfiltered high-TDS water today. Our certified technician can visit your society within 45 to 90 minutes.
        </p>

        {/* Coupon Card */}
        <div className="my-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center">
          <span className="text-xs text-sky-800 font-semibold block uppercase tracking-wide">
            Your Exclusive Neighborhood Voucher
          </span>
          <div className="text-2xl font-mono font-black text-sky-700 tracking-widest my-1">
            NOIDA200
          </div>
          <span className="text-[11px] text-slate-500">
            Valid today for Sector 128, 127, 126, 131, 132, 134 residents
          </span>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleClaim}
            className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply ₹200 OFF &amp; Book Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl("Hi, I want to claim the ₹200 OFF NOIDA200 coupon for my RO service in Sector 128")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            Claim Voucher via WhatsApp
          </a>
        </div>

        <div className="mt-4 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Zero advance payment. Pay only after 100% satisfaction.
        </div>
      </div>
    </div>
  );
}
