// import { NextRequest, NextFetchEvent } from 'next/server';
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import createIntlMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// const intlMiddleware = createIntlMiddleware(routing);
// const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//   const { pathname } = request.nextUrl;

//   // 🛡️ პირველ რიგში, თუ admin protected გზაზეა, დააბრუნე Clerk Middleware
//   if (isProtectedRoute(request)) {
//     return clerkMiddleware()(request, event);
//   }

//   // 🌐 ენას უკვე URL-ში თუ აქვს, პირდაპირ გაეშვას (შენარჩუნდება სწორი ლოკალი)
//   if (pathname.startsWith('/en') || pathname.startsWith('/ge')) {
//     return intlMiddleware(request);
//   }

//   // 🌀 ყველა სხვა შემთხვევაში, გაუშვი intlMiddleware ენაზე გადასაყვანად
//   return intlMiddleware(request);
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };
import { NextRequest, NextFetchEvent } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);
const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // 🛡️ პირველ რიგში, თუ admin protected გზაზეა, დააბრუნე Clerk Middleware
  if (isProtectedRoute(request)) {
    return clerkMiddleware()(request, event);
  }

  // 🌐 ენას უკვე URL-ში თუ აქვს, პირდაპირ გაეშვას (შენარჩუნდება სწორი ლოკალი)
  if (pathname.startsWith('/en') || pathname.startsWith('/ge')) {
    return intlMiddleware(request);
  }

  // 🌀 ყველა სხვა შემთხვევაში, გაუშვი intlMiddleware ენაზე გადასაყვანად
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
