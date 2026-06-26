"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article" | "main";
  contained?: boolean;
  noPadding?: boolean;
  id?: string;
}

export function SectionWrapper({
  as: Tag = "section",
  contained = true,
  noPadding = false,
  className,
  children,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn(!noPadding && "py-20 px-6", className)} {...props}>
      {contained ? (
        <div className="max-w-7xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-brand-gold" />
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-brand-gold" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-gradient-gold">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-slate-400 text-base md:text-lg leading-relaxed",
            centered && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
