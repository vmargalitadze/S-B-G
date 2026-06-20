import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import {
  ADMIN_COOKIE_NAME,
  getAdminSessionToken,
  isAdminAuthenticated,
  isValidAdminCredentials,
} from "@/lib/admin-auth";

const intlMiddleware = createMiddleware(routing);

function getLocaleFromPath(pathname: string): "ge" | "en" {
  return pathname.startsWith("/en") ? "en" : "ge";
}

function hasValidBasicAuth(request: NextRequest): boolean {
  const basicAuth = request.headers.get("authorization");

  if (!basicAuth?.startsWith("Basic ")) {
    return false;
  }

  const decoded = atob(basicAuth.split(" ")[1] || "");
  const separatorIndex = decoded.indexOf(":");

  if (separatorIndex === -1) {
    return false;
  }

  const user = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);

  return isValidAdminCredentials(user, password);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminPath = /^\/(ge|en)\/admin(\/.*)?$|^\/admin(\/.*)?$/.test(pathname);
  const isLoginPath = /^\/(ge|en)\/admin\/login$|^\/admin\/login$/.test(pathname);

  if (pathname === "/" ) {
    const url = request.nextUrl.clone();
    url.pathname = "/ge";
    return NextResponse.redirect(url);
  }

  if (isAdminPath && !isLoginPath) {
    const session = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (isAdminAuthenticated(session) || hasValidBasicAuth(request)) {
      return intlMiddleware(request);
    }

    const locale = getLocaleFromPath(pathname);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/admin/login`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}


export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
