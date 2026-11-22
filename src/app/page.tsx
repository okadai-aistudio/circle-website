const activities = [
  {
    number: "01",
    title: "AI開発",
    english: "CREATE",
    description: "AIを活用したアプリやサービスを、個人でもチームでもつくる。",
  },
  {
    number: "02",
    title: "情報共有",
    english: "LEARN",
    description: "最新のAIニュースや便利なツール、技術ノウハウを持ち寄る。",
  },
  {
    number: "03",
    title: "成果発表",
    english: "SHARE",
    description: "完成したものも、学んでいる途中のことも、気軽に発信する。",
  },
  {
    number: "04",
    title: "交流",
    english: "CONNECT",
    description: "勉強会やイベントで出会い、一緒に試したり話したりする。",
  },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="岡大AIStudio トップへ">
            <span className="brand-mark" aria-hidden="true">A<span>✳</span></span>
            <span>岡大<span className="brand-accent">AI</span>Studio</span>
          </a>
          <nav aria-label="メインナビゲーション" className="site-nav">
            <a href="#about">私たちについて</a>
            <a href="#activities">活動内容</a>
            <a href="#join" className="nav-join">参加案内 <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> OKAYAMA UNIVERSITY · AI COMMUNITY</p>
              <h1 id="hero-title">AIを学び、<br /><span>つくり、共有する。</span></h1>
              <p className="hero-lead">「ちょっと面白そう」から始めよう。</p>
              <p className="hero-description">岡大AIStudioは、AIに興味がある学生が集まって、自由に学び、開発し、交流するためのコミュニティです。</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#join">参加について見る <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#activities">どんな活動をしている？ <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-ring ring-outer" />
              <div className="art-ring ring-inner" />
              <div className="art-spark spark-one">✳</div>
              <div className="art-spark spark-two">✦</div>
              <div className="art-orb"><span>AI<span className="orb-dot">.</span></span></div>
              <div className="art-caption">Learn / Create / Share</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>2026.11 EST.</span>
            <span>岡山大学の学生有志による非公認サークル</span>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="container section-grid">
            <div><p className="section-kicker">ABOUT US / 私たちについて</p><h2 id="about-title">好奇心を、<br />次の一歩に。</h2></div>
            <div className="section-copy">
              <p>AIを使ったことがなくても、コードを書いたことがなくても大丈夫。興味を持ったことを試して、わかったことを共有して、また新しいことに挑戦する。</p>
              <p>岡大AIStudioは、初心者から経験者まで、それぞれのペースで参加できる場所を目指しています。</p>
              <p className="about-note">2026年11月設立 / 岡山大学の非公認AI開発サークル</p>
            </div>
          </div>
        </section>

        <section className="section activities-section" id="activities" aria-labelledby="activities-title">
          <div className="container">
            <div className="section-heading"><div><p className="section-kicker">WHAT WE DO / 活動内容</p><h2 id="activities-title">やってみたいを、<br />カタチにする。</h2></div><p>学ぶだけでも、つくるだけでも。<br />気になることから始めよう。</p></div>
            <div className="activity-grid">{activities.map((activity) => (
              <article className="activity-card" key={activity.number}>
                <div className="activity-meta"><span>{activity.number}</span><span>{activity.english}</span></div>
                <div><h3>{activity.title}</h3><p>{activity.description}</p></div>
                <span className="card-star" aria-hidden="true">✳</span>
              </article>
            ))}</div>
          </div>
        </section>

        <section className="section join-section" id="join" aria-labelledby="join-title">
          <div className="container join-inner">
            <div className="join-symbol" aria-hidden="true">✳</div>
            <p className="section-kicker">JOIN US / 参加案内</p>
            <h2 id="join-title">一緒に、<br />面白いことをしよう。</h2>
            <p>メンバー募集中！初心者から経験者まで大歓迎です。活動予定や参加案内はX・Instagramで発信しています。SNSの最新情報をご確認ください。</p>
            <a className="button button-dark" href="mailto:okadai.ai.dev@gmail.com?subject=%E5%B2%A1%E5%A4%A7AIStudio%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B">メールで問い合わせる <span aria-hidden="true">↗</span></a>
            <p className="join-hint">公式SNSのURLは確認後に掲載予定です。</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><a className="footer-brand" href="#top">岡大AIStudio <span>✳</span></a><a className="footer-mail" href="mailto:okadai.ai.dev@gmail.com">okadai.ai.dev@gmail.com ↗</a></div>
        <div className="container footer-bottom"><p>© {new Date().getFullYear()} 岡大AIStudio</p><p>岡山大学の公認団体ではありません。</p></div>
      </footer>
    </>
  );
}
