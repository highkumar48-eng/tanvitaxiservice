"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "whatsapp"
  | "call"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-white text-white font-bold tracking-[1.5px] uppercase bg-transparent hover:bg-white hover:text-[#081423]",
  secondary:
    "border border-brand-border bg-brand-card text-white font-bold tracking-[1.5px] uppercase hover:border-brand-blue hover:bg-brand-hover",
  ghost:
    "text-brand-text-sec font-medium hover:bg-brand-hover hover:text-white",
  whatsapp:
    "bg-brand-green text-white font-bold tracking-[1.5px] uppercase hover:opacity-90",
  call:
    "bg-brand-blue text-white font-bold tracking-[1.5px] uppercase hover:bg-blue-600",
  danger:
    "bg-red-600 text-white font-bold tracking-[1.5px] uppercase hover:bg-red-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs rounded-none gap-1.5",
  md: "px-6 py-3 text-sm rounded-none gap-2",
  lg: "px-8 py-4 text-base rounded-none gap-2",
  xl: "px-10 py-5 text-lg rounded-none gap-3",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || isLoading}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" size={16} />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
