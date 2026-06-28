"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, Users, Map, CheckCircle, LifeBuoy } from "lucide-react";
import { CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const highlights = [
  { icon: Shield, text: "Verified Drivers", desc: "Background & police checked" },
  { icon: Clock, text: "24×7 Availability", desc: "Round-the-clock dispatch" },
  { icon: Map, text: "GPS Enabled", desc: "Real-time trackable fleet" },
  { icon: LifeBuoy, text: "Emergency Support", desc: "Active on-trip assistance" },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[#101826]/40 border-b border-brand-border" aria-label="About us preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-bold text-brand-blue uppercase tracking-[2px] mb-3 block">
              About Tanvi Taxi Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase mb-5">
              Providing Reliable Rides Since 2012
            </h2>
            <p className="text-brand-text-sec font-light text-sm leading-relaxed mb-4">
              Since 2012, Tanvi Taxi Services has focused on one simple mission: offering safe, reliable, and transparently priced taxi services across Gurugram, Delhi NCR, and neighboring states. We bridge the gap between premium executive travel and everyday affordability.
            </p>
            <p className="text-brand-text-sec font-light text-sm leading-relaxed mb-8">
              We specialize in corporate booking configurations, punctual airport transfers, and comfortable outstation tourism trips. With experienced chauffeurs, GPS-enabled clean cars, and 24/7 client dispatch desks, you can trust us to manage your journeys with absolute peace of mind.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="primary" className="gap-2">
                  Read Our Story <ArrowRight size={14} />
                </Button>
              </Link>
              <a href={CALL_URL}>
                <Button variant="secondary">
                  Call Us
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, text, desc }, i) => (
              <div
                key={text}
                className="bg-brand-card border border-brand-border rounded-xl p-5 flex flex-col gap-2 hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-brand-bg-sec border border-brand-border flex items-center justify-center text-brand-blue rounded-lg">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">{text}</p>
                  <p className="text-[9px] text-brand-text-sec font-light mt-0.5">{desc}</p>
                </div>
              </div>
            ))}

            {/* Experience block */}
            <div
              className="col-span-2 bg-brand-card border border-brand-border rounded-xl p-5 flex items-center gap-4 hover:border-brand-blue/30 transition-all duration-300"
            >
              <div className="text-3xl font-black text-brand-blue">14+</div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-wider">Years of Service</p>
                <p className="text-brand-text-sec font-light text-xs mt-0.5">
                  Proudly serving Delhi NCR &amp; outstations since 2012
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
