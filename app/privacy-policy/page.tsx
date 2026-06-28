"use client";

import SectionHeader from "@/components/ui/SectionHeader";

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 28, 2026";

  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Regulatory Info"
          title="Privacy Policy &"
          highlight="Terms"
          subtitle={`Last updated: ${lastUpdated}`}
        />

        <div className="mt-12 bg-[#141D2B] border border-brand-border p-8 rounded-xl space-y-8 text-brand-text-sec font-light text-xs sm:text-sm leading-relaxed">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">1. Information Collection</h3>
            <p>
              We collect information to provide better services to all our users. This includes pickup locations, destination targets, mobile phone contacts for ride coordination, passenger names, and trip schedules. Payment tokens and transactions are handled securely by authorized UPI gateways.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">2. How We Use Information</h3>
            <p>
              We use the collected metadata to coordinate vehicle dispatches, calculate fare estimates via our calculator systems, send instant WhatsApp reservation confirmations, and improve overall driver route navigation. We never sell your personal information or sharing logs to third-party marketing brokers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">3. Data Sharing & Security</h3>
            <p>
              Passenger transit logs are only shared with the assigned driver specifically for the ride execution. Our server infrastructures and storage systems employ strict firewall configurations. Driver locations and route logs are monitored for customer security during transit.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">4. Cookies & Web Tokens</h3>
            <p>
              Our website uses basic functional session cookies and local cache storage components to persist user inputs in our Fare Calculator and Booking Form, ensuring that values are preserved during navigation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">5. Corporate Terms & Invoicing</h3>
            <p>
              Consolidated corporate ride summaries and GST-compliant tax invoices are issued directly via electronic mail. Bookings cancelled up to 2 hours before schedule incur no fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
