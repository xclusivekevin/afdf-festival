import type { Metadata } from "next";
import { Banner } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Vendor Registration", description: "Register as a vendor at the African Food & Drinks Festival." };
export default function Vendor() {
  return (
    <>
      <Banner title="Vendor Registration" image="/img/IMG_0424-scaled.jpeg" sub="You are about to unlock new potential for transforming your business by showcasing on the biggest food festival in Africa. Registrations Closes September 3rd" />
      <section className="section bg-maroon">
        <div className="container"><div className="panel panel--white mx-auto max-w-2xl">
          <h2 className="text-[length:var(--text-h1-sm)]">Register Your Brand</h2>
          <Form name="Vendor registration" className="mt-6 grid gap-4 sm:grid-cols-2" submit="View Pricing" thanks="Thank you. We will send vendor pricing and next steps to your email.">
            <label className="label">First name *<input className="input" name="first_name" required /></label>
            <label className="label">Last name *<input className="input" name="last_name" required /></label>
            <label className="label sm:col-span-2">Vendor Category *<select className="input" name="category" required defaultValue=""><option value="" disabled>category of the product you sell</option><option>Food Vendor/Restaurant</option><option>Non-Food/Drinks Retail Product [₦20,000]</option><option>Company Product Showcase [₦100,000]</option></select></label>
            <label className="label sm:col-span-2">Vendor Sub-Category *<select className="input" name="sub_category" required defaultValue=""><option value="" disabled>Select</option><option>Local African Food [₦40,000]</option><option>Snacks & Pastries [₦30,000]</option><option>Cocktails & Drinks [₦50,000]</option></select></label>
            <label className="label sm:col-span-2">Brand Name *<input className="input" name="brand" required /></label>
            <label className="label">Email *<input className="input" name="email" type="email" required /></label>
            <label className="label">Phone Number *<input className="input" name="phone" type="tel" required /></label>
            <label className="label sm:col-span-2">City *<select className="input" name="city" required defaultValue=""><option value="" disabled>Select</option><option>Lagos</option><option>Abuja</option></select></label>
          </Form>
          <p className="ui mt-6 text-[13px] text-[color:var(--afdf-grey-700)]"><strong>African Food Network HQ</strong><br />Owena House, 76 Ralph Shodeinde Street, C.B.D, FCT Abuja, Nigeria</p>
        </div></div>
      </section>
    </>
  );
}
