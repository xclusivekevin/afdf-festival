import { NextResponse } from "next/server";
import { resend, FROM, INBOX } from "@/lib/resend";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

/** Generic form relay: emails the submission to the festival inbox. Honeypot field `website` must be empty. */
export async function POST(req: Request) {
  const data = await req.formData();
  if (data.get("website")) return NextResponse.json({ ok: true });
  const form = String(data.get("_form") || "Website form");
  const email = String(data.get("email") || "");
  const rows = [...data.entries()].filter(([k]) => !k.startsWith("_") && k !== "website").map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666">${esc(k)}</td><td style="padding:6px 12px">${esc(String(v))}</td></tr>`).join("");
  try {
    await resend().emails.send({ from: FROM, to: INBOX, replyTo: /@/.test(email) ? email : undefined, subject: `[AFDF site] ${form}`, html: `<h2 style="font-family:sans-serif">${esc(form)}</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>` });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("form relay failed", e);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
