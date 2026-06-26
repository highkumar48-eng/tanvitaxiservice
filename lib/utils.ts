import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as Indian Rupees */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format a date to readable string */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

/** Format a datetime */
export function formatDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
}

/** Generate a unique booking ID */
export function generateBookingId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TTS-${timestamp}-${random}`;
}

/** Validate Indian phone number */
export function isValidIndianPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s|-|\+91/g, ""));
}

/** Slugify a string for URLs */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}

/** Truncate text with ellipsis */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + "…";
}

/** Calculate estimated distance between two cities (rough km) */
export const CITY_DISTANCES: Record<string, Record<string, number>> = {
  gurugram: {
    jaipur: 270,
    agra: 230,
    chandigarh: 270,
    haridwar: 310,
    shimla: 390,
    dehradun: 310,
    mathura: 185,
    amritsar: 460,
    delhi: 35,
    noida: 55,
    faridabad: 40,
    manali: 560,
    mussoorie: 330,
  },
  delhi: {
    jaipur: 280,
    agra: 210,
    chandigarh: 260,
    haridwar: 300,
    shimla: 380,
    dehradun: 300,
    mathura: 175,
    amritsar: 450,
    gurugram: 35,
    noida: 25,
    faridabad: 30,
    manali: 550,
    mussoorie: 320,
  },
};

export function getDistanceKm(from: string, to: string): number {
  const fromKey = from.toLowerCase().trim();
  const toKey = to.toLowerCase().trim();
  return CITY_DISTANCES[fromKey]?.[toKey] ?? CITY_DISTANCES[toKey]?.[fromKey] ?? 100;
}
