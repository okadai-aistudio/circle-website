import Link from "next/link";
export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-layout">
    <div className="footer-intro"><Link href="/" className="footer-logo">岡大AIStudio</Link><p>AIを学び、つくり、共有する。</p><small>岡山大学の学生有志による非公認AI開発サークル</small></div>
    <div><p className="footer-title">サイト案内</p><nav className="footer-links" aria-label="フッターナビゲーション"><Link href="/about/">私たちについて</Link><Link href="/activities/">活動内容</Link><Link href="/projects/">制作物</Link><Link href="/join/">参加案内</Link></nav></div>
    <div><p className="footer-title">お問い合わせ・SNS</p><p className="footer-email">okadai.ai.dev@gmail.com</p><p className="footer-note">活動予定と参加案内はX・Instagramでお知らせしています。公式アカウントのリンクは確認後に掲載します。</p><a className="footer-github" href="https://github.com/okadai-aistudio" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} 岡大AIStudio</span><span>岡山大学の公認団体ではありません。</span></div></footer>;
}