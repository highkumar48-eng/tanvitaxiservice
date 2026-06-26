"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Calendar, Clock, Car, User, Phone, Mail, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { BUSINESS } from "@/lib/constants";

// ── Zod schema ──────────────────────────────────────────────────────────────
const bookingSchema = z.object({
  pickup: z.string().min(3, "Enter pickup location"),
  drop: z.string().min(3, "Enter drop location"),
  tripType: z.enum(["one-way", "round-trip", "local", "airport"]),
  date: z.string().min(1, "Select travel date"),
  time: z.string().min(1, "Select pickup time"),
  vehicle: z.enum(["sedan", "suv", "innova", "tempo"]),
  name: z.string().min(2, "Enter your full name"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  instructions: z.string().max(300, "Max 300 characters").optional().or(z.literal("")),
});

type BookingFormData = z.infer<typeof bookingSchema>;

// ── Firebase-ready submit handler (stub) ────────────────────────────────────
// To connect Firebase: import { db } from "@/lib/firebase" and replace this stub.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function submitBooking(_data: BookingFormData): Promise<{ id: string }> {
  await new Promise((res) => setTimeout(res, 800)); // simulate network
  return { id: `TTS-${Date.now()}` };
}

const vehicleLabels: Record<string, string> = {
  sedan: "Sedan (Swift Dzire / Honda City)",
  suv: "SUV (Ertiga / Scorpio)",
  innova: "Innova Crysta",
  tempo: "Tempo Traveller (12–17 Seater)",
};

const tripLabels: Record<string, string> = {
  "one-way": "One Way",
  "round-trip": "Round Trip",
  local: "Local (Hourly)",
  airport: "Airport Transfer",
};

interface FieldWrapProps {
  label: string;
  error?: string;
  required?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function FieldWrap({ label, error, required, icon, children }: FieldWrapProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
        {icon}
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-all duration-200";

const selectCls =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all duration-200 cursor-pointer [color-scheme:dark]";

export default function BookingForm() {
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { mobile: "", email: "", instructions: "" },
  });

  const onReviewBooking = () => {
    const values = getValues();
    setFormData(values);
    setShowSummary(true);
  };

