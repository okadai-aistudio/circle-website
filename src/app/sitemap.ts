export const dynamic = "force-static";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {const base="https://okadai-aistudio.com"; return ["/","/about/","/activities/","/projects/","/join/"].map(route=>({url:base+route,changeFrequency:"monthly" as const,priority:route==="/"?1:0.7}));}