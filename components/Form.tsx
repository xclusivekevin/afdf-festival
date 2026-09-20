"use client";
import { useState, type ReactNode } from "react";

/** Posts to /api/forms; children are the fields. */
export default function Form({ name, children, submit = "Submit", thanks = "Thanks! We have received your message.", className = "" }: { name: string; children: ReactNode; submit?: string; thanks?: string; className?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const fd = new FormData(e.currentTarget); fd.set("_form", name);
    const r = await fetch("/api/forms", { method: "POST", body: fd }).catch(() => null);
    setState(r && r.ok ? "done" : "error");
  }
  if (state === "done") return <p className="ui rounded bg-[color:var(--afdf-cream-50)] p-6 text-[16px] font-semibold text-[color:var(--afdf-ink-900)]">{thanks}</p>;
  return (
    <form onSubmit={onSubmit} className={`ui ${className}`}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {children}
      {state === "error" && <p className="mt-3 text-[14px] text-red-600">Something went wrong. Please email festival@afrifoodnetwork.com.</p>}
      <button type="submit" disabled={state === "sending"} className="btn btn--red mt-5 disabled:opacity-60">{state === "sending" ? "Sending…" : submit} <span aria-hidden>→</span></button>
    </form>
  );
}
