import { useState, useEffect, FormEvent } from "react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { BookingFormData } from "../types";
import { formatBookingWhatsAppText, getEmailMailto } from "../utils/contactUtils";
import { Calendar, Clock, CheckCircle2, Send, Tag, Phone, MapPin, Wrench, ShieldCheck, Check } from "lucide-react";

interface BookingFormProps {
  initialService?: string;
  onSuccessClose?: () => void;
}

export function BookingForm({ initialService = "", onSuccessClose }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phone: "",
    sector: "Sector 128 (Wish Town)",
    roBrand: "Kent",
    serviceNeeded: initialService || "Filter Change (Sediment + Carbon) — from ₹599",
    preferredTime: "Today within 45-90 minutes (Immediate)",
    notes: "",
  });

  const [couponApplied, setCouponApplied] = useState(true);
  const [couponCode, setCouponCode] = useState("NOIDA200");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailSentNotice, setEmailSentNotice] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp message
    const waText = formatBookingWhatsAppText(formData, couponApplied);
    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;

    // Automatically open WhatsApp in new window/tab for the customer
    const openWindow = window.open(waUrl, "_blank");

    // Also trigger email record or dispatch
    setEmailSentNotice(true);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      sector: "Sector 128 (Wish Town)",
      roBrand: "Kent",
      serviceNeeded: "Filter Change (Sediment + Carbon) — from ₹599",
      preferredTime: "Today within 45-90 minutes (Immediate)",
      notes: "",
    });
    if (onSuccessClose) {
      onSuccessClose();
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-to-b from-white to-sky-50 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Guaranteed Response Within 10 Minutes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Book Your RO Service Visit
          </h2>
          <p className="text-base text-slate-600 mt-2">
            No advance payment needed. Pay after inspection &amp; repair directly via UPI or cash.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
          {/* Coupon alert bar */}
          <div className="mb-8 p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-amber-900 font-semibold">
              <Tag className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Exclusive Noida Offer: <strong>Flat ₹200 OFF</strong> on your first service visit!
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="font-mono bg-white px-2.5 py-1 rounded border border-amber-300 font-bold text-amber-800 text-xs tracking-wider">
                NOIDA200
              </span>
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-0.5">
                <Check className="w-3 h-3" /> Auto-applied
              </span>
            </div>
          </div>

          {submitted ? (
            /* Success State */
            <div className="text-center py-8 sm:py-12 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-heading">
                Booking Request Sent!
              </h3>
              <p className="text-base font-semibold text-emerald-700 mb-2">
                "Thanks! We'll call you within 10 minutes to confirm your technician visit."
              </p>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your details have been pre-formatted for our Noida dispatch team in Sector 128. If WhatsApp didn't open automatically, tap below:
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    formatBookingWhatsAppText(formData, couponApplied)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  Open WhatsApp Chat
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                >
                  Book Another Visit
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
                Direct helpline: <a href={`tel:${BUSINESS_CONFIG.phoneNumber}`} className="text-sky-700 font-bold underline">{BUSINESS_CONFIG.phoneDisplay}</a>
              </div>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="e.g. Amit Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="booking-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                      +91
                    </span>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      placeholder="98712 34567"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    We call/WhatsApp this number to confirm the technician's ETA.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Sector / Address */}
                <div>
                  <label htmlFor="booking-sector" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Noida Sector / Society Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="booking-sector"
                    type="text"
                    required
                    placeholder="e.g. Tower 3, Wish Town, Sector 128"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                  />
                </div>

                {/* RO Brand */}
                <div>
                  <label htmlFor="booking-brand" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    RO Brand <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="booking-brand"
                    value={formData.roBrand}
                    onChange={(e) => setFormData({ ...formData, roBrand: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 bg-white transition-all"
                  >
                    {BUSINESS_CONFIG.supportedBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Needed */}
                <div>
                  <label htmlFor="booking-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Service Needed <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 bg-white transition-all"
                  >
                    <option value="RO Service Visit + TDS Check — from ₹399">
                      RO Service Visit + TDS Check — from ₹399
                    </option>
                    <option value="Filter Change (Sediment + Carbon) — from ₹599">
                      Filter Change (Sediment + Carbon) — from ₹599
                    </option>
                    <option value="Membrane Replacement — from ₹1,499">
                      RO Membrane Replacement — from ₹1,499
                    </option>
                    <option value="Full Service & Deep Cleaning — from ₹999">
                      Full Service &amp; Deep Cleaning — from ₹999
                    </option>
                    <option value="New RO Installation / Shifting — from ₹499">
                      New RO Installation / Shifting — from ₹499
                    </option>
                    <option value="RO Repair (Pump/SMPS/Leak) — Quote on Call">
                      RO Repair (Pump/SMPS/Leak) — Quote on Call
                    </option>
                    <option value="AMC Basic Plan — ₹1,499/year">
                      AMC Basic Plan — ₹1,499/year
                    </option>
                    <option value="AMC Standard Plan [Most Popular] — ₹2,999/year">
                      AMC Standard Plan [Most Popular] — ₹2,999/year
                    </option>
                    <option value="AMC Comprehensive Premium — ₹4,499/year">
                      AMC Comprehensive Premium — ₹4,499/year
                    </option>
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="booking-time" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="booking-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 bg-white transition-all"
                  >
                    <option value="Today within 45-90 minutes (Immediate)">
                      ⚡ Today Immediate (45-90 Mins)
                    </option>
                    <option value="Today Afternoon (12:00 PM – 3:00 PM)">
                      Today Afternoon (12:00 PM – 3:00 PM)
                    </option>
                    <option value="Today Evening (4:00 PM – 7:00 PM)">
                      Today Evening (4:00 PM – 7:00 PM)
                    </option>
                    <option value="Tomorrow Morning (9:00 AM – 12:00 PM)">
                      Tomorrow Morning (9:00 AM – 12:00 PM)
                    </option>
                    <option value="Tomorrow Evening (4:00 PM – 7:00 PM)">
                      Tomorrow Evening (4:00 PM – 7:00 PM)
                    </option>
                    <option value="Upcoming Weekend Slot">
                      Upcoming Weekend Slot
                    </option>
                  </select>
                </div>
              </div>

              {/* Extra Notes (Optional) */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Issue Description or Extra Notes (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder="e.g. Purifier is vibrating loudly and water taste has turned salty since yesterday."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="booking-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>
                    {isSubmitting ? "Opening WhatsApp Dispatch..." : "Confirm & Send Booking on WhatsApp (Instant)"}
                  </span>
                </button>

                <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    No credit card or prepayment required
                  </span>
                  <a
                    href={getEmailMailto(formData)}
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    Prefer sending via Email? Click here
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
