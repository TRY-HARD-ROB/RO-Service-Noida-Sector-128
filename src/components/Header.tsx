import { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getPhoneUrl, getWhatsAppUrl } from "../utils/contactUtils";
import { Phone, MessageCircle, Menu, X, Droplet, Clock, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "AMC Plans", href: "#amc" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Service Area", href: "#service-area" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm py-3.5 border-b border-slate-100"
      }`}
    >
      {/* Top micro-bar on desktop: Local badge & quick hours */}
      <div className="hidden lg:block border-b border-slate-100 pb-1.5 mb-1.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live in Noida Sector 128 (Wish Town, 127, 126, 131, 132, 134)
            </span>
            <span className="inline-flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {BUSINESS_CONFIG.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              <ShieldCheck className="w-3.5 h-3.5" /> 30-Day Service Warranty
            </span>
            <a
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              ★ 4.9 on Google (520+ Reviews)
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-700 to-sky-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Droplet className="w-5 h-5 fill-white text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 font-heading">
                {BUSINESS_CONFIG.brandName}
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-sky-700 font-medium tracking-wide uppercase">
              Sector 128 • Doorstep RO Service
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-600 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-sky-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="header-call-btn"
            href={getPhoneUrl()}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>{BUSINESS_CONFIG.phoneDisplay}</span>
          </a>

          <a
            id="header-wa-btn"
            href={getWhatsAppUrl("Hi, I want to book RO service in Sector 128 Noida")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          <button
            id="header-book-btn"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-sm hover:shadow transition-all"
          >
            Book Service
          </button>
        </div>

        {/* Mobile Action buttons & Menu Trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={getPhoneUrl()}
            aria-label="Call Now"
            className="p-2 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="px-2.5 py-1.5 text-xs font-bold text-white bg-sky-600 rounded-lg"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-slate-800 font-medium hover:bg-sky-50 hover:text-sky-700 rounded-lg text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <a
              href={getPhoneUrl()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              Call Now
            </a>
            <a
              href={getWhatsAppUrl("Hi, I want to book RO service in Sector 128")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
