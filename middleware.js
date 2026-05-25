import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // Allow login page
  if (req.nextUrl.pathname === "/admin" || req.nextUrl.pathname === "/admin/") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  if (req.nextUrl.pathname === "/admin/login" || req.nextUrl.pathname === "/admin/(auth)/login") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.user_type !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Token is invalid or expired
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
