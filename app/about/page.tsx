"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Editorial Hero Band */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Travel & Taxi Services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[2px] text-brand-blue mb-4 inline-block">
            Est. 2018
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-6">
            ABOUT {BUSINESS.name}
          </h1>
          <p className="text-brand-text-sec text-sm sm:text-base font-light tracking-wide max-w-2xl mx-auto uppercase">
            A premium corporate transportation and travel agency based in Gurugram, built on reliability and customer service excellence.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Our Story"
              title="Crafting Premium"
              highlight="Journeys"
              centered={false}
            />
            <div className="mt-8 space-y-6 text-brand-text-sec font-light text-sm sm:text-base leading-relaxed">
              <p>
                Serving customers since 2012, {BUSINESS.name} has built a trusted reputation as the premier provider of reliable taxi services and travel coordination across Gurugram, Delhi NCR, and Northern India. From our humble beginnings, our focus has always been on delivering professional service, customer satisfaction, and smooth travel experiences.
              </p>
              <p>
                Whether you require prompt airport transfers, comfortable outstation travel, or dedicated corporate bookings for business executives, our fleet is equipped to handle your transit requirements with ease. Our team of highly experienced drivers are police-verified, thoroughly trained in road safety, and dedicated to ensuring safe and comfortable journeys on every route.
              </p>
              <p>
                At the core of our business is a commitment to transparent pricing. We do not believe in surge pricing or hidden costs—what you are quoted is exactly what you pay. 
              </p>
              <p className="font-semibold text-white">
                "Our commitment is simple: safe, reliable, and on-time travel, every single time."
              </p>
            </div>
            <div className="mt-10">
              <Link href="/booking">
                <Button variant="primary">Book A Ride Now</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[480px] bg-brand-card border border-brand-border rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800"
              alt="Premium Sedan"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Brand Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="brand-divider" />
      </div>

      {/* Core Values Grid */}
      <section className="py-24 bg-[#101826]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why We Are Chosen"
            title="Our Professional"
            highlight="Standards"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "All vehicles undergo rigorous safety checks and are driven by vetted, experienced chauffeurs.",
              },
              {
                icon: Clock,
                title: "Absolute Punctuality",
                desc: "We track flights and optimize routes to guarantee that we arrive at least 10 minutes before schedule.",
              },
              {
                icon: Users,
                title: "Customer-Centric",
                desc: "24/7 dedicated dispatch and support team to handle last-minute booking modifications seamlessly.",
              },
              {
                icon: Award,
                title: "Transparent Billing",
                desc: "No hidden charges, clean invoices, and instant booking confirmations on WhatsApp.",
              },
            ].map((value, idx) => (
              <Card key={idx} variant="glass" className="hover:border-brand-blue" padding="lg">
                <value.icon className="text-brand-blue mb-6" size={32} />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  {value.title}
                </h3>
                <p className="text-xs text-brand-text-sec font-light leading-relaxed">
                  {value.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers / Achievements */}
      <section className="py-24 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "6+", label: "Years Experience" },
              { value: "50+", label: "Verified Vehicles" },
              { value: "10k+", label: "Happy Customers" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl sm:text-5xl font-black text-brand-blue uppercase">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-brand-text-sec uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
