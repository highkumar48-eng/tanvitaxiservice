"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import BookingForm from "@/components/home/BookingForm";
import FareCalculator from "@/components/home/FareCalculator";

export default function BookingPage() {
  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Page Header */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Instant Booking"
          title="Secure Your"
          highlight="Ride"
          subtitle="Use our calculator to estimate fare metrics or submit a direct WhatsApp booking confirmation enquiry."
        />
      </section>

      {/* Booking Form Component wrapper */}
      <div className="border-t border-brand-border bg-[#101826]/20">
        <BookingForm />
      </div>

      {/* Brand Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="brand-divider" />
      </div>

      {/* Fare Calculator wrapper */}
      <div>
        <FareCalculator />
      </div>
    </div>
  );
}
