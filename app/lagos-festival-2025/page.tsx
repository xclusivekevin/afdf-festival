import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
export const metadata: Metadata = { title: "Lagos Festival 2025", description: "African Food & Drinks Festival Lagos 2025, 26th October, Muri Okunola Park, Victoria Island, Lagos." };
export default function Lagos() {
  return <CityPage city="Lagos" dateLine="26th October 2025" venue="Muri Okunola Park V.I, Lagos, Nigeria" month="October" hero="01-Featured-Image.jpg" video={["-LIzlJCJqdI", "Highlights from the 2023 African Food & Drinks Festival in Lagos"]} ticketHref="/register"
    join="The 5th edition of the African Food & Drinks Festival takes over Muri Okunola Park for a full day of food, music, culture, and celebration, uniting thousands of Africans and the diaspora through unforgettable shared experiences."
    vendors={[["Pami Plug", "https://vendors.afrifoodnetwork.com/afdf-vendors/pami-plug/"], ["Doublev Kitchen", "https://vendors.afrifoodnetwork.com/double-v-kitchen/"], ["Wunmex", "https://vendors.afrifoodnetwork.com/afdf-lagos-vendors/wunmex/"], ["Chop's Basket", "https://vendors.afrifoodnetwork.com/chops-basket/"]]}
    recapTitle="How It Went In" recapYear="2023" recapBody="On November 26th, 2023, the grandest food festival to date captivated over six thousand attendees at Muri Okunola Park in Lagos. The festival was a vibrant and immersive celebration of African culture, bringing together family and friends to savor an array of Afro-themed food stands and delightful local vendors. This spectacular event showcased the richness of flavors, diverse cultures, and culinary traditions across the African continent, making it an unforgettable experience for all who attended." />;
}
