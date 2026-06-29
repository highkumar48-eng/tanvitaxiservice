import BookingWidget from "@/components/home/BookingWidget";
import ContactCTABand from "@/components/home/ContactCTABand";

export const metadata = {
  title: "Booking & Fare Calculator | Tanvi Taxi Services",
  description: "Calculate taxi fares for outstation trips, local rentals, and airport transfers in Delhi NCR. Transparent pricing with no hidden charges.",
};

export default function BookingPage() {
  return (
    <>
      <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
              Booking & Fare Calculator
            </h1>
            <div className="green-underline mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Get an instant estimate for your trip and book directly via WhatsApp. No hidden charges, just transparent and fair pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <BookingWidget />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="card-white p-6">
                <h3 className="font-heading font-bold text-xl text-[#1a1a2e] dark:text-white mb-4">How Fare is Calculated</h3>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] dark:text-gray-200">Outstation (One Way)</h4>
                    <p>Base Fare = Distance × Per KM Rate + GST(5%)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] dark:text-gray-200">Outstation (Round Trip)</h4>
                    <p>Total KM = Distance × 2. Minimum 250 km/day billing. Driver allowance ₹250/day. GST(5%).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] dark:text-gray-200">Local Rental</h4>
                    <p>Fixed package rates for 4Hr/40Km, 8Hr/80Km, 12Hr/120Km. Extra KM/Hr charges apply if exceeded.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] dark:text-gray-200">Airport Transfer</h4>
                    <p>Fixed zonal rates from IGI Airport. 15% surcharge applies for late-night pickups (11 PM - 5 AM).</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a1628] text-white p-6 rounded-xl border border-gray-800 shadow-xl">
                <h3 className="font-heading font-bold text-xl mb-4">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Not sure about the fare or want a custom package? Our support team is available 24×7.
                </p>
                <a href="tel:+91XXXXXXXXXX" className="btn-green w-full text-center">
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactCTABand />
    </>
  );
}
