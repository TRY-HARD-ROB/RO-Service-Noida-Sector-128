import { ServiceItem, AMCPlan, Testimonial, FAQItem } from "../types";

export const PROBLEM_SOLUTIONS = [
  {
    id: "filter-due",
    problem: "Filter change due or choked?",
    solution: "Book genuine Sediment + Carbon filter replacement",
    price: "from ₹599",
    actionText: "Book Filter Change",
    serviceId: "filter-change",
    badge: "Most Common in Noida",
  },
  {
    id: "bad-taste",
    problem: "Water tastes salty, bitter, or smells odd?",
    solution: "Free digital TDS check + full tank sanitization & service",
    price: "from ₹399",
    actionText: "Check My TDS",
    serviceId: "ro-visit",
    badge: "Free TDS Check",
  },
  {
    id: "leak-noise",
    problem: "RO leaking water, vibrating, or continuous beeping?",
    solution: "Same-day on-site diagnostic & repair for all brands",
    price: "Quote on Call",
    actionText: "Call Technician",
    serviceId: "ro-repair",
    badge: "Emergency Fix",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ro-visit",
    title: "RO Service Visit + TDS Check",
    price: "from ₹399",
    priceNum: 399,
    description: "Complete 15-point checkup of your RO purifier including raw vs pure water digital TDS calibration.",
    features: [
      "Digital TDS reading before & after service",
      "Leak inspection & pipe joints testing",
      "Booster pump pressure evaluation",
      "Storage tank sanitization & drain flush",
      "Adjustable TDS valve optimization",
    ],
    icon: "Activity",
  },
  {
    id: "filter-change",
    title: "Filter Change (Sediment + Carbon)",
    price: "from ₹599",
    priceNum: 599,
    popular: true,
    description: "Essential replacement of choked pre-filters to stop Noida's high silt and chlorine from damaging your RO membrane.",
    features: [
      "Heavy-duty spun polypropylene sediment filter",
      "High-iodine premium coconut shell carbon filter",
      "Free outer pre-filter bowl de-scaling",
      "Eliminates chlorine, rust, turbidity & odor",
      "Tested for 100% genuine sealed components",
    ],
    icon: "Filter",
  },
  {
    id: "membrane-replacement",
    title: "RO Membrane Replacement",
    price: "from ₹1,499",
    priceNum: 1499,
    description: "High-rejection 75/80/100 GPD thin-film composite (TFC) membrane designed specially for Noida's 1200+ TDS water.",
    features: [
      "Handles high TDS up to 2,500 ppm effortlessly",
      "Certified 95%+ salt and heavy metal rejection",
      "Free flow restrictor (FR) matching valve replacement",
      "Restores natural sweet taste of drinking water",
      "6-month performance guarantee included",
    ],
    icon: "Layers",
  },
  {
    id: "full-service",
    title: "Full Service & Deep Cleaning",
    price: "from ₹999",
    priceNum: 999,
    description: "Comprehensive disassembly, chemical-free sanitization, UV lamp inspection, and pressure re-balancing.",
    features: [
      "Complete internal piping flush & descaling",
      "UV chamber & UF filter efficiency inspection",
      "Post-carbon mineral cartridge rejuvenation",
      "Tank deep wash with food-grade disinfectant",
      "Water recovery ratio & flow rate check",
    ],
    icon: "Sparkles",
  },
  {
    id: "installation",
    title: "New RO Installation / Uninstallation",
    price: "from ₹499",
    priceNum: 499,
    description: "Professional wall-mounting, plumbing inlet diverter hookup, and safe uninstallation during house shifting.",
    features: [
      "Precise diamond-core drilling (no tile breakage)",
      "Brass diverter valve & food-grade PE piping",
      "Pressure limiting valve (PRV) recommendation",
      "Waste water drainage pipe concealment",
      "Full post-installation leak & TDS verification",
    ],
    icon: "Wrench",
  },
  {
    id: "ro-repair",
    title: "RO Repair (Pump / SMPS / SV / Leaks)",
    price: "Quote on Call",
    priceNum: 0,
    description: "Rapid diagnosis and replacement of faulty booster pumps, copper SMPS adapters, solenoid valves, or auto-cut floats.",
    features: [
      "Original heavy-duty 24V/36V booster pumps",
      "Short-circuit protected 2.5A/3A SMPS adapters",
      "Solenoid valve (SV) anti-drip replacement",
      "Low/high pressure switch recalibration",
      "30-day warranty on all replaced electrical spares",
    ],
    icon: "Cpu",
  },
];

