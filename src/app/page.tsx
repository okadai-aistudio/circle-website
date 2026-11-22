import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "ホーム", alternates: { canonical: "/" } };
const features = [
  { num: "01", title: "AI開発", detail: "アイデアをアプリやサービスに。", href: "/activities/" },
  { num: "02", title: "情報共有", detail: "AIのニュースや技術を持ち寄る。", href: "/activities/" },
  { num: "03", title: "成果発表", detail: "学びや制作物をみんなに紹介。", href: "/projects/" },
  { num: "04", title: "交流", detail: "一緒に試し、話し、学び合う。", href: "/join/" },
];
export default function Home() {return <>
  <section className="home-hero"><div className="container hero-grid"><div className="hero-content">
    <p className="eyebrow">OKAYAMA UNIVERSITY · AI COMMUNITY</p><p className="small-chip">2026年11月設立 / 非公認サークル</p>
    <h1>AIを学び、<br/><em>つくり、共有する。</em></h1>
    <p className="hero-subtitle">「ちょっと面白そう」から始めよう。</p>
    <p className="hero-body">岡大AIStudioは、岡山大学の学生有志によるAI開発サークル。初心者も経験者も、自分のペースで学び、つくり、交流できる場所を目指しています。</p>
    <div className="hero-cta"><Link href="/about/" className="primary-link">岡大AIStudioについて <span aria-hidden="true">↗</span></Link><Link href="/join/" className="plain-link">参加案内を見る <span aria-hidden="true">→</span></Link></div>
  </div><div className="hero-visual"><div className="mascot-disc"><img src="/mascot.webp" width="440" height="440" alt="青と黄色の回路模様の帽子をかぶった岡大AIStudioのキャラクター"/></div><span className="decoration decoration-one" aria-hidden="true"/><span className="decoration decoration-two" aria-hidden="true"/></div></div></section>
  <section className="home-section"><div className="container"><div className="section-top"><div><p className="eyebrow">WHAT WE DO</p><h2>好きなことから、<br/>可能性を広げよう。</h2></div><p>学ぶことも、つくることも。<br/>気軽な一歩を大切にしています。</p></div><div className="feature-grid">{features.map(feature => <Link className="feature-card" key={feature.num} href={feature.href}><span className="feature-num">{feature.num}</span><h3>{feature.title}</h3><p>{feature.detail}</p><span className="feature-arrow" aria-hidden="true">↗</span></Link>)}</div></div></section>
  <section className="highlight-section"><div className="container highlight-inner"><div><p className="eyebrow">OUR PROJECTS</p><h2>つくったものを、<br/>公開しよう。</h2><p>メンバーの作品や取り組みを紹介しています。最初の作品は、Webサービス「回答します」。</p></div><Link href="/projects/" className="secondary-link">制作物を見る <span aria-hidden="true">↗</span></Link></div></section>
  </>}