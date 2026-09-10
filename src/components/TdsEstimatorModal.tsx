import { useState } from "react";
import { X, Droplets, ArrowRight, ShieldAlert, CheckCircle2, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../utils/contactUtils";

interface TdsEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCheck: () => void;
}

interface SectorTdsData {
  sector: string;
  rawTds: string;
  hardness: string;
  filterLife: string;
  notes: string;
}

const SECTOR_DATA: SectorTdsData[] = [
  {
    sector: "Sector 128 (Wish Town, Kalpataru, Pavilion)",
    rawTds: "1,150 – 1,480 ppm",
    hardness: "High Hardness (Groundwater Mix)",
    filterLife: "3 – 4 Months",
    notes: "Heavy scaling in geysers and rapid sediment choking. Pre-filter and active carbon need quarterly replacement.",
  },
  {
    sector: "Sector 131 (Jaypee Klassic, Kosmos)",
    rawTds: "1,200 – 1,550 ppm",
    hardness: "Very High Silt & Minerals",
    filterLife: "3 Months",
    notes: "Requires high-rejection 80 GPD membrane and multi-stage sediment cartridges to prevent taste degradation.",
  },
  {
    sector: "Sector 127 (Near HCL & Tech Zone)",
    rawTds: "950 – 1,300 ppm",
    hardness: "Moderate to High",
    filterLife: "3 – 4 Months",
    notes: "Chlorine odor from municipal blending. Carbon cartridge rejuvenation is crucial for sweet water.",
  },
  {
    sector: "Sector 126 (Amity Belt & Plotted Housing)",
    rawTds: "1,100 – 1,400 ppm",
    hardness: "High Hardness",
    filterLife: "3 – 4 Months",
    notes: "Deep borewell contribution creates mineral scale on the booster pump impeller without timely descaling.",
  },
  {
    sector: "Sector 132 (DPS & Trade Tower Zone)",
    rawTds: "1,050 – 1,380 ppm",
    hardness: "High Hardness",
    filterLife: "3 – 4 Months",
    notes: "High pressure variations; pressure regulating valves (PRV) recommended with RO installations.",
  },
  {
    sector: "Sector 134 (Jaypee Kosmos, Aman Societies)",
    rawTds: "1,250 – 1,600 ppm",
    hardness: "Very High Mineral Hardness",
    filterLife: "3 Months",
    notes: "High TDS causes bitter metallic aftertaste when sediment filter chokes. Requires routine preventive care.",
  },
];

export function TdsEstimatorModal({ isOpen, onClose, onBookCheck }: TdsEstimatorModalProps) {
  const [selectedSector, setSelectedSector] = useState(0);

  if (!isOpen) return null;

  const current = SECTOR_DATA[selectedSector];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close TDS dialog"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
            <Droplets className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Noida Groundwater Guide
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
          Check Average TDS Level in Your Noida Sector
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select your sector to view raw supply TDS, mineral hardness, and the recommended filter replacement schedule:
        </p>

        {/* Sector Picker */}
        <div className="mt-4">
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Choose Your Sector / Locality:
          </label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm font-semibold text-slate-800 bg-white"
          >
            {SECTOR_DATA.map((item, idx) => (
              <option key={idx} value={idx}>
                {item.sector}
              </option>
            ))}
          </select>
        </div>

        {/* Diagnostic Results Card */}
        <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded-xl border border-rose-200">
              <span className="text-[11px] font-bold text-rose-600 uppercase block">
                Raw Tap TDS
              </span>
              <span className="text-lg sm:text-xl font-black text-rose-700">
                {current.rawTds}
              </span>
              <span className="text-[10px] text-slate-500 block">Needs heavy-duty RO</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-emerald-200">
              <span className="text-[11px] font-bold text-emerald-600 uppercase block">
                Ideal Drinking TDS
              </span>
              <span className="text-lg sm:text-xl font-black text-emerald-700">
                80 – 120 ppm
              </span>
              <span className="text-[10px] text-slate-500 block">Sweet &amp; mineral-balanced</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Water Characteristic:</span>
              <span className="font-semibold text-slate-800">{current.hardness}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Filter Replacement Cycle:</span>
              <span className="font-bold text-sky-700">{current.filterLife}</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-amber-900">
            <strong>Local Observation:</strong> {current.notes}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onBookCheck();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Book Free Digital TDS Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl(`Hi, I checked the TDS guide for ${current.sector}. I would like to book an on-site TDS test.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            WhatsApp Test Request
          </a>
        </div>
      </div>
    </div>
  );
}
