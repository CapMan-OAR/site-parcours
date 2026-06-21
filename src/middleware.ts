import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const BETA_EXCLUDED = ["/beta-login", "/api/beta-login"];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (process.env.SITE_PUBLIC !== "true") {
    const isExcluded = BETA_EXCLUDED.some((p) => pathname.startsWith(p));

    if (!isExcluded) {
      const hasAccess = request.cookies.get("beta-auth")?.value === "granted";

      if (!hasAccess) {
        return NextResponse.redirect(new URL("/beta-login", request.url));
      }
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/beta-login"],
};
