import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Check if request is from a bot/crawler
function isBot(request: NextRequest): boolean {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const botPatterns = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest',
    'applebot',
    'semrushbot',
    'ahrefsbot',
  ]
  return botPatterns.some(bot => userAgent.includes(bot))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/fonts') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next()
  }

  // IMPORTANT: Never redirect or modify responses for bots/crawlers
  // They must see the page directly with 200 status
  if (isBot(request)) {
    return NextResponse.next()
  }

  // For regular users: set language preference cookie (no redirects!)
  const preferredLang = request.cookies.get('preferred-lang')?.value

  // If user is on /en path, set English cookie
  if (pathname.startsWith('/en')) {
    const response = NextResponse.next()
    if (preferredLang !== 'en') {
      response.cookies.set('preferred-lang', 'en', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      })
    }
    return response
  }

  // If user is on /de path, set German cookie
  if (pathname.startsWith('/de')) {
    const response = NextResponse.next()
    if (preferredLang !== 'de') {
      response.cookies.set('preferred-lang', 'de', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      })
    }
    return response
  }

  // For homepage / - default is German (no redirect needed)
  if (pathname === '/') {
    const response = NextResponse.next()
    if (!preferredLang) {
      response.cookies.set('preferred-lang', 'de', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      })
    }
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, videos, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|ico)).*)',
  ],
}
