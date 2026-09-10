import { BUSINESS_CONFIG } from "../config/businessConfig";
import { NOIDA_SOCIETIES } from "../data/servicesData";
import { MapPin, Navigation, Clock, ShieldCheck, PhoneCall } from "lucide-react";
import { getPhoneUrl } from "../utils/contactUtils";

export function ServiceArea() {
  return (
    <section id="service-area" className="py-14 sm:py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            Noida Expressway Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            We Serve Sector 128, 127, 126, 131, 132, 134 &amp; Nearby
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Headquartered right in Wish Town, Sector 128. Our technicians arrive in our signature service kits within 45 to 90 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sector list and society breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 font-heading">
                <Navigation className="w-5 h-5 text-sky-600" />
                Primary Doorstep Sectors &amp; Typical Arrival Times
              </h3>

              <div className="space-y-3">
                {BUSINESS_CONFIG.primarySectors.map((sector) => (
                  <div
                    key={sector.code}
                    className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between shadow-2xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {sector.code}
                      </div>
                      <div className="text-xs text-slate-500">
                        {sector.highlight}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                      <Clock className="w-3 h-3" />
                      {sector.arrivalTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Societies We Visit Daily */}
            <div className="rounded-2xl bg-sky-50/60 p-6 border border-sky-200/80">
              <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Societies We Service Daily
              </h4>
              <div className="flex flex-wrap gap-2">
                {NOIDA_SOCIETIES.map((soc, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-sky-200 text-slate-700"
                  >
                    {soc}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Don't see your society? We cover all adjacent sectors!</span>
                <a
                  href={getPhoneUrl()}
                  className="font-bold text-sky-700 hover:underline inline-flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" /> Confirm Coverage
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Lazy loaded) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
              <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-bold">Live Sector 128 Map &amp; Dispatch Centre</span>
                </div>
                <span className="text-slate-400">Noida, UP 201304</span>
              </div>

              {/* Lazy-loaded iframe */}
              <div className="w-full h-[380px] sm:h-[420px] relative bg-slate-200">
                <iframe
                  title="AquaFix Noida Sector 128 Location Map"
                  src="https://maps.google.com/maps?q=Sector%20128%20Noida%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>📍 Dispatch Point: Wish Town, Sector 128</span>
                <span className="text-emerald-700 font-semibold">● Technicians on active routes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
