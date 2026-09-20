import type { Metadata } from "next";
import { getStatus } from "@/lib/supabase";
import RegisterForm from "@/components/RegisterForm";
export const metadata: Metadata = { title: "Register", description: "Register for the African Food & Drinks Festival and get your ticket by email." };
export const dynamic = "force-dynamic";

export default async function Register() {
  const status = await getStatus().catch(() => null);
  return (
    <>
      <section className="relative flex min-h-[380px] items-center pt-16 text-center" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url(/img/Hero-2-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-14"><h1 className="text-[length:var(--text-h1)]">Register for <span className="emph">AFDF</span></h1><p className="ui mx-auto mt-4 max-w-xl text-[16px] font-semibold text-white">Free registration. Your ticket, with a QR code, lands in your inbox straight away.</p></div>
      </section>
      <section className="section bg-maroon">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel panel--white"><RegisterForm status={status} /></div>
          <div className="space-y-6">
            <div className="panel"><h2 className="text-[26px]">The editions</h2><ul className="mt-4 space-y-4 text-[17px]"><li><strong className="text-[color:var(--afdf-orange-500)]">Lagos</strong><br />{status?.event_dates?.Lagos || "Date to be announced"}<br />Muri Okunola Park, Victoria Island</li><li><strong className="text-[color:var(--afdf-orange-500)]">Abuja</strong><br />{status?.event_dates?.Abuja || "Date to be announced"}<br />Harrow Park, Abuja</li></ul></div>
            <div className="panel"><h2 className="text-[26px]">Good to know</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-[16px]"><li>One registration covers your whole group; one QR scan at the gate.</li><li>Kids under 13 enter free and do not need a ticket.</li><li>Registration closes {status ? new Date(status.closes_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "before the event"}.</li><li>Lost your email? Register again with the same address and we will tell you it is already on file; email festival@afrifoodnetwork.com to have it resent.</li></ul></div>
          </div>
        </div>
      </section>
    </>
  );
}
