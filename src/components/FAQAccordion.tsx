import { useState } from "react";
import { FAQ_LIST } from "../data/servicesData";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "../utils/contactUtils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Clear &amp; Honest Answers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Everything you need to know about water quality in Noida Sector 128, AMC plans, and filter replacements.
          </p>
        </div>

        {/* 8 FAQ Accordion Items */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl bg-white border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-sky-300 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-sky-100 text-sky-700 rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 rounded-2xl bg-white p-6 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-base font-heading">
              Have a specific RO question or machine issue?
            </h4>
            <p className="text-xs text-slate-500">
              Our technicians are happy to answer queries about TDS, membrane lifespan, or water tests.
            </p>
          </div>
          <div className="flex gap-2.5 shrink-0">
            <a
              href={getWhatsAppUrl("Hi, I have a question about my RO in Sector 128")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
            <a
              href={getPhoneUrl()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
