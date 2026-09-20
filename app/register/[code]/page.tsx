import type { Metadata } from "next";
import QRCode from "qrcode";
import { db, ADMIN, type Registration } from "@/lib/supabase";
export const metadata: Metadata = { title: "Your ticket", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function Ticket({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const { data } = await db().rpc("festival_admin_lookup", { p_secret: ADMIN(), p_code: code });
  const r = ((data as Registration[]) || []).find((x) => x.code.toUpperCase() === code.toUpperCase());
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://festival.afrifoodnetwork.com";
  const qr = r ? await QRCode.toDataURL(`${site}/register/${r.code}`, { width: 320, margin: 1, color: { dark: "#300809" } }) : null;
  return (
    <section className="section bg-maroon pt-28">
      <div className="container"><div className="panel panel--white mx-auto max-w-md text-center">
        {!r ? <><h1 className="text-[28px]">Ticket not found</h1><p className="ui mt-3 text-[15px] text-[color:var(--afdf-grey-700)]">Check the code in your email, or <a href="/register" className="underline">register</a>.</p></> : <>
          <p className="ui text-[12px] font-bold uppercase tracking-widest text-[color:var(--afdf-red-600)]">African Food & Drinks Festival {r.city}</p>
          <h1 className="mt-2 text-[28px]">{r.name}</h1>
          {qr && <img src={qr} alt={`QR code ${r.code}`} className="mx-auto mt-5 w-[220px] rounded-lg border" />}
          <p className="ui mt-3 font-mono text-[24px] font-bold text-[color:var(--afdf-red-600)]">{r.code}</p>
          <p className="ui mt-2 text-[15px] text-[color:var(--afdf-grey-700)]">{r.tickets} {r.tickets === 1 ? "ticket" : "tickets"} · {r.status === "checked_in" ? "Checked in" : r.status === "cancelled" ? "Cancelled" : "Confirmed"}</p>
          <p className="ui mt-4 text-[13px] text-[color:var(--afdf-grey-600)]">Show this screen at the gate. Screenshot it in case the network is slow.</p>
        </>}
      </div></div>
    </section>
  );
}
