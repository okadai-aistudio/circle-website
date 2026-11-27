import Link from "next/link";
import PageHeading from "@/components/page-heading";
import { scheduleHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/join/",
  "岡山大学の学生は文理や経験を問わず、岡大AIStudioの活動開催中に事前連絡なしで参加できます。日時・場所の確認方法をご案内します。",
  "参加案内",
);

export default function Join() {
  return (
    <>
      <PageHeading english="JOIN US" title="参加案内" description="思い立ったら、気軽に参加しよう。" />
      <section className="content-section">
        <div className="container split-layout">
          <div><h2>飛び込み参加、大歓迎。</h2></div>
          <div className="prose">
            <p>岡山大学の学生なら、文理・学部・学年・経験を問わず参加できます。初めての方も、作りたいものがまだ決まっていない方も歓迎です。</p>
            <p>活動開催中は、事前予約・事前連絡は不要です。途中参加・途中退出ができ、都合の合う回だけ参加できます。施設の利用条件・定員に従ってご参加ください。</p>
          </div>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="container split-layout">
          <div><h2>参加までの流れ</h2></div>
          <ol className="join-steps">
            <li><Link href={scheduleHref}>月間活動予定を開く</Link></li>
            <li>参加したい回の日時・場所を確認する</li>
            <li><a href={site.x} target="_blank" rel="noopener noreferrer">公式Xで場所・日時の変更や中止のお知らせを確認する <span aria-hidden="true">↗</span></a></li>
            <li>開催時間中に、会場へ直接行く</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-layout">
          <div><h2>学生の方からの質問・相談</h2></div>
          <div className="prose">
            <p>聞きたいことがあるときは、公式X・InstagramのDM（ダイレクトメッセージ）をご利用ください。</p>
            <div className="join-socials">
              <a href={site.x} target="_blank" rel="noopener noreferrer">Xで質問・相談する <span aria-hidden="true">↗</span></a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagramで質問・相談する <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          <div>
            <h2>大学・企業・外部団体の方へ</h2>
            <p>ご連絡は、以下のメールアドレスへお願いいたします。</p>
          </div>
          <p className="email-text">{site.externalContact}</p>
        </div>
      </section>
    </>
  );
}
