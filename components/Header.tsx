"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const MENU = [["Home", "/"], ["About", "/about"], ["Lagos 2025", "/lagos-festival-2025"], ["Abuja 2025", "/abuja-festival-2025"], ["Food Tour", "/food-tour"], ["Become a Sponsor", "/become-a-sponsor"], ["Vendors", "/vendor-registration"], ["Contact", "/contact"], ["Sign Up", "/newsletter"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-[50] transition-colors ${solid ? "bg-black/90 backdrop-blur" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="African Food & Drinks Festival home" className="flex items-center gap-2">
          <Image src="/img/AFN-Logo1.png" alt="African Food & Drinks Festival" width={44} height={44} priority />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="ui hidden text-[13px] font-bold uppercase text-white sm:inline">Contact Us</Link>
          <Link href="/register" className="btn btn--white">Register</Link>
          <button type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="p-2 text-white">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[100] overflow-y-auto bg-black text-white">
          <div className="container flex h-16 items-center justify-between">
            <Image src="/img/AFN-Logo1.png" alt="" width={44} height={44} />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
          </div>
          <ul className="container space-y-1 pb-10 pt-6 font-[family-name:var(--font-display)] text-[26px] uppercase">
            {MENU.map(([l, h]) => <li key={h}><Link href={h} onClick={() => setOpen(false)} className="block py-2 hover:text-[color:var(--afdf-orange-500)]">{l}</Link></li>)}
            <li className="pt-4"><Link href="/register" onClick={() => setOpen(false)} className="btn btn--red">Register for AFDF <span aria-hidden>→</span></Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
