import { NextRequest, NextFetchEvent } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);
const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // 🛡️ თუ არის ადმინისტრაციის გზები, შემოწმება Clerk-ით
  if (isProtectedRoute(request)) {
    return clerkMiddleware()(request, event);
  }

  // 🌐 ენას URL-ში თუ აქვს, არ შეცვლის მას
  if (pathname.startsWith('/en') || pathname.startsWith('/ge')) {
    return intlMiddleware(request);
  }

  // 🌀 სხვა შემთხვევაში, intlMiddleware დააყენებს ენას
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
