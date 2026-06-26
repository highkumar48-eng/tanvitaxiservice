"use client";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-dark" | "glass-gold" | "solid" | "outline";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses = {
  glass: "glass",
  "glass-dark": "glass-dark",
  "glass-gold": "glass-gold",
  solid: "bg-brand-surface border border-brand-border",
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
        "rounded-2xl",
        variantClasses[variant],
        paddingClasses[padding],
        hover && "card-hover border-gold-glow cursor-pointer",
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
    <h3 className={cn("text-lg font-semibold text-white", className)} {...props}>
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
    <div className={cn("text-slate-400 text-sm leading-relaxed", className)} {...props}>
      {children}
    </div>
  );
}
