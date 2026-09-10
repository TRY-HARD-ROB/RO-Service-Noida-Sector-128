import { PROBLEM_SOLUTIONS } from "../data/servicesData";
import { ArrowRight, AlertTriangle, Droplets, Volume2, ShieldAlert } from "lucide-react";
import { getWhatsAppUrl } from "../utils/contactUtils";

interface ProblemSolutionStripProps {
  onSelectService: (serviceId: string) => void;
}

export function ProblemSolutionStrip({ onSelectService }: ProblemSolutionStripProps) {
  const getProblemIcon = (id: string) => {
    switch (id) {
      case "filter-due":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case "bad-taste":
        return <Droplets className="w-5 h-5 text-sky-500" />;
      case "leak-noise":
        return <Volume2 className="w-5 h-5 text-rose-500" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Instant Problem Solver
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-2 font-heading">
            Common RO Troubles in Noida? We Solve Them in 1 Visit.
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Tap your exact symptom below for an immediate doorstep solution:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PROBLEM_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-2xl bg-slate-50 hover:bg-sky-50/50 p-5 sm:p-6 border border-slate-200 hover:border-sky-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getProblemIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-bold text-sky-800 bg-sky-100/70 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {item.problem}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.solution}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">Starting at</span>
                  <span className="text-base font-extrabold text-slate-900">
                    {item.price}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(item.serviceId)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs hover:shadow transition-all"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hi, I need help with: ${item.problem}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask on WhatsApp about ${item.problem}`}
                    className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors text-xs font-semibold"
                    title="Quick WhatsApp"
                  >
                    WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
