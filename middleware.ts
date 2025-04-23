import { NextRequest, NextFetchEvent } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);
const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  console.log("Request Pathname:", pathname); 

  if (isProtectedRoute(request)) {
    console.log("Protected Route: Admin area detected");
    return clerkMiddleware()(request, event);
  }

  if (pathname.startsWith('/en') || pathname.startsWith('/ge')) {
    console.log("Locale found in URL:", pathname);
    return intlMiddleware(request);
  }

  console.log("Default Locale middleware");
  return intlMiddleware(request);
}


export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
