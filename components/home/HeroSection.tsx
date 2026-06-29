import Image from "next/image";
import BookingWidget from "./BookingWidget";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[#f8f9fa] dark:bg-[#0f172a] overflow-hidden pt-12 pb-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left - Booking Widget */}
          <div className="order-2 lg:order-1 animate-[slide-up_0.5s_ease-out]">
            <BookingWidget />
          </div>

          {/* Right - SVG Illustration */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center animate-[fade-in_0.8s_ease-out]">
            <div className="text-center lg:text-left mb-8 lg:hidden">
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4 leading-tight">
                Delhi NCR's Most <span className="text-[#22c55e]">Trusted</span> Taxi Partner
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto">
                Safe, reliable, and affordable travel since 2012. Book your ride instantly.
              </p>
            </div>
            
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] float-slow">
              <Image
                src="/images/hero-illustration.png"
                alt="Tanvi Taxi Services - White sedan on Indian highway"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
