import { NextResponse, type NextRequest } from "next/server";
const CANONICAL = "festival.afrifoodnetwork.com";
/** Review copies on *.vercel.app must not be indexed before the subdomain is pointed here. */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const host = req.headers.get("host") || "";
  if (host !== CANONICAL) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}
export const config = { matcher: ["/((?!_next/|img/|fonts/|favicon.ico).*)"] };
