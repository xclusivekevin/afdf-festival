import Image from "next/image";
import type { Metadata } from "next";
import { Btn, Arrow, YouTube } from "@/components/ui";
export const metadata: Metadata = { title: "Food Tour & Cultural Night", description: "AFDF 2025 African Food Tour & Cultural Night. 5 years. 1 continent. Endless flavour." };
const STOPS = [["East Africa (Savory)", "Spiced stews, injera, grilled meats, and Ethiopian coffee ceremony."], ["North Africa (Sweet)", "Baklava, dates, almond pastries, Moroccan tea, and spice-route storytelling."], ["Central Africa (Earthy)", "Cassava, plantains, peanut stews with ancestral storytelling and drum circles."], ["Southern Africa (Fusion)", "Fusion braai dishes, Cape wine pairings, and jazz-inspired cultural showcases."], ["West Africa (Spicy)", "Bold flavors of jollof, suya, egusi soup with fiery dance and drumming."], ["Nigeria Cultural Night", "Nigerian banquet, spoken word, dance troupes, and burn-fire night with talking drums."]];
const LOGOS = Array.from({ length: 34 }, (_, i) => `${i + 1}.png`);
export default function FoodTour() {
  return (
    <>
      <section className="relative flex min-h-[560px] items-center pt-16 text-center" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/img/African-Food-fest-Dec-15-2024-Batch-2-67-of-154-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-16">
          <p className="font-[family-name:var(--font-display)] text-[22px] uppercase text-[color:var(--afdf-orange-500)]">AFDF 2025</p>
          <h1 className="mt-2 text-[length:var(--text-h1)]">African Food Tour & Cultural Night</h1>
          <p className="mt-4 font-[family-name:var(--font-display)] text-[20px] uppercase text-white md:text-[26px]">5 Years. 1 Continent. Endless Flavour</p>
          <p className="ui mt-6 text-[16px] font-bold uppercase text-white">Saturday, November 15, 2025 | Abuja, Nigeria</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Btn href="https://app.ibloov.com/event/afdfftcn" variant="orange">Food Tour <Arrow /></Btn><Btn href="https://app.ibloov.com/event/afdfftcn" variant="red">Cultural Night <Arrow /></Btn></div>
        </div>
      </section>
      <section className="bg-white py-8"><div className="container flex flex-wrap items-center justify-center gap-6">{LOGOS.map((l) => <Image key={l} src={`/img/${l}`} alt="Partner logo" width={75} height={75} className="h-[56px] w-auto object-contain" />)}</div></section>
      <section className="section bg-maroon text-center">
        <div className="container"><p className="font-[family-name:var(--font-display)] text-[22px] uppercase text-[color:var(--afdf-orange-500)]">United by Food</p><h2 className="mt-2 text-[length:var(--text-h1-sm)]">The Core Experience</h2><p className="mx-auto mt-6 max-w-3xl text-[19px]">The AFDF 2025 “United by Food” Tour is a one-day premium culinary journey across Africa’s diverse regions — East, North, Central, Southern, and West Africa — culminating in a grand finale cultural night in Nigeria. Expect authentic tastings, chef talks, music, dance, storytelling, and a once-in-a-lifetime Pan-African experience.</p></div>
      </section>
      <section className="section bg-black-pattern">
        <div className="container text-center"><h2 className="text-[length:var(--text-h1-sm)]">Event Highlights</h2><p className="mx-auto mt-4 max-w-3xl text-[17px]">Journey across Africa in six immersive stops. Each destination offers authentic flavors, performances, and storytelling that unite the continent by food.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{STOPS.map(([t, d]) => <div key={t} className="panel !p-6 text-left"><h3 className="text-[22px] text-[color:var(--afdf-orange-500)]">{t}</h3><p className="mt-3 text-[16px]">{d}</p></div>)}</div>
        </div>
      </section>
      <section className="section bg-maroon text-center"><div className="container"><h2 className="text-[length:var(--text-h1-sm)]">Who’s Coming?</h2><p className="mx-auto mt-4 max-w-3xl text-[19px]">AFDF 2025 is curated for only 100–150 premium guests for the Food Tour, and 300–350 guests for the Cultural Night. Expect embassy guests, VIPs, culinary influencers, media, and food lovers — all united by flavor.</p></div></section>
      <section className="section bg-black-pattern">
        <div className="container"><h2 className="text-center text-[length:var(--text-h1-sm)]">Secure Your Space</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="panel"><h3 className="text-[26px]">Food Tour</h3><p className="mt-2 font-[family-name:var(--font-display)] text-[40px] text-[color:var(--afdf-orange-500)]">₦200,000</p><ul className="mt-4 list-disc space-y-1 pl-5 text-[16px]"><li>6 Venues</li><li>Tastings</li><li>Performances</li><li>Luxury Bus Experience</li><li>Access To Cultural Night</li></ul><div className="mt-6"><Btn href="https://app.ibloov.com/event/afdfftcn" variant="red">Buy Ticket <Arrow /></Btn></div></div>
            <div className="panel"><h3 className="text-[26px]">Cultural Night</h3><p className="mt-2 font-[family-name:var(--font-display)] text-[40px] text-[color:var(--afdf-orange-500)]">₦50,000</p><ul className="mt-4 list-disc space-y-1 pl-5 text-[16px]"><li>Exclusive Evening at Arts & Crafts Village with Performances</li><li>Spoken Word</li><li>Fire Light</li><li>Nigerian Cuisine</li></ul><div className="mt-6"><Btn href="https://app.ibloov.com/event/afdfftcn" variant="red">Buy Ticket <Arrow /></Btn></div></div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl"><YouTube id="HJJ0g9_gh5c" title="Celebrating The African Street Food Culture | African Food & Drinks Festival Abuja 2022" /></div>
        </div>
      </section>
    </>
  );
}
