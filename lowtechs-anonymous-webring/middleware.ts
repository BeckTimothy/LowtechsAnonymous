import {SiteObject} from "@/app/lib/definitions";

export const revalidate = 900;
import { NextResponse, NextRequest } from 'next/server'
import { get } from '@vercel/edge-config'
//import webringData from './app/_data/webring.json'
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/discord')) {
        return NextResponse.redirect(new URL('https://discord.gg/GYjrTjBEYf'))
    }
    if (request.nextUrl.pathname.startsWith('/event')) {
        return NextResponse.redirect(new URL('https://www.eventbrite.com/e/albuquerque-lowtechs-anonymous-tickets-798974804147'))
    }
    const webringData: SiteObject[] = await fetchSitesWithRevalidation();
    if (request.nextUrl.pathname.startsWith('/next/')) {
        //get siteName from pathname
        let site = request.nextUrl.pathname.substring(6).toLowerCase()
        let sortedArr = Array.from(webringData);
        for(let i=0;i<sortedArr.length;i++){
            if(sortedArr[0].siteName !== site){
                let siteData = sortedArr.shift();
                if(siteData)sortedArr.push(siteData)
            }else{
                i=sortedArr.length;
            }

        }
        for(let i=1;i<sortedArr.length;i++){
            if(sortedArr[i].isLive && sortedArr[i].isValid){
                return NextResponse.redirect(new URL('https://' + sortedArr[i].siteName))
            }
        }
        //redirect to next site
        return NextResponse.rewrite(new URL('/webring', request.url))
    }
    if (request.nextUrl.pathname.startsWith('/prev/')) {
        //get siteName from pathname
        let site = request.nextUrl.pathname.substring(6).toLowerCase()
        let sortedArr = Array.from(webringData);
        for(let i=0;i<sortedArr.length;i++){
            if(sortedArr[0].siteName !== site){
                let siteData = sortedArr.shift();
                if(siteData)sortedArr.push(siteData)
            }else{
                sortedArr = sortedArr.reverse();
                i=sortedArr.length;
            }

        }

        for(let i=0;i<sortedArr.length;i++){
            if(sortedArr[i].isLive && sortedArr[i].isValid && sortedArr[i].siteName !== site){
                return NextResponse.redirect(new URL('https://' + sortedArr[i].siteName))
            }
        }

        //redirect to previous site or lander. not sure.
        return NextResponse.rewrite(new URL('/webring', request.url))
    }

    // No redirect found, continue without redirecting
    return NextResponse.next()
}
async function fetchSitesWithRevalidation(): Promise<SiteObject[]> {
    const res = await fetch("http://localhost:3000/api/webring", {
        next: { revalidate: 15 }
    } as any);

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}
export const config = {
    matcher: ['/next/:path*', '/prev/:path*', '/discord/:path*', '/event/:path*'],
}