import { TRUST_POINTS } from "../data/servicesData";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getPhoneUrl, getWhatsAppUrl } from "../utils/contactUtils";
import { Clock, ShieldCheck, CreditCard, Award, CheckCircle2, Users, Star, ArrowRight } from "lucide-react";

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-6 h-6 text-sky-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-sky-600" />;
      case "Award":
        return <Award className="w-6 h-6 text-sky-600" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-sky-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-sky-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-sky-600 text-sky-600" />
            Noida’s Most Recommended Water Care
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why 500+ Noida Families Choose AquaFix
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            We operate locally in Sector 128 with honest pricing, zero fake part replacements, and respect for your home.
          </p>
        </div>

        {/* 6 Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5">
                  {renderIcon(point.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-sky-700">
                <span>Verified Standard</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Real Stats Metric Bar */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-sky-600 font-heading">520+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Noida Homes Serviced</div>
            <div className="text-[11px] text-slate-500">In Sector 128 &amp; Expressway</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-heading">45 Mins</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Average Response</div>
            <div className="text-[11px] text-slate-500">Same-day doorstep reach</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-500 font-heading">4.9 ★</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Google Rating</div>
            <div className="text-[11px] text-slate-500">Verified resident reviews</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-teal-600 font-heading">30 Days</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Service Warranty</div>
            <div className="text-[11px] text-slate-500">100% Peace of mind</div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-10 text-center flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <span>Book Same-Day Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={getPhoneUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm transition-colors"
          >
            <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
