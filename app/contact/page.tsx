import type { Metadata } from "next";
import { Banner } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Contact", description: "Reach the African Food & Drinks Festival team." };
export default function Contact() {
  return (
    <>
      <Banner title="Contact Us" image="/img/IMG_0427-scaled.jpeg" sub="Reach out to us by filling the contact form below." />
      <section className="section bg-maroon">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="panel panel--white"><h2 className="text-[28px]">Send a Message</h2>
            <Form name="Contact form" className="mt-5 grid gap-4" submit="Send">
              <label className="label">Name *<input className="input" name="name" required /></label>
              <label className="label">Email *<input className="input" name="email" type="email" required /></label>
              <label className="label">Message *<textarea className="input min-h-[140px]" name="message" required /></label>
            </Form>
          </div>
          <div className="panel"><h2 className="text-[28px]">Contact Information</h2><p className="mt-4 text-[17px]"><strong>Address:</strong> African Food Network Owena House, 76 Ralph Shodeinde Street C.B.D, FCT Abuja, Nigeria</p><p className="mt-3 text-[17px]"><strong>Email:</strong> <a href="mailto:festival@afrifoodnetwork.com" className="underline">festival@afrifoodnetwork.com</a></p>
            <div className="mt-6 overflow-hidden rounded-lg"><iframe title="African Food Network on Google Maps" className="h-[280px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Owena+House,+76+Ralph+Shodeinde+Street,+Central+Business+District,+Abuja&output=embed" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
