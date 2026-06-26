"use client";

import { motion } from "framer-motion";
import { QrCode, Copy, CheckCheck, IndianRupee } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAYMENT } from "@/lib/constants";

const paymentSteps = [
  { step: "1", text: "Scan the QR code using any UPI app" },
  { step: "2", text: "Enter the amount agreed with your driver" },
  { step: "3", text: "Complete payment & share screenshot with driver" },
  { step: "4", text: "Keep the receipt for your records" },
];

const acceptedApps = [
  "Google Pay",
  "PhonePe",
  "Paytm",
  "Amazon Pay",
  "BHIM UPI",
];

export default function QRPayment() {
  const [copied, setCopied] = useState(false);

  const copyUPI = () => {
    navigator.clipboard.writeText(PAYMENT.upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="payment" className="py-20 md:py-28 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Easy Payment"
          title="Pay Via"
          highlight="UPI / QR Code"
          subtitle="Fast, secure, and cashless payments accepted. Scan QR or enter UPI ID directly."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center p-8 glass-dark border border-[#D4AF37]/20 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.06)]"
          >
            {/* QR Placeholder — Replace src with real QR image */}
            <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl relative overflow-hidden">
              {/* Replace this div content with <Image src="/images/payment-qr.png" ... /> when QR is ready */}
              <div className="flex flex-col items-center justify-center gap-3 text-center px-4">
                <QrCode size={64} className="text-[#0F172A]" />
                <p className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider leading-tight">
                  Replace with real QR image
                </p>
              </div>
              {/* Overlay hint for dev */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#D4AF37]/90 py-1 text-center">
                <p className="text-[8px] font-black text-[#0F172A] uppercase tracking-widest">QR Placeholder</p>
              </div>
            </div>

            {/* UPI ID */}
            <div className="w-full flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl mb-2">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">UPI ID</p>
                <p className="text-sm font-bold text-[#D4AF37] truncate">{PAYMENT.upiId}</p>
              </div>
              <button
                onClick={copyUPI}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/8 hover:bg-white/15 text-slate-300 hover:text-white transition-all flex-shrink-0"
              >
                {copied ? <CheckCheck size={12} className="text-green-400" /> : <Copy size={12} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <p className="text-xs text-slate-500 text-center">
              Account: <span className="text-slate-300">{PAYMENT.accountName}</span>
            </p>

            {/* Accepted apps */}
            <div className="mt-5 w-full">
              <p className="text-xs text-slate-500 text-center mb-2">Accepted via</p>
              <div className="flex flex-wrap justify-center gap-2">
                {acceptedApps.map((app) => (
                  <span key={app} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/8 rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <IndianRupee size={20} className="text-[#D4AF37]" />
                How to Pay
              </h3>
              <p className="text-sm text-slate-400">Quick, secure, and hassle-free. Pay in seconds from any UPI app.</p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {paymentSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold text-sm">
                    {item.step}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Bank details */}
            <div className="p-5 rounded-xl bg-white/3 border border-white/8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Bank Transfer Details</p>
              <dl className="space-y-2 text-sm">
                {[
                  { label: "Account Name", value: PAYMENT.accountName },
                  { label: "Account No.", value: PAYMENT.accountNumber },
                  { label: "IFSC Code", value: PAYMENT.ifsc },
                  { label: "Bank", value: `${PAYMENT.bankName} — ${PAYMENT.branch}` },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-3">
                    <dt className="text-slate-500 flex-shrink-0">{row.label}</dt>
                    <dd className="text-slate-200 text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="text-xs text-slate-500">
              💡 <span className="text-slate-400">Always confirm payment with driver. For disputes, contact us at{" "}
              <span className="text-[#D4AF37]">{PAYMENT.upiId}</span></span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
