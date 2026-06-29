import Image from "next/image";
import { Users, Briefcase, Snowflake, CheckCircle } from "lucide-react";
import ContactCTABand from "@/components/home/ContactCTABand";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";

export const metadata = {
  title: "Our Fleet | Tanvi Taxi Services",
  description: "Explore our premium fleet of well-maintained vehicles including Swift Dzire, Maruti Ertiga, Innova Crysta, and Tempo Traveller.",
};

export default function FleetPage() {
  const fleet = [
    {
      id: "dzire",
      name: "Swift Dzire (Sedan)",
      image: "/images/vehicles/dzire.png",
      pax: 4,
      bags: 2,
      ac: true,
      idealFor: "Airport transfers, one-way trips, city travel",
      price: "12"
    },
    {
      id: "ertiga",
      name: "Maruti Ertiga (MUV)",
      image: "/images/vehicles/ertiga.png",
      pax: 6,
      bags: 3,
      ac: true,
      idealFor: "Family trips, outstation, group city travel",
      price: "14"
    },
    {
      id: "innova",
      name: "Toyota Innova Crysta (Premium MUV)",
      image: "/images/vehicles/innova.png",
      pax: 7,
      bags: 4,
      ac: true,
      idealFor: "Corporate travel, premium airport, long outstation",
      price: "18"
    },
    {
      id: "tempo",
      name: "Tempo Traveller (Mini Bus)",
      image: "/images/vehicles/tempo.png",
      pax: 12,
      bags: 5,
      ac: true,
      idealFor: "Pilgrimages, group tours, corporate offsites",
      price: "22"
    }
  ];

  return (
    <>
      <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
              Our Premium Fleet
            </h1>
            <div className="green-underline mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Every vehicle in our fleet is GPS-enabled, meticulously maintained, and driven by verified professionals to ensure your absolute comfort and safety.
            </p>
          </div>

          <div className="space-y-12">
            {fleet.map((car, idx) => (
              <div key={car.id} className="card-white overflow-hidden flex flex-col lg:flex-row">
                <div className={`relative w-full lg:w-2/5 h-64 lg:h-auto bg-white p-8 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800 ${idx % 2 !== 0 ? 'lg:order-2 lg:border-r-0 lg:border-l' : ''}`}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain p-4"
                  />
                  <div className={`absolute bottom-4 ${idx % 2 !== 0 ? 'right-4' : 'left-4'} bg-[#22c55e] text-white text-sm font-bold px-3 py-1.5 rounded`}>
                    From ₹{car.price}/km
                  </div>
                </div>
                
                <div className={`p-8 lg:p-12 flex-1 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
                    {car.name}
                  </h2>
                  
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium bg-[#f8f9fa] dark:bg-[#1e293b] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                      <Users size={20} className="text-[#22c55e]"/> {car.pax} Passengers
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium bg-[#f8f9fa] dark:bg-[#1e293b] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                      <Briefcase size={20} className="text-[#22c55e]"/> {car.bags} Luggage
                    </div>
                    {car.ac && (
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium bg-[#f8f9fa] dark:bg-[#1e293b] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                        <Snowflake size={20} className="text-[#22c55e]"/> Fully AC
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-bold text-[#1a1a2e] dark:text-white mb-2">Ideal For:</h3>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle size={20} className="text-[#22c55e] shrink-0 mt-0.5" />
                      <p>{car.idealFor}</p>
                    </div>
                  </div>
                  
                  <div>
                    <a
                      href={createServiceInquiryMessage(`Booking for ${car.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-green inline-flex px-8"
                    >
                      Book This Vehicle →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactCTABand />
    </>
  );
}
