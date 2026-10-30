import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  if (
    !request.auth &&
    request.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(
      new URL("/login", request.nextUrl)
    );
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};