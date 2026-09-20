"use client";
import { useCallback, useEffect, useState } from "react";
import type { Registration } from "@/lib/supabase";

type Settings = { capacity_lagos: number; capacity_abuja: number; max_tickets_per_order: number; registration_closes_at: string };
const post = (body: unknown) => fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then((r) => r.json());

export default function AdminPanel() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [secret, setSecret] = useState("");
  const [list, setList] = useState<Registration[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [q, setQ] = useState("");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [city, setCity] = useState<"all" | "Lagos" | "Abuja">("all");

  const load = useCallback(async () => {
    const r = await fetch("/api/admin");
    if (r.status === 401) { setAuthed(false); return; }
    const j = await r.json(); setList(j.list || []); setSettings(j.settings); setAuthed(true);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function login(e: React.FormEvent) { e.preventDefault(); const j = await post({ action: "login", secret }); if (j.ok) load(); else setMsg({ ok: false, text: "Wrong password." }); }
  async function checkin(e: React.FormEvent) {
    e.preventDefault(); const j = await post({ action: "checkin", code });
    if (j.ok) { const r = j.registration; setMsg({ ok: true, text: `Checked in: ${r.name} · ${r.tickets} ${r.tickets === 1 ? "person" : "people"} · ${r.city}` }); setCode(""); load(); }
    else setMsg({ ok: false, text: j.error === "not_found" ? "Code not found." : j.error === "already_checked_in" ? `Already checked in (${j.registration?.checked_in_count}/${j.registration?.tickets}).` : j.error === "cancelled" ? "This registration was cancelled." : j.error || "Failed." });
  }
  async function saveSettings(e: React.FormEvent) { e.preventDefault(); if (!settings) return; const j = await post({ action: "settings", ...settings }); setMsg({ ok: j.ok, text: j.ok ? "Settings saved." : j.error }); load(); }

  if (authed === null) return <p className="text-white">Loading…</p>;
  if (!authed) return (
    <form onSubmit={login} className="panel panel--white mx-auto max-w-sm"><h1 className="text-[26px]">Registrations admin</h1><label className="label mt-5">Admin password<input className="input" type="password" value={secret} onChange={(e) => setSecret(e.target.value)} autoFocus /></label>{msg && <p className="mt-2 text-[13px] text-red-600">{msg.text}</p>}<button className="btn btn--red mt-4">Sign in <span aria-hidden>→</span></button></form>
  );

  const rows = list.filter((r) => (city === "all" || r.city === city) && (!q || `${r.name} ${r.email} ${r.phone} ${r.code}`.toLowerCase().includes(q.toLowerCase())));
  const sum = (c: string) => list.filter((r) => r.city === c && r.status !== "cancelled").reduce((a, r) => a + r.tickets, 0);
  const inCount = (c: string) => list.filter((r) => r.city === c).reduce((a, r) => a + r.checked_in_count, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4"><h1 className="text-[32px] text-white">Festival registrations</h1><div className="flex gap-3"><a href="/api/admin?format=csv" className="btn btn--orange">Export CSV</a><button onClick={async () => { await post({ action: "logout" }); setAuthed(false); }} className="btn btn--white">Sign out</button></div></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[["Lagos tickets", `${sum("Lagos").toLocaleString()} / ${settings?.capacity_lagos.toLocaleString()}`], ["Abuja tickets", `${sum("Abuja").toLocaleString()} / ${settings?.capacity_abuja.toLocaleString()}`], ["Checked in", `${(inCount("Lagos") + inCount("Abuja")).toLocaleString()}`], ["Registrations", list.length.toLocaleString()]].map(([k, v]) => <div key={k} className="rounded-xl bg-white p-5"><p className="text-[12px] uppercase tracking-wide text-[color:var(--afdf-grey-600)]">{k}</p><p className="mt-1 text-[28px] font-bold text-black">{v}</p></div>)}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={checkin} className="panel panel--white"><h2 className="text-[22px]">Door check-in</h2><p className="mt-1 text-[13px] text-[color:var(--afdf-grey-700)]">Type or scan the ticket code. A scan of the QR opens the ticket page; paste its code here.</p><div className="mt-4 flex gap-2"><input className="input font-mono uppercase" placeholder="AFDF-XXXX-XXXX" value={code} onChange={(e) => setCode(e.target.value)} autoFocus /><button className="btn btn--red shrink-0">Check in</button></div>{msg && <p className={`mt-3 rounded p-3 text-[14px] ${msg.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"}`} role="status">{msg.text}</p>}</form>
        {settings && <form onSubmit={saveSettings} className="panel panel--white"><h2 className="text-[22px]">Capacity & close date</h2><div className="mt-4 grid gap-3 sm:grid-cols-2"><label className="label">Lagos capacity<input className="input" type="number" min={0} value={settings.capacity_lagos} onChange={(e) => setSettings({ ...settings, capacity_lagos: +e.target.value })} /></label><label className="label">Abuja capacity<input className="input" type="number" min={0} value={settings.capacity_abuja} onChange={(e) => setSettings({ ...settings, capacity_abuja: +e.target.value })} /></label><label className="label">Max tickets per order<input className="input" type="number" min={1} max={10} value={settings.max_tickets_per_order} onChange={(e) => setSettings({ ...settings, max_tickets_per_order: +e.target.value })} /></label><label className="label">Registration closes<input className="input" type="datetime-local" value={settings.registration_closes_at.slice(0, 16)} onChange={(e) => setSettings({ ...settings, registration_closes_at: new Date(e.target.value).toISOString() })} /></label></div><button className="btn btn--red mt-4">Save</button></form>}
      </div>
      <div className="panel panel--white !p-4 md:!p-6">
        <div className="flex flex-wrap items-center gap-3"><input className="input max-w-xs" placeholder="Search name, email, phone, code" value={q} onChange={(e) => setQ(e.target.value)} /><select className="input max-w-[140px]" value={city} onChange={(e) => setCity(e.target.value as typeof city)}><option value="all">All cities</option><option>Lagos</option><option>Abuja</option></select><span className="text-[13px] text-[color:var(--afdf-grey-700)]">{rows.length} shown</span></div>
        <div className="mt-4 overflow-x-auto"><table className="w-full text-left text-[13px]"><thead><tr className="border-b text-[11px] uppercase tracking-wide text-[color:var(--afdf-grey-600)]"><th className="py-2 pr-3">Code</th><th className="py-2 pr-3">Name</th><th className="py-2 pr-3">Email</th><th className="py-2 pr-3">Phone</th><th className="py-2 pr-3">City</th><th className="py-2 pr-3">Tickets</th><th className="py-2 pr-3">Status</th><th className="py-2 pr-3">Email</th><th className="py-2 pr-3">Registered</th></tr></thead><tbody>{rows.map((r) => <tr key={r.id} className="border-b last:border-0"><td className="py-2 pr-3 font-mono">{r.code}</td><td className="py-2 pr-3">{r.name}</td><td className="py-2 pr-3">{r.email}</td><td className="py-2 pr-3">{r.phone}</td><td className="py-2 pr-3">{r.city}</td><td className="py-2 pr-3">{r.checked_in_count}/{r.tickets}</td><td className="py-2 pr-3"><span className={`rounded px-2 py-0.5 text-[11px] font-semibold ${r.status === "checked_in" ? "bg-green-100 text-green-800" : r.status === "cancelled" ? "bg-gray-200" : "bg-amber-100 text-amber-800"}`}>{r.status.replace("_", " ")}</span></td><td className="py-2 pr-3">{r.email_sent_at ? "sent" : r.email_error ? <span title={r.email_error} className="text-red-600">failed</span> : "—"}</td><td className="py-2 pr-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString("en-GB")}</td></tr>)}{rows.length === 0 && <tr><td colSpan={9} className="py-6 text-center text-[color:var(--afdf-grey-600)]">No registrations yet.</td></tr>}</tbody></table></div>
      </div>
    </div>
  );
}
