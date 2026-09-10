import { SERVICES_LIST } from "../data/servicesData";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getWhatsAppUrl, getPhoneUrl } from "../utils/contactUtils";
import { Activity, Filter, Layers, Sparkles, Wrench, Cpu, Check, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return <Activity className="w-5 h-5 text-sky-600" />;
      case "Filter":
        return <Filter className="w-5 h-5 text-sky-600" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-sky-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-sky-600" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-sky-600" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-sky-600" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Transparent Pricing • Genuine Spares Only
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our RO Services &amp; Upgrades in Sector 128
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Every service includes a free digital TDS calibration before &amp; after the visit, backed by our 30-day guarantee.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl bg-white border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg ${
                service.popular
                  ? "border-sky-400 ring-2 ring-sky-400/20 shadow-sm"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-sky-600 to-teal-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Most Requested
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-medium text-slate-400 block">Price</span>
                    <span className="text-xl font-extrabold text-slate-900 font-heading">
                      {service.price}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={getWhatsAppUrl(`Hi, I want to book: ${service.title} (${service.price}) in Noida`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs flex items-center justify-center"
                  title="Direct WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Supported Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Brands We Service &amp; Supply Spares For:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {BUSINESS_CONFIG.supportedBrands.map((brand) => (
              <span
                key={brand}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                {brand}
              </span>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            Have an assembled or custom cabinet system? We stock generic high-pressure membranes, booster pumps, and all adapter types.
          </div>
        </div>

        {/* Section Bottom Conversion Prompt */}
        <div className="mt-12 bg-sky-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-heading">
              Need urgent help diagnosing your RO system?
            </h4>
            <p className="text-xs sm:text-sm text-sky-200 mt-1 max-w-xl">
              Talk directly with our head Noida technician. Explain the sound or taste issue and receive an honest preliminary diagnosis with no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={getPhoneUrl()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              Call Head Technician
            </a>
            <a
              href={getWhatsAppUrl("Hi, my RO purifier is acting up. Can you help identify the issue?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
