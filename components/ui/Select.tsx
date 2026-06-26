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
        <label htmlFor={selectId} className="text-sm font-medium text-slate-300">
          {label}
          {required && (
            <span className="text-red-400 ml-1" aria-hidden="true">
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
            "flex items-center justify-between w-full px-4 py-3 bg-slate-800 border rounded-xl text-sm",
            "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50",
            error
              ? "border-red-500 text-white"
              : "border-slate-700 hover:border-slate-600 text-white",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <SelectPrimitive.Value placeholder={<span className="text-slate-500">{placeholder}</span>} />
          <SelectPrimitive.Icon>
            <ChevronDown size={16} className="text-slate-400" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="z-50 overflow-hidden bg-slate-800 border border-slate-700 rounded-xl shadow-card"
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
                    "flex items-center justify-between px-4 py-2.5 text-sm rounded-lg cursor-pointer",
                    "text-slate-300 hover:text-white hover:bg-slate-700",
                    "focus:outline-none focus:bg-slate-700 focus:text-white",
                    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
                    "data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                  )}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <Check size={14} className="text-brand-gold" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {error && (
        <p role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
