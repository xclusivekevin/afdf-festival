import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Banner, Btn, Arrow } from "@/components/ui";
export const metadata: Metadata = { title: "Events" };
const EVENTS = [["01-Featured-Image.jpg", "Muri Okunola Park, VI, Lagos", "African Food & Drinks Festival, Lagos 2025", "October 26, 2025", "/lagos-festival-2025"], ["02-Featured-Image-Abuja-1.jpg", "Harrow Park, Abuja", "AFDF Abuja 2025", "November 16, 2025", "/abuja-festival-2025"]];
export default function Events() {
  return (
    <>
      <Banner title="Events" />
      <section className="section bg-maroon"><div className="container grid gap-8 md:grid-cols-2">{EVENTS.map(([img, venue, t, d, h]) => <div key={t} className="overflow-hidden rounded-2xl bg-white text-[color:var(--afdf-ink-900)]"><Link href={h}><Image src={`/img/${img}`} alt="" width={800} height={450} className="aspect-video w-full object-cover" /></Link><div className="p-6"><p className="ui text-[13px] text-[color:var(--afdf-grey-600)]">{venue}</p><h2 className="mt-1 text-[24px] text-black">{t}</h2><p className="ui mt-1 text-[14px]">{d}</p><div className="mt-4"><Btn href={h} variant="red">Attend <Arrow /></Btn></div></div></div>)}</div></section>
    </>
  );
}
