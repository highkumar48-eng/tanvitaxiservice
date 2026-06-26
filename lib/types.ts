// ─── Vehicle & Fleet ────────────────────────────────────────────────────────

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  seats: number;
  luggage: number; // bags
  fuelType: FuelType;
  acType: "AC" | "Non-AC";
  pricePerKm: number; // INR
  basePrice: number; // minimum fare INR
  features: string[];
  urgencyTag?: string;
  available: boolean;
  comfortLevel: 1 | 2 | 3 | 4 | 5;
  description: string;
  recommended?: boolean;
}

export type VehicleCategory =
  | "sedan"
  | "suv"
  | "innova"
  | "luxury"
  | "tempo";

export type FuelType = "Petrol" | "Diesel" | "CNG" | "Electric";

// ─── Booking ─────────────────────────────────────────────────────────────────

export type TripType = "one-way" | "round-trip" | "outstation" | "local";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "in-progress"
  | "completed"
  | "cancelled";

export interface FareBreakdown {
  baseFare: number;
  distanceKm: number;
  nightSurcharge: number;
  driverAllowance: number;
  tolls: number;
  parking: number;
  gst: number;
  total: number;
}

export interface Booking {
  id?: string;
  bookingId: string;
  // Route
  pickup: string;
  drop: string;
  tripType: TripType;
  date: string;
  time: string;
  passengers: number;
  // Vehicle
  vehicleId: string;
  vehicleName: string;
  // Customer
  name: string;
  phone: string;
  email: string;
  notes?: string;
  // Fare
  fareBreakdown: FareBreakdown;
  // Payment
  screenshotUrl?: string;
  paymentStatus: "pending" | "uploaded" | "verified";
  // Meta
  status: BookingStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface BookingFormData {
  pickup: string;
  drop: string;
  tripType: TripType;
  date: string;
  time: string;
  passengers: number;
  vehicleId: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
}

// ─── Routes ──────────────────────────────────────────────────────────────────

export interface Route {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  durationHours: number;
  fixedPrice: number; // sedan price
  popular: boolean;
  image?: string;
  highlights?: string[];
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  date: string;
  verified: boolean;
  service?: string;
  avatar?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export type FAQCategory =
  | "general"
  | "booking"
  | "payment"
  | "cancellation"
  | "fleet"
  | "outstation"
  | "airport";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  order: number;
}

// ─── Service Pages ────────────────────────────────────────────────────────────

export interface ServicePage {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  pricing: ServicePricing[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePricing {
  vehicle: string;
  price: string;
  unit: string;
  features: string[];
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
  readTimeMinutes: number;
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  upiId: string;
  qrCodeUrl: string;
  gst: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface ContactRequest {
  id?: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
  handled: boolean;
}

// ─── API Responses ────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface BookingApiResponse {
  bookingId: string;
  id: string;
}
