import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url), 301)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|api).+)'],
}
