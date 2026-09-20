import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db, ADMIN, type Registration } from "@/lib/supabase";

async function authed() { const c = await cookies(); return c.get("afdf_admin")?.value === ADMIN(); }

export async function GET(req: Request) {
  if (!(await authed())) return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  const url = new URL(req.url);
  if (url.searchParams.get("format") === "csv") {
    const { data } = await db().rpc("festival_admin_list", { p_secret: ADMIN() });
    const rows = (data as Registration[]) || [];
    const head = ["code", "name", "email", "phone", "tickets", "city", "status", "checked_in_count", "checked_in_at", "email_sent_at", "created_at"];
    const csv = [head.join(","), ...rows.map((r) => head.map((k) => `"${String((r as unknown as Record<string, unknown>)[k] ?? "").replace(/"/g, '""')}"`).join(","))].join("\n");
    return new NextResponse(csv, { headers: { "Content-Type": "text/csv", "Content-Disposition": `attachment; filename="festival-registrations-${new Date().toISOString().slice(0, 10)}.csv"` } });
  }
  const [{ data: list }, { data: settings }] = await Promise.all([db().rpc("festival_admin_list", { p_secret: ADMIN() }), db().rpc("festival_admin_settings", { p_secret: ADMIN() })]);
  return NextResponse.json({ list, settings });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (body.action === "login") {
    if (body.secret !== ADMIN()) return NextResponse.json({ ok: false }, { status: 401 });
    const res = NextResponse.json({ ok: true });
    res.cookies.set("afdf_admin", ADMIN(), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 12 });
    return res;
  }
  if (!(await authed())) return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  if (body.action === "logout") { const res = NextResponse.json({ ok: true }); res.cookies.delete("afdf_admin"); return res; }
  if (body.action === "checkin") { const { data, error } = await db().rpc("festival_admin_checkin", { p_secret: ADMIN(), p_code: String(body.code || ""), p_count: body.count ? Number(body.count) : null }); return NextResponse.json(error ? { ok: false, error: error.message } : data); }
  if (body.action === "lookup") { const { data } = await db().rpc("festival_admin_lookup", { p_secret: ADMIN(), p_code: String(body.q || "") }); return NextResponse.json({ ok: true, results: data }); }
  if (body.action === "settings") { const { error } = await db().rpc("festival_admin_update_settings", { p_secret: ADMIN(), p_capacity_lagos: Number(body.capacity_lagos), p_capacity_abuja: Number(body.capacity_abuja), p_max: Number(body.max_tickets_per_order), p_closes_at: body.registration_closes_at }); return NextResponse.json({ ok: !error, error: error?.message }); }
  return NextResponse.json({ ok: false }, { status: 400 });
}
