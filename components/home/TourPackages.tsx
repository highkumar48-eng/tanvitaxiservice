"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { WHATSAPP_PREFILL } from "@/lib/constants";

const packages = [
  {
    id: "agra",
    title: "Agra Tour",
    duration: "1–2 Days",
    price: "From ₹3,500",
    image: "/images/tour_agra.png",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  },
  {
    id: "mathura",
    title: "Mathura & Vrindavan",
    duration: "1–2 Days",
    price: "From ₹3,000",
    image: "/images/tour_mathura.png",
    highlights: ["Banke Bihari Temple", "Prem Mandir", "Krishna Janmasthan"],
  },
  {
    id: "haridwar",
    title: "Haridwar & Rishikesh",
    duration: "2–3 Days",
    price: "From ₹5,500",
    image: "/images/tour_haridwar.png",
    highlights: ["Har Ki Pauri", "Ram Jhula", "Triveni Ghat"],
  },
  {
    id: "shimla",
    title: "Shimla & Kufri",
    duration: "3–4 Days",
    price: "From ₹9,500",
    image: "/images/tour_shimla.png",
    highlights: ["Mall Road", "Kufri Snow Point", "Jakhu Temple"],
  },
  {
    id: "nainital",
    title: "Nainital Tour",
    duration: "2–3 Days",
    price: "From ₹7,500",
    image: "/images/tour_nainital.png",
    highlights: ["Naini Lake", "Snow View Point", "Tiffin Top"],
  },
  {
    id: "corbett",
    title: "Jim Corbett Safari",
    duration: "2–3 Days",
    price: "From ₹8,000",
    image: "/images/tour_corbett.png",
    highlights: ["Jungle Safari", "Garjiya Temple", "Corbett Fall"],
  },
];

interface TourPackagesProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function TourPackages({ limit = 6, showViewAll = false }: TourPackagesProps) {
  const displayed = packages.slice(0, limit);

  return (
    <section id="tours" className="py-16 md:py-20 bg-white" aria-label="Tour Packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold text-[#1B4FD8] uppercase tracking-widest block mb-3">
            Tour Packages
          </span>
          <div className="w-10 h-0.5 bg-[#1B4FD8] mb-5" />
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E]">
              Popular Outstation Tours
            </h2>
            {showViewAll && (
              <Link
                href="/tour-packages"
                className="flex items-center gap-1.5 text-sm font-semibold text-[#1B4FD8] hover:gap-2.5 transition-all"
              >
                View All Packages <ChevronRight size={16} />
              </Link>
            )}
          </div>
          <p className="text-[#64748B] mt-2 max-w-2xl">
            Discover the beauty of India with our comfortable, curated outstation tour packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Duration badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-[#0D1B3E]">
                  <Clock size={12} className="text-[#1B4FD8]" />
                  {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-1">{pkg.title}</h3>
                <p className="text-sm font-semibold text-[#1B4FD8] mb-4">{pkg.price}</p>

                <ul className="space-y-1.5 mb-5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#475569]">
                      <MapPin size={13} className="text-[#94A3B8] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <a
                    href={WHATSAPP_PREFILL("", pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-bold rounded-lg transition-all duration-200 active:scale-95"
                  >
                    Book Package
                  </a>
                  <Link
                    href="/tour-packages"
                    className="px-4 py-2.5 border border-[#E2E8F0] hover:border-[#1B4FD8] text-[#64748B] hover:text-[#1B4FD8] text-sm font-semibold rounded-lg transition-all duration-200"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
