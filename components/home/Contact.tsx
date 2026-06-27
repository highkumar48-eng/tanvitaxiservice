"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { BUSINESS, CALL_URL, WHATSAPP_PREFILL } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  message: z.string().min(10, "Please write at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function WAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const inputCls =
  "w-full px-3.5 py-3 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all duration-200";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 600));
    const msg = `Hi Tanvi Taxi Services!\nName: ${data.name}\nMobile: ${data.mobile}\nMessage: ${data.message}`;
    window.open(
      `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  const infoCards = [
    {
      id: "phone",
      label: "Phone / WhatsApp",
      value: BUSINESS.phone,
      href: CALL_URL,
      icon: Phone,
      iconBg: "#1B4FD8",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "Chat Instantly",
      href: WHATSAPP_PREFILL(),
      iconNode: <WAIcon className="w-4 h-4 text-white" />,
      iconBg: "#25D366",
    },
    {
      id: "email",
      label: "Email",
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      icon: Mail,
      iconBg: "#0891B2",
    },
    {
      id: "address",
      label: "Address",
      value: `${BUSINESS.address}, ${BUSINESS.state} — ${BUSINESS.pincode}`,
      href: undefined,
      icon: MapPin,
      iconBg: "#64748B",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-white" aria-label="Contact us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold text-[#1B4FD8] uppercase tracking-widest block mb-3">
            Contact Us
          </span>
          <div className="w-10 h-0.5 bg-[#1B4FD8] mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-2">
            Get in Touch
          </h2>
          <p className="text-[#64748B] max-w-xl">
            We&apos;re available 24×7. Reach out via call, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div className="flex items-center gap-3.5 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#1B4FD8]/30 hover:bg-[#EFF6FF] transition-all duration-200">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.iconNode ?? (Icon && <Icon size={16} className="text-white" />)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm font-medium text-[#1E293B] truncate">{card.value}</p>
                  </div>
                </div>
              );

              return card.href ? (
                <a
                  key={card.id}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={card.label}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.id}>{inner}</div>
              );
            })}

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] h-48 mt-2">
              <iframe
                src={BUSINESS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tanvi Taxi Services on Map"
              />
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-lg font-bold text-[#0D1B3E] mb-1">Send a Message</h3>
              <p className="text-sm text-[#64748B] mb-6">
                We&apos;ll get back to you on WhatsApp within minutes.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <CheckCircle2 size={52} className="text-[#16A34A] mb-4" />
                  <p className="text-[#0D1B3E] font-semibold text-lg">Message sent!</p>
                  <p className="text-[#64748B] text-sm mt-1">
                    We&apos;ll respond on WhatsApp shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      {...register("name")}
                      placeholder="e.g. Rajesh Kumar"
                      autoComplete="name"
                      className={inputCls}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-mobile" className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-mobile"
                      {...register("mobile")}
                      type="tel"
                      placeholder="10-digit number"
                      maxLength={10}
                      autoComplete="tel"
                      inputMode="numeric"
                      className={inputCls}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.mobile.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your trip requirements..."
                      className={inputCls + " resize-none"}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-label="Send message via WhatsApp"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={15} /> Send via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
