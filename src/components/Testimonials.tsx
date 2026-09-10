import { useState } from "react";
import { TESTIMONIALS } from "../data/servicesData";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { Star, ChevronLeft, ChevronRight, CheckCircle, ExternalLink, Quote } from "lucide-react";

export function Testimonials() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevReview = () => {
    setMobileIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setMobileIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Noida Resident Reviews
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Trusted by Your Neighbors in Sector 128 &amp; Nearby
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Real feedback from families in Jaypee Wish Town, Klassic, Kosmos, and Expressway societies.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:bg-slate-50 transition-colors"
            >
              <span>Read All 520+ Reviews on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Desktop 6-Card Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {review.date}
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-sky-200 absolute -top-2 -left-1 -z-0 opacity-50" />
                  <p className="text-slate-800 text-sm font-medium relative z-10 italic leading-relaxed pt-1">
                    "{review.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" title="Verified Customer" />
                  </div>
                  <div className="text-xs text-sky-700 font-medium">
                    {review.sector}
                  </div>
                </div>
                <div className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                  {review.serviceUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Interactive Carousel */}
        <div className="md:hidden">
          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[mobileIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-medium text-slate-400">
                {TESTIMONIALS[mobileIndex].date}
              </span>
            </div>

            <div className="relative my-4">
              <Quote className="w-6 h-6 text-sky-200 absolute -top-2 -left-1 -z-0 opacity-50" />
              <p className="text-slate-800 text-base font-medium relative z-10 italic leading-relaxed pt-1">
                "{TESTIMONIALS[mobileIndex].quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  {TESTIMONIALS[mobileIndex].name}
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="text-xs text-sky-700 font-medium">
                  {TESTIMONIALS[mobileIndex].sector}
                </div>
              </div>
              <div className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                {TESTIMONIALS[mobileIndex].serviceUsed}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    mobileIndex === i ? "w-6 bg-sky-600" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 active:bg-slate-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 active:bg-slate-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
