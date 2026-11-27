import Link from "next/link";
import { scheduleHref, site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-intro">
          <Link href="/" className="footer-logo">{site.name}</Link>
          <p>{site.motto}</p>
          <small>{site.organization}</small>
        </div>
        <div>
          <p className="footer-title">サイト案内</p>
          <nav className="footer-links" aria-label="フッターナビゲーション">
            <Link href="/about/">私たちについて</Link>
            <Link href={scheduleHref}>月間活動予定</Link>
            <Link href="/projects/">制作物</Link>
            <Link href="/join/">参加案内</Link>
          </nav>
        </div>
        <div>
          <p className="footer-title">参加・お問い合わせ</p>
          <p className="footer-note">開催中は飛び込み参加歓迎。変更・中止の案内は公式Xへ。学生の方からの質問・相談は、公式X・InstagramのDMでも受け付けています。</p>
          <nav className="social-links" aria-label="岡大AIStudio公式SNS">
            <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="岡大AIStudio公式X（新しいタブ）">X <span aria-hidden="true">↗</span></a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="岡大AIStudio公式Instagram（新しいタブ）">Instagram <span aria-hidden="true">↗</span></a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="岡大AIStudioのGitHub（新しいタブ）">GitHub <span aria-hidden="true">↗</span></a>
          </nav>
          <p className="footer-note">大学関係者・企業・外部団体の方からのご連絡</p>
          <p className="footer-email">{site.externalContact}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>岡山大学の公認団体ではありません。</span>
      </div>
    </footer>
  );
}
