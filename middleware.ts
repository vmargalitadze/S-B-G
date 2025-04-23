import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ვამოწმებთ მხოლოდ admin როუტებს (/admin, /ge/admin, /en/admin და მათი ქვე-გვერდები)
  const isAdminPath = /^\/(ge|en)\/admin(\/.*)?$|^\/admin(\/.*)?$/.test(pathname);

  if (isAdminPath) {
    const basicAuth = request.headers.get("authorization");

    if (basicAuth) {
      const [user, pwd] = atob(basicAuth.split(" ")[1] || "").split(":");

      const validUser = process.env.BASIC_AUTH_USER;
      const validPassword = process.env.BASIC_AUTH_PASSWORD;

      if (user === validUser && pwd === validPassword) {
        return intlMiddleware(request); // წარმატებული ავტორიზაცია
      }
    }

    // თუ ავტორიზაცია არ იყო — დავაბრუნოთ 401 გვერდი
    const url = request.nextUrl.clone();
    url.pathname = "/api/basicauth";
    return NextResponse.rewrite(url);
  }

  // ყველა სხვა გვერდზე უბრალოდ i18n იმუშავოს
  return intlMiddleware(request);
}

// ყველა გვერდზე გაშვება, მაგრამ მხოლოდ შიგნით admin-ებს ვამოწმებთ
export const config = {
  matcher: ["/((?!_next|.*\\..*|favicon.ico).*)"],
};
