import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const siteUrl = "https://okadai-aistudio.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "岡大AIStudio｜岡山大学の非公認AI開発サークル", template: "%s | 岡大AIStudio" },
  description: "岡大AIStudioは岡山大学の学生有志による非公認AI開発サークルです。AI開発、情報共有、成果発表、交流を通じて学び、つくり、共有します。",
  openGraph: { type: "website", locale: "ja_JP", siteName: "岡大AIStudio", images: [{ url: "/mascot.webp", width: 192, height: 192, alt: "岡大AIStudioのキャラクターアイコン" }] },
  robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ja"><body><a href="#main" className="skip-link">本文へ移動</a><SiteHeader/><main id="main" tabIndex={-1}>{children}</main><SiteFooter/></body></html>;
}