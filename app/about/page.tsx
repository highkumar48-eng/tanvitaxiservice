import Image from "next/image";
import { ShieldCheck, Car, Map, Navigation, PhoneCall, HeartPulse } from "lucide-react";
import ContactCTABand from "@/components/home/ContactCTABand";

export const metadata = {
  title: "About Us | Tanvi Taxi Services",
  description: "Learn about Tanvi Taxi Services, our history, mission, and what makes us the best taxi service in Delhi NCR.",
};

export default function AboutPage() {
  const differences = [
    { icon: <ShieldCheck size={32} />, title: "Professional Drivers", text: "Background verified, courteous, and highly experienced." },
    { icon: <Car size={32} />, title: "Verified Fleet", text: "Well-maintained, clean, and AC-equipped vehicles." },
    { icon: <Map size={32} />, title: "Route Experts", text: "Drivers knowledgeable about local and outstation routes." },
    { icon: <Navigation size={32} />, title: "GPS Tracked", text: "Real-time monitoring for your safety and security." },
    { icon: <PhoneCall size={32} />, title: "24×7 Support", text: "Round the clock customer service assistance." },
    { icon: <HeartPulse size={32} />, title: "First Aid Ready", text: "All cabs equipped with emergency first aid kits." },
  ];

  return (
    <>
      <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
                About Tanvi Taxi Services
              </h1>
              <div className="green-underline mb-8"></div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Established in 2012, Tanvi Taxi Services has grown from a single vehicle operation to one of Delhi NCR's most trusted transportation partners. For over a decade, we have been committed to redefining travel by prioritizing safety, comfort, and reliability.
                </p>
                <p>
                  We specialize in a comprehensive range of services including outstation trips, seamless airport transfers, reliable corporate travel solutions, and curated religious tour packages across North India. Our deep understanding of passenger needs has allowed us to build a service that is both family-friendly and perfectly suited for corporate professionals.
                </p>
                <p>
                  What truly sets us apart is our unwavering dedication to transparency. With Tanvi Taxi Services, there are no hidden charges or last-minute surprises—just honest pricing and a premium travel experience, available 24×7.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <Image
                src="/images/vehicles/innova.png"
                alt="Tanvi Taxi Services Fleet"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white uppercase mb-2">
              What Makes Us Different
            </h2>
            <p className="text-[#22c55e] font-semibold tracking-wider text-sm mb-4">
              ALL WELL-MAINTAINED CABS IN EXCELLENT CONDITION
            </p>
            <div className="green-underline"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {differences.map((diff, idx) => (
              <div key={idx} className="card-white p-8 text-center flex flex-col items-center">
                <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-4 rounded-full text-[#22c55e] mb-6">
                  {diff.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1a1a2e] dark:text-white mb-3">
                  {diff.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {diff.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a1628] text-white p-10 rounded-2xl border-l-4 border-[#22c55e]">
              <h3 className="font-heading font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                "To provide safe, reliable, and affordable transportation across Delhi NCR, ensuring every passenger reaches their destination with complete peace of mind."
              </p>
            </div>
            <div className="bg-white dark:bg-[#1e293b] text-[#1a1a2e] dark:text-white p-10 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
              <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                "To become North India's most trusted taxi and tour partner, recognized for exceptional service quality, transparent practices, and customer-first approach."
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactCTABand />
    </>
  );
}
