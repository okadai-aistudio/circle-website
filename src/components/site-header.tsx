import Link from "next/link";
import { site } from "@/data/site";

const navigation = [
  { href: "/", label: "ホーム" },
  { href: "/about/", label: "私たちについて" },
  { href: "/activities/", label: "活動内容・予定" },
  { href: "/projects/", label: "制作物" },
  { href: "/join/", label: "参加案内" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="logo" href="/" aria-label={`${site.name} ホーム`}>
          <img src="/mascot.webp" width="48" height="48" alt="" />
          <span>岡大<span className="logo-blue">AI</span>Studio</span>
        </Link>
        <nav className="main-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
