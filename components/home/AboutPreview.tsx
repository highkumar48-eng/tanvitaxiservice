import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, Users } from "lucide-react";
import { CALL_URL } from "@/lib/constants";

const highlights = [
  { icon: Shield, text: "100% Verified Drivers" },
  { icon: Clock, text: "On-time Guarantee" },
  { icon: Star, text: "4.9★ Customer Rating" },
  { icon: Users, text: "1,200+ Happy Clients" },
];

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-label="About us preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-bold text-[#1B4FD8] uppercase tracking-widest mb-3 block">
              About Tanvi Taxi Services
            </span>
            <div className="w-10 h-0.5 bg-[#1B4FD8] mb-5" />
            <h2 className="text-3xl md:text-[2rem] font-bold text-[#0D1B3E] leading-tight mb-5">
              Serving Delhi NCR with Trust &amp; Reliability Since 2008
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Tanvi Taxi Services is a professional taxi and travel company operating across
              Gurugram, Delhi, and the entire NCR region. We provide safe, comfortable,
              and reliable transportation for individuals, families, and corporate clients.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-8">
              With a fleet of well-maintained vehicles, verified professional drivers, and
              a commitment to transparency — what we quote is exactly what you pay.
              No surprises, no hidden charges.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B3E] hover:bg-[#1B4FD8] text-white text-sm font-bold rounded-lg transition-all duration-200"
              >
                Learn More About Us <ArrowRight size={15} />
              </Link>
              <a
                href={CALL_URL}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E2E8F0] hover:border-[#1B4FD8] text-[#374151] hover:text-[#1B4FD8] text-sm font-semibold rounded-lg transition-all duration-200"
              >
                Call Us Directly
              </a>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D1B3E] flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-sm font-semibold text-[#1E293B] leading-snug">{text}</p>
              </motion.div>
            ))}

            {/* Experience block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="col-span-2 bg-[#0D1B3E] rounded-xl p-5 flex items-center gap-4"
            >
              <div className="text-4xl font-bold text-[#2563EB]">16+</div>
              <div>
                <p className="text-white font-semibold text-sm">Years of Experience</p>
                <p className="text-[#94A3B8] text-xs mt-0.5">
                  Proudly serving Delhi NCR since 2008
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
