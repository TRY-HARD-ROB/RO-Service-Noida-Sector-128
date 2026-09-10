import { HOW_IT_WORKS_STEPS } from "../data/servicesData";
import { PhoneCall, Truck, CheckSquare, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "../utils/contactUtils";

export function HowItWorks() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "PhoneCall":
        return <PhoneCall className="w-6 h-6 text-sky-600" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-sky-600" />;
      case "CheckSquare":
        return <CheckSquare className="w-6 h-6 text-sky-600" />;
      default:
        return <PhoneCall className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-heading">
            How Doorstep RO Service Works
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Zero friction. No tedious app signups. Direct human contact on WhatsApp or call.
          </p>
        </div>

        {/* 3 Step Cards with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle line connector for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-200 -translate-y-8 z-0" />

          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              {/* Step indicator badge */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-300/60 flex items-center justify-center mb-5 shadow-xs relative">
                {renderIcon(stepItem.icon)}
                <span className="absolute -top-2.5 -right-2.5 bg-sky-600 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-xs">
                  {stepItem.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                {stepItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick action strip */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Hi, I want to book step 1 right now for Sector 128")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Book on WhatsApp Now
          </a>
          <a
            href={getPhoneUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-sky-600" />
            Call Directly
          </a>
        </div>
      </div>
    </section>
  );
}
