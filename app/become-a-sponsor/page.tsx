import type { Metadata } from "next";
import { Banner, Btn, Arrow } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Become a Sponsor", description: "Partner with the African Food & Drinks Festival." };
export default function Sponsor() {
  return (
    <>
      <Banner title="Partner With Afrifood Network Festival" image="/img/IMG_0431-scaled.jpeg" sub="Join us in celebrating Africa’s rich culinary culture and connect with food lovers, creators, and innovators. As a sponsor, your brand will be featured across our festival experience, digital channels, and on-site activations."><Btn href="#sponsor" variant="red">Become A Sponsor <Arrow /></Btn></Banner>
      <section className="section bg-black-pattern">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="panel"><h2 className="text-[28px]">Why Sponsor</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-[17px]"><li>Reach a highly engaged audience of foodies and culture shapers</li><li>Activate your brand with tastings, demos, and experiential moments</li><li>Build partnerships with creators, vendors, and media</li></ul><p className="mt-4 text-[15px] text-white/80">For food & beverage brands, spice companies, fintech, real estate, lifestyle, and culture partners.</p></div>
          <div className="panel"><h2 className="text-[28px]">2025 Editions</h2><ul className="mt-4 space-y-3 text-[17px]"><li><strong className="text-[color:var(--afdf-orange-500)]">26th October, 2025</strong><br />Muri Okunola Park, VI, Lagos, Nigeria.</li><li><strong className="text-[color:var(--afdf-orange-500)]">16th November, 2025</strong><br />Harrow Park Abuja, FCT, Nigeria.</li></ul></div>
        </div>
      </section>
      <section id="sponsor" className="section bg-maroon">
        <div className="container"><div className="panel panel--white mx-auto max-w-2xl">
          <h2 className="text-[length:var(--text-h1-sm)]">Become A Sponsor</h2><p className="ui mt-2 font-semibold">Let’s Make It Happen</p>
          <p className="ui mt-3 text-[15px] text-[color:var(--afdf-grey-700)]">Be part of the festival that’s redefining how Africa celebrates food and culture. Fill out the form today, and our partnerships team will connect with you to bring your brand to life at the festival.</p>
          <Form name="Sponsorship enquiry" className="mt-6 grid gap-4 sm:grid-cols-2" thanks="Thank you. Our partnerships team will be in touch.">
            <label className="label sm:col-span-2">Full Name *<input className="input" name="name" required /></label>
            <label className="label">Email *<input className="input" name="email" type="email" required /></label>
            <label className="label">Phone *<input className="input" name="phone" type="tel" required /></label>
            <label className="label sm:col-span-2">Company / Brand *<input className="input" name="company" required /></label>
            <label className="label sm:col-span-2">Which edition? *<select className="input" name="edition" required defaultValue=""><option value="" disabled>Select</option><option>Lagos</option><option>Abuja</option><option>Both</option></select></label>
            <label className="label sm:col-span-2">Message<textarea className="input min-h-[120px]" name="message" /></label>
          </Form>
        </div></div>
      </section>
    </>
  );
}
