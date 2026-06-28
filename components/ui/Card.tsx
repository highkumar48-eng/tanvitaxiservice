"use client";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-dark" | "glass-gold" | "solid" | "outline";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses = {
  glass: "bg-brand-card border border-brand-border",
  "glass-dark": "bg-brand-bg-sec border border-brand-border",
  "glass-gold": "bg-brand-card border border-brand-blue/30",
  solid: "bg-brand-card border border-brand-border",
  outline: "border border-brand-border bg-transparent",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  variant = "glass",
  hover = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        variantClasses[variant],
        paddingClasses[padding],
        hover && "hover:border-brand-blue cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-bold text-white tracking-wide uppercase", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardBody({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-brand-text-sec text-sm font-light leading-relaxed", className)} {...props}>
      {children}
    </div>
  );
}
