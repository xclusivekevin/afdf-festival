import Link from "next/link";
import Image from "next/image";

const SOCIAL = [["Facebook", "https://www.facebook.com/afrifoodfestival", "M14 8h2V5h-2c-2.2 0-3.5 1.3-3.5 3.5V10H8v3h2.5v7h3v-7H16l.5-3h-3V8.8c0-.5.2-.8.5-.8z"], ["Instagram", "https://www.instagram.com/afrifoodfestival/", "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5-1a1 1 0 100 2 1 1 0 000-2z"], ["TikTok", "https://www.tiktok.com/@afrifoodfestival", "M14 3h3a4 4 0 004 4v3a7 7 0 01-4-1.3V15a5.5 5.5 0 11-5.5-5.5v3a2.5 2.5 0 102.5 2.5V3z"], ["X", "https://x.com/afrifoodfest", "M4 4h4l4.5 6L17 4h3l-6.2 8L21 20h-4l-5-6.5L6.5 20H3.5l6.7-8.5L4 4z"], ["YouTube", "https://www.youtube.com/channel/UCCeJ16RWGrHuL8drsXiCBig", "M22 8.5a3 3 0 00-2-2C18 6 12 6 12 6s-6 0-8 .5a3 3 0 00-2 2A31 31 0 002 12a31 31 0 00.3 3.5 3 3 0 002 2c2 .5 7.7.5 7.7.5s6 0 8-.5a3 3 0 002-2A31 31 0 0022 12a31 31 0 000-3.5zM10 15V9l5 3-5 3z"]];

export default function Footer() {
  return (
    <footer className="relative z-[2]">
      <div className="bg-[color:var(--afdf-olive-800)] py-4">
        <div className="container flex items-center justify-center gap-6">
          <p className="font-[family-name:var(--font-display)] text-[22px] uppercase text-white">Follow Us On</p>
          <ul className="flex items-center gap-4">{SOCIAL.map(([n, h, d]) => <li key={n}><a href={h} target="_blank" rel="noreferrer" aria-label={n} className="text-white hover:text-[color:var(--afdf-orange-500)]"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg></a></li>)}</ul>
        </div>
      </div>
      <div className="bg-black py-10 text-center">
        <Image src="/img/AFN-Logo1.png" alt="African Food & Drinks Festival" width={96} height={96} className="mx-auto" />
        <p className="ui mt-5 text-[14px] font-semibold text-white">Copyright © 2025 African Food & Drinks Festival, African Food Network.</p>
        <p className="ui mt-2 text-[12px] text-white/80"><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> / <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link> / <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link></p>
      </div>
    </footer>
  );
}
