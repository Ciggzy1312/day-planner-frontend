import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const homeUrl = new URL('/dashboard', request.url);
    const loginUrl = new URL('/auth/login', request.url);

    if (request.nextUrl.pathname.startsWith('/auth')) {
        if (request.cookies.get('token')) {
            return NextResponse.redirect(homeUrl);
        }
        return NextResponse.next();
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!request.cookies.get('token')) {
            return NextResponse.redirect(loginUrl);
        }
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
/*export const config = {
    matcher: '/:path*',
};*/