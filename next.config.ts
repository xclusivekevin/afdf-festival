import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // The www redirect and the noindex header used to live in middleware.ts,
  // which ran as a billed function on every request, before the cache
  // (PDOS 08 rule 19b, 26 Sep 2026). As config they run in Vercel's router.
  async headers() {
    return [{ source: "/:path*", missing: [{ type: "host", value: "festival.afrifoodnetwork.com" }], headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.festival.afrifoodnetwork.com" }], destination: "https://festival.afrifoodnetwork.com/:path*", permanent: true },
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
