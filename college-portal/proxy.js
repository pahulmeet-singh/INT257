import { NextResponse } from "next/server";

export function proxy(request) {
    const pathName = request.nextUrl.pathname;
    const protectedPaths = ["/dashboard", "/student", "/teacher", "/admin"];
    const needsLogin = protectedPaths.some(
        (path) => 
            pathName === path || 
            pathName.startsWith(path + "/")
    );
    const hasSessionCookie = request.cookies.has("college-session");

    if (needsLogin && !hasSessionCookie) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        )
    }
    return NextResponse.next();
}