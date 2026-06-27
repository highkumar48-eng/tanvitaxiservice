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
          // Dark Navy
          navy:       "#0D1B3E",
          "navy-light": "#162040",
          "navy-dark":  "#080F23",
          "navy-mid":   "#0F1E45",
          // Royal Blue Accent
          royal:      "#1B4FD8",
          "royal-light": "#2563EB",
          "royal-dark":  "#1338A8",
          // CTA Green
          green:      "#16A34A",
          "green-hover": "#15803D",
          // WhatsApp
          wa:         "#25D366",
          "wa-dark":  "#1AA44E",
          // Text
          charcoal:   "#1E293B",
          muted:      "#94A3B8",
          body:       "#475569",
          // Borders
          "border-light": "#E2E8F0",
          "border-dark":  "#1E3264",
          // Surfaces
          "surface-light": "#F8FAFC",
          "surface-mid":   "#F1F5F9",
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
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.12)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.4)",
        blue: "0 0 20px rgba(27, 79, 216, 0.2)",
        "blue-lg": "0 0 40px rgba(27, 79, 216, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(180deg, #0D1B3E 0%, #080F23 100%)",
        "gradient-royal": "linear-gradient(135deg, #1B4FD8 0%, #1338A8 100%)",
        "gradient-hero": "linear-gradient(to bottom, rgba(13,27,62,0.85) 0%, rgba(13,27,62,0.95) 100%)",
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