export const AMC_PLANS: AMCPlan[] = [
  {
    id: "basic-amc",
    name: "Basic Plan",
    price: "₹1,499",
    period: "/ year",
    highlight: "For ROs under 2 years old",
    description: "Ideal for newer purifiers that require regular preventive care, sanitization, and TDS calibration.",
    features: [
      "3 Scheduled Preventive Maintenance visits",
      "Unlimited breakdown emergency calls (same-day)",
      "Digital raw & output TDS monitoring",
      "Sediment filter washing & outer bowl cleaning",
      "Tank sanitization on every visit",
      "Zero visiting fee for 365 days",
    ],
    exclusions: [
      "Filter candles & membrane spares charged separately at 15% discount",
    ],
    ctaText: "Choose Basic Plan",
  },
  {
    id: "standard-amc",
    name: "Standard Plan",
    price: "₹2,999",
    period: "/ year",
    popular: true,
    highlight: "MOST POPULAR IN NOIDA",
    description: "Complete worry-free coverage with all routine consumable filter replacements included for Noida tap water.",
    features: [
      "3 Scheduled visits + unlimited breakdown support",
      "All Filter Replacements Included (Sediment + Carbon)",
      "1x Post-Carbon / Mineral Cartridge replacement",
      "Outer Spun Pre-Filter replacement included",
      "Free Electrical Spares Repair (SMPS / Solenoid Valve)",
      "Priority same-day technician arrival within 45 mins",
      "TDS monitoring and automated renewal alerts",
    ],
    exclusions: [
      "RO Membrane replacement provided at 25% subsidized rate if needed",
    ],
    ctaText: "Choose Standard Plan",
  },
  {
    id: "premium-amc",
    name: "Comprehensive / Premium",
    price: "₹4,499",
    period: "/ year",
    highlight: "100% Zero-Expense Guarantee",
    description: "All-inclusive comprehensive protection. Covers every single part — including high-TDS membrane and booster pump.",
    features: [
      "Unlimited service visits & breakdown visits",
      "1x Genuine 75/80 GPD RO Membrane replacement",
      "Complete set of Sediment, Pre-Carbon & Post-Carbon filters",
      "Booster Pump repair / replacement covered",
      "SMPS Power Supply & Solenoid Valve covered",
      "UV Lamp & Choke covered",
      "100% zero repair bills for the entire 12 months",
    ],
    ctaText: "Choose Premium Plan",
  },
];

