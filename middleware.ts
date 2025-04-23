import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin, /ge/admin, /en/admin და ქვეგზების იდენტიფიცირება
  const isAdminPath = /^\/(ge|en)(\/admin.*)?$|^\/admin(\/.*)?$/.test(pathname);

  if (isAdminPath) {
    const basicAuth = request.headers.get("authorization");

    if (basicAuth) {
      const [user, pwd] = atob(basicAuth.split(" ")[1] || "").split(":");

      const validUser = process.env.BASIC_AUTH_USER;
      const validPassword = process.env.BASIC_AUTH_PASSWORD;

      if (user === validUser && pwd === validPassword) {
        return intlMiddleware(request);
      }
    }

    // Basic auth წარუმატებლობის შემთხვევაში გადაამისამართე API გვერდზე
    const url = request.nextUrl.clone();
    url.pathname = "/api/basicauth";
    return NextResponse.rewrite(url);
  }

  // სხვა ყველაფერზე მხოლოდ i18n
  return intlMiddleware(request);
}

// ყველა როუტზე გავუშვათ middleware გარდა სისტემური ფაილებისა
export const config = {
  matcher: ["/admin/:path*", "/ge/admin/:path*", "/en/admin/:path*"],
};
