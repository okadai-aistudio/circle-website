import Link from "next/link";
import PageHeading from "@/components/page-heading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/about/",
  "岡大AIStudioの設立背景、知能の民主化、実践を通じた学び、理念と7つの価値観を紹介します。",
  "私たちについて",
);

const values = [
  { name: "自由", description: "制作の目的や分野を、自分で選ぶ。" },
  { name: "開放性", description: "経験や文理を問わず、興味を持った人を歓迎する。" },
  { name: "分野横断", description: "分野の異なる仲間が、それぞれの知識や興味を持ち寄る。" },
  { name: "実践", description: "制作や試行錯誤を通じて学ぶ。" },
  { name: "創造", description: "枠にとらわれず、自分の発想を形にする。" },
  { name: "交流", description: "日常的に集まり、アイデアや発見を共有する。" },
  { name: "着実な挑戦", description: "自分のペースで、一つずつ挑戦を重ねる。" },
];

export default function About() {
  return (
    <>
      <PageHeading english="ABOUT US" title="私たちについて" description={site.motto} />

      <section className="content-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2>日常の中で、仲間とつくる場所。</h2>
          </div>
          <div className="prose">
            <p>岡大AIStudioは、2026年11月に岡山大学の学生有志が設立した非公認のAI開発サークルです。普段から仲間と出会い、意見を交換し、一緒に作れる場所を目指して立ち上げました。</p>
          </div>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="container split-layout">
          <div><h2>情報の民主化から、知能の民主化へ。</h2></div>
          <div className="prose">
            <p>インターネットが情報の民主化をもたらしたように、私たちはAIが知能の民主化を進めていると考えています。専門知識や経験の壁を越え、AIを活用して自分の発想を形にすることに挑戦できる環境をつくりたいと考えています。</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">LEARNING BY DOING</p>
            <h2>まず、作ってみる。</h2>
          </div>
          <div className="prose">
            <p>岡大AIStudioでは、実践を通じた学びを大切にしています。経験や知識がなくても、AIを活用しながら、自分が作りたいものの開発に挑戦できます。</p>
            <p>実際に開発する中で疑問や課題に出会い、その解決に必要な知識や技術を身につけていきます。勉強会や仲間との情報交換も、そうした開発を支えるための活動です。</p>
            <p>学ぶことから始めても、いきなり開発から始めても構いません。自分の興味や好奇心を出発点に、自由に挑戦することを大切にしています。</p>
          </div>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="container">
          <h2>理念・目的・ビジョン</h2>
          <div className="three-grid">
            <div className="value-card">
              <h3>理念</h3>
              <p>{site.motto}</p>
            </div>
            <div className="value-card">
              <b>MISSION</b>
              <h3>目的</h3>
              <p>AIによって広がった創造の可能性を誰もが活用し、自分の発想を自由に形にできる環境をつくる。</p>
            </div>
            <div className="value-card">
              <b>VISION</b>
              <h3>ビジョン</h3>
              <p>専門分野や経験の壁を越え、学生が日常的に気軽に集まり、交流し、自由に開発できるコミュニティを目指す。</p>
            </div>
          </div>

          <h2 className="values-heading">7つの価値観</h2>
          <ul className="three-grid values-grid" role="list">
            {values.map((value) => (
              <li className="value-card" key={value.name}>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">FUTURE</p>
            <h2>これからの活動</h2>
          </div>
          <div className="prose">
            <p>自由開発と交流を土台に、勉強会や成果発表、共同開発の機会を充実させていきます。将来的にはハッカソン、他大学・企業・地域との交流、希望者への起業支援にも取り組むことを目指します。</p>
            <Link href="/activities/" className="text-arrow">活動内容と月間予定を見る <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="container">
          <h2>団体概要</h2>
          <dl className="organization-details">
            <dt>団体名</dt><dd>{site.name}</dd>
            <dt>設立</dt><dd>2026年11月</dd>
            <dt>団体区分</dt><dd>{site.organization}</dd>
          </dl>
        </div>
      </section>
    </>
  );
}
