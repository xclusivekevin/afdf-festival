import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/home-page", destination: "/", permanent: true },
      { source: "/about-page", destination: "/about", permanent: true },
      { source: "/contact-page", destination: "/contact", permanent: true },
      { source: "/tickets-checkout", destination: "/register", permanent: false },
      { source: "/tickets-order", destination: "/register", permanent: false },
      { source: "/event-registration-abuja-2025", destination: "/register", permanent: false },
      { source: "/registration", destination: "/register", permanent: false },
    ];
  },
};
export default nextConfig;
