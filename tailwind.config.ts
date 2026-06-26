import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          darker: "#080E1A",
          gold: "#D4AF37",
          "gold-light": "#F0D060",
          "gold-dark": "#A8871C",
          silver: "#94A3B8",
          white: "#FFFFFF",
          green: "#25D366",
          "green-dark": "#1AA44E",
          surface: "#1E293B",
          border: "#334155",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
        "3xl": "64px",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 0 60px rgba(212, 175, 55, 0.25)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.15)",
        glow: "0 0 60px rgba(212, 175, 55, 0.08)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #A8871C 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #0F172A 0%, #080E1A 100%)",
        "gradient-surface":
          "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
        "gradient-hero":
          "linear-gradient(to bottom, rgba(8,14,26,0.3) 0%, rgba(8,14,26,0.7) 60%, rgba(8,14,26,0.95) 100%)",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
