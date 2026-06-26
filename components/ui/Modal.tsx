"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showClose?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[95vw] h-[95vh]",
};

export function Modal({
  open,
  onOpenChange,
  children,
  title,
  description,
  size = "md",
  showClose = true,
}: ModalProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            {/* Overlay */}
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>

            {/* Content */}
            <DialogPrimitive.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full",
                  "glass-dark rounded-2xl border border-white/10 shadow-card",
                  "focus:outline-none",
                  sizeClasses[size],
                  size === "full" && "overflow-hidden flex flex-col"
                )}
              >
                {/* Header */}
                {(title || showClose) && (
                  <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <div>
                      {title && (
                        <DialogPrimitive.Title className="text-xl font-bold text-white">
                          {title}
                        </DialogPrimitive.Title>
                      )}
                      {description && (
                        <DialogPrimitive.Description className="text-sm text-slate-400 mt-1">
                          {description}
                        </DialogPrimitive.Description>
                      )}
                    </div>
                    {showClose && (
                      <DialogPrimitive.Close
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
                        aria-label="Close dialog"
                      >
                        <X size={18} />
                      </DialogPrimitive.Close>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className={cn(size === "full" && "flex-1 overflow-y-auto")}>
                  {children}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}

export const ModalTrigger = DialogPrimitive.Trigger;
