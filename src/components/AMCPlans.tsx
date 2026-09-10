import { AMC_PLANS } from "../data/servicesData";
import { getWhatsAppUrl } from "../utils/contactUtils";
import { Check, MessageCircle, Shield, HelpCircle, ArrowRight } from "lucide-react";

interface AMCPlansProps {
  onSelectPlan: (planName: string) => void;
}

export function AMCPlans({ onSelectPlan }: AMCPlansProps) {
  return (
    <section id="amc" className="py-14 sm:py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            365 Days Guaranteed Pure Water
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Annual Maintenance Contracts (AMC) in Noida
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Noida’s high-TDS water chokes standard filters every 3–4 months. Save up to 50% over individual service calls with an AMC plan.
          </p>
        </div>

        {/* 3 AMC Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {AMC_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? "bg-gradient-to-b from-sky-50 to-white border-2 border-sky-500 shadow-xl lg:-translate-y-2"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  ★ MOST POPULAR IN NOIDA ★
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    {plan.highlight}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 font-heading">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    {plan.description}
                  </p>
                </div>

                <div className="my-6 pb-6 border-b border-slate-200 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    What's Included:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600 font-bold" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.exclusions && plan.exclusions.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      {plan.exclusions.map((ex, idx) => (
                        <div key={idx} className="text-[11px] text-slate-500 italic">
                          * {ex}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 space-y-2.5">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white shadow-md hover:shadow-lg"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl(`Hi, I would like to inquire about the ${plan.name} (${plan.price}${plan.period})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Ask details on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Below Recommendation Strip: Not sure? WhatsApp us — 2-min recommendation. */}
        <div className="mt-12 rounded-2xl bg-sky-50 border border-sky-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 flex items-center justify-center shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Not sure which plan matches your purifier?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                WhatsApp us your RO brand and sector. Get an honest 2-minute recommendation from our Noida water specialist.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Hi, I'm not sure which AMC plan is best for my RO purifier. Please guide me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            WhatsApp Us — 2-Min Recommendation
          </a>
        </div>
      </div>
    </section>
  );
}
