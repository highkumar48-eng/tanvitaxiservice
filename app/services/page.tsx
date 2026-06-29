import { Plane, Navigation, Repeat, Briefcase, MapPin, Clock, Heart, Bus } from "lucide-react";
import ContactCTABand from "@/components/home/ContactCTABand";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";
import Link from "next/link";

export const metadata = {
  title: "Taxi Services | Tanvi Taxi Services",
  description: "Explore our wide range of taxi services including airport transfers, one-way trips, round trips, and corporate rentals.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "airport-transfer",
      icon: <Plane size={40} className="text-[#22c55e]" />,
      title: "Airport Transfer",
      desc: "Reliable pickup and drop from Delhi IGI Airport, Domestic & International terminals. Pre-booked, driver waits for you, no surge pricing.",
      benefits: ["Flight tracking", "Meet & Greet", "Fixed rates", "24×7 available"]
    },
    {
      id: "one-way-taxi",
      icon: <Navigation size={40} className="text-[#22c55e]" />,
      title: "One Way Taxi",
      desc: "Book a one-way trip from Delhi NCR to any destination across North India. Pay only for the distance you travel.",
      benefits: ["Transparent billing", "Door-to-door service", "Professional drivers", "Comfortable ride"]
    },
    {
      id: "round-trip",
      icon: <Repeat size={40} className="text-[#22c55e]" />,
      title: "Round Trip",
      desc: "Book a return trip with driver standby at destination. Best for Agra, Mathura, Haridwar day trips.",
      benefits: ["Flexible schedule", "Driver standby", "Discounted rates", "Multiple stops allowed"]
    },
    {
      id: "corporate-taxi",
      icon: <Briefcase size={40} className="text-[#22c55e]" />,
      title: "Corporate Taxi",
      desc: "Monthly contracts, employee pickup/drop, airport transfers for businesses. Dedicated account manager.",
      benefits: ["Monthly billing", "GST invoices", "Priority booking", "Background verified drivers"]
    },
    {
      id: "local-rental",
      icon: <MapPin size={40} className="text-[#22c55e]" />,
      title: "Local Rental (8Hr/80Km)",
      desc: "Hire a cab for local use within city limits. Ideal for shopping, meetings, hospital visits, events.",
      benefits: ["Fixed packages", "City expert drivers", "No parking hassle", "AC vehicles"]
    },
    {
      id: "hourly-rental",
      icon: <Clock size={40} className="text-[#22c55e]" />,
      title: "Hourly Rental",
      desc: "Flexible hourly cab rental — 4Hr/40Km, 8Hr/80Km, 12Hr/120Km packages available.",
      benefits: ["Choose your time", "Cost effective", "Sedan & SUV options", "Instant extension"]
    },
    {
      id: "wedding-taxi",
      icon: <Heart size={40} className="text-[#22c55e]" />,
      title: "Wedding Taxi",
      desc: "Decorated taxis for weddings, baraats, and events. Bulk bookings available.",
      benefits: ["Premium vehicles", "On-time arrival", "Decoration options", "Well-dressed drivers"]
    },
    {
      id: "tempo-traveller",
      icon: <Bus size={40} className="text-[#22c55e]" />,
      title: "Tempo Traveller",
      desc: "12-seater Tempo Traveller for group travel, picnics, pilgrimages, and corporate outings.",
      benefits: ["Push-back seats", "Ample luggage space", "Music system", "Experienced hill drivers"]
    }
  ];

  return (
    <>
      <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
              Our Taxi Services
            </h1>
            <div className="green-underline mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Comprehensive transportation solutions tailored to your needs. From quick airport drops to extended outstation trips, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((svc) => (
              <div id={svc.id} key={svc.id} className="card-white p-8 flex flex-col h-full scroll-mt-24 group">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-4 rounded-xl group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
                      {svc.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {svc.desc}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {svc.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="text-[#22c55e]">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hi, I want to book ${svc.title}. Please provide details and availability.`)}`}
                    target="_blank"
                    className="btn-green w-full"
                  >
                    Book on WhatsApp →
                  </Link>
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
