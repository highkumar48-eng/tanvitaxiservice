"use client";

import Image from "next/image";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";

export default function ToursPreview() {
  const tours = [
    {
      id: "agra",
      name: "Agra (Taj Mahal)",
      image: "/images/destinations/agra.png",
    },
    {
      id: "haridwar",
      name: "Haridwar (Har Ki Pauri)",
      image: "/images/destinations/haridwar.png",
    },
    {
      id: "mathura",
      name: "Mathura (Krishna Temple)",
      image: "/images/destinations/mathura.png",
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            Popular Tour Packages
          </h2>
          <div className="green-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {tours.map((tour) => (
            <div key={tour.id} className="card-white overflow-hidden group flex flex-col">
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
                  {tour.name}
                </h3>
                <div className="w-12 h-1 bg-[#22c55e] mx-auto mb-6"></div>
                <button
                  onClick={() => window.open(createServiceInquiryMessage(`${tour.name} Tour Package`), "_blank")}
                  className="mt-auto btn-navy w-full"
                >
                  Book Tour →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
