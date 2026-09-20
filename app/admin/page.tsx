import type { Metadata } from "next";
import AdminPanel from "@/components/AdminPanel";
export const metadata: Metadata = { title: "Registrations admin", robots: { index: false, follow: false } };
export default function Admin() {
  return <section className="section bg-black-pattern pt-28 ui"><div className="container"><AdminPanel /></div></section>;
}
