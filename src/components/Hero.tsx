import { Phone, MessageCircle, ShieldCheck, Star, Clock, CheckCircle, Wrench, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getPhoneUrl, getWhatsAppUrl } from "../utils/contactUtils";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenTdsTool: () => void;
}

export function Hero({ onOpenBooking, onOpenTdsTool }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-sky-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Decorative ambient water backdrop elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-x-24 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Urgency & Local Alert Pill */}
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs text-xs sm:text-sm text-slate-800 mb-5 animate-pulse-subtle">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="font-semibold text-sky-800">Sector 128 Dispatch Hub:</span>
          <span className="text-slate-600">Technicians active in Wish Town, 127, 126, 131, 132, 134</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">
            ⚡ 45-Min Doorstep
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subhead, Primary CTAs & Micro Trust */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
              RO Not Working?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">
                We'll Fix It Today
              </span>{" "}
              in Sector 128 &amp; Nearby.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Same-day RO service, filter change &amp; AMC plans. All brands. Trusted by{" "}
              <span className="font-semibold text-slate-900">500+ Noida families</span> in Jaypee Wish Town,
              Kalpataru, and Expressway sectors.
            </p>

            {/* Quick Price Anchor Highlights */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-slate-700">
              <span className="inline-flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Service Visit: <strong className="text-slate-900">₹399</strong>
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Filter Set: <strong className="text-slate-900">₹599</strong>
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Annual AMC: <strong className="text-slate-900">₹1,499/yr</strong>
              </span>
            </div>

            {/* High-Impact Primary CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Call CTA */}
              <a
                id="hero-call-cta"
                href={getPhoneUrl()}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Now: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                id="hero-whatsapp-cta"
                href={getWhatsAppUrl("Hi AquaFix Noida, I need urgent RO repair/service in Sector 128")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Us (Instant Reply)</span>
              </a>
            </div>

            {/* Micro-CTAs & Trust Badges under buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <button
                type="button"
                onClick={onOpenBooking}
                className="text-sky-700 font-semibold underline underline-offset-4 hover:text-sky-800 cursor-pointer"
              >
                Or fill 30-sec booking form →
              </button>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={onOpenTdsTool}
                className="text-teal-700 font-semibold underline underline-offset-4 hover:text-teal-800 cursor-pointer flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" /> Check Noida TDS Guide
              </button>
            </div>

            {/* Trust Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Same-Day</div>
                  <div className="text-[11px] text-slate-500">45-90 min slot</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">All Brands</div>
                  <div className="text-[11px] text-slate-500">Kent, Aquaguard+</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">30-Day Warranty</div>
                  <div className="text-[11px] text-slate-500">On all repairs</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">4.9★ Google</div>
                  <div className="text-[11px] text-slate-500">520+ Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Live Service Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-tr from-sky-900 via-sky-800 to-slate-800 p-4 sm:p-6 text-white shadow-xl overflow-hidden border border-sky-700/50">
              {/* Background water wave graphic overlay */}
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Header inside visual card */}
              <div className="flex items-center justify-between border-b border-sky-700/70 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                    Noida RO Specialist On-Call
                  </span>
                </div>
                <span className="text-[11px] font-medium bg-sky-700/60 px-2 py-0.5 rounded text-sky-200">
                  Wish Town Hub
                </span>
              </div>

              {/* Visual Showcase: Technician Diagnostic simulation with real TDS metrics */}
              <div className="space-y-3.5">
                {/* Visual Banner */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900/80 border border-sky-500/30 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 font-bold text-lg shrink-0">
                      RO
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        High TDS Treatment Specialist
                      </h4>
                      <p className="text-xs text-sky-200">
                        Calibrated for Noida Groundwater (1,200+ ppm)
                      </p>
                    </div>
                  </div>

                  {/* Real-time comparison card: Before vs After TDS */}
                  <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <div className="p-2 rounded bg-rose-950/40 border border-rose-500/30">
                      <span className="text-[10px] text-rose-300 font-medium block">Raw Noida Tap Water</span>
                      <span className="text-lg font-black text-rose-400">1,340 ppm</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">High minerals, hard water</span>
                    </div>
                    <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30">
                      <span className="text-[10px] text-emerald-300 font-medium block">After AquaFix Service</span>
                      <span className="text-lg font-black text-emerald-400">95 ppm</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Sweet, pure &amp; healthy</span>
                    </div>
                  </div>
                </div>

                {/* 3 Key Check items */}
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/60">
                    <span className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      100% Genuine Sealed Filter Cartridges
                    </span>
                    <span className="text-[11px] font-bold text-sky-300">ISO Certified</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/60">
                    <span className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      Digital TDS Meter Reading in Front of You
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400">FREE</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/60">
                    <span className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      Written 30-Day Doorstep Guarantee
                    </span>
                    <span className="text-[11px] font-bold text-amber-300">Warranty Card</span>
                  </div>
                </div>

                {/* Direct quick action inside card */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Instant Doorstep Visit Booking</span>
                    <span>→</span>
                  </button>
                  <p className="text-[11px] text-center text-sky-300 mt-1.5">
                    Pay only after service completion via UPI or Cash
                  </p>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white text-slate-800 p-2.5 sm:p-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2.5 text-xs font-semibold">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-900 font-bold">Police Verified Staff</div>
                <div className="text-[11px] text-slate-500 font-normal">Uniformed &amp; ID Badged</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