  const onConfirm = async () => {
    if (!formData) return;
    setIsSubmitting(true);
    try {
      const result = await submitBooking(formData);
      setBookingId(result.id);
      setShowSummary(false);

      // Also send via WhatsApp
      const msg = [
        `🚖 *New Booking Request*`,
        `ID: ${result.id}`,
        `Name: ${formData.name}`,
        `Mobile: ${formData.mobile}`,
        `From: ${formData.pickup}`,
        `To: ${formData.drop}`,
        `Trip: ${tripLabels[formData.tripType]}`,
        `Date: ${formData.date}`,
        `Time: ${formData.time}`,
        `Vehicle: ${vehicleLabels[formData.vehicle]}`,
        formData.instructions ? `Notes: ${formData.instructions}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      window.open(
        `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingId) {
    return (
      <section id="booking" className="py-20 md:py-28 bg-[#0F172A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-dark border border-[#D4AF37]/20 rounded-2xl p-10"
          >
            <CheckCircle2 size={56} className="text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-white mb-2">Booking Request Sent!</h2>
            <p className="text-slate-400 mb-4">
              Your booking reference is{" "}
              <span className="text-[#D4AF37] font-bold">{bookingId}</span>. Our team will confirm via WhatsApp shortly.
            </p>
            <p className="text-sm text-slate-500 mb-8">
              For immediate assistance, call{" "}
              <a href={`tel:${BUSINESS.phone}`} className="text-[#D4AF37] hover:underline">
                {BUSINESS.phone}
              </a>
            </p>
            <button
              onClick={() => { setBookingId(null); reset(); }}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F0D060] text-[#0F172A] font-bold rounded-xl text-sm transition-all"
            >
              Book Another Ride
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Book a Cab"
          title="Ready to"
          highlight="Ride?"
          subtitle="Fill in your trip details and we'll send a quote on WhatsApp instantly."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 glass-dark border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit(onReviewBooking)} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Pickup */}
              <FieldWrap label="Pickup Location" error={errors.pickup?.message} required icon={<MapPin size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("pickup")}
                  placeholder="e.g. IGI Airport Terminal 3"
                  className={inputCls}
                />
              </FieldWrap>

              {/* Drop */}
              <FieldWrap label="Drop Location" error={errors.drop?.message} required icon={<MapPin size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("drop")}
                  placeholder="e.g. Sector 29, Gurugram"
                  className={inputCls}
                />
              </FieldWrap>

              {/* Trip Type */}
              <FieldWrap label="Trip Type" error={errors.tripType?.message} required icon={<Car size={12} className="text-[#D4AF37]" />}>
                <select {...register("tripType")} className={selectCls}>
                  <option value="" disabled className="bg-[#1E293B]">Select trip type</option>
                  <option value="one-way" className="bg-[#1E293B]">One Way</option>
                  <option value="round-trip" className="bg-[#1E293B]">Round Trip</option>
                  <option value="local" className="bg-[#1E293B]">Local (Hourly)</option>
                  <option value="airport" className="bg-[#1E293B]">Airport Transfer</option>
                </select>
              </FieldWrap>

              {/* Vehicle */}
              <FieldWrap label="Vehicle Type" error={errors.vehicle?.message} required icon={<Car size={12} className="text-[#D4AF37]" />}>
                <select {...register("vehicle")} className={selectCls}>
                  <option value="" disabled className="bg-[#1E293B]">Select vehicle</option>
                  <option value="sedan" className="bg-[#1E293B]">Sedan (Swift Dzire / Honda City)</option>
                  <option value="suv" className="bg-[#1E293B]">SUV (Ertiga / Scorpio)</option>
                  <option value="innova" className="bg-[#1E293B]">Innova Crysta</option>
                  <option value="tempo" className="bg-[#1E293B]">Tempo Traveller</option>
                </select>
              </FieldWrap>

              {/* Date */}
              <FieldWrap label="Travel Date" error={errors.date?.message} required icon={<Calendar size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("date")}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={inputCls + " [color-scheme:dark]"}
                />
              </FieldWrap>

              {/* Time */}
              <FieldWrap label="Pickup Time" error={errors.time?.message} required icon={<Clock size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("time")}
                  type="time"
                  className={inputCls + " [color-scheme:dark]"}
                />
              </FieldWrap>

              {/* Name */}
              <FieldWrap label="Your Name" error={errors.name?.message} required icon={<User size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("name")}
                  placeholder="e.g. Rajesh Kumar"
                  className={inputCls}
                />
              </FieldWrap>

              {/* Mobile */}
              <FieldWrap label="Mobile Number" error={errors.mobile?.message} required icon={<Phone size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("mobile")}
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={inputCls}
                />
              </FieldWrap>

              {/* Email */}
              <FieldWrap label="Email (Optional)" error={errors.email?.message} icon={<Mail size={12} className="text-[#D4AF37]" />}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className={inputCls}
                />
              </FieldWrap>

              {/* Instructions */}
              <FieldWrap label="Special Instructions" error={errors.instructions?.message} icon={<FileText size={12} className="text-[#D4AF37]" />}>
                <textarea
                  {...register("instructions")}
                  placeholder="e.g. Need child seat, pickup from Gate 3..."
                  rows={3}
                  className={inputCls + " resize-none"}
                />
              </FieldWrap>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F0D060] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-yellow-600/20"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    Review Booking <ChevronRight size={16} />
                  </>
                )}
              </button>
              <p className="text-xs text-slate-500 text-center sm:text-left">
                We&apos;ll confirm your ride via WhatsApp on{" "}
                <span className="text-slate-300 font-medium">{BUSINESS.phone}</span>
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Summary Modal */}
      <AnimatePresence>
        {showSummary && formData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setShowSummary(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md glass-dark border border-[#D4AF37]/20 rounded-2xl p-6 overflow-y-auto max-h-[90vh]"
            >
              <h3 className="text-lg font-bold text-white mb-1">Booking Summary</h3>
              <p className="text-xs text-slate-400 mb-6">Please review before confirming</p>

              <dl className="space-y-3 text-sm mb-6">
                {[
                  { label: "Name", value: formData.name },
                  { label: "Mobile", value: formData.mobile },
                  { label: "Trip Type", value: tripLabels[formData.tripType] },
                  { label: "Pickup", value: formData.pickup },
                  { label: "Drop", value: formData.drop },
                  { label: "Date", value: formData.date },
                  { label: "Time", value: formData.time },
                  { label: "Vehicle", value: vehicleLabels[formData.vehicle] },
                  ...(formData.instructions ? [{ label: "Notes", value: formData.instructions }] : []),
                ].map((item) => (
                  <div key={item.label} className="flex justify-between gap-4">
                    <dt className="text-slate-500 flex-shrink-0">{item.label}</dt>
                    <dd className="text-white text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSummary(false)}
                  className="flex-1 py-3 text-sm font-semibold text-slate-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={onConfirm}
                  disabled={isSubmitting}
                  className="flex-1 py-3 text-sm font-bold text-[#0F172A] bg-[#D4AF37] hover:bg-[#F0D060] rounded-xl transition-all disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Confirm & WhatsApp"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
