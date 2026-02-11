import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  if (lowerPath.startsWith("/project-details/")) {
    const url = request.nextUrl.clone();
    url.pathname = lowerPath.replace("/project-details/", "/portfolio/");
    url.search = search;
    return NextResponse.redirect(url);
  }

  if (pathname !== lowerPath) {
    const url = request.nextUrl.clone();
    url.pathname = lowerPath;
    url.search = search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|assets|favicon.png|manifest.json|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
