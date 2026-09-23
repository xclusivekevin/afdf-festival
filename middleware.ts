import { NextResponse, type NextRequest } from "next/server";
const CANONICAL = "festival.afrifoodnetwork.com";
/**
 * 1. www.<sub>.afrifoodnetwork.com redirects to the bare host.
 * 2. Any host that is not canonical (the *.vercel.app review copies) is marked noindex,
 *    so Google never sees a duplicate of the real site.
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host === "www." + CANONICAL) {
    const url = req.nextUrl.clone();
    url.host = CANONICAL;
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  const res = NextResponse.next();
  if (host !== CANONICAL) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}
export const config = { matcher: ["/((?!_next/|img/|fonts/|favicon.ico).*)"] };
