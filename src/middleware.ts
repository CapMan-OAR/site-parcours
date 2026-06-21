import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const BETA_EXCLUDED_PREFIXES = ["/beta-login", "/api/beta-login"];

function isBetaExcluded(pathname: string) {
  return BETA_EXCLUDED_PREFIXES.some((p) => pathname.startsWith(p));
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isBetaExcluded(pathname)) {
    return NextResponse.next();
  }

  if (process.env.SITE_PUBLIC !== "true") {
    const hasAccess = request.cookies.get("beta-auth")?.value === "granted";

    if (!hasAccess) {
      return NextResponse.redirect(new URL("/beta-login", request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/beta-login"],
};
