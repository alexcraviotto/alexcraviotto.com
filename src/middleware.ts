'use server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'

let locales = ['en', 'es']

function getLocale(request: NextRequest) {
    
    let acceptLanguage = request.headers.get('accept-language');
    if (!acceptLanguage) return 'en';
    let languages = new Negotiator({ headers: { 'accept-language': acceptLanguage } }).languages();
    let languageCodes = languages.map(language => language.split('-')[0]) 
    let defaultLocale = 'en'
    return match(languageCodes, locales, defaultLocale) 
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.includes('.png') || pathname.includes('.xml') || pathname.includes('.jpg') || pathname.includes('.jpeg') || pathname.includes('.svg') || pathname.includes('.gif') || pathname.includes('.webp') || pathname.includes('.ico') || pathname.includes('.mp3')){
        return
    }
    if (pathname.includes('api')){
        return
    }
    
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    if (pathnameHasLocale) return
    return Response.redirect(request.nextUrl.toString(), 302)
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
}