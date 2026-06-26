import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tanvi Taxi Services",
    short_name: "Tanvi Taxi",
    description:
      "Premium taxi and cab service in Gurugram & Delhi NCR. Airport, outstation, local and corporate travel.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#D4AF37",
    orientation: "portrait-primary",
    categories: ["transportation", "travel"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
