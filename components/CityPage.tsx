import Image from "next/image";
import { Btn, Arrow, YouTube } from "@/components/ui";

const GALLERY = ["F23-0853-scaled.jpg", "F23-7516-scaled.jpg", "F23-0868-scaled.jpg", "F23-0642-scaled.jpg", "F23-0483-scaled.jpg", "F23-0388-scaled.jpg"];
const RECAP = ["Us-You-All-The-Food.jpg", "AFF-2023-05125.jpg", "AFF-2023-05037.jpg", "AFF-2023-05034.jpg", "F23-7107-scaled.jpg", "F23-0551-scaled.jpg", "F23-0317-scaled.jpg", "F23-0425-scaled.jpg"];

export type CityProps = {
  city: "Lagos" | "Abuja"; dateLine: string; venue: string; month: string; hero: string; video: [string, string];
  join: string; extras?: [string, string][]; ticketHref: string; vendors?: [string, string][]; recapTitle: string; recapYear: string; recapBody: string;
};

export default function CityPage(p: CityProps) {
  return (
    <>
      <section className="relative flex min-h-[560px] items-center pt-16 text-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.7)), url(/img/${p.hero})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-16">
          <p className="ui text-[13px] font-bold uppercase tracking-wide text-white">The Biggest Food Festival in Africa</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-[length:var(--text-h1)] text-[color:var(--afdf-orange-500)]">Celebrating African food, culture, and community.</h1>
          <p className="ui mx-auto mt-4 max-w-xl text-[16px] font-bold text-white">Thanks for THE BEST year. See you next year for even more fun and enjoyment!</p>
          <div className="mt-8"><Btn href="/register" variant="red">Register for {p.city} <Arrow /></Btn></div>
        </div>
      </section>

      <section className="section bg-maroon text-center">
        <div className="container"><h2 className="mx-auto max-w-4xl text-[length:var(--text-h1-sm)] leading-[1.1]">A Festival of Cultural Exchange Between Africa and the World.<br />{p.dateLine}<br />{p.venue}</h2></div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="grid grid-cols-3 gap-1 bg-black">{GALLERY.map((f) => <Image key={f} src={`/img/${f}`} alt="" width={400} height={400} className="aspect-square w-full object-cover" />)}</div>
        <div className="flex items-center bg-[color:var(--afdf-olive-800)] bg-black-pattern p-10 lg:p-16" style={{ backgroundColor: "#2D360D" }}>
          <div><h2 className="text-[32px] text-[color:var(--afdf-orange-500)] md:text-[40px]">Join Us for 1 Day of Food, Culture, and Entertainment</h2><p className="mt-4 text-[17px]">{p.join}</p></div>
        </div>
      </section>

      {p.extras && (
        <section className="section bg-black-pattern">
          <div className="container grid gap-6 md:grid-cols-2">
            {p.extras.map(([t, d], i) => <div key={t} className="rounded-2xl p-8 text-center" style={{ background: i === 0 ? "var(--afdf-red-600)" : "var(--afdf-orange-500)" }}><h3 className="text-[28px]">{t}</h3><p className="mt-4 text-[16px] text-white">{d}</p></div>)}
          </div>
        </section>
      )}

      <section className="bg-[color:var(--afdf-orange-500)]">
        <div className="container grid items-center gap-8 py-16 md:grid-cols-2">
          <h2 className="text-[36px] leading-[1] sm:text-[48px] md:text-[64px] break-words">Festival<br /><span className="text-[color:var(--afdf-maroon-900)]">Tickets</span></h2>
          <div><p className="text-[17px] text-white">Join thousands of food lovers, culture enthusiasts, and music fans this {p.month} at {p.venue.split(",")[0]}. Come experience Africa&apos;s biggest food celebration and grab your festival ticket before it sells out.</p><div className="mt-5"><Btn href={p.ticketHref} variant="red">Get Tickets <Arrow /></Btn></div></div>
        </div>
      </section>

      {p.vendors ? (
        <section className="section bg-black-pattern">
          <div className="container">
            <h2 className="text-center text-[length:var(--text-h1-sm)]">Vendor Menus</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{p.vendors.map(([n, h]) => <div key={n} className="panel !p-6 text-center"><h3 className="text-[20px]">{n}</h3><div className="mt-4"><Btn href={h} variant="orange">View Menu <Arrow /></Btn></div></div>)}</div>
            <div className="mt-8 text-center"><Btn href="https://vendors.afrifoodnetwork.com/" variant="red">View All Vendors <Arrow /></Btn></div>
          </div>
        </section>
      ) : (
        <section className="bg-[color:var(--afdf-red-600)]">
          <div className="container grid items-center gap-8 py-16 md:grid-cols-2">
            <h2 className="text-[36px] leading-[1] sm:text-[48px] md:text-[64px] break-words">Vendors<br /><span className="text-[color:var(--afdf-orange-500)]">Registrations</span></h2>
            <div><p className="text-[17px] text-white">Showcase your flavours, grow your brand, and sell to thousands of festival-goers this {p.month}. Limited vendor spots available for Africa&apos;s biggest culinary celebration.</p><div className="mt-5"><Btn href="/vendor-registration" variant="orange">Click here <Arrow /></Btn></div></div>
          </div>
        </section>
      )}

      <section className="bg-black">
        <div className="container grid items-center gap-8 py-16 md:grid-cols-2">
          <h2 className="text-[36px] leading-[1] sm:text-[48px] md:text-[64px] break-words">Become a<br /><span className="text-[#3B8A1E]">Sponsor</span></h2>
          <div><p className="text-[17px] text-white">Partner with Africa&apos;s leading food culture festival in {p.city} this {p.month} and connect your brand with thousands of food lovers, culture seekers, and trendsetters across the continent.</p><div className="mt-5"><Btn href="/become-a-sponsor" variant="green">Click here <Arrow /></Btn></div></div>
        </div>
        <div className="container pb-16"><YouTube id={p.video[0]} title={p.video[1]} /></div>
      </section>

      <section className="bg-[color:var(--afdf-olive-800)]">
        <div className="container grid items-center gap-8 py-16 md:grid-cols-2">
          <h2 className="text-[36px] leading-[1] sm:text-[48px] md:text-[64px] break-words">Travel<br />Packages</h2>
          <div><p className="text-[17px] text-white">Visiting {p.city} for the African Food & Drinks Festival? Our curated Travel Packages include hotel options, airport pickup, and on-ground support plus everything you need to enjoy the festival stress-free from start to finish.</p><div className="mt-5"><span className="btn btn--green opacity-80">Announcing Soon <Arrow /></span></div></div>
        </div>
      </section>

      <section className="section bg-maroon">
        <div className="container">
          <div className="panel">
            <h2 className="text-[length:var(--text-h1-sm)]">{p.recapTitle} <span className="emph">{p.recapYear}</span></h2>
            <p className="mt-4 max-w-4xl text-[17px]">{p.recapBody}</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">{RECAP.map((f) => <Image key={f} src={`/img/${f}`} alt="Festival moment" width={400} height={533} className="aspect-[3/4] w-full rounded-lg object-cover" />)}</div>
            <div className="mt-10 text-center"><Btn href="https://www.instagram.com/afrifoodfestival/" variant="red">View On Instagram <Arrow /></Btn></div>
          </div>
        </div>
      </section>
    </>
  );
}
