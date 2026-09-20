"use client";
import { useState } from "react";
import type { Status } from "@/lib/supabase";

export default function RegisterForm({ status }: { status: Status | null }) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ code: string; emailed: boolean; email: string } | null>(null);
  const max = status?.max_tickets || 5;
  const soldOut = (c: "Lagos" | "Abuja") => status ? status.remaining[c] <= 0 : false;

  if (status && !status.open) return <div className="ui"><h2 className="text-[26px]">Registration is closed</h2><p className="mt-3 text-[15px] text-[color:var(--afdf-grey-700)]">Registration closed on {new Date(status.closes_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}. Tickets may be available at the gate; see the FAQs on the home page.</p></div>;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setState("sending");
    const fd = new FormData(e.currentTarget); const body = Object.fromEntries(fd.entries());
    const r = await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(() => null);
    const j = r ? await r.json().catch(() => null) : null;
    if (j?.ok) { setResult({ code: j.code, emailed: j.emailed, email: String(body.email) }); setState("done"); }
    else { setError(j?.error || "Could not register. Please try again."); setState("idle"); }
  }

  if (state === "done" && result) return (
    <div className="ui text-center">
      <p className="text-[13px] font-bold uppercase tracking-wide text-[color:var(--afdf-red-600)]">You are in</p>
      <h2 className="mt-2 text-[30px]">See you at the festival</h2>
      <p className="mt-4 text-[15px] text-[color:var(--afdf-grey-700)]">Your ticket code is</p>
      <p className="mt-1 font-mono text-[28px] font-bold text-[color:var(--afdf-red-600)]">{result.code}</p>
      <p className="mt-4 text-[15px] text-[color:var(--afdf-grey-700)]">{result.emailed ? <>We have emailed your ticket with a QR code to <strong>{result.email}</strong>. Check spam if it is not there in a minute.</> : <>Your registration is saved, but the ticket email did not go out. Keep this code and show it at the gate, or email festival@afrifoodnetwork.com.</>}</p>
      <a href={`/register/${result.code}`} className="btn btn--red mt-6">View my ticket <span aria-hidden>→</span></a>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="ui">
      <h2 className="text-[26px]">Your details</h2>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="label sm:col-span-2">Full name *<input className="input" name="name" required minLength={2} autoComplete="name" /></label>
        <label className="label">Email *<input className="input" name="email" type="email" required autoComplete="email" /></label>
        <label className="label">Phone *<input className="input" name="phone" type="tel" required minLength={7} autoComplete="tel" placeholder="+234…" /></label>
        <label className="label">Number of tickets *<select className="input" name="tickets" defaultValue="1">{Array.from({ length: max }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label>
        <fieldset className="sm:col-span-1"><legend className="label">City *</legend><div className="flex gap-3">{(["Lagos", "Abuja"] as const).map((c) => <label key={c} className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border px-3 py-3 text-[15px] font-semibold has-[:checked]:border-[color:var(--afdf-red-600)] has-[:checked]:bg-[color:var(--afdf-cream-50)] ${soldOut(c) ? "opacity-50" : ""}`}><input type="radio" name="city" value={c} required disabled={soldOut(c)} defaultChecked={c === "Lagos" && !soldOut("Lagos")} />{c}{soldOut(c) && <span className="text-[11px] uppercase">Full</span>}</label>)}</div></fieldset>
      </div>
      {status && <p className="mt-3 text-[12px] text-[color:var(--afdf-grey-600)]">Places left: Lagos {status.remaining.Lagos.toLocaleString()} · Abuja {status.remaining.Abuja.toLocaleString()}</p>}
      {error && <p className="mt-3 rounded bg-red-50 p-3 text-[14px] text-red-700" role="alert">{error}</p>}
      <button type="submit" disabled={state === "sending"} className="btn btn--red mt-5 disabled:opacity-60">{state === "sending" ? "Registering…" : "Get my ticket"} <span aria-hidden>→</span></button>
      <p className="mt-4 text-[12px] leading-[1.6] text-[color:var(--afdf-grey-600)]">By registering you agree to our <a href="/terms-of-use" className="underline">Terms of Use</a> and <a href="/privacy-policy" className="underline">Privacy Policy</a>. We only use your details for this festival.</p>
    </form>
  );
}
