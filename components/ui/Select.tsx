"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
}

export function Select({
  label,
  error,
  options,
  placeholder = "Select an option",
  value,
  onValueChange,
  disabled,
  required,
  id,
}: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={selectId} className="text-xs font-semibold text-brand-text-sec uppercase tracking-wider flex items-center gap-1.5">
          {label}
          {required && (
            <span className="text-red-400 ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <SelectPrimitive.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectPrimitive.Trigger
          id={selectId}
          aria-invalid={error ? "true" : undefined}
          className={cn(
            "flex items-center justify-between w-full px-4 py-3.5 bg-brand-card border text-sm rounded-none",
            "transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue",
            error
              ? "border-red-500 text-white"
              : "border-brand-border hover:border-brand-text-sec/30 text-white",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <SelectPrimitive.Value placeholder={<span className="text-slate-500">{placeholder}</span>} />
          <SelectPrimitive.Icon>
            <ChevronDown size={16} className="text-brand-text-sec" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="z-50 overflow-hidden bg-brand-bg-sec border border-brand-border rounded-none shadow-lg"
            position="popper"
            sideOffset={4}
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 text-sm rounded-none cursor-pointer",
                    "text-brand-text-sec hover:text-white hover:bg-brand-card",
                    "focus:outline-none focus:bg-brand-card focus:text-white",
                    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
                    "data-[highlighted]:bg-brand-card data-[highlighted]:text-white"
                  )}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <Check size={14} className="text-brand-blue" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {error && (
        <p role="alert" className="text-xs text-red-400 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}
