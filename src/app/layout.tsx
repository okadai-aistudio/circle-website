import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "岡大AIStudio | AIを学び、つくり、共有する。",
  description:
    "岡山大学の学生有志による非公認AI開発サークル「岡大AIStudio」。AI開発、情報共有、成果発表、交流を通じて、学び、つくり、共有します。",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
