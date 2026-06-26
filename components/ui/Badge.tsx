"use client";

import { cn } from "@/lib/utils";

export type BadgeVariant = "gold" | "green" | "silver" | "urgent" | "blue" | "red";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  gold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  silver: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  urgent: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
};

const dotClasses: Record<BadgeVariant, string> = {
  gold: "bg-yellow-400",
  green: "bg-green-400",
  silver: "bg-slate-400",
  urgent: "bg-orange-400",
  blue: "bg-blue-400",
  red: "bg-red-400",
};

export function Badge({
  variant = "gold",
  children,
  className,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border",
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dotClasses[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
