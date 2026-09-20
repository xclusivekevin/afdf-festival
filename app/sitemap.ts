import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://festival.afrifoodnetwork.com", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://festival.afrifoodnetwork.com/about", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/lagos-festival-2025", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/abuja-festival-2025", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/register", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/become-a-sponsor", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/vendor-registration", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/food-tour", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/events", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/contact", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/newsletter", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/join-the-waitlist", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/privacy-policy", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/terms-of-use", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://festival.afrifoodnetwork.com/cookie-policy", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
