import type { Metadata } from "next";
import Link from "next/link";
import { Banner } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Newsletter", description: "Sign up to the African Food & Drinks Festival newsletter." };
export default function Newsletter() {
  return (
    <>
      <Banner title="Sign Up to Our Newsletter" image="/img/IMG_0444-scaled.jpeg" />
      <section className="section bg-maroon">
        <div className="container"><div className="panel panel--white mx-auto max-w-2xl">
          <h2 className="text-[length:var(--text-h1-sm)]">Sign Up</h2>
          <p className="ui mt-3 text-[15px] text-[color:var(--afdf-grey-700)]">Sign up for our newsletter to get first access to our line-up announcements, the latest news, and the jump on exclusive ticket drops.</p>
          <Form name="Newsletter signup" className="mt-6 grid gap-4 sm:grid-cols-2" submit="Subscribe" thanks="Thanks! Keep an eye on your inbox for updates.">
            <label className="label">First name *<input className="input" name="first_name" required /></label>
            <label className="label">Last name *<input className="input" name="last_name" required /></label>
            <label className="label sm:col-span-2">Email address *<input className="input" name="email" type="email" required /></label>
          </Form>
          <p className="ui mt-6 text-[12px] leading-[1.6] text-[color:var(--afdf-grey-700)]">Sign up for our newsletter to hear about the African Food & Drinks Festival and similar events, products, and services. African Food Network is the controller of your data. Click Unsubscribe in any email to withdraw your consent or change your preferences as described in our <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.</p>
        </div></div>
      </section>
    </>
  );
}
