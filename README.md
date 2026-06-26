# Tanvi Taxi Services — Website

A premium, production-ready taxi booking website for **Tanvi Taxi Services**, Gurugram & Delhi NCR.

Built with **Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Opens at http://localhost:3000

# Run production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
tanvitaxiservices/
├── app/
│   ├── layout.tsx          ← Root layout, SEO metadata, JSON-LD schemas
│   ├── page.tsx            ← Homepage (assembles all sections)
│   ├── globals.css         ← Global styles, design tokens, Tailwind theme
│   ├── robots.ts           ← Auto-generated robots.txt
│   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   └── manifest.ts         ← Web app manifest (PWA)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Sticky glassmorphic navbar
│   │   ├── Footer.tsx          ← 4-column footer with map
│   │   └── FloatingButtons.tsx ← Expandable WhatsApp/Call FAB
│   │
│   └── home/
│       ├── HeroSection.tsx     ← Full-screen hero + booking strip
│       ├── WhyChooseUs.tsx     ← 6 feature cards + stats
│       ├── Services.tsx        ← 7 service cards
│       ├── Fleet.tsx           ← 4 vehicle cards with images
│       ├── BookingForm.tsx     ← Validated booking form + summary modal
│       ├── FareCalculator.tsx  ← Distance-based fare estimator
│       ├── Testimonials.tsx    ← 6 customer review cards
│       ├── FAQ.tsx             ← 10-question accordion
│       ├── Gallery.tsx         ← Image grid with lightbox
│       ├── Contact.tsx         ← Contact form + map + info
│       └── QRPayment.tsx       ← UPI/QR payment section
│
├── lib/
│   ├── constants.ts        ← ⭐ ALL business info lives here
│   ├── types.ts            ← Shared TypeScript types
│   └── utils.ts            ← Utility functions (cn, etc.)
│
├── public/
│   ├── images/             ← Vehicle & hero images
│   └── icons/              ← App icons (192x192, 512x512)
│
└── .env.local.example      ← Environment variable template
```

---

## ✏️ Customization Guide

### 📞 Update Phone Number & WhatsApp

Open `lib/constants.ts` and update:

```ts
export const BUSINESS = {
  phone: "+91-8779362060",        // ← Update phone number
  whatsapp: "918779362060",       // ← Without + sign (for wa.me links)
  email: "info@tanvitaxiservices.com", // ← Update email
  address: "Gurugram, Haryana, India", // ← Update address
  city: "Gurugram",
  state: "Haryana",
  pincode: "122001",
  website: "https://tanvitaxiservices.com", // ← Update domain
};
```

### 🗺️ Update Google Maps Embed

1. Go to [Google Maps](https://maps.google.com)
2. Search your address
3. Click Share → Embed a map → Copy iframe src URL
4. In `lib/constants.ts`, update `mapEmbedUrl` with the new URL

### 💳 Update UPI ID & QR Code

In `lib/constants.ts`:

```ts
export const PAYMENT = {
  upiId: "tanvitaxi@upi",         // ← Replace with real UPI ID
  accountName: "Tanvi Taxi Services",
  accountNumber: "XXXXXXXXXXXX",   // ← Replace with real account number
  ifsc: "HDFC0001234",             // ← Replace with real IFSC
};
```

To replace QR code image:
1. Generate QR from your UPI app or any QR generator
2. Save as `public/images/payment-qr.png`
3. In `components/home/QRPayment.tsx`, replace the placeholder div with:
   ```tsx
   <Image src="/images/payment-qr.png" alt="UPI QR Code" fill className="object-contain p-4" />
   ```

### 🚗 Update Vehicle Images

Replace images in `public/images/`:

| File | Used For |
|------|----------|
| `hero_bg.png` | Hero section background |
| `fleet_sedan.png` | Sedan fleet card |
| `fleet_suv.png` | SUV fleet card |
| `fleet_innova.png` | Innova Crysta fleet card |
| `fleet_tempo.png` | Tempo Traveller fleet card |

Recommended size: **800×500px**, format: **WebP or PNG**

### ⭐ Update Testimonials

Open `components/home/Testimonials.tsx` and edit the `testimonials` array with real customer reviews.

### ❓ Update FAQ

Open `components/home/FAQ.tsx` and edit the `faqs` array.

### 📋 Update Services

Open `components/home/Services.tsx` and edit the `services` array.

### 💰 Update Fare Rates

Open `components/home/FareCalculator.tsx` and update the `PRICING_RULES` object:

```ts
const PRICING_RULES = {
  sedan: {
    baseFare: 300,      // ₹ flat for first 10 km
    perKm: 12,          // ₹ per km beyond 10 km
    driverAllowance: 250, // ₹ per night outstation
    minFare: 300,
  },
  // ... other vehicles
};
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Set environment variables from `.env.local.example`
5. Deploy — Vercel handles everything automatically

### Deploy to Hostinger / cPanel

```bash
npm run build
# Upload the .next folder + public + package.json to server
# Run: npm start (requires Node.js 18+)
```

---

## 🔥 Firebase Integration (Future)

The booking form is Firebase-ready. To activate:

1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Add credentials to `.env.local`
3. Create `lib/firebase.ts`:
   ```ts
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   
   const app = initializeApp({
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
     // ... other keys
   });
   
   export const db = getFirestore(app);
   ```
4. In `components/home/BookingForm.tsx`, replace the `submitBooking` stub:
   ```ts
   import { db } from "@/lib/firebase";
   import { addDoc, collection, serverTimestamp } from "firebase/firestore";
   
   async function submitBooking(data: BookingFormData) {
     const docRef = await addDoc(collection(db, "bookings"), {
       ...data,
       createdAt: serverTimestamp(),
       status: "pending",
     });
     return { id: docRef.id };
   }
   ```

---

## 📋 Pre-Launch Checklist

Before going live, update the following:

- [ ] Real phone number in `lib/constants.ts`
- [ ] Real WhatsApp number in `lib/constants.ts`
- [ ] Real email address in `lib/constants.ts`
- [ ] Real physical address in `lib/constants.ts`
- [ ] Real website domain in `lib/constants.ts`
- [ ] Real Google Maps embed URL in `lib/constants.ts`
- [ ] Real UPI ID in `lib/constants.ts`
- [ ] Real QR code image at `public/images/payment-qr.png`
- [ ] Real vehicle images in `public/images/`
- [ ] App icon PNGs at `public/icons/icon-192.png` and `public/icons/icon-512.png`
- [ ] OG image at `public/og-image.jpg` (1200×630px)
- [ ] Real GST number in `lib/constants.ts`
- [ ] Firebase credentials in `.env.local` (optional)
- [ ] Custom domain configured in hosting provider
- [ ] SSL certificate active

---

## 🔮 Future Upgrade Suggestions

| Feature | Complexity | Value |
|---------|------------|-------|
| Firebase bookings database | Medium | High |
| WhatsApp Business API | High | High |
| Google Analytics 4 | Low | High |
| Admin dashboard (view bookings) | High | High |
| Live fare API (Google Maps Distance) | Medium | Medium |
| Multi-language support (Hindi) | Medium | High |
| Driver app | Very High | Future |
| Online payment gateway | High | Medium |

---

## 📞 Support

Built by Antigravity AI. For customization or feature requests, contact your developer.