export const TRUST_POINTS = [
  {
    title: "Same-Day Service in Sector 128",
    description: "Our technicians live and operate right around Wish Town and Expressway sectors. Arrival within 45 to 90 minutes.",
    icon: "Clock",
  },
  {
    title: "Verified, Trained Technicians",
    description: "Police-verified, background-checked RO specialists with 6+ years experience in high-TDS water treatment systems.",
    icon: "ShieldCheck",
  },
  {
    title: "Transparent Pricing, No Surprises",
    description: "Clear fixed price menu before opening your machine. No hidden visiting charges or forced spare replacements.",
    icon: "CreditCard",
  },
  {
    title: "30-Day Service Warranty",
    description: "Every repair and filter change is backed by our no-questions-asked 30-day warranty. Free re-visit if unsatisfied.",
    icon: "Award",
  },
  {
    title: "All Brands & Custom ROs",
    description: "Specialized in Kent Grand, Aquaguard Enhance, Pureit Marvella, Livpure, AO Smith, Havells, and all unbranded systems.",
    icon: "CheckCircle2",
  },
  {
    title: "500+ Happy Noida Families",
    description: "Top-rated 4.9★ service across Jaypee Wish Town, Kalpataru Vista, Pavilion Court, Sector 131, 132, and 134 societies.",
    icon: "Users",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Book on WhatsApp or Call",
    description: "Tap WhatsApp or Call us. Share your Noida sector/society and the issue (filter due, bad taste, leakage, or AMC inquiry).",
    icon: "PhoneCall",
  },
  {
    step: "02",
    title: "Technician Arrives Same Day",
    description: "Our certified technician reaches your doorstep with a digital TDS tester, genuine sealed filters, and electrical spares.",
    icon: "Truck",
  },
  {
    step: "03",
    title: "Problem Fixed, Warranty Given",
    description: "Machine repaired, TDS calibrated to healthy 80-120 ppm sweet drinking water, and your 30-day service warranty card issued.",
    icon: "CheckSquare",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Amit S.",
    sector: "Sector 128, Wish Town",
    rating: 5,
    quote: "Called at 10am, fixed by 12pm. Water tastes perfect again.",
    date: "2 days ago",
    serviceUsed: "Filter Change & TDS Calibration",
  },
  {
    id: "review-2",
    name: "Priya M.",
    sector: "Sector 131, Jaypee Klassic",
    rating: 5,
    quote: "Honest pricing, no upselling. Highly recommend for Noida.",
    date: "1 week ago",
    serviceUsed: "Full Service & Sanitization",
  },
  {
    id: "review-3",
    name: "Rohit K.",
    sector: "Sector 127",
    rating: 5,
    quote: "Membrane was gone, they replaced it same day. Great work.",
    date: "3 weeks ago",
    serviceUsed: "RO Membrane Replacement",
  },
  {
    id: "review-4",
    name: "Sneha G.",
    sector: "Sector 132",
    rating: 5,
    quote: "AMC plan saved me so much. Filter change reminders are gold.",
    date: "1 month ago",
    serviceUsed: "Standard AMC Annual Plan",
  },
  {
    id: "review-5",
    name: "Vikram J.",
    sector: "Sector 126",
    rating: 5,
    quote: "Very professional. Cleaned up after the job. 5 stars.",
    date: "Last month",
    serviceUsed: "Booster Pump Repair",
  },
  {
    id: "review-6",
    name: "Anjali R.",
    sector: "Sector 134, Kosmos",
    rating: 5,
    quote: "Best RO service in Noida. Fast, reliable, affordable.",
    date: "2 months ago",
    serviceUsed: "Filter & Carbon Replacement",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "How often should I change my RO filter in Noida?",
    answer:
      "In Noida Sector 128, 127, 131, 132, and 134, groundwater and mixed authority supply carries a high mineral hardness and TDS ranging between 800 and 1,800+ ppm. We strongly recommend changing the external spun pre-filter and sediment/carbon filters every 3 to 4 months. The main RO membrane typically requires replacement every 9 to 12 months, depending on your family's daily water consumption. Delaying filter changes forces the booster pump to overwork and ruins the expensive membrane prematurely.",
  },
  {
    question: "Do you service all RO brands?",
    answer:
      "Yes. Our technicians carry factory-compatible and genuine OEM parts for Kent (Grand, Prime, Pearl), Aquaguard (Geneus, Enhance, Magna), Pureit (Copper, Marvella, Ultima), Livpure, AO Smith, Havells, Blue Star, Crux, as well as customized/assembled domestic and commercial RO units.",
  },
  {
    question: "What's included in your AMC plans?",
    answer:
      "Our Standard AMC (₹2,999/yr) covers 3 scheduled preventive visits, unlimited breakdown emergency visits, 100% replacement of all sediment, pre-carbon, and post-carbon filters, tank sanitization, and electrical spare repairs. The Comprehensive Premium Plan (₹4,499/yr) additionally covers the expensive RO membrane and booster pump with zero extra cost for 365 days.",
  },
  {
    question: "How fast can your technician come to my sector?",
    answer:
      "Because our dispatch team and parts inventory are located directly inside Sector 128 (Wish Town belt), we usually arrive within 45 to 90 minutes anywhere in Sector 128, 127, 126, 131, 132, and 134. You can also book a preferred convenient time slot for evenings or weekends.",
  },
  {
    question: "Do you charge a visiting fee if no repair is needed?",
    answer:
      "Our inspection and digital TDS testing fee is just ₹399. However, if you approve any service, filter replacement, or repair work on the spot, the visiting fee is completely WAIVED or adjusted into your final bill. Transparent pricing with zero surprise charges.",
  },
  {
    question: "Is there a warranty on repairs and spare parts?",
    answer:
      "Yes! We provide a written 30-Day Service Warranty on all repairs and workmanship. All replaced genuine filters and membranes carry individual manufacturer/importer performance warranties (up to 6 months on high-TDS membranes). If you experience any leak or taste drop within 30 days, we visit and resolve it free of charge.",
  },
  {
    question: "Do you sell new RO units or take old ones in exchange?",
    answer:
      "Yes, we supply brand-new RO+UV+UF+Alkaline+TDS Controller purifiers customized for Noida's water profile at factory-direct pricing (saving ₹4,000–₹8,000 compared to retail stores). We also offer attractive buyback/exchange discounts (up to ₹1,500) for your old faulty RO machine.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all digital and cash payment options once the service is completed to your 100% satisfaction: UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, or direct cash to the technician. A digital invoice is sent straight to your WhatsApp and email.",
  },
];

export const NOIDA_SOCIETIES = [
  "Jaypee Greens Wish Town (Sector 128)",
  "Kalpataru Vista (Sector 128)",
  "Jaypee Pavilion Court & Heights (Sector 128)",
  "Jaypee Klassic & Kosmos (Sector 131 / 134)",
  "Paras Tierea (Sector 137)",
  "Gulshan Vivante / Logix Blossom (Sector 137)",
  "ATS One Hamlet (Sector 104)",
  "Sector 126 / Amity University area",
  "Sector 127 / HCL Tech Zone",
  "Sector 132 / Express Trade Towers Belt",
  "Other Noida Expressway Society",
];
