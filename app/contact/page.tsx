"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { BUSINESS, CALL_URL, WHATSAPP_PREFILL } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
  "w-full px-4 py-3 bg-brand-card border border-brand-border rounded-none text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-all duration-200";

export default function ContactPage() {
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

  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact Desk"
          title="Get In"
          highlight="Touch"
          subtitle="Our representatives are available 24 hours a day, 7 days a week to handle logistics, dispatch adjustments, and billing requests."
        />
      </section>

      {/* Contact Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Official Channels
            </h3>

            <a
              href={CALL_URL}
              className="block bg-brand-card border border-brand-border p-5 hover:border-brand-blue transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center text-brand-blue">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[0.5px]">Direct Line</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{BUSINESS.phone}</div>
                </div>
              </div>
            </a>

            <a
              href={WHATSAPP_PREFILL()}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-card border border-brand-border p-5 hover:border-brand-blue transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center text-brand-green">
                  <WAIcon />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[0.5px]">WhatsApp Desk</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Chat Instantly</div>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="block bg-brand-card border border-brand-border p-5 hover:border-brand-blue transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center text-brand-blue">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[0.5px]">Email Address</div>
                  <div className="text-sm font-semibold text-white mt-0.5 truncate">{BUSINESS.email}</div>
                </div>
              </div>
            </a>

            <div className="block bg-brand-card border border-brand-border p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center text-brand-text-sec">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[0.5px]">Headquarters</div>
                  <div className="text-xs font-light text-white mt-0.5">{BUSINESS.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <Card variant="solid" padding="lg">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
                Send Corporate Message
              </h3>

              {sent ? (
                <div className="py-12 text-center">
                  <CheckCircle2 size={48} className="text-brand-green mx-auto mb-4" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Message Forwarded to WhatsApp
                  </h4>
                  <p className="text-xs text-brand-text-sec font-light mt-2">
                    Thank you. We will respond with pricing metrics shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div>
                    <label className="text-[10px] font-bold text-brand-text-sec uppercase tracking-widest block mb-2">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Enter your name"
                      className={inputCls}
                    />
                    {errors.name?.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-brand-text-sec uppercase tracking-widest block mb-2">
                      Mobile Number
                    </label>
                    <input
                      {...register("mobile")}
                      placeholder="e.g. 9876543210"
                      className={inputCls}
                    />
                    {errors.mobile?.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.mobile.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-brand-text-sec uppercase tracking-widest block mb-2">
                      Requirement Detail
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Briefly describe your taxi or travel package requirement..."
                      className={`${inputCls} resize-none`}
                    />
                    {errors.message?.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button variant="primary" type="submit" isLoading={isSubmitting} fullWidth>
                    Submit Query
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="border-t border-brand-border h-[400px] w-full relative">
        <iframe
          src={BUSINESS.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%)" }}
          allowFullScreen
          loading="lazy"
          title="Google Map Embed"
        />
      </section>
    </div>
  );
}
