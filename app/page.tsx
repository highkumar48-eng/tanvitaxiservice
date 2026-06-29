import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FleetPreview from "@/components/home/FleetPreview";
import ToursPreview from "@/components/home/ToursPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQPreview from "@/components/home/FAQPreview";
import ContactCTABand from "@/components/home/ContactCTABand";
import AboutPreview from "@/components/home/AboutPreview";
import TrustBadges from "@/components/home/TrustBadges";
import DestinationsGrid from "@/components/home/DestinationsGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Section 2 - Center Heading Band */}
      <section className="bg-white dark:bg-[#0f172a] py-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#1a1a2e] dark:text-white">
            Reliable Taxi Services in Delhi NCR
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-[#f8f9fa] dark:bg-[#1e293b] rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">✈️ Airport Transfers</span>
            <span className="px-3 py-1 bg-[#f8f9fa] dark:bg-[#1e293b] rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">🗺️ Tour Packages</span>
            <span className="px-3 py-1 bg-[#f8f9fa] dark:bg-[#1e293b] rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">👔 Corporate Travel</span>
            <span className="px-3 py-1 bg-[#f8f9fa] dark:bg-[#1e293b] rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">🕐 24×7 Available</span>
            <span className="px-3 py-1 bg-[#f8f9fa] dark:bg-[#1e293b] rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">💰 Transparent Pricing</span>
          </div>
        </div>
      </section>

      <TrustBadges />
      <AboutPreview />
      <ServicesPreview />
      <FleetPreview />
      <ToursPreview />
      <DestinationsGrid />
      <Testimonials />
      <FAQPreview />
      <ContactCTABand />
    </>
  );
}
