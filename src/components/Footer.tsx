import { BUSINESS_CONFIG } from "../config/businessConfig";
import { getPhoneUrl, getWhatsAppUrl } from "../utils/contactUtils";
import { Droplet, Phone, MessageCircle, Mail, MapPin, Star, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="site-footer" className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-md">
                <Droplet className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="text-xl font-extrabold text-white font-heading">
                {BUSINESS_CONFIG.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Noida's trusted doorstep water purifier repair, filter replacement, and AMC service hub.
              Serving Jaypee Wish Town, Sector 128, and adjacent Noida Expressway societies.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold hover:bg-slate-700 transition-colors"
              >
                <Star className="w-4 h-4 fill-amber-400" />
                4.9 on Google (520+ Reviews)
              </a>
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-4 h-4" /> 30-Day Warranty
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  RO Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-sky-400 transition-colors">
                  Price List
                </a>
              </li>
              <li>
                <a href="#amc" className="hover:text-sky-400 transition-colors">
                  Annual AMC Plans
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  Noida TDS FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Book Doorstep Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sectors Served (Noida)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="font-semibold text-sky-400">
                • Sector 128 (Wish Town, Kalpataru, Pavilion)
              </li>
              <li>• Sector 127 (HCL, Tech Zone)</li>
              <li>• Sector 126 (Amity University Belt)</li>
              <li>• Sector 131 (Jaypee Klassic)</li>
              <li>• Sector 132 (DPS Expressway)</li>
              <li>• Sector 134 (Jaypee Kosmos, Aman)</li>
              <li>• Sector 137 (Paras Tierea, Gulshan)</li>
              <li>• Sector 104 / 143 Expressway</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Local Contact Hub
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={getPhoneUrl()}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl("Hi, I want to book RO service")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_CONFIG.whatsappDisplay} (WhatsApp)</span>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 text-xs pt-1">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2025 {BUSINESS_CONFIG.brandName} • Made with care in Noida
          </p>
          <div className="flex items-center gap-4">
            <span>Hours: {BUSINESS_CONFIG.workingHours}</span>
            <span>•</span>
            <a
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              Google Business Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
