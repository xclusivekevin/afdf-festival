import Image from "next/image";
import type { Metadata } from "next";
import { Banner, Btn, Arrow } from "@/components/ui";
export const metadata: Metadata = { title: "About Page", description: "Welcome to the African Food & Drinks Festival, a periodical event dedicated to promoting and celebrating African food culture to a global audience." };

const AIMS = [["Showcase Our Culinary Experience", "Our event line-up showcases the best of all our favorite local, regional, and international chefs, restaurants, and food vendors attending to a buzzing food enthusiastic crowd. This promotes our culture more to a larger audience."], ["Celebrate Africa's Cultural Diversity", "Because we are slowly losing our unique cultural perspectives, our event contains various cultural displays that sensitize the cosmopolitan audience with the feeling of connection to our common roots and oneness."], ["Boost Local SME's", "Our event connects numerous small businesses involved in the sale and production of food related items to an international audience of food lovers hence providing economical gain."], ["Promote Tourism", "We leave in a globalization era. Our event focuses on bringing vast international audience to hence increasing the ability for tourists to immerse themselves in our beautiful and diverse culture."]];
const FEATURES = [["Chef Live Cookout", "Top chef would demonstrate their skills, celebrating diversity through food and culture. Guest can engage, receive gifts, and learn recipes during 30-45 minute sessions. Unforgettable culinary experience with African flavors.", "AFF-night-0042-3.jpg"], ["Battle of The Chefs", "Rising Chefs compete in challenging culinary contests, presenting a variety of both local and international cuisines to win several gifts and cash prizes courtesy of our sponsors, while our esteemed top judges provide valuable feedback.", "F23-0642-scaled.jpg"], ["Eating Competition", "Participants can compete in an eating competition, consuming large quantities of food within a short time. Open to all with a big appetite, they have the opportunity to win incredible prizes.", "AFF-night-0042.jpg"], ["Influencers Challenge", "Food bloggers, YouTubers, chefs, and entertainers engage in thrilling food-related challenges as fans cheer them on. These challenges prioritize safety and ensure no harm to the participants.", "AFF-night-0042-Copy-2.jpg"], ["Food Trivia Challenges", "Participants enjoy a fun and educational food trivia challenge with scrumptious quiz questions of varying difficulty levels, suitable for all ages.", "F23-0483-scaled.jpg"], ["Music & DJ Perfomance", "Non-stop entertainment with top Afrobeats musicians and high-life music band with exceptional vocals and instrumentals for an unforgettable experience.", "AFF-night-0042-2.jpg"], ["Cultural Display", "Showcase of diverse cultures from Africa, engaging guests, evoking cherished memories, and highlighting the richness of our unique diversity.", "F23-0853-scaled.jpg"]];

