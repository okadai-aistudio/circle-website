import Link from "next/link";
import { scheduleHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/",
  "岡大AIStudioは岡山大学の学生有志による非公認AI開発サークルです。文理や経験を問わず、AIを学び、自由に開発し、成果を共有します。",
);

const features = [
  { title: "自由開発", detail: "作りたいものを、自分のペースで形にする。", href: "/activities/#development" },
  { title: "勉強会", detail: "AIやプログラミングなど、開発に役立つ知識を学ぶ。", href: "/activities/#study" },
  { title: "情報交換", detail: "ニュースやアイデアを持ち寄り、開発の相談をする。", href: "/activities/#exchange" },
  { title: "成果発表", detail: "希望する人が、作品や開発中の発見を共有する。", href: "/activities/#showcase" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">OKAYAMA UNIVERSITY · AI COMMUNITY</p>
            <p className="small-chip">2026年11月設立 / 非公認サークル</p>
            <h1>誰もが、<br /><em>自由に創造できる。</em></h1>
            <p className="hero-subtitle">{site.tagline}</p>
            <p className="hero-body">岡大AIStudioは、文理や経験を問わず、AIやものづくりに興味を持つ学生が気軽に集まり、自由に開発できる場所を目指しています。</p>
            <div className="hero-cta">
              <Link href={scheduleHref} className="primary-link">活動予定を見る <span aria-hidden="true">→</span></Link>
              <Link href="/about/" className="plain-link">岡大AIStudioについて <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="mascot-disc">
              <img src="/mascot-hero.webp" width="1200" height="1200" alt="青と黄色の回路模様の帽子をかぶった岡大AIStudioのキャラクター" />
            </div>
            <span className="decoration decoration-one" aria-hidden="true" />
            <span className="decoration decoration-two" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="content-section tinted home-join">
        <div className="container highlight-inner">
          <div>
            <h2>飛び込み参加、大歓迎。</h2>
            <p>活動開催中は、事前連絡なしで参加できます。参加前に日時・場所と公式Xの最新案内を確認し、施設の利用条件・定員に従ってお越しください。</p>
          </div>
          <Link href="/join/" className="secondary-link">参加案内を見る <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-top"><h2>岡大AIStudioの活動</h2></div>
          <div className="feature-grid">
            {features.map((feature) => (
              <Link className="feature-card" key={feature.href} href={feature.href}>
                <h3>{feature.title}</h3>
                <p>{feature.detail}</p>
                <span className="feature-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <div className="container highlight-inner">
          <div>
            <h2>メンバーの制作物</h2>
            <p>メンバーの個人・共同開発の作品を紹介します。最初の掲載作品は、発起人が個人で開発したWebサービス「回答します」です。</p>
          </div>
          <Link href="/projects/" className="secondary-link">制作物を見る <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
