import { NextResponse } from "next/server";
import { db, ADMIN, type Registration } from "@/lib/supabase";
import { sendTicketEmail } from "@/lib/ticket-email";

const MSG: Record<string, string> = {
  closed: "Registration has closed.", bad_city: "Please choose Lagos or Abuja.", bad_tickets: "Please choose between 1 and the maximum number of tickets.",
  bad_input: "Please check your name, email and phone number.", duplicate: "This email is already registered for that city. Check your inbox for your ticket.",
  full: "Sorry, that city is fully booked.",
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  const { name, email, phone, tickets, city } = body;
  const { data, error } = await db().rpc("festival_register", { p_name: String(name || ""), p_email: String(email || ""), p_phone: String(phone || ""), p_tickets: Number(tickets), p_city: String(city || "") });
  if (error) { console.error(error); return NextResponse.json({ ok: false, error: "Could not register. Please try again." }, { status: 500 }); }
  if (!data.ok) return NextResponse.json({ ok: false, error: MSG[data.error] || "Could not register." }, { status: 400 });
  const r = data.registration as Registration;
  // send the ticket; record the outcome, never fail the registration because of email
  let emailed = false;
  try {
    const { data: st } = await db().rpc("festival_status");
    const res = await sendTicketEmail(r, st?.event_dates?.[r.city] || "");
    if (res.error) throw new Error(res.error.message);
    emailed = true;
    await db().rpc("festival_admin_set_email", { p_secret: ADMIN(), p_id: r.id, p_sent: true, p_error: null });
  } catch (e) {
    console.error("ticket email failed", e);
    await db().rpc("festival_admin_set_email", { p_secret: ADMIN(), p_id: r.id, p_sent: false, p_error: String((e as Error).message).slice(0, 300) });
  }
  return NextResponse.json({ ok: true, code: r.code, emailed });
}
