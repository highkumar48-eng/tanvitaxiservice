"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, IndianRupee } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_PREFILL } from "@/lib/constants";

const packages = [
  {
    id: "agra",
    title: "Agra Tour",
    duration: "1 Day / 2 Days",
    price: "From ₹3,500",
    image: "/images/hero_bg.png",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    color: "from-orange-500/20 to-rose-600/10",
    border: "border-orange-500/20",
  },
  {
    id: "mathura",
    title: "Mathura & Vrindavan",
    duration: "1 Day / 2 Days",
    price: "From ₹3,000",
    image: "/images/hero_bg.png",
    highlights: ["Banke Bihari Temple", "Prem Mandir", "Krishna Janmasthan"],
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
  },
  {
    id: "haridwar",
    title: "Haridwar & Rishikesh",
    duration: "2 Days / 3 Days",
    price: "From ₹5,500",
    image: "/images/hero_bg.png",
    highlights: ["Har Ki Pauri", "Ram Jhula", "Triveni Ghat"],
    color: "from-blue-500/20 to-cyan-600/10",
    border: "border-blue-500/20",
  },
  {
    id: "shimla",
    title: "Shimla & Kufri",
    duration: "3 Days / 4 Days",
    price: "From ₹9,500",
    image: "/images/hero_bg.png",
    highlights: ["Mall Road", "Kufri", "Jakhu Temple"],
    color: "from-green-500/20 to-emerald-600/10",
    border: "border-green-500/20",
  },
  {
    id: "nainital",
    title: "Nainital Tour",
    duration: "2 Days / 3 Days",
    price: "From ₹7,500",
    image: "/images/hero_bg.png",
    highlights: ["Naini Lake", "Snow View Point", "Tiffin Top"],
    color: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/20",
  },
  {
    id: "corbett",
    title: "Jim Corbett Safari",
    duration: "2 Days / 3 Days",
    price: "From ₹8,000",
    image: "/images/hero_bg.png",
    highlights: ["Jungle Safari", "Garjiya Temple", "Corbett Fall"],
    color: "from-yellow-500/20 to-orange-600/10",
    border: "border-yellow-500/20",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function TourPackages() {
  return (
    <section id="tours" className="py-20 md:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Top Rated Tours"
          title="Explore Our"
          highlight="Tour Packages"
          subtitle="Discover the beauty of India with our comfortable, curated outstation tour packages."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group flex flex-col rounded-2xl overflow-hidden bg-[#1E293B] border ${pkg.border} shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent z-10" />
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/20 flex items-center gap-1.5">
                  <Clock size={14} className="text-[#D4AF37]" />
                  {pkg.duration}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 relative z-20 -mt-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37] mb-5">
                  <IndianRupee size={16} />
                  {pkg.price}
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <MapPin size={16} className="text-slate-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_PREFILL("", pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full text-center py-3.5 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0F172A] border border-white/10 hover:border-[#D4AF37] rounded-xl text-sm font-bold transition-all duration-300 active:scale-95"
                >
                  Book Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
