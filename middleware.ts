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

  // If user is already on a language-specific page, set cookie and continue
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

  // If on homepage or English pages
  if (pathname === '/' || (!pathname.startsWith('/de'))) {
    // Priority 1: Respect cookie if exists
    if (preferredLang === 'de') {
      return NextResponse.redirect(new URL('/de', request.url))
    }

    // Set English cookie if not on German page
    const response = NextResponse.next()
    if (preferredLang !== 'en') {
      response.cookies.set('preferred-lang', 'en', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      })
    }

    // Priority 2: Check Geo-IP (only if no cookie)
    if (!preferredLang) {
      const country = getCountryFromRequest(request)
      if (country && GERMAN_SPEAKING_COUNTRIES.includes(country)) {
        const redirectResponse = NextResponse.redirect(new URL('/de', request.url))
        redirectResponse.cookies.set('preferred-lang', 'de', {
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'lax',
        })
        return redirectResponse
      }

      // Priority 3: Check Browser Language (only if no cookie and no geo-match)
      const browserLang = getBrowserLanguage(request)
      if (browserLang === 'de') {
        const redirectResponse = NextResponse.redirect(new URL('/de', request.url))
        redirectResponse.cookies.set('preferred-lang', 'de', {
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'lax',
        })
        return redirectResponse
      }
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
