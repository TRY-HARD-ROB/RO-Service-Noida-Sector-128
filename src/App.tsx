import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSolutionStrip } from "./components/ProblemSolutionStrip";
import { ServicesGrid } from "./components/ServicesGrid";
import { AMCPlans } from "./components/AMCPlans";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { ServiceArea } from "./components/ServiceArea";
import { FAQAccordion } from "./components/FAQAccordion";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { FloatingMobileBar } from "./components/FloatingMobileBar";
import { ExitIntentModal } from "./components/ExitIntentModal";
import { TdsEstimatorModal } from "./components/TdsEstimatorModal";

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>("");
  const [isTdsModalOpen, setIsTdsModalOpen] = useState(false);

  // Smooth scroll helper to navigate to the booking form
  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    const bookingSection = document.getElementById("contact");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClaimVoucher = () => {
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white pb-16 sm:pb-0">
      {/* 1. STICKY HEADER */}
      <Header onOpenBooking={() => scrollToBooking()} />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenTdsTool={() => setIsTdsModalOpen(true)}
        />

        {/* 3. PROBLEM -> SOLUTION STRIP */}
        <ProblemSolutionStrip
          onSelectService={(serviceId) => {
            if (serviceId === "filter-change") {
              scrollToBooking("Filter Change (Sediment + Carbon) — from ₹599");
            } else if (serviceId === "ro-visit") {
              scrollToBooking("RO Service Visit + TDS Check — from ₹399");
            } else {
              scrollToBooking("RO Repair (Pump/SMPS/Leak) — Quote on Call");
            }
          }}
        />

        {/* PRICING ANCHOR FOR DIRECT NAV */}
        <div id="pricing" className="scroll-mt-24" />

        {/* 4. SERVICES GRID (6 Cards with Brands) */}
        <ServicesGrid
          onSelectService={(serviceTitle) => scrollToBooking(serviceTitle)}
        />

        {/* 5. AMC PLANS (3 Tiers, Middle Highlighted) */}
        <AMCPlans
          onSelectPlan={(planName) =>
            scrollToBooking(`AMC Plan: ${planName}`)
          }
        />

        {/* 6. WHY CHOOSE US (6 Trust Points & Metrics) */}
        <WhyChooseUs onOpenBooking={() => scrollToBooking()} />

        {/* 7. HOW IT WORKS (3 Steps) */}
        <HowItWorks />

        {/* 8. TESTIMONIALS (6 Reviews, Desktop Grid + Mobile Carousel) */}
        <Testimonials />

        {/* 9. SERVICE AREA (Sectors 128, 127, 126, 131, 132, 134 + Map) */}
        <ServiceArea />

        {/* 10. FAQ ACCORDION (8 Questions with High-TDS Noida Context) */}
        <FAQAccordion />

        {/* 11. BOOKING FORM (WhatsApp + Email dispatch with NOIDA200 voucher) */}
        <BookingForm initialService={selectedServiceForBooking} />
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* 13. FLOATING MOBILE BAR (Always visible Call & WhatsApp on mobile) */}
      <FloatingMobileBar onOpenBooking={() => scrollToBooking()} />

      {/* 14. DESKTOP EXIT-INTENT MODAL (₹200 OFF Coupon) */}
      <ExitIntentModal onClaimCoupon={handleClaimVoucher} />

      {/* 15. INTERACTIVE NOIDA TDS CHECK MODAL */}
      <TdsEstimatorModal
        isOpen={isTdsModalOpen}
        onClose={() => setIsTdsModalOpen(false)}
        onBookCheck={() => scrollToBooking("RO Service Visit + TDS Check — from ₹399")}
      />
    </div>
  );
}