export default function About() {
  return (
    <>
      <Banner title="About the Event" image="/img/IMG_0418-scaled.jpeg" />
      <section className="section bg-white-pattern">
        <div className="container">
          <div className="panel panel--white mx-auto max-w-4xl">
            <h2 className="text-center text-[length:var(--text-h1-sm)]">African Food & Drinks Festival</h2>
            <div className="ui mt-6 space-y-4 text-[15px] leading-[1.7] text-[color:var(--afdf-grey-700)]">
              <p>Welcome to the African Food & Drinks Festival, a periodical event dedicated to promoting and celebrating African food culture to a global audience. This festival is a subsidiary of the African Food Network, an organization committed to showcasing the diversity and richness of African cuisine.</p>
              <p>At the African Food & Drinks Festival, we are passionate about showcasing the incredible culinary diversity of the African continent. Our festival is a gathering of food enthusiasts, chefs, restaurateurs, and anyone who appreciates the beauty and flavors of African food. We showcase the best African cuisine with food exhibitions and showcases from different countries across the continent. Our festival is a melting pot of flavors, aromas, and textures that will take you on a culinary journey through Africa.</p>
              <p>One of our primary goals is to promote African cuisine to a global audience. Through the African Food & Drinks Festival, we provide a platform for chefs, restaurateurs, and food entrepreneurs to showcase their skills and products to an international audience. Our festival provides a unique opportunity for food enthusiasts from around the world to come together, learn about African cuisine, and experience the flavors and culture of Africa.</p>
              <p>In addition to the food exhibitions and showcases, we host food competitions, live cultural music performances, and cooking demonstrations. Our festival offers a unique opportunity to explore African cuisine, learn about the ingredients, and immerse yourself in the culture. Whether you are a food lover, a chef, or a restaurateur, the African Food & Drinks Festival has something for you.</p>
              <p>Our maiden edition of the festival was held in 2021 in Abuja, Nigeria, and it was a huge success with over 5000 people in attendance. Building on the success of our maiden edition, we held the African Food & Drinks Festival in Ghana and Abuja again in 2022, attracting an even bigger crowd with over 10000 people in attendance.</p>
              <p>Today, the African Food & Drinks Festival is one of the largest celebrations of African food in the world. We are proud of what we have achieved, and we believe that there is still so much more to do. Our festival is not just a celebration of African cuisine; it is a movement to promote African cuisine to a global audience.</p>
              <p>We are passionate about African food and believe that it has the potential to take the world by storm. Join us at the African Food & Drinks Festival and be part of the movement to promote African cuisine to a global audience. Experience the richness and diversity of African cuisine and culture, and join us in celebrating the beauty of African food.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-black-pattern">
        <div className="container">
          <h2 className="text-center text-[length:var(--text-h1-sm)]">Our Aim</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">{AIMS.map(([q, a], i) => <details key={q} className="faq-item" open={i === 0}><summary>{q}</summary><div className="faq-body">{a}</div></details>)}</div>
        </div>
      </section>
      <section className="section bg-maroon">
        <div className="container">
          <h2 className="text-center text-[length:var(--text-h1-sm)]">Event Features</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{FEATURES.map(([t, d, img]) => <div key={t} className="overflow-hidden rounded-2xl bg-white text-[color:var(--afdf-ink-900)]"><Image src={`/img/${img}`} alt="" width={600} height={400} className="aspect-[3/2] w-full object-cover" /><div className="p-6"><h3 className="text-[20px] text-black">{t}</h3><p className="ui mt-3 text-[14px] leading-[1.6] text-[color:var(--afdf-grey-700)]">{d}</p></div></div>)}</div>
        </div>
      </section>
      <section className="section bg-black-pattern">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Image src="/img/The-Ultimate-Feast-Experience.jpg" alt="Festival crowd" width={1024} height={819} className="gallery-img" />
          <div><h2 className="text-[length:var(--text-h1-sm)]">All About the Feast</h2><p className="mt-4 text-[17px]">The 2023 African Food and Drinks Festival Abuja, proudly hosted by the African Food Network, was a resounding success. It provided a dynamic platform for cultural exchange, gastronomic exploration, and community building.</p></div>
        </div>
        <div className="container mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2"><Image src="/img/A-wealth-of-activities.jpg" alt="Festival activities" width={1024} height={819} className="gallery-img" /></div>
          <div><h2 className="text-[length:var(--text-h1-sm)]">A Wealth of Activities</h2><p className="mt-4 text-[17px]">As the flavors linger and memories of the vibrant event endure, attendees departed with a profound appreciation for the diversity and richness of African cuisine. The festival served as a testament to the power of food in fostering connections and celebrating cultural heritage.</p><div className="mt-6"><Btn href="/lagos-festival-2025" variant="orange">Take a Look <Arrow /></Btn></div></div>
        </div>
      </section>
      <section className="section bg-maroon">
        <div className="container"><div className="panel text-center"><h2 className="text-[length:var(--text-h1-sm)]">Sign Up</h2><p className="mx-auto mt-3 max-w-2xl text-[17px]">Sign up for our newsletter to get first access to our line-up announcements, the latest news, and the jump on exclusive ticket drops.</p><div className="mt-6"><Btn href="/newsletter" variant="red">Subscribe <Arrow /></Btn></div></div></div>
      </section>
    </>
  );
}
