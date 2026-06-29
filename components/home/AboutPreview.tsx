import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/images/vehicles/dzire.png"
              alt="White Swift Dzire Taxi"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
              About Tanvi Taxi Services
            </h2>
            <div className="green-underline mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to Tanvi Taxi Services — Delhi NCR's most trusted taxi partner since 2012. 
              We specialize in outstation trips, airport transfers, corporate travel, and religious 
              tour packages across North India. With a fleet of well-maintained, GPS-tracked vehicles 
              and experienced professional drivers, we ensure every journey is safe, comfortable, 
              and on time. Our commitment: transparent pricing, no hidden charges, 24×7 availability.
            </p>
            <Link href="/about" className="btn-navy">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
