import Image from "next/image";
import type { Metadata } from "next";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Join The Waitlist" };
export default function Waitlist() {
  return (
    <section className="section bg-maroon pt-32">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div><Image src="/img/AFN-Logo1.png" alt="" width={120} height={120} /><h1 className="mt-6 text-[length:var(--text-h1-sm)]">Join The Waitlist</h1><p className="mt-4 text-[18px]">Congratulations! You&apos;re on the waitlist for the African Food and Drinks Festival 2025! As a thank you, you&apos;ve earned a free ticket once we announce the event details. Stay tuned for a flavorful experience and updates on your ticket!</p><Image src="/img/Join-thousands.png" alt="Join thousands of food lovers" width={176} height={51} unoptimized sizes="176px" className="mt-6 w-full max-w-[176px] rounded-lg" /></div>
        <div className="panel panel--white"><h2 className="text-[26px]">Reserve your spot</h2><Form name="Waitlist" className="mt-5 grid gap-4" submit="Join the waitlist" thanks="You are on the list. Watch your inbox."><label className="label">Name *<input className="input" name="name" required /></label><label className="label">Email *<input className="input" name="email" type="email" required /></label><label className="label">Phone<input className="input" name="phone" type="tel" /></label></Form></div>
      </div>
    </section>
  );
}
