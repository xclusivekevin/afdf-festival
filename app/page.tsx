import Image from "next/image";
import { Btn, Arrow } from "@/components/ui";
import StandoutTabs from "@/components/StandoutTabs";
import { FAQS } from "@/lib/faqs";

const ABOUT_IMGS = ["IMG_0418-scaled.jpeg", "IMG_0423-scaled.jpeg", "IMG_0424-scaled.jpeg", "IMG_0427-scaled.jpeg", "IMG_0431-scaled.jpeg", "IMG_0444-scaled.jpeg"];
const YEARS_IMGS = ["Us-You-All-The-Food.jpg", "AFF-2023-05125.jpg", "AFF-2023-05037.jpg", "AFF-2023-05034.jpg", "F23-7107-scaled.jpg", "F23-0551-scaled.jpg", "F23-0317-scaled.jpg", "F23-0425-scaled.jpg"];
const EXPECT = [["AFF-night-0042.jpg", "Influencer Food Challenge"], ["AFF-night-0042-3.jpg", "Chef Live Masterclasses"], ["African-Food-fest-Dec-15-2024-Batch-2-67-of-154-scaled.jpg", "African Food Tour"], ["AFF-night-0042-Copy-2.jpg", "African Food Trivia"], ["AFF-night-0042-Copycaca.jpg", "African Food Summit & Expo"], ["AFF-night-0042-2.jpg", "Live DJ Sets"]];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[640px] items-center justify-center pt-16 text-center md:min-h-screen" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.55)), url(/img/Hero-2-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-16">
          <Image src="/img/AFN-Logo1.png" alt="African Food & Drinks Festival" width={180} height={180} priority className="mx-auto w-[120px] md:w-[180px]" />
          <h1 className="mt-6 text-[length:var(--text-hero)] text-white drop-shadow-lg">2025 Was Epic!</h1>
          <p className="ui mx-auto mt-4 max-w-xl text-[16px] font-bold text-white md:text-[22px]">Thanks for THE BEST year. See you next year for even more fun and enjoyment!</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn href="/lagos-festival-2025" variant="orange">Lagos <Arrow /></Btn>
            <Btn href="/abuja-festival-2025" variant="red">Abuja <Arrow /></Btn>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-maroon">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h1)]">About the Festival</h2>
          <div className="panel panel--white mt-10 text-left">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {ABOUT_IMGS.map((f) => <Image key={f} src={`/img/${f}`} alt="African Food & Drinks Festival crowd and vendors" width={600} height={450} className="gallery-img aspect-[4/3]" />)}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-[19px] leading-[1.4] text-[color:var(--afdf-ink-900)]">The African Food and Drinks Festival is one of the largest gatherings of the biggest African food influencers, bloggers, chefs & thousands of food lovers globally with a focus on celebrating the uniqueness and diversity of African food and culture. With Over 20 thousand food lovers hosted, 218 Food Vendors Gathered in 3 successful editions.</p>
          </div>
        </div>
      </section>

      {/* Through the years */}
      <section className="section bg-black-pattern">
        <div className="container">
          <div className="panel">
            <h2 className="max-w-3xl text-[length:var(--text-h1)]">Through the Years,<br />One <span className="emph">Feast</span> at a Time</h2>
            <div className="prose-dark mt-6 max-w-4xl text-[17px]">
              <p>Over the years, the African Food & Drinks Festival has grown into a vibrant celebration that brings together thousands of people from different places, backgrounds, and cultures. Each edition has been alive with the sound of laughter, the rhythm of music, and the irresistible aroma of Africa&apos;s finest dishes.</p>
              <p>From buzzing vendor stands to shared tables filled with family and friends, every festival has been a story of connection and community. It&apos;s where food lovers discover new flavors, where vendors shine, and where memories are made that last far beyond the day itself.</p>
              <p>This legacy of unforgettable moments is why the African Food & Drinks Festival continues to be the gathering everyone looks forward to year after year.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {YEARS_IMGS.map((f) => <Image key={f} src={`/img/${f}`} alt="African Food & Drinks Festival crowd, vendors and performances" width={400} height={533} className="aspect-[3/4] w-full rounded-lg object-cover" />)}
            </div>
            <div className="mt-10 text-center"><Btn href="https://www.instagram.com/afrifoodfestival/" variant="red">View Past Events <Arrow /></Btn></div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section bg-black-pattern">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h1)]">What to Expect</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-3">
            {EXPECT.map(([f, t]) => (
              <div key={t} className="relative aspect-[3/4] overflow-hidden rounded-2xl border-[3px] border-[color:var(--afdf-orange-500)]">
                <Image src={`/img/${f}`} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.85) 100%)" }} />
                <p className="absolute inset-x-0 bottom-0 p-6 font-[family-name:var(--font-display)] text-[18px] uppercase leading-tight text-white">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standout */}
      <section className="section bg-maroon">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h1)]">A <span className="emph">5 Year</span> Standout!</h2>
          <div className="panel mt-10 !p-4 md:!p-6"><StandoutTabs /></div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-black-pattern">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h1)]">Partners & Sponsors</h2>
          <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl bg-black p-6 md:p-10" style={{ boxShadow: "0 0 0 3px #000, 0 0 40px rgba(250,152,0,0.25)" }}>
            <Image src="/img/Our-Sponsors-AFDF.png" alt="Partners and sponsors: Beta Digitals, Infinix, Airtel, Rida, Pulse, Malta Guinness, Imperial Blue, Pepsi, AAWTH, Foodblog, Soft 96.3 Abuja, Maggi, Tiger, CAPA, Craft Urban, African Tourism Board, Culinary Arts Academy Switzerland, Uber, The Beat 99.9FM, TVC, Legit, African Food Changemakers, MTN, Hayche, Onga, Rhythm, Swan, Kiara Rice Mills, Adron Homes" width={1400} height={812} className="w-full" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white-pattern">
        <div className="container">
          <h2 className="text-center text-[length:var(--text-h1)]">FAQs</h2>
          <div className="mx-auto mt-10 max-w-4xl space-y-3">
            {FAQS.map(([q, a], i) => (
              <details key={q} className="faq-item" open={i === 0}>
                <summary>{q}</summary>
                <div className="faq-body" dangerouslySetInnerHTML={{ __html: a }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-maroon">
        <div className="container">
          <div className="panel text-center">
            <h2 className="text-[length:var(--text-h1-sm)]">Signup to our Newsletter<br /><span className="emph">for the Latest News & Updates</span></h2>
            <div className="mt-8"><Btn href="/newsletter" variant="red">SUBSCRIBE <Arrow /></Btn></div>
          </div>
        </div>
      </section>
    </>
  );
}
