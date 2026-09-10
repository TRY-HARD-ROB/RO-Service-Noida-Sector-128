import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getPhoneUrl, getWhatsAppUrl } from "../utils/contactUtils";

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export function FloatingMobileBar({ onOpenBooking }: FloatingMobileBarProps) {
  return (
    <aside
      id="floating-mobile-bar"
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Now */}
        <a
          id="mobile-call-action"
          href={getPhoneUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white font-bold text-xs active:bg-slate-800 transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 text-sky-400 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          id="mobile-wa-action"
          href={getWhatsAppUrl("Hi AquaFix Noida, I need urgent RO repair/service in Sector 128")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-xs active:bg-emerald-700 transition-colors shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book */}
        <button
          id="mobile-book-action"
          type="button"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-600 text-white font-bold text-xs active:bg-sky-700 transition-colors shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </aside>
  );
}
