import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Countries that should see German version
const GERMAN_SPEAKING_COUNTRIES = ['DE', 'AT', 'CH']

// Simple geo-detection based on Vercel headers (works on Vercel deployment)
function getCountryFromRequest(request: NextRequest): string | null {
  // Vercel provides geo data in headers
  const country = request.headers.get('x-vercel-ip-country')
  return country
}

// Get browser language preference
function getBrowserLanguage(request: NextRequest): string | null {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return null

  // Parse accept-language header (e.g., "de-DE,de;q=0.9,en;q=0.8")
  const languages = acceptLanguage.split(',').map(lang => {
    const [code] = lang.trim().split(';')
    return code.toLowerCase()
  })

  // Check if German is preferred
  const hasGerman = languages.some(lang => lang.startsWith('de'))
  return hasGerman ? 'de' : 'en'
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

  // Check for existing language cookie
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
  // Just set the cookie if not already set
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
