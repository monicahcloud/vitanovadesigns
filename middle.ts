import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Allow the login page and login/logout API routes
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/api/admin-login") ||
    pathname.startsWith("/api/admin-logout")
  ) {
    return NextResponse.next();
  }

  const isAuthed = req.cookies.get("vn_admin")?.value === "ok";
  if (isAuthed) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/admin/login";
  if (pathname) url.searchParams.set("next", pathname + (search || ""));
  return NextResponse.redirect(url);
}
