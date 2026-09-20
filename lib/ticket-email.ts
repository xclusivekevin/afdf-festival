import QRCode from "qrcode";
import { resend, FROM, REPLY_TO } from "@/lib/resend";
import type { Registration } from "@/lib/supabase";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://festival.afrifoodnetwork.com";

export async function sendTicketEmail(r: Registration, eventDate: string) {
  const qrPng = await QRCode.toBuffer(`${SITE}/register/${r.code}`, { width: 360, margin: 1, color: { dark: "#300809", light: "#FFFFFF" } });
  const venue = r.city === "Lagos" ? "Muri Okunola Park, Victoria Island, Lagos" : "Harrow Park, Abuja";
  const html = `<!doctype html><html><body style="margin:0;background:#300809;font-family:Poppins,Helvetica,Arial,sans-serif;color:#111">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#300809;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:3px solid #FA9800">
<tr><td style="background:#000;padding:28px;text-align:center"><img src="${SITE}/img/AFN-Logo1.png" width="88" height="88" alt="African Food & Drinks Festival" style="display:block;margin:0 auto"><p style="margin:16px 0 0;color:#FA9800;font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700">Your festival ticket</p><h1 style="margin:6px 0 0;color:#fff;font-size:26px;line-height:1.15;text-transform:uppercase">African Food &amp; Drinks Festival ${r.city}</h1></td></tr>
<tr><td style="padding:28px 28px 8px"><p style="margin:0;font-size:16px">Hi ${escapeHtml(r.name.split(" ")[0])},</p><p style="margin:12px 0 0;font-size:15px;line-height:1.6;color:#54595F">You are registered. Show this email (or the QR code below) at the gate. One scan covers your whole group.</p></td></tr>
<tr><td style="padding:16px 28px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F1;border-radius:12px"><tr><td style="padding:20px;font-size:14px;line-height:1.7;color:#111">
<b>Ticket code:</b> <span style="font-family:Menlo,Consolas,monospace;font-size:20px;color:#BC1320;font-weight:700">${r.code}</span><br>
<b>Name:</b> ${escapeHtml(r.name)}<br><b>Tickets:</b> ${r.tickets} ${r.tickets === 1 ? "person" : "people"}<br><b>City:</b> ${r.city}<br><b>Date:</b> ${escapeHtml(eventDate)}<br><b>Venue:</b> ${venue}</td></tr></table></td></tr>
<tr><td align="center" style="padding:8px 28px 24px"><img src="cid:qr" width="200" height="200" alt="QR code for ticket ${r.code}" style="display:block;border:1px solid #eee;border-radius:8px"><p style="margin:10px 0 0;font-size:12px;color:#7A7A7A">Scan at the entrance · ${SITE.replace(/^https?:\/\//, "")}/register/${r.code}</p></td></tr>
<tr><td style="padding:0 28px 28px;font-size:13px;line-height:1.6;color:#54595F">Gates open in the afternoon. Kids under 13 enter free. No outside food or drinks, glass, or weapons. Questions: <a href="mailto:festival@afrifoodnetwork.com" style="color:#BC1320">festival@afrifoodnetwork.com</a>.</td></tr>
<tr><td style="background:#2D360D;padding:16px;text-align:center;color:#fff;font-size:12px">© African Food &amp; Drinks Festival · African Food Network</td></tr>
</table></td></tr></table></body></html>`;
  return resend().emails.send({
    from: FROM, to: r.email, replyTo: REPLY_TO,
    subject: `Your AFDF ${r.city} ticket · ${r.code}`,
    html,
    text: `Hi ${r.name},\n\nYou are registered for the African Food & Drinks Festival ${r.city}.\nTicket code: ${r.code}\nTickets: ${r.tickets}\nDate: ${eventDate}\nVenue: ${venue}\n\nShow this code at the gate: ${SITE}/register/${r.code}\n\nAfrican Food Network`,
    attachments: [{ filename: "ticket-qr.png", content: qrPng, contentId: "qr" }],
  });
}
function escapeHtml(s: string) { return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)); }
